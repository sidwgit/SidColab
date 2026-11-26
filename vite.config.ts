import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

function freelanceFolderSyncPlugin(): Plugin {
  const freelanceDir = path.resolve(rootDir, 'Freelance');
  const syncScript = path.resolve(rootDir, 'scripts/sync_freelance.py');

  const runSync = () => {
    try {
      execFileSync('python', [syncScript], { stdio: 'inherit' });
    } catch {
      // Skip silently if Python/Pillow is unavailable in a remote CI environment
    }
  };

  return {
    name: 'freelance-folder-sync',
    buildStart() {
      runSync();
    },
    configureServer(server) {
      let timer: ReturnType<typeof setTimeout> | null = null;
      server.watcher.add(freelanceDir);
      const triggerSync = (changedPath: string) => {
        if (!changedPath.startsWith(freelanceDir)) return;
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          runSync();
        }, 250);
      };
      server.watcher.on('add', triggerSync);
      server.watcher.on('unlink', triggerSync);
      server.watcher.on('change', triggerSync);
    },
  };
}

export default defineConfig({
  plugins: [react(), freelanceFolderSyncPlugin()],
});
