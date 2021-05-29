module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'screen': '100vh'
    },
    maxHeight: {
      '24': '6rem',
      'content': 'fit-content'
    },
    minWidth: {
      '64': '16rem'
    },
    maxWidth: {
      '46': '46rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%'
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
