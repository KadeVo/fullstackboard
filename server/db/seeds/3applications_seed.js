/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('applications').insert([
    {
      job_id: 1,
      user_id: 1,
    },
    {
      job_id: 2,
      user_id: 2,
    },
  ]);
};