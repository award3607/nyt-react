import React from 'react';
// import API from '../utils/API';

const Article = props => {
    // const handleSave = event => {
    //     console.log(props.article);
    //     API.saveArticle(props.article)
    //     .then(res => {
    //         console.log(`Saved article ${props.article.title}`);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // };

    // const handleDelete = event => {
    //     console.log(`Deleting ${props.article._id}`);
    //     API.deleteArticle(props.article._id)
    //     .then(() => {

    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // };

    return (
        <div className="well">
            <h3><a href={props.article.url} target="_blank">{props.article.title}</a></h3>
            <h5>{props.article.byline}</h5>
            <h6>{props.article.date}</h6>
            <p>{props.article.snippet}</p>
            { props.article.isSaved
                                ? <button className="btn btn-danger" onClick={() => props.handleDelete(props.article._id)}>Delete</button>
                                : <button className="btn btn-primary" onClick={() => props.handleSave(props.article)}>Save</button>
            }

            {/* <button className="btn btn-primary" { props.article.isSaved
                                                ? (onClick={handleSave}>Save)
                                                : (onClick={handleDelete}>Delete) }></button> */}
        </div>
    );
}

export default Article;