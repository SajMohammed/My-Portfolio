import React from 'react';
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';

const Blog = () => {
  return (
    <div className="folio__blog section__padding" id="blog">
      <div className="folio__blog-heading">
        <h1 className="gradient__text">A lot is happening. I am blogging about it</h1>
      </div>
      <div className="folio__blog-container">
        <div className="folio__blog-container_groupA">
          <Article imageURL={blog01} date="Jan 31, 2022" title="Blockchain and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className="folio__blog-container_groupB">
          <Article imageURL={blog02} date="Jan 31, 2022" title="Blockchain and Open  AI is the future. Let us exlore how it is?" />
          <Article imageURL={blog03} date="Jan 31, 2022" title="Blockchain and Open  AI is the future. Let us exlore how it is?" />
          <Article imageURL={blog04} date="Jan 31, 2022" title="Blockchain and Open  AI is the future. Let us exlore how it is?" />
          <Article imageURL={blog05} date="Jan 31, 2022" title="Blockchain and Open  AI is the future. Let us exlore how it is?" />
        </div>
        
      </div>
        
    </div>
  )};

export default Blog;
