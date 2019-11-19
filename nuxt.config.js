module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'ibec_systems',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css' }
    ],
    script: [
      { src: 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js' },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
      { src: 'https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' }
    ]
  },

  modules: [
    '@nuxtjs/axios',
    [
      'vue-yandex-maps/nuxt',
      {
        apiKey: '48383d20-9224-4354-aaae-4e344f948297', // '' by default
        lang: 'ru_RU', // 'ru_RU' by default
        version: '2.1' // '2.1' by default
      }
    ]
  ],

  css: [
    '@/assets/scss/index.scss'
  ],

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

