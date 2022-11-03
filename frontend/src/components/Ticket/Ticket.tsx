import React, { useEffect, useState } from "react";
import { createTicket, getAccountById } from "../../apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { Account} from "../../models";
import "./Ticket.css";

export const Ticket = () => {
    return <div>Congratulations! You are flying to Mars!</div>
}