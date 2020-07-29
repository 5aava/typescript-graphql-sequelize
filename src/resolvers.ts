import { IResolvers } from 'graphql-tools';

import { Users } from './database/models/Users';


const resolvers: IResolvers = {
  Query: {
    helloWorld (): string {
      return '👋 Hello world! 👋';
    },
    users: (parent, args, { db }) => {
      return Users.findAll();
    },
    user: (parent, { id }, { db }) => Users.findByPk(id),
  },
  Mutation: {
    registerUser: (parent, params, { db }, info) =>
      Users.create({
        email: params.email,
        nickname: params.nickname,
      }),
    updateUser: (parent, params, { db }, info) =>
      Users.update({
        nickname: params.nickname,
      },
      {
        where: {
          id: params.id,
        },
      }),
    deleteUser: (parent, {id}, { db }, info) =>
      Users.destroy({
        where: {
          id: id,
        },
      }),
  },
};

export default resolvers;
