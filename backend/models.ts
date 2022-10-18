import moment from "moment";

  //Model for account 
  export interface Account {
    id: number;
    email: string;
    name: string;
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