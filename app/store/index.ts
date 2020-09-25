import { configure } from "mobx";

// Configure Mobx
configure({
  computedRequiresReaction: true,
  observableRequiresReaction: true,
  enforceActions: "observed",
});
