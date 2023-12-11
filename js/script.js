'use strict';
/* let number = 5;
let leftBorderWidth = 1;
leftBorderWidth = 10;
console.log(leftBorderWidth);


number = 10;
console.log(number); */
/* const arr = ['a','b','c'];
const arrObj = {
    0: 'a',
    1: 'b',
    2: 'c'
};
console.log(arr[1]);
console.log(arrObj[1]);
const Obj = {
    Anna: 500,
    'Alice': 800
}; */
/* alert ('hello'); */
/* const result = confirm('Are you sure you want to ?');
console.log(result); */
/* const answer = prompt('Вам есть 18?', '18');
console.log(answer);
 */
//  const answers = [];
// answers[0] = prompt('Как ваше имя?', '');
// answers[1] = prompt('Как ваше фамилия?', '');
// answers[2] = prompt('КСколько вам лет?', '');

// console.log(typeof(answers));
// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);
// const user = 'Иван';
// alert(`Привет, ${user}`);
//let incr = 10,
//    decr = 10;
//++incr; //когда ставим операторы '++ или --' Перед значением это форма записи - Префиксная. когда после - Постиксная
//--decr; // ++ это плюс 1, -- это минус 1
//console.log(incr); //можно ставить ++ или -- сразу в выводе, console.log(++incr);
//console.log(decr);
//console.log(2*4===8);//если === то это строгое сравнение, например по типу данных, число равняется строго числу
//  && - 'И' ; || - 'ИЛИ' ; != - 'не равно'
//const isChecked = true,
//      isClose = true;
// console.log(isChecked || !isClose);  // ! - оператор отрицания (меняет true на false и наоборот)   

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', ''); //prompt - вопрос, + это из строчного в числовую форму записи

const personalMovieDB ={
    count: numberOfFilms,
    movies: {},
    actors:{},
    genres:[],
    privat: false

};
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);
