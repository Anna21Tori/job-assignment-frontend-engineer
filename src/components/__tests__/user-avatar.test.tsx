import React from "react";
import { render } from "@testing-library/react";
import UserAvatar from "components/user-avatar.component";
import image from "../../assets/user.png";

test("renders user avatar with default placeholder", () => {
  render(<UserAvatar src={null} />);
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage.src).toContain(image);
});

test("renders user avatar with not null value", () => {
  const url = "https://user-image-url.com";
  render(<UserAvatar src={url} />);
  const testImage = document.querySelector("img") as HTMLImageElement;
  expect(testImage.src).toContain(url);
});
