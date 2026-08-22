import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./CategoryDetails.css";

function CategoryDetails() {
  const { categoryName } = useParams();

  const [destinations, setDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `/api/destinations/category/${encodeURIComponent(categoryName)}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch destinations");
        }

        const data = await response.json();

        setDestinations(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load destinations");
      } finally {
        setLoading(false);
      }
    };

    fetchDestinations();
  }, [categoryName]);

  if (loading) {
    return (
      <div className="category-details-page">
        <Link to="/categories" className="back-link">
          ← Back to Categories
        </Link>

        <h1>Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="category-details-page">
        <Link to="/categories" className="back-link">
          ← Back to Categories
        </Link>

        <h2>{error}</h2>
      </div>
    );
  }

  return (
    <div className="category-details-page">
      <Link to="/categories" className="back-link">
        ← Back to Categories
      </Link>

      <h1>{categoryName}</h1>

      {destinations.length === 0 ? (
        <div className="no-destinations">
          <h2>No destinations found</h2>

          <p>
            There are currently no destinations in {categoryName}.
          </p>
        </div>
      ) : (
        <div className="destination-grid">
          {destinations.map((destination) => (
            <div
              className="destination-card"
              key={destination._id}
            >
              {destination.mainImage && (
                <img
                  src={`/images/${destination.mainImage}`}
                  alt={destination.name}
                />
              )}

              <div className="destination-card-content">
                <h2>{destination.name}</h2>

                <p>
                  <strong>Location:</strong>{" "}
                  {destination.city}, {destination.state}
                </p>

                <p>
                  <strong>Category:</strong>{" "}
                  {destination.category}
                </p>

                <p>
                  <strong>Type:</strong>{" "}
                  {destination.subcategory}
                </p>

                <p>{destination.description}</p>

                <p>
                  <strong>Best Time:</strong>{" "}
                  {destination.bestTimeToVisit}
                </p>

                <p>
                  <strong>Rating:</strong>{" "}
                  ⭐ {destination.rating}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryDetails;