import React, { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard.js";
import Sidebar from "../components/Sidebar.js";

const News = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    // Fetch news from localStorage (or API)
    const storedNews = JSON.parse(localStorage.getItem("news")) || [];
    setNewsList(storedNews);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-9">
          <h1 className="text-3xl font-bold border-b pb-2 mb-4">News</h1>
          {newsList.length > 0 ? (
            newsList.map((news, index) => <NewsCard key={index} news={news} />)
          ) : (
            <p>No news available.</p>
          )}
        </div>
        <div className="col-span-3">
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default News;
