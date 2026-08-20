import { Link } from "react-router-dom";
import "./States.css";

function States() {
  const regions = {
    "North India": [
      "Jammu & Kashmir",
      "Himachal Pradesh",
      "Punjab",
      "Haryana",
      "Delhi",
      "Uttarakhand",
      "Uttar Pradesh",
      "Chandigarh",
    ],

    "South India": [
      "Andhra Pradesh",
      "Telangana",
      "Tamil Nadu",
      "Kerala",
      "Karnataka",
      "Puducherry",
      "Lakshadweep",
    ],

    "East India": [
      "West Bengal",
      "Odisha",
      "Bihar",
      "Jharkhand",
    ],

    "West India": [
      "Maharashtra",
      "Goa",
      "Gujarat",
      "Rajasthan",
      "Dadra & Nagar Haveli and Daman & Diu",
    ],

    "Central India": [
      "Madhya Pradesh",
      "Chhattisgarh",
    ],

    "North-East India": [
      "Assam",
      "Arunachal Pradesh",
      "Meghalaya",
      "Manipur",
      "Mizoram",
      "Nagaland",
      "Tripura",
      "Sikkim",
    ],
  };

  return (
   <div className="states-page">

      <h1>Explore India by Region</h1>

      {Object.entries(regions).map(([region, states]) => (

        <div className="region" key={region}>

          <h2>{region}</h2>

          <div className="state-grid">

            {states.map((state) => (

              <div className="state-card" key={state}>

                <h3>{state}</h3>

                <Link to={`/explore/state/${encodeURIComponent(state)}`} className="state-card-Link">Explore</Link>

              </div>

            ))}

          </div>

        </div>

      ))}

    </div>
  );
}

export default States;