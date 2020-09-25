import { observable, action, observe } from "mobx";

class ThemeStore {
  @observable toggleTheme: boolean = false;

  @action setToggleTheme = () => {
    this.toggleTheme = !this.toggleTheme;
  };
}

export const themeStore = new ThemeStore();

observe(themeStore, (change) => {
  change.object = change.object.constructor?.name;
});
