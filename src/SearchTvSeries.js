import React, { useEffect, useContext, useCallback } from "react";
import axios from "axios";
import "./Search.css";
import { API_KEY } from "./Requests";
import { SearchContext } from "./context/SearchContext";

function Search(props) {
  const { page, searchTextTvSeries, setSearchTextTvSeries, setShowSearch, setContentTvSeries } =
    useContext(SearchContext);

  const fetchSearch = useCallback(async () => {
    try {
      const dataTvSeries = await axios.get(
        `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&query=${searchTextTvSeries}&language=en-US&page=${page}&include_adult=false`
      );
      setContentTvSeries(dataTvSeries.data.results);
       window.scroll(0, 0);
    } catch (error) {
      console.log(error);
    }
  }, [page, searchTextTvSeries, setContentTvSeries]);

  useEffect(() => {
    fetchSearch();
    window.scroll(0, 0);
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearch(true);
    fetchSearch();
    // setSearchTextTvSeries("");
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          onChange={(e) => setSearchTextTvSeries(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
