import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountForm } from "../Account/AccountForm";
import { LoginForm } from "../LoginForm/LoginForm";
import "./MarsHolidays.scss";

export function MarsHolidays() {
  const [displayAccountForm, setDisplayAccountForm] = useState(false);
  const [displayLoginForm, setDisplayLoginForm] = useState(false);

  const createAccount = () => {
    setDisplayAccountForm(true);
  };

  const logIn = () => {
    setDisplayLoginForm(true);
  };

  return (
    <div>
      {displayAccountForm === true ? (
        <div>
          <div className="ticket-container">
            <h2 className="ticket-title">Would you dare go to Mars?</h2>
            <img
              className="ticket-image-cropped"
              src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
            />
            <AccountForm />
          </div>
        </div>
      ) : displayLoginForm === true ? (
        <div>
          <div className="ticket-container">
            <h2 className="ticket-title">Would you dare go to Mars?</h2>
            <h4 className="ticket-subtitle">Log in to book your ticket</h4>
            <img
              className="ticket-image-cropped"
              src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
            />
            <LoginForm />
          </div>
        </div>
      ) : (
        <div className="ticket-container">
          <h2 className="ticket-title">Would you dare go to Mars?</h2>
          <h4 className="ticket-subtitle">
            <Link to="/mars-holidays">
              <button className="ticket-button-link" onClick={createAccount}>
                Create account
              </button>
            </Link> {' '}
            or{' '}
            <Link to="/mars-holidays">
              <button className="ticket-button-link" onClick={logIn}>
                Log in
              </button>
            </Link>{' '}
            to book your ticket to Mars
          </h4>
          <img
            className="ticket-image"
            src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
          />
          <Link to="/mars-holidays">
            <button className="ticket-button" onClick={logIn}>
              Log in
            </button>
          </Link>
          <Link to="/mars-holidays">
            <button className="ticket-button" onClick={createAccount}>
              Create account
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
