<template>
  <h1> ------------------ </h1>
  <h1> DEBUT MAIN COMPONENT </h1>
  <h2> props : {{ msg }} </h2>
  <p> object props:  {{ chichon }} </p>
  <p> pute count : {{ count }} </p>
  <div> pute first name: {{ userStore.state.firstName }} </div>
  <button @click="muteLeStorePd">call mutation to set state main store and substore</button>
  <div> {{ userStore.state.myFookingNodeMapSir }} </div>
  <div> {{ userStore.modules.genericSubModule.state.chichon}} </div>

  <h1> FIN MAIN COMPONENT </h1>
  <h1> ------------------ </h1>
</template>

<script lang="ts">

import {Options, Vue, Prop, Inject, Model, Watch} from "vue-property-decorator";
import {Context} from "vuex-smart-module";
import { mainStore, UserModule, UserStore } from "@/store/UserStore";
import { store } from "@/main";
import { genericSubModule } from "@/store/GenericSubModule";

/*
* Ici on poc :
* vue-class-component, vue-property-decorator et VUEX-CLASS-MODULE pour le store
* VUEX-CLASS-MODULE est bien compatible ac vuex4 donc on peut subscribe et tous et tous
* fragment is a success tooo
*
* Downside :
* actions et mutations pas wrap par `actions` et `mutations` donc moin bon sémantiquement à l'accès
* tjrs pas de devtools vuex4 :(
*/
@Options({})
export default class MainComponent extends Vue {
  userStore!: UserStore; // le store est proprement injecté
  @Prop() msg!: string;
  @Prop() chichon!: { muteLeStorePd: number };
  @Inject() count!: any;

  @Model('countSir', { type: Number, default: 1 }) readonly value!: number;
  @Model('pipetteGraduee', { type: Number, default: 1 }) readonly pipetteGraduee!: number;

  @Watch("count", {deep: true})
  setValue() {
    console.log("watch son");
    this.$emit("update:countSir", this.value * 3); // emit update:v-modelname trigger le v-model
    this.$emit("update:pipetteGraduee", this.pipetteGraduee * 4);
  }

  muteLeStorePd() {
    this.userStore.mutations.setFirstName("plop");
    this.userStore.mutations.setLastName("dqd");
    this.userStore.mutations.setNodes();
    this.userStore.modules.genericSubModule.mutations.setChichon();
  }

  created() {
    this.userStore = mainStore.context(store);
    const toto = mainStore.context(store);
  }

  mounted() {
    console.log("count should be 0 damn");
    console.log(this.count);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
