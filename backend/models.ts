import moment from "moment";

  //Model for account 
  export interface Account {
    id: number;
    email: string;
    name: string;
    photo: string;
    salted_password: string;
    hashed_password: string;
    created_at: moment.Moment;
    updated_at: string | null;
  }

  export interface AccountForm {
    id: number;
    email: string;
    name: string;
    password: string;
  }

  export interface Login {
    email: string;
    password: string;
}

export interface Ticket {
  ticket_id: number;
  name: string;
  gender: string;
  dob: string;
  address: string;
  phone: string;
  email: string;
  photo: string;
  flight_date: string;
  owner_id: number;
  created_at: moment.Moment;
  updated_at: string | null;
  cancelled_at: string | null;
}
