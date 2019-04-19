import { IQueryResolvers, IPerson, IQueryPersonArgs, Resolver } from 'types';
import { Context, Root } from './root.resolver';

import Person from '../person/person.model';

const personResolver: Resolver<IPerson | null, Root, Context, IQueryPersonArgs> = async (_, { id }) => {
  try {
    return await Person.findById(id);
  } catch (e) {
    return e.message;
  }
};

const allPeopleResolver: Resolver<IPerson[] | null, Root, Context> = async (_, __, { dataSources }) =>
  dataSources.personAPI.findAllPerson();

export const Query: IQueryResolvers = {
  allPeople: allPeopleResolver,
  person: personResolver,
};
