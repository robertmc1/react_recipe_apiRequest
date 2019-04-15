import React, {Component} from 'react';
import {recipe} from "../tempDetails";

class RecipeDetails extends Component {
    // constructor (props){
    //     super(props);
    //
    //     this.state = {
    //         recipe: recipe,
    //         url: `https://www.food2fork.com/api/get?key=80c5575dc7188084b7e44abe520a3ed8&rId=${
    //             this.props.id}`
    //     }
    // }
    //
    // //after app component mount then we can use the method
    // async componentDidMount() {
    //     try {
    //         const data = await fetch(this.state.url);
    //         const jsonData = await data.json();
    //         this.setState({
    //             recipe: jsonData.recipe
    //         })
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    state = {
        recipe: recipe
    };
    async componentDidMount(){
        const id = this.props.id;
        const url = `https://www.food2fork.com/api/get?key=80c5575dc7188084b7e44abe520a3ed8&rId=${id}`

        try {
            const data = await fetch(url);
            const jsonData = await data.json();
            this.setState((state, props) => {
                return {recipe: jsonData.recipe}
            }, () => {

            });
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        const {image_url, publisher, publisher_url, source_url, title, ingredients} = this.state.recipe;

        const {handleIndex} = this.props;
        return (
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <button onClick={() => handleIndex(1)}
                                    type="button"
                                    className="btn btn-warning mb-5 text-uppercase">
                                volver a la las recetas
                            </button>
                            <img src={image_url} className="d-block w-100" alt="recipe"/>
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3">
                            <h6 className="text-uppercase">
                                {title}
                            </h6>
                            <h6 className="text-warning text-capitalize text-slanted">
                                publicado por: {publisher}
                            </h6>
                            <a href={publisher_url}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-primary mt-2 mr-2 text-capitalize">
                                web publicación
                            </a>
                            <a href={source_url}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="btn btn-success mt-2 mx-auto text-capitalize">
                                receta
                            </a>
                            <ul className="list-group mt-4">
                                <h2 className="mt-3 mb-4">
                                    Ingredientes:
                                </h2>
                                {ingredients.map((item, index) => {
                                    return (
                                        <li key={index} className="list-group-item text-slanted">
                                            {item}
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default RecipeDetails;