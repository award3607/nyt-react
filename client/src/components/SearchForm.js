import React from 'react';

const SearchForm = props => {
    return (
        <div className="row">
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Search Parameters</h3>
                    </div>
                    <div className="panel-body">
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
                            </div>
                            <div className="form-group">
                                <label htmlFor="startYear">Starting Year:</label>
                                <input
                                    onChange={props.handleInputChange}
                                    value={props.startYear}
                                    name="startYear"
                                    type="text"
                                    className="form-control"
                                    id="startYear"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="endYear">Ending Year:</label>
                                <input
                                    onChange={props.handleInputChange}
                                    value={props.endYear}
                                    name="endYear"
                                    type="text"
                                    className="form-control"
                                    id="endYear"
                                />
                            </div>
                            <button onClick={props.handleSearchSubmit} className="btn btn-primary">
                            <span className="glyphicon glyphicon-search" aria-hidden="true"></span> Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchForm;