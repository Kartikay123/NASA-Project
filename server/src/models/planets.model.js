//creating the promise 

const { parse } = require('csv-parse');
const fs = require('fs');
const path = require('path');
const result2 = [];


function ischeck(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
}

function LoadPlanetmodel() 
{
    return new Promise((resolve, reject) => 
    {
        fs.createReadStream(path.join(__dirname, '..', 'data', 'kepler_data.csv'))
            .pipe(parse
            ({
                //comment ignore the line startin with '#'
                comment: '#',

                //colunms arrange the object in key value.
                columns: true,
            }))
            .on('data', (data) => 
            {
                if (ischeck(data))
                    result2.push(data);
            })
            .on('error', (err) => 
            {
                console.log(err);
                reject(err);
            })
            .on('end', () => 
            {
                console.log(`${result2.length} is the number of planet we found!`);
                resolve();
            });


       
    })
}

function getAllplanets()
{
    return result2;
}
module.exports = {
    LoadPlanetmodel,
    getAllplanets,
}