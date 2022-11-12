const express= require('express');

const {httpgetAllPlanets} =require('./planet.controller');
const PlanetRouter= express.Router();

PlanetRouter.get('/',httpgetAllPlanets);

module.exports=PlanetRouter;