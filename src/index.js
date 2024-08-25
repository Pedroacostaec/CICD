const express = require('express')

const app = express();

require('./datebase');

app.use(require('.src/index.routes'));

app.listen(4000);
console.log('Servidor en el puerto', 4000);