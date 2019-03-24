import { Address } from './address.resolver';
import { Query } from './query.resolver';
import { Person } from './person.resolver';
import { IResolvers, IAddress } from 'types/types';

export type Context = any;
export type Root = any;
export type IAddressWithPersonId = IAddress & {id: number }

const resolvers: IResolvers<Context> | any  = {
  Query,
  Person,
  Address,
};

export default resolvers;