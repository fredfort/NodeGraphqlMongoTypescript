import { IMutationResolvers, IPersonDbObject } from 'types';
import User from '../person/person.model';

type Without<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const Mutation: IMutationResolvers = {
  addPeople: async (_, { city, street, country, street_number, ...args }) => {
    try {
      const person: Without<IPersonDbObject, '_id'> = {
        ...args,
        address: {
          city,
          street,
          country,
          street_number,
        },
      };
      return await User.create(person);
    } catch (e) {
      return e.message;
    }
  },
};
