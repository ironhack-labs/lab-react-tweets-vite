import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Tweet from "../components/Tweet";

describe("Tweet component", () => {
  const tweet = {
    image: "https://i.imgur.com/b0EdHVV.jpg",
      name: "Thoughts of Dog®",
      handle: "dog_feelings",
    timestamp: "1h ago",
    message: "the human likes to say. that i live here rent free.",
  };

  test("renders the user name correctly", () => {
    render(<Tweet tweet={tweet} />);
    const name = screen.getByText(tweet.name);

    expect(name).toBeInTheDocument();
  });

  test("renders the user image correctly", () => {
    render(<Tweet tweet={tweet} />);
    const profileImg = screen.getByRole("img");

    expect(profileImg).toBeInTheDocument();
    expect(profileImg).toHaveAttribute("src", tweet.image);
  });

  test("renders the user handle correctly", () => {
    render(<Tweet tweet={tweet} />);
    const handle = screen.getByText(`@${tweet.handle}`);

    expect(handle).toBeInTheDocument();
  });

  test("renders the timestamp correctly", () => {
    render(<Tweet tweet={tweet} />);
    const timestamp = screen.getByText(tweet.timestamp);

    expect(timestamp).toBeInTheDocument();
  });

  test("renders the message correctly", () => {
    render(<Tweet tweet={tweet} />);
    const message = screen.getByText(tweet.message);

    expect(message).toBeInTheDocument();
  });
});
