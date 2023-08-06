import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("testing the async funtions", () => {
  test("this is for the corret rendering iof the test functions", async () => {
    render(<Async />);

    const element = await screen.findAllByRole("listitem");
    expect(element).not.toHaveLength(0);
  });
});
