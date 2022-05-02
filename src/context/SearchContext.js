import { createContext, useState } from "react";
const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const [page, setPage] = useState(1);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <SearchContext.Provider
        value={{
          page: page,
          setPage,
          content: content,
          setContent,
          searchText,
          setSearchText,
          numOfPages,
          setNumOfPages,
          setShowSearch,
          showSearch,
        }}
      >
        {children}
      </SearchContext.Provider>
    </div>
  );
}

export { SearchContext, SearchProvider };
