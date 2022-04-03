import React from "react";
import { Button, Grid } from "@mui/material";
import "./Search.css";

function Search() {
  return (
    <Grid
      item
      xs={12}
      className="searchContainer"
      style={{
        display: "flex",
        backgroundColor: "white",
        borderRadius: "400px",
        marginTop: "40px",
        marginBottom: "50px",
        justifyContent: "center",
      }}
    >
      <input
        placeholder="search for a movie, tv show, person..."
        className="searchField"
        type="text"
      />
      <Button
        style={{
          borderRadius: "30px",
          margin: "2px",
        }}
        variant="contained"
        disableElevation
        color="secondary"
      >
        Search
      </Button>
    </Grid>
  );
}

export default Search;
