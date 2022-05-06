import { createContext, useState } from "react";
const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchText, setSearchText] = useState("");
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
          searchText,
          setSearchText,
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
