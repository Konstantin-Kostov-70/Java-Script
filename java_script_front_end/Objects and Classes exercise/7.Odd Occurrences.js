function solve(text) {
    let oddCount = [];
    text = text.split(' ').map(element => element.toLowerCase());

    text.forEach(searchElement => {
        let count = text.filter(currentElement => currentElement === searchElement).length

        if (count % 2 !== 0 && !oddCount.includes(searchElement)){
           oddCount.push(searchElement)
        }
    });

    console.log(oddCount.join(' '));
    
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')

console.log('--------------------------')

solve ('Cake IS SWEET is Soft CAKE sweet Food')