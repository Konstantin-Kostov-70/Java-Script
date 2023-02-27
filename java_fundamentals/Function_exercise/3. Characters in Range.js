function solve(char1, char2) {
   let start = char1.charCodeAt(0)
   let end = char2.charCodeAt(0)
   let character = []

   if (start > end) {
      start = char2.charCodeAt(0) 
      end = char1.charCodeAt(0)
   }

   for (let index = start + 1; index < end; index++) {
        character.push(String.fromCharCode(index))
   }

   return character.join(' ')

}

console.log(solve('C','#'))