import { knex } from "./database";
import { Account, Ticket } from "../models";

export async function createAccount(account: Account): Promise<void> {
  const id = await knex("account")
    .insert({
      name: account.name,
      email: account.email,
      photo: account.photo,
      salted_password: account.salted_password,
      hashed_password: account.hashed_password,
    })
    .returning("id");

  return id[0].id;
}

export async function foundUser(email: string): Promise<any> {
  return (
    await knex.raw("SELECT * FROM account WHERE email=" + "'" + email + "'")
  ).rows;
}


export async function getAccountById(id: number): Promise<Account[]> {
  return (await knex.raw("select * from account where id = " + id)).rows
}

export async function updateAccount(
  id: number,
  name: string,
  email: string,
  photo: string,
  updated_at: string
) {
  return await knex("account")
    .update({
      name,
      email,
      photo,
      updated_at,
    })
    .where({ id });
}


export async function getTicketsByOwnerId(id: number): Promise<Ticket[]> {
  return (await knex.raw("select * from ticket where owner_id = " + id)).rows
}

export async function changePassword(
  id: number,
  salted_password: string,
  hashed_password: string
) {
  return await knex("account")
    .update({
      salted_password,
      hashed_password
    })
    .where({ id });
}