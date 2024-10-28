import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createAuth } from 'custos-auth-vue';

createApp(App)
    .use(
        createAuth({
            clientId: "",
            clientSecret: "",
            custosAuthBaseUrl: "http://localhost:8081/api/v1",
            redirectUri: "http://localhost:5173/callback/",
        })
    )
    .mount("#app");