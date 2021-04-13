// user-module.ts
import {VuexModule, Module, Mutation, Action, RegisterOptions} from "vuex-class-modules";
import {GenericSubModule} from "@/store/GenericSubModule";

class NodeModel {
  constructor(private id: String, public name: String){}
}

interface MutationGeneric {
  setFirstName(firstName: string): void;
  setLastName(lastName: string): void;
}

interface ActionGeneric {
  setNodes(): void;
}


/*
* Ici on poc :
* VUEX-CLASS-MODULE pour le store
* Map youpi
* Décorateur sexy + idiomatic ac vue-class-component
* On peut implémenter des interfaces donc c'est ok pour archi bflow
* Le subStore est composé en readonly dans Le store parent (ici le subStore est subModule)
* si tu veux voir les instance des store va voir le main.ts
*
* Downside :
* actions, mutations, getters et state regroupés
*/
@Module
export class UserStore extends VuexModule implements MutationGeneric, ActionGeneric {
  firstName = "Foo";
  lastName = "Bar";
  myFookingNodeMapSir = new Map<String, NodeModel>();

  constructor(private subModule: GenericSubModule, options: RegisterOptions) {
    super(options);
    this.myFookingNodeMapSir.set("a", new NodeModel("a", "aaaa"))
    this.myFookingNodeMapSir.set("b", new NodeModel("b", "bbbb"))
  }

  get subModuleSir(): GenericSubModule {
    return this.subModule
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  @Mutation
  setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  @Mutation
  setLastName(lastName: string) {
    this.lastName = lastName;
  }

  @Mutation
  setNodes() {
    this.myFookingNodeMapSir.set("c", new NodeModel("c", "fiou"))
    this.myFookingNodeMapSir.get("a")!.name = "superr";
  }

  @Action
  async loadUser() {
    this.setFirstName("yao");
    this.setLastName("yeh");
  }
}
