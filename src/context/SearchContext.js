import { createContext, useState } from "react";
const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchTextHome, setSearchTextHome] = useState("");
  const [searchTextMovies, setSearchTextMovies] = useState("");
  const [searchTextTvSeries, setSearchTextTvSeries] = useState("");

  const [contentHome, setContentHome] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);
  const [contentMovies, setContentMovies] = useState([]);
  const [contentTvSeries, setContentTvSeries] = useState([]);

  return (
    <div>
      <SearchContext.Provider
        value={{
          page,
          setPage,
          contentHome,
          setContentHome,
          searchTextHome,
          setSearchTextHome,
          searchTextMovies,
          setSearchTextMovies,
          searchTextTvSeries,
          setSearchTextTvSeries,
          numOfPages,
          setNumOfPages,
          setShowSearch,
          showSearch,
          contentTvSeries,
          setContentMovies,
          contentMovies,
          setContentTvSeries,
        }}
      >
        {children}
      </SearchContext.Provider>
    </div>
  );
}

export { SearchContext, SearchProvider };
