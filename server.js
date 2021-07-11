const fs=require('fs');
const express=require('express');
const app=express();
const home=fs.readFileSync('./inde.html');
const payment=fs.readFileSync('./paymen.html');
const contact=fs.readFileSync('./contac.html');

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
