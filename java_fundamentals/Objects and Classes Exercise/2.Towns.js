function solve (input) {
    let towns = {};
    for (let el of input) {
        let townsInfo = el.split(' | ');
        towns.town = townsInfo[0];
        towns.latitude = Number(townsInfo[1]).toFixed(2).toString();
        towns.longitude = Number(townsInfo[2]).toFixed(2).toString();

        console.log(towns)
    }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)