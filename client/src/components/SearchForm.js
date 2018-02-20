import React from 'react';

const SearchForm = props => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="term">Search Term:</label>
                <input 
                    onChange={props.handleInputChange}
                    value={props.term}
                    name="term"
                    type="text"
                    className="form-control"
                    id="term"
                />
                <label htmlFor="startYear">Starting Year:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.startYear}
                    name="startYear"
                    type="text"
                    className="form-control"
                    id="startYear"
                />
                <label htmlFor="endYear">Ending Year:</label>
                <input
                    onChange={props.handleInputChange}
                    value={props.endYear}
                    name="endYear"
                    type="text"
                    className="form-control"
                    id="endYear"
                />
                <button onClick={props.handleSearchSubmit} className="btn btn-primary">
                    Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;