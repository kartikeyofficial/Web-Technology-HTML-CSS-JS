const mongodb = require("mongodb");
mongoClient = mongodb.MongoClient;
const uri =  "mongodb://localhost:27017/";
const client = new mongoClient(uri);

async function run(){
    try{
    const database = client.db("EmployeeDB");
    const employee = database.collection("Employee");
    let result = await employee.deleteOne({name:"Aman Kumar"});
     result = await employee.deleteMany({name: "Aman Kumar"});
    }

    finally{
        client.close();
    }

}
run().catch(err=>{console.log("Error: "+err);});