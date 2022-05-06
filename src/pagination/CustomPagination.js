import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Pagination } from "@mui/material";
import React from "react";

function CustomPagination({ setPage, numOfPages = 10 }) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        paddingBottom: 20
      }}
    >
      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          color="primary"
        />
      </ThemeProvider>
    </div>
  );
}

export default CustomPagination;
