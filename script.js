let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
 constructor(title, rating, haveWatched) {
    this.title = title;
    this.rating = rating;
    this.haveWatched = haveWatched;
 }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
allMovies.push(movie);
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
for (i = 0; i < allMovies.length; i++){
    console.log(allMovies[i].title + ", rating of " + allMovies[i].rating 
    + ", have watched: " + allMovies[i].haveWatched);
}
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches 
let highRatings = (rating) => {
for (i=0; i< allMovies.length; i++) {
    if (allMovies[i].rating > rating) {
        console.log(allMovies[i].title + " has a rating of " + allMovies[i].rating);
    } else {
        continue;
    }
}
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
 for (i = 0; i < allMovies/length; i++){
    if (title = allMovies[i].title) {
        haveWatched = true;
    } else {
        continue;
    }
 }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);