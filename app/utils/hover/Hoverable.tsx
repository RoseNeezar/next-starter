import { isHoverEnabled } from "./HoverState";

import React, { useState } from "react";

interface HoverProps {
  onHoverIn?: any;
  onHoverOut?: any;
  children: any;
}

const Hoverable: React.FC<HoverProps> = ({
  onHoverIn,
  onHoverOut,
  children,
}) => {
  const [state, setState] = useState({
    isHovered: false,
    showHover: true,
  });
  const { isHovered, showHover } = state;
  const _handleMouseEnter = () => {
    if (isHoverEnabled() && !isHovered) {
      if (onHoverIn) onHoverIn();
      setState({ ...state, isHovered: true });
    }
  };

  const _handleMouseLeave = () => {
    if (isHovered) {
      if (onHoverOut) onHoverOut();
      setState({ ...state, isHovered: false });
    }
  };

  const _handleGrant = () => {
    setState({ ...state, showHover: false });
  };
  const _handleRelease = () => {
    setState({ ...state, showHover: true });
  };

  const child =
    typeof children === "function"
      ? children(showHover && isHovered)
      : children;

  return React.cloneElement(React.Children.only(child), {
    onMouseEnter: _handleMouseEnter,
    onMouseLeave: _handleMouseLeave,
    // prevent hover showing while responder
    onResponderGrant: _handleGrant,
    onResponderRelease: _handleRelease,
    // if child is Touchable
    onPressIn: _handleGrant,
    onPressOut: _handleRelease,
  });
};

export default Hoverable;
