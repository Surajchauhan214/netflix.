const API_KEY = 'YOUR_TMDB_API_KEY'; // Replace with your TMDb API key
const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

async function fetchMovies() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    const movies = data.results;
    const moviesContainer = document.getElementById('movies-container');

    movies.forEach(movie => {
      const movieDiv = document.createElement('div');
      movieDiv.classList.add('movie');
      const movieImg = document.createElement('img');
      movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
      movieImg.alt = movie.title;
      movieDiv.appendChild(movieImg);
      moviesContainer.appendChild(movieDiv);
    });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
}

document.addEventListener('DOMContentLoaded', fetchMovies);
