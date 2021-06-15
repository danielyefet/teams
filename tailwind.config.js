module.exports = {
  purge: ['./src/pages/**/*.{js,jsx}', './src/components/**/*.{js,jsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'teams-purple': '#6264A7',
        'teams-purple-light': '#898bc5',
        'teams-bg-dark': '#201F1F',
        'teams-bg-light': '#F5F5F5',
        'teams-status-available': '#6BB800',
      },
    },
    fontFamily: {
      teams: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    screens: {
      sm: '640px',
      md: '768px',
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [],
};
