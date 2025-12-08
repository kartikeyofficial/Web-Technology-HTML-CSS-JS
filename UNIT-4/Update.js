const mongodb = require("mongodb");
mongoClient = mongodb.MongoClient;
const uri =  "mongodb://localhost:27017/";
const client = new mongoClient(uri);

async function run(){
  try{
    const database = client.db("EmployeeDB");
    const employee = database.collection("Employee");
    
    let result = await employee.updateOne(
        {name:"Aman Kumar"},
        {$set:{salary:60000}}
      )
      result = await employee.updateMany({name:"Kumar Kartikey"},
        {$set:{salary:120000}}
      );
   
    }
    finally{
      client.close();
    }
    

}
run().catch(err=>{console.log("Error: "+err);});