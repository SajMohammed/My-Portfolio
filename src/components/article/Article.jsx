import React from 'react';
import './article.css';

const Article = ({ imageURL, date, title }) => {
  return (
    <div className="folio__blog-container_article">
        <div className="folio__blog-container_article-image">
          <img src={imageURL} alt="blog image"/>
        </div>
        <div className="folio__blog-container_article-content">
          <div>
            <p>{date}</p>
            <h3>{title}</h3>
            <p>Read Full Article</p>
          </div>
        </div>
    </div>
  )
};

export default Article;
