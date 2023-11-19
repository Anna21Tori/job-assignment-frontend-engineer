import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "components/header.component";
import { MemoryRouter } from "react-router-dom";

test("renders conduit link", () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const linkElement = screen.getAllByText(/conduit/i)[0];
  expect(linkElement).toBeInTheDocument();
});
