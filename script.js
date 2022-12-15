// Урок 4. Циклы и массивы
// 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число



// for (let i = 0; i <= 10; i++) {
//     if (i > 0 && i % 2 === 0) {
//         console.log(`${i} - четное число`);
//     }
//     else if (i > 0 && i % 2 > 0) {
//         console.log(`${i} - нечетное число`);
//     }
//     else if (i === 0) {
//         console.log(`${i} - это ноль`);
//     }
// }


//-----------------------------------------------------------------------------

// 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]



// const arr = [1, 2, 3, 4, 5, 6, 7];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (element !== 4 && element !== 5) {
//         newArr.push(element);
//     }
//     else {
//         continue;
//     }  
// }
// console.log(newArr);



// ------------------------------------------------------------------------------

// 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, 
// и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3


// const lengthArr = 5;
// const newArr = [];
// let sumArr = 0;

// for (let i = 0; i < lengthArr; i++) {
//     const element = Math.floor(Math.random() * 10); 
//     newArr.push(element);
// }
// console.log(newArr);

// for (let i = 0; i < newArr.length; i++) {
//     sumArr = sumArr + newArr[i];  
// }
// console.log(`Сумма элементов этого массива - ${sumArr}`);


// let minElementArray = newArr[0];
// for (let k = 1; k < newArr.length; k++) {
//     if (newArr[k] < minElementArray){
//         minElementArray = newArr[k];
//     }
//     else {
//         continue;
//     } 
// }
// console.log(minElementArray);


// function numberSearch (array) {
//     if (array.indexOf(3) >= 0) {
//         console.log(`В массиве есть цифра 3`);
//     }
//     else {
//         console.log(`В массиве нет цифры 3`);
//     }
// }
// numberSearch(newArr);




// ---------------------------------------------------------------------------
// 4
// Пусть у нас дан массив состоящий из 10 элементов с произвольными числами. 
// Давайте переберем его циклом и числа, которые делятся на 2, 
// возведем в квадрат и выведем в консоль, а числа, которые делятся на 3, 
// возведем в куб и выведем в консоль.



// const newArr = [];
// for (let i = 0; i < 10; i++) {
//     const element = Math.floor(Math.random() * 30);
//     newArr.push(element);
// }
// console.log(newArr);

// function degreeArray(array) {
//     const newDegreeArr = [];
//     for (let i = 0; i < array.length; i++) {
//         const element = array[i];
//         if (element % 2 === 0) {
//             newDegreeArr.push(element ** 2);
//         }
//         else if (element % 3 === 0) {
//             newDegreeArr.push(element ** 3);
//         }
//         else {
//             newDegreeArr.push(element);
//         }
//     }
//     return newDegreeArr;
// }
// console.log(degreeArray(newArr)); 


// ------------------------------------------------------------------

// 5
// Дан массив const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// Подсчитайте количество цифр 3 в этом массиве.



// const arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// function countNumber(array) {
//     let count = 0;
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 3) {
//             count++;
//         }
//         else {
//             continue;
//         }
//     }
//     return count;
// }
// console.log(countNumber(arr));



// --------------------------------------------------------------------------

// 6
// Дан следующий массив:
// [1, 2, 3, 4, 5]
// С помощью метода массива преобразуйте его в следующий:
// [1, 4, 5]


// const arr = [1, 2, 3, 4, 5];
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     if (arr[i] !== 2 && arr[i] !== 3) {
//         newArr.push(element);
//     }
//     else {
//         continue
//     }
// }
// console.log(newArr);



// Необязательное задание.
// Необходимо вывести горку в консоль (используя цикл for), как показано на
// рисунке, только у вашей горки должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx



// str = " ";
// x = "x";
// for (var i = 0; i < 20; i++) {
//     str += x;
//     console.log(str);
// }

