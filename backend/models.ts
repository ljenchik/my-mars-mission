import moment from "moment";

  //Model for account 
  export interface Account {
    id: number;
    email: string;
    username: string;
    name: string;
    address: string;
    salted_password: string;
    hashed_password: string;
    created_at: moment.Moment;
    updated_at: string | null;
  }