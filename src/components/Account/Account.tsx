import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../apiClient";
import { Account } from "../../models";
import "./Account.scss";
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
        setError(response.error.slice(1, -1));
      } else {
        navigate(`/account/${response.id}`);
      }
    });
  }

    return (
        <Container  className="account-form-container">
          <h3 className="title">Create account</h3>
          <div onKeyDown={handleKeyPress}>
            <div >
              <label className="input-label">Name</label>
              <br />
              <input
                className="account-input"
                type="text"
                placeholder="Enter name"
                onChange={(event) => handleChangeName(event)}
                value={account.name}
              ></input>
            </div>
            <br />
            
            <div>
              <label className="input-label">Username</label>
              <br />
              <input
                className="account-input"
                type="text"
                placeholder="Enter name"
                onChange={(event) => handleChangeUsername(event)}
                value={account.username}
              ></input>
            </div>
            <br />

            

            <div>
              <label className="input-label">Address</label> 
              <br />
              <input
                className="account-input"
                type="address"
                placeholder="Enter address"
                onChange={(event) => handleChangeAddress(event)}
                value={account.address}
              ></input>
            </div>

            <div>
              <label className="input-label">Email</label> <br />
              <input
                className="account-input"
                type="email"
                style={{ width: "75%" }}
                placeholder="Enter email address"
                onChange={(event) => handleChangeEmail(event)}
                value={account.email}
              ></input>
            </div>
            <br />
            <div>
              <label className="input-label">Password</label> <br />
              <input
                className="account-input"
                type="email"
                placeholder="Enter password"
                onChange={(event) => handleChangePassword(event)}
                value={account.password}
              ></input>
            </div>
            <br />
    
    
            <div className="d-flex flex-row">
              <Button
                className="btn btn-success my-4"
                disabled={isDisabled}
                onClick={submit}
              >
                Submit
              </Button>
              <Button className="mx-2 my-4" onClick={reset}>
                Reset
              </Button>
              <p className="error">
                {error !== "" ? <p style={{ color: "red" }}>{error}</p> : ""}
              </p>
            </div>
          </div>
    
        </Container>
      );
    };