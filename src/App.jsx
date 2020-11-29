import './App.css';
import React from "react";
import FilteredList from './FilteredList.jsx';
import productList from "./data.jsx"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currData: productList,
    };
  }
  render() {
    console.log(productList)
  return (
  <div className="App" class="container">
    <div class="left">
    <FilteredList list={this.state.currData} />
  </div>
  <div class="right">
    Needs to be a shopping cart
  </div>
  </div>
  )}
}
