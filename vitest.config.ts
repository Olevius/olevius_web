import { defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        environment: 'jsdom',
        globals: true,
        coverage: {
            enabled: true, // 👈 Ensures coverage is ALWAYS on for UI and CLI
            reporter: ['text', 'html'], // 👈 HTML for UI, text for CLI output
            reportsDirectory: './coverage', // (optional) where html report goes
            provider: 'v8' // or 'v8'
        }
        // Vitest will use the same `resolve.alias` as Vite automatically,
        // so you don't need to repeat it here.
    },
})
