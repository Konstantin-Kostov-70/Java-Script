function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const data = document.querySelector('#inputs textarea');
   const bestRest = document.querySelector('#bestRestaurant p');
   const bestWorkers = document.querySelector('#workers p');

   function onClick () {
        let arr = JSON.parse(data.value);
        let restaurants = {};
        let bestAverage = 0
        let bestRestaurant = ''
        let bestSalary = 0
       
      for (let currentData of arr) {
         currentData = currentData.split(' - ');
         let restaurant = currentData[0];
         let workersArray = currentData[1].split(', ')
         let workers = [];
         
         for(let worker of workersArray) {
            let [name, salary] = worker.split(' '); 
            workers.push
            ({
               name: name,
               salary: Number(salary)
            });
         }

         if (restaurants[restaurant]) {
            workers = workers.concat(restaurants[restaurant].workers)
         }
         
         workers.sort((a, b) => b.salary - a.salary)

         let average = workers
         .reduce((acc, c) => acc + c.salary, 0) / workers.length

         let bestWorkerSalary = workers[0].salary

         restaurants[restaurant] = {
            workers,
            average,
            bestWorkerSalary
         }
      }
      
      for (let name in restaurants) {
         if(restaurants[name].average > bestAverage) {
            bestRestaurant = name
            bestAverage = restaurants[name].average
            bestSalary = restaurants[name].bestWorkerSalary
         }
      } 
      bestRest.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverage.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`

      for (worker of restaurants[bestRestaurant].workers) {
         bestWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `
      }
   }
}