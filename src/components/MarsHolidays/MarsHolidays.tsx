import { Link } from "react-router-dom"
import "./MarsHolidays.scss"


export function MarsHolidays() {
  return (
    <div className="ticket-container">
      <h2 className="ticket-title">Would you dare go to Mars?</h2>
      <img  className="ticket-image"  
      src="https://airnfts.s3.amazonaws.com/nft-images/202110/Ticket_to_the_Mars_1620604616509.jpg"/>
      <Link to="/account/create"><button >Create account</button></Link>
      <button>Log in</button>
    </div>
  )
}
