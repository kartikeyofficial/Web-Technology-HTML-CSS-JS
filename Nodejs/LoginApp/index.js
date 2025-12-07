let express= require('express');
let bodyParse = require('body-parser');
let path = require('path');

let app = express();

app.use(bodyParse.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'login.html'));
});

app.post('/login',(req,res)=>{
  let username = req.body.username;
  let password = req.body.password;
    if (username === "admin" && password === "123") {
      res.send("You Have Sucessfully Logged in.");
    } else {
      res.send("Invalid Username and Password");
    }
});
app.listen(3000,()=>{
    console.log("Server running at http://localhost:3000")
})


