export async function seed(knex) {
    await knex('applications_seed').del()
    await knex('users_seed').del()
    await knex('jobs_seed').del()
    await knex('comapnies_seed').del()
}