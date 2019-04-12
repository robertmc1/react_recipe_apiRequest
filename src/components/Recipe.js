import React, {Component} from 'react';
import {Link} from 'react-router-dom'

class Recipe extends Component {
    render() {
        const {image_url, title, source_url, publisher, recipe_id} = this.props.recipe;
        return (
            <React.Fragment>
                <div className="col-10 mx-auto col-md-6 col-lg-4 my-3">
                    <div className="card">
                        <img src={image_url} className="img-card-top" style={{height: "14rem"}} alt="recipe"/>
                        <div className="card-body text-capitalize">
                            <h6>{title}</h6>
                            <h6 className="text-warning text-slanted">
                                {publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-primary text-capitalize">
                                detalles
                            </button>
                            <a href={source_url}
                               className="btn btn-success mx-2 text-capitalize"
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                fuente
                            </a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Recipe;