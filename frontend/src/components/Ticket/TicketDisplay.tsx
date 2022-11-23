import "./TicketDisplay.scss";
import { Ticket } from "../../models";

export const TicketDisplay = (props: {ticket: Ticket}) => {

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

  if (!props.ticket) {
    return <div>Loading data ...</div>;
  } else {
    const age = getAge(props.ticket.dob)
    const date = props.ticket.flight_date.split('T')[0]
    return (
      <div >
        <div className="ticket-display-container">
            <img className="ticket-display-ticket" src="https://i.pinimg.com/originals/f2/92/88/f29288889932d16f829b97a3a8311dcd.jpg" />
            <div className="ticket-display-info">
        <p >Name {props.ticket.name}</p>
        <p>Gender {props.ticket.gender}</p>
        <p>Age {age} years old</p>
        <p>Flight date {date}</p>
        <p>Flight time 12:00</p>
        <p>Rover Perseverance</p>
        <p>Departure from Earth</p>
        <p>Ticket id {props.ticket.ticket_id}</p>
        </div>
        </div>
      </div>
    );
  }
};
