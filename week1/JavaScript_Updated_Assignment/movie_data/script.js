const movies_url = 'https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies-2010s.json'

async function fetchMovies(url) {
  const movies = await fetch(url)
  const moviesData = await movies.json()

  let actorsMap = {}

  // map contains genre as key and movies list as value
  let genreMap = {}
  moviesData.forEach(movie => {
    let actors = movie.cast
    actors.forEach(actor => {
      
      //there is some issue with API data, so I use some conditions to avoid those data
      if(actor.length > 3 && /^[a-zA-Z]+$/.test(actor)) {
        if(actorsMap[actor] == undefined){
          actorsMap[actor] = [movie.title]
        }
        else{
          actorsMap[actor].push(movie.title)
        }
      }
    
    })

    //create genre map
    let genres = movie.genres
    genres.forEach(genre => {
      if(genreMap[genre] === undefined){
        genreMap[genre] = [movie.title]
      }
      else{
        genreMap[genre].push(movie.title)
      }
    })

  })

  //change the actor map to required format [{actor: actorName, movies: [movie1, movie2, ...]}, ...]
  actorsMap = Object.keys(actorsMap).map(actor => {
    return {actor: actor, movies: actorsMap[actor]}
  })

  //change the genre map to required format [{genre: genreName, movies: [movie1, movie2, ...]}, ...]
  genreMap = Object.keys(genreMap).map(genre => {
    return {genre: genre, movies: genreMap[genre]}
  })

  console.log(actorsMap);
  console.log(genreMap);
}

fetchMovies(movies_url)