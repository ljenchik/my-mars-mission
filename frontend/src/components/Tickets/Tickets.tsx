import { useEffect, useState } from "react";
import {getTicketsByOwnerId } from "../../apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { Ticket } from "../../models";
import "./Tickets.scss"
import {TicketDisplay } from "../Ticket/TicketDisplay";

export const Tickets = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    getTicketsByOwnerId(id).then((response) => {
      if (!response.success) {
        navigate(`/account/login`);
      }
      setTickets(response.tickets);
    });
  }, []);

  if (!tickets) {
    return <div>Loading data ...</div>;
  } else {
    return (
      <div>
        {tickets.map((ticket: Ticket) => {
            return (
                <div className="tickets-list">
                  <TicketDisplay ticket={ticket}/>
                </div>
            );
          })}
    </div>
    );
  }
};
