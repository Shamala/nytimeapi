import React from "react";

export default function ArticleContent({ article, setShowArticleDetail }) {
  return (
    <>
      <p>
        <a className="link" onClick={() => setShowArticleDetail(undefined)}>
          Search Results{" "}
        </a>{" "}
        <span>{"> "}</span>
        {article.headline.main}
      </p>
      <section>
        <h2>{article.headline.main}</h2>
        <p>{article.abstract}</p>
        <h3>{article.byline.original}</h3>
        <p>{article.lead_parapgraph}</p>
        <p>Source: {article.source}</p>
        More Info:<a href={article.web_url}> Read more about this article</a>
      </section>
    </>
  );
}
