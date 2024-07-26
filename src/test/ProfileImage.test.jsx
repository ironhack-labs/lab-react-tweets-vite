import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ProfileImage from "../components/ProfileImage";

describe("ProfileImage component", () => {
  const tweet = {
    image: "https://i.imgur.com/b0EdHVV.jpg",
    user: {
      name: "Thoughts of Dog®",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message: "the human likes to say. that i live here rent free.",
  };

  test("renders image correctly", () => {
    render(<ProfileImage image={tweet.image} />);
    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", tweet.image);
  });
});
