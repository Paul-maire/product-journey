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
      'linear-create': 'linear-gradient(135deg, #FCFCFF 0%, #E4E4E7 100%)'
    },
    boxShadow: {
      card: '-20px 20px 40px rgba(216, 216, 219, 0.2), 20px -20px 40px rgba(216, 216, 219, 0.2), -20px -20px 40px rgba(255, 255, 255, 0.9), 20px 20px 50px rgba(216, 216, 219, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(216, 216, 219, 0.5)',
      button: '-11px 11px 22px rgba(214, 214, 216, 0.2), 11px -11px 22px rgba(214, 214, 216, 0.2), -11px -11px 22px rgba(255, 255, 255, 0.9), 11px 11px 28px rgba(214, 214, 216, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(214, 214, 216, 0.5)',
      'button-pressed': '2px 2px 3px rgba(255, 255, 255, 0.3), -2px -2px 3px rgba(204, 204, 207, 0.5), inset -56px 56px 112px rgba(204, 204, 207, 0.2), inset 56px -56px 112px rgba(204, 204, 207, 0.2), inset -56px -56px 112px rgba(255, 255, 255, 0.9), inset 56px 56px 140px rgba(204, 204, 207, 0.9)',
      create: '-26px 26px 52px rgba(204, 204, 207, 0.2), 26px -26px 52px rgba(204, 204, 207, 0.2), -26px -26px 52px rgba(255, 255, 255, 0.9), 26px 26px 65px rgba(204, 204, 207, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(204, 204, 207, 0.5)'
    },
    fontFamily: {
      'sans': ['Avenir', 'sans-serif'],
    },
  },
  variants: {},
  plugins: []
}
