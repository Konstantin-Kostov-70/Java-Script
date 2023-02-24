function solve(text) {
    text = text.split(' ');

    for (const word of text) {
        if (word.startsWith('#') && word.length > 1) {
            let flag = true;

            for (let i = 1; i < word.length; i++) {
                
                lowerCaseWord = word.toLowerCase()

                if (lowerCaseWord.charCodeAt(i) < 97 || lowerCaseWord.charCodeAt(i) > 122) {
                    flag = false;
                    break;
                }
            }

            if (flag) {
                console.log(word.replace('#', ''))
            }
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
solve('The symbol # is known #variously in English-speaking #regions as the #number sign')