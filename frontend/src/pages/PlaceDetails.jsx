import { Link, useParams } from "react-router-dom";

const destinationImages = import.meta.glob("../assets/*.png", {
  eager: true,
  import: "default",
});

const destinations = {
  "Ajanta Caves": ["Heritage", "Chhatrapati Sambhajinagar, Maharashtra", "A complex of ancient Buddhist cave monuments known for rock-cut architecture and murals.", "ajanta-caves"],
  "Ellora Caves": ["Heritage", "Chhatrapati Sambhajinagar, Maharashtra", "A group of rock-cut Hindu, Buddhist, and Jain monuments, including the Kailasa temple.", "ellora-caves"],
  "Agra Fort": ["Heritage", "Agra, Uttar Pradesh", "A historic Mughal fort overlooking the Yamuna River, close to the Taj Mahal.", "agra-fort"],
  "Taj Mahal": ["Heritage", "Agra, Uttar Pradesh", "A white marble mausoleum commissioned by Mughal emperor Shah Jahan and a UNESCO World Heritage Site.", "taj-mahal"],
  "Qutub Minar": ["Heritage", "Delhi", "A landmark minaret in the Qutub complex, built in the early Delhi Sultanate period.", "qutub-minar"],
  Hampi: ["Heritage", "Vijayanagara district, Karnataka", "The ruins of the Vijayanagara Empire sit among the boulder-strewn landscape of the Tungabhadra River valley.", "hampi"],
  Khajuraho: ["Heritage", "Chhatarpur district, Madhya Pradesh", "A group of medieval temples celebrated for their detailed stone architecture and sculpture.", "khajuraho"],
  "Fatehpur Sikri": ["Heritage", "Agra district, Uttar Pradesh", "A planned Mughal city built by Emperor Akbar, known for its palaces, courtyards, and gateways.", "fatehpur-sikri"],
  Shimla: ["Hill Station", "Himachal Pradesh", "A Himalayan hill town known for its colonial-era centre, ridge-top views, and mountain rail journey.", "shimla"],
  Manali: ["Hill Station", "Kullu district, Himachal Pradesh", "A mountain town in the Beas River valley and a gateway to nearby Himalayan trails and high passes.", "manali"],
  Darjeeling: ["Hill Station", "West Bengal", "A Himalayan hill town known for tea gardens, mountain views, and the Darjeeling Himalayan Railway.", "darjeeling"],
  Munnar: ["Hill Station", "Idukki district, Kerala", "A highland destination surrounded by tea plantations and the Western Ghats.", "munnar"],
  Ooty: ["Hill Station", "Nilgiris, Tamil Nadu", "A hill town in the Nilgiri Mountains with gardens, tea estates, and a heritage mountain railway.", "ooty"],
  Coorg: ["Hill Station", "Kodagu, Karnataka", "A Western Ghats region known for coffee-growing landscapes, forested hills, and local Kodava culture.", "coorg"],
  Mussoorie: ["Hill Station", "Dehradun district, Uttarakhand", "A Himalayan foothill hill station with ridge walks and views across the Doon Valley.", "mussoorie"],
  Kodaikanal: ["Hill Station", "Dindigul district, Tamil Nadu", "A hill town centred around a star-shaped lake and the forested Palani Hills.", "kodaikanal"],
  "Somnath Temple": ["Temple", "Gir Somnath, Gujarat", "A major Shiva temple on the Arabian Sea coast, traditionally counted among the twelve Jyotirlingas.", "somnath-temple"],
  "Golden Temple": ["Temple", "Amritsar, Punjab", "Harmandir Sahib is the central place of worship of Sikhism, set beside the sacred pool known as the Amrit Sarovar.", "golden-temple"],
  "Meenakshi Temple": ["Temple", "Madurai, Tamil Nadu", "A historic temple complex dedicated to Meenakshi and Sundareshwarar, distinguished by its sculpted gateway towers.", "meenakshi-temple"],
  "Konark Sun Temple": ["Temple", "Konark, Odisha", "A 13th-century sun temple designed as a monumental stone chariot and recognised as a UNESCO World Heritage Site.", "konark-sun-temple"],
  "Brihadeeswarar Temple": ["Temple", "Thanjavur, Tamil Nadu", "An 11th-century Chola temple dedicated to Shiva and part of the UNESCO-listed Great Living Chola Temples.", "brihadeeswarar-temple"],
  "Kedarnath Temple": ["Temple", "Rudraprayag district, Uttarakhand", "A high-altitude Shiva shrine in the Garhwal Himalaya and one of the Char Dham pilgrimage sites.", "kedarnath-temple"],
  "Vaishno Devi": ["Temple", "Katra, Jammu and Kashmir", "A hilltop shrine reached by a pilgrimage route from Katra in the Trikuta Mountains.", "vaishno-devi"],
  "Siddhivinayak Temple": ["Temple", "Mumbai, Maharashtra", "A well-known Mumbai temple dedicated to Lord Ganesha.", "siddhivinayak-temple"],
  "Goa Beach": ["Beach", "Goa", "Goa's Arabian Sea coastline includes a range of beaches, from lively resort areas to quieter stretches.", "goa-beach"],
  "Andaman Beach": ["Beach", "Andaman and Nicobar Islands", "The islands offer tropical coastlines, clear water, and access to coral reef environments.", "andaman-beach"],
  "Kerala Beach": ["Beach", "Kerala", "Kerala's Arabian Sea coast combines sandy beaches, fishing communities, and nearby backwater landscapes.", "kerala-beach"],
  "Pondicherry Beach": ["Beach", "Puducherry", "Puducherry's coast has promenades and beaches along the Bay of Bengal.", "pondicherry-beach"],
  "Mahabalipuram Beach": ["Beach", "Mahabalipuram, Tamil Nadu", "A Bay of Bengal shoreline beside the town's Pallava-era shore temple and stone monuments.", "mahabalipuram-beach"],
  "Gokarna Beach": ["Beach", "Uttara Kannada, Karnataka", "A coastal town with beaches set between the Arabian Sea and the hills of the Western Ghats.", "gokarna-beach"],
  "Varkala Beach": ["Beach", "Thiruvananthapuram district, Kerala", "A Kerala shoreline known for its laterite cliffs rising above the Arabian Sea.", "varkala-beach"],
  "Rajasthan Beach": ["Rajasthan travel feature", "Rajasthan, India", "Rajasthan is an inland state, so it has no sea beaches. This card represents the state's desert, lake, and heritage travel experiences.", "rajasthan-beach"],
  "Jog Falls": ["Waterfall", "Shivamogga district, Karnataka", "A major waterfall on the Sharavathi River that drops in separate cascades over a steep rock face.", "jog-falls"],
  "Athirappilly Falls": ["Waterfall", "Thrissur district, Kerala", "A broad waterfall on the Chalakudy River, set within the forested Western Ghats.", "athirappilly-falls"],
  "Dudhsagar Falls": ["Waterfall", "Goa–Karnataka border", "A multi-tiered waterfall on the Mandovi River, surrounded by the Western Ghats.", "dudhsagar-falls"],
  "Kunchikal Falls": ["Waterfall", "Shivamogga district, Karnataka", "A high waterfall formed by the Varahi River in the forested Western Ghats.", "kunchikal-falls"],
  "Shivanasamudra Falls": ["Waterfall", "Mandya district, Karnataka", "The Kaveri River divides around islands here to form the Gaganachukki and Bharachukki falls.", "shivanasamudra-falls"],
  "Naneghat Falls": ["Waterfall", "Pune district, Maharashtra", "A seasonal monsoon cascade near the historic Naneghat mountain pass in the Western Ghats.", "naneghat-falls"],
  "Bhagsu Falls": ["Waterfall", "McLeod Ganj, Himachal Pradesh", "A mountain waterfall near Bhagsunag village, reached by a walk from McLeod Ganj.", "bhagsu-falls"],
  "Kempty Falls": ["Waterfall", "Mussoorie, Uttarakhand", "A popular waterfall and picnic area in the hills below Mussoorie.", "kempty-falls"],
};

function PlaceDetails() {
  const { destinationName } = useParams();
  const name = Object.keys(destinations).find(
    (destination) => destination.toLowerCase() === destinationName?.trim().toLowerCase()
  );
  const destination = name ? destinations[name] : null;
  const image = destination
    ? destinationImages[`../assets/${destination[3]}.png`]
    : null;

  return (
    <main className="place-details-page">
      <Link to="/" className="back-link">← Back to Home</Link>
      {destination ? (
        <article className="place-details-card">
          <img src={image} alt={name} />
          <div>
            <p className="place-category">{destination[0]}</p>
            <h1>{name}</h1>
            <p><strong>Location:</strong> {destination[1]}</p>
            <p>{destination[2]}</p>
          </div>
        </article>
      ) : (
        <section className="place-details-card place-not-found">
          <h1>Destination not found</h1>
          <p>Return home and choose one of the featured destinations.</p>
        </section>
      )}
    </main>
  );
}

export default PlaceDetails;
