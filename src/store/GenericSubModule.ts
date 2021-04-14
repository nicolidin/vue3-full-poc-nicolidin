import { Actions, Context, Getters, Module, Mutations } from "vuex-smart-module";

export type GenericSubStore = Context<GenericSubModule>;
export type GenericSubModule = Module<GenericState, GenericGetter, GenericMutation, GenericAction, {}>;

class GenericState {
  chichon = "lhdqdq";
}


class GenericGetter extends Getters<GenericState> {
}

class GenericMutation extends Mutations<GenericState> {
  setChichon() {
    this.state.chichon = "lhdqlhdqdqlhlhdqhdqlhqd"
  }
}


class GenericAction extends Actions<GenericState, GenericGetter, GenericMutation, GenericAction> {
}

export const genericSubModule = new Module({
  state: GenericState,
  getters: GenericGetter,
  mutations: GenericMutation,
  actions: GenericAction
})
