import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BaseButton from "components/base-button.component";

test("renders primary base button", () => {
  render(
    <BaseButton isPrimary={true} onClick={() => null}>
      Test button
    </BaseButton>
  );
  const btn = screen.getByRole("button");
  expect(btn).toHaveClass("btn-outline-primary");
});

test("renders secondary base button", () => {
  render(
    <BaseButton isPrimary={false} onClick={() => null}>
      Test button
    </BaseButton>
  );
  const btn = screen.getByRole("button");
  expect(btn).toHaveClass("btn-outline-secondary");
});

test("renders base button with appropriate children", () => {
  render(
    <BaseButton isPrimary={false} onClick={() => null}>
      Test button
    </BaseButton>
  );
  const btn = screen.getAllByText(/Test button/i)[0];
  expect(btn).toBeInTheDocument();
});

test("testing onClick event", () => {
  const mockCallBack = jest.fn();

  render(
    <BaseButton isPrimary={false} onClick={mockCallBack}>
      Test button
    </BaseButton>
  );

  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
