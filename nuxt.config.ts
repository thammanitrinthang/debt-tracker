import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },'@nuxt/ui'
    //...
  ], 
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
