/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('jobs', (table) => {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('location');
        table.text('description');
        table.integer('company_id').unsigned().references('id').inTable('companies');
        table.timestamps(true, true);
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('jobs')
}