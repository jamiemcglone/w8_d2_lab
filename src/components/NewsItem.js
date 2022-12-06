import React from "react";

const NewsItem = ({newsStory}) => {
    console.log(newsStory)
    return (
        <div>
            <h2>{newsStory.title}</h2>
            <h3>{newsStory.by}</h3>
            <p>{newsStory.text}</p>
        </div>
    )
}

export default NewsItem;