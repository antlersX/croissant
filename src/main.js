import { createApp } from 'vue'
import App from './App.vue'
import "./index.css";
import  store from "./store"

const app = createApp(App);

var modules = import.meta.globEager("./*/*.vue");

for (const idx in modules) {
    var c = modules[idx].default;
    app.component(c.name, c);
}

app.use(store);
app.mount('#app')
