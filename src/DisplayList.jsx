import React from "react";
import { Card, ListGroup, Button, CardColumns} from "react-bootstrap";

export default class DisplayList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list,
      };
    }

  
    render() {
        console.log(this.props.list)
    return (
    <div>
      <CardColumns>
        {this.props.list.map(item =>
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
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
        </Card>
      )}
      </CardColumns> 
    </div>
    )};
  };