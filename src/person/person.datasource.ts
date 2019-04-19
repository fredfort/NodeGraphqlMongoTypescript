import { DataSource, DataSourceConfig } from 'apollo-datasource';
import Person from '../person/person.model';
import { IQueryPersonArgs } from 'types';
import { Context } from 'resolvers/root.resolver';

export class PersonAPI extends DataSource {
  private context: Context = null;

  constructor() {
    super();
  }

  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */
  public initialize(config: DataSourceConfig<Context>) {
    this.context = config.context;
  }

  public async findPerson({ id }: IQueryPersonArgs) {
    try {
      return await Person.findById(id);
    } catch (e) {
      return e.message;
    }
  }

  public async findAllPerson() {
    try {
      return await Person.find({});
    } catch (e) {
      return e.message;
    }
  }
}
