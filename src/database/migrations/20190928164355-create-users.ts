import { QueryInterface, DataTypes } from 'sequelize';

export function up (queryInterface: QueryInterface): Promise<void> {
  return queryInterface.createTable('Users', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING,
    },

    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  })
    .then(() => queryInterface.addIndex('Users', { unique: true, fields: ['email'] }));
}

export function down (queryInterface: QueryInterface): Promise<void> {
  return queryInterface.dropTable('Users');
}
