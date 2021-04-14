import { createApp } from "vue";
import App from "./App.vue";
import Vuex, {createLogger} from "vuex";
import { mainStore, UserModule } from "@/store/UserStore";
import { createStore } from "vuex-smart-module";


export const app = createApp(App);
//export const store = new Vuex.Store({plugins: [createLogger({})]});
//export const subModule = new GenericSubModule({ store, name: "generic" });
//export const userStore = new UserStore(subModule, { store, name: "user" });
export const store = createStore(mainStore, {
  plugins: [createLogger()],
  strict: process.env.NODE_ENV !== 'production'
});
app.mount("#app");
app.use(store);
