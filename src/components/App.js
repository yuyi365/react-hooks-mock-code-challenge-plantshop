import React, {useEffect, useState} from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

const App = () => {

  const [allPlants, setAllPlants] = useState([]);

  useEffect(() => {
    fetch('http://localhost:6001/plants')
    .then((res) => res.json())
    .then((data) => setAllPlants(data));
  }, [])

  return (
    <div className="app">
      <Header />
      <PlantPage 
        allPlants={allPlants}
        setAllPlants={setAllPlants}
      />
    </div>
  );
}

export default App;
