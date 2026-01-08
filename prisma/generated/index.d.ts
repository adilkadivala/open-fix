
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Repos
 * 
 */
export type Repos = $Result.DefaultSelection<Prisma.$ReposPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model AgentRun
 * 
 */
export type AgentRun = $Result.DefaultSelection<Prisma.$AgentRunPayload>
/**
 * Model AIRun
 * 
 */
export type AIRun = $Result.DefaultSelection<Prisma.$AIRunPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.repos`: Exposes CRUD operations for the **Repos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Repos
    * const repos = await prisma.repos.findMany()
    * ```
    */
  get repos(): Prisma.ReposDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.agentRun`: Exposes CRUD operations for the **AgentRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AgentRuns
    * const agentRuns = await prisma.agentRun.findMany()
    * ```
    */
  get agentRun(): Prisma.AgentRunDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.aIRun`: Exposes CRUD operations for the **AIRun** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AIRuns
    * const aIRuns = await prisma.aIRun.findMany()
    * ```
    */
  get aIRun(): Prisma.AIRunDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Repos: 'Repos',
    Issue: 'Issue',
    AgentRun: 'AgentRun',
    AIRun: 'AIRun'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "repos" | "issue" | "agentRun" | "aIRun"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Repos: {
        payload: Prisma.$ReposPayload<ExtArgs>
        fields: Prisma.ReposFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReposFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReposFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>
          }
          findFirst: {
            args: Prisma.ReposFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReposFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>
          }
          findMany: {
            args: Prisma.ReposFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>[]
          }
          create: {
            args: Prisma.ReposCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>
          }
          createMany: {
            args: Prisma.ReposCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReposCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>[]
          }
          delete: {
            args: Prisma.ReposDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>
          }
          update: {
            args: Prisma.ReposUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>
          }
          deleteMany: {
            args: Prisma.ReposDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReposUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReposUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>[]
          }
          upsert: {
            args: Prisma.ReposUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReposPayload>
          }
          aggregate: {
            args: Prisma.ReposAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRepos>
          }
          groupBy: {
            args: Prisma.ReposGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReposGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReposCountArgs<ExtArgs>
            result: $Utils.Optional<ReposCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      AgentRun: {
        payload: Prisma.$AgentRunPayload<ExtArgs>
        fields: Prisma.AgentRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AgentRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AgentRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          findFirst: {
            args: Prisma.AgentRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AgentRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          findMany: {
            args: Prisma.AgentRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>[]
          }
          create: {
            args: Prisma.AgentRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          createMany: {
            args: Prisma.AgentRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AgentRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>[]
          }
          delete: {
            args: Prisma.AgentRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          update: {
            args: Prisma.AgentRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          deleteMany: {
            args: Prisma.AgentRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AgentRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AgentRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>[]
          }
          upsert: {
            args: Prisma.AgentRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AgentRunPayload>
          }
          aggregate: {
            args: Prisma.AgentRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgentRun>
          }
          groupBy: {
            args: Prisma.AgentRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<AgentRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.AgentRunCountArgs<ExtArgs>
            result: $Utils.Optional<AgentRunCountAggregateOutputType> | number
          }
        }
      }
      AIRun: {
        payload: Prisma.$AIRunPayload<ExtArgs>
        fields: Prisma.AIRunFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AIRunFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AIRunFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>
          }
          findFirst: {
            args: Prisma.AIRunFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AIRunFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>
          }
          findMany: {
            args: Prisma.AIRunFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>[]
          }
          create: {
            args: Prisma.AIRunCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>
          }
          createMany: {
            args: Prisma.AIRunCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AIRunCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>[]
          }
          delete: {
            args: Prisma.AIRunDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>
          }
          update: {
            args: Prisma.AIRunUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>
          }
          deleteMany: {
            args: Prisma.AIRunDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AIRunUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AIRunUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>[]
          }
          upsert: {
            args: Prisma.AIRunUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AIRunPayload>
          }
          aggregate: {
            args: Prisma.AIRunAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAIRun>
          }
          groupBy: {
            args: Prisma.AIRunGroupByArgs<ExtArgs>
            result: $Utils.Optional<AIRunGroupByOutputType>[]
          }
          count: {
            args: Prisma.AIRunCountArgs<ExtArgs>
            result: $Utils.Optional<AIRunCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    repos?: ReposOmit
    issue?: IssueOmit
    agentRun?: AgentRunOmit
    aIRun?: AIRunOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    projects: number
    agentRuns: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    agentRuns?: boolean | UserCountOutputTypeCountAgentRunsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReposWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAgentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRunWhereInput
  }


  /**
   * Count Type ReposCountOutputType
   */

  export type ReposCountOutputType = {
    issues: number
    agentRuns: number
  }

  export type ReposCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | ReposCountOutputTypeCountIssuesArgs
    agentRuns?: boolean | ReposCountOutputTypeCountAgentRunsArgs
  }

  // Custom InputTypes
  /**
   * ReposCountOutputType without action
   */
  export type ReposCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReposCountOutputType
     */
    select?: ReposCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReposCountOutputType without action
   */
  export type ReposCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }

  /**
   * ReposCountOutputType without action
   */
  export type ReposCountOutputTypeCountAgentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRunWhereInput
  }


  /**
   * Count Type IssueCountOutputType
   */

  export type IssueCountOutputType = {
    agentRuns: number
  }

  export type IssueCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentRuns?: boolean | IssueCountOutputTypeCountAgentRunsArgs
  }

  // Custom InputTypes
  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueCountOutputType
     */
    select?: IssueCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountAgentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRunWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    githubId: string | null
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    githubId: string | null
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    githubId: number
    name: number
    email: number
    image: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    githubId?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    githubId?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    githubId?: true
    name?: true
    email?: true
    image?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    githubId: string
    name: string | null
    email: string | null
    image: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
    projects?: boolean | User$projectsArgs<ExtArgs>
    agentRuns?: boolean | User$agentRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubId?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    githubId?: boolean
    name?: boolean
    email?: boolean
    image?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubId" | "name" | "email" | "image" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    projects?: boolean | User$projectsArgs<ExtArgs>
    agentRuns?: boolean | User$agentRunsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      projects: Prisma.$ReposPayload<ExtArgs>[]
      agentRuns: Prisma.$AgentRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      githubId: string
      name: string | null
      email: string | null
      image: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agentRuns<T extends User$agentRunsArgs<ExtArgs> = {}>(args?: Subset<T, User$agentRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly githubId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    where?: ReposWhereInput
    orderBy?: ReposOrderByWithRelationInput | ReposOrderByWithRelationInput[]
    cursor?: ReposWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReposScalarFieldEnum | ReposScalarFieldEnum[]
  }

  /**
   * User.agentRuns
   */
  export type User$agentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    where?: AgentRunWhereInput
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    cursor?: AgentRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Repos
   */

  export type AggregateRepos = {
    _count: ReposCountAggregateOutputType | null
    _min: ReposMinAggregateOutputType | null
    _max: ReposMaxAggregateOutputType | null
  }

  export type ReposMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    repoUrl: string | null
    repoOwner: string | null
    repoName: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ReposMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    repoUrl: string | null
    repoOwner: string | null
    repoName: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ReposCountAggregateOutputType = {
    id: number
    name: number
    description: number
    repoUrl: number
    repoOwner: number
    repoName: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ReposMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    repoUrl?: true
    repoOwner?: true
    repoName?: true
    createdAt?: true
    userId?: true
  }

  export type ReposMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    repoUrl?: true
    repoOwner?: true
    repoName?: true
    createdAt?: true
    userId?: true
  }

  export type ReposCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    repoUrl?: true
    repoOwner?: true
    repoName?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ReposAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repos to aggregate.
     */
    where?: ReposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repos to fetch.
     */
    orderBy?: ReposOrderByWithRelationInput | ReposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Repos
    **/
    _count?: true | ReposCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReposMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReposMaxAggregateInputType
  }

  export type GetReposAggregateType<T extends ReposAggregateArgs> = {
        [P in keyof T & keyof AggregateRepos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRepos[P]>
      : GetScalarType<T[P], AggregateRepos[P]>
  }




  export type ReposGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReposWhereInput
    orderBy?: ReposOrderByWithAggregationInput | ReposOrderByWithAggregationInput[]
    by: ReposScalarFieldEnum[] | ReposScalarFieldEnum
    having?: ReposScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReposCountAggregateInputType | true
    _min?: ReposMinAggregateInputType
    _max?: ReposMaxAggregateInputType
  }

  export type ReposGroupByOutputType = {
    id: string
    name: string
    description: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt: Date
    userId: string
    _count: ReposCountAggregateOutputType | null
    _min: ReposMinAggregateOutputType | null
    _max: ReposMaxAggregateOutputType | null
  }

  type GetReposGroupByPayload<T extends ReposGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReposGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReposGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReposGroupByOutputType[P]>
            : GetScalarType<T[P], ReposGroupByOutputType[P]>
        }
      >
    >


  export type ReposSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    repoUrl?: boolean
    repoOwner?: boolean
    repoName?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    issues?: boolean | Repos$issuesArgs<ExtArgs>
    agentRuns?: boolean | Repos$agentRunsArgs<ExtArgs>
    _count?: boolean | ReposCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repos"]>

  export type ReposSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    repoUrl?: boolean
    repoOwner?: boolean
    repoName?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repos"]>

  export type ReposSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    repoUrl?: boolean
    repoOwner?: boolean
    repoName?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["repos"]>

  export type ReposSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    repoUrl?: boolean
    repoOwner?: boolean
    repoName?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ReposOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "repoUrl" | "repoOwner" | "repoName" | "createdAt" | "userId", ExtArgs["result"]["repos"]>
  export type ReposInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    issues?: boolean | Repos$issuesArgs<ExtArgs>
    agentRuns?: boolean | Repos$agentRunsArgs<ExtArgs>
    _count?: boolean | ReposCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReposIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReposIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReposPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Repos"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      issues: Prisma.$IssuePayload<ExtArgs>[]
      agentRuns: Prisma.$AgentRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      repoUrl: string
      repoOwner: string
      repoName: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["repos"]>
    composites: {}
  }

  type ReposGetPayload<S extends boolean | null | undefined | ReposDefaultArgs> = $Result.GetResult<Prisma.$ReposPayload, S>

  type ReposCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReposFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReposCountAggregateInputType | true
    }

  export interface ReposDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Repos'], meta: { name: 'Repos' } }
    /**
     * Find zero or one Repos that matches the filter.
     * @param {ReposFindUniqueArgs} args - Arguments to find a Repos
     * @example
     * // Get one Repos
     * const repos = await prisma.repos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReposFindUniqueArgs>(args: SelectSubset<T, ReposFindUniqueArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Repos that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReposFindUniqueOrThrowArgs} args - Arguments to find a Repos
     * @example
     * // Get one Repos
     * const repos = await prisma.repos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReposFindUniqueOrThrowArgs>(args: SelectSubset<T, ReposFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposFindFirstArgs} args - Arguments to find a Repos
     * @example
     * // Get one Repos
     * const repos = await prisma.repos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReposFindFirstArgs>(args?: SelectSubset<T, ReposFindFirstArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Repos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposFindFirstOrThrowArgs} args - Arguments to find a Repos
     * @example
     * // Get one Repos
     * const repos = await prisma.repos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReposFindFirstOrThrowArgs>(args?: SelectSubset<T, ReposFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Repos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Repos
     * const repos = await prisma.repos.findMany()
     * 
     * // Get first 10 Repos
     * const repos = await prisma.repos.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reposWithIdOnly = await prisma.repos.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReposFindManyArgs>(args?: SelectSubset<T, ReposFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Repos.
     * @param {ReposCreateArgs} args - Arguments to create a Repos.
     * @example
     * // Create one Repos
     * const Repos = await prisma.repos.create({
     *   data: {
     *     // ... data to create a Repos
     *   }
     * })
     * 
     */
    create<T extends ReposCreateArgs>(args: SelectSubset<T, ReposCreateArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Repos.
     * @param {ReposCreateManyArgs} args - Arguments to create many Repos.
     * @example
     * // Create many Repos
     * const repos = await prisma.repos.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReposCreateManyArgs>(args?: SelectSubset<T, ReposCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Repos and returns the data saved in the database.
     * @param {ReposCreateManyAndReturnArgs} args - Arguments to create many Repos.
     * @example
     * // Create many Repos
     * const repos = await prisma.repos.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Repos and only return the `id`
     * const reposWithIdOnly = await prisma.repos.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReposCreateManyAndReturnArgs>(args?: SelectSubset<T, ReposCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Repos.
     * @param {ReposDeleteArgs} args - Arguments to delete one Repos.
     * @example
     * // Delete one Repos
     * const Repos = await prisma.repos.delete({
     *   where: {
     *     // ... filter to delete one Repos
     *   }
     * })
     * 
     */
    delete<T extends ReposDeleteArgs>(args: SelectSubset<T, ReposDeleteArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Repos.
     * @param {ReposUpdateArgs} args - Arguments to update one Repos.
     * @example
     * // Update one Repos
     * const repos = await prisma.repos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReposUpdateArgs>(args: SelectSubset<T, ReposUpdateArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Repos.
     * @param {ReposDeleteManyArgs} args - Arguments to filter Repos to delete.
     * @example
     * // Delete a few Repos
     * const { count } = await prisma.repos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReposDeleteManyArgs>(args?: SelectSubset<T, ReposDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Repos
     * const repos = await prisma.repos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReposUpdateManyArgs>(args: SelectSubset<T, ReposUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Repos and returns the data updated in the database.
     * @param {ReposUpdateManyAndReturnArgs} args - Arguments to update many Repos.
     * @example
     * // Update many Repos
     * const repos = await prisma.repos.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Repos and only return the `id`
     * const reposWithIdOnly = await prisma.repos.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReposUpdateManyAndReturnArgs>(args: SelectSubset<T, ReposUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Repos.
     * @param {ReposUpsertArgs} args - Arguments to update or create a Repos.
     * @example
     * // Update or create a Repos
     * const repos = await prisma.repos.upsert({
     *   create: {
     *     // ... data to create a Repos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Repos we want to update
     *   }
     * })
     */
    upsert<T extends ReposUpsertArgs>(args: SelectSubset<T, ReposUpsertArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Repos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposCountArgs} args - Arguments to filter Repos to count.
     * @example
     * // Count the number of Repos
     * const count = await prisma.repos.count({
     *   where: {
     *     // ... the filter for the Repos we want to count
     *   }
     * })
    **/
    count<T extends ReposCountArgs>(
      args?: Subset<T, ReposCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReposCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Repos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReposAggregateArgs>(args: Subset<T, ReposAggregateArgs>): Prisma.PrismaPromise<GetReposAggregateType<T>>

    /**
     * Group by Repos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReposGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReposGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReposGroupByArgs['orderBy'] }
        : { orderBy?: ReposGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReposGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReposGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Repos model
   */
  readonly fields: ReposFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Repos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReposClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    issues<T extends Repos$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Repos$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    agentRuns<T extends Repos$agentRunsArgs<ExtArgs> = {}>(args?: Subset<T, Repos$agentRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Repos model
   */
  interface ReposFieldRefs {
    readonly id: FieldRef<"Repos", 'String'>
    readonly name: FieldRef<"Repos", 'String'>
    readonly description: FieldRef<"Repos", 'String'>
    readonly repoUrl: FieldRef<"Repos", 'String'>
    readonly repoOwner: FieldRef<"Repos", 'String'>
    readonly repoName: FieldRef<"Repos", 'String'>
    readonly createdAt: FieldRef<"Repos", 'DateTime'>
    readonly userId: FieldRef<"Repos", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Repos findUnique
   */
  export type ReposFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * Filter, which Repos to fetch.
     */
    where: ReposWhereUniqueInput
  }

  /**
   * Repos findUniqueOrThrow
   */
  export type ReposFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * Filter, which Repos to fetch.
     */
    where: ReposWhereUniqueInput
  }

  /**
   * Repos findFirst
   */
  export type ReposFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * Filter, which Repos to fetch.
     */
    where?: ReposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repos to fetch.
     */
    orderBy?: ReposOrderByWithRelationInput | ReposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repos.
     */
    cursor?: ReposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repos.
     */
    distinct?: ReposScalarFieldEnum | ReposScalarFieldEnum[]
  }

  /**
   * Repos findFirstOrThrow
   */
  export type ReposFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * Filter, which Repos to fetch.
     */
    where?: ReposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repos to fetch.
     */
    orderBy?: ReposOrderByWithRelationInput | ReposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Repos.
     */
    cursor?: ReposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Repos.
     */
    distinct?: ReposScalarFieldEnum | ReposScalarFieldEnum[]
  }

  /**
   * Repos findMany
   */
  export type ReposFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * Filter, which Repos to fetch.
     */
    where?: ReposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Repos to fetch.
     */
    orderBy?: ReposOrderByWithRelationInput | ReposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Repos.
     */
    cursor?: ReposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Repos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Repos.
     */
    skip?: number
    distinct?: ReposScalarFieldEnum | ReposScalarFieldEnum[]
  }

  /**
   * Repos create
   */
  export type ReposCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * The data needed to create a Repos.
     */
    data: XOR<ReposCreateInput, ReposUncheckedCreateInput>
  }

  /**
   * Repos createMany
   */
  export type ReposCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Repos.
     */
    data: ReposCreateManyInput | ReposCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Repos createManyAndReturn
   */
  export type ReposCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * The data used to create many Repos.
     */
    data: ReposCreateManyInput | ReposCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repos update
   */
  export type ReposUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * The data needed to update a Repos.
     */
    data: XOR<ReposUpdateInput, ReposUncheckedUpdateInput>
    /**
     * Choose, which Repos to update.
     */
    where: ReposWhereUniqueInput
  }

  /**
   * Repos updateMany
   */
  export type ReposUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Repos.
     */
    data: XOR<ReposUpdateManyMutationInput, ReposUncheckedUpdateManyInput>
    /**
     * Filter which Repos to update
     */
    where?: ReposWhereInput
    /**
     * Limit how many Repos to update.
     */
    limit?: number
  }

  /**
   * Repos updateManyAndReturn
   */
  export type ReposUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * The data used to update Repos.
     */
    data: XOR<ReposUpdateManyMutationInput, ReposUncheckedUpdateManyInput>
    /**
     * Filter which Repos to update
     */
    where?: ReposWhereInput
    /**
     * Limit how many Repos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Repos upsert
   */
  export type ReposUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * The filter to search for the Repos to update in case it exists.
     */
    where: ReposWhereUniqueInput
    /**
     * In case the Repos found by the `where` argument doesn't exist, create a new Repos with this data.
     */
    create: XOR<ReposCreateInput, ReposUncheckedCreateInput>
    /**
     * In case the Repos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReposUpdateInput, ReposUncheckedUpdateInput>
  }

  /**
   * Repos delete
   */
  export type ReposDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
    /**
     * Filter which Repos to delete.
     */
    where: ReposWhereUniqueInput
  }

  /**
   * Repos deleteMany
   */
  export type ReposDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Repos to delete
     */
    where?: ReposWhereInput
    /**
     * Limit how many Repos to delete.
     */
    limit?: number
  }

  /**
   * Repos.issues
   */
  export type Repos$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Repos.agentRuns
   */
  export type Repos$agentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    where?: AgentRunWhereInput
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    cursor?: AgentRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * Repos without action
   */
  export type ReposDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Repos
     */
    select?: ReposSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Repos
     */
    omit?: ReposOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReposInclude<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueAvgAggregateOutputType = {
    githubIssueId: number | null
  }

  export type IssueSumAggregateOutputType = {
    githubIssueId: number | null
  }

  export type IssueMinAggregateOutputType = {
    id: string | null
    githubIssueId: number | null
    title: string | null
    body: string | null
    state: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type IssueMaxAggregateOutputType = {
    id: string | null
    githubIssueId: number | null
    title: string | null
    body: string | null
    state: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    githubIssueId: number
    title: number
    body: number
    state: number
    labels: number
    createdAt: number
    updatedAt: number
    projectId: number
    _all: number
  }


  export type IssueAvgAggregateInputType = {
    githubIssueId?: true
  }

  export type IssueSumAggregateInputType = {
    githubIssueId?: true
  }

  export type IssueMinAggregateInputType = {
    id?: true
    githubIssueId?: true
    title?: true
    body?: true
    state?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    githubIssueId?: true
    title?: true
    body?: true
    state?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    githubIssueId?: true
    title?: true
    body?: true
    state?: true
    labels?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _avg?: IssueAvgAggregateInputType
    _sum?: IssueSumAggregateInputType
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: string
    githubIssueId: number | null
    title: string
    body: string | null
    state: string
    labels: JsonValue | null
    createdAt: Date
    updatedAt: Date
    projectId: string
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubIssueId?: boolean
    title?: boolean
    body?: boolean
    state?: boolean
    labels?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ReposDefaultArgs<ExtArgs>
    agentRuns?: boolean | Issue$agentRunsArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubIssueId?: boolean
    title?: boolean
    body?: boolean
    state?: boolean
    labels?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ReposDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    githubIssueId?: boolean
    title?: boolean
    body?: boolean
    state?: boolean
    labels?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    project?: boolean | ReposDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    githubIssueId?: boolean
    title?: boolean
    body?: boolean
    state?: boolean
    labels?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
  }

  export type IssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "githubIssueId" | "title" | "body" | "state" | "labels" | "createdAt" | "updatedAt" | "projectId", ExtArgs["result"]["issue"]>
  export type IssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ReposDefaultArgs<ExtArgs>
    agentRuns?: boolean | Issue$agentRunsArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type IssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ReposDefaultArgs<ExtArgs>
  }
  export type IssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ReposDefaultArgs<ExtArgs>
  }

  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      project: Prisma.$ReposPayload<ExtArgs>
      agentRuns: Prisma.$AgentRunPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      githubIssueId: number | null
      title: string
      body: string | null
      state: string
      labels: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      projectId: string
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssueUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssueUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ReposDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReposDefaultArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    agentRuns<T extends Issue$agentRunsArgs<ExtArgs> = {}>(args?: Subset<T, Issue$agentRunsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issue model
   */
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'String'>
    readonly githubIssueId: FieldRef<"Issue", 'Int'>
    readonly title: FieldRef<"Issue", 'String'>
    readonly body: FieldRef<"Issue", 'String'>
    readonly state: FieldRef<"Issue", 'String'>
    readonly labels: FieldRef<"Issue", 'Json'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
    readonly updatedAt: FieldRef<"Issue", 'DateTime'>
    readonly projectId: FieldRef<"Issue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue createManyAndReturn
   */
  export type IssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issue updateManyAndReturn
   */
  export type IssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issue.agentRuns
   */
  export type Issue$agentRunsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    where?: AgentRunWhereInput
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    cursor?: AgentRunWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
  }


  /**
   * Model AgentRun
   */

  export type AggregateAgentRun = {
    _count: AgentRunCountAggregateOutputType | null
    _min: AgentRunMinAggregateOutputType | null
    _max: AgentRunMaxAggregateOutputType | null
  }

  export type AgentRunMinAggregateOutputType = {
    id: string | null
    status: string | null
    runType: string | null
    issueId: string | null
    projectId: string | null
    triggeredById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentRunMaxAggregateOutputType = {
    id: string | null
    status: string | null
    runType: string | null
    issueId: string | null
    projectId: string | null
    triggeredById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AgentRunCountAggregateOutputType = {
    id: number
    status: number
    runType: number
    issueId: number
    projectId: number
    triggeredById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AgentRunMinAggregateInputType = {
    id?: true
    status?: true
    runType?: true
    issueId?: true
    projectId?: true
    triggeredById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentRunMaxAggregateInputType = {
    id?: true
    status?: true
    runType?: true
    issueId?: true
    projectId?: true
    triggeredById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AgentRunCountAggregateInputType = {
    id?: true
    status?: true
    runType?: true
    issueId?: true
    projectId?: true
    triggeredById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AgentRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRun to aggregate.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AgentRuns
    **/
    _count?: true | AgentRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AgentRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AgentRunMaxAggregateInputType
  }

  export type GetAgentRunAggregateType<T extends AgentRunAggregateArgs> = {
        [P in keyof T & keyof AggregateAgentRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgentRun[P]>
      : GetScalarType<T[P], AggregateAgentRun[P]>
  }




  export type AgentRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AgentRunWhereInput
    orderBy?: AgentRunOrderByWithAggregationInput | AgentRunOrderByWithAggregationInput[]
    by: AgentRunScalarFieldEnum[] | AgentRunScalarFieldEnum
    having?: AgentRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AgentRunCountAggregateInputType | true
    _min?: AgentRunMinAggregateInputType
    _max?: AgentRunMaxAggregateInputType
  }

  export type AgentRunGroupByOutputType = {
    id: string
    status: string
    runType: string
    issueId: string | null
    projectId: string
    triggeredById: string | null
    createdAt: Date
    updatedAt: Date
    _count: AgentRunCountAggregateOutputType | null
    _min: AgentRunMinAggregateOutputType | null
    _max: AgentRunMaxAggregateOutputType | null
  }

  type GetAgentRunGroupByPayload<T extends AgentRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AgentRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AgentRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AgentRunGroupByOutputType[P]>
            : GetScalarType<T[P], AgentRunGroupByOutputType[P]>
        }
      >
    >


  export type AgentRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    runType?: boolean
    issueId?: boolean
    projectId?: boolean
    triggeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | AgentRun$issueArgs<ExtArgs>
    project?: boolean | ReposDefaultArgs<ExtArgs>
    triggeredBy?: boolean | AgentRun$triggeredByArgs<ExtArgs>
    aiRun?: boolean | AgentRun$aiRunArgs<ExtArgs>
  }, ExtArgs["result"]["agentRun"]>

  export type AgentRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    runType?: boolean
    issueId?: boolean
    projectId?: boolean
    triggeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | AgentRun$issueArgs<ExtArgs>
    project?: boolean | ReposDefaultArgs<ExtArgs>
    triggeredBy?: boolean | AgentRun$triggeredByArgs<ExtArgs>
  }, ExtArgs["result"]["agentRun"]>

  export type AgentRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    runType?: boolean
    issueId?: boolean
    projectId?: boolean
    triggeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issue?: boolean | AgentRun$issueArgs<ExtArgs>
    project?: boolean | ReposDefaultArgs<ExtArgs>
    triggeredBy?: boolean | AgentRun$triggeredByArgs<ExtArgs>
  }, ExtArgs["result"]["agentRun"]>

  export type AgentRunSelectScalar = {
    id?: boolean
    status?: boolean
    runType?: boolean
    issueId?: boolean
    projectId?: boolean
    triggeredById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AgentRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "runType" | "issueId" | "projectId" | "triggeredById" | "createdAt" | "updatedAt", ExtArgs["result"]["agentRun"]>
  export type AgentRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | AgentRun$issueArgs<ExtArgs>
    project?: boolean | ReposDefaultArgs<ExtArgs>
    triggeredBy?: boolean | AgentRun$triggeredByArgs<ExtArgs>
    aiRun?: boolean | AgentRun$aiRunArgs<ExtArgs>
  }
  export type AgentRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | AgentRun$issueArgs<ExtArgs>
    project?: boolean | ReposDefaultArgs<ExtArgs>
    triggeredBy?: boolean | AgentRun$triggeredByArgs<ExtArgs>
  }
  export type AgentRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issue?: boolean | AgentRun$issueArgs<ExtArgs>
    project?: boolean | ReposDefaultArgs<ExtArgs>
    triggeredBy?: boolean | AgentRun$triggeredByArgs<ExtArgs>
  }

  export type $AgentRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AgentRun"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs> | null
      project: Prisma.$ReposPayload<ExtArgs>
      triggeredBy: Prisma.$UserPayload<ExtArgs> | null
      aiRun: Prisma.$AIRunPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      runType: string
      issueId: string | null
      projectId: string
      triggeredById: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["agentRun"]>
    composites: {}
  }

  type AgentRunGetPayload<S extends boolean | null | undefined | AgentRunDefaultArgs> = $Result.GetResult<Prisma.$AgentRunPayload, S>

  type AgentRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AgentRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AgentRunCountAggregateInputType | true
    }

  export interface AgentRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AgentRun'], meta: { name: 'AgentRun' } }
    /**
     * Find zero or one AgentRun that matches the filter.
     * @param {AgentRunFindUniqueArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AgentRunFindUniqueArgs>(args: SelectSubset<T, AgentRunFindUniqueArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AgentRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AgentRunFindUniqueOrThrowArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AgentRunFindUniqueOrThrowArgs>(args: SelectSubset<T, AgentRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunFindFirstArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AgentRunFindFirstArgs>(args?: SelectSubset<T, AgentRunFindFirstArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AgentRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunFindFirstOrThrowArgs} args - Arguments to find a AgentRun
     * @example
     * // Get one AgentRun
     * const agentRun = await prisma.agentRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AgentRunFindFirstOrThrowArgs>(args?: SelectSubset<T, AgentRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AgentRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AgentRuns
     * const agentRuns = await prisma.agentRun.findMany()
     * 
     * // Get first 10 AgentRuns
     * const agentRuns = await prisma.agentRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const agentRunWithIdOnly = await prisma.agentRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AgentRunFindManyArgs>(args?: SelectSubset<T, AgentRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AgentRun.
     * @param {AgentRunCreateArgs} args - Arguments to create a AgentRun.
     * @example
     * // Create one AgentRun
     * const AgentRun = await prisma.agentRun.create({
     *   data: {
     *     // ... data to create a AgentRun
     *   }
     * })
     * 
     */
    create<T extends AgentRunCreateArgs>(args: SelectSubset<T, AgentRunCreateArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AgentRuns.
     * @param {AgentRunCreateManyArgs} args - Arguments to create many AgentRuns.
     * @example
     * // Create many AgentRuns
     * const agentRun = await prisma.agentRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AgentRunCreateManyArgs>(args?: SelectSubset<T, AgentRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AgentRuns and returns the data saved in the database.
     * @param {AgentRunCreateManyAndReturnArgs} args - Arguments to create many AgentRuns.
     * @example
     * // Create many AgentRuns
     * const agentRun = await prisma.agentRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AgentRuns and only return the `id`
     * const agentRunWithIdOnly = await prisma.agentRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AgentRunCreateManyAndReturnArgs>(args?: SelectSubset<T, AgentRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AgentRun.
     * @param {AgentRunDeleteArgs} args - Arguments to delete one AgentRun.
     * @example
     * // Delete one AgentRun
     * const AgentRun = await prisma.agentRun.delete({
     *   where: {
     *     // ... filter to delete one AgentRun
     *   }
     * })
     * 
     */
    delete<T extends AgentRunDeleteArgs>(args: SelectSubset<T, AgentRunDeleteArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AgentRun.
     * @param {AgentRunUpdateArgs} args - Arguments to update one AgentRun.
     * @example
     * // Update one AgentRun
     * const agentRun = await prisma.agentRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AgentRunUpdateArgs>(args: SelectSubset<T, AgentRunUpdateArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AgentRuns.
     * @param {AgentRunDeleteManyArgs} args - Arguments to filter AgentRuns to delete.
     * @example
     * // Delete a few AgentRuns
     * const { count } = await prisma.agentRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AgentRunDeleteManyArgs>(args?: SelectSubset<T, AgentRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AgentRuns
     * const agentRun = await prisma.agentRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AgentRunUpdateManyArgs>(args: SelectSubset<T, AgentRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AgentRuns and returns the data updated in the database.
     * @param {AgentRunUpdateManyAndReturnArgs} args - Arguments to update many AgentRuns.
     * @example
     * // Update many AgentRuns
     * const agentRun = await prisma.agentRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AgentRuns and only return the `id`
     * const agentRunWithIdOnly = await prisma.agentRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AgentRunUpdateManyAndReturnArgs>(args: SelectSubset<T, AgentRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AgentRun.
     * @param {AgentRunUpsertArgs} args - Arguments to update or create a AgentRun.
     * @example
     * // Update or create a AgentRun
     * const agentRun = await prisma.agentRun.upsert({
     *   create: {
     *     // ... data to create a AgentRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AgentRun we want to update
     *   }
     * })
     */
    upsert<T extends AgentRunUpsertArgs>(args: SelectSubset<T, AgentRunUpsertArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AgentRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunCountArgs} args - Arguments to filter AgentRuns to count.
     * @example
     * // Count the number of AgentRuns
     * const count = await prisma.agentRun.count({
     *   where: {
     *     // ... the filter for the AgentRuns we want to count
     *   }
     * })
    **/
    count<T extends AgentRunCountArgs>(
      args?: Subset<T, AgentRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AgentRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AgentRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AgentRunAggregateArgs>(args: Subset<T, AgentRunAggregateArgs>): Prisma.PrismaPromise<GetAgentRunAggregateType<T>>

    /**
     * Group by AgentRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AgentRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AgentRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AgentRunGroupByArgs['orderBy'] }
        : { orderBy?: AgentRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AgentRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgentRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AgentRun model
   */
  readonly fields: AgentRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AgentRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AgentRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    issue<T extends AgentRun$issueArgs<ExtArgs> = {}>(args?: Subset<T, AgentRun$issueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    project<T extends ReposDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReposDefaultArgs<ExtArgs>>): Prisma__ReposClient<$Result.GetResult<Prisma.$ReposPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    triggeredBy<T extends AgentRun$triggeredByArgs<ExtArgs> = {}>(args?: Subset<T, AgentRun$triggeredByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    aiRun<T extends AgentRun$aiRunArgs<ExtArgs> = {}>(args?: Subset<T, AgentRun$aiRunArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AgentRun model
   */
  interface AgentRunFieldRefs {
    readonly id: FieldRef<"AgentRun", 'String'>
    readonly status: FieldRef<"AgentRun", 'String'>
    readonly runType: FieldRef<"AgentRun", 'String'>
    readonly issueId: FieldRef<"AgentRun", 'String'>
    readonly projectId: FieldRef<"AgentRun", 'String'>
    readonly triggeredById: FieldRef<"AgentRun", 'String'>
    readonly createdAt: FieldRef<"AgentRun", 'DateTime'>
    readonly updatedAt: FieldRef<"AgentRun", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AgentRun findUnique
   */
  export type AgentRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun findUniqueOrThrow
   */
  export type AgentRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun findFirst
   */
  export type AgentRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRuns.
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRuns.
     */
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * AgentRun findFirstOrThrow
   */
  export type AgentRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRun to fetch.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AgentRuns.
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AgentRuns.
     */
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * AgentRun findMany
   */
  export type AgentRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter, which AgentRuns to fetch.
     */
    where?: AgentRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AgentRuns to fetch.
     */
    orderBy?: AgentRunOrderByWithRelationInput | AgentRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AgentRuns.
     */
    cursor?: AgentRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AgentRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AgentRuns.
     */
    skip?: number
    distinct?: AgentRunScalarFieldEnum | AgentRunScalarFieldEnum[]
  }

  /**
   * AgentRun create
   */
  export type AgentRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * The data needed to create a AgentRun.
     */
    data: XOR<AgentRunCreateInput, AgentRunUncheckedCreateInput>
  }

  /**
   * AgentRun createMany
   */
  export type AgentRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AgentRuns.
     */
    data: AgentRunCreateManyInput | AgentRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AgentRun createManyAndReturn
   */
  export type AgentRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * The data used to create many AgentRuns.
     */
    data: AgentRunCreateManyInput | AgentRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentRun update
   */
  export type AgentRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * The data needed to update a AgentRun.
     */
    data: XOR<AgentRunUpdateInput, AgentRunUncheckedUpdateInput>
    /**
     * Choose, which AgentRun to update.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun updateMany
   */
  export type AgentRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AgentRuns.
     */
    data: XOR<AgentRunUpdateManyMutationInput, AgentRunUncheckedUpdateManyInput>
    /**
     * Filter which AgentRuns to update
     */
    where?: AgentRunWhereInput
    /**
     * Limit how many AgentRuns to update.
     */
    limit?: number
  }

  /**
   * AgentRun updateManyAndReturn
   */
  export type AgentRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * The data used to update AgentRuns.
     */
    data: XOR<AgentRunUpdateManyMutationInput, AgentRunUncheckedUpdateManyInput>
    /**
     * Filter which AgentRuns to update
     */
    where?: AgentRunWhereInput
    /**
     * Limit how many AgentRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AgentRun upsert
   */
  export type AgentRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * The filter to search for the AgentRun to update in case it exists.
     */
    where: AgentRunWhereUniqueInput
    /**
     * In case the AgentRun found by the `where` argument doesn't exist, create a new AgentRun with this data.
     */
    create: XOR<AgentRunCreateInput, AgentRunUncheckedCreateInput>
    /**
     * In case the AgentRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AgentRunUpdateInput, AgentRunUncheckedUpdateInput>
  }

  /**
   * AgentRun delete
   */
  export type AgentRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
    /**
     * Filter which AgentRun to delete.
     */
    where: AgentRunWhereUniqueInput
  }

  /**
   * AgentRun deleteMany
   */
  export type AgentRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AgentRuns to delete
     */
    where?: AgentRunWhereInput
    /**
     * Limit how many AgentRuns to delete.
     */
    limit?: number
  }

  /**
   * AgentRun.issue
   */
  export type AgentRun$issueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
  }

  /**
   * AgentRun.triggeredBy
   */
  export type AgentRun$triggeredByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * AgentRun.aiRun
   */
  export type AgentRun$aiRunArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    where?: AIRunWhereInput
  }

  /**
   * AgentRun without action
   */
  export type AgentRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AgentRun
     */
    select?: AgentRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AgentRun
     */
    omit?: AgentRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AgentRunInclude<ExtArgs> | null
  }


  /**
   * Model AIRun
   */

  export type AggregateAIRun = {
    _count: AIRunCountAggregateOutputType | null
    _min: AIRunMinAggregateOutputType | null
    _max: AIRunMaxAggregateOutputType | null
  }

  export type AIRunMinAggregateOutputType = {
    id: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
    agentRunId: string | null
  }

  export type AIRunMaxAggregateOutputType = {
    id: string | null
    prompt: string | null
    response: string | null
    createdAt: Date | null
    agentRunId: string | null
  }

  export type AIRunCountAggregateOutputType = {
    id: number
    prompt: number
    response: number
    steps: number
    files: number
    createdAt: number
    agentRunId: number
    _all: number
  }


  export type AIRunMinAggregateInputType = {
    id?: true
    prompt?: true
    response?: true
    createdAt?: true
    agentRunId?: true
  }

  export type AIRunMaxAggregateInputType = {
    id?: true
    prompt?: true
    response?: true
    createdAt?: true
    agentRunId?: true
  }

  export type AIRunCountAggregateInputType = {
    id?: true
    prompt?: true
    response?: true
    steps?: true
    files?: true
    createdAt?: true
    agentRunId?: true
    _all?: true
  }

  export type AIRunAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIRun to aggregate.
     */
    where?: AIRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRuns to fetch.
     */
    orderBy?: AIRunOrderByWithRelationInput | AIRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AIRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AIRuns
    **/
    _count?: true | AIRunCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AIRunMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AIRunMaxAggregateInputType
  }

  export type GetAIRunAggregateType<T extends AIRunAggregateArgs> = {
        [P in keyof T & keyof AggregateAIRun]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAIRun[P]>
      : GetScalarType<T[P], AggregateAIRun[P]>
  }




  export type AIRunGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AIRunWhereInput
    orderBy?: AIRunOrderByWithAggregationInput | AIRunOrderByWithAggregationInput[]
    by: AIRunScalarFieldEnum[] | AIRunScalarFieldEnum
    having?: AIRunScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AIRunCountAggregateInputType | true
    _min?: AIRunMinAggregateInputType
    _max?: AIRunMaxAggregateInputType
  }

  export type AIRunGroupByOutputType = {
    id: string
    prompt: string
    response: string
    steps: JsonValue | null
    files: JsonValue | null
    createdAt: Date
    agentRunId: string
    _count: AIRunCountAggregateOutputType | null
    _min: AIRunMinAggregateOutputType | null
    _max: AIRunMaxAggregateOutputType | null
  }

  type GetAIRunGroupByPayload<T extends AIRunGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AIRunGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AIRunGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AIRunGroupByOutputType[P]>
            : GetScalarType<T[P], AIRunGroupByOutputType[P]>
        }
      >
    >


  export type AIRunSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    response?: boolean
    steps?: boolean
    files?: boolean
    createdAt?: boolean
    agentRunId?: boolean
    agentRun?: boolean | AgentRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIRun"]>

  export type AIRunSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    response?: boolean
    steps?: boolean
    files?: boolean
    createdAt?: boolean
    agentRunId?: boolean
    agentRun?: boolean | AgentRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIRun"]>

  export type AIRunSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    prompt?: boolean
    response?: boolean
    steps?: boolean
    files?: boolean
    createdAt?: boolean
    agentRunId?: boolean
    agentRun?: boolean | AgentRunDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aIRun"]>

  export type AIRunSelectScalar = {
    id?: boolean
    prompt?: boolean
    response?: boolean
    steps?: boolean
    files?: boolean
    createdAt?: boolean
    agentRunId?: boolean
  }

  export type AIRunOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "prompt" | "response" | "steps" | "files" | "createdAt" | "agentRunId", ExtArgs["result"]["aIRun"]>
  export type AIRunInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentRun?: boolean | AgentRunDefaultArgs<ExtArgs>
  }
  export type AIRunIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentRun?: boolean | AgentRunDefaultArgs<ExtArgs>
  }
  export type AIRunIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agentRun?: boolean | AgentRunDefaultArgs<ExtArgs>
  }

  export type $AIRunPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AIRun"
    objects: {
      agentRun: Prisma.$AgentRunPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      prompt: string
      response: string
      steps: Prisma.JsonValue | null
      files: Prisma.JsonValue | null
      createdAt: Date
      agentRunId: string
    }, ExtArgs["result"]["aIRun"]>
    composites: {}
  }

  type AIRunGetPayload<S extends boolean | null | undefined | AIRunDefaultArgs> = $Result.GetResult<Prisma.$AIRunPayload, S>

  type AIRunCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AIRunFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AIRunCountAggregateInputType | true
    }

  export interface AIRunDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AIRun'], meta: { name: 'AIRun' } }
    /**
     * Find zero or one AIRun that matches the filter.
     * @param {AIRunFindUniqueArgs} args - Arguments to find a AIRun
     * @example
     * // Get one AIRun
     * const aIRun = await prisma.aIRun.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AIRunFindUniqueArgs>(args: SelectSubset<T, AIRunFindUniqueArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AIRun that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AIRunFindUniqueOrThrowArgs} args - Arguments to find a AIRun
     * @example
     * // Get one AIRun
     * const aIRun = await prisma.aIRun.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AIRunFindUniqueOrThrowArgs>(args: SelectSubset<T, AIRunFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIRun that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRunFindFirstArgs} args - Arguments to find a AIRun
     * @example
     * // Get one AIRun
     * const aIRun = await prisma.aIRun.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AIRunFindFirstArgs>(args?: SelectSubset<T, AIRunFindFirstArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AIRun that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRunFindFirstOrThrowArgs} args - Arguments to find a AIRun
     * @example
     * // Get one AIRun
     * const aIRun = await prisma.aIRun.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AIRunFindFirstOrThrowArgs>(args?: SelectSubset<T, AIRunFindFirstOrThrowArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AIRuns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRunFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AIRuns
     * const aIRuns = await prisma.aIRun.findMany()
     * 
     * // Get first 10 AIRuns
     * const aIRuns = await prisma.aIRun.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aIRunWithIdOnly = await prisma.aIRun.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AIRunFindManyArgs>(args?: SelectSubset<T, AIRunFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AIRun.
     * @param {AIRunCreateArgs} args - Arguments to create a AIRun.
     * @example
     * // Create one AIRun
     * const AIRun = await prisma.aIRun.create({
     *   data: {
     *     // ... data to create a AIRun
     *   }
     * })
     * 
     */
    create<T extends AIRunCreateArgs>(args: SelectSubset<T, AIRunCreateArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AIRuns.
     * @param {AIRunCreateManyArgs} args - Arguments to create many AIRuns.
     * @example
     * // Create many AIRuns
     * const aIRun = await prisma.aIRun.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AIRunCreateManyArgs>(args?: SelectSubset<T, AIRunCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AIRuns and returns the data saved in the database.
     * @param {AIRunCreateManyAndReturnArgs} args - Arguments to create many AIRuns.
     * @example
     * // Create many AIRuns
     * const aIRun = await prisma.aIRun.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AIRuns and only return the `id`
     * const aIRunWithIdOnly = await prisma.aIRun.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AIRunCreateManyAndReturnArgs>(args?: SelectSubset<T, AIRunCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AIRun.
     * @param {AIRunDeleteArgs} args - Arguments to delete one AIRun.
     * @example
     * // Delete one AIRun
     * const AIRun = await prisma.aIRun.delete({
     *   where: {
     *     // ... filter to delete one AIRun
     *   }
     * })
     * 
     */
    delete<T extends AIRunDeleteArgs>(args: SelectSubset<T, AIRunDeleteArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AIRun.
     * @param {AIRunUpdateArgs} args - Arguments to update one AIRun.
     * @example
     * // Update one AIRun
     * const aIRun = await prisma.aIRun.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AIRunUpdateArgs>(args: SelectSubset<T, AIRunUpdateArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AIRuns.
     * @param {AIRunDeleteManyArgs} args - Arguments to filter AIRuns to delete.
     * @example
     * // Delete a few AIRuns
     * const { count } = await prisma.aIRun.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AIRunDeleteManyArgs>(args?: SelectSubset<T, AIRunDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRunUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AIRuns
     * const aIRun = await prisma.aIRun.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AIRunUpdateManyArgs>(args: SelectSubset<T, AIRunUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AIRuns and returns the data updated in the database.
     * @param {AIRunUpdateManyAndReturnArgs} args - Arguments to update many AIRuns.
     * @example
     * // Update many AIRuns
     * const aIRun = await prisma.aIRun.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AIRuns and only return the `id`
     * const aIRunWithIdOnly = await prisma.aIRun.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AIRunUpdateManyAndReturnArgs>(args: SelectSubset<T, AIRunUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AIRun.
     * @param {AIRunUpsertArgs} args - Arguments to update or create a AIRun.
     * @example
     * // Update or create a AIRun
     * const aIRun = await prisma.aIRun.upsert({
     *   create: {
     *     // ... data to create a AIRun
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AIRun we want to update
     *   }
     * })
     */
    upsert<T extends AIRunUpsertArgs>(args: SelectSubset<T, AIRunUpsertArgs<ExtArgs>>): Prisma__AIRunClient<$Result.GetResult<Prisma.$AIRunPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AIRuns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRunCountArgs} args - Arguments to filter AIRuns to count.
     * @example
     * // Count the number of AIRuns
     * const count = await prisma.aIRun.count({
     *   where: {
     *     // ... the filter for the AIRuns we want to count
     *   }
     * })
    **/
    count<T extends AIRunCountArgs>(
      args?: Subset<T, AIRunCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AIRunCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AIRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRunAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AIRunAggregateArgs>(args: Subset<T, AIRunAggregateArgs>): Prisma.PrismaPromise<GetAIRunAggregateType<T>>

    /**
     * Group by AIRun.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AIRunGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AIRunGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AIRunGroupByArgs['orderBy'] }
        : { orderBy?: AIRunGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AIRunGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAIRunGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AIRun model
   */
  readonly fields: AIRunFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AIRun.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AIRunClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    agentRun<T extends AgentRunDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AgentRunDefaultArgs<ExtArgs>>): Prisma__AgentRunClient<$Result.GetResult<Prisma.$AgentRunPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AIRun model
   */
  interface AIRunFieldRefs {
    readonly id: FieldRef<"AIRun", 'String'>
    readonly prompt: FieldRef<"AIRun", 'String'>
    readonly response: FieldRef<"AIRun", 'String'>
    readonly steps: FieldRef<"AIRun", 'Json'>
    readonly files: FieldRef<"AIRun", 'Json'>
    readonly createdAt: FieldRef<"AIRun", 'DateTime'>
    readonly agentRunId: FieldRef<"AIRun", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AIRun findUnique
   */
  export type AIRunFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * Filter, which AIRun to fetch.
     */
    where: AIRunWhereUniqueInput
  }

  /**
   * AIRun findUniqueOrThrow
   */
  export type AIRunFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * Filter, which AIRun to fetch.
     */
    where: AIRunWhereUniqueInput
  }

  /**
   * AIRun findFirst
   */
  export type AIRunFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * Filter, which AIRun to fetch.
     */
    where?: AIRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRuns to fetch.
     */
    orderBy?: AIRunOrderByWithRelationInput | AIRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIRuns.
     */
    cursor?: AIRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIRuns.
     */
    distinct?: AIRunScalarFieldEnum | AIRunScalarFieldEnum[]
  }

  /**
   * AIRun findFirstOrThrow
   */
  export type AIRunFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * Filter, which AIRun to fetch.
     */
    where?: AIRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRuns to fetch.
     */
    orderBy?: AIRunOrderByWithRelationInput | AIRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AIRuns.
     */
    cursor?: AIRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRuns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AIRuns.
     */
    distinct?: AIRunScalarFieldEnum | AIRunScalarFieldEnum[]
  }

  /**
   * AIRun findMany
   */
  export type AIRunFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * Filter, which AIRuns to fetch.
     */
    where?: AIRunWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AIRuns to fetch.
     */
    orderBy?: AIRunOrderByWithRelationInput | AIRunOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AIRuns.
     */
    cursor?: AIRunWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AIRuns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AIRuns.
     */
    skip?: number
    distinct?: AIRunScalarFieldEnum | AIRunScalarFieldEnum[]
  }

  /**
   * AIRun create
   */
  export type AIRunCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * The data needed to create a AIRun.
     */
    data: XOR<AIRunCreateInput, AIRunUncheckedCreateInput>
  }

  /**
   * AIRun createMany
   */
  export type AIRunCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AIRuns.
     */
    data: AIRunCreateManyInput | AIRunCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AIRun createManyAndReturn
   */
  export type AIRunCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * The data used to create many AIRuns.
     */
    data: AIRunCreateManyInput | AIRunCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIRun update
   */
  export type AIRunUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * The data needed to update a AIRun.
     */
    data: XOR<AIRunUpdateInput, AIRunUncheckedUpdateInput>
    /**
     * Choose, which AIRun to update.
     */
    where: AIRunWhereUniqueInput
  }

  /**
   * AIRun updateMany
   */
  export type AIRunUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AIRuns.
     */
    data: XOR<AIRunUpdateManyMutationInput, AIRunUncheckedUpdateManyInput>
    /**
     * Filter which AIRuns to update
     */
    where?: AIRunWhereInput
    /**
     * Limit how many AIRuns to update.
     */
    limit?: number
  }

  /**
   * AIRun updateManyAndReturn
   */
  export type AIRunUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * The data used to update AIRuns.
     */
    data: XOR<AIRunUpdateManyMutationInput, AIRunUncheckedUpdateManyInput>
    /**
     * Filter which AIRuns to update
     */
    where?: AIRunWhereInput
    /**
     * Limit how many AIRuns to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AIRun upsert
   */
  export type AIRunUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * The filter to search for the AIRun to update in case it exists.
     */
    where: AIRunWhereUniqueInput
    /**
     * In case the AIRun found by the `where` argument doesn't exist, create a new AIRun with this data.
     */
    create: XOR<AIRunCreateInput, AIRunUncheckedCreateInput>
    /**
     * In case the AIRun was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AIRunUpdateInput, AIRunUncheckedUpdateInput>
  }

  /**
   * AIRun delete
   */
  export type AIRunDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
    /**
     * Filter which AIRun to delete.
     */
    where: AIRunWhereUniqueInput
  }

  /**
   * AIRun deleteMany
   */
  export type AIRunDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AIRuns to delete
     */
    where?: AIRunWhereInput
    /**
     * Limit how many AIRuns to delete.
     */
    limit?: number
  }

  /**
   * AIRun without action
   */
  export type AIRunDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AIRun
     */
    select?: AIRunSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AIRun
     */
    omit?: AIRunOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AIRunInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    githubId: 'githubId',
    name: 'name',
    email: 'email',
    image: 'image',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ReposScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    repoUrl: 'repoUrl',
    repoOwner: 'repoOwner',
    repoName: 'repoName',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ReposScalarFieldEnum = (typeof ReposScalarFieldEnum)[keyof typeof ReposScalarFieldEnum]


  export const IssueScalarFieldEnum: {
    id: 'id',
    githubIssueId: 'githubIssueId',
    title: 'title',
    body: 'body',
    state: 'state',
    labels: 'labels',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const AgentRunScalarFieldEnum: {
    id: 'id',
    status: 'status',
    runType: 'runType',
    issueId: 'issueId',
    projectId: 'projectId',
    triggeredById: 'triggeredById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AgentRunScalarFieldEnum = (typeof AgentRunScalarFieldEnum)[keyof typeof AgentRunScalarFieldEnum]


  export const AIRunScalarFieldEnum: {
    id: 'id',
    prompt: 'prompt',
    response: 'response',
    steps: 'steps',
    files: 'files',
    createdAt: 'createdAt',
    agentRunId: 'agentRunId'
  };

  export type AIRunScalarFieldEnum = (typeof AIRunScalarFieldEnum)[keyof typeof AIRunScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    githubId?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ReposListRelationFilter
    agentRuns?: AgentRunListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    projects?: ReposOrderByRelationAggregateInput
    agentRuns?: AgentRunOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    image?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    projects?: ReposListRelationFilter
    agentRuns?: AgentRunListRelationFilter
  }, "id" | "githubId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    githubId?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ReposWhereInput = {
    AND?: ReposWhereInput | ReposWhereInput[]
    OR?: ReposWhereInput[]
    NOT?: ReposWhereInput | ReposWhereInput[]
    id?: StringFilter<"Repos"> | string
    name?: StringFilter<"Repos"> | string
    description?: StringNullableFilter<"Repos"> | string | null
    repoUrl?: StringFilter<"Repos"> | string
    repoOwner?: StringFilter<"Repos"> | string
    repoName?: StringFilter<"Repos"> | string
    createdAt?: DateTimeFilter<"Repos"> | Date | string
    userId?: StringFilter<"Repos"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    issues?: IssueListRelationFilter
    agentRuns?: AgentRunListRelationFilter
  }

  export type ReposOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    repoUrl?: SortOrder
    repoOwner?: SortOrder
    repoName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    issues?: IssueOrderByRelationAggregateInput
    agentRuns?: AgentRunOrderByRelationAggregateInput
  }

  export type ReposWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReposWhereInput | ReposWhereInput[]
    OR?: ReposWhereInput[]
    NOT?: ReposWhereInput | ReposWhereInput[]
    name?: StringFilter<"Repos"> | string
    description?: StringNullableFilter<"Repos"> | string | null
    repoUrl?: StringFilter<"Repos"> | string
    repoOwner?: StringFilter<"Repos"> | string
    repoName?: StringFilter<"Repos"> | string
    createdAt?: DateTimeFilter<"Repos"> | Date | string
    userId?: StringFilter<"Repos"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    issues?: IssueListRelationFilter
    agentRuns?: AgentRunListRelationFilter
  }, "id">

  export type ReposOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    repoUrl?: SortOrder
    repoOwner?: SortOrder
    repoName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ReposCountOrderByAggregateInput
    _max?: ReposMaxOrderByAggregateInput
    _min?: ReposMinOrderByAggregateInput
  }

  export type ReposScalarWhereWithAggregatesInput = {
    AND?: ReposScalarWhereWithAggregatesInput | ReposScalarWhereWithAggregatesInput[]
    OR?: ReposScalarWhereWithAggregatesInput[]
    NOT?: ReposScalarWhereWithAggregatesInput | ReposScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Repos"> | string
    name?: StringWithAggregatesFilter<"Repos"> | string
    description?: StringNullableWithAggregatesFilter<"Repos"> | string | null
    repoUrl?: StringWithAggregatesFilter<"Repos"> | string
    repoOwner?: StringWithAggregatesFilter<"Repos"> | string
    repoName?: StringWithAggregatesFilter<"Repos"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Repos"> | Date | string
    userId?: StringWithAggregatesFilter<"Repos"> | string
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: StringFilter<"Issue"> | string
    githubIssueId?: IntNullableFilter<"Issue"> | number | null
    title?: StringFilter<"Issue"> | string
    body?: StringNullableFilter<"Issue"> | string | null
    state?: StringFilter<"Issue"> | string
    labels?: JsonNullableFilter<"Issue">
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    projectId?: StringFilter<"Issue"> | string
    project?: XOR<ReposScalarRelationFilter, ReposWhereInput>
    agentRuns?: AgentRunListRelationFilter
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    githubIssueId?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    state?: SortOrder
    labels?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    project?: ReposOrderByWithRelationInput
    agentRuns?: AgentRunOrderByRelationAggregateInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    githubIssueId?: number
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    title?: StringFilter<"Issue"> | string
    body?: StringNullableFilter<"Issue"> | string | null
    state?: StringFilter<"Issue"> | string
    labels?: JsonNullableFilter<"Issue">
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    projectId?: StringFilter<"Issue"> | string
    project?: XOR<ReposScalarRelationFilter, ReposWhereInput>
    agentRuns?: AgentRunListRelationFilter
  }, "id" | "githubIssueId">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    githubIssueId?: SortOrderInput | SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    state?: SortOrder
    labels?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _avg?: IssueAvgOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
    _sum?: IssueSumOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Issue"> | string
    githubIssueId?: IntNullableWithAggregatesFilter<"Issue"> | number | null
    title?: StringWithAggregatesFilter<"Issue"> | string
    body?: StringNullableWithAggregatesFilter<"Issue"> | string | null
    state?: StringWithAggregatesFilter<"Issue"> | string
    labels?: JsonNullableWithAggregatesFilter<"Issue">
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    projectId?: StringWithAggregatesFilter<"Issue"> | string
  }

  export type AgentRunWhereInput = {
    AND?: AgentRunWhereInput | AgentRunWhereInput[]
    OR?: AgentRunWhereInput[]
    NOT?: AgentRunWhereInput | AgentRunWhereInput[]
    id?: StringFilter<"AgentRun"> | string
    status?: StringFilter<"AgentRun"> | string
    runType?: StringFilter<"AgentRun"> | string
    issueId?: StringNullableFilter<"AgentRun"> | string | null
    projectId?: StringFilter<"AgentRun"> | string
    triggeredById?: StringNullableFilter<"AgentRun"> | string | null
    createdAt?: DateTimeFilter<"AgentRun"> | Date | string
    updatedAt?: DateTimeFilter<"AgentRun"> | Date | string
    issue?: XOR<IssueNullableScalarRelationFilter, IssueWhereInput> | null
    project?: XOR<ReposScalarRelationFilter, ReposWhereInput>
    triggeredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    aiRun?: XOR<AIRunNullableScalarRelationFilter, AIRunWhereInput> | null
  }

  export type AgentRunOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    runType?: SortOrder
    issueId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    triggeredById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issue?: IssueOrderByWithRelationInput
    project?: ReposOrderByWithRelationInput
    triggeredBy?: UserOrderByWithRelationInput
    aiRun?: AIRunOrderByWithRelationInput
  }

  export type AgentRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AgentRunWhereInput | AgentRunWhereInput[]
    OR?: AgentRunWhereInput[]
    NOT?: AgentRunWhereInput | AgentRunWhereInput[]
    status?: StringFilter<"AgentRun"> | string
    runType?: StringFilter<"AgentRun"> | string
    issueId?: StringNullableFilter<"AgentRun"> | string | null
    projectId?: StringFilter<"AgentRun"> | string
    triggeredById?: StringNullableFilter<"AgentRun"> | string | null
    createdAt?: DateTimeFilter<"AgentRun"> | Date | string
    updatedAt?: DateTimeFilter<"AgentRun"> | Date | string
    issue?: XOR<IssueNullableScalarRelationFilter, IssueWhereInput> | null
    project?: XOR<ReposScalarRelationFilter, ReposWhereInput>
    triggeredBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    aiRun?: XOR<AIRunNullableScalarRelationFilter, AIRunWhereInput> | null
  }, "id">

  export type AgentRunOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    runType?: SortOrder
    issueId?: SortOrderInput | SortOrder
    projectId?: SortOrder
    triggeredById?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AgentRunCountOrderByAggregateInput
    _max?: AgentRunMaxOrderByAggregateInput
    _min?: AgentRunMinOrderByAggregateInput
  }

  export type AgentRunScalarWhereWithAggregatesInput = {
    AND?: AgentRunScalarWhereWithAggregatesInput | AgentRunScalarWhereWithAggregatesInput[]
    OR?: AgentRunScalarWhereWithAggregatesInput[]
    NOT?: AgentRunScalarWhereWithAggregatesInput | AgentRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AgentRun"> | string
    status?: StringWithAggregatesFilter<"AgentRun"> | string
    runType?: StringWithAggregatesFilter<"AgentRun"> | string
    issueId?: StringNullableWithAggregatesFilter<"AgentRun"> | string | null
    projectId?: StringWithAggregatesFilter<"AgentRun"> | string
    triggeredById?: StringNullableWithAggregatesFilter<"AgentRun"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AgentRun"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AgentRun"> | Date | string
  }

  export type AIRunWhereInput = {
    AND?: AIRunWhereInput | AIRunWhereInput[]
    OR?: AIRunWhereInput[]
    NOT?: AIRunWhereInput | AIRunWhereInput[]
    id?: StringFilter<"AIRun"> | string
    prompt?: StringFilter<"AIRun"> | string
    response?: StringFilter<"AIRun"> | string
    steps?: JsonNullableFilter<"AIRun">
    files?: JsonNullableFilter<"AIRun">
    createdAt?: DateTimeFilter<"AIRun"> | Date | string
    agentRunId?: StringFilter<"AIRun"> | string
    agentRun?: XOR<AgentRunScalarRelationFilter, AgentRunWhereInput>
  }

  export type AIRunOrderByWithRelationInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    steps?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agentRunId?: SortOrder
    agentRun?: AgentRunOrderByWithRelationInput
  }

  export type AIRunWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    agentRunId?: string
    AND?: AIRunWhereInput | AIRunWhereInput[]
    OR?: AIRunWhereInput[]
    NOT?: AIRunWhereInput | AIRunWhereInput[]
    prompt?: StringFilter<"AIRun"> | string
    response?: StringFilter<"AIRun"> | string
    steps?: JsonNullableFilter<"AIRun">
    files?: JsonNullableFilter<"AIRun">
    createdAt?: DateTimeFilter<"AIRun"> | Date | string
    agentRun?: XOR<AgentRunScalarRelationFilter, AgentRunWhereInput>
  }, "id" | "agentRunId">

  export type AIRunOrderByWithAggregationInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    steps?: SortOrderInput | SortOrder
    files?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    agentRunId?: SortOrder
    _count?: AIRunCountOrderByAggregateInput
    _max?: AIRunMaxOrderByAggregateInput
    _min?: AIRunMinOrderByAggregateInput
  }

  export type AIRunScalarWhereWithAggregatesInput = {
    AND?: AIRunScalarWhereWithAggregatesInput | AIRunScalarWhereWithAggregatesInput[]
    OR?: AIRunScalarWhereWithAggregatesInput[]
    NOT?: AIRunScalarWhereWithAggregatesInput | AIRunScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AIRun"> | string
    prompt?: StringWithAggregatesFilter<"AIRun"> | string
    response?: StringWithAggregatesFilter<"AIRun"> | string
    steps?: JsonNullableWithAggregatesFilter<"AIRun">
    files?: JsonNullableWithAggregatesFilter<"AIRun">
    createdAt?: DateTimeWithAggregatesFilter<"AIRun"> | Date | string
    agentRunId?: StringWithAggregatesFilter<"AIRun"> | string
  }

  export type UserCreateInput = {
    id?: string
    githubId: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    projects?: ReposCreateNestedManyWithoutUserInput
    agentRuns?: AgentRunCreateNestedManyWithoutTriggeredByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    githubId: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    projects?: ReposUncheckedCreateNestedManyWithoutUserInput
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutTriggeredByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ReposUpdateManyWithoutUserNestedInput
    agentRuns?: AgentRunUpdateManyWithoutTriggeredByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ReposUncheckedUpdateManyWithoutUserNestedInput
    agentRuns?: AgentRunUncheckedUpdateManyWithoutTriggeredByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    githubId: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReposCreateInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    issues?: IssueCreateNestedManyWithoutProjectInput
    agentRuns?: AgentRunCreateNestedManyWithoutProjectInput
  }

  export type ReposUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    userId: string
    issues?: IssueUncheckedCreateNestedManyWithoutProjectInput
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ReposUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    issues?: IssueUpdateManyWithoutProjectNestedInput
    agentRuns?: AgentRunUpdateManyWithoutProjectNestedInput
  }

  export type ReposUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    issues?: IssueUncheckedUpdateManyWithoutProjectNestedInput
    agentRuns?: AgentRunUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ReposCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    userId: string
  }

  export type ReposUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReposUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type IssueCreateInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ReposCreateNestedOneWithoutIssuesInput
    agentRuns?: AgentRunCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ReposUpdateOneRequiredWithoutIssuesNestedInput
    agentRuns?: AgentRunUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    agentRuns?: AgentRunUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueCreateManyInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type IssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type AgentRunCreateInput = {
    id?: string
    status: string
    runType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssueCreateNestedOneWithoutAgentRunsInput
    project: ReposCreateNestedOneWithoutAgentRunsInput
    triggeredBy?: UserCreateNestedOneWithoutAgentRunsInput
    aiRun?: AIRunCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunUncheckedCreateInput = {
    id?: string
    status: string
    runType: string
    issueId?: string | null
    projectId: string
    triggeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiRun?: AIRunUncheckedCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneWithoutAgentRunsNestedInput
    project?: ReposUpdateOneRequiredWithoutAgentRunsNestedInput
    triggeredBy?: UserUpdateOneWithoutAgentRunsNestedInput
    aiRun?: AIRunUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiRun?: AIRunUncheckedUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunCreateManyInput = {
    id?: string
    status: string
    runType: string
    issueId?: string | null
    projectId: string
    triggeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRunCreateInput = {
    id?: string
    prompt: string
    response: string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    agentRun: AgentRunCreateNestedOneWithoutAiRunInput
  }

  export type AIRunUncheckedCreateInput = {
    id?: string
    prompt: string
    response: string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    agentRunId: string
  }

  export type AIRunUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRun?: AgentRunUpdateOneRequiredWithoutAiRunNestedInput
  }

  export type AIRunUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRunId?: StringFieldUpdateOperationsInput | string
  }

  export type AIRunCreateManyInput = {
    id?: string
    prompt: string
    response: string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    agentRunId: string
  }

  export type AIRunUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRunUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRunId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReposListRelationFilter = {
    every?: ReposWhereInput
    some?: ReposWhereInput
    none?: ReposWhereInput
  }

  export type AgentRunListRelationFilter = {
    every?: AgentRunWhereInput
    some?: AgentRunWhereInput
    none?: AgentRunWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReposOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AgentRunOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    githubId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    image?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReposCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    repoUrl?: SortOrder
    repoOwner?: SortOrder
    repoName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ReposMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    repoUrl?: SortOrder
    repoOwner?: SortOrder
    repoName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ReposMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    repoUrl?: SortOrder
    repoOwner?: SortOrder
    repoName?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReposScalarRelationFilter = {
    is?: ReposWhereInput
    isNot?: ReposWhereInput
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    githubIssueId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    state?: SortOrder
    labels?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type IssueAvgOrderByAggregateInput = {
    githubIssueId?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    githubIssueId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    githubIssueId?: SortOrder
    title?: SortOrder
    body?: SortOrder
    state?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
  }

  export type IssueSumOrderByAggregateInput = {
    githubIssueId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IssueNullableScalarRelationFilter = {
    is?: IssueWhereInput | null
    isNot?: IssueWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type AIRunNullableScalarRelationFilter = {
    is?: AIRunWhereInput | null
    isNot?: AIRunWhereInput | null
  }

  export type AgentRunCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    runType?: SortOrder
    issueId?: SortOrder
    projectId?: SortOrder
    triggeredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentRunMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    runType?: SortOrder
    issueId?: SortOrder
    projectId?: SortOrder
    triggeredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentRunMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    runType?: SortOrder
    issueId?: SortOrder
    projectId?: SortOrder
    triggeredById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AgentRunScalarRelationFilter = {
    is?: AgentRunWhereInput
    isNot?: AgentRunWhereInput
  }

  export type AIRunCountOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    steps?: SortOrder
    files?: SortOrder
    createdAt?: SortOrder
    agentRunId?: SortOrder
  }

  export type AIRunMaxOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    agentRunId?: SortOrder
  }

  export type AIRunMinOrderByAggregateInput = {
    id?: SortOrder
    prompt?: SortOrder
    response?: SortOrder
    createdAt?: SortOrder
    agentRunId?: SortOrder
  }

  export type ReposCreateNestedManyWithoutUserInput = {
    create?: XOR<ReposCreateWithoutUserInput, ReposUncheckedCreateWithoutUserInput> | ReposCreateWithoutUserInput[] | ReposUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReposCreateOrConnectWithoutUserInput | ReposCreateOrConnectWithoutUserInput[]
    createMany?: ReposCreateManyUserInputEnvelope
    connect?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
  }

  export type AgentRunCreateNestedManyWithoutTriggeredByInput = {
    create?: XOR<AgentRunCreateWithoutTriggeredByInput, AgentRunUncheckedCreateWithoutTriggeredByInput> | AgentRunCreateWithoutTriggeredByInput[] | AgentRunUncheckedCreateWithoutTriggeredByInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutTriggeredByInput | AgentRunCreateOrConnectWithoutTriggeredByInput[]
    createMany?: AgentRunCreateManyTriggeredByInputEnvelope
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type ReposUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReposCreateWithoutUserInput, ReposUncheckedCreateWithoutUserInput> | ReposCreateWithoutUserInput[] | ReposUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReposCreateOrConnectWithoutUserInput | ReposCreateOrConnectWithoutUserInput[]
    createMany?: ReposCreateManyUserInputEnvelope
    connect?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
  }

  export type AgentRunUncheckedCreateNestedManyWithoutTriggeredByInput = {
    create?: XOR<AgentRunCreateWithoutTriggeredByInput, AgentRunUncheckedCreateWithoutTriggeredByInput> | AgentRunCreateWithoutTriggeredByInput[] | AgentRunUncheckedCreateWithoutTriggeredByInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutTriggeredByInput | AgentRunCreateOrConnectWithoutTriggeredByInput[]
    createMany?: AgentRunCreateManyTriggeredByInputEnvelope
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReposUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReposCreateWithoutUserInput, ReposUncheckedCreateWithoutUserInput> | ReposCreateWithoutUserInput[] | ReposUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReposCreateOrConnectWithoutUserInput | ReposCreateOrConnectWithoutUserInput[]
    upsert?: ReposUpsertWithWhereUniqueWithoutUserInput | ReposUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReposCreateManyUserInputEnvelope
    set?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    disconnect?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    delete?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    connect?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    update?: ReposUpdateWithWhereUniqueWithoutUserInput | ReposUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReposUpdateManyWithWhereWithoutUserInput | ReposUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReposScalarWhereInput | ReposScalarWhereInput[]
  }

  export type AgentRunUpdateManyWithoutTriggeredByNestedInput = {
    create?: XOR<AgentRunCreateWithoutTriggeredByInput, AgentRunUncheckedCreateWithoutTriggeredByInput> | AgentRunCreateWithoutTriggeredByInput[] | AgentRunUncheckedCreateWithoutTriggeredByInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutTriggeredByInput | AgentRunCreateOrConnectWithoutTriggeredByInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutTriggeredByInput | AgentRunUpsertWithWhereUniqueWithoutTriggeredByInput[]
    createMany?: AgentRunCreateManyTriggeredByInputEnvelope
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutTriggeredByInput | AgentRunUpdateWithWhereUniqueWithoutTriggeredByInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutTriggeredByInput | AgentRunUpdateManyWithWhereWithoutTriggeredByInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type ReposUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReposCreateWithoutUserInput, ReposUncheckedCreateWithoutUserInput> | ReposCreateWithoutUserInput[] | ReposUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReposCreateOrConnectWithoutUserInput | ReposCreateOrConnectWithoutUserInput[]
    upsert?: ReposUpsertWithWhereUniqueWithoutUserInput | ReposUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReposCreateManyUserInputEnvelope
    set?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    disconnect?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    delete?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    connect?: ReposWhereUniqueInput | ReposWhereUniqueInput[]
    update?: ReposUpdateWithWhereUniqueWithoutUserInput | ReposUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReposUpdateManyWithWhereWithoutUserInput | ReposUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReposScalarWhereInput | ReposScalarWhereInput[]
  }

  export type AgentRunUncheckedUpdateManyWithoutTriggeredByNestedInput = {
    create?: XOR<AgentRunCreateWithoutTriggeredByInput, AgentRunUncheckedCreateWithoutTriggeredByInput> | AgentRunCreateWithoutTriggeredByInput[] | AgentRunUncheckedCreateWithoutTriggeredByInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutTriggeredByInput | AgentRunCreateOrConnectWithoutTriggeredByInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutTriggeredByInput | AgentRunUpsertWithWhereUniqueWithoutTriggeredByInput[]
    createMany?: AgentRunCreateManyTriggeredByInputEnvelope
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutTriggeredByInput | AgentRunUpdateWithWhereUniqueWithoutTriggeredByInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutTriggeredByInput | AgentRunUpdateManyWithWhereWithoutTriggeredByInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type IssueCreateNestedManyWithoutProjectInput = {
    create?: XOR<IssueCreateWithoutProjectInput, IssueUncheckedCreateWithoutProjectInput> | IssueCreateWithoutProjectInput[] | IssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutProjectInput | IssueCreateOrConnectWithoutProjectInput[]
    createMany?: IssueCreateManyProjectInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type AgentRunCreateNestedManyWithoutProjectInput = {
    create?: XOR<AgentRunCreateWithoutProjectInput, AgentRunUncheckedCreateWithoutProjectInput> | AgentRunCreateWithoutProjectInput[] | AgentRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutProjectInput | AgentRunCreateOrConnectWithoutProjectInput[]
    createMany?: AgentRunCreateManyProjectInputEnvelope
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<IssueCreateWithoutProjectInput, IssueUncheckedCreateWithoutProjectInput> | IssueCreateWithoutProjectInput[] | IssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutProjectInput | IssueCreateOrConnectWithoutProjectInput[]
    createMany?: IssueCreateManyProjectInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type AgentRunUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<AgentRunCreateWithoutProjectInput, AgentRunUncheckedCreateWithoutProjectInput> | AgentRunCreateWithoutProjectInput[] | AgentRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutProjectInput | AgentRunCreateOrConnectWithoutProjectInput[]
    createMany?: AgentRunCreateManyProjectInputEnvelope
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type IssueUpdateManyWithoutProjectNestedInput = {
    create?: XOR<IssueCreateWithoutProjectInput, IssueUncheckedCreateWithoutProjectInput> | IssueCreateWithoutProjectInput[] | IssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutProjectInput | IssueCreateOrConnectWithoutProjectInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutProjectInput | IssueUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: IssueCreateManyProjectInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutProjectInput | IssueUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutProjectInput | IssueUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type AgentRunUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AgentRunCreateWithoutProjectInput, AgentRunUncheckedCreateWithoutProjectInput> | AgentRunCreateWithoutProjectInput[] | AgentRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutProjectInput | AgentRunCreateOrConnectWithoutProjectInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutProjectInput | AgentRunUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AgentRunCreateManyProjectInputEnvelope
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutProjectInput | AgentRunUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutProjectInput | AgentRunUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<IssueCreateWithoutProjectInput, IssueUncheckedCreateWithoutProjectInput> | IssueCreateWithoutProjectInput[] | IssueUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutProjectInput | IssueCreateOrConnectWithoutProjectInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutProjectInput | IssueUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: IssueCreateManyProjectInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutProjectInput | IssueUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutProjectInput | IssueUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type AgentRunUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<AgentRunCreateWithoutProjectInput, AgentRunUncheckedCreateWithoutProjectInput> | AgentRunCreateWithoutProjectInput[] | AgentRunUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutProjectInput | AgentRunCreateOrConnectWithoutProjectInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutProjectInput | AgentRunUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: AgentRunCreateManyProjectInputEnvelope
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutProjectInput | AgentRunUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutProjectInput | AgentRunUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type ReposCreateNestedOneWithoutIssuesInput = {
    create?: XOR<ReposCreateWithoutIssuesInput, ReposUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: ReposCreateOrConnectWithoutIssuesInput
    connect?: ReposWhereUniqueInput
  }

  export type AgentRunCreateNestedManyWithoutIssueInput = {
    create?: XOR<AgentRunCreateWithoutIssueInput, AgentRunUncheckedCreateWithoutIssueInput> | AgentRunCreateWithoutIssueInput[] | AgentRunUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutIssueInput | AgentRunCreateOrConnectWithoutIssueInput[]
    createMany?: AgentRunCreateManyIssueInputEnvelope
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type AgentRunUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<AgentRunCreateWithoutIssueInput, AgentRunUncheckedCreateWithoutIssueInput> | AgentRunCreateWithoutIssueInput[] | AgentRunUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutIssueInput | AgentRunCreateOrConnectWithoutIssueInput[]
    createMany?: AgentRunCreateManyIssueInputEnvelope
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReposUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<ReposCreateWithoutIssuesInput, ReposUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: ReposCreateOrConnectWithoutIssuesInput
    upsert?: ReposUpsertWithoutIssuesInput
    connect?: ReposWhereUniqueInput
    update?: XOR<XOR<ReposUpdateToOneWithWhereWithoutIssuesInput, ReposUpdateWithoutIssuesInput>, ReposUncheckedUpdateWithoutIssuesInput>
  }

  export type AgentRunUpdateManyWithoutIssueNestedInput = {
    create?: XOR<AgentRunCreateWithoutIssueInput, AgentRunUncheckedCreateWithoutIssueInput> | AgentRunCreateWithoutIssueInput[] | AgentRunUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutIssueInput | AgentRunCreateOrConnectWithoutIssueInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutIssueInput | AgentRunUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: AgentRunCreateManyIssueInputEnvelope
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutIssueInput | AgentRunUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutIssueInput | AgentRunUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type AgentRunUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<AgentRunCreateWithoutIssueInput, AgentRunUncheckedCreateWithoutIssueInput> | AgentRunCreateWithoutIssueInput[] | AgentRunUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: AgentRunCreateOrConnectWithoutIssueInput | AgentRunCreateOrConnectWithoutIssueInput[]
    upsert?: AgentRunUpsertWithWhereUniqueWithoutIssueInput | AgentRunUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: AgentRunCreateManyIssueInputEnvelope
    set?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    disconnect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    delete?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    connect?: AgentRunWhereUniqueInput | AgentRunWhereUniqueInput[]
    update?: AgentRunUpdateWithWhereUniqueWithoutIssueInput | AgentRunUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: AgentRunUpdateManyWithWhereWithoutIssueInput | AgentRunUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
  }

  export type IssueCreateNestedOneWithoutAgentRunsInput = {
    create?: XOR<IssueCreateWithoutAgentRunsInput, IssueUncheckedCreateWithoutAgentRunsInput>
    connectOrCreate?: IssueCreateOrConnectWithoutAgentRunsInput
    connect?: IssueWhereUniqueInput
  }

  export type ReposCreateNestedOneWithoutAgentRunsInput = {
    create?: XOR<ReposCreateWithoutAgentRunsInput, ReposUncheckedCreateWithoutAgentRunsInput>
    connectOrCreate?: ReposCreateOrConnectWithoutAgentRunsInput
    connect?: ReposWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAgentRunsInput = {
    create?: XOR<UserCreateWithoutAgentRunsInput, UserUncheckedCreateWithoutAgentRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentRunsInput
    connect?: UserWhereUniqueInput
  }

  export type AIRunCreateNestedOneWithoutAgentRunInput = {
    create?: XOR<AIRunCreateWithoutAgentRunInput, AIRunUncheckedCreateWithoutAgentRunInput>
    connectOrCreate?: AIRunCreateOrConnectWithoutAgentRunInput
    connect?: AIRunWhereUniqueInput
  }

  export type AIRunUncheckedCreateNestedOneWithoutAgentRunInput = {
    create?: XOR<AIRunCreateWithoutAgentRunInput, AIRunUncheckedCreateWithoutAgentRunInput>
    connectOrCreate?: AIRunCreateOrConnectWithoutAgentRunInput
    connect?: AIRunWhereUniqueInput
  }

  export type IssueUpdateOneWithoutAgentRunsNestedInput = {
    create?: XOR<IssueCreateWithoutAgentRunsInput, IssueUncheckedCreateWithoutAgentRunsInput>
    connectOrCreate?: IssueCreateOrConnectWithoutAgentRunsInput
    upsert?: IssueUpsertWithoutAgentRunsInput
    disconnect?: IssueWhereInput | boolean
    delete?: IssueWhereInput | boolean
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutAgentRunsInput, IssueUpdateWithoutAgentRunsInput>, IssueUncheckedUpdateWithoutAgentRunsInput>
  }

  export type ReposUpdateOneRequiredWithoutAgentRunsNestedInput = {
    create?: XOR<ReposCreateWithoutAgentRunsInput, ReposUncheckedCreateWithoutAgentRunsInput>
    connectOrCreate?: ReposCreateOrConnectWithoutAgentRunsInput
    upsert?: ReposUpsertWithoutAgentRunsInput
    connect?: ReposWhereUniqueInput
    update?: XOR<XOR<ReposUpdateToOneWithWhereWithoutAgentRunsInput, ReposUpdateWithoutAgentRunsInput>, ReposUncheckedUpdateWithoutAgentRunsInput>
  }

  export type UserUpdateOneWithoutAgentRunsNestedInput = {
    create?: XOR<UserCreateWithoutAgentRunsInput, UserUncheckedCreateWithoutAgentRunsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAgentRunsInput
    upsert?: UserUpsertWithoutAgentRunsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAgentRunsInput, UserUpdateWithoutAgentRunsInput>, UserUncheckedUpdateWithoutAgentRunsInput>
  }

  export type AIRunUpdateOneWithoutAgentRunNestedInput = {
    create?: XOR<AIRunCreateWithoutAgentRunInput, AIRunUncheckedCreateWithoutAgentRunInput>
    connectOrCreate?: AIRunCreateOrConnectWithoutAgentRunInput
    upsert?: AIRunUpsertWithoutAgentRunInput
    disconnect?: AIRunWhereInput | boolean
    delete?: AIRunWhereInput | boolean
    connect?: AIRunWhereUniqueInput
    update?: XOR<XOR<AIRunUpdateToOneWithWhereWithoutAgentRunInput, AIRunUpdateWithoutAgentRunInput>, AIRunUncheckedUpdateWithoutAgentRunInput>
  }

  export type AIRunUncheckedUpdateOneWithoutAgentRunNestedInput = {
    create?: XOR<AIRunCreateWithoutAgentRunInput, AIRunUncheckedCreateWithoutAgentRunInput>
    connectOrCreate?: AIRunCreateOrConnectWithoutAgentRunInput
    upsert?: AIRunUpsertWithoutAgentRunInput
    disconnect?: AIRunWhereInput | boolean
    delete?: AIRunWhereInput | boolean
    connect?: AIRunWhereUniqueInput
    update?: XOR<XOR<AIRunUpdateToOneWithWhereWithoutAgentRunInput, AIRunUpdateWithoutAgentRunInput>, AIRunUncheckedUpdateWithoutAgentRunInput>
  }

  export type AgentRunCreateNestedOneWithoutAiRunInput = {
    create?: XOR<AgentRunCreateWithoutAiRunInput, AgentRunUncheckedCreateWithoutAiRunInput>
    connectOrCreate?: AgentRunCreateOrConnectWithoutAiRunInput
    connect?: AgentRunWhereUniqueInput
  }

  export type AgentRunUpdateOneRequiredWithoutAiRunNestedInput = {
    create?: XOR<AgentRunCreateWithoutAiRunInput, AgentRunUncheckedCreateWithoutAiRunInput>
    connectOrCreate?: AgentRunCreateOrConnectWithoutAiRunInput
    upsert?: AgentRunUpsertWithoutAiRunInput
    connect?: AgentRunWhereUniqueInput
    update?: XOR<XOR<AgentRunUpdateToOneWithWhereWithoutAiRunInput, AgentRunUpdateWithoutAiRunInput>, AgentRunUncheckedUpdateWithoutAiRunInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ReposCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    issues?: IssueCreateNestedManyWithoutProjectInput
    agentRuns?: AgentRunCreateNestedManyWithoutProjectInput
  }

  export type ReposUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    issues?: IssueUncheckedCreateNestedManyWithoutProjectInput
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ReposCreateOrConnectWithoutUserInput = {
    where: ReposWhereUniqueInput
    create: XOR<ReposCreateWithoutUserInput, ReposUncheckedCreateWithoutUserInput>
  }

  export type ReposCreateManyUserInputEnvelope = {
    data: ReposCreateManyUserInput | ReposCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AgentRunCreateWithoutTriggeredByInput = {
    id?: string
    status: string
    runType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssueCreateNestedOneWithoutAgentRunsInput
    project: ReposCreateNestedOneWithoutAgentRunsInput
    aiRun?: AIRunCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunUncheckedCreateWithoutTriggeredByInput = {
    id?: string
    status: string
    runType: string
    issueId?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    aiRun?: AIRunUncheckedCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunCreateOrConnectWithoutTriggeredByInput = {
    where: AgentRunWhereUniqueInput
    create: XOR<AgentRunCreateWithoutTriggeredByInput, AgentRunUncheckedCreateWithoutTriggeredByInput>
  }

  export type AgentRunCreateManyTriggeredByInputEnvelope = {
    data: AgentRunCreateManyTriggeredByInput | AgentRunCreateManyTriggeredByInput[]
    skipDuplicates?: boolean
  }

  export type ReposUpsertWithWhereUniqueWithoutUserInput = {
    where: ReposWhereUniqueInput
    update: XOR<ReposUpdateWithoutUserInput, ReposUncheckedUpdateWithoutUserInput>
    create: XOR<ReposCreateWithoutUserInput, ReposUncheckedCreateWithoutUserInput>
  }

  export type ReposUpdateWithWhereUniqueWithoutUserInput = {
    where: ReposWhereUniqueInput
    data: XOR<ReposUpdateWithoutUserInput, ReposUncheckedUpdateWithoutUserInput>
  }

  export type ReposUpdateManyWithWhereWithoutUserInput = {
    where: ReposScalarWhereInput
    data: XOR<ReposUpdateManyMutationInput, ReposUncheckedUpdateManyWithoutUserInput>
  }

  export type ReposScalarWhereInput = {
    AND?: ReposScalarWhereInput | ReposScalarWhereInput[]
    OR?: ReposScalarWhereInput[]
    NOT?: ReposScalarWhereInput | ReposScalarWhereInput[]
    id?: StringFilter<"Repos"> | string
    name?: StringFilter<"Repos"> | string
    description?: StringNullableFilter<"Repos"> | string | null
    repoUrl?: StringFilter<"Repos"> | string
    repoOwner?: StringFilter<"Repos"> | string
    repoName?: StringFilter<"Repos"> | string
    createdAt?: DateTimeFilter<"Repos"> | Date | string
    userId?: StringFilter<"Repos"> | string
  }

  export type AgentRunUpsertWithWhereUniqueWithoutTriggeredByInput = {
    where: AgentRunWhereUniqueInput
    update: XOR<AgentRunUpdateWithoutTriggeredByInput, AgentRunUncheckedUpdateWithoutTriggeredByInput>
    create: XOR<AgentRunCreateWithoutTriggeredByInput, AgentRunUncheckedCreateWithoutTriggeredByInput>
  }

  export type AgentRunUpdateWithWhereUniqueWithoutTriggeredByInput = {
    where: AgentRunWhereUniqueInput
    data: XOR<AgentRunUpdateWithoutTriggeredByInput, AgentRunUncheckedUpdateWithoutTriggeredByInput>
  }

  export type AgentRunUpdateManyWithWhereWithoutTriggeredByInput = {
    where: AgentRunScalarWhereInput
    data: XOR<AgentRunUpdateManyMutationInput, AgentRunUncheckedUpdateManyWithoutTriggeredByInput>
  }

  export type AgentRunScalarWhereInput = {
    AND?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
    OR?: AgentRunScalarWhereInput[]
    NOT?: AgentRunScalarWhereInput | AgentRunScalarWhereInput[]
    id?: StringFilter<"AgentRun"> | string
    status?: StringFilter<"AgentRun"> | string
    runType?: StringFilter<"AgentRun"> | string
    issueId?: StringNullableFilter<"AgentRun"> | string | null
    projectId?: StringFilter<"AgentRun"> | string
    triggeredById?: StringNullableFilter<"AgentRun"> | string | null
    createdAt?: DateTimeFilter<"AgentRun"> | Date | string
    updatedAt?: DateTimeFilter<"AgentRun"> | Date | string
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    githubId: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    agentRuns?: AgentRunCreateNestedManyWithoutTriggeredByInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    githubId: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutTriggeredByInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type IssueCreateWithoutProjectInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    agentRuns?: AgentRunCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutProjectInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutProjectInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutProjectInput, IssueUncheckedCreateWithoutProjectInput>
  }

  export type IssueCreateManyProjectInputEnvelope = {
    data: IssueCreateManyProjectInput | IssueCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type AgentRunCreateWithoutProjectInput = {
    id?: string
    status: string
    runType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssueCreateNestedOneWithoutAgentRunsInput
    triggeredBy?: UserCreateNestedOneWithoutAgentRunsInput
    aiRun?: AIRunCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunUncheckedCreateWithoutProjectInput = {
    id?: string
    status: string
    runType: string
    issueId?: string | null
    triggeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiRun?: AIRunUncheckedCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunCreateOrConnectWithoutProjectInput = {
    where: AgentRunWhereUniqueInput
    create: XOR<AgentRunCreateWithoutProjectInput, AgentRunUncheckedCreateWithoutProjectInput>
  }

  export type AgentRunCreateManyProjectInputEnvelope = {
    data: AgentRunCreateManyProjectInput | AgentRunCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRuns?: AgentRunUpdateManyWithoutTriggeredByNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRuns?: AgentRunUncheckedUpdateManyWithoutTriggeredByNestedInput
  }

  export type IssueUpsertWithWhereUniqueWithoutProjectInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutProjectInput, IssueUncheckedUpdateWithoutProjectInput>
    create: XOR<IssueCreateWithoutProjectInput, IssueUncheckedCreateWithoutProjectInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutProjectInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutProjectInput, IssueUncheckedUpdateWithoutProjectInput>
  }

  export type IssueUpdateManyWithWhereWithoutProjectInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutProjectInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: StringFilter<"Issue"> | string
    githubIssueId?: IntNullableFilter<"Issue"> | number | null
    title?: StringFilter<"Issue"> | string
    body?: StringNullableFilter<"Issue"> | string | null
    state?: StringFilter<"Issue"> | string
    labels?: JsonNullableFilter<"Issue">
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    projectId?: StringFilter<"Issue"> | string
  }

  export type AgentRunUpsertWithWhereUniqueWithoutProjectInput = {
    where: AgentRunWhereUniqueInput
    update: XOR<AgentRunUpdateWithoutProjectInput, AgentRunUncheckedUpdateWithoutProjectInput>
    create: XOR<AgentRunCreateWithoutProjectInput, AgentRunUncheckedCreateWithoutProjectInput>
  }

  export type AgentRunUpdateWithWhereUniqueWithoutProjectInput = {
    where: AgentRunWhereUniqueInput
    data: XOR<AgentRunUpdateWithoutProjectInput, AgentRunUncheckedUpdateWithoutProjectInput>
  }

  export type AgentRunUpdateManyWithWhereWithoutProjectInput = {
    where: AgentRunScalarWhereInput
    data: XOR<AgentRunUpdateManyMutationInput, AgentRunUncheckedUpdateManyWithoutProjectInput>
  }

  export type ReposCreateWithoutIssuesInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    agentRuns?: AgentRunCreateNestedManyWithoutProjectInput
  }

  export type ReposUncheckedCreateWithoutIssuesInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    userId: string
    agentRuns?: AgentRunUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ReposCreateOrConnectWithoutIssuesInput = {
    where: ReposWhereUniqueInput
    create: XOR<ReposCreateWithoutIssuesInput, ReposUncheckedCreateWithoutIssuesInput>
  }

  export type AgentRunCreateWithoutIssueInput = {
    id?: string
    status: string
    runType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ReposCreateNestedOneWithoutAgentRunsInput
    triggeredBy?: UserCreateNestedOneWithoutAgentRunsInput
    aiRun?: AIRunCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunUncheckedCreateWithoutIssueInput = {
    id?: string
    status: string
    runType: string
    projectId: string
    triggeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    aiRun?: AIRunUncheckedCreateNestedOneWithoutAgentRunInput
  }

  export type AgentRunCreateOrConnectWithoutIssueInput = {
    where: AgentRunWhereUniqueInput
    create: XOR<AgentRunCreateWithoutIssueInput, AgentRunUncheckedCreateWithoutIssueInput>
  }

  export type AgentRunCreateManyIssueInputEnvelope = {
    data: AgentRunCreateManyIssueInput | AgentRunCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type ReposUpsertWithoutIssuesInput = {
    update: XOR<ReposUpdateWithoutIssuesInput, ReposUncheckedUpdateWithoutIssuesInput>
    create: XOR<ReposCreateWithoutIssuesInput, ReposUncheckedCreateWithoutIssuesInput>
    where?: ReposWhereInput
  }

  export type ReposUpdateToOneWithWhereWithoutIssuesInput = {
    where?: ReposWhereInput
    data: XOR<ReposUpdateWithoutIssuesInput, ReposUncheckedUpdateWithoutIssuesInput>
  }

  export type ReposUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    agentRuns?: AgentRunUpdateManyWithoutProjectNestedInput
  }

  export type ReposUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    agentRuns?: AgentRunUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AgentRunUpsertWithWhereUniqueWithoutIssueInput = {
    where: AgentRunWhereUniqueInput
    update: XOR<AgentRunUpdateWithoutIssueInput, AgentRunUncheckedUpdateWithoutIssueInput>
    create: XOR<AgentRunCreateWithoutIssueInput, AgentRunUncheckedCreateWithoutIssueInput>
  }

  export type AgentRunUpdateWithWhereUniqueWithoutIssueInput = {
    where: AgentRunWhereUniqueInput
    data: XOR<AgentRunUpdateWithoutIssueInput, AgentRunUncheckedUpdateWithoutIssueInput>
  }

  export type AgentRunUpdateManyWithWhereWithoutIssueInput = {
    where: AgentRunScalarWhereInput
    data: XOR<AgentRunUpdateManyMutationInput, AgentRunUncheckedUpdateManyWithoutIssueInput>
  }

  export type IssueCreateWithoutAgentRunsInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ReposCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateWithoutAgentRunsInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type IssueCreateOrConnectWithoutAgentRunsInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutAgentRunsInput, IssueUncheckedCreateWithoutAgentRunsInput>
  }

  export type ReposCreateWithoutAgentRunsInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProjectsInput
    issues?: IssueCreateNestedManyWithoutProjectInput
  }

  export type ReposUncheckedCreateWithoutAgentRunsInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
    userId: string
    issues?: IssueUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ReposCreateOrConnectWithoutAgentRunsInput = {
    where: ReposWhereUniqueInput
    create: XOR<ReposCreateWithoutAgentRunsInput, ReposUncheckedCreateWithoutAgentRunsInput>
  }

  export type UserCreateWithoutAgentRunsInput = {
    id?: string
    githubId: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    projects?: ReposCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAgentRunsInput = {
    id?: string
    githubId: string
    name?: string | null
    email?: string | null
    image?: string | null
    createdAt?: Date | string
    projects?: ReposUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAgentRunsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAgentRunsInput, UserUncheckedCreateWithoutAgentRunsInput>
  }

  export type AIRunCreateWithoutAgentRunInput = {
    id?: string
    prompt: string
    response: string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIRunUncheckedCreateWithoutAgentRunInput = {
    id?: string
    prompt: string
    response: string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AIRunCreateOrConnectWithoutAgentRunInput = {
    where: AIRunWhereUniqueInput
    create: XOR<AIRunCreateWithoutAgentRunInput, AIRunUncheckedCreateWithoutAgentRunInput>
  }

  export type IssueUpsertWithoutAgentRunsInput = {
    update: XOR<IssueUpdateWithoutAgentRunsInput, IssueUncheckedUpdateWithoutAgentRunsInput>
    create: XOR<IssueCreateWithoutAgentRunsInput, IssueUncheckedCreateWithoutAgentRunsInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutAgentRunsInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutAgentRunsInput, IssueUncheckedUpdateWithoutAgentRunsInput>
  }

  export type IssueUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ReposUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type ReposUpsertWithoutAgentRunsInput = {
    update: XOR<ReposUpdateWithoutAgentRunsInput, ReposUncheckedUpdateWithoutAgentRunsInput>
    create: XOR<ReposCreateWithoutAgentRunsInput, ReposUncheckedCreateWithoutAgentRunsInput>
    where?: ReposWhereInput
  }

  export type ReposUpdateToOneWithWhereWithoutAgentRunsInput = {
    where?: ReposWhereInput
    data: XOR<ReposUpdateWithoutAgentRunsInput, ReposUncheckedUpdateWithoutAgentRunsInput>
  }

  export type ReposUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProjectsNestedInput
    issues?: IssueUpdateManyWithoutProjectNestedInput
  }

  export type ReposUncheckedUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    issues?: IssueUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutAgentRunsInput = {
    update: XOR<UserUpdateWithoutAgentRunsInput, UserUncheckedUpdateWithoutAgentRunsInput>
    create: XOR<UserCreateWithoutAgentRunsInput, UserUncheckedCreateWithoutAgentRunsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAgentRunsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAgentRunsInput, UserUncheckedUpdateWithoutAgentRunsInput>
  }

  export type UserUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ReposUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAgentRunsInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projects?: ReposUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AIRunUpsertWithoutAgentRunInput = {
    update: XOR<AIRunUpdateWithoutAgentRunInput, AIRunUncheckedUpdateWithoutAgentRunInput>
    create: XOR<AIRunCreateWithoutAgentRunInput, AIRunUncheckedCreateWithoutAgentRunInput>
    where?: AIRunWhereInput
  }

  export type AIRunUpdateToOneWithWhereWithoutAgentRunInput = {
    where?: AIRunWhereInput
    data: XOR<AIRunUpdateWithoutAgentRunInput, AIRunUncheckedUpdateWithoutAgentRunInput>
  }

  export type AIRunUpdateWithoutAgentRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AIRunUncheckedUpdateWithoutAgentRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    prompt?: StringFieldUpdateOperationsInput | string
    response?: StringFieldUpdateOperationsInput | string
    steps?: NullableJsonNullValueInput | InputJsonValue
    files?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunCreateWithoutAiRunInput = {
    id?: string
    status: string
    runType: string
    createdAt?: Date | string
    updatedAt?: Date | string
    issue?: IssueCreateNestedOneWithoutAgentRunsInput
    project: ReposCreateNestedOneWithoutAgentRunsInput
    triggeredBy?: UserCreateNestedOneWithoutAgentRunsInput
  }

  export type AgentRunUncheckedCreateWithoutAiRunInput = {
    id?: string
    status: string
    runType: string
    issueId?: string | null
    projectId: string
    triggeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentRunCreateOrConnectWithoutAiRunInput = {
    where: AgentRunWhereUniqueInput
    create: XOR<AgentRunCreateWithoutAiRunInput, AgentRunUncheckedCreateWithoutAiRunInput>
  }

  export type AgentRunUpsertWithoutAiRunInput = {
    update: XOR<AgentRunUpdateWithoutAiRunInput, AgentRunUncheckedUpdateWithoutAiRunInput>
    create: XOR<AgentRunCreateWithoutAiRunInput, AgentRunUncheckedCreateWithoutAiRunInput>
    where?: AgentRunWhereInput
  }

  export type AgentRunUpdateToOneWithWhereWithoutAiRunInput = {
    where?: AgentRunWhereInput
    data: XOR<AgentRunUpdateWithoutAiRunInput, AgentRunUncheckedUpdateWithoutAiRunInput>
  }

  export type AgentRunUpdateWithoutAiRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneWithoutAgentRunsNestedInput
    project?: ReposUpdateOneRequiredWithoutAgentRunsNestedInput
    triggeredBy?: UserUpdateOneWithoutAgentRunsNestedInput
  }

  export type AgentRunUncheckedUpdateWithoutAiRunInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReposCreateManyUserInput = {
    id?: string
    name: string
    description?: string | null
    repoUrl: string
    repoOwner: string
    repoName: string
    createdAt?: Date | string
  }

  export type AgentRunCreateManyTriggeredByInput = {
    id?: string
    status: string
    runType: string
    issueId?: string | null
    projectId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReposUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUpdateManyWithoutProjectNestedInput
    agentRuns?: AgentRunUpdateManyWithoutProjectNestedInput
  }

  export type ReposUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issues?: IssueUncheckedUpdateManyWithoutProjectNestedInput
    agentRuns?: AgentRunUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ReposUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    repoUrl?: StringFieldUpdateOperationsInput | string
    repoOwner?: StringFieldUpdateOperationsInput | string
    repoName?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunUpdateWithoutTriggeredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneWithoutAgentRunsNestedInput
    project?: ReposUpdateOneRequiredWithoutAgentRunsNestedInput
    aiRun?: AIRunUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunUncheckedUpdateWithoutTriggeredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiRun?: AIRunUncheckedUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunUncheckedUpdateManyWithoutTriggeredByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    projectId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueCreateManyProjectInput = {
    id?: string
    githubIssueId?: number | null
    title: string
    body?: string | null
    state: string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentRunCreateManyProjectInput = {
    id?: string
    status: string
    runType: string
    issueId?: string | null
    triggeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IssueUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRuns?: AgentRunUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    agentRuns?: AgentRunUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    githubIssueId?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    state?: StringFieldUpdateOperationsInput | string
    labels?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issue?: IssueUpdateOneWithoutAgentRunsNestedInput
    triggeredBy?: UserUpdateOneWithoutAgentRunsNestedInput
    aiRun?: AIRunUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiRun?: AIRunUncheckedUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    issueId?: NullableStringFieldUpdateOperationsInput | string | null
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AgentRunCreateManyIssueInput = {
    id?: string
    status: string
    runType: string
    projectId: string
    triggeredById?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AgentRunUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ReposUpdateOneRequiredWithoutAgentRunsNestedInput
    triggeredBy?: UserUpdateOneWithoutAgentRunsNestedInput
    aiRun?: AIRunUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunUncheckedUpdateWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    aiRun?: AIRunUncheckedUpdateOneWithoutAgentRunNestedInput
  }

  export type AgentRunUncheckedUpdateManyWithoutIssueInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    runType?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    triggeredById?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}