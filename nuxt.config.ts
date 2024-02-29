import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },'@nuxt/ui'
    //...
  ], 
  googleFonts: {
    families: {
      Sarabun: true
    },
  },
  app: {
    head: {
      title:"Debt Tracker",
      meta:[{name:"description" ,content:"ติดตามลูกหนี้ค้างชำระ" }]
      
    }  
  },
  //...
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
