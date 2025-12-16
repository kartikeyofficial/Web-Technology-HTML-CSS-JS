const mongodb = require("mongodb");
mongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017/" ;
const client = new mongoClient(uri);

async function run(){
   try{
    const database = client.db("EmployeeDB");
    const employee = database.collection("Employee");
    
    let result
    result = await employee.find({},
        {projection:{_id:0, name:1,id:1 ,salary:1}}
    ).sort({salary:1}).toArray();
   }



   finally{
    await client.close();
}
}
run().catch(err=>{console.log("Error: "+err);});
