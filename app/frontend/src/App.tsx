import React, { useState, useMemo } from 'react';
import Header from "./components/header";
import { ICard } from "./components/main/card";
import Cards from "./components/main";

function App() {
  const cards = useMemo<ICard[]>(() => [{
    main: false,
    title: "Basic",
    prices: [19.99, 199.99],
    storage: "500 gb",
    users: 2,
    sendUp: 3
  }, {
    main: true,
    title: "Professional",
    prices: [24.99, 249.99],
    storage: "1 tb",
    users: 5,
    sendUp: 10
  }, {
    main: false,
    title: "Master",
    prices: [39.99, 399.99],
    storage: "2 tb",
    users: 10,
    sendUp: 20
  }], []);
  const [priceIndex, setPriceIndex] = useState(0);
  
  const handleChange = () => {
    setPriceIndex(priceIndex === 0 ? 1 : 0);
  }

  return (
    <div className="App">
      <Header handleChange={handleChange}/>
      <br />
      <Cards cards={cards} priceIndex={priceIndex}/>
      <br />
    </div>
  );
}

export default App;
