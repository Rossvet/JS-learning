// Задание 1

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();


 
const personalMovieDB = {
    count: numberOfFilms,
    movies: {}, // в это свойство поместить пустой объект
    actors: {}, // тоже поместить пустой объект
    genres: [], // сюда поместить пустой массив
    privat: false // - в это свойство поместить boolean(логическое) значение false
};    

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
    
//         if (a != '' && b != '' && a != null && b != null && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Красаучик!');
//         } else {
//             console.log("Ошибочка вышла");
//             i--;
//         }
//     }
// }

// rememberMyFilms();


// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count >= 10 || personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман");
//     } else {
//         console.log("Произошла ошибка");
//     }
        
// }

// detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();