
const express= require('express');
const cors= require('cors');
const path= require('path');
const morgan =require('morgan');

const LaunchesRouter= require('./Routes/lauches/lauches.router');
const PlanetRouter= require('./Routes/planets/planet.router');
const app= express();

//Cors install karo and use karo
app.use(cors({
    origin:'http://localhost:3000',
}));


app.use(morgan('combined'));
app.use(express.json());


//static index.html file on server side through BUILD_PATH from client side
app.use(express.static(path.join(__dirname,'..','public')));

app.use('/planets',PlanetRouter);
app.use('/launch',LaunchesRouter);

//getting redirection
//When jab aap backend me route(endpoint jaise launch aur planets se match nhi karega koi route to
// wo '/*' react ke client folder me redirectiion karta hai '/upcoming' '/history')
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','index.html'));
})

module.exports=app;