/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  await knex('companies').insert([
    {
      name: 'Company A',
      industry: 'Technology',
    },
    {
      name: 'Company B',
      industry: 'Finance',
    },

  ]);
};