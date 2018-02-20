import React from 'react';
import Article from './Article'

const ArticlesContainer = props => {
    const articles = props.articles.filter(article => article.document_type === 'article');

    return (
        <div className="articles-container">
            {articles.map(article => 
                <Article />
            )}
        </div>
    );
}

export default ArticlesContainer;