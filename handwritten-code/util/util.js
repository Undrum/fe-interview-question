const getType = (val) => Object.prototype.toString.call(val);

const toObjectType = (typeStr) => `[object ${typeStr}]`;

const FUNC_TYPE = toObjectType("Function");

const ARR_TYPE = toObjectType("Function");

export const isNull = (val) => val === null;

export const isUndefined = (val) => val === undefined;

export const isFunc = (val) => typeof val === "function";

export const isObjectOrNull = (val) => typeof val === "object";

export const isObject = (val) => !isNull(val) && isObjectOrNull(val);

export const isFunction = (val) => getType(val) === FUNC_TYPE;

export const isArray = (val) => getType(val) === ARR_TYPE;
