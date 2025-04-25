
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.TokenBlacklistScalarFieldEnum = {
  id: 'id',
  token: 'token',
  tokenHash: 'tokenHash',
  createdAt: 'createdAt',
  expiresAt: 'expiresAt'
};

exports.Prisma.TeamScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  team_id: 'team_id',
  name: 'name',
  email: 'email',
  password: 'password',
  profile_picture: 'profile_picture',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.RentScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  identification: 'identification',
  phone: 'phone',
  notes: 'notes',
  identification_picture: 'identification_picture',
  documentation_before: 'documentation_before',
  documentation_after: 'documentation_after'
};

exports.Prisma.OrderScalarFieldEnum = {
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

exports.Prisma.ProductScalarFieldEnum = {
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

exports.Prisma.OrderOnProductScalarFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  product_id: 'product_id',
  quantity: 'quantity',
  price: 'price'
};

exports.Prisma.CategoryScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.CartScalarFieldEnum = {
  id: 'id',
  user_id: 'user_id'
};

exports.Prisma.CartOnItemScalarFieldEnum = {
  id: 'id',
  cart_id: 'cart_id',
  product_id: 'product_id',
  quantity: 'quantity'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.TokenBlacklistOrderByRelevanceFieldEnum = {
  id: 'id',
  token: 'token',
  tokenHash: 'tokenHash'
};

exports.Prisma.TeamOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.UserOrderByRelevanceFieldEnum = {
  id: 'id',
  team_id: 'team_id',
  name: 'name',
  email: 'email',
  password: 'password',
  profile_picture: 'profile_picture'
};

exports.Prisma.RentOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id',
  identification: 'identification',
  phone: 'phone',
  notes: 'notes',
  identification_picture: 'identification_picture',
  documentation_before: 'documentation_before',
  documentation_after: 'documentation_after'
};

exports.Prisma.OrderOrderByRelevanceFieldEnum = {
  id: 'id',
  rent_id: 'rent_id',
  invoice: 'invoice'
};

exports.Prisma.ProductOrderByRelevanceFieldEnum = {
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

exports.Prisma.OrderOnProductOrderByRelevanceFieldEnum = {
  id: 'id',
  order_id: 'order_id',
  product_id: 'product_id'
};

exports.Prisma.CategoryOrderByRelevanceFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug'
};

exports.Prisma.CartOrderByRelevanceFieldEnum = {
  id: 'id',
  user_id: 'user_id'
};

exports.Prisma.CartOnItemOrderByRelevanceFieldEnum = {
  id: 'id',
  cart_id: 'cart_id',
  product_id: 'product_id'
};
exports.OrderStatus = exports.$Enums.OrderStatus = {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

exports.PaymentStatus = exports.$Enums.PaymentStatus = {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
