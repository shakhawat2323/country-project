import { useEffect } from "react";
import { useState } from "react";
import Countryss from "./countrys/Countryss";
import "./Countrys.css";
// import { Linter } from "eslint";

const Countrys = () => {
  const [countryes, setcountryes] = useState([]);
  const [visitedcountry, setvisitedcountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setcountryes(data));
  }, []);

  const visitedcountryes = (country) => {
    console.log("Add Visited");
    const newvisited = [...visitedcountry, country];
    setvisitedcountry(newvisited);
  };
  return (
    <div>
      <p> visited :{visitedcountry.length} </p>

      <h1>Countrys : {countryes.length}</h1>
      <div className="countrys-container">
        {countryes.map((countryss) => (
          <Countryss
            key={countryss.cca3}
            visitedcountry={visitedcountryes}
            countryss={countryss}
          ></Countryss>
        ))}
      </div>
    </div>
  );
};

export default Countrys;
