function suppliesForSchool(input){
    let pen = 5.80;
    let marker = 7.20;
    let cleaner = 1.20;

    let numPen = Number(input[0]);
    let numMarker = Number(input[1]);
    let numCleaner = Number(input[2]);
    let percent = Number(input[3]) / 100;

    let totalSum = pen * numPen + marker * numMarker + cleaner * numCleaner
    let discount = totalSum * percent
    console.log(totalSum - discount)
}

suppliesForSchool(["2 ", "3 ", "4 ", "25 "]);