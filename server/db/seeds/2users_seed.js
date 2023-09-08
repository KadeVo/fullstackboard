/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('users').insert([
    {
      username: 'user1',
      email: 'user1@example.com'
    },
    {
      username: 'user2',
      email: 'user2@example.com'
    },

  ]);
}