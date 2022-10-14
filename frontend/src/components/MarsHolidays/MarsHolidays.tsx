import { useState } from "react";
import { AccountForm } from "../Account/AccountForm";
import "./MarsHolidays.scss";

export function MarsHolidays() {
  const [display, setDisplay] = useState(false);

  const createAccount = () => {
    setDisplay(true);
  };

  return (
    <div>
        <button onClick={createAccount}>Create account</button>
      <button>Log in</button>

      {display === true ? (
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
      ) : (
        <div className="ticket-container">
          <h2 className="ticket-title">Would you dare go to Mars?</h2>
          <img
            className="ticket-image"
            src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
          />
        </div>
      )}
    </div>
  );
}
