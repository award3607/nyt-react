import React, {Component} from 'react';
import ArticlesContainer from '../components/ArticlesContainer'


import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

class Saved extends Component {
    state= {
        articles: []
    };

    render() {
        return (
            <div className="container">
                <Jumbotron />
                <ArticlesContainer articles={this.state.articles} />
            </div>
        );
    }
}

export default Saved;