import './BlogCard.css';
import React from 'react';
import { openUrlInNewTab } from '../helper';

const BlogCard = ({ blog, isDark }) => {
  return (
    <div onClick={() => openUrlInNewTab(blog.url)}>
      <div className={isDark ? 'blog-container dark-mode' : 'blog-container'}>
        <a className={isDark ? 'dark-mode blog-card blog-card-shadow' : 'blog-card'} href="#blog">
          <h3 className={isDark ? 'small-dark blog-title' : 'blog-title'}>{blog.title}</h3>
          <p className={isDark ? 'small-dark small' : 'small'}>{blog.description}</p>
          <div className="go-corner">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
