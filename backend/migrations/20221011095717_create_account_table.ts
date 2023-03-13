import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("account", function (table) {
    table.increments("id").primary();
    table.string("name", 128).notNullable();
    table.string("username", 128).notNullable();
    table.string("address", 128).notNullable();
    table.string("email", 64).notNullable();
    table.string("salted_password").notNullable();
    table.string("hashed_password").notNullable();
    table
      .dateTime("created_at")
      .notNullable()
      .defaultTo(knex.raw("CURRENT_TIMESTAMP"));
    table.dateTime("updated_at");
    table.unique(["name", "hashed_password"]);
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable("account");
}
