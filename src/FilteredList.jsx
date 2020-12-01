import './FilteredList.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import DisplayList from './DisplayList.jsx';

// The FilteredList component is the component that we use 
// to filter the products displayed based on the filters we
// currently provide and the parameters the user has chosen.
export default class FilteredList extends React.Component {
    constructor(props) {
      super(props);
      // the default size, shape, and range asked for is "AllSize", "AllShape"
      // and no ordering of products based on price, respectively.
      this.state = {
        list: this.props.list,
        originalList: [...this.props.list],
        size: "AllSize",
        shape:"AllShape",
        range:"Select",
      };
      // addItem carried over from the parent component
      this.addItem = this.props.addItem
      // a function in this component that needs to be used in the render method.
      this.priceSort = this.priceSort.bind(this)
    }
    
    // onSelectFilterSize takes in the size requested by the user and
    // sets the size value of the state to be the value of "event".
    onSelectFilterSize = event => {
        this.setState({
            size: event
        });
    }

    // onSelectFilterShape takes in the shape requested by the user and
    // sets the shape value of the state to be the value of "event".
    onSelectFilterShape = event => {
        this.setState({
            shape: event
        });
    }

    // matchesFilterSize takes in an item and returns a boolean.
    // - Returns true if the size of the product matches the size
    //   currently set by the user or is set as "AllSize".
    // - Returns false otherwise.
    matchesFilterSize = item => {
        if (this.state.size === "AllSize") {
            return true;
        } else if (this.state.size === item.size) {
            return true;
        } else {
            return false;
        };
    };

    // matchesFilterShape takes in an item and returns a boolean.
    // - Returns true if the shapee of the product matches the shape
    //   currently set by the user or is set as "AllShape".
    // - Returns false otherwise.
    matchesFilterShape = item => {
        if (this.state.shape === "AllShape") {
            return true;
        } else if (this.state.shape === item.shape) {
            return true;
        } else {
            return false;
        };
    };

    // priceSort takes in two items and returns a numerical value
    // based on the range asked by the user.
    priceSort(a, b) {
        const aCost = Number(a.price);
        const bCost = Number(b.price);
        if (this.state.range === "Select") {
            return 0
        } else if (this.state.range === "Lowest to Highest"){
            return aCost - bCost
        } else if (this.state.range === "Highest to Lowest"){
            return bCost - aCost
        }
    }

    // onSelectFilterRange takes in the range requested by the user and
    // sets the range value of the state to be the value of "event".
    onSelectFilterRange = event => {
        this.setState({
            range: event
        });
    }

    // matchesAllFilter takes in an item and returns a boolean.
    // - Returns true if it matches both the shape and size of the current state.
    // - Returns false otherwise.
    matchesAllFilter = item => {
        console.log("Came to matches")
        if (this.matchesFilterShape(item) && this.matchesFilterSize(item)) {
            return true;
        } else {
            return false;
        } 
    }

    // Renders the html for this component.
    // There are 3 Navbars, each for different filters and sorters.
    // The final child div (product-list-display) calls in DisplayList to
    // display the current set of products that matches the filters and are
    // ordered the way the user askes for.
    render() {
    return (
        <div id="filter-side">
            <div id="meta-nav-bar">
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
            <Navbar bg="light" expand="lg">
            <Navbar.Brand >Price Range: </Navbar.Brand> 
            <NavDropdown title={this.state.range} id="basic-nav-dropdown">
                <NavDropdown.Item eventKey="Select" onSelect={this.onSelectFilterRange} >Select</NavDropdown.Item>
                <NavDropdown.Item eventKey="Lowest to Highest" onSelect={this.onSelectFilterRange}>Lowest to Highest</NavDropdown.Item>
                <NavDropdown.Item eventKey="Highest to Lowest" onSelect={this.onSelectFilterRange}>Highest to Lowest</NavDropdown.Item>
            </NavDropdown>
            </Navbar>
            </div>
        <div id="product-list-display">
        <DisplayList list={(this.props.list.filter(this.matchesAllFilter)).sort(this.priceSort)} addItem={this.addItem} />
        </div>
        </div>
        )};
  };