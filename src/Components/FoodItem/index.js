import React from "react";
import "./index.scss";

export default class FoodItem extends React.Component {
  render() {
    const { name, image, onClick} = this.props;

    return (
      <div className="food_item_component" onClick={onClick}>
        <div className="food_image_container">
          <img src={image} />
        </div>
        <a href={`https://en.wikipedia.org/wiki/${name}`}><h5>{name}</h5></a>
      </div>
    );
  }
}
