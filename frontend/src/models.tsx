export interface Account {
    id : number | null,
    name: string;
    email: string;
    photo: string;
    password: string;
    created_at: string;
    updated_at: string;
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
    

export interface Planet {
    planetIndex: number,
    planetName: string,
    planetFact: string;
    planetLink: string;
    planetImage: string;
    planetGravity: number;
}
    