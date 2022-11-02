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
    password: "",
    created_at: "",
  });

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    account.name = event.target.value;
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

  const reset = () => {
    setAccount({
      id: null,
      name: "",
      email: "",
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
      email: "",
      password: "",
      created_at: "",
    };

    request.name = account.name;
    request.email = account.email;
    request.password = account.password;

    createAccount(request).then((response) => {
      if (!response.success) {
        setError(response.error);
      } else {
        navigate(`/account/login`);
      }
    });
  };

  return (
    <div >
      <img
        className="account-form-image"
        src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
      />
      
      <div className="account-container">
        <h2>Create account</h2>
        
        <label
          className={
            error.includes("Enter name")
              ? "h4 highlight-label"
              : "h4"
          }
        >
          <h4>Name</h4>
          <input
            className={
              error.includes("Enter name")
                ? "account-input highlight-box"
                : "account-input"
            }
            type="text"
            placeholder="Enter name"
            onChange={(event) => handleChangeName(event)}
            value={account.name}
          ></input>
        </label>
        

        <label
          className={
            error.includes("email")
              ? "h4 highlight-label"
              : "h4"
          }
        >
          <h4 >Email</h4>
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
        </label>

        <label
          className={
            error.includes("password")
              ? "h4 highlight-label"
              : "h4"
          }
        >
          <h4>Password</h4>
          <input
            className={
              error.includes("password") ? "account-input highlight-box" : "account-input"
            }
            type="password"
            placeholder="Enter password"
            onChange={(event) => handleChangePassword(event)}
            value={account.password}
          ></input>{" "}
        </label>
      </div>
      
      <div className="account-form-buttons flex">
          <Button className="account-form-button" onClick={submit}>
            Submit
          </Button>
          <Button className="account-form-button" onClick={reset}>
            Reset
          </Button>
        </div>
        {
            error
              ? <div className='account-form-error'>{error}</div>
              : ""
          }
    </div>
  );
};
