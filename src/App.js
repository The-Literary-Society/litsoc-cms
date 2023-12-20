import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ArticleDetailPage from './pages/articleDetail/ArticleDetailPage';

function App() {
  return (
    <Router>
      <div className='App font-opensans'>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticleDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
