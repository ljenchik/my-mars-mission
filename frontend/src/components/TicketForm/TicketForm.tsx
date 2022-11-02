import React, { DetailedHTMLProps, useEffect, useState } from "react";
import { createTicket, getAccountById } from "../../apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { Account, Ticket } from "../../models";
import "./TicketForm.scss";

export const TicketForm = () => {
  const [error, setError] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const id = params.id;
  const [account, setAccount] = useState<Account>();
  var date = new Date();
  console.log(date)

  var date_1 = new Date(date.setMonth(date.getMonth()+ 6));
  var date_2 = new Date(date.setMonth(date.getMonth()+ 12));
  var date_3 = new Date(date.setMonth(date.getMonth()+ 20));

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

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.name = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    ticket.flight_date = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeRover = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
  };

  return (
    <div className="ticket-form-container">
      <p className="title">Dear {account?.name}, fill in all required details</p>
      <label>
        <p className="ticket-form-label">Name</p>
        <input
          className="ticket-form-input"
          type="text"
          placeholder="Enter name"
          onChange={(event) => handleChangeName(event)}
          value={ticket.name}
        ></input>
      </label>

      <label>
      <p className="ticket-form-label">Gender</p>
        <select
          className="ticket-form-input"
          onChange={(event) => handleChangeGender(event)}
          value={ticket.gender}
        >
          <option>Choose gender</option>
          <option>Female</option>
          <option>Male</option>
        </select>
      </label>

      <label>
      <p className="ticket-form-label">Date of birth</p>
        <input
          className="ticket-form-input"
          type="date"
          onChange={(event) => handleChangeDob(event)}
          value={ticket.dob}
        ></input>
      </label>

      <label>
      <p className="ticket-form-label">Address</p>
        <input
          className="ticket-form-input"
          type="address"
          placeholder="Enter address"
          onChange={(event) => handleChangeAddress(event)}
          value={ticket.address}
        ></input>
      </label>

      <label>
      <p className="ticket-form-label">Phone</p>
        <input
          className="ticket-form-input"
          type="tel"
          placeholder="+44 xxxx xxxxxx"
          onChange={(event) => handleChangePhone(event)}
          value={ticket.phone}
        ></input>
      </label>

      <label>
      <p className="ticket-form-label">Email</p>
        <input
          className="ticket-form-input"
          type="email"
          placeholder="Enter email address"
          onChange={(event) => handleChangeEmail(event)}
          value={ticket.email}
        ></input>
      </label>

      <label>
      <p className="ticket-form-label">Photo</p>
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
      <p className="ticket-form-label">Flight date</p>
        <select
          className="ticket-form-input"
          onChange={(event) => handleChangeFlightDate(event)}
          value={ticket.flight_date}
        >
          <option>Choose flight date</option>
          <option>{date_1.toLocaleDateString()}</option>
          <option>{date_2.toLocaleDateString()}</option>
          <option>{date_3.toLocaleDateString()}</option>
          </select>
      </label>

      <label>
      <p className="ticket-form-label">Rover</p>
        <select
          className="ticket-form-input"
          onChange={(event) => handleChangeRover(event)}
          value={ticket.rover}
        >
          <option>Choose rover</option>
          <option>Perceverance</option>
          <option>Curiocity</option>
          </select>
      </label>
      <div className="ticket-form-buttons-container">
        <button className="ticket-form-button" onClick={submit}>
          Submit
        </button>
        <button className="ticket-form-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
