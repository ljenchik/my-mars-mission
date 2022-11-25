import "./LoginForm.css";
import { useNavigate } from "react-router-dom";
import { Login } from "../../models";
import { useState } from "react";
import { login } from "../../apiClient";
import { ROOT_FOLDER } from "../../navigateRoot";

export const LoginForm = () => {
  const [user, setUser] = useState<Login>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.email = event.target.value;
    setError("");
    setUser({ ...user });
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.password = event.target.value;
    setError("");
    setUser({ ...user });
  };

  const submit = () => {
    const request: Login = {
      email: "",
      password: "",
    };

    if (user.email) {
      request.email = user.email;
    } 

    if (user.password) {
      request.password = user.password;
    }
    
    login(request).then((response) => {
      if (!response.success) {
        setError(response.error);
      } else {
        localStorage.setItem("accessToken", response.accessToken);
        navigate(`${ROOT_FOLDER}account/${response.id}`);
      }
    });
  };

    return (
      <div className="login-container">
        <img
          className="login-form-image"
          src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
        />
        <p className="login-title">Log in</p>
        <label>
          <p className="login-subtitle">Email</p>
          <input
            name="Email"
            className="login-input"
            type="text"
            placeholder="Enter email"
            onChange={handleChangeEmail}
          />
        </label>
        <label>
          <p className="login-subtitle">Password</p>
          <input
            name="Password"
            className="login-input"
            type="password"
            placeholder="Enter password"
            onChange={handleChangePassword}
          />
        </label>

        <div>
          <button className="login-button" type="submit" onClick={submit}>
            Submit
          </button>
        </div>
        {error ? <div className="login-form-error">{error}</div> : ""}
      
      
        <img
              className="login-form-image"
              src="https://media.cnn.com/api/v1/images/stellar/prod/220713151211-01-perseverance-rover-scouting-mission.jpg?c=16x9&q=h_720,w_1280,c_fill"
            />
      
      </div>
    );
};
