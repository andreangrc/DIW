/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components//.{html,js}',
    './pages/**/.{html,js}',
    './index.html',],
    variants: {
      extend: {
          animation:['responsive', 'hover', 'group-hover'],
          fontSize:['responsive', 'hover', 'group-hover'],
          transform:['responsive', 'hover', 'group-hover'],
          scale:['responsive', 'hover', 'group-hover'],
          borderRadius:['responsive', 'hover', 'group-hover'],
      }
    },
  theme: {
    extend: {
      keyframes: {
        fromBellow: {
          '0%': { transform: 'translateY(0px)'  },
          '50%': {transform: 'translateY(56px)' },
          '100%': { transform: 'translateY(0px)' },
        },
        keyframes: {
          'fade-up': {
            '0%': {
              opacity: '0',
              transform: 'translateY(1rem)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            }
          }
        },
      },
      backgroundImage: {
        'banner': "url('../img/banner.jpg')",
      },
      height: {
        banner: '720px',
        menu: '70px',
        footer: '470px'
      },
      width: {
        banner: '95.5%'
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'spin-slow': 'spin 2s linear infinite', 
      },
      colors: {
        "azulClaro": "#37bcf9",
        "azulMedio": "#0072c6",
        "azulOscuro": "#00538c",
        "azulp":"#0370b9",
        "azulLogin":"#2f78bc",
        "gris": "#555",
        "grisOscuro":"#393d3f",
        "negro": "#333"
      }, 
      boxShadow: {
        'banner': '0px 0px 2px gray',
        'lateral-h3': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f',
        'articles': '1px 1px 2px #ddd',
        'articles-h2': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f',
        'blog': '0px 0px 10px gray'
      },
      screens: {
        '2xl': {'max:': '1536px'},
        'xl': {'max:': '1280px'},
        'lg': {'max:': '1024px'},
        'md': {'max:': '768px'},
        'sm': {'max:': '640px'}
      }
    },
  }  
}

