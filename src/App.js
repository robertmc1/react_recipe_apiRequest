import React, { Component } from 'react';
import './App.css';
import {recipes} from "./tempList";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";

class App extends Component {
  state = {
    recipes:[],
    url:"https://www.food2fork.com/api/search?key=80c5575dc7188084b7e44abe520a3ed8"
  };

  async getRecipes(){
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes
      })
    }catch (error) {
      console.log(error);
    }
  }

  //after app component mount then we can use the method
  componentDidMount() {
    this.getRecipes()
  }

  render() {
    console.log(this.state.recipes);

    return (
      <React.Fragment>
        <RecipeList/>
        <RecipeDetails/>
      </React.Fragment>
    );
  }
}

export default App;
