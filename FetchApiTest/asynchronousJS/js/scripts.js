//AJAX CALLS WITH FETCH AND PROMISE ASYNC/AWAIT

fetch('http://api.tvmaze.com/shows')
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(data => {
        //console.log(data);
        const movie = data[0];
        console.log(movie);
        const movieURL = movie.url;
        const movieName = movie.name;
        const movieLanguage = movie.language;
        const movieGenres = movie.genres;
        const movieImage = movie.image.medium;
        const rating = movie.rating.average;
        const summary = movie.summary;

        console.log(`
            ${movieName}, 
            ${movieURL}, 
            ${movieLanguage}, 
            ${movieGenres},
            ${movieImage},
            ${rating},
            ${summary}
        `);

    })
    .catch(error => {
        console.log(error);
    });

