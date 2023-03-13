import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.alterTable("account", function (table) {
    table.dropColumn("username");
    table.dropColumn("address");
    table.unique(["email", "hashed_password"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("account");
}
