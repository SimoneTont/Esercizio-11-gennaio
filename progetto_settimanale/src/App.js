//enpoint pricipale "https://www.omdbapi.com/?apikey=f8bd2434&s=[titolo%20serie]"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HeaderComp from "./Components/HeaderComp"
import LOTRComp from "./Components/LOTRComp"
import HarryPotterComp from "./Components/HarryPotterComp"
import AvengersComp from "./Components/AvengersComp"
import FooterComp from "./Components/FooterComp"
function App() {
  return (
    <div className="App">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
      </head>
      <body className='bodyBg'>
        <HeaderComp />
        <main>
          <h2 className="text-white">Lord of the Rings</h2>
          <LOTRComp />
          <h2 className="text-white">Harry Potter</h2>
          <HarryPotterComp />
          <h2 className="text-white">Avengers</h2>
          <AvengersComp />
        </main>
        <FooterComp />
      </body>
    </div>

  );
}

export default App;
