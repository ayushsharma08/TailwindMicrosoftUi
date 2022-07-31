/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  corePlugins: {
    container: false
  },
  theme: {
    container: {
      width: '90%',
      center: true,
      maxWidth: '110px',
      margin: 'auto',
    },
    padding: {
      DEFAULT: '1rem',
      sm: '2rem',
      lg: '4rem',
      xl: '5rem',
      '2xl': '6rem',
    },
    extend: {
      // backgroundImage: {
      //   'hero-pattern': "url('img/slide1.png')",
      //   // 'footer-texture': "url('/img/footer-texture.png')",
      // }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.container': {
          maxWidth: '1100px',
          width: '90%',
          margin: 'auto',

          // '@screen sm': {
          //   maxWidth: '600px',
          // },
          // '@screen md': {
          //   maxWidth: '700px',
          // },
          // '@screen lg': {
          //   maxWidth: '800px',
          // },
          // '@screen xl': {
          //   maxWidth: '900px',
          // },
        },
        // 'ul': {
        //   display: 'flex',
        // },
        // '.btn': {
        //   fontWeight: 'Bold',
        //   backgroundColor: 'black',
        //   padding: '2px 4px',
          
        // },
      
       
      })
    }
  ]
}
