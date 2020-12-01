import './ShoppingCart.css';
import React from "react";
import { Card, ListGroup, Button, ButtonGroup} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

// The ShoppingCart component is the component that we use display the products in the cart.
export default class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list,
      };
      this.totalCost = this.totalCost.bind(this)
      this.addItem = this.props.addItem;
      this.removeItem = this.props.removeItem;
      this.handleDecrease = this.props.handleDecrease;
    }

    // totalCost calculates and returns the total cost of the cart 
    // based on the current quantity and price of each product in the list.
    totalCost() {
      const newTotal = this.props.list.reduce(
        (accumulator, item) => accumulator + (Number(item.quantity) * Number(item.product.price)), 0);
      return Number(newTotal);
    }

    // isInCart takes in an item and returns true if its quantity is more than 0.
    // It returns false otherwise.
    isInCart = item => {
      if (item.quantity > 0) {
        return true;
      } else {
        return false;
      }
    }

    // Renders the html for this component.
    // There is a meta Card within which, there is a Grid.
    // Within the Grid, each item which fits the isInCart filter is mapped
    // to create a Card that has each information of the item displayed.
    // This includes the current quantity asked for by the user.
    // In each Card, there is an increase, decrease, and remove active buttons
    // and these buttons call related functions when clicked by the user.
    // Lastly, the footer of the Card displays the total cost of the cart.
    render() {
        console.log("CAME TO SHOPPING CART");
        return (
        <div>
            <Card>
            <Card.Header as="h5">Shopping Cart</Card.Header>
            <Card.Body>
              <Grid container justify="center" spacing={3}>
              {(this.props.list.filter(this.isInCart)).map(item => (
              <Grid key={item.product} item>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={item.product.image} />
                  <Card.Body>
                  <Card.Title>{item.product.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Size: {item.product.size}</ListGroup.Item>
                    <ListGroup.Item>Shape: {item.product.shape}</ListGroup.Item>
                    <ListGroup.Item>Cost: ${item.product.price}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button value={item.product} onClick={() => this.handleDecrease(item.product)}> - </Button>
                    <Button disabled> {item.quantity} </Button>
                    <Button value={item.product} onClick={() => this.addItem(item.product)}> + </Button>
                  </ButtonGroup>
                  <br />
                  <br />
                  <Button variant="primary" value={item.product} onClick={() => this.removeItem(item.product)}>Remove Item</Button>
                </Card.Body>
                </Card>
              </Grid>
          ))}
              </Grid>
            </Card.Body>
            <Card.Footer><p id="totalCost">Total: ${this.totalCost()}</p></Card.Footer>
            </Card>
        </div>
        )};
  };