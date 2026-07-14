import React from "react";
import axios from "axios";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <input
          type="search"
          placeholder="Enter a city.."
          autoFocus="on"
          className="searchInput"
        />
        <input type="submit" value="search" className="btn btn-primary p-10S" />
      </form>
    </div>
  );
}
