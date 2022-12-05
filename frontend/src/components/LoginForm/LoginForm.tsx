import "./LoginForm.scss";
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
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.email = event.target.value;
    setError("");
    setUser({ ...user });
    setDisabled(false);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.password = event.target.value;
    setError("");
    setUser({ ...user });
    setDisabled(false);
  };

  const submit = () => {
    const request: Login = {
      email: "",
      password: "",
    };

    if (!user.email && !user.password) {
      setError("Enter email and password");
    } else if (!user.email) {
      setError("Enter email");
    } else if (!user.password) {
      setError("Enter password");
    } else {
      request.email = user.email;
      request.password = user.password;
      setLoading(true);

      login(request).then((response) => {
        if (!response.success) {
          setError(response.error);
        } else {
          localStorage.setItem("accessToken", response.accessToken);
          console.log(response.accessToken)
          navigate(`${ROOT_FOLDER}account/${response.id}`);
        }
      });
    }
  };

  return (
    <div className="login-container">
      <img
        className="login-form-image"
        alt="mars ticket image"
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
        <button
          disabled={disabled}
          className="login-button"
          type="submit"
          onClick={submit}
        >
          {loading ? "Loading" : "Submit"}
        </button>
      </div>
      <span
        data-testid="error"
        style={{ visibility: error ? "visible" : "hidden" }}
      >
        {error ? <div className="login-form-error">{error}</div> : ""}
      </span>
    </div>
  );
};
