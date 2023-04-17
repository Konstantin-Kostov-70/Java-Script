// function contextPrinter() {
//     console.log(this)
// }

// contextPrinter()
// result = global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}

// *****************************************************************************************************

// function myFunction() {   
// contextPrinter()
// }

//*******************************************************************************************************

// myFunction()
// result = global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}

//********************************************************************************************************

// const myObj = {
//     name: 'Peter', 
//     age: 13,
//     contextPrinter
// }
// myObj.contextPrinter()
// result = {name: 'Peter', age: 13, contextPrinter: ƒ}

// const extractFunction = myObj.contextPrinter

// extractFunction()


// const btn = document.querySelector('button')
// btn.addEventListener('click', myObj.contextPrinter)

//******************************************************************************************************

// function contextPrinter() {
//     console.log(this)
// }
// const myObj = {
//     name: 'Peter', 
//     age: 13,
// }

// const otherObj = {
//     width: 5,
//     height: 6
// }

// contextPrinter.apply(myObj)
// contextPrinter.call(otherObj)

// result = {name: 'Peter', age: 13}
// result = {width: 5, height: 6}

// **************************************************************************************************
//                                        Inner Method context                                        
// function contextPrinter(a, b, ev) {
//     console.log(this)
//     console.log(ev)
// }

// const myObj = {
//     name: 'Peter', 
//     age: 13,
// }

// const boundFunc = contextPrinter.bind(myObj, 5, 6)


// const btn = document.querySelector('button')
// btn.addEventListener('click', boundFunc)

// ***************************************************************************************************

// function myFunc() {
//     console.log('outer', this)

//     contextPrinter()

//     function contextPrinter() {
//         console.log('inner', this)
//     }
// }

// const myObj = {
//     name: 'Peter',
//     myFunc
// }

// myObj.myFunc()

// result :
// outer {name: 'Peter', myFunc: ƒ}
// inner global {global: global, clearInterval: ƒ, clearTimeout: ƒ, setInterval: ƒ, setTimeout: ƒ, …}

// *******************************************************************************************************
//                                    Arrow function context
// function myFunc() {
//     console.log('outer', this)

//     const  contextPrinter = ()  => {
//         console.log('inner', this)
//     }

//     contextPrinter()
// }

// const myObj = {
//     name: 'Peter',
//     myFunc
// }

// myObj.myFunc()

// result:
// outer {name: 'Peter', myFunc: ƒ}
// outer {name: 'Peter', myFunc: ƒ}





