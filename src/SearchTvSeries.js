import React, { useEffect, useContext, useCallback } from "react";
import axios from "axios";
import "./Search.css";
import { API_KEY } from "./Requests";
import { SearchContext } from "./context/SearchContext";

function Search(props) {
  const { page, searchText, setSearchText, setShowSearch, setContentTvSeries } =
    useContext(SearchContext);

  const fetchSearch = useCallback(async () => {
    try {
      const dataTvSeries = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchText}&language=en-US&page=${page}&include_adult=false`
      );
console.log(dataTvSeries)
      setContentTvSeries(dataTvSeries.data.results);
    } catch (error) {
      console.log(error);
    }
  }, [page, searchText, setContentTvSeries]);

  useEffect(() => {
    fetchSearch();
    window.scroll(0, 0);
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearch(true);
    fetchSearch();
    setSearchText("");
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
