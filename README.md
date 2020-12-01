# README

## Organization of components

There are 3 major components used to build artshop:
- FilteredList: This component includes filter and sorting interface and methods that affect what contents will be displayed.
  - It includes Nav, Navbar, and NavDropdown from react-bootstrap to create the navbars that showcase the filter and sorting choices.
  - It also includes the DisplayList, which is a custom component built to display the products.
- DisplayList: This component displays the products available for purchase.
  - It includes Card, ListGroup, and Button from react-bootstrap to create individual cards containing all information pertaining to a particular product.
  - It includes Grid from material UI to display all the Cards together within a responsive grid.
- ShoppingCart: This component displays products that are currently in the cart. It also provides the total cost of the cart. 
  - It also uses Card, ListGroup, Button and Grid components in a similar fashion. However, the way the cards are displayed differ because different buttons (increment, decrement, and remove) are present here.


## How data is passed down through components
The data that is stored in data.jsx is imported in App.jsx. The App component's state takes in two lists, currData and shoppingCart. The currData is essentially the data that is imported while shoppingCart has a mapping of each item in the data as a dict containing the item and its quantity, which is initialized as 0. From these lists, all data flows down to the child components through props.

The child components, which can change the data, have access to the parent's setState and handler methods to change the state.

## How the user trigger state changes

By clicking the navbar links or buttons present in the cards (child components), the user triggers the onClick handler methods, which makes the necessary data modifications, and passes it on to its parent components. This would allow the parent component to reflect the changes to any other components affected by it.
