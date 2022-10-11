import React, { useState } from "react";

export const TicketForm = () => {
  const [ticket, setTicket] = useState({
    name: "",
    gender: "",
    dob: "",
    address: "",
    phone: "",
    email: "",
    photo: "",
    flight_date: "",
    rover: "",
    updated_at: "",
    created_at: "",
  });

  const handleChangeName = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.name = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeGender = (event: { target: { value: string; }; }) => {
    ticket.gender = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeDob = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.dob = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeAddress = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.address = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangePhone = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.phone = event.target.value;
    setTicket({ ...ticket });
  };
  const handleChangeEmail = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.email = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangePhoto = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.photo = event.target.value;
    setTicket({ ...ticket });
  };

  const handleKeyPress = (event: { keyCode: number }) => {
    if (event.keyCode === 13) {
      submit();
    }
  };

  const handleChangeFlightDate = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.flight_date = event.target.value;
    setTicket({ ...ticket });
  };

  const handleChangeRover = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    ticket.rover = event.target.value;
    setTicket({ ...ticket });
  };

  const reset = () => {
    setTicket({
      name: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      flight_date: "",
      rover: "",
      photo: "",
      updated_at: "",
      created_at: "",
    });
  };

  const submit = () => {
    const request = {
      name: "",
      gender: "",
      dob: "",
      address: "",
      phone: "",
      email: "",
      flight_date: "",
      photo: "",
      rover: "",
      updated_at: "",
      created_at: "",
    };

    // createTicket(request).then((response) =>
    //       navigate(`/ticket/${response.id}`)
    // );
  
  return (
    <div>
        <div>
          <label>Name</label>
          <br />
          <input
            className="input-large-large search-query my-2 mb-3"
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
          <select
            className="input-large-large search-query my-2 mb-3"
            style={{ width: "75%", height: "30px" }}
            onChange={handleChangeGender}
            value={ticket.gender}
          >
            <option>Choose gender</option>
            <option>Female</option>
            <option>Male</option>
          </select>
        </div>

        <div>
          <label>Date of birth</label> <br />
          <input
            className="input-large-large search-query my-2 mb-3"
            type="date"
            style={{ width: "75%" }}
            onChange={(event) => handleChangeDob(event)}
            value={ticket.dob}
          ></input>
        </div>

        <div>
          <label>Address</label> <br />
          <input
            className="input-large-large search-query my-2 mb-3"
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
            className="input-large-large search-query my-2 mb-3"
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
            className="input-large-large search-query my-2 mb-3"
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
            className="input-large-large search-query my-2 mb-3"
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
            className="input-large-large search-query my-2 mb-3"
            type="date"
            style={{ width: "75%" }}
            onChange={(event) => handleChangeFlightDate(event)}
            value={ticket.flight_date}
          ></input>
        </div>

        <div>
          <label>Rover</label> <br />
          <input
            className="input-large-large search-query my-2 mb-3"
            type="date"
            style={{ width: "75%" }}
            onChange={(event) => handleChangeRover(event)}
            value={ticket.rover}
          ></input>
        </div>

        <div className="d-flex flex-row">
          <button
            className="btn btn-success my-4"
            onClick={submit}
          >
            Submit
          </button>
          <button className="mx-2 my-4" onClick={reset}>
            Reset
          </button>
        </div>
      
      </div>
  );
  }
}
