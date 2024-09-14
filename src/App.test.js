import {
  findByTestId,
  fireEvent,
  getByPlaceholderText,
  getByText,
  render,
  screen,
} from "@testing-library/react";
import App from "./App";
import { toBeInTheDOM } from "@testing-library/jest-dom/dist/matchers";
import { toBeInTheDocument } from "@testing-library/jest-dom/matchers";

describe("App component check all the test case", () => {
  test("should check the message", () => {
    render(<App />);
    expect(screen.getByText("X")).toBeInTheDocument();
    expect(screen.getByText("Congratulations!")).toBeInTheDocument();
    expect(screen.getByText("First Fill the form")).toBeInTheDocument();
    expect(screen.getByText("Yaay!!")).toBeInTheDocument();
  });
  test("should form element", () => {
    render(<App />);
    expect(screen.getByText("Name *")).toBeInTheDocument();
    expect(screen.getByText("Email *")).toBeInTheDocument();
    expect(screen.getByText("Class *")).toBeInTheDocument();
  });
  test("should check input box", () => {
    render(<App />);
    expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your Class")).toBeInTheDocument();
  });
  test("should check button", () => {
    render(<App />);
    expect(
      screen.getByRole("button", {
        name: "Submit",
      })
    ).toBeInTheDocument();
  });
  test("should check input box render correctly", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
      target: { value: "sunny" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your Email"), {
      target: { value: "sunny@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your Class"), {
      target: { value: "2" },
    });
  });
  test("should check form first field not fill", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
      target: { value: "" },
    });
    // fireEvent.change(screen.getByPlaceholderText("Enter your Email"), {
    //   target: { value: "" },
    // });
    // fireEvent.change(screen.getByPlaceholderText("Enter your Class"), {
    //   target: { value: "" },
    // });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    expect(screen.getByText("require")).toBeInTheDocument();
    expect(screen.getByText("require")).toBeInTheDocument();
    // expect(
    //   screen.getByText("require and Class must be greater then 0")
    // ).toBeInTheDocument();
  });
  test("should check form first field is fill but second field not fill", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
      target: { value: "sunny" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your Email"), {
      target: { value: "" },
    });
    // fireEvent.change(screen.getByPlaceholderText("Enter your Class"), {
    //   target: { value: "" },
    // });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    // expect(screen.getByText("require")).toBeInTheDocument();
    expect(screen.getByText("require")).toBeInTheDocument();
    // expect(
    //   screen.getByText("require and Class must be greater then 0")
    // ).toBeInTheDocument();
  });

  test("should check form first and second field is fill but third field not fill", () => {
    render(<App />);
    fireEvent.change(screen.getByPlaceholderText("Enter your name"), {
      target: { value: "sunny" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your Email"), {
      target: { value: "sunny@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your Class"), {
      target: { value: "" },
    });
    fireEvent.click(
      screen.getByRole("button", {
        name: "Submit",
      })
    );
    // expect(screen.getByText("require")).toBeInTheDocument();
    // expect(screen.getByText(  "require")).toBeInTheDocument();
    expect(
      screen.getByText("require and Class must be greater then 0")
    ).toBeInTheDocument();
  });
});
