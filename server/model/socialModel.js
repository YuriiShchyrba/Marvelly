const {Pool} = require('pg');

const PG_URI = 'postgres://nvjjxdsi:uzQarEYDxnA7-le-PqC6qX-5dPGpCLbz@castor.db.elephantsql.com/nvjjxdsi';

const pool = new Pool({
    connectionString: PG_URI
});

module.exports = {
    query: (text,params,callback) => {
        return pool.query(text,params,callback);
    }
};