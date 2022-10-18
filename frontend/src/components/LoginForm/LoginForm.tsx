import "./LoginForm.scss"
import { useNavigate } from "react-router-dom";
import { Login } from "../../models";
import { useState } from "react";
import { login } from "../../apiClient";

export const LoginForm = () => {
  const [user, setUser] = useState<Login>({
    email: "",
    password: ""
  });
  const navigate = useNavigate();
  const [error, setError] = useState("");
  
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    user.email = event.target.value;
    setUser({ ...user });
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
   user.password = event.target.value;
    setUser({ ...user });
  };

  const submit = () => {
    const request: Login = {
      email: "",
      password: "",
    };
    
    request.email = user.email;
    request.password = user.password;

    login(request).then((response) => {
      console.log(response)
      if (!response.success) {
        setError(response.error);
      } else {
        navigate(`/account/${response.id}`);
      }
    });
  };
  
  return(
    <div>
      <img className="login-form-image"
        src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
      />
      <label>
        <h3 className="login-title">Email</h3>
        <input className="login-input" type="text" onChange={handleChangeEmail} />
      </label>
      <label>
        <h3 className="login-title">Password</h3>
        <input className="login-input" type="password" onChange={handleChangePassword}/>
      </label>
      <div>
        <button className="login-button" type="submit" onClick={submit}>Submit</button>
      </div>
    </div>
  )
}


