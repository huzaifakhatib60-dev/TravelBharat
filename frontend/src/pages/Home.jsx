import logo from "../assets/logo.png";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="navbar">
        <div className="logo">
          <img src={logo} alt="Travel Bharat Logo" className="logo-img" /> 
          <h1 className="logo-text"> Travel<span>Bharat</span></h1>
          </div>
       
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/states">States</Link></li>
          <li><Link to="/categories">Categories</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login" className="login-btn">Login</Link></li>
        </ul>
      </header>
      <section className="hero-section">
        <div className="hero-head-div">
          <h1 className="hero-head">Explore India State by State</h1>
        </div>
        <div className="hero-purpose1">
          <p className="hero-purpose-que1">What is the purpose of this website?</p>
          <p className="hero-purpose-ans1">TravelBharat is a centralized tourism information web platform that provides state-wise and city-wise details of tourist destinations across India. The platform aims to help travelers, students, and researchers easily discover places, attractions, culture, heritage sites, and travel insights in a structured and user-friendly way.
           The platform will act as a digital travel encyclopedia of India, showcasing destinations with rich content such as images, descriptions, best time to visit, and nearby attractions.</p>
        </div>
        <div className="hero-purpose2">
          <p className="hero-purpose-que2">What is the objective of this website ?</p>
            <ul className="hero-purpose-ans2">
              <li>Provide a single platform for all Indian tourist destinations</li>
              <li>Organize tourist places state-wise and city-wise</li>
              <li>Offer accurate and informative travel details</li>
              <li>Improve accessibility to tourism knowledge</li>
            </ul>
        </div>
      </section>
      <section className="featured-states">
        <div className="featured-states-head">
          <h1 className="featured-states-head-text">Explore India's Top States</h1>
        </div>
        <div className="slider-container">
  <button className="slide-btn left"
    onClick={() => {
      document.querySelector(".famous-states").scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }}
  >
    
    &#10094;
  </button>

  <div className="famous-states">
    <div className="maharashtra"><p>Maharashtra</p></div>
    <div className="goa"><p>Goa</p></div>
    <div className="rajasthan"><p>Rajasthan</p></div>
    <div className="uttar-pradesh"><p>Uttar Pradesh</p></div>
    <div className="kerala"><p>Kerala</p></div>
  </div>

  <button className="slide-btn right"
    onClick={() => {
      document.querySelector(".famous-states").scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }}
  >
    &#10095;
  </button>
</div>
        
      </section>
      <section className="categories-preview">
        <div className="heritage-sites" id="heritage-sites">
          <h1>Heritage Sites</h1>
          <div className="slider-container">
            <button className="slide-btn left"
             onClick={() => {
             document.querySelector(".heritage-sites-container").scrollBy({
             left: -400,
             behavior: "smooth",
             });
             }}
             >
    
             &#10094;
            </button>
          
          <div className="heritage-sites-container">
            <div className="ajanta-caves"><p>Ajanta Caves</p></div>
            <div className="ellora-caves"><p>Ellora Caves</p></div>
            <div className="agra-fort"><p>Agra Fort</p></div>
            <div className="taj-mahal"><p>Taj Mahal</p></div>
            <div className="qutub-minar"><p>Qutub Minar</p></div>
            <div className="hampi"><p>Hampi</p></div>
            <div className="khajuraho"><p>Khajuraho</p></div>
            <div className="fatehpur-sikri"><p>Fatehpur Sikri</p></div>
          </div>
          
          <button className="slide-btn right"
             onClick={() => {
             document.querySelector(".heritage-sites-container").scrollBy({
              left: 400,
              behavior: "smooth",
              });
              }}
             >
              &#10095;
              </button>
          </div>
        </div>
        <div className="hills-station" id="hills-station">
        
          <h1>Hill Stations</h1>
          <div className="slider-container">
            <button className="slide-btn left"
             onClick={() => {
             document.querySelector(".hills-station-container").scrollBy({
             left: -400,
             behavior: "smooth",
             });
             }}
             >
    
             &#10094;
            </button>
            <div className="hills-station-container">
              <div className="shimla"><p>Shimla</p></div>
              <div className="manali"><p>Manali</p></div>
              <div className="darjeeling"><p>Darjeeling</p></div>
              <div className="munnar"><p>Munnar</p></div>
              <div className="ooty"><p>Ooty</p></div>
              <div className="coorg"><p>Coorg</p></div>
              <div className="mussoorie"><p>Mussoorie</p></div>
              <div className="kodaikanal"><p>Kodaikanal</p></div>
            </div>
            <button className="slide-btn right"
             onClick={() => {
             document.querySelector(".hills-station-container").scrollBy({
              left: 400,
              behavior: "smooth",
              });
              }}
             >
              &#10095;
              </button>
          </div>
        </div>
        <div className="temples" id="temples">
          <h1>Temples</h1>
          <div className="slider-container">
            <button className="slide-btn left"
             onClick={() => {
             document.querySelector(".temples-container").scrollBy({
             left: -400,
             behavior: "smooth",
             });
             }}
             >
    
             &#10094;
            </button>
            <div className="temples-container">
              <div className="somnath-temple"><p>Somnath Temple</p></div>
              <div className="golden-temple"><p>Golden Temple</p></div>
              <div className="meenakshi-temple"><p>Meenakshi Temple</p></div>
              <div className="konark-sun-temple"><p>Konark Sun Temple</p></div>
              <div className="brihadeeswarar-temple"><p>Brihadeeswarar Temple</p></div>
              <div className="kedarnath-temple"><p>Kedarnath Temple</p></div>
              <div className="vaishno-devi"><p>Vaishno Devi</p></div>
              <div className="siddhivinayak-temple"><p>Siddhivinayak Temple</p></div>
            </div>
            <button className="slide-btn right"
             onClick={() => {
             document.querySelector(".temples-container").scrollBy({
              left: 400,
              behavior: "smooth",
              });
              }}
             >
              &#10095;
              </button>
          </div>
        </div>
        <div className="beaches" id="beaches">
          <h1>Beaches</h1>
          <div className="slider-container">
            <button className="slide-btn left"
             onClick={() => {
             document.querySelector(".beaches-container").scrollBy({
             left: -400,
             behavior: "smooth",
             });
             }}
             >
    
             &#10094;
            </button>
            <div className="beaches-container">
              <div className="goa-beach"><p>Goa Beach</p></div>
              <div className="andaman-beach"><p>Andaman Beach</p></div>
              <div className="kerala-beach"><p>Kerala Beach</p></div>
              <div className="pondicherry-beach"><p>Pondicherry Beach</p></div>
              <div className="mahabalipuram-beach"><p>Mahabalipuram Beach</p></div>
              <div className="gokarna-beach"><p>Gokarna Beach</p></div>
              <div className="varkala-beach"><p>Varkala Beach</p></div>
              <div className="rajasthan-beach"><p>Rajasthan Beach</p></div>
            </div>
            <button className="slide-btn right"
             onClick={() => {
             document.querySelector(".beaches-container").scrollBy({
              left: 400,
              behavior: "smooth",
              });
              }}
             >
              &#10095;
              </button>
          </div>
        </div>
        <div className="waterfalls" id="waterfalls">
          <h1>Waterfalls</h1>
          <div className="slider-container">
            <button className="slide-btn left"
             onClick={() => {
             document.querySelector(".waterfalls-container").scrollBy({
             left: -400,
             behavior: "smooth",
             });
             }}
             >
    
             &#10094;
            </button>
            <div className="waterfalls-container">
              <div className="jog-falls"><p>Jog Falls</p></div>
              <div className="athirappilly-falls"><p>Athirappilly Falls</p></div>
              <div className="dudhsagar-falls"><p>Dudhsagar Falls</p></div>
              <div className="kunchikal-falls"><p>Kunchikal Falls</p></div>
              <div className="shivanasamudra-falls"><p>Shivanasamudra Falls</p></div>
              <div className="naneghat-falls"><p>Naneghat Falls</p></div>
              <div className="bhagsu-falls"><p>Bhagsu Falls</p></div>
              <div className="kempty-falls"><p>Kempty Falls</p></div>
            </div>
            <button className="slide-btn right"
             onClick={() => {
             document.querySelector(".waterfalls-container").scrollBy({
              left: 400,
              behavior: "smooth",
              });
              }}
             >
              &#10095;
              </button>
          </div>
        </div>
      </section>
      <section className="hidden-destination">
        <h1 className="hidden-destination-head">Hidden Destinations</h1>
        <div className="hidden-destination1-img"><p className="destination-title">Upper Kumaon: Munsiyari, Milam, Dharchula & Beyond</p></div>
        <div className="hidden-destination1-p">
          <p>Upper Kumaon is a beautiful, remote region of Uttarakhand, India, known for the Himalayas, high-altitude villages, trekking routes, glaciers, and traditional Kumaoni culture.</p>
          <ul>
            <li>
              <h2>Munsiyari</h2>
              <p>Munsiyari is one of the most popular destinations in Upper Kumaon. It offers spectacular views of the Panchachuli peaks and serves as a base for Himalayan treks. It is ideal for nature lovers, photographers, and adventure seekers</p>
            </li>
            <li>
              <h2>Milam</h2>
              <p>Milam is a remote high-altitude village in the Johar Valley. The area is famous for the Milam Glacier and dramatic Himalayan landscapes. The trek to Milam passes through beautiful mountain scenery and traditional villages.</p>
            </li>
            <li>
              <h2>Dharchula</h2>
              <p>Dharchula is a border town located along the Kali River, close to the India–Nepal border. It is an important gateway for exploring the higher Himalayan areas and offers a glimpse into the unique culture and lifestyle of the region.</p>
            </li>
          </ul>
        </div>
        <div className="hidden-destination2-img"><p className="destination-title">Jaunsar Bawar Region</p></div>
        <div className="hidden-destination2-p">
          <p>Jaunsar-Bawar is a culturally rich and scenic region in Uttarakhand, located mainly in the Dehradun district. The region is known for its beautiful mountains, dense forests, waterfalls, traditional villages, and the unique culture of the Jaunsari people.</p>
          <ul>
            <li>
              <h2>Chakrata</h2>
              <p>Chakrata is one of the most popular destinations in the region. Surrounded by forests and mountains, it is known for its peaceful environment, pleasant weather, and scenic Himalayan views.</p>
            </li>
            <li>
              <h2>Tiger Falls</h2>
              <p>One of the major attractions near Chakrata, Tiger Falls is a beautiful waterfall surrounded by lush greenery. It is a popular spot for nature lovers and short hikes.</p>
            </li>
            <li>
              <h2>Deoban</h2>
              <p>Deoban is known for its dense forests and panoramic views of the Himalayan ranges. It is a great place for those interested in nature, trekking, and photography.</p>
            </li>
          </ul>
        </div>
        <div className="hidden-destination3-img"><p className="destination-title">Niti, Malari & More: The Nanda Devi Affair</p></div>
        <div className="hidden-destination3-p">
          <p>Niti and Malari are remote Himalayan villages in Chamoli district, Uttarakhand, located near the India–Tibet border. This region is known for its dramatic mountains, ancient trade routes, unique Bhotiya culture, and proximity to the Nanda Devi mountain region.</p>
          <ul>
            <li>
              <h2>Niti Valley</h2>
              <p>Niti Valley is a remote and spectacular Himalayan valley surrounded by snow-covered peaks. The village of Niti is one of the last inhabited settlements before the border. The area is known for its traditional stone houses, high-altitude landscapes, and historic connection to trans-Himalayan trade.</p>
            </li>
            <li>
              <h2>Malari</h2>
              <p>Malari is another beautiful high-altitude village in the region. It is famous for its traditional architecture and the distinctive lifestyle of the local Bhotiya communities. The surrounding mountains and valleys make it an excellent destination for photographers and adventure travelers.</p>
            </li>
            <li>
              <h2>The Nanda Devi Region</h2>
              <p>The Nanda Devi massif is one of the most iconic mountain landscapes in India. The surrounding area includes the Nanda Devi National Park, which, together with the Valley of Flowers National Park, forms a UNESCO World Heritage Site. The region is famous for its biodiversity, alpine meadows, glaciers, and dramatic Himalayan scenery.</p>
            </li>
          </ul>
        </div>
        <div className="hidden-destination4-img"><p className="destination-title">Zanskar: The Last Great Desolation</p></div>
        <div className="hidden-destination4-p">
          <p>Zanskar, located in the Ladakh region of India, is one of the most remote and spectacular Himalayan landscapes. Often described as the "Last Great Desolation," Zanskar is known for its barren mountains, deep gorges, frozen rivers, ancient monasteries, and isolated villages.</p>
          <ul>
            <li>
              <h2>Zanskar Valley</h2>
              <p>Surrounded by towering mountains, Zanskar has a rugged and dramatic landscape. The region's harsh climate and difficult terrain have historically kept it isolated from the outside world, helping preserve its unique culture and traditional way of life.</p>
            </li>
            <li>
              <h2>The Chadar Trek</h2>
              <p>One of Zanskar's most famous adventures is the Chadar Trek, where trekkers traditionally walk along the frozen Zanskar River during winter. The frozen river becomes a temporary route connecting remote villages with the outside world.</p>
            </li>
            <li>
              <h2>Padum</h2>
              <p>Padum is the main settlement and administrative center of Zanskar. It serves as an important base for exploring the surrounding valleys, monasteries, villages, and trekking routes.</p>
            </li>
          </ul>
        </div>
        <div className="hidden-destination5-img"><p className="destination-title">Jammu: The Forgotten Cousin</p></div>
        <div className="hidden-destination5-p">
          <p>Jammu, often called the "City of Temples," is the winter capital of the Union Territory of Jammu and Kashmir. While Kashmir often receives more attention for its famous valleys and lakes, Jammu has its own unique identity, combining temple heritage, history, culture, forests, and Himalayan landscapes.</p>
          <ul>
            <li>
              <h2>Historic Jammu</h2>
              <p>Jammu has a long history and was historically associated with the Dogra dynasty. The region's heritage can be seen in its forts, palaces, temples, and traditional architecture.</p>
            </li>
            <li>
              <h2>City of Temples</h2>
              <p>Jammu is famous for its many temples. Raghunath Temple, Bahu Temple, and Mata Vaishno Devi Shrine near Katra are among the region's most important religious destinations.</p>
            </li>
            <li>
              <h2>Bahu Fort</h2>
              <p>Located on a hill overlooking the Tawi River, Bahu Fort is one of Jammu's best-known historical landmarks. The surrounding Bahu Gardens provide scenic views of the city.</p>
            </li>
          </ul>
        </div>
      </section>
      <footer className="footer">
  <div className="footer-container">

    <div className="footer-about">
      <h2>Travel<span>Bharat</span></h2>
      <p>
        Explore India state by state and discover its beautiful
        destinations, heritage, culture, mountains, beaches, and more.
      </p>
    </div>

    <div className="footer-links">
      <h3>Quick Links</h3>
      <a href="/">Home</a>
      <a href="/states">States</a>
      <a href="/categories">Categories</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href="/login">Login</a>
    </div>

    <div className="footer-links">
      <h3>Explore</h3>
      <a href="#heritage-sites">Heritage Sites</a>
      <a href="#hills-station">Hill Stations</a>
      <a href="#temples">Temples</a>
      <a href="#beaches">Beaches</a>
      <a href="#waterfalls">Waterfalls</a>
    </div>

    <div className="footer-contact">
      <h3>Contact Us</h3>
      <p>Email: travelbharat@gmail.com</p>
      <p>India</p>

      <div className="social-links">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">YouTube</a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    <p>© 2026 TravelBharat. All Rights Reserved.</p>
  </div>
</footer>
    </>
  );
}

export default Home;