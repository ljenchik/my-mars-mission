import { useEffect, useState } from "react";
import { getTicketsByOwnerId } from "../../apiClient";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Ticket } from "../../models";
import "./Tickets.scss";
import { TicketDisplay } from "../Ticket/TicketDisplay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRocket, faUserAstronaut } from "@fortawesome/free-solid-svg-icons";

export const Tickets = () => {
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");

    getTicketsByOwnerId(id).then((response) => {
      if (!response.success) {
        navigate(`/my-mars-mission/account/login`);
      }
      setTickets(response.tickets);
    });
  }, []);

  if (tickets.length === 0) {
    return (
      <div className="tickets-no-tickets">
        <div>There are no tickets yet on your account</div>
        <Link
          to={`/my-mars-mission/account/${id}/info`}
          className="tickets-link"
        >
          Back to your profile
        </Link>
      </div>
    );
  } else {
    return (
      <div className="tickets-container">
        {tickets.map((ticket: Ticket) => {
          return (
            <div>
              <TicketDisplay ticket={ticket} />
            </div>
          );
        })}

        <Link
          to={`/my-mars-mission/account/${id}/info`}
          className="tickets-link"
        >
          Back to your profile
        </Link>
      </div>
    );
  }
};
