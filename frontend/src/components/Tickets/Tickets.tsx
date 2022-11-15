import { useEffect, useState } from "react";
import {getTicketsByOwnerId } from "../../apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { Ticket } from "../../models";
import { TicketDisplay } from "../Ticket/ticket";
import "./Tickets.css"

export const Tickets = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    getTicketsByOwnerId(id).then((response) => {
        console.log("response", response)
      if (!response.success) {
        navigate(`/account/login`);
      }
      setTickets(response.tickets);
    });
  }, []);

  console.log("tickets", tickets);

  if (!tickets) {
    return <div>Loading data ...</div>;
  } else {
    return (
      <div>
        
        {tickets.map((ticket: any) => {
            return (
                <><div className="ticket-list">{ticket.name}'s ticket</div><TicketDisplay ticket_id={ticket.ticket_id} /></>
            );
          })}
    </div>
    );
  }
};
