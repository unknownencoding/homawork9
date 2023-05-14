// // 2. Користувач вводить кількість елементів. 
// // Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.



// //заповн 2ї пол-ни
// //
// //отримати кільк ел-в
// let quantityElements = parseInt(prompt(`введіть кількість елементів масиву`))
// //ф-я для розлілення на 2 частини
// function getHalfOfArr(x) {
//   return  Math.round(x/2);
// }
// //половина заповнена
//  let firstHalf = getHalfOfArr(quantityElements)
// // document.write(`${firstHalf}`)

// //заповненя 1ї половини
// let arr=[]
// for (let i = 0; i < firstHalf; i++) {
//     arr.push(1)
// }
// //заповненя 1ї половини
// for (let i = firstHalf; i < quantityElements; i++) {
//   arr.push(7)  
// }
// document.write(arr)

// //працює!!!