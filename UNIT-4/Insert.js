const mongodb = require("mongodb");
mongoClient = mongodb.MongoClient;
const uri =  "mongodb://localhost:27017/";
const client = new mongoClient(uri);

async function run(){
  try{
    const database = client.db("EmployeeDB");
    const employee = database.collection("Employee");
    let result = await employee.insertOne({name:"Aman Kumar",id:"01", salary:"30000"});

    result = await employee.insertMany([
      { name: "Kumar Kartikey", id: "02", salary: "100000" },
      { name: "Rohit Singh", id: "03", salary: "60000" },
      { name: "Ujjwal Yadav", id: "04", salary: "40000" },
      { name: "Aditya Singh", id: "05", salary: "70000" },
      { name: "Izazul Haque", id: "06", salary: "20000" },
      { name: "Harshit Mishra", id: "07", salary: "30000" },
      { name: "Bhumi", id: "08", salary: "100000" }
      ]);
    }
    finally{
      client.close();
    }
}
run().catch(err=>{console.log("Error: "+err);});