type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IAdditionalEntityFields = {
  path?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type IAddress = {
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  street_number?: Maybe<Scalars['Int']>;
};

export type IMutation = {
  addPeople?: Maybe<IPerson>;
};

export type IMutationAddPeopleArgs = {
  name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  street_number?: Maybe<Scalars['Int']>;
};

export type IPerson = {
  id: Scalars['String'];
  name: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Scalars['String']>;
  friends?: Maybe<Array<Maybe<IPerson>>>;
  address?: Maybe<IAddress>;
};

export type IQuery = {
  allPeople?: Maybe<Array<Maybe<IPerson>>>;
  person?: Maybe<IPerson>;
};

export type IQueryPersonArgs = {
  id: Scalars['String'];
};

import { GraphQLResolveInfo } from 'graphql';

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export type IUnionDirectiveResolver<
  Result,
  Parent,
  Context = any,
  Args = {
    discriminatorField?: Maybe<Maybe<Scalars['String']>>;
    additionalFields?: Maybe<Maybe<Array<Maybe<IAdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type IAbstractEntityDirectiveResolver<
  Result,
  Parent,
  Context = any,
  Args = {
    discriminatorField?: Maybe<Scalars['String']>;
    additionalFields?: Maybe<Maybe<Array<Maybe<IAdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type IEntityDirectiveResolver<
  Result,
  Parent,
  Context = any,
  Args = {
    embedded?: Maybe<Maybe<Scalars['Boolean']>>;
    additionalFields?: Maybe<Maybe<Array<Maybe<IAdditionalEntityFields>>>>;
  }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type IColumnDirectiveResolver<
  Result,
  Parent,
  Context = any,
  Args = { overrideType?: Maybe<Maybe<Scalars['String']>> }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type IIdDirectiveResolver<Result, Parent, Context = any, Args = {}> = DirectiveResolverFn<
  Result,
  Parent,
  Context,
  Args
>;

export type ILinkDirectiveResolver<Result, Parent, Context = any, Args = {}> = DirectiveResolverFn<
  Result,
  Parent,
  Context,
  Args
>;

export type IEmbeddedDirectiveResolver<Result, Parent, Context = any, Args = {}> = DirectiveResolverFn<
  Result,
  Parent,
  Context,
  Args
>;

export type IMapDirectiveResolver<
  Result,
  Parent,
  Context = any,
  Args = { path?: Maybe<Scalars['String']> }
> = DirectiveResolverFn<Result, Parent, Context, Args>;

export type IAddressResolvers<Context = any, ParentType = IAddress> = {
  city?: Resolver<Maybe<Scalars['String']>, ParentType, Context>;
  country?: Resolver<Maybe<Scalars['String']>, ParentType, Context>;
  street?: Resolver<Maybe<Scalars['String']>, ParentType, Context>;
  street_number?: Resolver<Maybe<Scalars['Int']>, ParentType, Context>;
};

export type IMutationResolvers<Context = any, ParentType = IMutation> = {
  addPeople?: Resolver<Maybe<IPerson>, ParentType, Context, IMutationAddPeopleArgs>;
};

export type IPersonResolvers<Context = any, ParentType = IPerson> = {
  id?: Resolver<Scalars['String'], ParentType, Context>;
  name?: Resolver<Scalars['String'], ParentType, Context>;
  gender?: Resolver<Maybe<Scalars['String']>, ParentType, Context>;
  homeworld?: Resolver<Maybe<Scalars['String']>, ParentType, Context>;
  friends?: Resolver<Maybe<Array<Maybe<IPerson>>>, ParentType, Context>;
  address?: Resolver<Maybe<IAddress>, ParentType, Context>;
};

export type IQueryResolvers<Context = any, ParentType = IQuery> = {
  allPeople?: Resolver<Maybe<Array<Maybe<IPerson>>>, ParentType, Context>;
  person?: Resolver<Maybe<IPerson>, ParentType, Context, IQueryPersonArgs>;
};

export type IResolvers<Context = any> = {
  Address?: IAddressResolvers<Context>;
  Mutation?: IMutationResolvers<Context>;
  Person?: IPersonResolvers<Context>;
  Query?: IQueryResolvers<Context>;
};

export type IDirectiveResolvers<Context = any> = {
  union?: IUnionDirectiveResolver<any, any, Context>;
  abstractEntity?: IAbstractEntityDirectiveResolver<any, any, Context>;
  entity?: IEntityDirectiveResolver<any, any, Context>;
  column?: IColumnDirectiveResolver<any, any, Context>;
  id?: IIdDirectiveResolver<any, any, Context>;
  link?: ILinkDirectiveResolver<any, any, Context>;
  embedded?: IEmbeddedDirectiveResolver<any, any, Context>;
  map?: IMapDirectiveResolver<any, any, Context>;
};

import { ObjectID } from 'mongodb';
export type IPersonDbObject = {
  _id: ObjectID;
  name: string;
  gender?: Maybe<string>;
  homeworld?: Maybe<string>;
  friends?: Maybe<Array<Maybe<IPersonDbObject['_id']>>>;
  address?: Maybe<IAddressDbObject>;
};

export type IAddressDbObject = {
  city?: Maybe<string>;
  country?: Maybe<string>;
  street?: Maybe<string>;
  street_number?: Maybe<number>;
};
