import React from "react";

export default function Search({
  search,
  setSearch,
  searchArticle,
  isLoading,
}) {
  return (
    <form>
      <fieldset>
        Search Form
        <div>
          <label>Search Article</label>
          <input
            type="text"
            id="searchArticle"
            name="searchArticle"
            placeholder="Search an article"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
        <button
          onClick={(e) => searchArticle(e)}
          disabled={search.length <= 0 || isLoading}
        >
          Search
        </button>
      </fieldset>
    </form>
  );
}
