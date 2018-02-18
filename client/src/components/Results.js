import React from 'react';

const Results = props => {
    <div>
        {props.results.map(result => 
            <div className="well" key={result.id}>
                <h3><a href={result.web_url}>{result.headline.main}</a></h3>
                <h5>{result.byline.original}</h5>
                <p>{result.snippet}</p>
            </div>
        )};
    </div>
}

export default Results;