import './App.css';
import React, {useState} from 'react';

function App() {

const [articles, setArticles] = useState([
  
    { date: "2022-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-01", views: 100, article: "Article 1" },

    { date: "2023-09-02", views: 150, article: "Article 2" },

    { date: "2023-09-02", views: 120, article: "Article 3" },

    { date: "2020-09-03", views: 200, article: "Article 4" }

])

const handleSortbyDate = () => {
  // Sorting logic by date will go here
    const sortedArticles = [...articles].sort((a, b) => {
    const dateComparison = new Date(b.date) - new Date(a.date);
    if (dateComparison !== 0) {
      return dateComparison;
    }
    return b.views - a.views;
  });
  setArticles(sortedArticles);
}

const handleSortbyViews = () => {
  // Sorting logic by views will go here
  const sortedArticles = [...articles].sort((a, b) => {
    if (b.views - a.views !== 0) {
      return b.views - a.views;   
    } else {
      return new Date(b.date) - new Date(a.date);         
    }
  });
  setArticles(sortedArticles);
}  

  return (
    <div>
      <h1>Date and Views Table</h1>
      <button onClick={handleSortbyDate}>Sort by Date</button>
      <button onClick={() => {
        handleSortbyViews();
      }}>Sort by Views</button>
      <table>
        <thead>
          <tr><th>Date</th><th>Views</th><th>Article</th></tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <td>{article.date}</td>
              <td>{article.views}</td>
              <td>{article.article}</td>
            </tr>
          ))}
        </tbody>
        </table>
    </div>
  );
}

export default App;
