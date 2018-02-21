import React from 'react';
import Article from './Article'

const ArticlesContainer = props => {
    console.log(props.articles);
    return (
        <div className="articles-container">
            {props.articles.map(article => 
                <Article key={article._id} article={article}/>
            )}
        </div>
    );
}

export default ArticlesContainer;