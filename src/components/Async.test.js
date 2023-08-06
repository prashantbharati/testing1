import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("testing the async funtions", () => {
  test("this is for the corret rendering iof the test functions", async () => {
    // first mock function

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 1, post: "mock stuff" }],
    });

    render(<Async />);

    const element = await screen.findAllByRole("listitem");
    expect(element).not.toHaveLength(0);
  });
});
