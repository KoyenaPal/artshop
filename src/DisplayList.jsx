import React from "react";
import { Card, ListGroup, Button} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";

export default class DisplayList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list,
      };
      this.addItem = this.props.addItem;
    }

    render() {
        return (
        <div>
          <Grid container justify="center" spacing={3}>
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