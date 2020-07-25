import { configure } from "mobx";
import { createContext } from "react";
import ThemeStore from "./themeStore";
import { useStaticRendering } from "mobx-react-lite";

import LightStore from "./lightStore";

const isServer = typeof window === "undefined";
useStaticRendering(isServer);

configure({ enforceActions: "always" });

export class RootStore {
  lightStore: LightStore;
  themeStore: ThemeStore;

  constructor() {
    this.lightStore = new LightStore(this);
    this.themeStore = new ThemeStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
