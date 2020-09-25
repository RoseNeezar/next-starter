import { observable, action, observe } from "mobx";

class LightStore {
  @observable openLight = false;

  @action setOpenLight = (open: boolean) => {
    this.openLight = open;
  };
}

export const lightStore = new LightStore();

observe(lightStore, (change) => {
  change.object = change.object.constructor?.name;
});
