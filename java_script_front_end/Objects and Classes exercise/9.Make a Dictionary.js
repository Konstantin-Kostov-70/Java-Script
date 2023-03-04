function solve(jsonText){
   let myObj = {};
    for (let element of jsonText) {

       let obj = (JSON.parse(element));
       let key = Object.keys(obj)[0];
       myObj[key] = obj[key];

   }
   
   let sortedKeys = Object.keys(myObj).sort((a, b) => a.localeCompare(b))
   sortedKeys.forEach(key => {
   console.log(`Term: ${key} => Definition: ${myObj[key]}`)
   })
   
}

solve([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
    )