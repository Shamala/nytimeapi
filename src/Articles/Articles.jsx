import React from "react";
import Card from "../Card/Card.jsx";
export default function Articles({ articles, setShowArticleDetail }) {
  let articlesDashboard = <p>Articles not found</p>;
  if (articles.length > 0) {
    articlesDashboard = (
      <section className="panel">
        {articles.map((article, index) => {
          return (
            <Card
              key={index}
              article={article}
              setShowArticleDetail={setShowArticleDetail}
            />
          );
        })}
      </section>
    );
  }
  return articlesDashboard;
}
