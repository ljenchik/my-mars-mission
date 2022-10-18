import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.table('account', function(table) {
        table.dropColumn('username');
        table.dropColumn('address');
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.table('account', function(table) {
        table.dropColumn('username');
        table.dropColumn('address');
    });
}




