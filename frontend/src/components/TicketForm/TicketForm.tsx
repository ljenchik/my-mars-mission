import React, { useState } from "react";
import { createTicket } from "../../apiClient";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Ticket } from "../../models";

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
      <Container>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            style={{ width: "75%" }}
            placeholder="Enter name"
            onChange={(event) => handleChangeName(event)}
            value={ticket.name}
          ></input>
        </div>

        <div>
          <label>Gender</label>
          <br />

          <input
            type="text"
            style={{ width: "75%" }}
            onChange={(event) => handleChangeGender(event)}
            value={ticket.gender}
          ></input>

          {/* <select
            style={{ width: "75%", height: "30px" }}
            onChange={handleChangeGender}
            value={ticket.gender}
          >
            <option>Choose gender</option>
            <option>Female</option>
            <option>Male</option>
          </select> */}
        </div>

        <div>
          <label>Date of birth</label> <br />
          <input
            type="date"
            style={{ width: "75%" }}
            onChange={(event) => handleChangeDob(event)}
            value={ticket.dob}
          ></input>
        </div>

        <div>
          <label>Address</label> <br />
          <input
            type="address"
            style={{ width: "75%" }}
            placeholder="Enter address"
            onChange={(event) => handleChangeAddress(event)}
            value={ticket.address}
          ></input>
        </div>

        <div>
          <label>Phone</label> <br />
          <input
            type="tel"
            style={{ width: "75%" }}
            placeholder="+44 xxxx xxxxxx"
            onChange={(event) => handleChangePhone(event)}
            value={ticket.phone}
          ></input>
        </div>

        <div>
          <label>Email</label> <br />
          <input
            type="email"
            style={{ width: "75%" }}
            placeholder="Enter email address"
            onChange={(event) => handleChangeEmail(event)}
            value={ticket.email}
          ></input>
        </div>

        <div>
          <label>Photo (optional)</label> <br />
          <input
            type="url"
            placeholder="https://example.com"
            pattern="https://.*"
            style={{ width: "75%" }}
            onChange={(event) => handleChangePhoto(event)}
            value={ticket.photo}
          ></input>
        </div>

        <div>
          <label>Flight date</label> <br />
          <input
            type="date"
            style={{ width: "75%" }}
            onChange={(event) => handleChangeFlightDate(event)}
            value={ticket.flight_date}
          ></input>
        </div>

        <div>
          <label>Rover</label> <br />
          <input
            type="date"
            style={{ width: "75%" }}
            onChange={(event) => handleChangeRover(event)}
            value={ticket.rover}
          ></input>
        </div>

        <button onClick={submit}>Submit</button>
        <button onClick={reset}>Reset</button>
      </Container>
    );
};
