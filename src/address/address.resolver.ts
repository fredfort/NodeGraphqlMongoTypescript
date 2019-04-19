import { IAddressResolvers, IAddress } from 'types';
import { Context, IAddressWithPersonId } from '../resolvers/root.resolver';

/*
 * Parent 'IAddress' and GranParent person 'id' is used to update the city value
 */
export const Address: IAddressResolvers<Context, IAddressWithPersonId> = {
  city: (address) => {
    return `The city of ${address.city} from person ${address.id}`;
  },
};
