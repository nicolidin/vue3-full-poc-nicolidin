import {Action, Module, Mutation, VuexModule} from "vuex-class-modules";


@Module
export class GenericSubModule extends VuexModule {
  chichon = "lhdqdq"

  @Mutation
  setChichon() {
    this.chichon = "lhdqlhdqdqlhlhdqhdqlhqd"
  }
}
