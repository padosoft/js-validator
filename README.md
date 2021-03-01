# Padosoft Validator

Si tratta di un pacchetto javascript per la validazione dei dati.

Per installarlo:
```javascript
npm i @padosoft/validator --save
```

Per utilizzarlo sono possibili i tre approcci commonJS, AMD, o con lo script:

CommonJs

```javascript
const Validator = require("@padosoft/validator").Validator;
const isEmail = require("@padosoft/validator").isEmail;
```

AMD

```javascript
import { Validator, isEmail } from "@padosoft/validator";
```

Per l'uso da script è consigliabile copiare il file dalla cartella node_modules in una a scelta. Una volta incluso sarà presente un oggetto globale 'padosoftValidator' con il quale richiamare le funzioni.

```javascript
<script src="dist/padosoft-validator.js"></script>
[...]
<script>
    var validator = new padosoftValidator.Validator({
      rules: {
        recipient: {
          required: false,
          rule: (value) => {
            return padosoftValidator.isEmail(value);
          },
        },
      },
      messages: {
        recipient: "L'email non è valida.",
      },
    });
    validator.validate({
        recipient: "cogito@ergo.eu",
      });
    if(!validator.hasValidData()){
        const errors = validator.getErrorsMessage();
        console.log("Errori", errors);
    }
</script>
```

## Validator

Il Validator è la classe con la quale si possono effettuare le validazioni.
Per istanziarla si deve passare, come parametro, un oggetto con le regole e i messaggi d'errore.
```javascript

/*
 Questo è l'oggetto con le regole ed i messaggi d'errore. Le regole devono essere passate come oggetti con la proprietà required, che può avere valori true o false, e una funzione che verificherà la validità del dato. Come helpers ci sono delle funzioni che possono semplificare la validazione.
 Sia negli oggetti rulesm che nei messages, sono presenti proprietà che rappresentano il valore da vertificare. Il nome di quella proprietà è usato come riferimento ovunque: sia quando si passano i dati che quando si recuperano gli errori.
*/
const rules = {
  rules: {
    numero: {
      required: true,
      rule: (value) => {
        return isNumber(value);
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
    numero: "È obbligatorio e deve essere un numero.",
    recipient: "L'email non è valida.",
  },
};
// Istanziazione dell'oggetto
const validator = new Validator(rules);
// Passo i dati da validare alla funzione validate()
validator.validate({
    numero: 5,
    recipient: "cogito@ergo.eu",
  });
// Verifico se i dati sono validi e se non lo sono recupero gli errori.
if(!validator.hasValidData()){
    const errors = validator.getErrorsMessage();
    console.log("Errori", errors);
}

```

## Funzioni

### ***isNumber(value)***

Verifica che il valore sia  di tipo numerico.


### ***isInteger(value)***

Verifica che il valore sia di tipo intero.


### ***isEmail(value)***

Verifica che il valore sia un'email.


### ***isFunction(value)***

Verifica che il valore sia una funzione.


### ***isBoolean(value)***

Verifica che il valore sia un booleano.


### ***isObject(value)***

Verifica che il valore sia un oggetto.


### ***isDate(value)***

Verifica che il valore sia una oggetto di tipo Date.


### ***isDefined(value)***

Verifica che il valore sia definito, cioè non 'undefined'.


### ***isString(value)***

Verifica che il valore sia di tipo stringa.


### ***isArray(value)***

Verifica che il valore sia un array.