import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function PlaceDetails() {
  const { destinationName } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestination = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/destinations/search?search=${encodeURIComponent(destinationName)}`
        );
        if (!response.ok) throw new Error("Unable to load this destination.");

        const results = await response.json();
        const match = results.find(
          (item) => item.name?.trim().toLowerCase() === destinationName?.trim().toLowerCase()
        );

        if (!match) throw new Error("Destination details are not available yet.");
        setDestination(match);
      } catch (fetchError) {
        setError(fetchError.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDestination();
  }, [destinationName]);

  return (
    <main className="place-details-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      {loading && <h1>Loading destination...</h1>}
      {error && <p role="status">{error}</p>}
      {destination && (
        <article className="place-details-card">
          {destination.mainImage && (
            <img src={`/images/${destination.mainImage}`} alt={destination.name} />
          )}
          <div>
            <h1>{destination.name}</h1>
            <p><strong>Location:</strong> {destination.city}, {destination.state}</p>
            <p><strong>Category:</strong> {destination.category}</p>
            <p>{destination.description}</p>
            <p><strong>Best time to visit:</strong> {destination.bestTimeToVisit}</p>
            <p><strong>Rating:</strong> ⭐ {destination.rating}</p>
          </div>
        </article>
      )}
    </main>
  );
}

export default PlaceDetails;
