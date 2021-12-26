import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'
const  App = ()  => {
  const [news,setNews] = useState([])
  useEffect(()=>{
    const loadNews = async () => {
      const res = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4ec757dd00314796948fe3a624a09985')
      setNews(res.data)
    }
    loadNews()
  },[])
  console.log('news',news);
  return (
    <div className="App">
          <div>
      <h1 className="head__text" style={{textAlign:'center'}}>news</h1>
      <div className="all__news">
        {news
          ? news.articles?.map((one,index) => (
            <div className="news" key={index}>
              <img src={one.urlToImage ? one.urlToImage : ''} style={{width:'100%'}}/>
            <h1 className="news__title">{one.title}</h1>
            <p className="news__desc">{one.description}</p>
            <span className="news__author">{one.author}</span> <br />
            <span className="news__published">{one.publishedAt}</span>
            <span className="news__source">{one.source.name}</span>
          </div>
            ))
          : "Loading..."}
      </div>
    </div>
    </div>
  );
}

export default App;
