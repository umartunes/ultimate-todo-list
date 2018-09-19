"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connectionString = 'postgresql://teamLamda:teamLamda@localhost:5432/todo-work';
const pg_1 = require("pg");
//connection with sql
const client = new pg_1.Pool({
    connectionString: connectionString,
});
client.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(" DataBase Has been Successfully Connected!");
    }
});
//export
exports.default = client;
//# sourceMappingURL=db-config.js.map