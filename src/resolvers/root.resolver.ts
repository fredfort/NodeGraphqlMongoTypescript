import { Address } from '../address/address.resolver';
import { Query } from './query.resolver';
import { Mutation } from './mutation.resolver';
import { Person } from '../person/person.resolver';
import { IResolvers, IAddress } from 'types';

export type Context = any;
export type Root = any;
export type IAddressWithPersonId = IAddress & { id: string };

const resolvers: IResolvers<Context> | any = {
  Query,
  Mutation,
  Person,
  Address,
};

export default resolvers;
