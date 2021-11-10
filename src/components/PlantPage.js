import React, {useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const PlantPage = ({allPlants, setAllPlants}) => {

  const [search, setSearch] = useState("");

  const handleSearch = (text) => {
    setSearch(text);
  }

  const plantsToDisplay = allPlants.filter((plant) => {
    return plant.name.toLowerCase().includes(search.toLowerCase());
  })

  const addPlant = (newPlant) => {
    setAllPlants([
      ...allPlants,
      newPlant
    ]);
  }

  return (
    <main>
      <NewPlantForm 
        addPlant={addPlant}
      />
      <Search
        handleSearch={handleSearch}
      />
      <PlantList 
        allPlants={plantsToDisplay}
        setAllPlants={setAllPlants}
      />
    </main>
  );
}

export default PlantPage;
