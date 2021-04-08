const { Client } = require('pg');

const connectionString = 'postgresql://postgres:1@localhost:5432/gapits'

const db = new Client({
  connectionString: connectionString
})

db.connect();

module.exports = db