import { useState, useEffect, RefAttributes } from "react";
import { Button, OverlayTrigger, Tooltip, TooltipProps } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAccountById } from "../../apiClient";
import { Account } from "../../models";
import { ROOT_FOLDER } from "../../navigateRoot";
import { TicketForm } from "../TicketForm/TicketForm";
import "./UserProfile.scss";

const renderTooltip = (
  props: JSX.IntrinsicAttributes & TooltipProps & RefAttributes<HTMLDivElement>
) => (
  <Tooltip className="overlay-photo-text" {...props}>
    <p> Click to see and </p>
    <p>edit your profile</p>
  </Tooltip>
);

export function UserProfile() {
  const [account, setAccount] = useState<Account>();
  const params = useParams();
  const [error, setError] = useState("");
  const id = params.id;
  const [display, setDisplay] = useState(false);
  const navigate = useNavigate();
  const defaultImageProfile =
    "https://cdn-icons-png.flaticon.com/512/1000/1000613.png?w=360";

  const createTicket = () => {
    navigate(`${ROOT_FOLDER}account/${id}/ticket`);
  };

  const myTickets = () => {
    navigate(`${ROOT_FOLDER}account/${id}/tickets`);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken)
    getAccountById(Number(id)).then((response) => {
      console.log(response);
      response.account.created_at = response.account.created_at.split("T")[0];
      if (response.account.updated_at) {
        response.account.updated_at = response.account.updated_at.split("T")[0];
      }
      setAccount(response.account);
    });
  }, []);

  if (!account) {
    return <h3>Data is loading ...</h3>;
  } else {
    return (
      <div className="profile-container">
        {display === true ? (
          <div>
            <h2>{account.name}, enter your details</h2>
            <div className="profile-container">
              <TicketForm />
            </div>
          </div>
        ) : (
          <div className="profile-subcontainer">
            <div>
              <h2>Hello {account.name}!</h2>
              <h4>
                Would you dare <span className="nowrap">go to Mars?</span>
              </h4>
            </div>
            <OverlayTrigger
              placement="bottom"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <Link to={`${ROOT_FOLDER}account/${id}/info`} className="profile-photo-link">
                {account.photo ? (
                  <img className="profile-photo" src={account.photo} />
                ) : (
                  <img
                    className="profile-image-default"
                    src={defaultImageProfile}
                  />
                )}
              </Link>
            </OverlayTrigger>
          </div>
        )}
        <img
          className="profile-ticket-image"
          src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"
        />

        <div>
          <button className="profile-button" onClick={createTicket}>
            Book ticket
          </button>

          <button className="profile-button" onClick={myTickets}>
            My tickets
          </button>
        </div>
        <img
          className="profile-ticket-image-cropped"
          src="https://media.cnn.com/api/v1/images/stellar/prod/220713151211-01-perseverance-rover-scouting-mission.jpg?c=16x9&q=h_720,w_1280,c_fill"
        />
      </div>
    );
  }
}
