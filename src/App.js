import React, { Component } from 'react';
import './App.css';
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes: recipes,//mi data local
    url:"https://www.food2fork.com/api/search?key=80c5575dc7188084b7e44abe520a3ed8",
    details_id: 35385,
    pageIndex: 1
  };
  //-------------------------------------------------------------------------------
  // this is for the API, now I´ll work with a personal data
  async getRecipes(){
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: recipes                  //para la api
        // recipes: jsonData.recipes     //para local data
      })
    }catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes()
  }
  //---------------------------------------------------------------

  displayPage = index => {
    switch (index) {
      default:
        case 1:
        return (<RecipeList
            recipes = {this.state.recipes}
            handleDetails={this.handleDetails}/>);
        case 0:
        return (<RecipeDetails
            id={this.state.details_id}
            handleIndex={this.handleIndex}/>);
    }
  };

  handleIndex = index => {
    this.setState({
        pageIndex: index
    });
  };

  handleDetails = (index,id) => {
    this.setState({
      pageIndex: index,
      details_id: id
    });
  };
  
  render() {
    //console.log(this.state.recipes);
    return (
      <React.Fragment>
        {this.displayPage(this.state.pageIndex)}
      </React.Fragment>
    );
  }
}

export default App;
