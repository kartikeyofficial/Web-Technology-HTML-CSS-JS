const mongodb = require("mongodb");
mongoClient = mongodb.MongoClient;
const uri =  "mongodb://localhost:27017/";
const client = new mongoClient(uri);

async function run(){
  try{
    const database = client.db("EmployeeDB");
    const employee = database.collection("Female_Employee");
    let result = await employee.insertOne({name:"Anamika",id:"01", salary:"30000"});

    result = await employee.insertMany([
      { name: "Kartika", id: "02", salary: "100000" },
      { name: "Harshita", id: "03", salary: "60000" },
      { name: "Archita", id: "04", salary: "40000" },
      { name: "Sadie Sink", id: "05", salary: "70000" },
      { name: "Ana De Armas", id: "06", salary: "20000" },
      { name: "Jenna Ortega", id: "07", salary: "30000" },
      { name: "Emma Watson", id: "08", salary: "100000" }
      ]);

      result = await employee.aggregate([
        {
          $lookup:{
            from:"Employee",
            localField:"id",
            foreignField: "id",
            as:"JoinEmployee",
          },
        },

      ]).toArray();
    }
    finally{
      client.close();
    }
}
run().catch(err=>{console.log("Error: "+err);});