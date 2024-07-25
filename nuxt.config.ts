// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script : [
        // {src : "https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js"},
        // {src : "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js", integrity : "sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3", crossorigin : "anonymous"},
        // {src : "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js", integrity : "sha384-cuYeSxntonz0PPNlHhBs68uyIAVpIIOZZ5JqeqvYYIcEL727kskC66kF92t6Xl2V" ,crossorigin : "anonymous"},
        // {src : "~/assets/script/main.js"}
      ],
      link: [
        // { rel: 'shortcut icon',  href: 'https://s3.amazonaws.com/sarakoimbra.com.br/site/favico/favicon.ico' },
        // { rel: 'icon', type : 'image/vnd.microsoft.icon',  href: 'https://s3.amazonaws.com/sarakoimbra.com.br/site/favico/ms-icon-70x70.png' },
        // { rel: 'icon', type : 'image/x-icon',  href: 'https://s3.amazonaws.com/sarakoimbra.com.br/site/favico/favicon.ico' },
        // { rel: 'icon',  href: 'https://s3.amazonaws.com/sarakoimbra.com.br/site/favico/favicon.ico' },
        // { rel: 'stylesheet',  href: 'https://fonts.cdnfonts.com/css/playlist' },
      ],
    },

  },

})
