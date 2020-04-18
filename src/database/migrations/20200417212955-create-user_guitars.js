'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('user_guitars', { 
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: { model: 'users', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
        },
        guitar_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          reference: { model: 'guitars', key: 'id' },
          onDelete: 'CASCADE',
          onUpdate: 'CASCADE'
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
      return queryInterface.dropTable('user_guitars');
  }
};
