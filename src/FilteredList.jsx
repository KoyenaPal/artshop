import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import DisplayList from './DisplayList.jsx';

export default class FilteredList extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        list: this.props.list,
        originalList: [...this.props.list],
        size: "AllSize",
        shape:"AllShape",
        range:"Select",
      };
      this.addItem= this.props.addItem
      this.priceSort = this.priceSort.bind(this)
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

    onSelectFilterRange = event => {
        this.setState({
            range: event
        });
    }

    matchesAllFilter = item => {
        console.log("Came to matches")
        if (this.matchesFilterShape(item) && this.matchesFilterSize(item)) {
            return true;
        } else {
            return false;
        } 
    }

    render() {
    return (
        <div>
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