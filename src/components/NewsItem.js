import React from "react";
const NewsItem =(props)=> {
    let { title, description, imageUrl, newsUrl,author, source, date } = props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:'flex', justifyContent:'flex-end',  position:'absolute',  right:'0'  }}>
          <span className=' badge rounded-pill bg-danger' >  {source}  </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt= "..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description?description:"description"}</p>
            <p>
              by {author ? author : "Unknown"} on {date}{" "}
            </p>
            <a
              href={newsUrl}
              target="_new"
              className="btn btn-sm  btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
export default NewsItem