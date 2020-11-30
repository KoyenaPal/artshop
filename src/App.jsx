import './App.css';
import React from "react";
import FilteredList from './FilteredList.jsx';
import ShoppingCart from "./ShoppingCart.jsx";
import productList from "./data.jsx";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currData: productList,
      shoppingCart: productList.map(p => ({ product: p, quantity: 0 })),
    };
  }

  addItem = item => {
      const newShoppingCart = [...this.state.shoppingCart];
      for (var i in newShoppingCart) {
        if (newShoppingCart[i].product === item) {
          const currQuant = Number(newShoppingCart[i].quantity)
          newShoppingCart[i].quantity = currQuant + 1
        }
      }
      console.log(newShoppingCart)
      this.setState({shoppingCart: newShoppingCart});
  }

  removeItem = item => {
    console.log("CAME HERE")
    const newShoppingCart = [...this.state.shoppingCart];
    for (var i in newShoppingCart) {
      if (newShoppingCart[i].product === item) {
        newShoppingCart[i].quantity = 0
      }
    }
    console.log(newShoppingCart)
    this.setState({shoppingCart: newShoppingCart});
  }

  handleDecrease = item => {
    const newShoppingCart = [...this.state.shoppingCart];
    for (var i in newShoppingCart) {
      if (newShoppingCart[i].product === item) {
        const currQuant = Number(newShoppingCart[i].quantity)
        if (currQuant >= 1) {
          newShoppingCart[i].quantity = currQuant - 1
        }
      }
    }
    console.log(newShoppingCart)
    this.setState({shoppingCart: newShoppingCart}); 
  }

  render() {
  return (
      <div className="App">
        <h1>Art Shop</h1>
        <div className="flex-container">
          <div className="flex-child-left">
            <FilteredList list={this.state.currData} addItem={this.addItem}/>
          </div>
          <div className="flex-child-right">
            <ShoppingCart list={this.state.shoppingCart} addItem={this.addItem} removeItem={this.removeItem} handleDecrease={this.handleDecrease} />
            </div>
          </div>
        </div>
  )}
}
