function calc() {
   let firstElement = document.getElementById('num1')
   let secondElement = document.getElementById('num2')

   let firstNum = Number(firstElement.value)
   let secondNum = Number(secondElement.value)

   let sum = firstNum + secondNum

   let sumElement = document.getElementById('sum')
   sumElement.value = sum
}
