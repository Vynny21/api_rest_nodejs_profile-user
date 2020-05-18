
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', 'avatar_id', {
    type: Sequelize.INTEGER,
    references: { model: 'files', key: 'id' },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
    allowNull: true,
  }),

  down: (queryInterface, Sequelize) => queryInterface.dropTable('users'),
};
