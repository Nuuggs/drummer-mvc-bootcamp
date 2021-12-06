'use strict';

module.exports = {
  up: async (queryInterface) => {
    const drummersList = [
      {
        name: 'Cobus Potgieter',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Dave Grohl',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Clay Aeschliman',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Larnell Lewis',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'Luke Holland',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Insert drummers before reservations because reservatoins reference drummers
    let drummers = await queryInterface.bulkInsert(
      'drummers',
      drummersList,
      { returning: true }
    );
    
  },

  down: async (queryInterface) => {
    // Delete item before category records because items reference categories
    await queryInterface.bulkDelete('items', null, {});
    await queryInterface.bulkDelete('categories', null, {});
  },
};