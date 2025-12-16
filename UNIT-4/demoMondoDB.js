

const mongodb = require("mongodb");
mongoClient = mongodb.MongoClient;
const uri = "mongodb://localhost:27017/";
const client = new mongoClient(uri);

async function run() {
    try{
        const database =  client.db('StudentDB');
        const courses = database.collection("students");
        const document1 = {name:"Harshit Mishra", roll_no:"2300900100062",course:"B.tech",branch:"CSE",section:"A"};
        const document2 = {name:"Izazul Haque", roll_no:"2300900100064",course:"B.tech",branch:"CSE",section:"A"};
        const document3 = {name:"Bhumi", roll_no:"2300900100046",course:"B.tech",branch:"CSE",section:"A"};
        const document4 = {name:"Anamika", roll_no:"2300900100024",course:"B.tech",branch:"CSE",section:"A"};
        const course = await courses.insertMany([document1, document2,document3,document4]);

        console.log(" documents are inserted in Collection"+courses.collectionName+" of Databases "+database.databaseName+".");

        
    }finally{
        await client.close();
    }
    
}
run().catch(err=>{console.log("Error: "+err);});