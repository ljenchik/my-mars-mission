import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
return knex.schema
.createTable('ticket', function (table) {
table.increments('ticket_id').primary();
table.string('name', 128).notNullable();
table.string('gender').notNullable();
table.date('dob').notNullable();
table.string('address', 128).notNullable();
table.string('phone', 64).notNullable();
table.string('email', 64).notNullable();
table.string('photo');
table.dateTime('flight_date').notNullable();
table.integer('owner_id').unsigned().references('id').inTable('account');
table.dateTime('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'));
table.dateTime('updated_at');
table.dateTime('cancelled_at');
table.unique(['name', 'dob']);
})
};

export async function down(knex: Knex): Promise<void> {
return knex.schema.dropTable('ticket');
}
