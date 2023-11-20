import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Header from "components/header.component";
import { MemoryRouter } from "react-router-dom";
import App from "App";
import { act } from "react-dom/test-utils";
import { UserContext, UserProvider } from "contexts/user.context";

test("renders conduit link", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const linkElement = screen.getAllByText(/conduit/i)[0];
  expect(linkElement).toBeInTheDocument();
});

test("navigates to home when you click the logo", async () => {
  render(
    <MemoryRouter initialEntries={["/login"]}>
      <App />
    </MemoryRouter>
  );

  act(() => {
    const linkElement = screen.getAllByText(/conduit/i)[0];
    linkElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  await waitFor(() => {
    const text = screen.getAllByText(/conduit/i)[0];
    expect(text).toBeInTheDocument();
  });
});

test("navigates to login page", async () => {
  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );

  act(() => {
    const linkElement = screen.getAllByText(/Sign in/i)[0];
    linkElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  await waitFor(() => {
    const text = screen.getAllByText(/Sign in/i)[0];
    expect(text).toBeInTheDocument();
  });
});
