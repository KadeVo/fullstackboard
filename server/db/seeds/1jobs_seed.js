/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('jobs').insert([
    {
      title: 'Frontend Developer',
      location: 'New York',
      description: 'Lorem ipsum dolor sit amet...',
      company_id: 1,
    },
    {
      title: 'Backend Developer',
      location: 'San Francisco',
      description: 'Consectetur adipiscing elit...',
      company_id: 2,
    },

  ]);
};