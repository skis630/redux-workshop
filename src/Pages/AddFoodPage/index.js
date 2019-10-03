import React from "react";
import "./index.scss";
import DEFAULT_FOODS from "../../data/foods";
import FoodList from "../../Components/FoodList";

export default class AddFoodPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: DEFAULT_FOODS
    };

    this.addFood = this.addFood.bind(this);
  }

  addFood() {
    let name = document.getElementById("food-name").value;
    let img = document.getElementById("food-img").value;

    let newFood = {
      id: name,
      name,
      image: img
    } 

    let newFoodList = [...DEFAULT_FOODS, newFood]
    console.log(JSON.stringify(newFood));
    console.log(newFoodList[0])

    this.setState({
      foods: newFoodList
    });
  }

  render() {
    const { foods } = this.state;

    return (
      <main className="add_food_page">
        <section>
          <h2>Add New Food</h2>
          <form>
            <label>
              <span className="input_label">Food name:</span>
              <input id="food-name" className="food_name"></input>
            </label>
            <label>
              <span className="input_label">Food image:</span>
              <input id="food-img" className="food_image" type="url"></input>
            </label>
            <button className="submit_new_food" type="button" onClick={this.addFood}>
              Add food
            </button>
          </form>
        </section>
        <section className="food_list_section">
          <h3>Food list</h3>
          <FoodList foods={foods} />
        </section>
      </main>
    );
  }
}
