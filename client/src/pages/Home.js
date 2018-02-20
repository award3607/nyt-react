import React, {Component} from 'react';
import SearchForm from '../components/SearchForm';
import ArticlesContainer from '../components/ArticlesContainer';
import Jumbotron from '../components/Jumbotron';
import API from '../utils/API';

class Home extends Component {
    state = {
        term: '',
        startYear: '',
        endYear: '',
        results: []
    };

    searchNYT = query => {
        API.search(query)
        .then(res => {
            console.log(res);
            this.setState({ results: res.data.response.docs })
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
                <ArticlesContainer articles={this.state.results} />
            </div>
        );
    }
}

export default Home;