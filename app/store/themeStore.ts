import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class ThemeStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
  @observable toggleTheme: boolean = false;

  @action setToggleTheme = () => {
    this.toggleTheme = !this.toggleTheme;
  };
}
