import React from "react";
import NewsItem from "./NewsItem";

const NewsSelect = ({newsStories, handleSelectChange}) => {

    const handleChange = (event) => {
        const newsObject = event.target.value;
        handleSelectChange(newsObject);
    }

    // console.log(newsStories);
    const newsOptions = newsStories.map((news, index) => {
        return (
        <option key={index} value={news}>{news.title}</option>
        )

    })

    return (
        <>
        <select onChange={handleChange}>
            {newsOptions}
        </select>
        </>
    )

}

export default NewsSelect;