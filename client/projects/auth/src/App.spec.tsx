import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  const renderComponent = () => {
    return render(<App />);
  };

  beforeEach(() => {
    renderComponent();
  });

  it("should render", () => {
    expect(screen).toBeTruthy();
  });
});
