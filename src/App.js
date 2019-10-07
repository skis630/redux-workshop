import React from "react";
import "./App.scss";
import AddFoodPage from "./Pages/AddFoodPage";
import OrderPage from "./Pages/OrderPage";
import OrdersListPage from "./Pages/OrdersListPage";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import DEFAULT_FOODS from './data/foods.json'; 

const ADD_FOOD = "ADD_FOOD";
const ORDER = "ORDER";
const ORDER_LIST = "ORDER_LIST";

const PAGES = {
  [ORDER]: {
    title: "Order",
    component: OrderPage,
    route: "/order"
  },
  [ORDER_LIST]: {
    title: "Orders List",
    component: OrdersListPage,
    route: "/order-list"
  },
  [ADD_FOOD]: {
    title: "Add Food",
    component: AddFoodPage,
    route: "/add-food"
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.addFood = this.addFood.bind(this);

    this.state = {
      foods: DEFAULT_FOODS
    }
  }

  addFood(newFood) {
    let newFoodList = [...DEFAULT_FOODS, newFood]
    console.log(JSON.stringify(newFood));
    console.log(newFoodList[0])

    this.setState({
      foods: newFoodList
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <h1>
              GiveBite
            </h1>
            <nav>
              <ul onChange={this.onPageChange}>
                {Object.keys(PAGES).map(currPageId => (
                  <li
                    key={currPageId}
                  >
                    <NavLink className="nav_item" to={PAGES[currPageId].route} activeClassName="active">
                      {PAGES[currPageId].title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          <div className="page_container">
            {Object.values(PAGES).map(page => (
              <Route key={page.route} path={page.route}  
                     render={(props) => <page.component {...props} foods={this.state.foods} 
                     addFood={(newFood) => this.addFood(newFood)} />} />
            ))}
          </div>
        </div>
      </Router>
    );
  }
}
