import "@testing-library/jest-dom";
import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
  getAllByAltText,
  getByText,
} from "@testing-library/react";
import { LoginForm } from "../components/LoginForm/LoginForm";
import { BrowserRouter as Router } from "react-router-dom";

const mockLoginSuccess = { email: "kate@gmail.com", password: "Kate1111" };
const mock_response_success = {
  success: true,
  message: "Loggid In!",
  id: 2,
  accessToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImthdGVAZ21haWwuY29tIiwiaWQiOjIsImlhdCI6MTY2OTk3Njk5NiwiZXhwIjoxNjY5OTgwNTk2fQ.G5cGf_TzFsyQGC03PgHe5tD--xvS_RvzXl2F1s3kcqc",
};
const mock_response_fail = {
  success: false,
  error: "Invalid username or password",
  id: "",
};
const mockRequestFail = { email: "kate@gmail.com", password: "1111" };

global.fetch = jest.fn();
import { login } from "../apiClient";

beforeEach(() => {
  fetch.mockClear();
});

test("get user's data and access token after login", async () => {
  fetch.mockReturnValueOnce(
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mock_response_success),
    })
  );

  const response = await login(mockLoginSuccess);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(response).toEqual(mock_response_success);
});

test("get user's data fail", async () => {
  fetch.mockReturnValueOnce(
    Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mock_response_fail),
    })
  );

  const response = await login(mockRequestFail);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(response).toEqual(mock_response_fail);
});

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

test("loading should not be rendered", () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  const button = screen.getByRole("button");
  expect(button).not.toHaveTextContent("Loading");
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

test("email input should change", async () => {
  const promise = Promise.resolve();
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  const emailValue = "test";
  fireEvent.change(emailInput, { target: { value: emailValue } });
  expect(emailInput.value).toBe(emailValue);
  await act(() => promise);
});

test("password input should change", async () => {
  const promise = Promise.resolve();
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  const passwordInput = screen.getByPlaceholderText(/Enter password/i);
  const passwordValue = "1234";
  fireEvent.change(passwordInput, { target: { value: passwordValue } });
  await act(() => promise);
  expect(passwordInput.value).toBe(passwordValue);
});

test("button should not be disabled when input exist", async () => {
  const promise = Promise.resolve();
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  const passwordInput = screen.getByPlaceholderText(/Enter password/i);
  const button = screen.getByRole("button");
  const emailValue = "test";
  const passwordValue = "1234";
  fireEvent.change(emailInput, { target: { value: emailValue } });
  fireEvent.change(passwordInput, { target: { value: passwordValue } });
  expect(button).not.toBeDisabled();
  await act(() => promise);
});

test.only("loading should be rendered when clicked", async () => {
  const {getByText} = render(
    <Router>
      <LoginForm />
    </Router>
  );

  const emailInput = screen.getByPlaceholderText(/Enter email/i);
  const passwordInput = screen.getByPlaceholderText(/Enter password/i);
  const emailValue = "test";
  const passwordValue = "1234";

  fireEvent.change(emailInput, { target: { value: emailValue } });
  fireEvent.change(passwordInput, { target: { value: passwordValue } });
  fireEvent.click(getByText("Submit"));

  await waitFor(() => {
    expect(getByText("Loading")).toBeInTheDocument()
  });
});

test("Log in, email and password text are displayed on the screen", () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  const login = screen.getByText("Log in");
  expect(login).toBeInTheDocument();
  expect(login).toBeVisible();
  const email = screen.getByText("Email");
  expect(email).toBeInTheDocument();
  expect(email).toBeVisible();
  const password = screen.getByText("Password");
  expect(password).toBeInTheDocument();
  expect(password).toBeVisible();
});

test("ticket image is displayed", () => {
  render(
    <Router>
      <LoginForm />
    </Router>
  );
  const image = screen.getByAltText("mars ticket image");
  expect(image).toBeInTheDocument();
  expect(image.src).toContain(
    "https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
  );
});
