
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model TokenBlacklist
 * 
 */
export type TokenBlacklist = $Result.DefaultSelection<Prisma.$TokenBlacklistPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Rent
 * 
 */
export type Rent = $Result.DefaultSelection<Prisma.$RentPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model OrderOnProduct
 * 
 */
export type OrderOnProduct = $Result.DefaultSelection<Prisma.$OrderOnProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Cart
 * 
 */
export type Cart = $Result.DefaultSelection<Prisma.$CartPayload>
/**
 * Model CartOnItem
 * 
 */
export type CartOnItem = $Result.DefaultSelection<Prisma.$CartOnItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const OrderStatus: {
  APPROVED: 'APPROVED',
  ONRENT: 'ONRENT',
  OVERDUE: 'OVERDUE',
  WAITING: 'WAITING',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  RETURNED: 'RETURNED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const PaymentStatus: {
  UNPAID: 'UNPAID',
  PAID: 'PAID'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more TokenBlacklists
 * const tokenBlacklists = await prisma.tokenBlacklist.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more TokenBlacklists
   * const tokenBlacklists = await prisma.tokenBlacklist.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.tokenBlacklist`: Exposes CRUD operations for the **TokenBlacklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TokenBlacklists
    * const tokenBlacklists = await prisma.tokenBlacklist.findMany()
    * ```
    */
  get tokenBlacklist(): Prisma.TokenBlacklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.rent`: Exposes CRUD operations for the **Rent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rents
    * const rents = await prisma.rent.findMany()
    * ```
    */
  get rent(): Prisma.RentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderOnProduct`: Exposes CRUD operations for the **OrderOnProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderOnProducts
    * const orderOnProducts = await prisma.orderOnProduct.findMany()
    * ```
    */
  get orderOnProduct(): Prisma.OrderOnProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **Cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.CartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cartOnItem`: Exposes CRUD operations for the **CartOnItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartOnItems
    * const cartOnItems = await prisma.cartOnItem.findMany()
    * ```
    */
  get cartOnItem(): Prisma.CartOnItemDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    TokenBlacklist: 'TokenBlacklist',
    Team: 'Team',
    User: 'User',
    Rent: 'Rent',
    Order: 'Order',
    Product: 'Product',
    OrderOnProduct: 'OrderOnProduct',
    Category: 'Category',
    Cart: 'Cart',
    CartOnItem: 'CartOnItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "tokenBlacklist" | "team" | "user" | "rent" | "order" | "product" | "orderOnProduct" | "category" | "cart" | "cartOnItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      TokenBlacklist: {
        payload: Prisma.$TokenBlacklistPayload<ExtArgs>
        fields: Prisma.TokenBlacklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TokenBlacklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TokenBlacklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload>
          }
          findFirst: {
            args: Prisma.TokenBlacklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TokenBlacklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload>
          }
          findMany: {
            args: Prisma.TokenBlacklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload>[]
          }
          create: {
            args: Prisma.TokenBlacklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload>
          }
          createMany: {
            args: Prisma.TokenBlacklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TokenBlacklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload>
          }
          update: {
            args: Prisma.TokenBlacklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload>
          }
          deleteMany: {
            args: Prisma.TokenBlacklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TokenBlacklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TokenBlacklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TokenBlacklistPayload>
          }
          aggregate: {
            args: Prisma.TokenBlacklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTokenBlacklist>
          }
          groupBy: {
            args: Prisma.TokenBlacklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<TokenBlacklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.TokenBlacklistCountArgs<ExtArgs>
            result: $Utils.Optional<TokenBlacklistCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
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
      Rent: {
        payload: Prisma.$RentPayload<ExtArgs>
        fields: Prisma.RentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          findFirst: {
            args: Prisma.RentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          findMany: {
            args: Prisma.RentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>[]
          }
          create: {
            args: Prisma.RentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          createMany: {
            args: Prisma.RentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.RentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          update: {
            args: Prisma.RentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          deleteMany: {
            args: Prisma.RentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentPayload>
          }
          aggregate: {
            args: Prisma.RentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRent>
          }
          groupBy: {
            args: Prisma.RentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentCountArgs<ExtArgs>
            result: $Utils.Optional<RentCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      OrderOnProduct: {
        payload: Prisma.$OrderOnProductPayload<ExtArgs>
        fields: Prisma.OrderOnProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderOnProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderOnProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload>
          }
          findFirst: {
            args: Prisma.OrderOnProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderOnProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload>
          }
          findMany: {
            args: Prisma.OrderOnProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload>[]
          }
          create: {
            args: Prisma.OrderOnProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload>
          }
          createMany: {
            args: Prisma.OrderOnProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrderOnProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload>
          }
          update: {
            args: Prisma.OrderOnProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload>
          }
          deleteMany: {
            args: Prisma.OrderOnProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderOnProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrderOnProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderOnProductPayload>
          }
          aggregate: {
            args: Prisma.OrderOnProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderOnProduct>
          }
          groupBy: {
            args: Prisma.OrderOnProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderOnProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderOnProductCountArgs<ExtArgs>
            result: $Utils.Optional<OrderOnProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Cart: {
        payload: Prisma.$CartPayload<ExtArgs>
        fields: Prisma.CartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findFirst: {
            args: Prisma.CartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          findMany: {
            args: Prisma.CartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>[]
          }
          create: {
            args: Prisma.CartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          createMany: {
            args: Prisma.CartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          update: {
            args: Prisma.CartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          deleteMany: {
            args: Prisma.CartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.CartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      CartOnItem: {
        payload: Prisma.$CartOnItemPayload<ExtArgs>
        fields: Prisma.CartOnItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CartOnItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CartOnItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload>
          }
          findFirst: {
            args: Prisma.CartOnItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CartOnItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload>
          }
          findMany: {
            args: Prisma.CartOnItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload>[]
          }
          create: {
            args: Prisma.CartOnItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload>
          }
          createMany: {
            args: Prisma.CartOnItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CartOnItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload>
          }
          update: {
            args: Prisma.CartOnItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload>
          }
          deleteMany: {
            args: Prisma.CartOnItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CartOnItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CartOnItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CartOnItemPayload>
          }
          aggregate: {
            args: Prisma.CartOnItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartOnItem>
          }
          groupBy: {
            args: Prisma.CartOnItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartOnItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CartOnItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartOnItemCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    tokenBlacklist?: TokenBlacklistOmit
    team?: TeamOmit
    user?: UserOmit
    rent?: RentOmit
    order?: OrderOmit
    product?: ProductOmit
    orderOnProduct?: OrderOnProductOmit
    category?: CategoryOmit
    cart?: CartOmit
    cartOnItem?: CartOnItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    user: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | TeamCountOutputTypeCountUserArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountUserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    rent: number
    product: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | UserCountOutputTypeCountRentArgs
    product?: boolean | UserCountOutputTypeCountProductArgs
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
  export type UserCountOutputTypeCountRentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    products: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | OrderCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderOnProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    order: number
    cart: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | ProductCountOutputTypeCountOrderArgs
    cart?: boolean | ProductCountOutputTypeCountCartArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderOnProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartOnItemWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    product: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | CategoryCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    cart_items: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartOnItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model TokenBlacklist
   */

  export type AggregateTokenBlacklist = {
    _count: TokenBlacklistCountAggregateOutputType | null
    _min: TokenBlacklistMinAggregateOutputType | null
    _max: TokenBlacklistMaxAggregateOutputType | null
  }

  export type TokenBlacklistMinAggregateOutputType = {
    id: string | null
    token: string | null
    tokenHash: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type TokenBlacklistMaxAggregateOutputType = {
    id: string | null
    token: string | null
    tokenHash: string | null
    createdAt: Date | null
    expiresAt: Date | null
  }

  export type TokenBlacklistCountAggregateOutputType = {
    id: number
    token: number
    tokenHash: number
    createdAt: number
    expiresAt: number
    _all: number
  }


  export type TokenBlacklistMinAggregateInputType = {
    id?: true
    token?: true
    tokenHash?: true
    createdAt?: true
    expiresAt?: true
  }

  export type TokenBlacklistMaxAggregateInputType = {
    id?: true
    token?: true
    tokenHash?: true
    createdAt?: true
    expiresAt?: true
  }

  export type TokenBlacklistCountAggregateInputType = {
    id?: true
    token?: true
    tokenHash?: true
    createdAt?: true
    expiresAt?: true
    _all?: true
  }

  export type TokenBlacklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenBlacklist to aggregate.
     */
    where?: TokenBlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBlacklists to fetch.
     */
    orderBy?: TokenBlacklistOrderByWithRelationInput | TokenBlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TokenBlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBlacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBlacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TokenBlacklists
    **/
    _count?: true | TokenBlacklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TokenBlacklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TokenBlacklistMaxAggregateInputType
  }

  export type GetTokenBlacklistAggregateType<T extends TokenBlacklistAggregateArgs> = {
        [P in keyof T & keyof AggregateTokenBlacklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTokenBlacklist[P]>
      : GetScalarType<T[P], AggregateTokenBlacklist[P]>
  }




  export type TokenBlacklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TokenBlacklistWhereInput
    orderBy?: TokenBlacklistOrderByWithAggregationInput | TokenBlacklistOrderByWithAggregationInput[]
    by: TokenBlacklistScalarFieldEnum[] | TokenBlacklistScalarFieldEnum
    having?: TokenBlacklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TokenBlacklistCountAggregateInputType | true
    _min?: TokenBlacklistMinAggregateInputType
    _max?: TokenBlacklistMaxAggregateInputType
  }

  export type TokenBlacklistGroupByOutputType = {
    id: string
    token: string
    tokenHash: string
    createdAt: Date
    expiresAt: Date
    _count: TokenBlacklistCountAggregateOutputType | null
    _min: TokenBlacklistMinAggregateOutputType | null
    _max: TokenBlacklistMaxAggregateOutputType | null
  }

  type GetTokenBlacklistGroupByPayload<T extends TokenBlacklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TokenBlacklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TokenBlacklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TokenBlacklistGroupByOutputType[P]>
            : GetScalarType<T[P], TokenBlacklistGroupByOutputType[P]>
        }
      >
    >


  export type TokenBlacklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    tokenHash?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }, ExtArgs["result"]["tokenBlacklist"]>



  export type TokenBlacklistSelectScalar = {
    id?: boolean
    token?: boolean
    tokenHash?: boolean
    createdAt?: boolean
    expiresAt?: boolean
  }

  export type TokenBlacklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "tokenHash" | "createdAt" | "expiresAt", ExtArgs["result"]["tokenBlacklist"]>

  export type $TokenBlacklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TokenBlacklist"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      tokenHash: string
      createdAt: Date
      expiresAt: Date
    }, ExtArgs["result"]["tokenBlacklist"]>
    composites: {}
  }

  type TokenBlacklistGetPayload<S extends boolean | null | undefined | TokenBlacklistDefaultArgs> = $Result.GetResult<Prisma.$TokenBlacklistPayload, S>

  type TokenBlacklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TokenBlacklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TokenBlacklistCountAggregateInputType | true
    }

  export interface TokenBlacklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TokenBlacklist'], meta: { name: 'TokenBlacklist' } }
    /**
     * Find zero or one TokenBlacklist that matches the filter.
     * @param {TokenBlacklistFindUniqueArgs} args - Arguments to find a TokenBlacklist
     * @example
     * // Get one TokenBlacklist
     * const tokenBlacklist = await prisma.tokenBlacklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TokenBlacklistFindUniqueArgs>(args: SelectSubset<T, TokenBlacklistFindUniqueArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TokenBlacklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TokenBlacklistFindUniqueOrThrowArgs} args - Arguments to find a TokenBlacklist
     * @example
     * // Get one TokenBlacklist
     * const tokenBlacklist = await prisma.tokenBlacklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TokenBlacklistFindUniqueOrThrowArgs>(args: SelectSubset<T, TokenBlacklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenBlacklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBlacklistFindFirstArgs} args - Arguments to find a TokenBlacklist
     * @example
     * // Get one TokenBlacklist
     * const tokenBlacklist = await prisma.tokenBlacklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TokenBlacklistFindFirstArgs>(args?: SelectSubset<T, TokenBlacklistFindFirstArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TokenBlacklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBlacklistFindFirstOrThrowArgs} args - Arguments to find a TokenBlacklist
     * @example
     * // Get one TokenBlacklist
     * const tokenBlacklist = await prisma.tokenBlacklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TokenBlacklistFindFirstOrThrowArgs>(args?: SelectSubset<T, TokenBlacklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TokenBlacklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBlacklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TokenBlacklists
     * const tokenBlacklists = await prisma.tokenBlacklist.findMany()
     * 
     * // Get first 10 TokenBlacklists
     * const tokenBlacklists = await prisma.tokenBlacklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tokenBlacklistWithIdOnly = await prisma.tokenBlacklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TokenBlacklistFindManyArgs>(args?: SelectSubset<T, TokenBlacklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TokenBlacklist.
     * @param {TokenBlacklistCreateArgs} args - Arguments to create a TokenBlacklist.
     * @example
     * // Create one TokenBlacklist
     * const TokenBlacklist = await prisma.tokenBlacklist.create({
     *   data: {
     *     // ... data to create a TokenBlacklist
     *   }
     * })
     * 
     */
    create<T extends TokenBlacklistCreateArgs>(args: SelectSubset<T, TokenBlacklistCreateArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TokenBlacklists.
     * @param {TokenBlacklistCreateManyArgs} args - Arguments to create many TokenBlacklists.
     * @example
     * // Create many TokenBlacklists
     * const tokenBlacklist = await prisma.tokenBlacklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TokenBlacklistCreateManyArgs>(args?: SelectSubset<T, TokenBlacklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TokenBlacklist.
     * @param {TokenBlacklistDeleteArgs} args - Arguments to delete one TokenBlacklist.
     * @example
     * // Delete one TokenBlacklist
     * const TokenBlacklist = await prisma.tokenBlacklist.delete({
     *   where: {
     *     // ... filter to delete one TokenBlacklist
     *   }
     * })
     * 
     */
    delete<T extends TokenBlacklistDeleteArgs>(args: SelectSubset<T, TokenBlacklistDeleteArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TokenBlacklist.
     * @param {TokenBlacklistUpdateArgs} args - Arguments to update one TokenBlacklist.
     * @example
     * // Update one TokenBlacklist
     * const tokenBlacklist = await prisma.tokenBlacklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TokenBlacklistUpdateArgs>(args: SelectSubset<T, TokenBlacklistUpdateArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TokenBlacklists.
     * @param {TokenBlacklistDeleteManyArgs} args - Arguments to filter TokenBlacklists to delete.
     * @example
     * // Delete a few TokenBlacklists
     * const { count } = await prisma.tokenBlacklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TokenBlacklistDeleteManyArgs>(args?: SelectSubset<T, TokenBlacklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TokenBlacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBlacklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TokenBlacklists
     * const tokenBlacklist = await prisma.tokenBlacklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TokenBlacklistUpdateManyArgs>(args: SelectSubset<T, TokenBlacklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TokenBlacklist.
     * @param {TokenBlacklistUpsertArgs} args - Arguments to update or create a TokenBlacklist.
     * @example
     * // Update or create a TokenBlacklist
     * const tokenBlacklist = await prisma.tokenBlacklist.upsert({
     *   create: {
     *     // ... data to create a TokenBlacklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TokenBlacklist we want to update
     *   }
     * })
     */
    upsert<T extends TokenBlacklistUpsertArgs>(args: SelectSubset<T, TokenBlacklistUpsertArgs<ExtArgs>>): Prisma__TokenBlacklistClient<$Result.GetResult<Prisma.$TokenBlacklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TokenBlacklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBlacklistCountArgs} args - Arguments to filter TokenBlacklists to count.
     * @example
     * // Count the number of TokenBlacklists
     * const count = await prisma.tokenBlacklist.count({
     *   where: {
     *     // ... the filter for the TokenBlacklists we want to count
     *   }
     * })
    **/
    count<T extends TokenBlacklistCountArgs>(
      args?: Subset<T, TokenBlacklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TokenBlacklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TokenBlacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBlacklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TokenBlacklistAggregateArgs>(args: Subset<T, TokenBlacklistAggregateArgs>): Prisma.PrismaPromise<GetTokenBlacklistAggregateType<T>>

    /**
     * Group by TokenBlacklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TokenBlacklistGroupByArgs} args - Group by arguments.
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
      T extends TokenBlacklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TokenBlacklistGroupByArgs['orderBy'] }
        : { orderBy?: TokenBlacklistGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TokenBlacklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTokenBlacklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TokenBlacklist model
   */
  readonly fields: TokenBlacklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TokenBlacklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TokenBlacklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the TokenBlacklist model
   */
  interface TokenBlacklistFieldRefs {
    readonly id: FieldRef<"TokenBlacklist", 'String'>
    readonly token: FieldRef<"TokenBlacklist", 'String'>
    readonly tokenHash: FieldRef<"TokenBlacklist", 'String'>
    readonly createdAt: FieldRef<"TokenBlacklist", 'DateTime'>
    readonly expiresAt: FieldRef<"TokenBlacklist", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TokenBlacklist findUnique
   */
  export type TokenBlacklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * Filter, which TokenBlacklist to fetch.
     */
    where: TokenBlacklistWhereUniqueInput
  }

  /**
   * TokenBlacklist findUniqueOrThrow
   */
  export type TokenBlacklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * Filter, which TokenBlacklist to fetch.
     */
    where: TokenBlacklistWhereUniqueInput
  }

  /**
   * TokenBlacklist findFirst
   */
  export type TokenBlacklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * Filter, which TokenBlacklist to fetch.
     */
    where?: TokenBlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBlacklists to fetch.
     */
    orderBy?: TokenBlacklistOrderByWithRelationInput | TokenBlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenBlacklists.
     */
    cursor?: TokenBlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBlacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBlacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenBlacklists.
     */
    distinct?: TokenBlacklistScalarFieldEnum | TokenBlacklistScalarFieldEnum[]
  }

  /**
   * TokenBlacklist findFirstOrThrow
   */
  export type TokenBlacklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * Filter, which TokenBlacklist to fetch.
     */
    where?: TokenBlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBlacklists to fetch.
     */
    orderBy?: TokenBlacklistOrderByWithRelationInput | TokenBlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TokenBlacklists.
     */
    cursor?: TokenBlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBlacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBlacklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TokenBlacklists.
     */
    distinct?: TokenBlacklistScalarFieldEnum | TokenBlacklistScalarFieldEnum[]
  }

  /**
   * TokenBlacklist findMany
   */
  export type TokenBlacklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * Filter, which TokenBlacklists to fetch.
     */
    where?: TokenBlacklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TokenBlacklists to fetch.
     */
    orderBy?: TokenBlacklistOrderByWithRelationInput | TokenBlacklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TokenBlacklists.
     */
    cursor?: TokenBlacklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TokenBlacklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TokenBlacklists.
     */
    skip?: number
    distinct?: TokenBlacklistScalarFieldEnum | TokenBlacklistScalarFieldEnum[]
  }

  /**
   * TokenBlacklist create
   */
  export type TokenBlacklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * The data needed to create a TokenBlacklist.
     */
    data: XOR<TokenBlacklistCreateInput, TokenBlacklistUncheckedCreateInput>
  }

  /**
   * TokenBlacklist createMany
   */
  export type TokenBlacklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TokenBlacklists.
     */
    data: TokenBlacklistCreateManyInput | TokenBlacklistCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TokenBlacklist update
   */
  export type TokenBlacklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * The data needed to update a TokenBlacklist.
     */
    data: XOR<TokenBlacklistUpdateInput, TokenBlacklistUncheckedUpdateInput>
    /**
     * Choose, which TokenBlacklist to update.
     */
    where: TokenBlacklistWhereUniqueInput
  }

  /**
   * TokenBlacklist updateMany
   */
  export type TokenBlacklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TokenBlacklists.
     */
    data: XOR<TokenBlacklistUpdateManyMutationInput, TokenBlacklistUncheckedUpdateManyInput>
    /**
     * Filter which TokenBlacklists to update
     */
    where?: TokenBlacklistWhereInput
    /**
     * Limit how many TokenBlacklists to update.
     */
    limit?: number
  }

  /**
   * TokenBlacklist upsert
   */
  export type TokenBlacklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * The filter to search for the TokenBlacklist to update in case it exists.
     */
    where: TokenBlacklistWhereUniqueInput
    /**
     * In case the TokenBlacklist found by the `where` argument doesn't exist, create a new TokenBlacklist with this data.
     */
    create: XOR<TokenBlacklistCreateInput, TokenBlacklistUncheckedCreateInput>
    /**
     * In case the TokenBlacklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TokenBlacklistUpdateInput, TokenBlacklistUncheckedUpdateInput>
  }

  /**
   * TokenBlacklist delete
   */
  export type TokenBlacklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
    /**
     * Filter which TokenBlacklist to delete.
     */
    where: TokenBlacklistWhereUniqueInput
  }

  /**
   * TokenBlacklist deleteMany
   */
  export type TokenBlacklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TokenBlacklists to delete
     */
    where?: TokenBlacklistWhereInput
    /**
     * Limit how many TokenBlacklists to delete.
     */
    limit?: number
  }

  /**
   * TokenBlacklist without action
   */
  export type TokenBlacklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TokenBlacklist
     */
    select?: TokenBlacklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TokenBlacklist
     */
    omit?: TokenBlacklistOmit<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    slug: string
    created_at: Date
    updated_at: Date
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | Team$userArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>



  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "created_at" | "updated_at", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Team$userArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Team$userArgs<ExtArgs> = {}>(args?: Subset<T, Team$userArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly slug: FieldRef<"Team", 'String'>
    readonly created_at: FieldRef<"Team", 'DateTime'>
    readonly updated_at: FieldRef<"Team", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.user
   */
  export type Team$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


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
    team_id: string | null
    name: string | null
    email: string | null
    password: string | null
    profile_picture: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    team_id: string | null
    name: string | null
    email: string | null
    password: string | null
    profile_picture: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    team_id: number
    name: number
    email: number
    password: number
    profile_picture: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    team_id?: true
    name?: true
    email?: true
    password?: true
    profile_picture?: true
    created_at?: true
    updated_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    team_id?: true
    name?: true
    email?: true
    password?: true
    profile_picture?: true
    created_at?: true
    updated_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    team_id?: true
    name?: true
    email?: true
    password?: true
    profile_picture?: true
    created_at?: true
    updated_at?: true
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
    team_id: string
    name: string
    email: string
    password: string
    profile_picture: string | null
    created_at: Date
    updated_at: Date
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
    team_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
    team?: boolean | TeamDefaultArgs<ExtArgs>
    rent?: boolean | User$rentArgs<ExtArgs>
    product?: boolean | User$productArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    team_id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    profile_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "team_id" | "name" | "email" | "password" | "profile_picture" | "created_at" | "updated_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    team?: boolean | TeamDefaultArgs<ExtArgs>
    rent?: boolean | User$rentArgs<ExtArgs>
    product?: boolean | User$productArgs<ExtArgs>
    cart?: boolean | User$cartArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      team: Prisma.$TeamPayload<ExtArgs>
      rent: Prisma.$RentPayload<ExtArgs>[]
      product: Prisma.$ProductPayload<ExtArgs>[]
      cart: Prisma.$CartPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      team_id: string
      name: string
      email: string
      password: string
      profile_picture: string | null
      created_at: Date
      updated_at: Date
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
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rent<T extends User$rentArgs<ExtArgs> = {}>(args?: Subset<T, User$rentArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product<T extends User$productArgs<ExtArgs> = {}>(args?: Subset<T, User$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends User$cartArgs<ExtArgs> = {}>(args?: Subset<T, User$cartArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly team_id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly profile_picture: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
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
   * User.rent
   */
  export type User$rentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    where?: RentWhereInput
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    cursor?: RentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * User.product
   */
  export type User$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User.cart
   */
  export type User$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    where?: CartWhereInput
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
   * Model Rent
   */

  export type AggregateRent = {
    _count: RentCountAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  export type RentMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    identification: string | null
    phone: string | null
    notes: string | null
    identification_picture: string | null
    documentation_before: string | null
    documentation_after: string | null
  }

  export type RentMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    identification: string | null
    phone: string | null
    notes: string | null
    identification_picture: string | null
    documentation_before: string | null
    documentation_after: string | null
  }

  export type RentCountAggregateOutputType = {
    id: number
    user_id: number
    identification: number
    phone: number
    notes: number
    identification_picture: number
    documentation_before: number
    documentation_after: number
    _all: number
  }


  export type RentMinAggregateInputType = {
    id?: true
    user_id?: true
    identification?: true
    phone?: true
    notes?: true
    identification_picture?: true
    documentation_before?: true
    documentation_after?: true
  }

  export type RentMaxAggregateInputType = {
    id?: true
    user_id?: true
    identification?: true
    phone?: true
    notes?: true
    identification_picture?: true
    documentation_before?: true
    documentation_after?: true
  }

  export type RentCountAggregateInputType = {
    id?: true
    user_id?: true
    identification?: true
    phone?: true
    notes?: true
    identification_picture?: true
    documentation_before?: true
    documentation_after?: true
    _all?: true
  }

  export type RentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rent to aggregate.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rents
    **/
    _count?: true | RentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentMaxAggregateInputType
  }

  export type GetRentAggregateType<T extends RentAggregateArgs> = {
        [P in keyof T & keyof AggregateRent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRent[P]>
      : GetScalarType<T[P], AggregateRent[P]>
  }




  export type RentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentWhereInput
    orderBy?: RentOrderByWithAggregationInput | RentOrderByWithAggregationInput[]
    by: RentScalarFieldEnum[] | RentScalarFieldEnum
    having?: RentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentCountAggregateInputType | true
    _min?: RentMinAggregateInputType
    _max?: RentMaxAggregateInputType
  }

  export type RentGroupByOutputType = {
    id: string
    user_id: string
    identification: string
    phone: string
    notes: string | null
    identification_picture: string
    documentation_before: string | null
    documentation_after: string | null
    _count: RentCountAggregateOutputType | null
    _min: RentMinAggregateOutputType | null
    _max: RentMaxAggregateOutputType | null
  }

  type GetRentGroupByPayload<T extends RentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentGroupByOutputType[P]>
            : GetScalarType<T[P], RentGroupByOutputType[P]>
        }
      >
    >


  export type RentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    identification?: boolean
    phone?: boolean
    notes?: boolean
    identification_picture?: boolean
    documentation_before?: boolean
    documentation_after?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Rent$orderArgs<ExtArgs>
  }, ExtArgs["result"]["rent"]>



  export type RentSelectScalar = {
    id?: boolean
    user_id?: boolean
    identification?: boolean
    phone?: boolean
    notes?: boolean
    identification_picture?: boolean
    documentation_before?: boolean
    documentation_after?: boolean
  }

  export type RentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "identification" | "phone" | "notes" | "identification_picture" | "documentation_before" | "documentation_after", ExtArgs["result"]["rent"]>
  export type RentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    order?: boolean | Rent$orderArgs<ExtArgs>
  }

  export type $RentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      order: Prisma.$OrderPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      identification: string
      phone: string
      notes: string | null
      identification_picture: string
      documentation_before: string | null
      documentation_after: string | null
    }, ExtArgs["result"]["rent"]>
    composites: {}
  }

  type RentGetPayload<S extends boolean | null | undefined | RentDefaultArgs> = $Result.GetResult<Prisma.$RentPayload, S>

  type RentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentCountAggregateInputType | true
    }

  export interface RentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rent'], meta: { name: 'Rent' } }
    /**
     * Find zero or one Rent that matches the filter.
     * @param {RentFindUniqueArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentFindUniqueArgs>(args: SelectSubset<T, RentFindUniqueArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentFindUniqueOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentFindUniqueOrThrowArgs>(args: SelectSubset<T, RentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindFirstArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentFindFirstArgs>(args?: SelectSubset<T, RentFindFirstArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindFirstOrThrowArgs} args - Arguments to find a Rent
     * @example
     * // Get one Rent
     * const rent = await prisma.rent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentFindFirstOrThrowArgs>(args?: SelectSubset<T, RentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rents
     * const rents = await prisma.rent.findMany()
     * 
     * // Get first 10 Rents
     * const rents = await prisma.rent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentWithIdOnly = await prisma.rent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentFindManyArgs>(args?: SelectSubset<T, RentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rent.
     * @param {RentCreateArgs} args - Arguments to create a Rent.
     * @example
     * // Create one Rent
     * const Rent = await prisma.rent.create({
     *   data: {
     *     // ... data to create a Rent
     *   }
     * })
     * 
     */
    create<T extends RentCreateArgs>(args: SelectSubset<T, RentCreateArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rents.
     * @param {RentCreateManyArgs} args - Arguments to create many Rents.
     * @example
     * // Create many Rents
     * const rent = await prisma.rent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentCreateManyArgs>(args?: SelectSubset<T, RentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rent.
     * @param {RentDeleteArgs} args - Arguments to delete one Rent.
     * @example
     * // Delete one Rent
     * const Rent = await prisma.rent.delete({
     *   where: {
     *     // ... filter to delete one Rent
     *   }
     * })
     * 
     */
    delete<T extends RentDeleteArgs>(args: SelectSubset<T, RentDeleteArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rent.
     * @param {RentUpdateArgs} args - Arguments to update one Rent.
     * @example
     * // Update one Rent
     * const rent = await prisma.rent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentUpdateArgs>(args: SelectSubset<T, RentUpdateArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rents.
     * @param {RentDeleteManyArgs} args - Arguments to filter Rents to delete.
     * @example
     * // Delete a few Rents
     * const { count } = await prisma.rent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentDeleteManyArgs>(args?: SelectSubset<T, RentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rents
     * const rent = await prisma.rent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentUpdateManyArgs>(args: SelectSubset<T, RentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rent.
     * @param {RentUpsertArgs} args - Arguments to update or create a Rent.
     * @example
     * // Update or create a Rent
     * const rent = await prisma.rent.upsert({
     *   create: {
     *     // ... data to create a Rent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rent we want to update
     *   }
     * })
     */
    upsert<T extends RentUpsertArgs>(args: SelectSubset<T, RentUpsertArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentCountArgs} args - Arguments to filter Rents to count.
     * @example
     * // Count the number of Rents
     * const count = await prisma.rent.count({
     *   where: {
     *     // ... the filter for the Rents we want to count
     *   }
     * })
    **/
    count<T extends RentCountArgs>(
      args?: Subset<T, RentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentAggregateArgs>(args: Subset<T, RentAggregateArgs>): Prisma.PrismaPromise<GetRentAggregateType<T>>

    /**
     * Group by Rent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentGroupByArgs} args - Group by arguments.
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
      T extends RentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentGroupByArgs['orderBy'] }
        : { orderBy?: RentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rent model
   */
  readonly fields: RentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends Rent$orderArgs<ExtArgs> = {}>(args?: Subset<T, Rent$orderArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Rent model
   */
  interface RentFieldRefs {
    readonly id: FieldRef<"Rent", 'String'>
    readonly user_id: FieldRef<"Rent", 'String'>
    readonly identification: FieldRef<"Rent", 'String'>
    readonly phone: FieldRef<"Rent", 'String'>
    readonly notes: FieldRef<"Rent", 'String'>
    readonly identification_picture: FieldRef<"Rent", 'String'>
    readonly documentation_before: FieldRef<"Rent", 'String'>
    readonly documentation_after: FieldRef<"Rent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Rent findUnique
   */
  export type RentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent findUniqueOrThrow
   */
  export type RentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent findFirst
   */
  export type RentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Rent findFirstOrThrow
   */
  export type RentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rent to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rents.
     */
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Rent findMany
   */
  export type RentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter, which Rents to fetch.
     */
    where?: RentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rents to fetch.
     */
    orderBy?: RentOrderByWithRelationInput | RentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rents.
     */
    cursor?: RentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rents.
     */
    skip?: number
    distinct?: RentScalarFieldEnum | RentScalarFieldEnum[]
  }

  /**
   * Rent create
   */
  export type RentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The data needed to create a Rent.
     */
    data: XOR<RentCreateInput, RentUncheckedCreateInput>
  }

  /**
   * Rent createMany
   */
  export type RentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rents.
     */
    data: RentCreateManyInput | RentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rent update
   */
  export type RentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The data needed to update a Rent.
     */
    data: XOR<RentUpdateInput, RentUncheckedUpdateInput>
    /**
     * Choose, which Rent to update.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent updateMany
   */
  export type RentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rents.
     */
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyInput>
    /**
     * Filter which Rents to update
     */
    where?: RentWhereInput
    /**
     * Limit how many Rents to update.
     */
    limit?: number
  }

  /**
   * Rent upsert
   */
  export type RentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * The filter to search for the Rent to update in case it exists.
     */
    where: RentWhereUniqueInput
    /**
     * In case the Rent found by the `where` argument doesn't exist, create a new Rent with this data.
     */
    create: XOR<RentCreateInput, RentUncheckedCreateInput>
    /**
     * In case the Rent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentUpdateInput, RentUncheckedUpdateInput>
  }

  /**
   * Rent delete
   */
  export type RentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
    /**
     * Filter which Rent to delete.
     */
    where: RentWhereUniqueInput
  }

  /**
   * Rent deleteMany
   */
  export type RentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rents to delete
     */
    where?: RentWhereInput
    /**
     * Limit how many Rents to delete.
     */
    limit?: number
  }

  /**
   * Rent.order
   */
  export type Rent$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
  }

  /**
   * Rent without action
   */
  export type RentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rent
     */
    select?: RentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rent
     */
    omit?: RentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    total_cost: number | null
  }

  export type OrderSumAggregateOutputType = {
    total_cost: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    rent_id: string | null
    invoice: string | null
    order_date: Date | null
    start_date: Date | null
    end_date: Date | null
    total_cost: number | null
    order_status: $Enums.OrderStatus | null
    payment_status: $Enums.PaymentStatus | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    rent_id: string | null
    invoice: string | null
    order_date: Date | null
    start_date: Date | null
    end_date: Date | null
    total_cost: number | null
    order_status: $Enums.OrderStatus | null
    payment_status: $Enums.PaymentStatus | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    rent_id: number
    invoice: number
    order_date: number
    start_date: number
    end_date: number
    total_cost: number
    order_status: number
    payment_status: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    total_cost?: true
  }

  export type OrderSumAggregateInputType = {
    total_cost?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    rent_id?: true
    invoice?: true
    order_date?: true
    start_date?: true
    end_date?: true
    total_cost?: true
    order_status?: true
    payment_status?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    rent_id?: true
    invoice?: true
    order_date?: true
    start_date?: true
    end_date?: true
    total_cost?: true
    order_status?: true
    payment_status?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    rent_id?: true
    invoice?: true
    order_date?: true
    start_date?: true
    end_date?: true
    total_cost?: true
    order_status?: true
    payment_status?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    rent_id: string
    invoice: string
    order_date: Date
    start_date: Date
    end_date: Date
    total_cost: number
    order_status: $Enums.OrderStatus
    payment_status: $Enums.PaymentStatus
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rent_id?: boolean
    invoice?: boolean
    order_date?: boolean
    start_date?: boolean
    end_date?: boolean
    total_cost?: boolean
    order_status?: boolean
    payment_status?: boolean
    rent?: boolean | RentDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>



  export type OrderSelectScalar = {
    id?: boolean
    rent_id?: boolean
    invoice?: boolean
    order_date?: boolean
    start_date?: boolean
    end_date?: boolean
    total_cost?: boolean
    order_status?: boolean
    payment_status?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rent_id" | "invoice" | "order_date" | "start_date" | "end_date" | "total_cost" | "order_status" | "payment_status", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rent?: boolean | RentDefaultArgs<ExtArgs>
    products?: boolean | Order$productsArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      rent: Prisma.$RentPayload<ExtArgs>
      products: Prisma.$OrderOnProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rent_id: string
      invoice: string
      order_date: Date
      start_date: Date
      end_date: Date
      total_cost: number
      order_status: $Enums.OrderStatus
      payment_status: $Enums.PaymentStatus
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rent<T extends RentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentDefaultArgs<ExtArgs>>): Prisma__RentClient<$Result.GetResult<Prisma.$RentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Order$productsArgs<ExtArgs> = {}>(args?: Subset<T, Order$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly rent_id: FieldRef<"Order", 'String'>
    readonly invoice: FieldRef<"Order", 'String'>
    readonly order_date: FieldRef<"Order", 'DateTime'>
    readonly start_date: FieldRef<"Order", 'DateTime'>
    readonly end_date: FieldRef<"Order", 'DateTime'>
    readonly total_cost: FieldRef<"Order", 'Float'>
    readonly order_status: FieldRef<"Order", 'OrderStatus'>
    readonly payment_status: FieldRef<"Order", 'PaymentStatus'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.products
   */
  export type Order$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    where?: OrderOnProductWhereInput
    orderBy?: OrderOnProductOrderByWithRelationInput | OrderOnProductOrderByWithRelationInput[]
    cursor?: OrderOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderOnProductScalarFieldEnum | OrderOnProductScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    price: number | null
    quantity: number | null
    quantity_alert: number | null
  }

  export type ProductSumAggregateOutputType = {
    price: number | null
    quantity: number | null
    quantity_alert: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    category_id: string | null
    name: string | null
    slug: string | null
    price: number | null
    quantity: number | null
    quantity_alert: number | null
    brand: string | null
    description: string | null
    specifications: string | null
    source: string | null
    date_arrival: Date | null
    is_rentable: boolean | null
    product_picture: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    category_id: string | null
    name: string | null
    slug: string | null
    price: number | null
    quantity: number | null
    quantity_alert: number | null
    brand: string | null
    description: string | null
    specifications: string | null
    source: string | null
    date_arrival: Date | null
    is_rentable: boolean | null
    product_picture: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    user_id: number
    category_id: number
    name: number
    slug: number
    price: number
    quantity: number
    quantity_alert: number
    brand: number
    description: number
    specifications: number
    source: number
    date_arrival: number
    is_rentable: number
    product_picture: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    price?: true
    quantity?: true
    quantity_alert?: true
  }

  export type ProductSumAggregateInputType = {
    price?: true
    quantity?: true
    quantity_alert?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    user_id?: true
    category_id?: true
    name?: true
    slug?: true
    price?: true
    quantity?: true
    quantity_alert?: true
    brand?: true
    description?: true
    specifications?: true
    source?: true
    date_arrival?: true
    is_rentable?: true
    product_picture?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    user_id?: true
    category_id?: true
    name?: true
    slug?: true
    price?: true
    quantity?: true
    quantity_alert?: true
    brand?: true
    description?: true
    specifications?: true
    source?: true
    date_arrival?: true
    is_rentable?: true
    product_picture?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    user_id?: true
    category_id?: true
    name?: true
    slug?: true
    price?: true
    quantity?: true
    quantity_alert?: true
    brand?: true
    description?: true
    specifications?: true
    source?: true
    date_arrival?: true
    is_rentable?: true
    product_picture?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    user_id: string
    category_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date
    is_rentable: boolean
    product_picture: string | null
    created_at: Date
    updated_at: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    category_id?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    quantity?: boolean
    quantity_alert?: boolean
    brand?: boolean
    description?: boolean
    specifications?: boolean
    source?: boolean
    date_arrival?: boolean
    is_rentable?: boolean
    product_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    order?: boolean | Product$orderArgs<ExtArgs>
    cart?: boolean | Product$cartArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>



  export type ProductSelectScalar = {
    id?: boolean
    user_id?: boolean
    category_id?: boolean
    name?: boolean
    slug?: boolean
    price?: boolean
    quantity?: boolean
    quantity_alert?: boolean
    brand?: boolean
    description?: boolean
    specifications?: boolean
    source?: boolean
    date_arrival?: boolean
    is_rentable?: boolean
    product_picture?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "category_id" | "name" | "slug" | "price" | "quantity" | "quantity_alert" | "brand" | "description" | "specifications" | "source" | "date_arrival" | "is_rentable" | "product_picture" | "created_at" | "updated_at", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    order?: boolean | Product$orderArgs<ExtArgs>
    cart?: boolean | Product$cartArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      order: Prisma.$OrderOnProductPayload<ExtArgs>[]
      cart: Prisma.$CartOnItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      category_id: string
      name: string
      slug: string
      price: number
      quantity: number
      quantity_alert: number
      brand: string
      description: string
      specifications: string
      source: string
      date_arrival: Date
      is_rentable: boolean
      product_picture: string | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    order<T extends Product$orderArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cart<T extends Product$cartArgs<ExtArgs> = {}>(args?: Subset<T, Product$cartArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly user_id: FieldRef<"Product", 'String'>
    readonly category_id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly slug: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly quantity_alert: FieldRef<"Product", 'Int'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly specifications: FieldRef<"Product", 'String'>
    readonly source: FieldRef<"Product", 'String'>
    readonly date_arrival: FieldRef<"Product", 'DateTime'>
    readonly is_rentable: FieldRef<"Product", 'Boolean'>
    readonly product_picture: FieldRef<"Product", 'String'>
    readonly created_at: FieldRef<"Product", 'DateTime'>
    readonly updated_at: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.order
   */
  export type Product$orderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    where?: OrderOnProductWhereInput
    orderBy?: OrderOnProductOrderByWithRelationInput | OrderOnProductOrderByWithRelationInput[]
    cursor?: OrderOnProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderOnProductScalarFieldEnum | OrderOnProductScalarFieldEnum[]
  }

  /**
   * Product.cart
   */
  export type Product$cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    where?: CartOnItemWhereInput
    orderBy?: CartOnItemOrderByWithRelationInput | CartOnItemOrderByWithRelationInput[]
    cursor?: CartOnItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartOnItemScalarFieldEnum | CartOnItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model OrderOnProduct
   */

  export type AggregateOrderOnProduct = {
    _count: OrderOnProductCountAggregateOutputType | null
    _avg: OrderOnProductAvgAggregateOutputType | null
    _sum: OrderOnProductSumAggregateOutputType | null
    _min: OrderOnProductMinAggregateOutputType | null
    _max: OrderOnProductMaxAggregateOutputType | null
  }

  export type OrderOnProductAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderOnProductSumAggregateOutputType = {
    quantity: number | null
    price: number | null
  }

  export type OrderOnProductMinAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_id: string | null
    quantity: number | null
    price: number | null
  }

  export type OrderOnProductMaxAggregateOutputType = {
    id: string | null
    order_id: string | null
    product_id: string | null
    quantity: number | null
    price: number | null
  }

  export type OrderOnProductCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    quantity: number
    price: number
    _all: number
  }


  export type OrderOnProductAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderOnProductSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type OrderOnProductMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type OrderOnProductMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
  }

  export type OrderOnProductCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type OrderOnProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderOnProduct to aggregate.
     */
    where?: OrderOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOnProducts to fetch.
     */
    orderBy?: OrderOnProductOrderByWithRelationInput | OrderOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderOnProducts
    **/
    _count?: true | OrderOnProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderOnProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderOnProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderOnProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderOnProductMaxAggregateInputType
  }

  export type GetOrderOnProductAggregateType<T extends OrderOnProductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderOnProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderOnProduct[P]>
      : GetScalarType<T[P], AggregateOrderOnProduct[P]>
  }




  export type OrderOnProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderOnProductWhereInput
    orderBy?: OrderOnProductOrderByWithAggregationInput | OrderOnProductOrderByWithAggregationInput[]
    by: OrderOnProductScalarFieldEnum[] | OrderOnProductScalarFieldEnum
    having?: OrderOnProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderOnProductCountAggregateInputType | true
    _avg?: OrderOnProductAvgAggregateInputType
    _sum?: OrderOnProductSumAggregateInputType
    _min?: OrderOnProductMinAggregateInputType
    _max?: OrderOnProductMaxAggregateInputType
  }

  export type OrderOnProductGroupByOutputType = {
    id: string
    order_id: string
    product_id: string
    quantity: number
    price: number
    _count: OrderOnProductCountAggregateOutputType | null
    _avg: OrderOnProductAvgAggregateOutputType | null
    _sum: OrderOnProductSumAggregateOutputType | null
    _min: OrderOnProductMinAggregateOutputType | null
    _max: OrderOnProductMaxAggregateOutputType | null
  }

  type GetOrderOnProductGroupByPayload<T extends OrderOnProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderOnProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderOnProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderOnProductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderOnProductGroupByOutputType[P]>
        }
      >
    >


  export type OrderOnProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderOnProduct"]>



  export type OrderOnProductSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type OrderOnProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "quantity" | "price", ExtArgs["result"]["orderOnProduct"]>
  export type OrderOnProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderOnProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderOnProduct"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      order_id: string
      product_id: string
      quantity: number
      price: number
    }, ExtArgs["result"]["orderOnProduct"]>
    composites: {}
  }

  type OrderOnProductGetPayload<S extends boolean | null | undefined | OrderOnProductDefaultArgs> = $Result.GetResult<Prisma.$OrderOnProductPayload, S>

  type OrderOnProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderOnProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderOnProductCountAggregateInputType | true
    }

  export interface OrderOnProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderOnProduct'], meta: { name: 'OrderOnProduct' } }
    /**
     * Find zero or one OrderOnProduct that matches the filter.
     * @param {OrderOnProductFindUniqueArgs} args - Arguments to find a OrderOnProduct
     * @example
     * // Get one OrderOnProduct
     * const orderOnProduct = await prisma.orderOnProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderOnProductFindUniqueArgs>(args: SelectSubset<T, OrderOnProductFindUniqueArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderOnProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderOnProductFindUniqueOrThrowArgs} args - Arguments to find a OrderOnProduct
     * @example
     * // Get one OrderOnProduct
     * const orderOnProduct = await prisma.orderOnProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderOnProductFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderOnProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderOnProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOnProductFindFirstArgs} args - Arguments to find a OrderOnProduct
     * @example
     * // Get one OrderOnProduct
     * const orderOnProduct = await prisma.orderOnProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderOnProductFindFirstArgs>(args?: SelectSubset<T, OrderOnProductFindFirstArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderOnProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOnProductFindFirstOrThrowArgs} args - Arguments to find a OrderOnProduct
     * @example
     * // Get one OrderOnProduct
     * const orderOnProduct = await prisma.orderOnProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderOnProductFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderOnProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOnProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderOnProducts
     * const orderOnProducts = await prisma.orderOnProduct.findMany()
     * 
     * // Get first 10 OrderOnProducts
     * const orderOnProducts = await prisma.orderOnProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderOnProductWithIdOnly = await prisma.orderOnProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderOnProductFindManyArgs>(args?: SelectSubset<T, OrderOnProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderOnProduct.
     * @param {OrderOnProductCreateArgs} args - Arguments to create a OrderOnProduct.
     * @example
     * // Create one OrderOnProduct
     * const OrderOnProduct = await prisma.orderOnProduct.create({
     *   data: {
     *     // ... data to create a OrderOnProduct
     *   }
     * })
     * 
     */
    create<T extends OrderOnProductCreateArgs>(args: SelectSubset<T, OrderOnProductCreateArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderOnProducts.
     * @param {OrderOnProductCreateManyArgs} args - Arguments to create many OrderOnProducts.
     * @example
     * // Create many OrderOnProducts
     * const orderOnProduct = await prisma.orderOnProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderOnProductCreateManyArgs>(args?: SelectSubset<T, OrderOnProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OrderOnProduct.
     * @param {OrderOnProductDeleteArgs} args - Arguments to delete one OrderOnProduct.
     * @example
     * // Delete one OrderOnProduct
     * const OrderOnProduct = await prisma.orderOnProduct.delete({
     *   where: {
     *     // ... filter to delete one OrderOnProduct
     *   }
     * })
     * 
     */
    delete<T extends OrderOnProductDeleteArgs>(args: SelectSubset<T, OrderOnProductDeleteArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderOnProduct.
     * @param {OrderOnProductUpdateArgs} args - Arguments to update one OrderOnProduct.
     * @example
     * // Update one OrderOnProduct
     * const orderOnProduct = await prisma.orderOnProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderOnProductUpdateArgs>(args: SelectSubset<T, OrderOnProductUpdateArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderOnProducts.
     * @param {OrderOnProductDeleteManyArgs} args - Arguments to filter OrderOnProducts to delete.
     * @example
     * // Delete a few OrderOnProducts
     * const { count } = await prisma.orderOnProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderOnProductDeleteManyArgs>(args?: SelectSubset<T, OrderOnProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOnProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderOnProducts
     * const orderOnProduct = await prisma.orderOnProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderOnProductUpdateManyArgs>(args: SelectSubset<T, OrderOnProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OrderOnProduct.
     * @param {OrderOnProductUpsertArgs} args - Arguments to update or create a OrderOnProduct.
     * @example
     * // Update or create a OrderOnProduct
     * const orderOnProduct = await prisma.orderOnProduct.upsert({
     *   create: {
     *     // ... data to create a OrderOnProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderOnProduct we want to update
     *   }
     * })
     */
    upsert<T extends OrderOnProductUpsertArgs>(args: SelectSubset<T, OrderOnProductUpsertArgs<ExtArgs>>): Prisma__OrderOnProductClient<$Result.GetResult<Prisma.$OrderOnProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOnProductCountArgs} args - Arguments to filter OrderOnProducts to count.
     * @example
     * // Count the number of OrderOnProducts
     * const count = await prisma.orderOnProduct.count({
     *   where: {
     *     // ... the filter for the OrderOnProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderOnProductCountArgs>(
      args?: Subset<T, OrderOnProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderOnProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOnProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderOnProductAggregateArgs>(args: Subset<T, OrderOnProductAggregateArgs>): Prisma.PrismaPromise<GetOrderOnProductAggregateType<T>>

    /**
     * Group by OrderOnProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderOnProductGroupByArgs} args - Group by arguments.
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
      T extends OrderOnProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderOnProductGroupByArgs['orderBy'] }
        : { orderBy?: OrderOnProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderOnProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderOnProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderOnProduct model
   */
  readonly fields: OrderOnProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderOnProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderOnProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderOnProduct model
   */
  interface OrderOnProductFieldRefs {
    readonly id: FieldRef<"OrderOnProduct", 'String'>
    readonly order_id: FieldRef<"OrderOnProduct", 'String'>
    readonly product_id: FieldRef<"OrderOnProduct", 'String'>
    readonly quantity: FieldRef<"OrderOnProduct", 'Int'>
    readonly price: FieldRef<"OrderOnProduct", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * OrderOnProduct findUnique
   */
  export type OrderOnProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderOnProduct to fetch.
     */
    where: OrderOnProductWhereUniqueInput
  }

  /**
   * OrderOnProduct findUniqueOrThrow
   */
  export type OrderOnProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderOnProduct to fetch.
     */
    where: OrderOnProductWhereUniqueInput
  }

  /**
   * OrderOnProduct findFirst
   */
  export type OrderOnProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderOnProduct to fetch.
     */
    where?: OrderOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOnProducts to fetch.
     */
    orderBy?: OrderOnProductOrderByWithRelationInput | OrderOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderOnProducts.
     */
    cursor?: OrderOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderOnProducts.
     */
    distinct?: OrderOnProductScalarFieldEnum | OrderOnProductScalarFieldEnum[]
  }

  /**
   * OrderOnProduct findFirstOrThrow
   */
  export type OrderOnProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderOnProduct to fetch.
     */
    where?: OrderOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOnProducts to fetch.
     */
    orderBy?: OrderOnProductOrderByWithRelationInput | OrderOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderOnProducts.
     */
    cursor?: OrderOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderOnProducts.
     */
    distinct?: OrderOnProductScalarFieldEnum | OrderOnProductScalarFieldEnum[]
  }

  /**
   * OrderOnProduct findMany
   */
  export type OrderOnProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderOnProducts to fetch.
     */
    where?: OrderOnProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderOnProducts to fetch.
     */
    orderBy?: OrderOnProductOrderByWithRelationInput | OrderOnProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderOnProducts.
     */
    cursor?: OrderOnProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderOnProducts.
     */
    skip?: number
    distinct?: OrderOnProductScalarFieldEnum | OrderOnProductScalarFieldEnum[]
  }

  /**
   * OrderOnProduct create
   */
  export type OrderOnProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderOnProduct.
     */
    data: XOR<OrderOnProductCreateInput, OrderOnProductUncheckedCreateInput>
  }

  /**
   * OrderOnProduct createMany
   */
  export type OrderOnProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderOnProducts.
     */
    data: OrderOnProductCreateManyInput | OrderOnProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderOnProduct update
   */
  export type OrderOnProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderOnProduct.
     */
    data: XOR<OrderOnProductUpdateInput, OrderOnProductUncheckedUpdateInput>
    /**
     * Choose, which OrderOnProduct to update.
     */
    where: OrderOnProductWhereUniqueInput
  }

  /**
   * OrderOnProduct updateMany
   */
  export type OrderOnProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderOnProducts.
     */
    data: XOR<OrderOnProductUpdateManyMutationInput, OrderOnProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderOnProducts to update
     */
    where?: OrderOnProductWhereInput
    /**
     * Limit how many OrderOnProducts to update.
     */
    limit?: number
  }

  /**
   * OrderOnProduct upsert
   */
  export type OrderOnProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderOnProduct to update in case it exists.
     */
    where: OrderOnProductWhereUniqueInput
    /**
     * In case the OrderOnProduct found by the `where` argument doesn't exist, create a new OrderOnProduct with this data.
     */
    create: XOR<OrderOnProductCreateInput, OrderOnProductUncheckedCreateInput>
    /**
     * In case the OrderOnProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderOnProductUpdateInput, OrderOnProductUncheckedUpdateInput>
  }

  /**
   * OrderOnProduct delete
   */
  export type OrderOnProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
    /**
     * Filter which OrderOnProduct to delete.
     */
    where: OrderOnProductWhereUniqueInput
  }

  /**
   * OrderOnProduct deleteMany
   */
  export type OrderOnProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderOnProducts to delete
     */
    where?: OrderOnProductWhereInput
    /**
     * Limit how many OrderOnProducts to delete.
     */
    limit?: number
  }

  /**
   * OrderOnProduct without action
   */
  export type OrderOnProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderOnProduct
     */
    select?: OrderOnProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderOnProduct
     */
    omit?: OrderOnProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderOnProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    created_at: Date
    updated_at: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>



  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "created_at" | "updated_at", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Category$productArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Category$productArgs<ExtArgs> = {}>(args?: Subset<T, Category$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly created_at: FieldRef<"Category", 'DateTime'>
    readonly updated_at: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.product
   */
  export type Category$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartMinAggregateOutputType = {
    id: string | null
    user_id: string | null
  }

  export type CartMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
  }

  export type CartCountAggregateOutputType = {
    id: number
    user_id: number
    _all: number
  }


  export type CartMinAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartMaxAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartCountAggregateInputType = {
    id?: true
    user_id?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cart to aggregate.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type CartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartWhereInput
    orderBy?: CartOrderByWithAggregationInput | CartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: CartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    id: string
    user_id: string
    _count: CartCountAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends CartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type CartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart_items?: boolean | Cart$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>



  export type CartSelectScalar = {
    id?: boolean
    user_id?: boolean
  }

  export type CartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id", ExtArgs["result"]["cart"]>
  export type CartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cart_items?: boolean | Cart$cart_itemsArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $CartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cart"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cart_items: Prisma.$CartOnItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type CartGetPayload<S extends boolean | null | undefined | CartDefaultArgs> = $Result.GetResult<Prisma.$CartPayload, S>

  type CartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface CartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cart'], meta: { name: 'Cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {CartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartFindUniqueArgs>(args: SelectSubset<T, CartFindUniqueArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartFindUniqueOrThrowArgs>(args: SelectSubset<T, CartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartFindFirstArgs>(args?: SelectSubset<T, CartFindFirstArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartFindFirstOrThrowArgs>(args?: SelectSubset<T, CartFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartWithIdOnly = await prisma.cart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartFindManyArgs>(args?: SelectSubset<T, CartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart.
     * @param {CartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends CartCreateArgs>(args: SelectSubset<T, CartCreateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {CartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartCreateManyArgs>(args?: SelectSubset<T, CartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cart.
     * @param {CartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends CartDeleteArgs>(args: SelectSubset<T, CartDeleteArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart.
     * @param {CartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartUpdateArgs>(args: SelectSubset<T, CartUpdateArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {CartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartDeleteManyArgs>(args?: SelectSubset<T, CartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartUpdateManyArgs>(args: SelectSubset<T, CartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {CartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends CartUpsertArgs>(args: SelectSubset<T, CartUpsertArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends CartCountArgs>(
      args?: Subset<T, CartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartGroupByArgs} args - Group by arguments.
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
      T extends CartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartGroupByArgs['orderBy'] }
        : { orderBy?: CartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cart model
   */
  readonly fields: CartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cart_items<T extends Cart$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, Cart$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Cart model
   */
  interface CartFieldRefs {
    readonly id: FieldRef<"Cart", 'String'>
    readonly user_id: FieldRef<"Cart", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Cart findUnique
   */
  export type CartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findUniqueOrThrow
   */
  export type CartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart findFirst
   */
  export type CartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findFirstOrThrow
   */
  export type CartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Cart to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart findMany
   */
  export type CartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter, which Carts to fetch.
     */
    where?: CartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carts to fetch.
     */
    orderBy?: CartOrderByWithRelationInput | CartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carts.
     */
    cursor?: CartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * Cart create
   */
  export type CartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to create a Cart.
     */
    data: XOR<CartCreateInput, CartUncheckedCreateInput>
  }

  /**
   * Cart createMany
   */
  export type CartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carts.
     */
    data: CartCreateManyInput | CartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cart update
   */
  export type CartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The data needed to update a Cart.
     */
    data: XOR<CartUpdateInput, CartUncheckedUpdateInput>
    /**
     * Choose, which Cart to update.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart updateMany
   */
  export type CartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carts.
     */
    data: XOR<CartUpdateManyMutationInput, CartUncheckedUpdateManyInput>
    /**
     * Filter which Carts to update
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to update.
     */
    limit?: number
  }

  /**
   * Cart upsert
   */
  export type CartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * The filter to search for the Cart to update in case it exists.
     */
    where: CartWhereUniqueInput
    /**
     * In case the Cart found by the `where` argument doesn't exist, create a new Cart with this data.
     */
    create: XOR<CartCreateInput, CartUncheckedCreateInput>
    /**
     * In case the Cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartUpdateInput, CartUncheckedUpdateInput>
  }

  /**
   * Cart delete
   */
  export type CartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
    /**
     * Filter which Cart to delete.
     */
    where: CartWhereUniqueInput
  }

  /**
   * Cart deleteMany
   */
  export type CartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carts to delete
     */
    where?: CartWhereInput
    /**
     * Limit how many Carts to delete.
     */
    limit?: number
  }

  /**
   * Cart.cart_items
   */
  export type Cart$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    where?: CartOnItemWhereInput
    orderBy?: CartOnItemOrderByWithRelationInput | CartOnItemOrderByWithRelationInput[]
    cursor?: CartOnItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartOnItemScalarFieldEnum | CartOnItemScalarFieldEnum[]
  }

  /**
   * Cart without action
   */
  export type CartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cart
     */
    select?: CartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cart
     */
    omit?: CartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartInclude<ExtArgs> | null
  }


  /**
   * Model CartOnItem
   */

  export type AggregateCartOnItem = {
    _count: CartOnItemCountAggregateOutputType | null
    _avg: CartOnItemAvgAggregateOutputType | null
    _sum: CartOnItemSumAggregateOutputType | null
    _min: CartOnItemMinAggregateOutputType | null
    _max: CartOnItemMaxAggregateOutputType | null
  }

  export type CartOnItemAvgAggregateOutputType = {
    quantity: number | null
  }

  export type CartOnItemSumAggregateOutputType = {
    quantity: number | null
  }

  export type CartOnItemMinAggregateOutputType = {
    id: string | null
    cart_id: string | null
    product_id: string | null
    quantity: number | null
  }

  export type CartOnItemMaxAggregateOutputType = {
    id: string | null
    cart_id: string | null
    product_id: string | null
    quantity: number | null
  }

  export type CartOnItemCountAggregateOutputType = {
    id: number
    cart_id: number
    product_id: number
    quantity: number
    _all: number
  }


  export type CartOnItemAvgAggregateInputType = {
    quantity?: true
  }

  export type CartOnItemSumAggregateInputType = {
    quantity?: true
  }

  export type CartOnItemMinAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type CartOnItemMaxAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
  }

  export type CartOnItemCountAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    quantity?: true
    _all?: true
  }

  export type CartOnItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartOnItem to aggregate.
     */
    where?: CartOnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartOnItems to fetch.
     */
    orderBy?: CartOnItemOrderByWithRelationInput | CartOnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CartOnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartOnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartOnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CartOnItems
    **/
    _count?: true | CartOnItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartOnItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartOnItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartOnItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartOnItemMaxAggregateInputType
  }

  export type GetCartOnItemAggregateType<T extends CartOnItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartOnItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartOnItem[P]>
      : GetScalarType<T[P], AggregateCartOnItem[P]>
  }




  export type CartOnItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CartOnItemWhereInput
    orderBy?: CartOnItemOrderByWithAggregationInput | CartOnItemOrderByWithAggregationInput[]
    by: CartOnItemScalarFieldEnum[] | CartOnItemScalarFieldEnum
    having?: CartOnItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartOnItemCountAggregateInputType | true
    _avg?: CartOnItemAvgAggregateInputType
    _sum?: CartOnItemSumAggregateInputType
    _min?: CartOnItemMinAggregateInputType
    _max?: CartOnItemMaxAggregateInputType
  }

  export type CartOnItemGroupByOutputType = {
    id: string
    cart_id: string
    product_id: string
    quantity: number
    _count: CartOnItemCountAggregateOutputType | null
    _avg: CartOnItemAvgAggregateOutputType | null
    _sum: CartOnItemSumAggregateOutputType | null
    _min: CartOnItemMinAggregateOutputType | null
    _max: CartOnItemMaxAggregateOutputType | null
  }

  type GetCartOnItemGroupByPayload<T extends CartOnItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartOnItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartOnItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartOnItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartOnItemGroupByOutputType[P]>
        }
      >
    >


  export type CartOnItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartOnItem"]>



  export type CartOnItemSelectScalar = {
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    quantity?: boolean
  }

  export type CartOnItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "product_id" | "quantity", ExtArgs["result"]["cartOnItem"]>
  export type CartOnItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | CartDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CartOnItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CartOnItem"
    objects: {
      cart: Prisma.$CartPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cart_id: string
      product_id: string
      quantity: number
    }, ExtArgs["result"]["cartOnItem"]>
    composites: {}
  }

  type CartOnItemGetPayload<S extends boolean | null | undefined | CartOnItemDefaultArgs> = $Result.GetResult<Prisma.$CartOnItemPayload, S>

  type CartOnItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CartOnItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartOnItemCountAggregateInputType | true
    }

  export interface CartOnItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CartOnItem'], meta: { name: 'CartOnItem' } }
    /**
     * Find zero or one CartOnItem that matches the filter.
     * @param {CartOnItemFindUniqueArgs} args - Arguments to find a CartOnItem
     * @example
     * // Get one CartOnItem
     * const cartOnItem = await prisma.cartOnItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CartOnItemFindUniqueArgs>(args: SelectSubset<T, CartOnItemFindUniqueArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CartOnItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CartOnItemFindUniqueOrThrowArgs} args - Arguments to find a CartOnItem
     * @example
     * // Get one CartOnItem
     * const cartOnItem = await prisma.cartOnItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CartOnItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CartOnItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartOnItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartOnItemFindFirstArgs} args - Arguments to find a CartOnItem
     * @example
     * // Get one CartOnItem
     * const cartOnItem = await prisma.cartOnItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CartOnItemFindFirstArgs>(args?: SelectSubset<T, CartOnItemFindFirstArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CartOnItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartOnItemFindFirstOrThrowArgs} args - Arguments to find a CartOnItem
     * @example
     * // Get one CartOnItem
     * const cartOnItem = await prisma.cartOnItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CartOnItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CartOnItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CartOnItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartOnItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartOnItems
     * const cartOnItems = await prisma.cartOnItem.findMany()
     * 
     * // Get first 10 CartOnItems
     * const cartOnItems = await prisma.cartOnItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartOnItemWithIdOnly = await prisma.cartOnItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CartOnItemFindManyArgs>(args?: SelectSubset<T, CartOnItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CartOnItem.
     * @param {CartOnItemCreateArgs} args - Arguments to create a CartOnItem.
     * @example
     * // Create one CartOnItem
     * const CartOnItem = await prisma.cartOnItem.create({
     *   data: {
     *     // ... data to create a CartOnItem
     *   }
     * })
     * 
     */
    create<T extends CartOnItemCreateArgs>(args: SelectSubset<T, CartOnItemCreateArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CartOnItems.
     * @param {CartOnItemCreateManyArgs} args - Arguments to create many CartOnItems.
     * @example
     * // Create many CartOnItems
     * const cartOnItem = await prisma.cartOnItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CartOnItemCreateManyArgs>(args?: SelectSubset<T, CartOnItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CartOnItem.
     * @param {CartOnItemDeleteArgs} args - Arguments to delete one CartOnItem.
     * @example
     * // Delete one CartOnItem
     * const CartOnItem = await prisma.cartOnItem.delete({
     *   where: {
     *     // ... filter to delete one CartOnItem
     *   }
     * })
     * 
     */
    delete<T extends CartOnItemDeleteArgs>(args: SelectSubset<T, CartOnItemDeleteArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CartOnItem.
     * @param {CartOnItemUpdateArgs} args - Arguments to update one CartOnItem.
     * @example
     * // Update one CartOnItem
     * const cartOnItem = await prisma.cartOnItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CartOnItemUpdateArgs>(args: SelectSubset<T, CartOnItemUpdateArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CartOnItems.
     * @param {CartOnItemDeleteManyArgs} args - Arguments to filter CartOnItems to delete.
     * @example
     * // Delete a few CartOnItems
     * const { count } = await prisma.cartOnItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CartOnItemDeleteManyArgs>(args?: SelectSubset<T, CartOnItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartOnItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartOnItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartOnItems
     * const cartOnItem = await prisma.cartOnItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CartOnItemUpdateManyArgs>(args: SelectSubset<T, CartOnItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartOnItem.
     * @param {CartOnItemUpsertArgs} args - Arguments to update or create a CartOnItem.
     * @example
     * // Update or create a CartOnItem
     * const cartOnItem = await prisma.cartOnItem.upsert({
     *   create: {
     *     // ... data to create a CartOnItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartOnItem we want to update
     *   }
     * })
     */
    upsert<T extends CartOnItemUpsertArgs>(args: SelectSubset<T, CartOnItemUpsertArgs<ExtArgs>>): Prisma__CartOnItemClient<$Result.GetResult<Prisma.$CartOnItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CartOnItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartOnItemCountArgs} args - Arguments to filter CartOnItems to count.
     * @example
     * // Count the number of CartOnItems
     * const count = await prisma.cartOnItem.count({
     *   where: {
     *     // ... the filter for the CartOnItems we want to count
     *   }
     * })
    **/
    count<T extends CartOnItemCountArgs>(
      args?: Subset<T, CartOnItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartOnItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartOnItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartOnItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CartOnItemAggregateArgs>(args: Subset<T, CartOnItemAggregateArgs>): Prisma.PrismaPromise<GetCartOnItemAggregateType<T>>

    /**
     * Group by CartOnItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartOnItemGroupByArgs} args - Group by arguments.
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
      T extends CartOnItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CartOnItemGroupByArgs['orderBy'] }
        : { orderBy?: CartOnItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CartOnItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartOnItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CartOnItem model
   */
  readonly fields: CartOnItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CartOnItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CartOnItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends CartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CartDefaultArgs<ExtArgs>>): Prisma__CartClient<$Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CartOnItem model
   */
  interface CartOnItemFieldRefs {
    readonly id: FieldRef<"CartOnItem", 'String'>
    readonly cart_id: FieldRef<"CartOnItem", 'String'>
    readonly product_id: FieldRef<"CartOnItem", 'String'>
    readonly quantity: FieldRef<"CartOnItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CartOnItem findUnique
   */
  export type CartOnItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * Filter, which CartOnItem to fetch.
     */
    where: CartOnItemWhereUniqueInput
  }

  /**
   * CartOnItem findUniqueOrThrow
   */
  export type CartOnItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * Filter, which CartOnItem to fetch.
     */
    where: CartOnItemWhereUniqueInput
  }

  /**
   * CartOnItem findFirst
   */
  export type CartOnItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * Filter, which CartOnItem to fetch.
     */
    where?: CartOnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartOnItems to fetch.
     */
    orderBy?: CartOnItemOrderByWithRelationInput | CartOnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartOnItems.
     */
    cursor?: CartOnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartOnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartOnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartOnItems.
     */
    distinct?: CartOnItemScalarFieldEnum | CartOnItemScalarFieldEnum[]
  }

  /**
   * CartOnItem findFirstOrThrow
   */
  export type CartOnItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * Filter, which CartOnItem to fetch.
     */
    where?: CartOnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartOnItems to fetch.
     */
    orderBy?: CartOnItemOrderByWithRelationInput | CartOnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CartOnItems.
     */
    cursor?: CartOnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartOnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartOnItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CartOnItems.
     */
    distinct?: CartOnItemScalarFieldEnum | CartOnItemScalarFieldEnum[]
  }

  /**
   * CartOnItem findMany
   */
  export type CartOnItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * Filter, which CartOnItems to fetch.
     */
    where?: CartOnItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CartOnItems to fetch.
     */
    orderBy?: CartOnItemOrderByWithRelationInput | CartOnItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CartOnItems.
     */
    cursor?: CartOnItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CartOnItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CartOnItems.
     */
    skip?: number
    distinct?: CartOnItemScalarFieldEnum | CartOnItemScalarFieldEnum[]
  }

  /**
   * CartOnItem create
   */
  export type CartOnItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CartOnItem.
     */
    data: XOR<CartOnItemCreateInput, CartOnItemUncheckedCreateInput>
  }

  /**
   * CartOnItem createMany
   */
  export type CartOnItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CartOnItems.
     */
    data: CartOnItemCreateManyInput | CartOnItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CartOnItem update
   */
  export type CartOnItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CartOnItem.
     */
    data: XOR<CartOnItemUpdateInput, CartOnItemUncheckedUpdateInput>
    /**
     * Choose, which CartOnItem to update.
     */
    where: CartOnItemWhereUniqueInput
  }

  /**
   * CartOnItem updateMany
   */
  export type CartOnItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CartOnItems.
     */
    data: XOR<CartOnItemUpdateManyMutationInput, CartOnItemUncheckedUpdateManyInput>
    /**
     * Filter which CartOnItems to update
     */
    where?: CartOnItemWhereInput
    /**
     * Limit how many CartOnItems to update.
     */
    limit?: number
  }

  /**
   * CartOnItem upsert
   */
  export type CartOnItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CartOnItem to update in case it exists.
     */
    where: CartOnItemWhereUniqueInput
    /**
     * In case the CartOnItem found by the `where` argument doesn't exist, create a new CartOnItem with this data.
     */
    create: XOR<CartOnItemCreateInput, CartOnItemUncheckedCreateInput>
    /**
     * In case the CartOnItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CartOnItemUpdateInput, CartOnItemUncheckedUpdateInput>
  }

  /**
   * CartOnItem delete
   */
  export type CartOnItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
    /**
     * Filter which CartOnItem to delete.
     */
    where: CartOnItemWhereUniqueInput
  }

  /**
   * CartOnItem deleteMany
   */
  export type CartOnItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CartOnItems to delete
     */
    where?: CartOnItemWhereInput
    /**
     * Limit how many CartOnItems to delete.
     */
    limit?: number
  }

  /**
   * CartOnItem without action
   */
  export type CartOnItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartOnItem
     */
    select?: CartOnItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CartOnItem
     */
    omit?: CartOnItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CartOnItemInclude<ExtArgs> | null
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


  export const TokenBlacklistScalarFieldEnum: {
    id: 'id',
    token: 'token',
    tokenHash: 'tokenHash',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt'
  };

  export type TokenBlacklistScalarFieldEnum = (typeof TokenBlacklistScalarFieldEnum)[keyof typeof TokenBlacklistScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    name: 'name',
    email: 'email',
    password: 'password',
    profile_picture: 'profile_picture',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    identification: 'identification',
    phone: 'phone',
    notes: 'notes',
    identification_picture: 'identification_picture',
    documentation_before: 'documentation_before',
    documentation_after: 'documentation_after'
  };

  export type RentScalarFieldEnum = (typeof RentScalarFieldEnum)[keyof typeof RentScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    rent_id: 'rent_id',
    invoice: 'invoice',
    order_date: 'order_date',
    start_date: 'start_date',
    end_date: 'end_date',
    total_cost: 'total_cost',
    order_status: 'order_status',
    payment_status: 'payment_status'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    category_id: 'category_id',
    name: 'name',
    slug: 'slug',
    price: 'price',
    quantity: 'quantity',
    quantity_alert: 'quantity_alert',
    brand: 'brand',
    description: 'description',
    specifications: 'specifications',
    source: 'source',
    date_arrival: 'date_arrival',
    is_rentable: 'is_rentable',
    product_picture: 'product_picture',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const OrderOnProductScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity',
    price: 'price'
  };

  export type OrderOnProductScalarFieldEnum = (typeof OrderOnProductScalarFieldEnum)[keyof typeof OrderOnProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const CartScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartOnItemScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    quantity: 'quantity'
  };

  export type CartOnItemScalarFieldEnum = (typeof CartOnItemScalarFieldEnum)[keyof typeof CartOnItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TokenBlacklistOrderByRelevanceFieldEnum: {
    id: 'id',
    token: 'token',
    tokenHash: 'tokenHash'
  };

  export type TokenBlacklistOrderByRelevanceFieldEnum = (typeof TokenBlacklistOrderByRelevanceFieldEnum)[keyof typeof TokenBlacklistOrderByRelevanceFieldEnum]


  export const TeamOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type TeamOrderByRelevanceFieldEnum = (typeof TeamOrderByRelevanceFieldEnum)[keyof typeof TeamOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    team_id: 'team_id',
    name: 'name',
    email: 'email',
    password: 'password',
    profile_picture: 'profile_picture'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const RentOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    identification: 'identification',
    phone: 'phone',
    notes: 'notes',
    identification_picture: 'identification_picture',
    documentation_before: 'documentation_before',
    documentation_after: 'documentation_after'
  };

  export type RentOrderByRelevanceFieldEnum = (typeof RentOrderByRelevanceFieldEnum)[keyof typeof RentOrderByRelevanceFieldEnum]


  export const OrderOrderByRelevanceFieldEnum: {
    id: 'id',
    rent_id: 'rent_id',
    invoice: 'invoice'
  };

  export type OrderOrderByRelevanceFieldEnum = (typeof OrderOrderByRelevanceFieldEnum)[keyof typeof OrderOrderByRelevanceFieldEnum]


  export const ProductOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    category_id: 'category_id',
    name: 'name',
    slug: 'slug',
    brand: 'brand',
    description: 'description',
    specifications: 'specifications',
    source: 'source',
    product_picture: 'product_picture'
  };

  export type ProductOrderByRelevanceFieldEnum = (typeof ProductOrderByRelevanceFieldEnum)[keyof typeof ProductOrderByRelevanceFieldEnum]


  export const OrderOnProductOrderByRelevanceFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id'
  };

  export type OrderOnProductOrderByRelevanceFieldEnum = (typeof OrderOnProductOrderByRelevanceFieldEnum)[keyof typeof OrderOnProductOrderByRelevanceFieldEnum]


  export const CategoryOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug'
  };

  export type CategoryOrderByRelevanceFieldEnum = (typeof CategoryOrderByRelevanceFieldEnum)[keyof typeof CategoryOrderByRelevanceFieldEnum]


  export const CartOrderByRelevanceFieldEnum: {
    id: 'id',
    user_id: 'user_id'
  };

  export type CartOrderByRelevanceFieldEnum = (typeof CartOrderByRelevanceFieldEnum)[keyof typeof CartOrderByRelevanceFieldEnum]


  export const CartOnItemOrderByRelevanceFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_id: 'product_id'
  };

  export type CartOnItemOrderByRelevanceFieldEnum = (typeof CartOnItemOrderByRelevanceFieldEnum)[keyof typeof CartOnItemOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type TokenBlacklistWhereInput = {
    AND?: TokenBlacklistWhereInput | TokenBlacklistWhereInput[]
    OR?: TokenBlacklistWhereInput[]
    NOT?: TokenBlacklistWhereInput | TokenBlacklistWhereInput[]
    id?: StringFilter<"TokenBlacklist"> | string
    token?: StringFilter<"TokenBlacklist"> | string
    tokenHash?: StringFilter<"TokenBlacklist"> | string
    createdAt?: DateTimeFilter<"TokenBlacklist"> | Date | string
    expiresAt?: DateTimeFilter<"TokenBlacklist"> | Date | string
  }

  export type TokenBlacklistOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    tokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _relevance?: TokenBlacklistOrderByRelevanceInput
  }

  export type TokenBlacklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenHash?: string
    AND?: TokenBlacklistWhereInput | TokenBlacklistWhereInput[]
    OR?: TokenBlacklistWhereInput[]
    NOT?: TokenBlacklistWhereInput | TokenBlacklistWhereInput[]
    token?: StringFilter<"TokenBlacklist"> | string
    createdAt?: DateTimeFilter<"TokenBlacklist"> | Date | string
    expiresAt?: DateTimeFilter<"TokenBlacklist"> | Date | string
  }, "id" | "tokenHash">

  export type TokenBlacklistOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    tokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    _count?: TokenBlacklistCountOrderByAggregateInput
    _max?: TokenBlacklistMaxOrderByAggregateInput
    _min?: TokenBlacklistMinOrderByAggregateInput
  }

  export type TokenBlacklistScalarWhereWithAggregatesInput = {
    AND?: TokenBlacklistScalarWhereWithAggregatesInput | TokenBlacklistScalarWhereWithAggregatesInput[]
    OR?: TokenBlacklistScalarWhereWithAggregatesInput[]
    NOT?: TokenBlacklistScalarWhereWithAggregatesInput | TokenBlacklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TokenBlacklist"> | string
    token?: StringWithAggregatesFilter<"TokenBlacklist"> | string
    tokenHash?: StringWithAggregatesFilter<"TokenBlacklist"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TokenBlacklist"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"TokenBlacklist"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    slug?: StringFilter<"Team"> | string
    created_at?: DateTimeFilter<"Team"> | Date | string
    updated_at?: DateTimeFilter<"Team"> | Date | string
    user?: UserListRelationFilter
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByRelationAggregateInput
    _relevance?: TeamOrderByRelevanceInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    created_at?: DateTimeFilter<"Team"> | Date | string
    updated_at?: DateTimeFilter<"Team"> | Date | string
    user?: UserListRelationFilter
  }, "id" | "slug">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    slug?: StringWithAggregatesFilter<"Team"> | string
    created_at?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Team"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    team_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile_picture?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    rent?: RentListRelationFilter
    product?: ProductListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    team?: TeamOrderByWithRelationInput
    rent?: RentOrderByRelationAggregateInput
    product?: ProductOrderByRelationAggregateInput
    cart?: CartOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    team_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile_picture?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
    rent?: RentListRelationFilter
    product?: ProductListRelationFilter
    cart?: XOR<CartNullableScalarRelationFilter, CartWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    team_id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    profile_picture?: StringNullableWithAggregatesFilter<"User"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RentWhereInput = {
    AND?: RentWhereInput | RentWhereInput[]
    OR?: RentWhereInput[]
    NOT?: RentWhereInput | RentWhereInput[]
    id?: StringFilter<"Rent"> | string
    user_id?: StringFilter<"Rent"> | string
    identification?: StringFilter<"Rent"> | string
    phone?: StringFilter<"Rent"> | string
    notes?: StringNullableFilter<"Rent"> | string | null
    identification_picture?: StringFilter<"Rent"> | string
    documentation_before?: StringNullableFilter<"Rent"> | string | null
    documentation_after?: StringNullableFilter<"Rent"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }

  export type RentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    identification?: SortOrder
    phone?: SortOrder
    notes?: SortOrderInput | SortOrder
    identification_picture?: SortOrder
    documentation_before?: SortOrderInput | SortOrder
    documentation_after?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    order?: OrderOrderByWithRelationInput
    _relevance?: RentOrderByRelevanceInput
  }

  export type RentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentWhereInput | RentWhereInput[]
    OR?: RentWhereInput[]
    NOT?: RentWhereInput | RentWhereInput[]
    user_id?: StringFilter<"Rent"> | string
    identification?: StringFilter<"Rent"> | string
    phone?: StringFilter<"Rent"> | string
    notes?: StringNullableFilter<"Rent"> | string | null
    identification_picture?: StringFilter<"Rent"> | string
    documentation_before?: StringNullableFilter<"Rent"> | string | null
    documentation_after?: StringNullableFilter<"Rent"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    order?: XOR<OrderNullableScalarRelationFilter, OrderWhereInput> | null
  }, "id">

  export type RentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    identification?: SortOrder
    phone?: SortOrder
    notes?: SortOrderInput | SortOrder
    identification_picture?: SortOrder
    documentation_before?: SortOrderInput | SortOrder
    documentation_after?: SortOrderInput | SortOrder
    _count?: RentCountOrderByAggregateInput
    _max?: RentMaxOrderByAggregateInput
    _min?: RentMinOrderByAggregateInput
  }

  export type RentScalarWhereWithAggregatesInput = {
    AND?: RentScalarWhereWithAggregatesInput | RentScalarWhereWithAggregatesInput[]
    OR?: RentScalarWhereWithAggregatesInput[]
    NOT?: RentScalarWhereWithAggregatesInput | RentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rent"> | string
    user_id?: StringWithAggregatesFilter<"Rent"> | string
    identification?: StringWithAggregatesFilter<"Rent"> | string
    phone?: StringWithAggregatesFilter<"Rent"> | string
    notes?: StringNullableWithAggregatesFilter<"Rent"> | string | null
    identification_picture?: StringWithAggregatesFilter<"Rent"> | string
    documentation_before?: StringNullableWithAggregatesFilter<"Rent"> | string | null
    documentation_after?: StringNullableWithAggregatesFilter<"Rent"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    rent_id?: StringFilter<"Order"> | string
    invoice?: StringFilter<"Order"> | string
    order_date?: DateTimeFilter<"Order"> | Date | string
    start_date?: DateTimeFilter<"Order"> | Date | string
    end_date?: DateTimeFilter<"Order"> | Date | string
    total_cost?: FloatFilter<"Order"> | number
    order_status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    rent?: XOR<RentScalarRelationFilter, RentWhereInput>
    products?: OrderOnProductListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    rent_id?: SortOrder
    invoice?: SortOrder
    order_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cost?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
    rent?: RentOrderByWithRelationInput
    products?: OrderOnProductOrderByRelationAggregateInput
    _relevance?: OrderOrderByRelevanceInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rent_id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    invoice?: StringFilter<"Order"> | string
    order_date?: DateTimeFilter<"Order"> | Date | string
    start_date?: DateTimeFilter<"Order"> | Date | string
    end_date?: DateTimeFilter<"Order"> | Date | string
    total_cost?: FloatFilter<"Order"> | number
    order_status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFilter<"Order"> | $Enums.PaymentStatus
    rent?: XOR<RentScalarRelationFilter, RentWhereInput>
    products?: OrderOnProductListRelationFilter
  }, "id" | "rent_id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    rent_id?: SortOrder
    invoice?: SortOrder
    order_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cost?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    rent_id?: StringWithAggregatesFilter<"Order"> | string
    invoice?: StringWithAggregatesFilter<"Order"> | string
    order_date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    start_date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    total_cost?: FloatWithAggregatesFilter<"Order"> | number
    order_status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusWithAggregatesFilter<"Order"> | $Enums.PaymentStatus
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    user_id?: StringFilter<"Product"> | string
    category_id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    quantity_alert?: IntFilter<"Product"> | number
    brand?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    specifications?: StringFilter<"Product"> | string
    source?: StringFilter<"Product"> | string
    date_arrival?: DateTimeFilter<"Product"> | Date | string
    is_rentable?: BoolFilter<"Product"> | boolean
    product_picture?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    order?: OrderOnProductListRelationFilter
    cart?: CartOnItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    quantity_alert?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    specifications?: SortOrder
    source?: SortOrder
    date_arrival?: SortOrder
    is_rentable?: SortOrder
    product_picture?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    order?: OrderOnProductOrderByRelationAggregateInput
    cart?: CartOnItemOrderByRelationAggregateInput
    _relevance?: ProductOrderByRelevanceInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    user_id?: StringFilter<"Product"> | string
    category_id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    quantity_alert?: IntFilter<"Product"> | number
    brand?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    specifications?: StringFilter<"Product"> | string
    source?: StringFilter<"Product"> | string
    date_arrival?: DateTimeFilter<"Product"> | Date | string
    is_rentable?: BoolFilter<"Product"> | boolean
    product_picture?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    order?: OrderOnProductListRelationFilter
    cart?: CartOnItemListRelationFilter
  }, "id" | "slug">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    quantity_alert?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    specifications?: SortOrder
    source?: SortOrder
    date_arrival?: SortOrder
    is_rentable?: SortOrder
    product_picture?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    user_id?: StringWithAggregatesFilter<"Product"> | string
    category_id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    slug?: StringWithAggregatesFilter<"Product"> | string
    price?: FloatWithAggregatesFilter<"Product"> | number
    quantity?: IntWithAggregatesFilter<"Product"> | number
    quantity_alert?: IntWithAggregatesFilter<"Product"> | number
    brand?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    specifications?: StringWithAggregatesFilter<"Product"> | string
    source?: StringWithAggregatesFilter<"Product"> | string
    date_arrival?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    is_rentable?: BoolWithAggregatesFilter<"Product"> | boolean
    product_picture?: StringNullableWithAggregatesFilter<"Product"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type OrderOnProductWhereInput = {
    AND?: OrderOnProductWhereInput | OrderOnProductWhereInput[]
    OR?: OrderOnProductWhereInput[]
    NOT?: OrderOnProductWhereInput | OrderOnProductWhereInput[]
    id?: StringFilter<"OrderOnProduct"> | string
    order_id?: StringFilter<"OrderOnProduct"> | string
    product_id?: StringFilter<"OrderOnProduct"> | string
    quantity?: IntFilter<"OrderOnProduct"> | number
    price?: FloatFilter<"OrderOnProduct"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderOnProductOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    _relevance?: OrderOnProductOrderByRelevanceInput
  }

  export type OrderOnProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderOnProductWhereInput | OrderOnProductWhereInput[]
    OR?: OrderOnProductWhereInput[]
    NOT?: OrderOnProductWhereInput | OrderOnProductWhereInput[]
    order_id?: StringFilter<"OrderOnProduct"> | string
    product_id?: StringFilter<"OrderOnProduct"> | string
    quantity?: IntFilter<"OrderOnProduct"> | number
    price?: FloatFilter<"OrderOnProduct"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderOnProductOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: OrderOnProductCountOrderByAggregateInput
    _avg?: OrderOnProductAvgOrderByAggregateInput
    _max?: OrderOnProductMaxOrderByAggregateInput
    _min?: OrderOnProductMinOrderByAggregateInput
    _sum?: OrderOnProductSumOrderByAggregateInput
  }

  export type OrderOnProductScalarWhereWithAggregatesInput = {
    AND?: OrderOnProductScalarWhereWithAggregatesInput | OrderOnProductScalarWhereWithAggregatesInput[]
    OR?: OrderOnProductScalarWhereWithAggregatesInput[]
    NOT?: OrderOnProductScalarWhereWithAggregatesInput | OrderOnProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderOnProduct"> | string
    order_id?: StringWithAggregatesFilter<"OrderOnProduct"> | string
    product_id?: StringWithAggregatesFilter<"OrderOnProduct"> | string
    quantity?: IntWithAggregatesFilter<"OrderOnProduct"> | number
    price?: FloatWithAggregatesFilter<"OrderOnProduct"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    product?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    product?: ProductOrderByRelationAggregateInput
    _relevance?: CategoryOrderByRelevanceInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    created_at?: DateTimeFilter<"Category"> | Date | string
    updated_at?: DateTimeFilter<"Category"> | Date | string
    product?: ProductListRelationFilter
  }, "id" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    created_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type CartWhereInput = {
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    id?: StringFilter<"Cart"> | string
    user_id?: StringFilter<"Cart"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cart_items?: CartOnItemListRelationFilter
  }

  export type CartOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    user?: UserOrderByWithRelationInput
    cart_items?: CartOnItemOrderByRelationAggregateInput
    _relevance?: CartOrderByRelevanceInput
  }

  export type CartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: CartWhereInput | CartWhereInput[]
    OR?: CartWhereInput[]
    NOT?: CartWhereInput | CartWhereInput[]
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cart_items?: CartOnItemListRelationFilter
  }, "id" | "user_id">

  export type CartOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    _count?: CartCountOrderByAggregateInput
    _max?: CartMaxOrderByAggregateInput
    _min?: CartMinOrderByAggregateInput
  }

  export type CartScalarWhereWithAggregatesInput = {
    AND?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    OR?: CartScalarWhereWithAggregatesInput[]
    NOT?: CartScalarWhereWithAggregatesInput | CartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cart"> | string
    user_id?: StringWithAggregatesFilter<"Cart"> | string
  }

  export type CartOnItemWhereInput = {
    AND?: CartOnItemWhereInput | CartOnItemWhereInput[]
    OR?: CartOnItemWhereInput[]
    NOT?: CartOnItemWhereInput | CartOnItemWhereInput[]
    id?: StringFilter<"CartOnItem"> | string
    cart_id?: StringFilter<"CartOnItem"> | string
    product_id?: StringFilter<"CartOnItem"> | string
    quantity?: IntFilter<"CartOnItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CartOnItemOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    cart?: CartOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    _relevance?: CartOnItemOrderByRelevanceInput
  }

  export type CartOnItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cart_id_product_id?: CartOnItemCart_idProduct_idCompoundUniqueInput
    AND?: CartOnItemWhereInput | CartOnItemWhereInput[]
    OR?: CartOnItemWhereInput[]
    NOT?: CartOnItemWhereInput | CartOnItemWhereInput[]
    cart_id?: StringFilter<"CartOnItem"> | string
    product_id?: StringFilter<"CartOnItem"> | string
    quantity?: IntFilter<"CartOnItem"> | number
    cart?: XOR<CartScalarRelationFilter, CartWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "cart_id_product_id">

  export type CartOnItemOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    _count?: CartOnItemCountOrderByAggregateInput
    _avg?: CartOnItemAvgOrderByAggregateInput
    _max?: CartOnItemMaxOrderByAggregateInput
    _min?: CartOnItemMinOrderByAggregateInput
    _sum?: CartOnItemSumOrderByAggregateInput
  }

  export type CartOnItemScalarWhereWithAggregatesInput = {
    AND?: CartOnItemScalarWhereWithAggregatesInput | CartOnItemScalarWhereWithAggregatesInput[]
    OR?: CartOnItemScalarWhereWithAggregatesInput[]
    NOT?: CartOnItemScalarWhereWithAggregatesInput | CartOnItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CartOnItem"> | string
    cart_id?: StringWithAggregatesFilter<"CartOnItem"> | string
    product_id?: StringWithAggregatesFilter<"CartOnItem"> | string
    quantity?: IntWithAggregatesFilter<"CartOnItem"> | number
  }

  export type TokenBlacklistCreateInput = {
    id?: string
    token: string
    tokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type TokenBlacklistUncheckedCreateInput = {
    id?: string
    token: string
    tokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type TokenBlacklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenBlacklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenBlacklistCreateManyInput = {
    id?: string
    token: string
    tokenHash: string
    createdAt?: Date | string
    expiresAt: Date | string
  }

  export type TokenBlacklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TokenBlacklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    tokenHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    user?: UserUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    rent?: RentCreateNestedManyWithoutUserInput
    product?: ProductCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    team_id: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    rent?: RentUncheckedCreateNestedManyWithoutUserInput
    product?: ProductUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    rent?: RentUpdateManyWithoutUserNestedInput
    product?: ProductUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: RentUncheckedUpdateManyWithoutUserNestedInput
    product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    team_id: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentCreateInput = {
    id?: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
    user: UserCreateNestedOneWithoutRentInput
    order?: OrderCreateNestedOneWithoutRentInput
  }

  export type RentUncheckedCreateInput = {
    id?: string
    user_id: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
    order?: OrderUncheckedCreateNestedOneWithoutRentInput
  }

  export type RentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRentNestedInput
    order?: OrderUpdateOneWithoutRentNestedInput
  }

  export type RentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUncheckedUpdateOneWithoutRentNestedInput
  }

  export type RentCreateManyInput = {
    id?: string
    user_id: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
  }

  export type RentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    id?: string
    invoice: string
    order_date?: Date | string
    start_date: Date | string
    end_date: Date | string
    total_cost: number
    order_status?: $Enums.OrderStatus
    payment_status?: $Enums.PaymentStatus
    rent: RentCreateNestedOneWithoutOrderInput
    products?: OrderOnProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    rent_id: string
    invoice: string
    order_date?: Date | string
    start_date: Date | string
    end_date: Date | string
    total_cost: number
    order_status?: $Enums.OrderStatus
    payment_status?: $Enums.PaymentStatus
    products?: OrderOnProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rent?: RentUpdateOneRequiredWithoutOrderNestedInput
    products?: OrderOnProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rent_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    products?: OrderOnProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    rent_id: string
    invoice: string
    order_date?: Date | string
    start_date: Date | string
    end_date: Date | string
    total_cost: number
    order_status?: $Enums.OrderStatus
    payment_status?: $Enums.PaymentStatus
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rent_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    order?: OrderOnProductCreateNestedManyWithoutProductInput
    cart?: CartOnItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    user_id: string
    category_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order?: OrderOnProductUncheckedCreateNestedManyWithoutProductInput
    cart?: CartOnItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    order?: OrderOnProductUpdateManyWithoutProductNestedInput
    cart?: CartOnItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderOnProductUncheckedUpdateManyWithoutProductNestedInput
    cart?: CartOnItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    user_id: string
    category_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderOnProductCreateInput = {
    id?: string
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutOrderInput
  }

  export type OrderOnProductUncheckedCreateInput = {
    id?: string
    order_id: string
    product_id: string
    quantity: number
    price: number
  }

  export type OrderOnProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderOnProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderOnProductCreateManyInput = {
    id?: string
    order_id: string
    product_id: string
    quantity: number
    price: number
  }

  export type OrderOnProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderOnProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    product?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
    product?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutCartInput
    cart_items?: CartOnItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateInput = {
    id?: string
    user_id: string
    cart_items?: CartOnItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCartNestedInput
    cart_items?: CartOnItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    cart_items?: CartOnItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type CartCreateManyInput = {
    id?: string
    user_id: string
  }

  export type CartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type CartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type CartOnItemCreateInput = {
    id?: string
    quantity: number
    cart: CartCreateNestedOneWithoutCart_itemsInput
    product: ProductCreateNestedOneWithoutCartInput
  }

  export type CartOnItemUncheckedCreateInput = {
    id?: string
    cart_id: string
    product_id: string
    quantity: number
  }

  export type CartOnItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutCart_itemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartOnItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartOnItemCreateManyInput = {
    id?: string
    cart_id: string
    product_id: string
    quantity: number
  }

  export type CartOnItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartOnItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TokenBlacklistOrderByRelevanceInput = {
    fields: TokenBlacklistOrderByRelevanceFieldEnum | TokenBlacklistOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TokenBlacklistCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TokenBlacklistMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type TokenBlacklistMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    tokenHash?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamOrderByRelevanceInput = {
    fields: TeamOrderByRelevanceFieldEnum | TeamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type RentListRelationFilter = {
    every?: RentWhereInput
    some?: RentWhereInput
    none?: RentWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type CartNullableScalarRelationFilter = {
    is?: CartWhereInput | null
    isNot?: CartWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    team_id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    profile_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OrderNullableScalarRelationFilter = {
    is?: OrderWhereInput | null
    isNot?: OrderWhereInput | null
  }

  export type RentOrderByRelevanceInput = {
    fields: RentOrderByRelevanceFieldEnum | RentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type RentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    identification?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    identification_picture?: SortOrder
    documentation_before?: SortOrder
    documentation_after?: SortOrder
  }

  export type RentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    identification?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    identification_picture?: SortOrder
    documentation_before?: SortOrder
    documentation_after?: SortOrder
  }

  export type RentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    identification?: SortOrder
    phone?: SortOrder
    notes?: SortOrder
    identification_picture?: SortOrder
    documentation_before?: SortOrder
    documentation_after?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type RentScalarRelationFilter = {
    is?: RentWhereInput
    isNot?: RentWhereInput
  }

  export type OrderOnProductListRelationFilter = {
    every?: OrderOnProductWhereInput
    some?: OrderOnProductWhereInput
    none?: OrderOnProductWhereInput
  }

  export type OrderOnProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelevanceInput = {
    fields: OrderOrderByRelevanceFieldEnum | OrderOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    rent_id?: SortOrder
    invoice?: SortOrder
    order_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cost?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    total_cost?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    rent_id?: SortOrder
    invoice?: SortOrder
    order_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cost?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    rent_id?: SortOrder
    invoice?: SortOrder
    order_date?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    total_cost?: SortOrder
    order_status?: SortOrder
    payment_status?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    total_cost?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type CartOnItemListRelationFilter = {
    every?: CartOnItemWhereInput
    some?: CartOnItemWhereInput
    none?: CartOnItemWhereInput
  }

  export type CartOnItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductOrderByRelevanceInput = {
    fields: ProductOrderByRelevanceFieldEnum | ProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    quantity_alert?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    specifications?: SortOrder
    source?: SortOrder
    date_arrival?: SortOrder
    is_rentable?: SortOrder
    product_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    quantity_alert?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    quantity_alert?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    specifications?: SortOrder
    source?: SortOrder
    date_arrival?: SortOrder
    is_rentable?: SortOrder
    product_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    category_id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    quantity_alert?: SortOrder
    brand?: SortOrder
    description?: SortOrder
    specifications?: SortOrder
    source?: SortOrder
    date_arrival?: SortOrder
    is_rentable?: SortOrder
    product_picture?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    price?: SortOrder
    quantity?: SortOrder
    quantity_alert?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type OrderOnProductOrderByRelevanceInput = {
    fields: OrderOnProductOrderByRelevanceFieldEnum | OrderOnProductOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrderOnProductCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderOnProductAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderOnProductMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderOnProductMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type OrderOnProductSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type CategoryOrderByRelevanceInput = {
    fields: CategoryOrderByRelevanceFieldEnum | CategoryOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CartOrderByRelevanceInput = {
    fields: CartOrderByRelevanceFieldEnum | CartOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CartCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CartMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CartMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CartScalarRelationFilter = {
    is?: CartWhereInput
    isNot?: CartWhereInput
  }

  export type CartOnItemOrderByRelevanceInput = {
    fields: CartOnItemOrderByRelevanceFieldEnum | CartOnItemOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CartOnItemCart_idProduct_idCompoundUniqueInput = {
    cart_id: string
    product_id: string
  }

  export type CartOnItemCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartOnItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type CartOnItemMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartOnItemMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type CartOnItemSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput> | UserCreateWithoutTeamInput[] | UserUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: UserCreateOrConnectWithoutTeamInput | UserCreateOrConnectWithoutTeamInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutTeamInput | UserUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: UserCreateManyTeamInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutTeamInput | UserUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: UserUpdateManyWithWhereWithoutTeamInput | UserUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type TeamCreateNestedOneWithoutUserInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    connect?: TeamWhereUniqueInput
  }

  export type RentCreateNestedManyWithoutUserInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CartCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type RentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type CartUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    connect?: CartWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TeamUpdateOneRequiredWithoutUserNestedInput = {
    create?: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    connectOrCreate?: TeamCreateOrConnectWithoutUserInput
    upsert?: TeamUpsertWithoutUserInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutUserInput, TeamUpdateWithoutUserInput>, TeamUncheckedUpdateWithoutUserInput>
  }

  export type RentUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutUserInput | RentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutUserInput | RentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentUpdateManyWithWhereWithoutUserInput | RentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CartUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type RentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput> | RentCreateWithoutUserInput[] | RentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RentCreateOrConnectWithoutUserInput | RentCreateOrConnectWithoutUserInput[]
    upsert?: RentUpsertWithWhereUniqueWithoutUserInput | RentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RentCreateManyUserInputEnvelope
    set?: RentWhereUniqueInput | RentWhereUniqueInput[]
    disconnect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    delete?: RentWhereUniqueInput | RentWhereUniqueInput[]
    connect?: RentWhereUniqueInput | RentWhereUniqueInput[]
    update?: RentUpdateWithWhereUniqueWithoutUserInput | RentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RentUpdateManyWithWhereWithoutUserInput | RentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RentScalarWhereInput | RentScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput> | ProductCreateWithoutUserInput[] | ProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUserInput | ProductCreateOrConnectWithoutUserInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUserInput | ProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProductCreateManyUserInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUserInput | ProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUserInput | ProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CartUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    connectOrCreate?: CartCreateOrConnectWithoutUserInput
    upsert?: CartUpsertWithoutUserInput
    disconnect?: CartWhereInput | boolean
    delete?: CartWhereInput | boolean
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutUserInput, CartUpdateWithoutUserInput>, CartUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutRentInput = {
    create?: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentInput
    connect?: UserWhereUniqueInput
  }

  export type OrderCreateNestedOneWithoutRentInput = {
    create?: XOR<OrderCreateWithoutRentInput, OrderUncheckedCreateWithoutRentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRentInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedOneWithoutRentInput = {
    create?: XOR<OrderCreateWithoutRentInput, OrderUncheckedCreateWithoutRentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRentInput
    connect?: OrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRentNestedInput = {
    create?: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentInput
    upsert?: UserUpsertWithoutRentInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentInput, UserUpdateWithoutRentInput>, UserUncheckedUpdateWithoutRentInput>
  }

  export type OrderUpdateOneWithoutRentNestedInput = {
    create?: XOR<OrderCreateWithoutRentInput, OrderUncheckedCreateWithoutRentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRentInput
    upsert?: OrderUpsertWithoutRentInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutRentInput, OrderUpdateWithoutRentInput>, OrderUncheckedUpdateWithoutRentInput>
  }

  export type OrderUncheckedUpdateOneWithoutRentNestedInput = {
    create?: XOR<OrderCreateWithoutRentInput, OrderUncheckedCreateWithoutRentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutRentInput
    upsert?: OrderUpsertWithoutRentInput
    disconnect?: OrderWhereInput | boolean
    delete?: OrderWhereInput | boolean
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutRentInput, OrderUpdateWithoutRentInput>, OrderUncheckedUpdateWithoutRentInput>
  }

  export type RentCreateNestedOneWithoutOrderInput = {
    create?: XOR<RentCreateWithoutOrderInput, RentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RentCreateOrConnectWithoutOrderInput
    connect?: RentWhereUniqueInput
  }

  export type OrderOnProductCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderOnProductCreateWithoutOrderInput, OrderOnProductUncheckedCreateWithoutOrderInput> | OrderOnProductCreateWithoutOrderInput[] | OrderOnProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutOrderInput | OrderOnProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderOnProductCreateManyOrderInputEnvelope
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
  }

  export type OrderOnProductUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderOnProductCreateWithoutOrderInput, OrderOnProductUncheckedCreateWithoutOrderInput> | OrderOnProductCreateWithoutOrderInput[] | OrderOnProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutOrderInput | OrderOnProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderOnProductCreateManyOrderInputEnvelope
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type RentUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<RentCreateWithoutOrderInput, RentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: RentCreateOrConnectWithoutOrderInput
    upsert?: RentUpsertWithoutOrderInput
    connect?: RentWhereUniqueInput
    update?: XOR<XOR<RentUpdateToOneWithWhereWithoutOrderInput, RentUpdateWithoutOrderInput>, RentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderOnProductUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderOnProductCreateWithoutOrderInput, OrderOnProductUncheckedCreateWithoutOrderInput> | OrderOnProductCreateWithoutOrderInput[] | OrderOnProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutOrderInput | OrderOnProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderOnProductUpsertWithWhereUniqueWithoutOrderInput | OrderOnProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderOnProductCreateManyOrderInputEnvelope
    set?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    disconnect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    delete?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    update?: OrderOnProductUpdateWithWhereUniqueWithoutOrderInput | OrderOnProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderOnProductUpdateManyWithWhereWithoutOrderInput | OrderOnProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderOnProductScalarWhereInput | OrderOnProductScalarWhereInput[]
  }

  export type OrderOnProductUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderOnProductCreateWithoutOrderInput, OrderOnProductUncheckedCreateWithoutOrderInput> | OrderOnProductCreateWithoutOrderInput[] | OrderOnProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutOrderInput | OrderOnProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderOnProductUpsertWithWhereUniqueWithoutOrderInput | OrderOnProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderOnProductCreateManyOrderInputEnvelope
    set?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    disconnect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    delete?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    update?: OrderOnProductUpdateWithWhereUniqueWithoutOrderInput | OrderOnProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderOnProductUpdateManyWithWhereWithoutOrderInput | OrderOnProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderOnProductScalarWhereInput | OrderOnProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutProductInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutProductInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    connect?: CategoryWhereUniqueInput
  }

  export type OrderOnProductCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderOnProductCreateWithoutProductInput, OrderOnProductUncheckedCreateWithoutProductInput> | OrderOnProductCreateWithoutProductInput[] | OrderOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutProductInput | OrderOnProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderOnProductCreateManyProductInputEnvelope
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
  }

  export type CartOnItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CartOnItemCreateWithoutProductInput, CartOnItemUncheckedCreateWithoutProductInput> | CartOnItemCreateWithoutProductInput[] | CartOnItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutProductInput | CartOnItemCreateOrConnectWithoutProductInput[]
    createMany?: CartOnItemCreateManyProductInputEnvelope
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
  }

  export type OrderOnProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderOnProductCreateWithoutProductInput, OrderOnProductUncheckedCreateWithoutProductInput> | OrderOnProductCreateWithoutProductInput[] | OrderOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutProductInput | OrderOnProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderOnProductCreateManyProductInputEnvelope
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
  }

  export type CartOnItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CartOnItemCreateWithoutProductInput, CartOnItemUncheckedCreateWithoutProductInput> | CartOnItemCreateWithoutProductInput[] | CartOnItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutProductInput | CartOnItemCreateOrConnectWithoutProductInput[]
    createMany?: CartOnItemCreateManyProductInputEnvelope
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutProductInput
    upsert?: UserUpsertWithoutProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProductInput, UserUpdateWithoutProductInput>, UserUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductInput
    upsert?: CategoryUpsertWithoutProductInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductInput, CategoryUpdateWithoutProductInput>, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type OrderOnProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderOnProductCreateWithoutProductInput, OrderOnProductUncheckedCreateWithoutProductInput> | OrderOnProductCreateWithoutProductInput[] | OrderOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutProductInput | OrderOnProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderOnProductUpsertWithWhereUniqueWithoutProductInput | OrderOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderOnProductCreateManyProductInputEnvelope
    set?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    disconnect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    delete?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    update?: OrderOnProductUpdateWithWhereUniqueWithoutProductInput | OrderOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderOnProductUpdateManyWithWhereWithoutProductInput | OrderOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderOnProductScalarWhereInput | OrderOnProductScalarWhereInput[]
  }

  export type CartOnItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartOnItemCreateWithoutProductInput, CartOnItemUncheckedCreateWithoutProductInput> | CartOnItemCreateWithoutProductInput[] | CartOnItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutProductInput | CartOnItemCreateOrConnectWithoutProductInput[]
    upsert?: CartOnItemUpsertWithWhereUniqueWithoutProductInput | CartOnItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartOnItemCreateManyProductInputEnvelope
    set?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    disconnect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    delete?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    update?: CartOnItemUpdateWithWhereUniqueWithoutProductInput | CartOnItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartOnItemUpdateManyWithWhereWithoutProductInput | CartOnItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartOnItemScalarWhereInput | CartOnItemScalarWhereInput[]
  }

  export type OrderOnProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderOnProductCreateWithoutProductInput, OrderOnProductUncheckedCreateWithoutProductInput> | OrderOnProductCreateWithoutProductInput[] | OrderOnProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderOnProductCreateOrConnectWithoutProductInput | OrderOnProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderOnProductUpsertWithWhereUniqueWithoutProductInput | OrderOnProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderOnProductCreateManyProductInputEnvelope
    set?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    disconnect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    delete?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    connect?: OrderOnProductWhereUniqueInput | OrderOnProductWhereUniqueInput[]
    update?: OrderOnProductUpdateWithWhereUniqueWithoutProductInput | OrderOnProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderOnProductUpdateManyWithWhereWithoutProductInput | OrderOnProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderOnProductScalarWhereInput | OrderOnProductScalarWhereInput[]
  }

  export type CartOnItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CartOnItemCreateWithoutProductInput, CartOnItemUncheckedCreateWithoutProductInput> | CartOnItemCreateWithoutProductInput[] | CartOnItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutProductInput | CartOnItemCreateOrConnectWithoutProductInput[]
    upsert?: CartOnItemUpsertWithWhereUniqueWithoutProductInput | CartOnItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CartOnItemCreateManyProductInputEnvelope
    set?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    disconnect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    delete?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    update?: CartOnItemUpdateWithWhereUniqueWithoutProductInput | CartOnItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CartOnItemUpdateManyWithWhereWithoutProductInput | CartOnItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CartOnItemScalarWhereInput | CartOnItemScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutProductsInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderInput = {
    create?: XOR<ProductCreateWithoutOrderInput, ProductUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutProductsInput
    upsert?: OrderUpsertWithoutProductsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutProductsInput, OrderUpdateWithoutProductsInput>, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<ProductCreateWithoutOrderInput, ProductUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderInput
    upsert?: ProductUpsertWithoutOrderInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderInput, ProductUpdateWithoutOrderInput>, ProductUncheckedUpdateWithoutOrderInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCartInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    connect?: UserWhereUniqueInput
  }

  export type CartOnItemCreateNestedManyWithoutCartInput = {
    create?: XOR<CartOnItemCreateWithoutCartInput, CartOnItemUncheckedCreateWithoutCartInput> | CartOnItemCreateWithoutCartInput[] | CartOnItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutCartInput | CartOnItemCreateOrConnectWithoutCartInput[]
    createMany?: CartOnItemCreateManyCartInputEnvelope
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
  }

  export type CartOnItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<CartOnItemCreateWithoutCartInput, CartOnItemUncheckedCreateWithoutCartInput> | CartOnItemCreateWithoutCartInput[] | CartOnItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutCartInput | CartOnItemCreateOrConnectWithoutCartInput[]
    createMany?: CartOnItemCreateManyCartInputEnvelope
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    connectOrCreate?: UserCreateOrConnectWithoutCartInput
    upsert?: UserUpsertWithoutCartInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCartInput, UserUpdateWithoutCartInput>, UserUncheckedUpdateWithoutCartInput>
  }

  export type CartOnItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartOnItemCreateWithoutCartInput, CartOnItemUncheckedCreateWithoutCartInput> | CartOnItemCreateWithoutCartInput[] | CartOnItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutCartInput | CartOnItemCreateOrConnectWithoutCartInput[]
    upsert?: CartOnItemUpsertWithWhereUniqueWithoutCartInput | CartOnItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartOnItemCreateManyCartInputEnvelope
    set?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    disconnect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    delete?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    update?: CartOnItemUpdateWithWhereUniqueWithoutCartInput | CartOnItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartOnItemUpdateManyWithWhereWithoutCartInput | CartOnItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartOnItemScalarWhereInput | CartOnItemScalarWhereInput[]
  }

  export type CartOnItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<CartOnItemCreateWithoutCartInput, CartOnItemUncheckedCreateWithoutCartInput> | CartOnItemCreateWithoutCartInput[] | CartOnItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: CartOnItemCreateOrConnectWithoutCartInput | CartOnItemCreateOrConnectWithoutCartInput[]
    upsert?: CartOnItemUpsertWithWhereUniqueWithoutCartInput | CartOnItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: CartOnItemCreateManyCartInputEnvelope
    set?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    disconnect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    delete?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    connect?: CartOnItemWhereUniqueInput | CartOnItemWhereUniqueInput[]
    update?: CartOnItemUpdateWithWhereUniqueWithoutCartInput | CartOnItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: CartOnItemUpdateManyWithWhereWithoutCartInput | CartOnItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: CartOnItemScalarWhereInput | CartOnItemScalarWhereInput[]
  }

  export type CartCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<CartCreateWithoutCart_itemsInput, CartUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCart_itemsInput
    connect?: CartWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCartInput = {
    create?: XOR<ProductCreateWithoutCartInput, ProductUncheckedCreateWithoutCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartInput
    connect?: ProductWhereUniqueInput
  }

  export type CartUpdateOneRequiredWithoutCart_itemsNestedInput = {
    create?: XOR<CartCreateWithoutCart_itemsInput, CartUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: CartCreateOrConnectWithoutCart_itemsInput
    upsert?: CartUpsertWithoutCart_itemsInput
    connect?: CartWhereUniqueInput
    update?: XOR<XOR<CartUpdateToOneWithWhereWithoutCart_itemsInput, CartUpdateWithoutCart_itemsInput>, CartUncheckedUpdateWithoutCart_itemsInput>
  }

  export type ProductUpdateOneRequiredWithoutCartNestedInput = {
    create?: XOR<ProductCreateWithoutCartInput, ProductUncheckedCreateWithoutCartInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCartInput
    upsert?: ProductUpsertWithoutCartInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCartInput, ProductUpdateWithoutCartInput>, ProductUncheckedUpdateWithoutCartInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[]
    notIn?: $Enums.OrderStatus[]
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[]
    notIn?: $Enums.PaymentStatus[]
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type UserCreateWithoutTeamInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    rent?: RentCreateNestedManyWithoutUserInput
    product?: ProductCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    rent?: RentUncheckedCreateNestedManyWithoutUserInput
    product?: ProductUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserCreateManyTeamInputEnvelope = {
    data: UserCreateManyTeamInput | UserCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
    create: XOR<UserCreateWithoutTeamInput, UserUncheckedCreateWithoutTeamInput>
  }

  export type UserUpdateWithWhereUniqueWithoutTeamInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutTeamInput, UserUncheckedUpdateWithoutTeamInput>
  }

  export type UserUpdateManyWithWhereWithoutTeamInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutTeamInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    team_id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    profile_picture?: StringNullableFilter<"User"> | string | null
    created_at?: DateTimeFilter<"User"> | Date | string
    updated_at?: DateTimeFilter<"User"> | Date | string
  }

  export type TeamCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeamUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type TeamCreateOrConnectWithoutUserInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
  }

  export type RentCreateWithoutUserInput = {
    id?: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
    order?: OrderCreateNestedOneWithoutRentInput
  }

  export type RentUncheckedCreateWithoutUserInput = {
    id?: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
    order?: OrderUncheckedCreateNestedOneWithoutRentInput
  }

  export type RentCreateOrConnectWithoutUserInput = {
    where: RentWhereUniqueInput
    create: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput>
  }

  export type RentCreateManyUserInputEnvelope = {
    data: RentCreateManyUserInput | RentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutUserInput = {
    id?: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    category: CategoryCreateNestedOneWithoutProductInput
    order?: OrderOnProductCreateNestedManyWithoutProductInput
    cart?: CartOnItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserInput = {
    id?: string
    category_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order?: OrderOnProductUncheckedCreateNestedManyWithoutProductInput
    cart?: CartOnItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductCreateManyUserInputEnvelope = {
    data: ProductCreateManyUserInput | ProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type CartCreateWithoutUserInput = {
    id?: string
    cart_items?: CartOnItemCreateNestedManyWithoutCartInput
  }

  export type CartUncheckedCreateWithoutUserInput = {
    id?: string
    cart_items?: CartOnItemUncheckedCreateNestedManyWithoutCartInput
  }

  export type CartCreateOrConnectWithoutUserInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
  }

  export type TeamUpsertWithoutUserInput = {
    update: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
    create: XOR<TeamCreateWithoutUserInput, TeamUncheckedCreateWithoutUserInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutUserInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutUserInput, TeamUncheckedUpdateWithoutUserInput>
  }

  export type TeamUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentUpsertWithWhereUniqueWithoutUserInput = {
    where: RentWhereUniqueInput
    update: XOR<RentUpdateWithoutUserInput, RentUncheckedUpdateWithoutUserInput>
    create: XOR<RentCreateWithoutUserInput, RentUncheckedCreateWithoutUserInput>
  }

  export type RentUpdateWithWhereUniqueWithoutUserInput = {
    where: RentWhereUniqueInput
    data: XOR<RentUpdateWithoutUserInput, RentUncheckedUpdateWithoutUserInput>
  }

  export type RentUpdateManyWithWhereWithoutUserInput = {
    where: RentScalarWhereInput
    data: XOR<RentUpdateManyMutationInput, RentUncheckedUpdateManyWithoutUserInput>
  }

  export type RentScalarWhereInput = {
    AND?: RentScalarWhereInput | RentScalarWhereInput[]
    OR?: RentScalarWhereInput[]
    NOT?: RentScalarWhereInput | RentScalarWhereInput[]
    id?: StringFilter<"Rent"> | string
    user_id?: StringFilter<"Rent"> | string
    identification?: StringFilter<"Rent"> | string
    phone?: StringFilter<"Rent"> | string
    notes?: StringNullableFilter<"Rent"> | string | null
    identification_picture?: StringFilter<"Rent"> | string
    documentation_before?: StringNullableFilter<"Rent"> | string | null
    documentation_after?: StringNullableFilter<"Rent"> | string | null
  }

  export type ProductUpsertWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
    create: XOR<ProductCreateWithoutUserInput, ProductUncheckedCreateWithoutUserInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUserInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUserInput, ProductUncheckedUpdateWithoutUserInput>
  }

  export type ProductUpdateManyWithWhereWithoutUserInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUserInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    user_id?: StringFilter<"Product"> | string
    category_id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    slug?: StringFilter<"Product"> | string
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    quantity_alert?: IntFilter<"Product"> | number
    brand?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    specifications?: StringFilter<"Product"> | string
    source?: StringFilter<"Product"> | string
    date_arrival?: DateTimeFilter<"Product"> | Date | string
    is_rentable?: BoolFilter<"Product"> | boolean
    product_picture?: StringNullableFilter<"Product"> | string | null
    created_at?: DateTimeFilter<"Product"> | Date | string
    updated_at?: DateTimeFilter<"Product"> | Date | string
  }

  export type CartUpsertWithoutUserInput = {
    update: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
    create: XOR<CartCreateWithoutUserInput, CartUncheckedCreateWithoutUserInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutUserInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutUserInput, CartUncheckedUpdateWithoutUserInput>
  }

  export type CartUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_items?: CartOnItemUpdateManyWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_items?: CartOnItemUncheckedUpdateManyWithoutCartNestedInput
  }

  export type UserCreateWithoutRentInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    product?: ProductCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRentInput = {
    id?: string
    team_id: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    product?: ProductUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
  }

  export type OrderCreateWithoutRentInput = {
    id?: string
    invoice: string
    order_date?: Date | string
    start_date: Date | string
    end_date: Date | string
    total_cost: number
    order_status?: $Enums.OrderStatus
    payment_status?: $Enums.PaymentStatus
    products?: OrderOnProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutRentInput = {
    id?: string
    invoice: string
    order_date?: Date | string
    start_date: Date | string
    end_date: Date | string
    total_cost: number
    order_status?: $Enums.OrderStatus
    payment_status?: $Enums.PaymentStatus
    products?: OrderOnProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutRentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutRentInput, OrderUncheckedCreateWithoutRentInput>
  }

  export type UserUpsertWithoutRentInput = {
    update: XOR<UserUpdateWithoutRentInput, UserUncheckedUpdateWithoutRentInput>
    create: XOR<UserCreateWithoutRentInput, UserUncheckedCreateWithoutRentInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentInput, UserUncheckedUpdateWithoutRentInput>
  }

  export type UserUpdateWithoutRentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    product?: ProductUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRentInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type OrderUpsertWithoutRentInput = {
    update: XOR<OrderUpdateWithoutRentInput, OrderUncheckedUpdateWithoutRentInput>
    create: XOR<OrderCreateWithoutRentInput, OrderUncheckedCreateWithoutRentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutRentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutRentInput, OrderUncheckedUpdateWithoutRentInput>
  }

  export type OrderUpdateWithoutRentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    products?: OrderOnProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutRentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    products?: OrderOnProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type RentCreateWithoutOrderInput = {
    id?: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
    user: UserCreateNestedOneWithoutRentInput
  }

  export type RentUncheckedCreateWithoutOrderInput = {
    id?: string
    user_id: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
  }

  export type RentCreateOrConnectWithoutOrderInput = {
    where: RentWhereUniqueInput
    create: XOR<RentCreateWithoutOrderInput, RentUncheckedCreateWithoutOrderInput>
  }

  export type OrderOnProductCreateWithoutOrderInput = {
    id?: string
    quantity: number
    price: number
    product: ProductCreateNestedOneWithoutOrderInput
  }

  export type OrderOnProductUncheckedCreateWithoutOrderInput = {
    id?: string
    product_id: string
    quantity: number
    price: number
  }

  export type OrderOnProductCreateOrConnectWithoutOrderInput = {
    where: OrderOnProductWhereUniqueInput
    create: XOR<OrderOnProductCreateWithoutOrderInput, OrderOnProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderOnProductCreateManyOrderInputEnvelope = {
    data: OrderOnProductCreateManyOrderInput | OrderOnProductCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type RentUpsertWithoutOrderInput = {
    update: XOR<RentUpdateWithoutOrderInput, RentUncheckedUpdateWithoutOrderInput>
    create: XOR<RentCreateWithoutOrderInput, RentUncheckedCreateWithoutOrderInput>
    where?: RentWhereInput
  }

  export type RentUpdateToOneWithWhereWithoutOrderInput = {
    where?: RentWhereInput
    data: XOR<RentUpdateWithoutOrderInput, RentUncheckedUpdateWithoutOrderInput>
  }

  export type RentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutRentNestedInput
  }

  export type RentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderOnProductUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderOnProductWhereUniqueInput
    update: XOR<OrderOnProductUpdateWithoutOrderInput, OrderOnProductUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderOnProductCreateWithoutOrderInput, OrderOnProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderOnProductUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderOnProductWhereUniqueInput
    data: XOR<OrderOnProductUpdateWithoutOrderInput, OrderOnProductUncheckedUpdateWithoutOrderInput>
  }

  export type OrderOnProductUpdateManyWithWhereWithoutOrderInput = {
    where: OrderOnProductScalarWhereInput
    data: XOR<OrderOnProductUpdateManyMutationInput, OrderOnProductUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderOnProductScalarWhereInput = {
    AND?: OrderOnProductScalarWhereInput | OrderOnProductScalarWhereInput[]
    OR?: OrderOnProductScalarWhereInput[]
    NOT?: OrderOnProductScalarWhereInput | OrderOnProductScalarWhereInput[]
    id?: StringFilter<"OrderOnProduct"> | string
    order_id?: StringFilter<"OrderOnProduct"> | string
    product_id?: StringFilter<"OrderOnProduct"> | string
    quantity?: IntFilter<"OrderOnProduct"> | number
    price?: FloatFilter<"OrderOnProduct"> | number
  }

  export type UserCreateWithoutProductInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    rent?: RentCreateNestedManyWithoutUserInput
    cart?: CartCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProductInput = {
    id?: string
    team_id: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    rent?: RentUncheckedCreateNestedManyWithoutUserInput
    cart?: CartUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
  }

  export type CategoryCreateWithoutProductInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductInput = {
    id?: string
    name: string
    slug: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
  }

  export type OrderOnProductCreateWithoutProductInput = {
    id?: string
    quantity: number
    price: number
    order: OrderCreateNestedOneWithoutProductsInput
  }

  export type OrderOnProductUncheckedCreateWithoutProductInput = {
    id?: string
    order_id: string
    quantity: number
    price: number
  }

  export type OrderOnProductCreateOrConnectWithoutProductInput = {
    where: OrderOnProductWhereUniqueInput
    create: XOR<OrderOnProductCreateWithoutProductInput, OrderOnProductUncheckedCreateWithoutProductInput>
  }

  export type OrderOnProductCreateManyProductInputEnvelope = {
    data: OrderOnProductCreateManyProductInput | OrderOnProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CartOnItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    cart: CartCreateNestedOneWithoutCart_itemsInput
  }

  export type CartOnItemUncheckedCreateWithoutProductInput = {
    id?: string
    cart_id: string
    quantity: number
  }

  export type CartOnItemCreateOrConnectWithoutProductInput = {
    where: CartOnItemWhereUniqueInput
    create: XOR<CartOnItemCreateWithoutProductInput, CartOnItemUncheckedCreateWithoutProductInput>
  }

  export type CartOnItemCreateManyProductInputEnvelope = {
    data: CartOnItemCreateManyProductInput | CartOnItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutProductInput = {
    update: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
    create: XOR<UserCreateWithoutProductInput, UserUncheckedCreateWithoutProductInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProductInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProductInput, UserUncheckedUpdateWithoutProductInput>
  }

  export type UserUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    rent?: RentUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: RentUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutProductInput = {
    update: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
    create: XOR<CategoryCreateWithoutProductInput, CategoryUncheckedCreateWithoutProductInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductInput, CategoryUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderOnProductUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderOnProductWhereUniqueInput
    update: XOR<OrderOnProductUpdateWithoutProductInput, OrderOnProductUncheckedUpdateWithoutProductInput>
    create: XOR<OrderOnProductCreateWithoutProductInput, OrderOnProductUncheckedCreateWithoutProductInput>
  }

  export type OrderOnProductUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderOnProductWhereUniqueInput
    data: XOR<OrderOnProductUpdateWithoutProductInput, OrderOnProductUncheckedUpdateWithoutProductInput>
  }

  export type OrderOnProductUpdateManyWithWhereWithoutProductInput = {
    where: OrderOnProductScalarWhereInput
    data: XOR<OrderOnProductUpdateManyMutationInput, OrderOnProductUncheckedUpdateManyWithoutProductInput>
  }

  export type CartOnItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CartOnItemWhereUniqueInput
    update: XOR<CartOnItemUpdateWithoutProductInput, CartOnItemUncheckedUpdateWithoutProductInput>
    create: XOR<CartOnItemCreateWithoutProductInput, CartOnItemUncheckedCreateWithoutProductInput>
  }

  export type CartOnItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CartOnItemWhereUniqueInput
    data: XOR<CartOnItemUpdateWithoutProductInput, CartOnItemUncheckedUpdateWithoutProductInput>
  }

  export type CartOnItemUpdateManyWithWhereWithoutProductInput = {
    where: CartOnItemScalarWhereInput
    data: XOR<CartOnItemUpdateManyMutationInput, CartOnItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CartOnItemScalarWhereInput = {
    AND?: CartOnItemScalarWhereInput | CartOnItemScalarWhereInput[]
    OR?: CartOnItemScalarWhereInput[]
    NOT?: CartOnItemScalarWhereInput | CartOnItemScalarWhereInput[]
    id?: StringFilter<"CartOnItem"> | string
    cart_id?: StringFilter<"CartOnItem"> | string
    product_id?: StringFilter<"CartOnItem"> | string
    quantity?: IntFilter<"CartOnItem"> | number
  }

  export type OrderCreateWithoutProductsInput = {
    id?: string
    invoice: string
    order_date?: Date | string
    start_date: Date | string
    end_date: Date | string
    total_cost: number
    order_status?: $Enums.OrderStatus
    payment_status?: $Enums.PaymentStatus
    rent: RentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutProductsInput = {
    id?: string
    rent_id: string
    invoice: string
    order_date?: Date | string
    start_date: Date | string
    end_date: Date | string
    total_cost: number
    order_status?: $Enums.OrderStatus
    payment_status?: $Enums.PaymentStatus
  }

  export type OrderCreateOrConnectWithoutProductsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutOrderInput = {
    id?: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    cart?: CartOnItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderInput = {
    id?: string
    user_id: string
    category_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    cart?: CartOnItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderInput, ProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderUpsertWithoutProductsInput = {
    update: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
    create: XOR<OrderCreateWithoutProductsInput, OrderUncheckedCreateWithoutProductsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutProductsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutProductsInput, OrderUncheckedUpdateWithoutProductsInput>
  }

  export type OrderUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    rent?: RentUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    rent_id?: StringFieldUpdateOperationsInput | string
    invoice?: StringFieldUpdateOperationsInput | string
    order_date?: DateTimeFieldUpdateOperationsInput | Date | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    total_cost?: FloatFieldUpdateOperationsInput | number
    order_status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    payment_status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
  }

  export type ProductUpsertWithoutOrderInput = {
    update: XOR<ProductUpdateWithoutOrderInput, ProductUncheckedUpdateWithoutOrderInput>
    create: XOR<ProductCreateWithoutOrderInput, ProductUncheckedCreateWithoutOrderInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderInput, ProductUncheckedUpdateWithoutOrderInput>
  }

  export type ProductUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    cart?: CartOnItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cart?: CartOnItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutProductInput
    order?: OrderOnProductCreateNestedManyWithoutProductInput
    cart?: CartOnItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    user_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order?: OrderOnProductUncheckedCreateNestedManyWithoutProductInput
    cart?: CartOnItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserCreateWithoutCartInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    team: TeamCreateNestedOneWithoutUserInput
    rent?: RentCreateNestedManyWithoutUserInput
    product?: ProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCartInput = {
    id?: string
    team_id: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    rent?: RentUncheckedCreateNestedManyWithoutUserInput
    product?: ProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCartInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
  }

  export type CartOnItemCreateWithoutCartInput = {
    id?: string
    quantity: number
    product: ProductCreateNestedOneWithoutCartInput
  }

  export type CartOnItemUncheckedCreateWithoutCartInput = {
    id?: string
    product_id: string
    quantity: number
  }

  export type CartOnItemCreateOrConnectWithoutCartInput = {
    where: CartOnItemWhereUniqueInput
    create: XOR<CartOnItemCreateWithoutCartInput, CartOnItemUncheckedCreateWithoutCartInput>
  }

  export type CartOnItemCreateManyCartInputEnvelope = {
    data: CartOnItemCreateManyCartInput | CartOnItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCartInput = {
    update: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
    create: XOR<UserCreateWithoutCartInput, UserUncheckedCreateWithoutCartInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCartInput, UserUncheckedUpdateWithoutCartInput>
  }

  export type UserUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutUserNestedInput
    rent?: RentUpdateManyWithoutUserNestedInput
    product?: ProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    team_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: RentUncheckedUpdateManyWithoutUserNestedInput
    product?: ProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CartOnItemUpsertWithWhereUniqueWithoutCartInput = {
    where: CartOnItemWhereUniqueInput
    update: XOR<CartOnItemUpdateWithoutCartInput, CartOnItemUncheckedUpdateWithoutCartInput>
    create: XOR<CartOnItemCreateWithoutCartInput, CartOnItemUncheckedCreateWithoutCartInput>
  }

  export type CartOnItemUpdateWithWhereUniqueWithoutCartInput = {
    where: CartOnItemWhereUniqueInput
    data: XOR<CartOnItemUpdateWithoutCartInput, CartOnItemUncheckedUpdateWithoutCartInput>
  }

  export type CartOnItemUpdateManyWithWhereWithoutCartInput = {
    where: CartOnItemScalarWhereInput
    data: XOR<CartOnItemUpdateManyMutationInput, CartOnItemUncheckedUpdateManyWithoutCartInput>
  }

  export type CartCreateWithoutCart_itemsInput = {
    id?: string
    user: UserCreateNestedOneWithoutCartInput
  }

  export type CartUncheckedCreateWithoutCart_itemsInput = {
    id?: string
    user_id: string
  }

  export type CartCreateOrConnectWithoutCart_itemsInput = {
    where: CartWhereUniqueInput
    create: XOR<CartCreateWithoutCart_itemsInput, CartUncheckedCreateWithoutCart_itemsInput>
  }

  export type ProductCreateWithoutCartInput = {
    id?: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    user: UserCreateNestedOneWithoutProductInput
    category: CategoryCreateNestedOneWithoutProductInput
    order?: OrderOnProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCartInput = {
    id?: string
    user_id: string
    category_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
    order?: OrderOnProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCartInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCartInput, ProductUncheckedCreateWithoutCartInput>
  }

  export type CartUpsertWithoutCart_itemsInput = {
    update: XOR<CartUpdateWithoutCart_itemsInput, CartUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<CartCreateWithoutCart_itemsInput, CartUncheckedCreateWithoutCart_itemsInput>
    where?: CartWhereInput
  }

  export type CartUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: CartWhereInput
    data: XOR<CartUpdateWithoutCart_itemsInput, CartUncheckedUpdateWithoutCart_itemsInput>
  }

  export type CartUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartUncheckedUpdateWithoutCart_itemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutCartInput = {
    update: XOR<ProductUpdateWithoutCartInput, ProductUncheckedUpdateWithoutCartInput>
    create: XOR<ProductCreateWithoutCartInput, ProductUncheckedCreateWithoutCartInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCartInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCartInput, ProductUncheckedUpdateWithoutCartInput>
  }

  export type ProductUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    order?: OrderOnProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderOnProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateManyTeamInput = {
    id?: string
    name: string
    email: string
    password: string
    profile_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type UserUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: RentUpdateManyWithoutUserNestedInput
    product?: ProductUpdateManyWithoutUserNestedInput
    cart?: CartUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    rent?: RentUncheckedUpdateManyWithoutUserNestedInput
    product?: ProductUncheckedUpdateManyWithoutUserNestedInput
    cart?: CartUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    profile_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentCreateManyUserInput = {
    id?: string
    identification: string
    phone: string
    notes?: string | null
    identification_picture: string
    documentation_before?: string | null
    documentation_after?: string | null
  }

  export type ProductCreateManyUserInput = {
    id?: string
    category_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type RentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUpdateOneWithoutRentNestedInput
  }

  export type RentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
    order?: OrderUncheckedUpdateOneWithoutRentNestedInput
  }

  export type RentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    identification?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    identification_picture?: StringFieldUpdateOperationsInput | string
    documentation_before?: NullableStringFieldUpdateOperationsInput | string | null
    documentation_after?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutProductNestedInput
    order?: OrderOnProductUpdateManyWithoutProductNestedInput
    cart?: CartOnItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderOnProductUncheckedUpdateManyWithoutProductNestedInput
    cart?: CartOnItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderOnProductCreateManyOrderInput = {
    id?: string
    product_id: string
    quantity: number
    price: number
  }

  export type OrderOnProductUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderOnProductUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderOnProductUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderOnProductCreateManyProductInput = {
    id?: string
    order_id: string
    quantity: number
    price: number
  }

  export type CartOnItemCreateManyProductInput = {
    id?: string
    cart_id: string
    quantity: number
  }

  export type OrderOnProductUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutProductsNestedInput
  }

  export type OrderOnProductUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderOnProductUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    order_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
  }

  export type CartOnItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    cart?: CartUpdateOneRequiredWithoutCart_itemsNestedInput
  }

  export type CartOnItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartOnItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    cart_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    user_id: string
    name: string
    slug: string
    price: number
    quantity: number
    quantity_alert: number
    brand: string
    description: string
    specifications: string
    source: string
    date_arrival: Date | string
    is_rentable: boolean
    product_picture?: string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProductNestedInput
    order?: OrderOnProductUpdateManyWithoutProductNestedInput
    cart?: CartOnItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderOnProductUncheckedUpdateManyWithoutProductNestedInput
    cart?: CartOnItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantity_alert?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    specifications?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    date_arrival?: DateTimeFieldUpdateOperationsInput | Date | string
    is_rentable?: BoolFieldUpdateOperationsInput | boolean
    product_picture?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CartOnItemCreateManyCartInput = {
    id?: string
    product_id: string
    quantity: number
  }

  export type CartOnItemUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutCartNestedInput
  }

  export type CartOnItemUncheckedUpdateWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type CartOnItemUncheckedUpdateManyWithoutCartInput = {
    id?: StringFieldUpdateOperationsInput | string
    product_id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
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