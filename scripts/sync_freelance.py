import re
import json
from pathlib import Path
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
SRC_DIR = ROOT / "Freelance"
OUT_THUMBS = ROOT / "public" / "freelance-gallery" / "thumbs"
OUT_FULL = ROOT / "public" / "freelance-gallery" / "full"
MANIFEST_TS = ROOT / "src" / "data" / "freelanceGallery.ts"

OUT_THUMBS.mkdir(parents=True, exist_ok=True)
OUT_FULL.mkdir(parents=True, exist_ok=True)


def clean_title(rel_path: Path) -> str:
    stem = rel_path.stem
    text = stem.replace("_", " ").replace("-", " ")
    text = re.sub(r"\s+", " ", text).strip()
    text = re.sub(r"([a-z])([A-Z])", r"\1 \2", text)
    text = re.sub(r"(\w)\(", r"\1 (", text)
    words = []
    for w in text.split(" "):
        if w.isupper() and len(w) > 1:
            words.append(w)
        elif w.startswith("(") and w.endswith(")") and w[1:-1].isupper():
            words.append(w)
        else:
            words.append(w.capitalize() if w.isalpha() else w)
    title = " ".join(words)
    if "VisitingCards" in rel_path.parts:
        return f"Visiting Card — {title}"
    return title


def slugify(rel_path: Path) -> str:
    raw = "__".join(rel_path.with_suffix("").parts)
    return re.sub(r"[^a-zA-Z0-9_-]+", "-", raw).strip("-").lower()


def main() -> None:
    if not SRC_DIR.exists():
        print(f"No Freelance folder found at {SRC_DIR}")
        return

    all_files = sorted(
        [
            p
            for p in SRC_DIR.rglob("*")
            if p.is_file() and p.suffix.lower() in {".png", ".jpg", ".jpeg", ".webp"}
        ],
        key=lambda p: (1 if "VisitingCards" in p.parts else 0, p.name.lower()),
    )

    expected_webp_names = set()
    items = []

    for idx, src_path in enumerate(all_files, start=1):
        rel = src_path.relative_to(SRC_DIR)
        slug = slugify(rel)
        webp_name = f"{slug}.webp"
        expected_webp_names.add(webp_name)

        thumb_path = OUT_THUMBS / webp_name
        full_path = OUT_FULL / webp_name
        src_mtime = src_path.stat().st_mtime

        needs_build = (
            not thumb_path.exists()
            or not full_path.exists()
            or thumb_path.stat().st_mtime < src_mtime
            or full_path.stat().st_mtime < src_mtime
        )

        with Image.open(src_path) as im:
            im = ImageOps.exif_transpose(im)
            orig_w, orig_h = im.size

            if needs_build:
                if im.mode not in ("RGB", "RGBA"):
                    im = im.convert("RGBA")

                full_im = im.copy()
                full_im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
                full_im.save(full_path, "WEBP", quality=86, method=4)

                thumb_im = im.copy()
                thumb_im.thumbnail((760, 760), Image.Resampling.LANCZOS)
                thumb_im.save(thumb_path, "WEBP", quality=82, method=4)

        category = "Visiting Cards" if "VisitingCards" in rel.parts else "Posters"
        items.append(
            {
                "id": slug,
                "index": idx,
                "title": clean_title(rel),
                "filename": src_path.name,
                "category": category,
                "thumbUrl": f"/freelance-gallery/thumbs/{webp_name}",
                "fullUrl": f"/freelance-gallery/full/{webp_name}",
                "width": orig_w,
                "height": orig_h,
            }
        )

    for folder in (OUT_THUMBS, OUT_FULL):
        for existing in folder.glob("*.webp"):
            if existing.name not in expected_webp_names:
                existing.unlink()

    ts_content = (
        "export interface FreelancePosterItem {\n"
        "  id: string;\n"
        "  index: number;\n"
        "  title: string;\n"
        "  filename: string;\n"
        "  category: 'Posters' | 'Visiting Cards';\n"
        "  thumbUrl: string;\n"
        "  fullUrl: string;\n"
        "  width: number;\n"
        "  height: number;\n"
        "}\n\n"
        f"export const freelanceGalleryItems: FreelancePosterItem[] = {json.dumps(items, indent=2)};\n"
    )

    if not MANIFEST_TS.exists() or MANIFEST_TS.read_text(encoding="utf-8") != ts_content:
        MANIFEST_TS.write_text(ts_content, encoding="utf-8")


if __name__ == "__main__":
    main()
