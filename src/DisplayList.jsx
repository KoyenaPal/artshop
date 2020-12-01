import React from "react";
import { Card, ListGroup, Button} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

// The DisplayList component is the component that we use display the products.
export default class DisplayList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list,
      };
      // addItem carried over from the parent component
      this.addItem = this.props.addItem;
    }

    // Renders the html for this component.
    // There is a Grid, within which, each item is mapped 
    // to create a Card that has each information of the item displayed.
    // In each Card, there is also an "Add to Cart" button. 
    // When it is clicked, the addItem function is called with the item as its parameter.
    render() {
        return (
        <div>
          <Grid container justify="center" spacing={2}>
          {this.props.list.map(item => (
          <Grid key={item.name} item>
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Size: {item.size}</ListGroup.Item>
            <ListGroup.Item>Shape: {item.shape}</ListGroup.Item>
            <ListGroup.Item>Cost: ${item.price}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Button variant="primary" value={item} onClick={() => this.addItem(item)}> Add to Cart</Button>
          </Card.Body>
          </Card>
          </Grid>
          ))}
          </Grid>
        </div>
        )};
  };