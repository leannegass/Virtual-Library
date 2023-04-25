const  {Media} = require('./Media');

class Music extends Media{
    constructor(title,year,genre,artist,length){
        super(title,year,genre);
        this.artist = artist;
        this.length = length;
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`;
    }
    static shortestAlbum(music){
        console.log(music)
        const min = music.reduce(function(prev, current) {
        return (prev.length < current.length) ? prev : current})
        return min;

    }
}
// const music1 = new Music('Lemonade', 2016, 'R&B', 'Beyonce', 3949);
// const music2 = new Music('Renaissance', 2022, 'R&B', 'Beyonce', 3734);
// const music3 = new Music('Ren', 2022, 'R&B', 'Beyonce', 3004);
// const music4 = new Music('sance', 2022, 'R&B', 'Beyonce', 3004);
// console.log(Media.totalMediaCount); // 2
// music2.summary(); // "Title: Renaissance, Artist: Beyonce, Year: 2022, Genre: R&B, Length: 3734 seconds"
// console.log(Music.shortestAlbum([music1, music2,music3,music4])); // Returns music2

module.exports = {Music};