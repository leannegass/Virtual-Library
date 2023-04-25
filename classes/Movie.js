const  {Media} = require('./Media');

class Movie extends Media{
    constructor(title,year,genre,director,duration,rating){
        super(title,year,genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;

    }
    summary(){
        return `Title: ${this.title}, Direction: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Duration: ${this.duration}, Rating: ${this.rating}`;
    }
    static longestMovie(movies){
        const max = movies.reduce(function(prev, current) {
        return (prev.duration > current.duration) ? prev : current})
        return max;
    }
}

// const movie1 = new Movie('Inception', 2010, 'Sci-Fi', 'Christopher Nolan', 148, 4.5);
// const movie2 = new Movie('The Godfather', 1972, 'Crime', 'Francis Ford Coppola', 175, 4.7);
// Media.totalMediaCount; // 2
// movie1.summary(); // "Title: Inception, Director: Christopher Nolan, Year: 2010, Genre: Sci-Fi, Rating: 4.5"
// console.log(Movie.longestMovie([movie1, movie2])); // Returns movie2

module.exports = {Movie};