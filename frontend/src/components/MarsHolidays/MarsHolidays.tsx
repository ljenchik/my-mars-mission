import { useState } from "react";
import { Link } from "react-router-dom";
import { AccountForm } from "../Account/AccountForm";
import { LoginForm } from "../LoginForm/LoginForm";
import "./MarsHolidays.scss";

export function MarsHolidays() {
return (
    <div className="ticket-container">
      <h2 className="ticket-title">Would you dare go to Mars?</h2>
      <h4 className="ticket-subtitle">
        <Link to="/account/create">
          <button className="ticket-button-link" >
            Create account
          </button>
        </Link>{" "}
        or{" "}
        <Link to="/account/login">
          <button className="ticket-button-link" >
            Log in
          </button>
        </Link>{" "}
        to book your ticket to Mars
      </h4>
      <img
        className="ticket-image"
        src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
      />
      <Link to="/account/login">
        <button className="ticket-button">
          Log in
        </button>
      </Link>
      <Link to="/account/create">
        <button className="ticket-button">
          Create account
        </button>
      </Link>
    </div>
  );
}
