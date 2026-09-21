import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { existsSync } from 'node:fs'
import process from 'node:process'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
// Vite treats '#' as a URL fragment. SUBST gives the same folder a safe
// Windows drive alias without moving files or relaxing server.fs.strict.
function resolveRoot() {
  if (process.platform !== 'win32' || !projectRoot.includes('#')) return projectRoot
  const options = { encoding: 'utf8', windowsHide: true }
  const target = projectRoot.replace(/[\\/]+$/, '')
  const mappings = execFileSync('subst.exe', [], options)
  for (const line of mappings.split(/\r?\n/)) {
    const match = line.match(/^([A-Z]:)\\: => (.+)$/i)
    if (match && match[2].toLowerCase() === target.toLowerCase()) return match[1] + '/'
  }
  for (const letter of 'ZYXWVUTSRQPONMLKJIHGFED') {
    if (!existsSync(letter + ':\\')) {
      execFileSync('subst.exe', [letter + ':', target], options)
      return letter + ':/'
    }
  }
  throw new Error('Vite needs a path without #, but no free drive letter is available.')
}
const root = resolveRoot()

// https://vite.dev/config/
export default defineConfig({
  root,
  resolve: { preserveSymlinks: true },
  plugins: [react()],
})
