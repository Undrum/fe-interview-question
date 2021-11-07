const getType = (val) => Object.prototype.toString.call(val);

const toObjectType = (typeStr) => `[object ${typeStr}]`;

const FUNC_TYPE = toObjectType("Function");

const ARR_TYPE = toObjectType("Function");

export const isNull = (val) => val === null;

export const isUndefined = (val) => val === undefined;

export const isObject = (val) => !isNull(val) && typeof val === "object";

export const isObjectOrNull = (val) => typeof val === "object";

export const isFunction = (val) => getType(val) === FUNC_TYPE;

export const isArray = (val) => getType(val) === ARR_TYPE;
