'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        // id: 1,
        firstName: 'John',
        lastName: ' DoeDoe',
        email: 'johnson@ex.com',
        date: new Date(),
        updatedAt: new Date(),
        createdAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
