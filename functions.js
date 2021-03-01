export function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// Returns false if the object is not a function
export function isFunction(value) {
  return typeof value === "function";
}

// A simple check to verify that the value is an integer. Uses `isNumber`
// and a simple modulo check.
export function isInteger(value) {
  return v.isNumber(value) && value % 1 === 0;
}

// Checks if the value is a boolean
export function isBoolean(value) {
  return typeof value === "boolean";
}

// Uses the `Object` function to check if the given argument is an object.
export function isObject(obj) {
  return obj === Object(obj);
}

// Simply checks if the object is an instance of a date
export function isDate(obj) {
  return obj instanceof Date;
}

// Returns false if the object is `null` of `undefined`
export function isDefined(obj) {
  return obj !== null && obj !== undefined;
}

export function isString(value) {
  return typeof value === "string";
}

export function isArray(value) {
  return {}.toString.call(value) === "[object Array]";
}

export function isEmail(value) {
  if (!isDefined(value)) {
    return false;
  }

  if (!isString(value)) {
    return false;
  }

  const emailPattern = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;

  if (!emailPattern.exec(value)) {
    return false;
  }

  return true;
}
