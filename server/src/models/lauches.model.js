
const Launches= new Map();
// map contians key value pair here key is flightno. ans value is Lauch object
let NewFlightNumber=100;
const Lauch={
    flightNumber:100,
    mission: 'Kepler-Exploration X',
    rocket: 'Expplorer-IS1',
    launchDate: new Date('December 27',2030),
    target:'Kepler-442 b',
    customer:['ZTM','NASA'],
    upcoming: true,
    success: true,

};
Launches.set(Lauch.flightNumber,Lauch);

function getAllLauch()
{
   // console.log("HELOLO",Array.from(Launches.values()))
   return Array.from(Launches.values());
}

function AddnewLauch(Lauch)
{
    NewFlightNumber++;
    Launches.set(NewFlightNumber,Object.assign(Lauch,{
        success:true,
        upcoming:true,
        customer:['Zero','Hero'],
        flightNumber:NewFlightNumber,
    })
    );
    // console.log(Launches)
}

module.exports={
    getAllLauch,
    AddnewLauch,
}
