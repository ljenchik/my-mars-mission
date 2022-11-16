import { SetStateAction, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { changePassword, getAccountById } from "../../apiClient";
import { Account } from "../../models";
import "./ChangePassword.css";

export const ChangePassword = () => {
  const [account, setAccount] = useState<Account>();
  const params = useParams();
  const [error, setError] = useState("");
  const id = params.id;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
    getAccountById(Number(id)).then((response) => {
      setAccount(response.account);
    });
  }, []);

  const handleChangeCurrentPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentPassword(event.target.value);
  };

  const handleChangeNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleChangeConfirmNewPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmNewPassword(event.target.value);
  };

  const submit = () => {
    const request = {
      currentPassword: "",
      newPassword: "",
      email: ""
    };

    request.currentPassword = currentPassword;
    request.newPassword = newPassword;
    if (account) {
        request.email = account.email
    }
   
    changePassword(Number(id), request.currentPassword, request.newPassword, request.email).then((response: { success: any; error: SetStateAction<string>; }) => {
      if (!response.success) {
        setError(response.error);
      } else {
        navigate(`/account/${id}`);
      }
    });
  };

  const reset = () => {
    setCurrentPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
    setError("");
}

  if (!account) {
    return <h3>Data is loading ...</h3>;
  }
//   else if (!newPassword || !confirmNewPassword) {
//     return <h3>Enter new password</h3>
//   }
//   else if (newPassword !== confirmNewPassword) {
//     return <h3>Your password and confirmation password do not match</h3>
//   }
  else {
    return (
      <div className="change-password-container">
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
          <input type="password" onChange={handleChangeCurrentPassword} value={currentPassword}></input>
          <label>New password</label>
          <input type="password" onChange={handleChangeNewPassword} value={newPassword}></input>
          <label>Confirm new password</label>
          <input type="password" onChange={handleChangeConfirmNewPassword} value={confirmNewPassword}></input>
          <div>
            <button onClick={submit}>Submit</button>
            <button onClick={reset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
};
