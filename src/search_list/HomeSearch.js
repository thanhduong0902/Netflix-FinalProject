import React, { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import SingleContent from "../SingleContent/SingleContent";
import CustomPagination from "../pagination/CustomPagination";

function HomeSearch() {
  const { content, setPage, numOfPages } = useContext(SearchContext);
  return (
    <div>
      <div className="search__list">
        {content &&
          content.map((item) => (
            <SingleContent
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))}
      </div>

      <CustomPagination setPage={setPage} numOfPages={numOfPages} />
    </div>
  );
}

export default HomeSearch;
