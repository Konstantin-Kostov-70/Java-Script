function word(input){
    let index = 0;
    let command = input[index];
    let vocal = ['a', 'e', 'i', 'o', 'u', 'y']
    let maxLetterSum = 0;
    let maxWord = '';

    while(command !== "End of words"){
        let letterSum = 0;
        let word = command;

        for (let wordIdx = 0; wordIdx < word.length; wordIdx ++){
            let char = word.charCodeAt(wordIdx);
            letterSum += char;
        }
        
        let lowerLeter = word[0].toLowerCase()

        if (vocal.includes(lowerLeter)){
            letterSum *= word.length;
        } else {
            letterSum = Math.floor(letterSum / word.length);
        }

        if (letterSum > maxLetterSum){
            maxLetterSum = letterSum;
            maxWord = word
        }

        index ++;
        command = input[index]
    }

    console.log(`The most powerful word is ${maxWord} - ${maxLetterSum}`)
}

word(["But",
"Some",
"People",
"Say",
"It's",
"LOVE",
"End of words"])
