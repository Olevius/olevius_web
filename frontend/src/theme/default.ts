export const defaultTheme = {
    colors: {
        primary: '#1976d2',
        secondary: '#424242',
        background: '#f5f5f5',
        surface: '#ffffff',
        error: '#d32f2f',
        warning: '#ffa000',
        info: '#0288d1',
        success: '#388e3c',
        text: {
            primary: '#212121',
            secondary: '#757575',
            disabled: '#bdbdbd',
        },
    },
    spacing: (factor: number) => `${factor * 8}px`,
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        fontSize: 16,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        h1: { fontSize: '2.5rem', fontWeight: 500 },
        h2: { fontSize: '2rem', fontWeight: 500 },
        h3: { fontSize: '1.75rem', fontWeight: 500 },
        h4: { fontSize: '1.5rem', fontWeight: 500 },
        h5: { fontSize: '1.25rem', fontWeight: 500 },
    }
}