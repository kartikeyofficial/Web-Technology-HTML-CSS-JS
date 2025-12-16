const mongodb = require("mongodb");
mongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new mongoClient(uri);

async function run(){
    try{
        const database= client.db("CarsDB");
        const cars = database.collection("Cars");
        let result;
        // result = await cars.insertOne({name:"Mersadies", no:"UP-18-GF-2986"});
        // result = await cars.insertMany([
        //   { name: "BMW", no: "UP-79-AB-0001", Price: "80,000,00" },
        //   { name: "Lamborghini", no: "UP-79-AB-0002", Price: "800,000,00" },
        //   { name: "Rolls Royce", no: "UP-79-AB-0007", Price: "900,000,00" },
        // ]);


        // result = await cars.updateOne({name:"Mersadies"},
        // {$set:{Price:"70,000,00"}}
        // );

        result = await cars.find({name:"Rolls Royce"},
            {projection:{_id:0,name:1,no:1,Price:1}}
        ).toArray();
  console.log("Projection Document:",result);

    }
    finally{
        client.close();
    }
}
run().catch(err=>{console.log("Error: "+err);});