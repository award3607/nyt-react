import React from 'react';
// import API from '../utils/API';

const Article = props => {

    return (
        <div className="row">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3><a href={props.article.url} target="_blank">{props.article.title}</a></h3>
                </div>
                <div className="panel-body">
                    <h5>{props.article.byline}</h5>
                    <h6>{props.article.date}</h6>
                    <p>{props.article.snippet}</p>
                </div>
                <div className="panel-footer">
                    { props.article.isSaved
                        ? <button className="btn btn-danger" onClick={() => props.handleDelete(props.article._id)}>
                            <span className="glyphicon glyphicon-remove" aria-hidden="true"></span> Delete
                        </button>
                        : <button className="btn btn-primary" onClick={() => props.handleSave(props.article)}>
                            <span className="glyphicon glyphicon-save" aria-hidden="true"></span> Save
                        </button>
                    }
                </div>
            </div>
        </div>
    );
}

export default Article;