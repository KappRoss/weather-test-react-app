import React from "react";
import { render, screen } from "@testing-library/react";

import CitiesList from "./CitiesList";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../styles/muiTheme";
import { Provider } from "react-redux";
import { setupStore } from "../../store/store";
const store = setupStore();

describe("CitiesList component", () => {
  const Component = (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CitiesList />
      </ThemeProvider>
    </Provider>
  );

  it("should render component and title text from it", function () {
    render(Component);
    expect(screen.getByText("Favorites Forecast")).toBeInTheDocument();
  });

  it("component should do not have img", function () {
    render(Component);
    expect(screen.queryByRole("img")).toBeNull();
  });
});
