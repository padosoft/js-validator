const Validator = require("../dist/padosoft-validator").Validator;
const isNumber = require("../dist/padosoft-validator").isNumber;
const isFunction = require("../dist/padosoft-validator").isFunction;
const isInteger = require("../dist/padosoft-validator").isInteger;
const isBoolean = require("../dist/padosoft-validator").isBoolean;
const isObject = require("../dist/padosoft-validator").isObject;
const isDate = require("../dist/padosoft-validator").isDate;
const isDefined = require("../dist/padosoft-validator").isDefined;
const isEmail = require("../dist/padosoft-validator").isEmail;

const rules = {
  rules: {
    numero: {
      required: true,
      rule: (value) => {
        return isNumber(value);
      },
    },
    stringa: {
      required: true,
      rule: (value) => {
        return true;
      },
    },
    recipient: {
      required: false,
      rule: (value) => {
        return isEmail(value);
      },
    },
  },
  messages: {
    numero: "È obbligatorio e deve essere un unmero.",
    stringa: "È obbligatorio e deve essere un unmero.",
    recipient: "L'email non è valida.",
  },
};

test("valid data", () => {
  const validator = new Validator(rules);
  validator.validate({
    numero: 5,
    stringa: "genoveffa",
    recipient: "cogito@ergo.eu",
  });
  expect(validator.hasValidData()).toBe(true);
});

test("Not valid data", () => {
  const validator = new Validator(rules);
  validator.validate({
    numero: "frallo",
    stringa: 121,
  });
  expect(validator.hasValidData()).toBe(false);
});

test("Not valid with errors number", () => {
  const validator = new Validator(rules);
  validator.validate({
    numero: "frallo",
    stringa: "Pippo Franco",
  });
  const errors = validator.getErrorsMessages();
  expect(errors[0]).toStrictEqual({
    ref: "numero",
    message: "È obbligatorio e deve essere un unmero.",
  });
});

test("Not valid with errors email", () => {
  const validator = new Validator(rules);
  validator.validate({
    numero: 6.56,
    stringa: "Pippo Franco",
    recipient: "lkjhlskdfjskld",
  });
  const errors = validator.getErrorsMessages();
  expect(errors[0]).toStrictEqual({
    ref: "recipient",
    message: "L'email non è valida.",
  });
});
