import React, { useEffect, useState } from "react";
import { createTicket, getAccountById } from "../../apiClient";
import { useNavigate, useParams } from "react-router-dom";
import { Account, Ticket } from "../../models";
import "./TicketForm.scss";
import { validateImage } from "image-validator";
import { ROOT_FOLDER } from "../../navigateRoot";

const urlValidation = async (url: string) => {
  const isValidImage = await validateImage(url);
  return isValidImage;
};

export const TicketForm = () => {
  const [error, setError] = useState("");
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  const id = Number(params.id);
  const [account, setAccount] = useState<Account>();
  var date = new Date();
  const [isValidPhoto, setIsValidPhoto] = useState<boolean>(true);

  var date_1 = new Date(date.setMonth(date.getMonth() + 6)).toLocaleString().split(",")[0];
  var date_2 = new Date(date.setMonth(date.getMonth() + 12)).toLocaleString().split(",")[0];
  var date_3 = new Date(date.setMonth(date.getMonth() + 20)).toLocaleString().split(",")[0];

  const [ticket, setTicket] = useState<Ticket>({
    ticket_id: null,
    name: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    photo: "",
    flight_date: "",
    owner_id: id,
    created_at: "",
  });

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    console.log(accessToken);
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
    setError("");
  };

  const handleChangeGender = (event: React.ChangeEvent<HTMLSelectElement>) => {
    ticket.gender = event.target.value;
    setTicket({ ...ticket });
    setError("");
  };

  const handleChangeDob = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.dob = event.target.value;
    setTicket({ ...ticket });
    setError("");
  };

  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.address = event.target.value;
    setTicket({ ...ticket });
    setError("");
  };

  const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.phone = event.target.value;
    setTicket({ ...ticket });
    setError("");
  };
  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.email = event.target.value;
    setTicket({ ...ticket });
    setError("");
  };

  const handleChangePhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    ticket.photo = event.target.value;
    var isValid = urlValidation(ticket.photo);
    if (await isValid && ticket.photo) {
      setTicket({ ...ticket });
      setIsValidPhoto(true);
    } else {
      setIsValidPhoto(false);
      ticket.photo = "";
    }
    setError("");
  };

  const handleChangeFlightDate = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    ticket.flight_date = event.target.value
   // ticket.flight_date = ticket.flight_date.split("/").reverse().join("-");
    setTicket({ ...ticket });
    setError("");
  };

  const handleKeyPress = (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      submit();
    }
  };

  const reset = () => {
    setTicket({
      ticket_id: null,
      name: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      flight_date: "",
      photo: "",
      owner_id: id,
      created_at: "",
    });
    setError("");
    setDisabled(false);
  };

  const submit = () => {
    const request = {
      ticket_id: null,
      name: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      flight_date: "",
      photo: "",
      owner_id: id,
      created_at: "",
    };

    request.name = ticket.name;
    request.gender = ticket.gender;
    request.dob = ticket.dob;
    request.address = ticket.address;
    request.phone = ticket.phone;
    request.email = ticket.email;
    request.flight_date = ticket.flight_date;
    request.photo = ticket.photo;


    createTicket(request).then((response) => {
      if (!response.success) {
        setError(response.error);
      } else {
        navigate(`${ROOT_FOLDER}ticket/${response.ticket_id}`);
      }
    });
  };

  return (
    <div className="ticket-form-container">
      <div className="ticket-form-subcontainer">
      <div className="ticket-title">
        {account?.name}, please fill in{" "}
        <span className="nowrap">the information required </span>
      </div>

      <label
        className={
          error.includes("name")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }
      >
        <p>Name</p>
      </label>
      <input
        className={
          error.includes("name")
            ? "ticket-form-input highlight-box"
            : "ticket-form-input"
        }
        type="text"
        placeholder="Enter name"
        onChange={(event) => handleChangeName(event)}
        value={ticket.name}
      ></input>

      <label className={
          error.includes("gender")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }>
        <p>Gender</p>
        </label>
        <select
        className={
          error.includes("gender")
            ? "ticket-form-input highlight-box"
            : "ticket-form-input"
        }
          onChange={(event) => handleChangeGender(event)}
          value={ticket.gender}
        >
          <option>Choose gender</option>
          <option>Female</option>
          <option>Male</option>
        </select>
      

      <label className={
          error.includes("birth")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }>
        <p>Date of birth</p>
        </label>
        <input
         className={
          error.includes("birth")
            ? "ticket-form-input highlight-box"
            : "ticket-form-input"
        }
          type="date"
          onChange={(event) => handleChangeDob(event)}
          value={ticket.dob}
        ></input>
      

      <label className={
          error.includes("address")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }>
        <p >Address</p>
        </label>
        <input
          className={
            error.includes("address")
              ? "ticket-form-input highlight-box"
              : "ticket-form-input"
          }
          type="address"
          placeholder="Enter address"
          onChange={(event) => handleChangeAddress(event)}
          value={ticket.address}
        ></input>
      

      <label className={
          error.includes("phone")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }>
        <p >Phone</p>
        </label>
        <input
          className={
            error.includes("phone")
              ? "ticket-form-input highlight-box"
              : "ticket-form-input"
          }
          type="tel"
          placeholder="+44 xxxx xxxxxx"
          onChange={(event) => handleChangePhone(event)}
          value={ticket.phone}
        ></input>
      

      <label className={
          error.includes("email")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }>
        <p >Email</p>
        </label>
        <input
          className={
            error.includes("email")
              ? "ticket-form-input highlight-box"
              : "ticket-form-input"
          }
          type="email"
          placeholder="Enter email address"
          onChange={(event) => handleChangeEmail(event)}
          value={ticket.email}
        ></input>
      

      <label className={
          error.includes("photo")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }>
        <p >Photo</p>
        </label>
        <input
          className={
            error.includes("photo")
              ? "ticket-form-input highlight-box"
              : "ticket-form-input"
          }
          type="url"
          placeholder="https://example.com"
          pattern="https://.*"
          onChange={(event) => handleChangePhoto(event)}
          value={ticket.photo}
        ></input>
      

      <label className={
          error.includes("flight")
            ? "ticket-form-label highlight-label"
            : "ticket-form-label"
        }>
        <p >Flight date</p>
        </label>
        <select
          className={
            error.includes("flight")
              ? "ticket-form-input highlight-box"
              : "ticket-form-input"
          }
          onChange={(event) => handleChangeFlightDate(event)}
          value={ticket.flight_date}
        >
          <option>Choose flight date</option>
          <option>{date_1}</option>
          <option>{date_2}</option>
          <option>{date_3}</option>
        </select>
        </div>  

      <div className="ticket-form-buttons-container">
        <button className="ticket-form-button" onClick={submit}>
          Submit
        </button>
        <button
          className="ticket-form-button"
          onClick={reset}
          onKeyPress={handleKeyPress}
        >
          Reset
        </button>
      </div>
      {error ? <div className="ticket-form-error">{error}</div> : ""}
    </div>
  );
};

