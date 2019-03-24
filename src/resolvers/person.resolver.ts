import {
  IPerson, Resolver, IPersonResolvers, IAddress,
} from 'types/types.d';
import { Context, IAddressWithPersonId } from './root.resolver';

/*
* person.id is passed to the address resolver child so it can use it to fetch extra data ( See adress.resolver)
*/
const addressResolver: Resolver<IAddressWithPersonId, IPerson, Context> = (person) => {
  return {...person.address, id: person.id } || null;
};

/*
* Parent 'IPerson' is used to update the homeworld value
*/
const homeworldResolver: Resolver<string, IPerson, Context> = (person) => {
  return  `The wonderful homeworld of ${person.homeworld}`;
};

export const Person: IPersonResolvers =  {
  homeworld: homeworldResolver,
  address: addressResolver,
};
