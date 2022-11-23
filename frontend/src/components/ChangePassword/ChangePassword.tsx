import { SetStateAction, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { changePassword, getAccountById } from "../../apiClient";
import { Account } from "../../models";
import "./ChangePassword.css";

export const ChangePassword = () => {
  const [account, setAccount] = useState<Account>();
  const params = useParams();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const id = params.id;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    getAccountById(Number(id)).then((response) => {
      setAccount(response.account);
    });
  }, []);

  const handleChangeCurrentPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setError("");
    setCurrentPassword(event.target.value);
  };

  const handleChangeNewPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewPassword(event.target.value);
    setError("");
  };

  const handleChangeConfirmNewPassword = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmNewPassword(event.target.value);
    setError("");
  };

  const submit = () => {
    const request = {
      currentPassword: "",
      newPassword: "",
      email: "",
    };

    request.currentPassword = currentPassword;
    request.newPassword = newPassword;
    
    if (account) {
      request.email = account.email;
    }

    if (!currentPassword) {
      setError("Enter current password");
    } else if (!newPassword) {
      setError("Enter new password");
    } else if (!confirmNewPassword) {
      setError("Confirm new password");
    } else if (newPassword !== confirmNewPassword) {
      setError("Your new passwords do not match");
    } else {
      changePassword(
        Number(id),
        request.currentPassword,
        request.newPassword,
        request.email
      ).then((response: { success: any; error: SetStateAction<string> }) => {
        if (!response.success) {
          setError(response.error);
        } else {
          setMessage(
            `${account?.name}, you successfully updated your password`
          );
        }
      });
    }
  };

  const reset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
    setMessage("");
  };

  if (!account) {
    return <h3>Data is loading ...</h3>;
  } else {
    return (
      <div className="change-password-container">
        <h3>Change your password</h3>
        <div>
          {account.photo ? (
            <img className="change-password-photo" src={account.photo} />
          ) : (
            <img
              className="change-password-image-default"
              src="https://cdn-icons-png.flaticon.com/512/1000/1000613.png?w=360"
            />
          )}
        </div>

        <div className="change-password-input-container">
          <label>Current password</label>
          <input
            className="change-password-input"
            type="password"
            onChange={handleChangeCurrentPassword}
            value={currentPassword}
          ></input>
          <label>New password</label>
          <input
            className="change-password-input"
            type="password"
            onChange={handleChangeNewPassword}
            value={newPassword}
          ></input>
          <label>Confirm new password</label>
          <input
            className="change-password-input"
            type="password"
            onChange={handleChangeConfirmNewPassword}
            value={confirmNewPassword}
          ></input>
        </div>
        <div>
          <button className="change-password-button" onClick={submit}>
            Submit
          </button>
          <button className="change-password-button" onClick={reset}>
            Reset
          </button>
        </div>

        {error ? (
          <div className="change-password-error display-linebreak">{error}</div>
        ) : (
          <div className="change-password-error">{message}</div>
        )}
        <Link to={`/account/${id}/info`} className="change-password-link">
          {" "}
          Back to your profile
        </Link>
      </div>
    );
  }
};
