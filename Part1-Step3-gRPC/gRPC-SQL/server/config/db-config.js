const connectionString = 'postgresql://teamLamda:teamLamda@localhost:5432/todo-work'
const { Pool } = require('pg')

//connection with sql
const client = new Pool({
    connectionString: connectionString,
})
client.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("DataBase Has been Successfully Connected!");
    }
});

module.exports = client