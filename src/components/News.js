import React,{useEffect,useState} from "react";

import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from 'react-infinite-scroll-component';

 const News =(props)=>{

 const[articles,setArticles]=useState([])
 const[loading,setloading]=useState(true)
const[page,setpage]=useState(1)
const[totalResults,settotalResults]=useState(0)

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const  updatNews = async ()=> {
    props.setProgress(10)
     const url =`https://newsapi.org/v2/everything?q=${props.category} &apiKey=e208e885c09d4a719a4c69dc99ed09fe`
    setloading(true);
    props.setProgress(50)
    let data = await fetch(url);
    props.setProgress(90)
    let parseddata = await data.json();
    setArticles(parseddata.articles)
    settotalResults(parseddata.totalResults)
    setloading(false)
    props.setProgress(100)
  }
  useEffect(()=>{
  updatNews();
  },[])
  const fetchMoreData=async()=>{
    setpage(page+1)
  
  const url =`https://newsapi.org/v2/everything?q=${props.category}&apiKey=e208e885c09d4a719a4c69dc99ed09fe`
  let data = await fetch(url);
  let parseddata = await data.json();
   setArticles(articles.concat(parseddata.articles))
   settotalResults( parseddata.totalResults)
   }


    return (
      <>
      <h1 className="text-center">
          NewsBird - Headlines from{" "}
          { capitalizeFirstLetter(props.category)}{" "}
      </h1>
      {   loading && <Spinner/>}
        <InfiniteScroll
          dataLength={   articles.length} //This is important field to render the next data
          next={ fetchMoreData}
          hasMore={   articles.length!==    totalResults &&    articles.length<=    totalResults}
          loader={<Spinner/>}
       
        >
        <div className="container my-3 ">
          {/* {   loading && <Spinner/>} */}
          <div className="row">
            {    articles.map((element,idx) => {
                return <div className="col-sm-4" key={element.url + `${idx}`}>
                    <NewsItem  title={element.title?element.title:"news"}  description={element.description}
                      imageUrl={
                        element.urlToImage
                          ? element.urlToImage
                          : "https://scitechdaily.com/images/Glowing-Energy-Hexagon-Material.jpg"
                      }
                      newsUrl={element.url}
                      date={element.publishedAt}
                      source={element.source.name}
                      author={element.author}
                    />
                  </div>  })}
            </div>
            </div>
        </InfiniteScroll>
      
      </>
    );
  };
News.defaultProps = {
  country: "in",
  pageSize: 20,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News
