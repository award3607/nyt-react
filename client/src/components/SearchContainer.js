import React, {Component} from 'react';
import Search from './Search';
import API from './utils/API';

class SearchContainer extends Component {
    state = {
        term: '',
        startYear: '',
        endYear: '',
        results = []
    };

    searchNYT = query => {
        API.search(query)
        .then(res => this.setState({ results: res.docs }))
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
        const query = `&q=${this.state.term}`;
        if (parseInt(this.state.startYear)) query += `&being_date=${this.state.startYear}0101`;
        if (parseInt(this.state.endYear)) query += `&end_date=${this.state.endYear}0101`;
        this.searchNYT(query);
    };

    render() {
        return (
            <div>
                <Search
                    term={this.state.term}
                    startYear={this.state.startYear}
                    endYear={thi.state.endYear}
                    handleInputChange={this.state.handleInputChange}
                    handleSearchSubmit={this.state.handleSearchSubmit}
                />
                <Results results={this.state.results} />
            </div>
        );
    };
}