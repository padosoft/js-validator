export * from "./functions";

export class Validator {
  constructor(validator) {
    this.isValid = true;
    this.errors = [];
    this.rules = validator.rules;
    this.messages = validator.messages;
  }

  validate(data) {
    this.isValid = true;
    this.errors = [];
    Object.entries(this.rules).forEach(([idEl, validatorObj]) => {
      if (validatorObj.required) {
        if (!data.hasOwnProperty(idEl)) {
          this.errors.push({ ref: idEl, message: `${idEl} è richiesto.` });
          return;
        }
      }
      if (data.hasOwnProperty(idEl)) {
        if (!validatorObj.rule(data[idEl])) {
          this.errors.push({ ref: idEl, message: this.messages[idEl] });
        }
      }
    });
    if (this.errors.length > 0) {
      this.isValid = false;
    }
  }

  hasValidData() {
    return this.isValid;
  }

  getErrorsMessages() {
    return this.errors;
  }
}
