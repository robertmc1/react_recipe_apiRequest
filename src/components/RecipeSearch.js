import React, {Component} from 'react';

class RecipeSearch extends Component {
    render() {
        const {value, handleChange, handleSubmit} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-8 mt-5 text-center">
                            <h1 className="text-slanted">
                                Buscar receta en <strong className="text-danger">
                                {" "} Food2Fork
                            </strong>
                            </h1>
                            <form className="mt-4"
                                  onSubmit={handleSubmit}
                            >
                                <label htmlFor="search" >
                                    Escribe los ingredientes separados por comas
                                </label>
                                <div className="input-group">
                                    <input type="search"
                                           value={value}
                                           onChange={handleChange}
                                           name="seacrch"
                                           className="form-control"
                                           placeholder="pollo, cebolla, zanahoria ..."/>
                                    <div className="input-group-append">
                                        <button type="submit"
                                                className="input-group-text bg-primary text-width">
                                            <i className="fas fa-search">

                                            </i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeSearch;