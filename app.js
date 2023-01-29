const express = require("express");
const app = express();

app.set("view engine" , "ejs");
app.use(express.static("public"));

app.get("/" , function(req , res){
    res.render("summary");
});

app.get("/customer" , function(req , res){
    res.render("customer");
});

app.get("/payment" , function(req , res){
    res.render("payment");
});

app.get("/success" , function(req , res){
    res.render("success");
});

app.get("/failure" , function(req , res){
    res.render("failure");
});

let port = process.env.PORT;
if (port == null || port==""){
  port = 3000;
}
app.listen(port, function(){
    console.log("server is up and running");
});