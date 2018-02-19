import React from 'react';

const Results = props => {
    const results = props.results.filter(result => result.document_type === 'article');

    return (
        <div className="results">
            {results.map(result => 
                <div className="well" key={result._id}>
                    <h3><a href={result.web_url} target="_blank">{result.headline.main}</a></h3>
                    <h5>{result.byline.original}</h5>
                    <h6>{result.pub_date}</h6>
                    <p>{result.snippet}</p>
                </div>
            )}
        </div>
    );
}

export default Results;