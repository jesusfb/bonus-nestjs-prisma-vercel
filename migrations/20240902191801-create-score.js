'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Scores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PerformanceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Performances", key: "id"},
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      CriterionId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: "Criteria", key: "id"},
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      score: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Scores');
  }
};