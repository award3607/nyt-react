import React, {Component} from 'react';
import Article from '../components/Article'
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

class Saved extends Component {
    state= {
        savedArticles: []
    };

    componentDidMount() {
        this.getArticles();
    };

    getArticles = () => {
        API.getArticles()
        .then(res => {
            this.setState({ savedArticles: res.data })
        })
        .catch(err => console.log(err));
    };

    handleDelete = id => {
        console.log(`Deleting ${id}`);
        API.deleteArticle(id)
        .then(res => {
            const articles = this.state.savedArticles.filter(article => article._id !== id);
            this.setState({ savedArticles: articles });
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div className="container">
                <Jumbotron />
                {this.state.savedArticles.map(article => 
                    <Article key={article._id} article={article} handleDelete={this.handleDelete}/>
                )}
            </div>
        );
    }
}

export default Saved;