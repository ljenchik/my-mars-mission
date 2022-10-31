import { useState, useEffect } from "react";
import {Link, useParams } from "react-router-dom";
import { getAccountById} from "../../apiClient";
import { Account } from "../../models";
import { TicketForm } from "../TicketForm/TicketForm";
import "./UserProfile.scss";

export function UserProfile() {
  const [account, setAccount] = useState<Account>();
  const params = useParams();
  const id = params.id;
  const [display, setDisplay] = useState(false);

  const createTicket = () => {
    setDisplay(true);
  };

  useEffect(() => {
  const accessToken = localStorage.getItem("accessToken");
    getAccountById(Number(id)).then((response) => {
      response.account.created_at = response.account.created_at.split("T")[0];
      if (response.account.updated_at) {
        response.account.updated_at = response.account.updated_at.split("T")[0];
      }
      setAccount(response.account);
    });
  }, []);

  if (!account) {
    return (<h3 className="greeting">Data is loading ...</h3>);
  } else {
    return (
      <div>
        <Link to={`/account/${id}/update`}> 
        <img className="profile-image" src="https://cdn-icons-png.flaticon.com/512/1000/1000613.png?w=360"/>
        </Link>
       

        <h4 className="profile-greeting">Hello {account.name}!</h4>

        {display === true ? (
          <div>
            <div className="ticket-container">
              <h2 className="ticket-title">Would you dare go to Mars?</h2>
              <img
                className="ticket-image-cropped"
                src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
              />
              <TicketForm />
            </div>
          </div>
        ) : (
          <div className="ticket-container">
            <h2 className="ticket-title">Would you dare go to Mars?</h2>
            <img
              className="ticket-image"
              src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
            />
          <button className="profile-button" onClick={createTicket}>Book ticket</button>
          </div>
        )}
      </div>
    );
  }
}
