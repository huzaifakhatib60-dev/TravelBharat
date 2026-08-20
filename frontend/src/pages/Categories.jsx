import { Link } from "react-router-dom";
import "./Categories.css";

function Categories() {
  const categories = {
    "Heritage": [
      "Forts",
      "Palaces",
      "Monuments",
      "Ancient Temples",
      "Historical Building",
      "UNESCO World Heritage Sites",
    ],

    "Religious": [
      "Temples",
      "Mosques",
      "Churches",
      "Gurudwaras",
      "Char Dham",
      "Buddhist monasteries",
    ],

    "Adventure": [
      "Skiing",
      "Camping",
      "Trekking",
      "Paragliding",
      "Scuba Diving",
      "River Rafting",
      "Bungee Jumping",
    ],

    "Nature & Wildlife": [
      "Lakes",
      "Forests",
      "National Parks",
      "Bird Sanctuaries",
      "Wildlife Sanctuaries",
    ],

    "Desert Tourism": [
      "Sand Dunes",
      "Thar Desert",
      "Camel Safari",
      "Desert Camping",
    ],

    "Culture & Festivals": [
      "Onam",
      "Navratri",
      "Durga Puja",
      "Kumbh Mela",
      "Pushkar Fair",
      "Hornbill Festival",
    ],

    "Eco Tourism": [
      "Eco Parks",
      "Nature Camps",
      "Biodiversity Parks",
      "Sustainable Villages",
    ],
  };

  return (
    <div className="categories-page">

      <h1>Categories</h1>

      {Object.entries(categories).map(
        ([category, subcategories]) => (
          <div className="categorie" key={category}>

            <h2>{category}</h2>

            <div className="categorie-grid">

              {subcategories.map((subcategory) => (
                <div
                  className="categorie-card"
                  key={subcategory}
                >

                  <h3>{subcategory}</h3>

                  <Link
                    to={`/explore/category/${encodeURIComponent(
                      subcategory
                    )}`}
                    className="categorie-link"
                  >
                    Explore
                  </Link>

                </div>
              ))}

            </div>

          </div>
        )
      )}

    </div>
  );
}

export default Categories;