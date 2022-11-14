import { useEffect, useState } from "react";
import { getAccountById, getTicketById } from "../../apiClient";
import { useNavigate, useParams } from "react-router-dom";
import "./Ticket.css";
import { Account, Ticket } from "../../models";

export const TicketDisplay = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
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
    getTicketById(Number(id)).then((response) => {
      if (!response.success) {
        navigate(`/account/login`);
      }
      setTicket(response.ticket);
    });
  }, []);

  

  if (!ticket) {
    return <div>Loading data ...</div>;
  } else {
    const age = getAge(ticket.dob)
    const date = ticket.flight_date.split('T')[0]
    return (
      <div >
        <div className="title">Congratulations! {ticket.name} is flying to Mars!</div>
        <div className="ticket-container">
          <div className="ticket-info">
        <p >Name {ticket.name}</p>
        <p>Gender {ticket.gender}</p>
        <p>Age {age} years old</p>
        <p>Flight date {date}</p>
        <p>Flight time 12:00</p>
        <p>Rover Perseverance</p>
        <p>Ticket id {ticket.ticket_id}</p>
        </div>
        </div>
      </div>
    );
  }
};
