import { QueryInterface } from 'sequelize';

import faker = require('faker');
faker.locale = 'en';


const UsersArray: {
  email: string,
  nickname: string,

  createdAt: string,
  updatedAt: string,
}[] = [];

for (let i = 1; i <= 10; i++) {
  UsersArray.push({
    email: faker.internet.email(),
    nickname: faker.name.firstName(),

    createdAt: new Date().toLocaleString(),
    updatedAt: new Date().toLocaleString(),
  });
}


export function up (queryInterface: QueryInterface) {
  return queryInterface.bulkInsert('Users', UsersArray, {});
}

export function down (queryInterface: QueryInterface) {
  return queryInterface.bulkDelete('Users', {});
}
