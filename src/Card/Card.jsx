import React from "react";
import "./Card.css";
export default function Card({ article, setShowArticleDetail }) {
  console.log(article);
  const navigateToArticle = (url) => {
    window.open(url);
  };
  return (
    <div className="card" onClick={() => setShowArticleDetail(article)}>
      <p className="title">{article.headline.main}</p>
      <div className="content">{article.lead_paragraph}</div>
    </div>
  );
}
