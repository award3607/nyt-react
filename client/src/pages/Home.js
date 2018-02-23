import React, {Component} from 'react';
import SearchForm from '../components/SearchForm';
import Article from '../components/Article'
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

class Home extends Component {
    state = {
        term: '',
        startYear: '',
        endYear: '',
        results: [],
    };

    searchNYT = query => {
        API.search(query)
        .then(res => {
            console.log(res);
            const rawArticles = res.data.response.docs.filter(doc => doc.document_type === 'article');
            console.log(rawArticles);
            const articles = [];
            rawArticles.forEach(rawArticle => {
                articles.push({
                    title: rawArticle.headline.main,
                    date: rawArticle.pub_date,
                    url: rawArticle.web_url,
                    byline: rawArticle.byline.original,
                    snippet: rawArticle.snippet
                });                
            });
            console.log(`Processed articles: ${articles.length}`);
            this.setState({ results: articles });
        })
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleSearchSubmit = event => {
        event.preventDefault();
        let query = `&q=${this.state.term}`;
        if (parseInt(this.state.startYear, 10)) query += `&being_date=${this.state.startYear}0101`;
        if (parseInt(this.state.endYear, 10)) query += `&end_date=${this.state.endYear}0101`;
        this.searchNYT(query);
    };

    handleSave = articleToSave => {
        API.saveArticle(articleToSave)
        .then(res => {
            console.log(`Saved article ${articleToSave.title}`);
            const articles = this.state.results.filter(article => article.title !== articleToSave.title);
            this.setState({ results: articles });
        })
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        return (
            <div className="container">
                <Jumbotron />
                <SearchForm
                    term={this.state.term}
                    startYear={this.state.startYear}
                    endYear={this.state.endYear}
                    handleInputChange={this.handleInputChange}
                    handleSearchSubmit={this.handleSearchSubmit}
                />
                {this.state.results.map(article => 
                    <Article key={article._id} article={article} handleSave={this.handleSave}/>
                )}
            </div>
        );
    }
}

export default Home;