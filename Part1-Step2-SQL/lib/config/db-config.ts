const connectionString = 'postgresql://teamLamda:teamLamda@localhost:5432/todo-work'
import {Pool} from 'pg';
//connection with sql
const client = new Pool({
    connectionString: connectionString,
  })
  client.connect((err)=>{
      if(err){
          console.log(err);
      }
      else{
          console.log(" DataBase Has been Successfully Connected!");
      }
  });
  
//export
export default client;