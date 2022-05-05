// The `movies` array from the file `src/data.js`.


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
  const arrayOfAllDirectors = movies.map(function (movie) {
    return movie.director;
  })
  return arrayOfAllDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(movies) {
  const arrayOfAllDramaMoviesDirectedByStevenSpielberg = movies.filter(function (movie) {
    return movie.director === 'Steven Spielberg' && movie.genre.includes('Drama');
  })
  return arrayOfAllDramaMoviesDirectedByStevenSpielberg.length;
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(movies) {

  if (movies.length === 0) {
    return 0;
  }

  const scores = movies.map(function (movie) {
    return movie.score;
  })

  const scoreTotal = scores.reduce(function (accumulator, currentValue) {
    if (currentValue === undefined) {
      return accumulator;
    }
    return accumulator + currentValue;
  });

  const scoreAverage = scoreTotal/scores.length;

  return Math.round(scoreAverage * 100) / 100
}
scoresAverage([{ score: 6 }, { score: '' }, {}]);


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(movies) {
  const dramaMovies = movies.filter(function (movie) {
    return movie.genre.includes("Drama")
  })

  return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(movies) {
  const sortedArray = [...movies].sort(function compare(a, b) {
      if (a.year < b.year) return -1; // a is less than b
      if (a.year > b.year) return 1; // a is greater than b
      if (a.year === b.year && a.title < b.title) return -1;
      if (a.year === b.year && a.title > b.title) return 1; // a equals b
  })
  return sortedArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(movies) {

  const titles = movies.map(function (movie) {
    return movie.title;
  })

  titles.sort();

  titles.length = Math.min(titles.length, 20); 

  return titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(array) {
  const newArray = [...array]

  for (let i = 0; i<newArray.length; i += 1) {
    let durationInMinutes = newArray[i].duration[0]*60
    console.log(newArray[i].duration.includes("min"))
    if (newArray[i].duration.includes("min")) {
      let minutesWithWord = newArray[i].duration.split(" ")[1];
      let minutesWithoutWord = minutesWithWord.split("min")[0];

      durationInMinutes += parseInt(minutesWithoutWord);
    }
    newArray[i].duration = durationInMinutes;
  }

  return newArray;
}
// turnHoursToMinutes(movies);

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
