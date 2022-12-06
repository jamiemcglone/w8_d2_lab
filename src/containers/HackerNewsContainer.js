import React,{ useState, useEffect } from "react";
import NewsSelect from "../components/NewsSelect";
import NewsItem from "../components/NewsItem";

const HackerNewsContainer = () => {
    
    const [ latestStories, setLatestStories ] = useState([]);
    const [ selectedNews, setSelectedNews ] = useState(null);
    const [ newsStory, setNewsStory ] = useState(null);


    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then( res => res.json())
        .then( stories => {
            const newStories = stories.slice(0, 20);
            const newPromises = newStories.map((id) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json/`)
            .then( res => res.json());    
    })

    Promise.all(newPromises)
    .then((results) => {
            setLatestStories(results);
        })
        // console.log(selectedNews) 
        // console.log(setNewsStory)
    })
    }, []);

    const handleSelectChange = (news) => {
        let newStory= {newsStory}
        newStory = (news)
        setNewsStory(newStory);
        
        setSelectedNews(news);
    }

    return(
        <div>
            <h1>Hacker News</h1>
            <NewsSelect newsStories={latestStories} handleSelectChange={handleSelectChange}/> 
            { selectedNews ? <NewsItem newsStory={newsStory}/>: null}
        </div>
    )
}

export default HackerNewsContainer;