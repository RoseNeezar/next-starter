let isEnabled = false;

if (true) {
  const HOVER_THRESHOLD_MS = 1000;
  let lastTouchTimestamp = 0;

  const enableHover = () => {
    if (isEnabled || Date.now() - lastTouchTimestamp < HOVER_THRESHOLD_MS) {
      return;
    }
    isEnabled = true;
  };

  const disableHover = () => {
    lastTouchTimestamp = Date.now();
    if (isEnabled) {
      isEnabled = false;
    }
  };
  if (typeof document !== "undefined") {
    document.addEventListener("touchstart", disableHover, true);
    document.addEventListener("touchmove", disableHover, true);
    document.addEventListener("mousemove", enableHover, true);
  }
}

export function isHoverEnabled(): boolean {
  return isEnabled;
}
