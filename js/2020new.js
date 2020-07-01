"use strict";



// alert("Hello World");

// const result = confirm('Are you here?');
// const answer = prompt('how old are you?', '');


// console.log(typeof answer);

// let answers = [];

// answers[0] = prompt('What is you name?', '');
// answers[1] = prompt('You so name?', '');
// answers[2] = prompt('How old are you?', '');

// console.log(typeof answers);

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

// const user = "Vasya";

// alert(`Привет, ${user}`);


// console.log(10%6);


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, // в это свойство поместить пустой объект
    actors: {}, // тоже поместить пустой объект
    genres: [], // сюда поместить пустой массив
    privat: false // - в это свойство поместить boolean(логическое) значение false
};
    
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);