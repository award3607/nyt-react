import React, {Component} from 'react';
import Article from './Article'

class SavedArticles extends Component {
    state = {
        articles: []
    };

    getArticles = () => {
        API.getArticles()
        .then(res => {
            console.log(res);
            this.setState({ articles: res.data })
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="articles-container">
                {this.state.articles.map(article => 
                    <Article key={article._id} article={article}/>
                )}
            </div>
        );
    }
        
}

export default SavedArticles;