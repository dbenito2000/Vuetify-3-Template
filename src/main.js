import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import { createPinia } from 'pinia'
import { useUserStore } from './stores/user'
loadFonts()

let app = createApp(App)

// Finish configuring plugins.
app.use(vuetify)
app.use(router)
app.use(createPinia())


// Setup global vars
app.config.globalProperties.apiUrl = import.meta.env.VITE_APP_BASEURL;
app.config.globalProperties.logoUrl = import.meta.env.VITE_APP_LOGOURL;
app.config.globalProperties.devMode = import.meta.env.VITE_APP_DEV_MODE == 'true';
app.config.globalProperties.userStore = useUserStore();

app.config.globalProperties.userStore.setDev(app.config.globalProperties.devMode);

// Mount the application.
app.mount('#app')