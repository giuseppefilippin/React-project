import "../css/Home.css";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    { id: 1, title: "Naruto", release_date: "2002" },
    { id: 2, title: "Naruto Shippuden", release_date: "2007" },
    { id: 3, title: "Naruto The Last", release_date: "2014" },
    { id: 4, title: "Naruto Boruto", release_date: "2017" },
  ];

  const heandleSearch = (e) => {
    e.preventDefault();
    alert(`Search for: ${searchQuery}`);
    setSearchQuery("");
  };
  return (
    <div className="home">
      <form onSubmit={heandleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="Search-button">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (movie) =>
            (
              <MovieCard key={movie.id} movie={movie} />
            )
        )}
      </div>
    </div>
  );
}
export default Home;
