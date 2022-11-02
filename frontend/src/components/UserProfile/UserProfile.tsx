import { useState, useEffect } from "react";
import {Link, useNavigate, useParams } from "react-router-dom";
import { getAccountById} from "../../apiClient";
import { Account } from "../../models";
import { TicketForm } from "../TicketForm/TicketForm";
import "./UserProfile.scss";

export function UserProfile() {
  const [account, setAccount] = useState<Account>();
  const params = useParams();
  const id = params.id;
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();

  const createTicket = () => {
    navigate(`/account/${id}/ticket`);
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
    return (<h3>Data is loading ...</h3>);
  } else {
    return (
      <section>
        <Link to={`/account/${id}/update`}> 
        <img className="profile-image" src="https://cdn-icons-png.flaticon.com/512/1000/1000613.png?w=360"/>
        </Link>

        {display === true ? (
          <div>
             <h2>{account.name}, enter your details</h2>
            <div className="profile-container">
              <TicketForm />   
            </div>
          </div>
        ) : (
          <div className="profile-container">
             <h2>Hello {account.name}!</h2>
            <h4>Would you dare <span className="nowrap">go to Mars?</span></h4>
            <img
              className="profile-ticket-image-cropped"
              src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
            />
          <button className="profile-button" onClick={createTicket}>Book ticket</button>

          <img
              className="profile-ticket-image-cropped"
              src="https://media.cnn.com/api/v1/images/stellar/prod/220713151211-01-perseverance-rover-scouting-mission.jpg?c=16x9&q=h_720,w_1280,c_fill"
            />
          
          </div>
        )}
          
      </section>

      
      

    );
  }
}
