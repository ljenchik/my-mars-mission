import * as ReactDom from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { LoginForm } from "../components/LoginForm/LoginForm";
import "@testing-library/jest-dom";
import { fireEvent } from "@testing-library/react";
import { login } from "../apiClient";

describe("Login component tests", () => {
  let container: HTMLDivElement;
  let submitButton: HTMLButtonElement;
  //let loginSpy = jest.spyOn(login.prototype, 'submit');

  beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
    ReactDom.render(
      <Router>
        <LoginForm />
      </Router>,
      container
    );
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly initial document", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    expect(inputs[0].name).toBe("Email");
    expect(inputs[1].name).toBe("Password");

    const labels = container.querySelectorAll("label");
    expect(labels).toHaveLength(2);
  });

  it("Renders correctly initial document with attribute", () => {
    const inputs = container.querySelectorAll("input");
    expect(inputs).toHaveLength(2);
    expect(inputs[0].name).toBe("Email");
    expect(inputs[1].name).toBe("Password");

    const labels = container.querySelectorAll("label");
    expect(labels).toHaveLength(2);

    expect(container.querySelector("input")?.getAttribute("name")).toBe(
      "Email"
    );
   // expect(container.querySelectorAll("button")).getByRole("button").toHaveLength(1);
    //expect(container.querySelector("button")).getByRole('button', {name: 'Submit'}).toBeInTheDocument();

});

it("Passes credentials correctly", () => {
    const inputs = container.querySelectorAll("input");
    const emailInput = inputs[0];
    const passwordInput = inputs[1];
    fireEvent.change(emailInput, {
        target: {value: 'user_email'}
    })
    fireEvent.change(passwordInput, {
        target: {value: 'user_password'}
    })
    //fireEvent.click(submitButton);
    //expect(loginSpy).toBeCalledWith('user_email', 'user_password');
    
});
});



// it('calls onClick prop when clicked', () => {
//     const submit = jest.fn()
//     fireEvent.click(screen.getByText(/submit/i))
//     expect(submit).toHaveBeenCalledTimes(1)
//   })

