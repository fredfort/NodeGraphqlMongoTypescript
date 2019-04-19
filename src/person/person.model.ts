import { Document, model, Schema } from 'mongoose';
import { IPersonDbObject } from 'types';

const PersonSchema = new Schema({
  name: {
    required: true,
    unique: 'An other person has this name already',
    type: Schema.Types.String,
  },
  gender: {
    type: Schema.Types.String,
  },
  homeworld: {
    type: Schema.Types.String,
  },
  friends: {
    type: [Schema.Types.ObjectId],
  },
  address: {
    city: {
      type: Schema.Types.String,
    },
    country: {
      type: Schema.Types.String,
    },
    street: {
      type: Schema.Types.String,
    },
    street_number: {
      type: Schema.Types.Number,
    },
  },
});

export type UserType = IPersonDbObject & Document;

export default model<UserType>('users', PersonSchema);
