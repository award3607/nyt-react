import React from 'react';
import API from '../utils/API';

const Article = props => {
    const saveData = {
        title: props.article.headline.main,
        date: props.article.pub_date,
        url: props.article.web_url,
        byline: props.article.byline.original,
        snippet: props.article.snippet
    };

    const handleSave = event => {
        console.log(saveData);
        API.saveArticle(saveData)
        .then(res => {
            console.log(`Saved article ${props.article.headline.main}`);
        })
        .catch(err => {
            console.log(err);
        });
    };

    return (
        <div className="well">
            <h3><a href={props.article.web_url} target="_blank">{props.article.headline.main}</a></h3>
            <h5>{props.article.byline.original}</h5>
            <h6>{props.article.pub_date}</h6>
            <p>{props.article.snippet}</p>
            <button className="btn btn-primary" onClick={handleSave}>Save</button>
        </div>
    );
}

export default Article;