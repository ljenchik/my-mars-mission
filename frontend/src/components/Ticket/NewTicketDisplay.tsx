import { useEffect, useState } from "react";
import { getTicketById } from "../../apiClient";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./TicketDisplay.scss";
import { Ticket } from "../../models";
import { ROOT_FOLDER } from "../../navigateRoot";

export const NewTicketDisplay = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const ticket_id = Number(params.id);

  const [ticket, setTicket] = useState<Ticket>();

  const getAge = (dateString: string) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    getTicketById(ticket_id).then((response) => {
      if (!response.success) {
        navigate(`${ROOT_FOLDER}/account/login`);
      }
      setTicket(response.ticket);
    });
  }, []);

  if (!ticket) {
    return <div>Loading data ...</div>;
  } else {
    const age = getAge(ticket.dob);
    const date = ticket.flight_date.split("T")[0];
    return (
      <div className="ticket-display-container">
        <img
          className="ticket-display-ticket"
          src="https://i.pinimg.com/originals/f2/92/88/f29288889932d16f829b97a3a8311dcd.jpg"
        />
        <div className="ticket-display-info">
          <p>Name {ticket.name}</p>
          <p>Gender {ticket.gender}</p>
          <p>Age {age} years old</p>
          <p>Flight date {date}</p>
          <p>Flight time 12:00</p>
          <p>Rover Perseverance</p>
          <p>Departure from Earth</p>
          <p>Ticket id {ticket.ticket_id}</p>
        </div>
        <br/>
        <Link to={`${ROOT_FOLDER}account/${ticket.owner_id}/info`} className="change-password-link">
          Back to your profile
        </Link>
      </div>
    );
  }
};
