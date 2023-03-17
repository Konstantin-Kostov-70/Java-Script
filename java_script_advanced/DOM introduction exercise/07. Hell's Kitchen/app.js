function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);
   const data = document.querySelector('#inputs textarea');
   const bestRest = document.querySelector('#bestRestaurant span');
   const bestWorkers = document.querySelector('#workers span');

   function onClick () {
        let arr = JSON.parse(data.value);
        let restaurants = {};
        let bestAverage = 0
        let bestRestaurant = ''
        let bestSalary = 0
       
      for (let currentData of arr) {
         currentData = currentData.split(', ');
         let [restaurant, firstWorker ] = currentData.shift().split(' - ');
         let[firstWorkerName, firstWorkerSalary] = firstWorker.split(' ');

         restaurants[restaurant] = [];

         restaurants[restaurant].push
         ({
            name: firstWorkerName,
            salary: Number(firstWorkerSalary)
         });
         
         for(worker of currentData) {
            let [name, salary] = worker.split(' '); 
            restaurants[restaurant].push
            ({
               name: name,
               salary: Number(salary)
            });
         }
      }
      
      for (let restaurant in restaurants) {
         let currentSum = 0
         let currentAverage = 0
          for (worker of restaurants[restaurant]) {
               currentSum += worker.salary

          }
          currentAverage = currentSum / restaurants[restaurant].length
          if (currentAverage > bestAverage) {
            bestAverage = currentAverage
            bestRestaurant = restaurant
          }
      }
      
      for (worker of restaurants[bestRestaurant]) {
          if (worker.salary > bestSalary) {
            bestSalary = worker.salary
          }
      }
      
      bestRest.textContent = `Name: ${bestRestaurant} Average Salary: ${bestAverage.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`
      let sortedRestaurant = restaurants[bestRestaurant].sort((a, b) => b.salary - a.salary)
      for (worker of sortedRestaurant) {
         bestWorkers.textContent += `Name: ${worker.name} With Salary: ${worker.salary}`+ ' '
      }
   }
}