import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import DisplayList from './DisplayList.jsx';

export default class FilteredList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list,
        size: "AllSize",
        shape:"AllShape",
      };
    }

    onSelectFilterSize = event => {
        this.setState({
            size: event
        });
    }
    onSelectFilterShape = event => {
        this.setState({
            shape: event
        });
    }
    matchesFilterSize = item => {
        if (this.state.size === "AllSize") {
            return true;
        } else if (this.state.size === item.size) {
            return true;
        } else {
            return false;
        };
    };
    matchesFilterShape = item => {
        if (this.state.shape === "AllShape") {
            return true;
        } else if (this.state.shape === item.shape) {
            return true;
        } else {
            return false;
        };
    };
    
    matchesAllFilter = item => {
        if (this.matchesFilterShape(item) && this.matchesFilterSize(item)) {
            return true;
        } else {
            return false;
        } 
    }

  
    render() {
        console.log(this.state.size)
        console.log(this.state.type)
    return (
        <div>
            <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
            <Navbar.Brand >Size: </Navbar.Brand> 
                <Nav.Item>
                    <Nav.Link eventKey="AllSize" onSelect={this.onSelectFilterSize}> All
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Small" onSelect={this.onSelectFilterSize}> Small
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Medium" onSelect={this.onSelectFilterSize}> Medium
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Large" onSelect={this.onSelectFilterSize}> Large
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
            <Navbar bg="light" expand="lg">
            <Nav className="mr-auto">
            <Navbar.Brand >Shape: </Navbar.Brand> 
                <Nav.Item>
                    <Nav.Link eventKey="AllShape" onSelect={this.onSelectFilterShape}> All
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Landscape" onSelect={this.onSelectFilterShape}> Landscape
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="Portrait" onSelect={this.onSelectFilterShape}> Portrait
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar>
        <DisplayList list={this.props.list.filter(this.matchesAllFilter)} />
        </div>
        )};
  };