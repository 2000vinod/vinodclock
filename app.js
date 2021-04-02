const express=require("express");
const path=require("path");
const app=express();
const bodyparser=require("body-parser");

// express specific stuff
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded())

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (req, res)=>{
   
    res.status(200).render('index.pug');
  
})

// START THE SERVER
// const port=process.env.PORT ||3000;
const port=process.env.PORT ;
app.listen(port, () => {
    console.log(`Server running at :${port}`);
  });