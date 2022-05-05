import React, { useEffect, useContext, useCallback } from "react";
import axios from "axios";
import "./Search.css";
import { API_KEY } from "./Requests";
import { SearchContext } from "./context/SearchContext";

function Search(props) {
  const { setContentHome, page, searchTextHome, setSearchTextHome, setShowSearch } =
    useContext(SearchContext);

  const fetchSearch = useCallback(async () => {
    try {
      const data = await axios.get(
        `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${searchTextHome}&language=en-US&page=${page}&include_adult=false`
      );

      setContentHome(data.data.results);
       window.scroll(0, 0);
    } catch (error) {
      console.log(error);
    }
  }, [page, searchTextHome, setContentHome]);

  useEffect(() => {
    fetchSearch();
    window.scroll(0, 0);
  }, [page]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSearch(true);
    fetchSearch();
    // setSearchTextHome("");
  };

  return (
    <form onSubmit={handleSubmit} className="search">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="search__input"
          onChange={(e) => setSearchTextHome(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
