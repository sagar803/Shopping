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
app.listen(3000, function(){
    console.log("server is up and running")
});