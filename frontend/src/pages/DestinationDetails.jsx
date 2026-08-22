import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DestinationDetails.css";

function DestinationDetails() {
  const { stateName } = useParams();

  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!stateName) return;

    const fetchState = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/states/name/${encodeURIComponent(stateName)}`
        );

        if (!response.ok) {
          throw new Error("State not found");
        }

        const data = await response.json();

        console.log("State data:", data);

        setState(data);
      } catch (error) {
        console.error("Error fetching state:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchState();
  }, [stateName]);

  return (
    <div className="destination-details">

      <Link to="/states" className="back-link">
        ← Back to States
      </Link>

      {loading && <h2>Loading...</h2>}

      {error && <p className="error">{error}</p>}

      {state && (
        <>
          <h1>{state.name}</h1>

          <img
            className="state-image"
            src={`/images/${state.image}`}
            alt={state.name}
          />

          <div className="info-grid">

            <div className="info-card">
              <span>Capital</span>
              <h3>{state.capital}</h3>
            </div>

            <div className="info-card">
              <span>Region</span>
              <h3>{state.region}</h3>
            </div>

            <div className="info-card">
              <span>Best Time</span>
              <h3>{state.bestTimeToVisit}</h3>
            </div>

          </div>

          <h2>About {state.name}</h2>

          <p>{state.description}</p>

          <h2>Famous For</h2>

          {state.famousFor && state.famousFor.length > 0 ? (
            <ul>
              {state.famousFor.map((place, index) => (
                <li key={index}>{place}</li>
              ))}
            </ul>
          ) : (
            <p>No famous places added yet.</p>
          )}

          <h2>Languages</h2>

          {state.language && state.language.length > 0 ? (
            <ul>
              {state.language.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          ) : (
            <p>No languages added yet.</p>
          )}
        </>
      )}

    </div>
  );
}

export default DestinationDetails;