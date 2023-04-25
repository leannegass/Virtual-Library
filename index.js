// IMPORT CLASSES HERE
const  {Media} = require('./classes/Media');
const  {Book} = require('./classes/Book');
const  {Movie} = require('./classes/Movie');
const  {Music} = require('./classes/Music');


// const book = new Media('The Catcher in the Rye', 1951, 'Fiction');
// console.log(Media.totalMediaCount); // 1
// const music = new Media('Abbey Road', 1969, 'Rock');
// console.log(Media.totalMediaCount); // 2
// music.summary(); // "Title: Abbey Road, Year: 1969, Genre: Rock"

// const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 44);
// console.log(Media.totalMediaCount); // 1
// const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 8);
// console.log(Media.totalMediaCount); // 2
// console.log(book1.summary()); // "Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4"
// console.log(Book.highestRating([book1, book2])); // Returns book2
// const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949);
// const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734);
// const music3 = new Music('Ren', 2022, 'R&B', 'Beyonce', 3004);
// const music4 = new Music('sance', 2022, 'R&B', 'Beyonce', 3004);
// console.log(Media.totalMediaCount); // 2
// music2.summary(); // "Title: Renaissance, Artist: Beyonce, Year: 2022, Genre: R&B, Length: 3734 seconds"
// console.log(Music.shortestAlbum([music1, music2,music3,music4])); // Returns music2

const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);
Media.totalMediaCount; // 2
movie1.summary(); // "Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5"
console.log(Movie.longestMovie([movie1, movie2])); // Returns movie2


// DO NOT EDIT BELOW THIS LINE
try {
    module.exports = {
        Media,
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
        Movie
    }
} catch(e){

}

try {
    module.exports = {
        Media,
        Book,
        Movie,
        Music
    }
} catch(e){

}