import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../apiClient";
import { Account } from "../../models";
import "./AccountForm.scss";
import { Button } from "react-bootstrap";

export const AccountForm = () => {
  const [error, setError] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const [account, setAccount] = useState<Account>({
    id: null,
    name: "",
    email: "",
    photo: "",
    password: "",
    created_at: "",
    updated_at: "",
  });

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.name = event.target.value;
    setAccount({ ...account });
    setError("");
  };

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.email = event.target.value;
    setAccount({ ...account });
    setError("");
  };

  const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.photo = event.target.value;
    setAccount({ ...account });
    setError("");
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.password = event.target.value;
    setAccount({ ...account });
    setError("");
  };

  const reset = () => {
    setAccount({
      id: null,
      name: "",
      email: "",
      photo: "",
      password: "",
      created_at: "",
      updated_at: "",
    });
    setError("");
    setDisabled(false);
  };

  const submit = () => {
    const request: Account = {
      id: null,
      name: "",
      email: "",
      photo: "",
      password: "",
      created_at: "",
      updated_at: "",
    };

    request.name = account.name;
    request.email = account.email;
    request.password = account.password;

    if (account.photo) {
      request.photo = account.photo;
    }

    createAccount(request).then((response) => {
      if (!response.success) {
        setError(response.error);
      } else {
        navigate(`/account/login`);
      }
    });
  };

  return (
    <div className="account-container">
      <img
        className="account-form-image"
        src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
      />
      <p className="account-title">Create account</p>
      <div className="account-container-input">
        <label
          className={
            error.includes("name")
              ? "account-subtitle highlight-label"
              : "account-subtitle"
          }
        >
          <p>Name</p>{" "}
        </label>
        <input
          className={
            error.includes("name")
              ? "account-input highlight-box"
              : "account-input"
          }
          type="text"
          placeholder="Enter name"
          onChange={(event) => handleChangeName(event)}
          value={account.name}
        ></input>
        <label
          className={
            error.includes("email")
              ? "account-subtitle highlight-label"
              : "account-subtitle"
          }
        >
          <p>Email</p>
        </label>
        <input
          className={
            error.includes("email")
              ? "account-input highlight-box"
              : "account-input"
          }
          type="email"
          placeholder="Enter email address"
          onChange={(event) => handleChangeEmail(event)}
          value={account.email}
        ></input>
        <label
          className={
            error.includes("photo")
              ? "account-subtitle highlight-label"
              : "account-subtitle"
          }
        >
          <p>Photo</p>
        </label>
        <input
          className={
            error.includes("photo")
              ? "account-input highlight-box"
              : "account-input"
          }
          type="url"
          placeholder="Enter photo"
          onChange={(event) => handleChangePhoto(event)}
          value={account.photo}
        ></input>
        <label
          className={
            error.includes("password")
              ? "account-subtitle highlight-label"
              : "account-subtitle"
          }
        >
          <p>Password</p>{" "}
        </label>
        <input
          className={
            error.includes("password")
              ? "account-input highlight-box"
              : "account-input"
          }
          type="password"
          placeholder="Enter password"
          onChange={(event) => handleChangePassword(event)}
          value={account.password}
        ></input>{" "}
      </div>
      <div className="account-form-buttons flex">
        <Button className="account-form-button" onClick={submit}>
          Submit
        </Button>
        <Button className="account-form-button" onClick={reset}>
          Reset
        </Button>
      </div>
      {error ? <div className="account-form-error">{error}</div> : ""}
    </div>
  );
};
