class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        if (rating) {
            this.rating = rating;
        }
        else {
            this.rating = "PG";
        }
    }

    
    getPG(movies) {
        movies = movies.filter(movie => movie.rating== "PG");
        return movies;
    }
}

let movies=[];
let movie1=new Movie("Casino Royale1","Eon Productions1","PG13");
let movie2=new Movie("Casino Royale2","Eon Productions2");
let movie3=new Movie("Casino Royale3","Eon Productions3","PG13");
let movie4=new Movie("Casino Royale4","Eon Productions4","PG13");
let movie5=new Movie("Casino Royale5","Eon Productions5","PG13");
let movie=new Movie();
movies.push(movie1,movie2,movie3,movie4,movie5);
console.log(movies);
console.log(movie1);
console.log(movie.getPG(movies));

