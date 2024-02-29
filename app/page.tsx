"use client";
import { useEffect, useState } from "react";
import Card from "./components/Card";
import Spinner from "./components/Spinner";

type props = {
  id: string;
  name: string;
  animal: string;
  founder: string;
  houseColours: string;
};

export default function Home() {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataHouses = async () => {
      try {
        const response = await fetch(`https://backendhouses.vercel.app/houses`);
        const allData = await response.json();
        setHouses(allData);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataHouses();
  }, []);

  return (
    <main>
      <h1 className="title">Houses</h1>
      {loading ? (
        <Spinner />
      ) : (
        houses.map((house: props) => (
          <Card
            key={house.id}
            name={house.name}
            animal={house.animal}
            founder={house.founder}
            houseColors={house.houseColours}
          />
        ))
      )}
    </main>
  );
}
