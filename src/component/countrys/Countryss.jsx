// import { useState } from "react";
import { useState } from "react";
import "./countryss.css";

// import Countryss from "./Countryss";

const Countryss = ({ countryss, visitedcountry }) => {
  const { name, flags, population, area, cca3 } = countryss;

  const [visited, setVisited] = useState(false);
  const visitedhandelar = () => {
    setVisited(!visited);
  };
  const Hadalidngdata = () => {
    visitedcountry(countryss);
  };
  console.log(visitedcountry);
  return (
    <div className={`countryss ${visited ? "visited" : "noe-visited"} stylee`}>
      <h3 style={{ color: visited ? "purpal" : "white" }}>
        Name : {name.common}
      </h3>
      <img src={flags.png} alt="" />
      <p>population :{population} </p>
      <p>Area : {area} </p>
      <p>Code : {cca3} </p>
      <button onClick={() => Hadalidngdata(countryss)}>Mark Visited</button>
      <button onClick={visitedhandelar} className="btn">
        Visited
      </button>
      {visited ? "i have visited" : "i am visit"}
    </div>
  );
};

export default Countryss;
