type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IAddress = {
  city?: Maybe<Scalars["String"]>;
  country?: Maybe<Scalars["String"]>;
  street?: Maybe<Scalars["String"]>;
  number?: Maybe<Scalars["Int"]>;
};

export type IPerson = {
  id: Scalars["Int"];
  name?: Maybe<Scalars["String"]>;
  gender?: Maybe<Scalars["String"]>;
  homeworld?: Maybe<Scalars["String"]>;
  friends?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  address?: Maybe<IAddress>;
};

export type IQuery = {
  allPeople?: Maybe<Array<Maybe<IPerson>>>;
  person?: Maybe<IPerson>;
};

export type IQueryPersonArgs = {
  id: Scalars["Int"];
};

import { GraphQLResolveInfo } from "graphql";

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
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
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export type IAddressResolvers<Context = any, ParentType = IAddress> = {
  city?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  country?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  street?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  number?: Resolver<Maybe<Scalars["Int"]>, ParentType, Context>;
};

export type IPersonResolvers<Context = any, ParentType = IPerson> = {
  id?: Resolver<Scalars["Int"], ParentType, Context>;
  name?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  gender?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  homeworld?: Resolver<Maybe<Scalars["String"]>, ParentType, Context>;
  friends?: Resolver<Maybe<Array<Maybe<Scalars["Int"]>>>, ParentType, Context>;
  address?: Resolver<Maybe<IAddress>, ParentType, Context>;
};

export type IQueryResolvers<Context = any, ParentType = IQuery> = {
  allPeople?: Resolver<Maybe<Array<Maybe<IPerson>>>, ParentType, Context>;
  person?: Resolver<Maybe<IPerson>, ParentType, Context, IQueryPersonArgs>;
};

export type IResolvers<Context = any> = {
  Address?: IAddressResolvers<Context>;
  Person?: IPersonResolvers<Context>;
  Query?: IQueryResolvers<Context>;
};
