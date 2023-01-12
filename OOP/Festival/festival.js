"use strict";

(function () {

  function Genre(name) {
    this.name = name;
    this.getData = function () {
      return this.name[0].toUpperCase() + this.name[this.name.length - 1].toUpperCase();
    };
  }


  function Movie(title, genre, length) {
    this.title = title;
    this.genre = genre;
    this.length = length;
    this.getData = function () {
      return this.title + ', ' + this.length + 'min, ' + this.genre.getData();
    };
  }

  function Program(date) {
    this.date = new Date(date);
    this.listOfMovies = [];
    this.totalNumberOfMovies = 0;
    this.addMovie = function (movie) {
      this.listOfMovies.push(movie);
      this.totalNumberOfMovies++;
    };
    this.getData = function () {
      var programLength = 0;
      var programData = '';
      for (var i = 0; i < this.listOfMovies.length; i++) {
        programLength += this.listOfMovies[i].length;
        programData += this.listOfMovies[i].getData() + '\n';
      }
      return this.date + ', ' + programLength + 'min\n' + programData;
    };
  }


  function Festival(name) {
    this.name = name;
    this.listOfPrograms = [];
    this.numberOfMoviesInAllPrograms = 0;
    this.addProgram = function (program) {
      this.listOfPrograms.push(program);
      this.numberOfMoviesInAllPrograms += program.totalNumberOfMovies;
    };
    this.getData = function () {
      var festivalData = '';
      for (var i = 0; i < this.listOfPrograms.length; i++) {
        festivalData += this.listOfPrograms[i].getData() + '\n';
      }
      return this.name + ' has ' + this.numberOfMoviesInAllPrograms + ' movie titles\n' + festivalData;
    };
  }

  function createMovie(title, length, genre) {
    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }
    return new Movie(title, new Genre(genre), length);
  }

  function createProgram(date) {
    return new Program(date);
  }

  try {
    var festival = new Festival('Weekend Festival');

    var program1 = createProgram('Oct 20 2022');
    var program2 = createProgram('Oct 21 2022');

    var movie1 = createMovie('The Shawshank Redemption', 130, 'drama');
    var movie2 = createMovie('The Godfather', 178, 'crime');
    var movie3 = createMovie('The Dark Knight', 152, 'action');
    var movie4 = createMovie('12 Angry Men', 96, 'drama');

    program1.addMovie(movie1);
    program1.addMovie(movie2);
    program1.addMovie(movie3);
    program1.addMovie(movie4);
    program2.addMovie(movie1);
    program2.addMovie(movie2);
    program2.addMovie(movie3);
    program2.addMovie(movie4);

    festival.addProgram(program1);
    festival.addProgram(program2);

    console.log(festival.getData());
  } catch (error) {
    console.log(error.message);
  }

})();
