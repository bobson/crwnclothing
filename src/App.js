import { Switch, Route } from "react-router-dom";

import "./App.css";
import Hats from "./pages/hats/Hats";
import HomePage from "./pages/homapage/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
