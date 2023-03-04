function cityTaxes(name, population, treasury) {

    const cityObj = {

        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate)
        },
        applyGrowth(percentage) {
            this.population *= 1 + (percentage/100)
        },
        applyRecession(percentage) {
            this.treasury *= 1 - (percentage/100)
        },
    }
    
    return cityObj
}

const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);



