export interface Account {
    id : number | null,
    name: string;
    address: string;
    email: string;
    username: string;
    password: string;
    created_at: string;
}

export interface Ticket {
    id : number | null,
    name: string;
    gender: string;
    dob: string;
    address: string;
    phone: string;
    email: string;
    photo: string;
    flight_date: string;
    rover: string;
    created_at: string;
}
    