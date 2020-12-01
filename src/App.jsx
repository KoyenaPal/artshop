import './App.css';
import React from "react";
import FilteredList from './FilteredList.jsx';
import ShoppingCart from "./ShoppingCart.jsx";
import productList from "./data.jsx";

// The App component is the main component that we use 
// to hold and run all the other components.
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // currData a list that contains the entire dataset imported. 
      currData: productList,
      // shoppingCart a list of dict that
      // keeps track of each product's quantity
      shoppingCart: productList.map(p => ({ product: p, quantity: 0 })),
    };
  }

  // addItem takes in an item and updates the shoppingCart 
  // to increase the quantity of the item asked for.
  addItem = item => {
      const newShoppingCart = [...this.state.shoppingCart];
      for (var i in newShoppingCart) {
        // increase the quantity of the item by 1 if the
        // current element's product matches the item.
        if (newShoppingCart[i].product === item) {
          const currQuant = Number(newShoppingCart[i].quantity)
          newShoppingCart[i].quantity = currQuant + 1
        }
      }
      this.setState({shoppingCart: newShoppingCart});
  }

  // removeItem takes in an item and updates the shoppingCart 
  // to set the quantity of the item to 0.
  removeItem = item => {
    const newShoppingCart = [...this.state.shoppingCart];
    for (var i in newShoppingCart) {
      // set the quantity of the item to 0 if the
      // current element's product matches the item.
      if (newShoppingCart[i].product === item) {
        newShoppingCart[i].quantity = 0
      }
    }
    this.setState({shoppingCart: newShoppingCart});
  }

  // handleDecrease takes in an item and updates the shoppingCart 
  // to decrease the quantity of the item asked for.
  handleDecrease = item => {
    const newShoppingCart = [...this.state.shoppingCart];
    for (var i in newShoppingCart) {
      // decrease the quantity of the item by 1 (or keep at 0 if is already at 0) 
      // if the current element's product matches the item.
      if (newShoppingCart[i].product === item) {
        const currQuant = Number(newShoppingCart[i].quantity)
        if (currQuant >= 1) {
          newShoppingCart[i].quantity = currQuant - 1
        }
      }
    }
    this.setState({shoppingCart: newShoppingCart}); 
  }

  // Renders the html for this component.
  // custom-header is the header for the application.
  // The next div has two child divs next to each other.
  // - The flex-child-left div displays the products that can be added.
  // - The flex-child-right div contains the shoppingCart, which displays
  //   the products intended to be bought by the user as well as the
  //   total cost of the cart.
  render() {
    return (
      <div className="App">
        <div>
        <h1 id="custom-header">Art Shop</h1>
        </div>
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
