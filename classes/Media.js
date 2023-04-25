class Media {
    static totalMediaCount = 0;
    constructor(title,year,genre){
        this.title = title;
        this.year = year;
        this.genre = genre;
        Media.totalMediaCount += 1;
    }
    summary(){
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`;
    }

}
// const book = new Media('The Catcher in the Rye', 1951, 'Fiction');
// console.log(Media.totalMediaCount); // 1
// const music = new Media('Abbey Road', 1969, 'Rock');
// console.log(Media.totalMediaCount); // 2
// music.summary(); // "Title: Abbey Road, Year: 1969, Genre: Rock"

module.exports = {Media};