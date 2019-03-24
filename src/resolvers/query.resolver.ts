import { IQueryResolvers, IPerson, IQueryPersonArgs, Resolver } from 'types/types';
import { Context, Root } from './root.resolver';

const defaultData: IPerson[] = [
  {
    id: 1,
    name: 'Luke SkyWaler',
    gender: 'male',
    friends: [2],
    homeworld: 'Tattoine',
    address: {
      city: 'Dublin',
      country: 'Ireland',
      street: 'Talbot street',
      number: 123,
    },
  },
  {
    id: 2,
    name: 'C-3PO',
    gender: 'bot',
    homeworld: 'Tattoine',
    address: {
      city: 'Dublin',
      country: 'Ireland',
      street: 'Talbot street',
      number: 123,
    },
  },
];

const personResolver: Resolver<IPerson | null, Root, Context, IQueryPersonArgs> = (
  root: any,
  { id },
) => {
  const person: IPerson | undefined = defaultData.find((character) => {
    return character.id === id;
  });
  return person ? person : null;
};

const allPeopleResolver: Resolver<IPerson[] | null, Root, Context> = () => defaultData;

export const Query: IQueryResolvers = {
  allPeople: allPeopleResolver,
  person: personResolver,
};
