/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    colors: {
      primary: {
        default: '#F0F0F3',
      },
      dark : '#000000',
      separator: '#DBDBE9',
    },
    boxShadow: {
      flat: '-10px 10px 20px rgba(216, 216, 219, 0.2), 10px -10px 20px rgba(216, 216, 219, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9), 10px 10px 25px rgba(216, 216, 219, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(216, 216, 219, 0.5)',
      pressed: '-10px 10px 20px rgba(216, 216, 219, 0.2), 10px -10px 20px rgba(216, 216, 219, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9), 10px 10px 25px rgba(216, 216, 219, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(216, 216, 219, 0.5)',
      convex: '-10px 10px 20px rgba(204, 204, 207, 0.2), 10px -10px 20px rgba(204, 204, 207, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9), 10px 10px 25px rgba(204, 204, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(204, 204, 207, 0.5)',
      concave: '-10px 10px 20px rgba(204, 204, 207, 0.2), 10px -10px 20px rgba(204, 204, 207, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9), 10px 10px 25px rgba(204, 204, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(204, 204, 207, 0.5)'
    },
    fontFamily: {
      'sans': ['Avenir', 'sans-serif'],
    },
  },
  variants: {},
  plugins: []
}
