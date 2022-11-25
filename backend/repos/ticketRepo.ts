import { knex } from "./database";
import { Ticket } from "../models";

export async function createTicket(ticket: Ticket): Promise<void> {
  const ticket_id = await knex("ticket")
    .insert({
      name: ticket.name,
      gender: ticket.gender,
      dob: ticket.dob,
      address: ticket.address,
      phone: ticket.phone,
      email: ticket.email,
      photo: ticket.photo,
      owner_id: ticket.owner_id,
      flight_date: ticket.flight_date,
    })
    .returning("ticket_id");

  return ticket_id[0].ticket_id;
}


export async function getTicketById(id: number): Promise<Ticket[]> {
  return (await knex.raw("select * from ticket where ticket_id = " + id)).rows
}