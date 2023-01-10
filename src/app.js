const express =require("express");
const app =express();
const hbs =require("hbs");
const port = process.env.PORT || 3000;
const path =require("path");


const staticPath= path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partialPath =path.join(__dirname,"../templates/partials");


app.set('view engine','hbs');
app.set('views',templatePath);
hbs.registerPartials(partialPath)
console.log(templatePath);

app.use(express.static(staticPath))
//routing
  app.get("",(req,res)=>{
  res.render("index")    
})
  app.get("/about",(req,res)=>{
    res.render('about')  
 })
 
 app.get("/weather",(req,res)=>{
      res.render('weather')  
})

       app.get("*",(req,res)=>{
            res.render('404error',{
              errMsg:"Opps Page not found"
            }) 
            })       

app.listen(port,()=>{
    console.log(`your server is listerning at port no ${port}`);
})