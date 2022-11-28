import AppHeader from "../appHeader/AppHeader";
import CharList from "../chatList/CharList";
import CharInfo from "../charInfo/CharInfo";
import RandomChar from "../randomChar/RandomChar";
import MarvelService from "../../services/MarvelService";

import decoration from "../../resources/img/vision.png";

// const marvelService = new MarvelService();
// marvelService
//   .getAllCharacters()
//   .then((res) => res.data.results.forEach((item) => console.log(item.name)));

function App() {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <RandomChar />
        <div className="char__content">
          <CharList />
          <CharInfo />
        </div>
        <img className="bg-decoration" src={decoration} alt="vision" />
      </main>
    </div>
  );
}

export default App;
