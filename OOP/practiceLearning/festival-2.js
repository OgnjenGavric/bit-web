"use strict";

(function () {

  /*.............................Genre.................................*/

  function Genre(name) {
    if (!name) {
      throw new Error('Field name is required');
    }
    this.name = name;
    this.getData = function () {
      var nameArr = this.name.split("");
      return nameArr.shift() + nameArr.pop().toUpperCase();
    };
  }


  /*.............................Movie.................................*/

  function Movie(title, mGenre, length) {
    if (!title || !mGenre || !length) {
      throw new Error('Fields title, genre and length are required');
    }
    this.title = title;
    this.genre = mGenre;
    this.movieLength = length;
    this.getData = function () {
      return this.title + ", " + this.movieLength + ", " + this.genre;
    };

  }

  /*.............................Program.................................*/

  function Program(date) {
    if (!date) {
      throw new Error('Fields date is required');
    }

    this.date = new Date(date);
    this.listOfMovies = [];
    this.totalNumOfMovies = function () {
      var count = 0;
      this.listOfMovies.forEach(function (movie) {
        count += 1;
      });
      return count;
    };
    this.addMovie = function (someMovie) {
      this.listOfMovies.push(someMovie);
    };
    this.getData = function () {

      var sum = 0;
      this.listOfMovies.forEach(function (el) {
        sum += parseFloat(el.movieLength);
      });

      var res = this.date.getDay() + "." + this.date.getMonth() + "." + this.date.getFullYear() + " program duration: " + sum + " min" + '\n';

      this.listOfMovies.forEach(function (el) {
        res += '\t\t' + el.getData() + '\n';
      });
      return res;
    };
  }

  /*.............................Festival.................................*/

  function Festival(festName) {

    if (!festName) {
      throw new Error('Fields name is required');
    }
    this.name = festName;
    this.listOfPrograms = [];
    this.totalNumofMoviesInAllPrograms = function () {
      var count = 0;
      this.listOfPrograms.forEach(function (el) {
        count += el.totalNumOfMovies();
      });
      return count;
    };
    this.addProgram = function (program) {
      this.listOfPrograms.push(program);
    };
    this.getData = function () {

      var res = this.name + " has " + this.totalNumofMoviesInAllPrograms() + " movie titles" + '\n';
      this.listOfPrograms.forEach(function (el) {
        res += el.getData() + '\n';
      });
      return res;
    };

  }

  /*............functions...........*/


  function createMovie(title1, movieLength1, genre1) {
    var mGenre = new Genre(genre1);
    return new Movie(title1, mGenre.getData(), movieLength1);
  }


  function createProgram(date) {
    return new Program(date);
  }

  /*...........creating Festival............*/

  var fest = new Festival("BG Weekend Fest");

  var day1 = createProgram("2021 05 04");
  var day2 = createProgram("2021 05 05");

  var movie1 = createMovie("Schindler's List", "120min", "Drama");
  var movie2 = createMovie("Borat", "120min", "Comedy");
  var movie3 = createMovie("Pulp Fiction ", "110min", "Drama");
  var movie4 = createMovie("The Matrix", "130min", "Action");


  day1.addMovie(movie1);
  day1.addMovie(movie2);
  day1.addMovie(movie3);
  day1.addMovie(movie4);

  day2.addMovie(movie1);
  day2.addMovie(movie2);
  day2.addMovie(movie3);
  day2.addMovie(movie4);

  fest.addProgram(day1);
  fest.addProgram(day2);
  console.log(fest.getData());


  /*.......................................test..................................................*/

  // var genreH = new Genre("Horror");
  // var genreA = new Genre("Action");
  // var genreD = new Genre("Drama");
  // var genreC = new Genre("Comedy");
  // // console.log(genreH);
  // console.log(genreH.getData())

  /*....................movie......................*/


  // var movie = new Movie("May", genreH, "130min");
  // var movieA = new Movie("The Shawshank Redemption", genreA, "120min");
  // var movieD = new Movie("Big Eyes", genreD, "110min");
  // var movieC = new Movie("Mau", genreC, "120min");
  // console.log(movie);
  // console.log(movieA.getData());

  // /*.................program.......................*/

  // var program = new Program("2021 07 02");
  // program.addMovie(movie);
  // program.addMovie(movieA);
  // program.addMovie(movieD);
  // program.addMovie(movieC);
  // console.log(program.totalNumOfMovies());
  // console.log(program.getData())

  // var program1 = new Program("2021 09 23");
  // program1.addMovie(movieD);
  // program1.addMovie(movieC);
  // // console.log(program1);
  // console.log(program1.getData())

  // /*...................festival......................*/

  // var festival = new Festival("NS Fest");
  // console.log(festival);
  // festival.addProgram(program);
  // festival.addProgram(program1);
  // console.log(festival.getData())

  /*................functions........................*/

  // var createdMovie = createMovie("Borat", "120min", "Comedy");
  // console.log(createdMovie);

  // var createdProgram = createProgram("2020 12 04");
  // console.log(createdProgram);

})();