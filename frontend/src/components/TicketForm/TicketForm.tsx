import React, { useState } from "react";
import { createTicket } from "../../apiClient";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Ticket } from "../../models";
import "./TicketForm.scss";

export const TicketForm = () => {
  const [error, setError] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const [ticket, setTicket] = useState<Ticket>({
    id: null,
    name: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    photo: "",
    flight_date: "",
    rover: "",
    created_at: "",
  });

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.name = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.gender = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeDob = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.dob = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.address = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.phone = event.target.value;
    setTicket({ ...ticket });
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.email = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.photo = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeFlightDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.flight_date = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeRover = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.rover = event.target.value;
    setTicket({ ...ticket });
  };

  const handleKeyPress = (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      submit();
    }
  };

  const reset = () => {
    setTicket({
      id: null,
      name: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      flight_date: "",
      rover: "",
      photo: "",
      created_at: "",
    });
    setError("");
    setDisabled(false);
  };

  const submit = () => {
    const request = {
      id: null,
      name: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      flight_date: "",
      photo: "",
      rover: "",
      created_at: "",
    };

    request.name = ticket.name;
    request.gender = ticket.gender;
    request.dob = ticket.dob;
    request.address = ticket.address;
    request.email = ticket.email;
    request.flight_date = ticket.flight_date;
    request.photo = ticket.photo;
    request.rover = ticket.rover;

    createTicket(request).then((response) => {
      if (!response.success) {
        setError(response.error.slice(1, -1));
      } else {
        navigate(`/ticket/${response.ticket_id}`);
      }
    });
  }

    return (
      <div>
    <div>
          <label>
            <h3 className="ticket-form-label">Name</h3>
          <input
          className="ticket-form-input"
            type="text"
            placeholder="Enter name"
            onChange={(event) => handleChangeName(event)}
            value={ticket.name}
          ></input>
          </label>

          <label><h3 className="ticket-form-label">Gender</h3>
          <select
          className="ticket-form-input"
            //onChange={handleChangeGender}
            value={ticket.gender}
          >
            <option>Choose gender</option>
            <option>Female</option>
            <option>Male</option>
          </select>
          </label>

          <label>
                     
          <h3 className="ticket-form-label">Date of birth</h3>
          <input
          className="ticket-form-input"
            type="date"
            onChange={(event) => handleChangeDob(event)}
            value={ticket.dob}
          ></input>
          </label>

          <label>
          <h3 className="ticket-form-label">Address</h3>
          <input
          className="ticket-form-input"
            type="address"
            placeholder="Enter address"
            onChange={(event) => handleChangeAddress(event)}
            value={ticket.address}
          ></input>
          </label>

          <label>
          <h3 className="ticket-form-label">Phone</h3>
          <input
          className="ticket-form-input"
            type="tel"
            placeholder="+44 xxxx xxxxxx"
            onChange={(event) => handleChangePhone(event)}
            value={ticket.phone}
          ></input>
          </label>

          <label>
          <h3 className="ticket-form-label">Email</h3>
          <input
          className="ticket-form-input"
            type="email"
            placeholder="Enter email address"
            onChange={(event) => handleChangeEmail(event)}
            value={ticket.email}
          ></input>
          </label>

          <label>
          <h3 className="ticket-form-label">Photo</h3>
          <input
          className="ticket-form-input"
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            onChange={(event) => handleChangePhoto(event)}
            value={ticket.photo}
          ></input>
          </label>

          <label>
          <h3 className="ticket-form-label">Flight date</h3>
          <input
          className="ticket-form-input"
            type="date"
            onChange={(event) => handleChangeFlightDate(event)}
            value={ticket.flight_date}
          ></input>
          </label>

          <label>
          <h3 className="ticket-form-label">Rover</h3>
          <input
          className="ticket-form-input"
            onChange={(event) => handleChangeRover(event)}
            value={ticket.rover}
          ></input>
          </label>
        </div>

        <button onClick={submit}>Submit</button>
        <button onClick={reset}>Reset</button>
      </div>
    );
};
