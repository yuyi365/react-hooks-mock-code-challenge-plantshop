import React from "react";
import PlantCard from "./PlantCard";

const PlantList = ({allPlants}) => {

  const mapPlants = allPlants.map((plant) => {
    return <PlantCard 
      key={plant.id}
      id={plant.id}
      name={plant.name}
      image={plant.image}
      price={plant.price}
    />
  })

  return (
    <ul className="cards">{mapPlants}</ul>
  );
}

export default PlantList;
