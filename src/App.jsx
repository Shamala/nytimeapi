import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import Search from "./Search/Search.jsx";
import Articles from "./Articles/Articles.jsx";
import ArticleContent from "./ArticleContent/ArticleContent";

function App() {
  const [search, setSearch] = useState("");
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [articleDetail, setShowArticleDetail] = useState(undefined);

  const searchArticle = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowArticleDetail(false);
    const articleSearchAPIResponse = await fetch(
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search}&api-key=${process.env.REACT_APP_API_KEY}`
    );

    const articleSearchResults = await articleSearchAPIResponse.json();

    if (articleSearchResults.status !== "OK") {
      return;
    } else {
      setArticles(articleSearchResults?.response?.docs);
    }
    setIsLoading(false);
  };

  return (
    <>
      <h1>Developer APIs from NYTimes</h1>
      <h2>Search Results</h2>
      <Search
        search={search}
        setSearch={setSearch}
        searchArticle={searchArticle}
        isLoading={isLoading}
      />
      {isLoading ? (
        <p> Loading articles...</p>
      ) : !articleDetail ? (
        <Articles
          articles={articles}
          setShowArticleDetail={setShowArticleDetail}
        />
      ) : (
        <>
          <ArticleContent
            article={articleDetail}
            setShowArticleDetail={setShowArticleDetail}
          />
        </>
      )}
    </>
  );
}

export default App;
