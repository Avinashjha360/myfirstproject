const fs=require('fs');
const express=require('express');
const app=express();
const home=fs.readFileSync('./index.html');
const payment=fs.readFileSync('./payment.html');
const contact=fs.readFileSync('./contact.html');

const port=900;

app.use(express.urlencoded());
app.use('/static',express.static('static'));

app.get("/",(req,res) =>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(home);
})
app.get("/zpay.html",(req,res) =>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(home);
})
app.get("/payment.html",(req,res) =>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(payment);
})
app.get("/contact.html",(req,res) =>{
    res.setHeader('Content-Type','text/html');
    res.status(200).send(contact);
})

app.listen(port,() => {
    console.log(`Server running at ${port}`);
})
