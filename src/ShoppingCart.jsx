import './ShoppingCart.css';
import React from "react";
import { Card, ListGroup, Button, ButtonGroup} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

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

    totalCost() {
      const newTotal = this.props.list.reduce(
        (accumulator, item) => accumulator + (Number(item.quantity) * Number(item.product.price)), 0);
      return Number(newTotal);
    }
    isInCart = item => {
      if (item.quantity > 0) {
        return true;
      } else {
        return false;
      }
    }
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
            <Card.Footer><p id="totalCost">Total: ${this.totalCost()}</p><Button id="checkoutButton">Checkout</Button></Card.Footer>
            </Card>
        </div>
        )};
  };