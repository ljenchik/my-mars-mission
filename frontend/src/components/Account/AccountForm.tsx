import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../apiClient";
import { Account } from "../../models";
import "./AccountForm.scss";
import { Button, Container } from "react-bootstrap";

export const AccountForm = () => {
  const [error, setError] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const [account, setAccount] = useState<Account>({
    id: null,
    name: "",
    address: "",
    email: "",
    username: "",
    password: "",
    created_at: "",
  });

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.name = event.target.value;
    setAccount({ ...account });
  };

  const handleChangeUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.username = event.target.value;
    setAccount({ ...account });
  };

  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.address = event.target.value;
    setAccount({ ...account });
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.email = event.target.value;
    setAccount({ ...account });
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.password = event.target.value;
    setAccount({ ...account });
  };

  const handleKeyPress = (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      submit();
    }
  };

  const reset = () => {
    setAccount({
      id: null,
      name: "",
      address: "",
      email: "",
      username: "",
      password: "",
      created_at: "",
    });
    setError("");
    setDisabled(false);
  };

  const submit = () => {
    const request: Account = {
      id: null,
      name: "",
      address: "",
      email: "",
      username: "",
      password: "",
      created_at: "",
    };

    request.name = account.name;
    request.username = account.username;
    request.address = account.address;
    request.email = account.email;
    request.password = account.password;

    createAccount(request).then((response) => {
      if (!response.success) {
        setError(response.error);
      } else {
        navigate(`/account/${response.id}`);
      }
    });
  };

  return (
    <div>
      <img
        className="account-form-image"
        src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
      />
      <div>
        <h3 className="account-form-title">Create account</h3>
        <label
          className={
            error.includes("Enter name")
              ? "account-form-label highlight-error"
              : "account-form-label"
          }
        >
          <h3 className="account-form-label">Name</h3>
          <input
            className={
              error.includes("Enter name")
                ? "account-form-input highlight-box"
                : "account-form-input"
            }
            type="text"
            placeholder="Enter name"
            onChange={(event) => handleChangeName(event)}
            value={account.name}
          ></input>
        </label>

        <label
          className={
            error.includes("Enter username")
              ? "account-form-label highlight-error"
              : "account-form-label"
          }
        >
          <h3 className="account-form-label">Username</h3>
          <input
            className={
              error.includes("username")
                ? "account-form-input highlight-box"
                : "account-form-input"
            }
            type="text"
            placeholder="Enter username"
            onChange={(event) => handleChangeUsername(event)}
            value={account.username}
          ></input>{" "}
        </label>

        <label
          className={
            error.includes("address")
              ? "account-form-label highlight-error"
              : "account-form-label"
          }
        >
          <h3 className="account-form-label">Address</h3>
        </label>
        <input
          className={
            error.includes("address")
              ? "account-form-input highlight-box"
              : "account-form-input"
          }
          type="address"
          placeholder="Enter address"
          onChange={(event) => handleChangeAddress(event)}
          value={account.address}
        ></input>

        <label
          className={
            error.includes("email")
              ? "account-form-label highlight-error"
              : "account-form-label"
          }
        >
          <h3 className="account-form-label">Email</h3>
          <input
            className={
              error.includes("email")
                ? "account-form-input highlight-box"
                : "account-form-input"
            }
            type="email"
            placeholder="Enter email address"
            onChange={(event) => handleChangeEmail(event)}
            value={account.email}
          ></input>
        </label>

        <label
          className={
            error.includes("password")
              ? "account-form-label highlight-error"
              : "account-form-label"
          }
        >
          <h3 className="account-form-label">Password</h3>
          <input
            className={
              error ? "account-form-input highlight-box" : "account-form-input"
            }
            type="password"
            placeholder="Enter password"
            onChange={(event) => handleChangePassword(event)}
            value={account.password}
          ></input>{" "}
        </label>
      </div>
      <div className="account-form-buttons">
          <Button className="account-form-button" onClick={submit}>
            Submit
          </Button>
          <Button className="account-form-button" onClick={reset}>
            Reset
          </Button>
        </div>
    </div>
  );
};
