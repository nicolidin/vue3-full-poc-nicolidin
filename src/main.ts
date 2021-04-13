import { createApp } from "vue";
import App from "./App.vue";
import Vuex, {createLogger} from "vuex";
import { UserStore } from "@/store/UserStore";
import { GenericSubModule } from "@/store/GenericSubModule";


export const app = createApp(App);
export const store = new Vuex.Store({plugins: [createLogger({})]});
export const subModule = new GenericSubModule({ store, name: "generic" });
export const userStore = new UserStore(subModule, { store, name: "user" });

app.provide("userStore", userStore);
app.mount("#app");
app.use(store);
