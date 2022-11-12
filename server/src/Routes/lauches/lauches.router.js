const express= require('express');

const {httpgetAllLauch,httpAddnewLauch}= require('./lauches.controller');

const LaunchesRouter= express.Router();

LaunchesRouter.get('/',httpgetAllLauch);
LaunchesRouter.post('/',httpAddnewLauch);


module.exports=LaunchesRouter;