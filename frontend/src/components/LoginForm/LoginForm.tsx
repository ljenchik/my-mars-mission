import "./LoginForm.scss"

export const LoginForm = () => {
  return(
    <div>
      <label>
        <h3 className="login-title">Username</h3>
        <input className="login-input" type="text" />
      </label>
      <label>
        <h3 className="login-title">Password</h3>
        <input className="login-input" type="password" />
      </label>
      <div>
        <button className="login-button" type="submit" >Submit</button>
      </div>
    </div>
  )
}