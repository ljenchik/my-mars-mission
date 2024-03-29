import { Link } from "react-router-dom";
import "./MarsHolidays.scss";

export function MarsHolidays() {
return (
    <div className="mars-holidays-container stars twinkling">
      <h2 className="mars-holidays-title"><span className="nowrap">Would you dare</span> <span className="nowrap">go to Mars?</span></h2>
      <h3 className="mars-holidays-subtitle">
        <Link to={`/account/create`}>
          <button className="mars-holidays-button-link" >
            Create account
          </button>
        </Link>{" "}
        or{" "}
        <Link to={`/account/login`}>
          <button className="mars-holidays-button-link" >
            Log in
          </button>
        </Link>{" "}
        to book <span className="nowrap">your ticket to Mars</span>
      </h3>
      <img
        className="mars-holidays-image"
        src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
      />
      <div className="mars-holidays-button-container">
      <Link to={`/account/create`}>
        <button className="mars-holidays-button">
        Create account
        </button>
      </Link>
      <Link to={`/account/login`}>
        <button className="mars-holidays-button">
        Log in
        </button>
      </Link>
      </div>
    </div>
  );
}
