export async function seed(knex) {
  await knex('applications').del()
  await knex('users').del()
  await knex('jobs').del()
  await knex('companies').del()
}
