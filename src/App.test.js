import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import Search from "./components/search";

describe("App component", () => {
  test("it renders first fold element", () => {
    render(<App />);
    const linkElement = screen.getByText(/Whats netbooks?/i);
    expect(linkElement).toBeInTheDocument();
  });
  it("has a search box", () => {
    const handleSubmit = jest.fn((value) => { });
    render(<Search handleSubmit={handleSubmit} />);
    const searchElement = screen.getByPlaceholderText("Search");
    expect(searchElement).toBeInTheDocument();
  });
  it("updates on change", () => {
    const handleSubmit = jest.fn((value) => { });
    render(<Search handleSubmit={handleSubmit} />);
    const searchElement = screen.getByPlaceholderText("Search");
    fireEvent.click(searchElement, { target: { value: "test" } });
    expect(searchElement.value).toBe("test");
  });
});
