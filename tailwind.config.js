module.exports = {
  purge: {
    content: ['./src/pages/**/*.jsx', './src/components/**/*.jsx'],
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'teams-purple': '#6264A7',
        'teams-purple-light': '#898bc5',
        'teams-bg-dark': '#201F1F',
        'teams-bg-light': '#F5F5F5',
        'teams-status-available': '#6BB800',
        twitter: '#1DA1F2',
      },
    },
    fontFamily: {
      teams: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      meme: '640px',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['disabled'],
      cursor: ['disabled'],
      margin: ['last'],
      opacity: ['disabled'],
    },
  },
  plugins: [],
};
