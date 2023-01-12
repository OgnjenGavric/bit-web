'use strict';

(function () {
  function Genre(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.getData = function () {
      var firstLetter = this.name[0];
      var lastLetter = this.name[this.name.length - 1];
      var result = firstLetter + lastLetter;
      return result.toUpperCase();
    };
  }

  function Movie(t, g, l) {
    if (!t || !g || !l) {
      throw new Error('Missing propertied!');
    }
    if (!(g instanceof Genre)) {
      throw new Error('Invalid genre input!');
    }
    this.title = t;
    this.genre = g;
    this.lengthOfMovie = l;
    this.getData = function () {
      return (
        this.title + ', ' + this.lengthOfMovie + 'min, ' + this.genre.getData()
      );
    };
  }

  function Program(d) {
    if (!d) {
      throw new Error('Property date is required');
    }
    this.date = new Date(d);
    this.movieList = [];
    this.getNumberOfMovies = function () {
      return this.movieList.length;
    };
    this.addMovie = function (m) {
      if (!(m instanceof Movie)) {
        throw new Error('Invalid movie input!');
      }
      this.movieList.push(m);
    };
    this.getTotalLength = function () {
      var total = 0;
      this.movieList.forEach(function (movie) {
        total += movie.lengthOfMovie;
      });
      return total;
    };
    this.getData = function () {
      var day = this.date.getDate();
      var month = this.date.getMonth() + 1;
      var year = this.date.getFullYear();
      var result =
        day +
        '.' +
        month +
        '.' +
        year +
        ', program duration ' +
        this.getTotalLength() +
        'min';
      this.movieList.forEach(function (movie) {
        result += '\n\t\t' + movie.getData();
      });
      return result;
    };
  }

  function Festival(n) {
    if (!n) {
      throw new Error('Property name is required');
    }
    this.name = n;
    this.programList = [];
    this.getTotalNumberOfMovies = function () {
      var total = 0;
      this.programList.forEach(function (program) {
        total += program.getNumberOfMovies();
      });
      return total;
    };
    this.addProgram = function (p) {
      if (!(p instanceof Program)) {
        throw new Error('Invalid program input!');
      }
      this.programList.push(p);
    };
    this.getData = function () {
      var result =
        this.name +
        ' festival has ' +
        this.getTotalNumberOfMovies() +
        ' movie titles';
      this.programList.forEach(function (program) {
        result += '\n\t' + program.getData();
      });
      return result;
    };
  }

  function createMovie(t, l, g) {
    var genre = new Genre(g);
    var movie = new Movie(t, genre, l);
    return movie;
  }

  function createProgram(d) {
    return new Program(d);
  }

  //Testing
  try {
    var kustendorf = new Festival('Kustendorf');

    var sundayProgram = createProgram('12/24/2022');
    var mondayProgram = createProgram('12/25/2022');

    var rushHours = createMovie('Rush Hour', 95, 'action');
    var theRing = createMovie('The Ring', 103, 'horror');
    var frida = createMovie('Frida', 87, 'drama');
    var tropicThunder = createMovie('Tropic Thunder', 91, 'comedy');

    sundayProgram.addMovie(rushHours);
    sundayProgram.addMovie(theRing);
    mondayProgram.addMovie(frida);
    mondayProgram.addMovie(tropicThunder);

    kustendorf.addProgram(sundayProgram);
    kustendorf.addProgram(mondayProgram);

    console.log(kustendorf.getData());
  } catch (error) {
    console.log(error.message);
  }
})();