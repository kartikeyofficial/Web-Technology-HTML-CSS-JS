let fs = require("fs");

function myFileCallBack(err,data){
    if(err){
        console.log("Error in reading the file");
    }
    else{
        console.log(data.toString());
    }
}
fs.readFile("myfile.txt",myFileCallBack)

for(i=0; i<10;i++){
    console.log(i+",")
}