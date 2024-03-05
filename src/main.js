import 'vuetify/styles'
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router/'
import store from './store'  
// import the styles 

// Vuetify


import { aliases, mdi } from 'vuetify/iconsets/mdi'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives' 


const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  }
})
 

const app = createApp(App); 
app.use(router)
app.use(store) 
app.use(vuetify) 
app.mount("#app");
