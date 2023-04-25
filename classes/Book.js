const  {Media} = require('./Media');

class Book extends Media{
    constructor(title,year,genre,author,numPages,rating){
        super(title,year,genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;

    }
    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }
    static highestRating(books){
        //console.log(books[0].rating)
        let maxRating = 0;
        for(let book of books){
            maxRating = Math.max(book.rating,maxRating);
        }
        return maxRating;
        //return Math.max(books.map(book => book.rating));
    }
}
// const book1 = new Book('To Kill a Mockingbird', 1960, 'Fiction', 'Harper Lee', 281, 44);
// console.log(Media.totalMediaCount); // 1
// const book2 = new Book('The Bluest Eye', 1970, 'Fiction', 'Toni Morrison', 206, 8);
// console.log(Media.totalMediaCount); // 2
// console.log(book1.summary()); // "Title: To Kill a Mockingbird, Author: Harper Lee, Year: 1960, Page Count: 281, Genre: Fiction, Rating: 4.4"
// console.log(Book.highestRating([book1, book2])); // Returns book2


module.exports = {Book};