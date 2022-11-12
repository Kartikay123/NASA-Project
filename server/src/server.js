const app= require('./app');
const http= require('http');
const PORT= process.env.PORT|| 8000;
const {LoadPlanetmodel}= require('./models/planets.model');
const server=http.createServer(app);


async function Loading()
{
    await LoadPlanetmodel();
server.listen(PORT,()=>{
    console.log(`Listening to ${PORT}...`);
})
}

Loading();