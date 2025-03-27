import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating API fetch
    const fetchMovies = async () => {
      try {
        // In a real app, this would be an actual API call
        const mockData = {
          featuredMovie: {
            id: 1,
            title: "Batman Dark Knight",
            image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
            description: "With the help of allies Lt. Jim Gordon and DA Harvey Dent, Batman has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
            genre: "Action, Adventure, Fantasy",
            releaseDate: "July, 2008",
            rating: 4.8
          },
          recentMovies: [
            {
              id: 2,
              title: "Inception",
              image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
              description: "A troubled thief who extracts secrets from people's dreams takes one last job: leading a dangerous mission to plant an idea in a target's subconscious.",
              genre: "Sci-Fi, Mystery & Thriller, Action",
              releaseDate: "July, 2010",
              rating: 4.5
            },
            {
              id: 3,
              title: "Tekken: Blood Vengeance",
              image: "https://m.media-amazon.com/images/M/MV5BMTY1OTY5OTk2MF5BMl5BanBnXkFtZTcwNjQ5NjQzNw@@._V1_.jpg",
              description: "Jin, his father, Kazuya, and his grandfather Heihachi battle to control the M Cell.",
              genre: "Animation, Action",
              releaseDate: "July, 2011",
              rating: 3.9
            }
          ]
        };

        setFeaturedMovie(mockData.featuredMovie);
        setMovies(mockData.recentMovies);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleWatchNow = (movieTitle) => {
    alert(`"${movieTitle}" will start playing shortly!`);
  };

  if (loading) {
    return <div className="loading">Loading movies...</div>;
  }

  return (
    <div className="app">
      <Header />
      
      <main className="container">
        {featuredMovie && (
          <FeaturedMovie 
            movie={featuredMovie} 
            onWatchNow={handleWatchNow} 
          />
        )}
        
        <RecentMovies 
          movies={movies} 
          onWatchNow={handleWatchNow} 
        />
      </main>
      
      <Footer />
    </div>
  );
}

// Header Component
function Header() {
  return (
    <header className="app-header">
      <h1>Movieshubz.co.in</h1>
      <nav>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Featured Movie Component
function FeaturedMovie({ movie, onWatchNow }) {
  return (
    <section className="featured-movie">
      <h2>Featured Movie</h2>
      <article className="movie-card featured">
        <div className="movie-content">
          <div className="movie-poster">
            <img src={movie.image} alt={movie.title} />
          </div>
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <div className="rating">
              {Array.from({ length: 5 }).map((_, i) => (
                <i 
                  key={i} 
                  className={`fas fa-star ${i < Math.floor(movie.rating) ? 'filled' : ''}`}
                ></i>
              ))}
              <span>({movie.rating.toFixed(1)})</span>
            </div>
            <p className="description">{movie.description}</p>
            <p className="meta"><strong>Genre:</strong> {movie.genre}</p>
            <p className="meta"><strong>Release Date:</strong> {movie.releaseDate}</p>
            <button 
              className="watch-btn"
              onClick={() => onWatchNow(movie.title)}
            >
              Watch Now <i className="fas fa-play"></i>
            </button>
          </div>
        </div>
      </article>
    </section>
  );
}

// Recent Movies Component
function RecentMovies({ movies, onWatchNow }) {
  return (
    <section className="recent-movies">
      <h2>Recent Movies</h2>
      <div className="movies-grid">
        {movies.map(movie => (
          <article key={movie.id} className="movie-card">
            <div className="movie-poster">
              <img src={movie.image} alt={movie.title} />
            </div>
            <div className="movie-details">
              <h3>{movie.title}</h3>
              <div className="rating">
                {Array.from({ length: 5 }).map((_, i) => (
                  <i 
                    key={i} 
                    className={`fas fa-star ${i < Math.floor(movie.rating) ? 'filled' : ''}`}
                  ></i>
                ))}
                <span>({movie.rating.toFixed(1)})</span>
              </div>
              <p className="description">{movie.description}</p>
              <p className="meta"><strong>Genre:</strong> {movie.genre}</p>
              <p className="meta"><strong>Release Date:</strong> {movie.releaseDate}</p>
              <button 
                className="watch-btn"
                onClick={() => onWatchNow(movie.title)}
              >
                Watch Now <i className="fas fa-play"></i>
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="app-footer">
      <p>&copy; {new Date().getFullYear()} Movieshubz.co.in. All rights reserved.</p>
      <div className="social-links">
        <a href="#"><i className="fab fa-facebook"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </footer>
  );
}

export default App;