export interface Account {
    id : number | null,
    name: string;
    email: string;
    password: string;
    created_at: string;
}

export interface Login {
    email: string;
    password: string;
}


export interface Ticket {
    ticket_id : number | null,
    name: string;
    gender: string;
    dob: string;
    address: string;
    phone: string;
    email: string;
    photo: string;
    flight_date: string;
    owner_id: number | null | undefined;
    created_at: string;
}
    