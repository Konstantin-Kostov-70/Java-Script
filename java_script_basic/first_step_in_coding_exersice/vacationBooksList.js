function vacationBooksList(input){
    let allPages = Number(input[0]);
    let pagesRead = Number(input[1]);
    let numOfDays = Number(input[2]);
    
    let result = (allPages / pagesRead) / numOfDays;
    console.log(result);
}

vacationBooksList(["212 ", "20 ", "2 "]);