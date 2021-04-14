// user-module.ts
import { Getters, Mutations, Actions, Module, Context } from "vuex-smart-module";
import { genericSubModule, GenericSubModule } from "@/store/GenericSubModule";

export type UserStore = Context<UserModule>;
export type UserModule = Module<UserState, UserGetters, UserMutations, UserActions, {genericSubModule: GenericSubModule}>
class NodeModel {
  constructor(private id: String, public name: String){}
}

class UserState {
  firstName = "Foo";
  lastName = "Bar";
  myFookingNodeMapSir = new Map<String, NodeModel>();

  constructor() {
    this.myFookingNodeMapSir.set("a", new NodeModel("a", "aaaa"))
    this.myFookingNodeMapSir.set("b", new NodeModel("b", "bbbb"))
  }
}

class UserGetters extends Getters<UserState> {
  // You can declare both getter properties or methods

  get fullName() {
    return this.state.firstName + " " + this.state.lastName;
  }
}

class UserMutations extends Mutations<UserState> {
  setFirstName(firstName: string) {
    this.state.firstName = firstName;
  }

  setLastName(lastName: string) {
    this.state.lastName = lastName;
  }
  setNodes() {
    this.state.myFookingNodeMapSir.set("c", new NodeModel("c", "fiou"))
    this.state.myFookingNodeMapSir.get("a")!.name = "superr";
  }
}

class UserActions extends Actions<UserState, UserGetters, UserMutations, UserActions> {
  async loadUser() {
    this.mutations.setFirstName("yao");
    this.mutations.setLastName("yeh");
  }
}

export const mainStore: UserModule = new Module({
  state: UserState,
  getters: UserGetters,
  mutations: UserMutations,
  actions: UserActions,
  modules: {
    genericSubModule
  }
});
