const {getAllLauch,AddnewLauch}= require('../../models/lauches.model');

function httpgetAllLauch(req,res)
{
   // console.log("launches controller",getAllLauch());
   return  res.status(200).json(getAllLauch());
}

function httpAddnewLauch(req,res)
{
   const launch = req.body;
   if(!launch.mission|| !launch.target || !launch.launchDate || !launch.rocket)
   {
      return res.status(400).json({
         error: 'Some input data is missing',
      })
   }
   launch.launchDate= new Date(launch.launchDate);
   // if(launch.launch_date.toString()==='Invalid Date')
   if(isNaN(launch.launchDate))
   {
      return res.status(400).json({
         error: 'Invalid entered date',
      })
   }
   console.log(launch)
   AddnewLauch(launch);
   return res.status(201).json(launch);
}
module.exports={
   httpgetAllLauch,
   httpAddnewLauch,
}