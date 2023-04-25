// IMPORT CLASSES HERE
const  {Book} = require('./classes/Book');
const  {Media} = require('./classes/Media');

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