<template>
  <h1> ------------------ </h1>
  <h1> APP </h1>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div>
    count est provide reactic donc set : {{ count }}
  </div>
  <div>
    newCount set via le v-model {{ newCount }}
  </div>
  <div>
    pipette set via le v-model {{ pipette }}
  </div>
  <button @click="increment">increment pour voir la focking reactivité ac les vmodels et le provide reactif</button>
  <MainComponent :msg="42" :chichon="{ test: 42 }" v-model:countSir="newCount" v-model:pipetteGraduee="pipette" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MainComponent from "./components/MainComponent.vue";
import { Provide } from "vue-property-decorator";
import { reactive, ref } from "vue"
import {store} from "@/main";

/*
* Ici on poc :
* vue-class-component et vue-property-decorator
* plz v-models:namifié
* provide réactif (new feature vue3) compatible ac provide de vue-property-decorator
*
* Downside :
* Support IDE encore faible nv template
*/
@Options<App>({
  components: {MainComponent},
})
export default class App extends Vue {
  @Provide() count = reactive({value: 1});
  newCount = 1; // compteur v-modelifié
  pipette = 1; // compteur v-modelifié

  increment() {
    this.count.value += 1;
  }

  mounted() {
    console.log(store)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
