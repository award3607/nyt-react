import React from 'react';

const Article = props => {
    // const results = props.results.filter(result => result.document_type === 'article');

    return (
        <div className="well" key={props._id}>
            <h3><a href={props.web_url} target="_blank">{props.headline.main}</a></h3>
            <h5>{props.byline.original}</h5>
            <h6>{props.pub_date}</h6>
            <p>{props.snippet}</p>
        </div>
    );
}

export default Article;