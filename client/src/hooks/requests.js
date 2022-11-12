const APU_key= 'http://localhost:8000';
async function httpGetPlanets() {

  const response= await fetch(`${APU_key}/planets`);
  return await response.json();
  // TODO: Once API is ready.
  // Load planets and return as JSON.
}

async function httpGetLaunches() {
  const res= await fetch(`${APU_key}/launch`);
  const response = await res.json();
  return response.sort((a,b)=>{
    return a.flightNumber- b.flightNumber;
  }) ;
  console.log(res);
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
}

async function httpSubmitLaunch(launch) {
  try
  {
    return await fetch(`${APU_key}/launch`,{
      method:"post",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launch),
      
    })
  }catch(err)
  {
    return{
    ok:false,
    }
  }
  
  
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};