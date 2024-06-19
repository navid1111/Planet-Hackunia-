import React from 'react';
import NavBar from '../../../components/navbar/Navbar';
import { newsData } from '../../../lib/dummydata';
import './listPage.scss';

const ListPage = () => {
  const data = newsData.articles;

  return (
    <div className="listPage">
      <NavBar />

      <div className="contentContainer">
        <div className="listContainer">
          {data.map(article => (
            <div key={article.id} className="card">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="cardImage"
              />
              <div className="cardContent">
                <h3 className="cardTitle">{article.title}</h3>
                <p className="cardAuthor">
                  By {article.author} - {article.date}
                </p>
                <p className="cardDescription">{article.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListPage;
