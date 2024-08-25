const mongoose = require('mongoose')

mongoose.connect('mongodb://mongo/basededatos')
    .then(db => console.log('BDD esta conectada a'. db.connection.host))
    .catch(err => console.error(err));