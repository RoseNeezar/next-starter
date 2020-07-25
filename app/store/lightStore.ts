import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class TokenStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable openLight = false;

  @action setOpenLight = (open: boolean) => {
    this.openLight = open;
  };
}
