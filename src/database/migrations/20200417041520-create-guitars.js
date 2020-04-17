'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('guitars', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false, 
          references: {model: 'users', key: 'id'},
          onUpdated: 'CASCADE',
          onDeleted: 'CASCADE',
        },
        guitar_type: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        guitar_name: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        guitar_owner: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        }
      });
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('guitars');
  }
};
