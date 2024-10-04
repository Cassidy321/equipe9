/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // Assure-toi que ton fichier HTML est inclus
    "./src/**/*.{js,jsx,ts,tsx}", // Inclut tous les fichiers JavaScript et TypeScript dans le dossier src
  ],
  theme: {
    extend: {
      fontWeight: {
        black: '900',
        bold: '700',
        book: '400',
        extraLight: '200',
        light: '300',
        medium: '500',
        regular: '400',
        thin: '100',
        ultra: '800',
      }, 
      colors: {
      },
      backgroundColor: {
        'bg-green': '#1E4347',    // Couleur de fond vert
        'bg-white': '#FFFFFF',    // Couleur de fond blanc
        'bg-apple': '#639D87', // Couleur de fond vert-pomme
      },
      screens: {
        'xs': '480px',  // Point de rupture supplémentaire pour les très petits écrans
        'sm': '640px',  // Smartphones
        'md': '768px',  // Tablettes
        'lg': '1024px', // Petits ordinateurs portables
        'xl': '1280px', // Grands ordinateurs portables
        '2xl': '1536px', // Très grands écrans
      },
      spacing: {
        '100px': '100px',
        '50px' : '50px',
        '20px': '20px',
        '10px': '10px',
      },
      borderRadius: {
        's-full': '9999px', // Bordure arrondie complète
        's-circle': '21px',
        's-md': '8px', // Bordure arrondie moyenne
        's-mid': '12px',
        's-lg': '16px', // Bordure arrondie large
      },
      borderWidth: {
        '1':'1px',
        '2': '2px',
        '3': '3px',
        '6': '6px',
        '12': '12px',
      },
      borderColor: {
        primary: '#1E4347',  // Couleur principale
        secondary: '#639D87', // Couleur secondaire
        accent: '#FFFFFF', // Couleur d'accent
      },
      gap: {
        '4px': '4px',
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '40px': '40px',
        '48px': '48px',
        '56px': '56px',
        '64px': '64px',
      },
      backgroundImage: {
        'catalogue': "url('/src/assets/images/catalogue-background.jpg')",
      },
      fontSize: {
        'xs': '12px',
        'sm': '14px',
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
        '5xl': '48px',
        '6xl': '64px',
      },
    },
  },
  plugins: [],
};
