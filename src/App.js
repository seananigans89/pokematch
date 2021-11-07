import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Instructions from "./Components/Instructions";
import FetchPokemon from "./Components/FetchPokemon";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/Instructions" render={() => <Instructions />} />
        <Route exact path="/CardGrid" render={() => <FetchPokemon />} />
      </Switch>
    </div>
  );
}

export default App;
