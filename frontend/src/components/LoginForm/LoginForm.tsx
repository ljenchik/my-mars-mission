import "./LoginForm.scss"

export const LoginForm = () => {
  return(
    <div>
      <img className="login-form-image"
        src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
      />
      <label>
        <h3 className="login-title">Username or email</h3>
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