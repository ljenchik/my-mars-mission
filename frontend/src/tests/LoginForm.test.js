import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { BrowserRouter as Router} from "react-router-dom";

test("email input should be rendered", () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  expect(emailInput).toBeInTheDocument();
});

test("password input should be rendered", () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/Enter password/i);
    expect(passwordInput).toBeInTheDocument();
  });
  
  test("submit button should be rendered", () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });
  
  test("email input should be empty", () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    const emailInput = screen.getByPlaceholderText(/Enter email/i);
    expect(emailInput.value).toBe("");
  });

  test("password input should be empty", () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    const passwordInput = screen.getByPlaceholderText(/Enter password/i);
    expect(passwordInput.value).toBe("");
  });

  test("button should be disabled", () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

test("error message should be invisible", () => {
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    const error = screen.getByTestId("error");
    expect(error).toBeInTheDocument();
    expect(error).not.toBeVisible();

  });