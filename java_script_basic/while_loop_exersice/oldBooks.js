function books(input) {
    let searchBook = input[0];
    let index = 1;

    while (true) {
        let book = input[index];

        if (book === searchBook) {
            console.log(`You checked ${index - 1} books and found it.`);
            break;

        } else if (book === "No More Books") {

            console.log("The book you search is not here!");
            console.log(`You checked ${index - 1} books.`);
            break;
        }

        index++;
    }
}

books(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])
