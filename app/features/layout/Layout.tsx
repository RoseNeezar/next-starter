import React, { FC } from "react";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./../../themes";

import { observer } from "mobx-react-lite";

import { themeStore } from "../../store/themeStore";

const Layout: FC = ({ children }) => {
  const { toggleTheme } = themeStore;

  return (
    <ThemeProvider theme={!toggleTheme ? DarkTheme : LightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default observer(Layout);
