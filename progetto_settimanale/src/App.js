//enpoint pricipale http://www.omdbapi.com/?apikey=f8bd2434&
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import HeaderComp from "./Components/HeaderComp"
import TrendingComp from "./Components/TrendingComp"
import NewReleasesComp from "./Components/NewReleasesComp"
import WatchAgainComp from "./Components/WatchAgainComp"
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
          <h2 className="text-white">Trending now</h2>
          <TrendingComp />
          <h2 className="text-white">New Releases</h2>
          <NewReleasesComp />
          <h2 className="text-white">Watch It Again</h2>
          <WatchAgainComp />
        </main>
        <FooterComp />
      </body>
    </div>

  );
}

export default App;
