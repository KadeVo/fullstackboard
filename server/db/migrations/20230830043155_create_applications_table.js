/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
    return knex.schema.createTable('applications', (table) => {
        table.increments('id').primary();
        table.integer('job_id').unsigned().references('id').inTable('jobs');
        table.integer('user_id').unsigned().references('id').inTable('users');
        table.timestamps(true, true);
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
    return knex.schema.dropTable('applications')
}
