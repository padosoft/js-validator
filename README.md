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
<script src="dist/padosoft-frontend-tools.js"></script>
[...]
<script>
    console.log(padosoftValidator.Validator);
</script>
```

## Validator

Il Validator è la classe con la quale si possono effettuare le validazioni.
Per istanziarla si deve passare, come parametro, un oggeto con le regole e i messaggi d'errore.
```javascript

```

## Funzioni

### ***roundWithDecimal(value, decimal)***