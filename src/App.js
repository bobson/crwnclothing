import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import Hats from "./pages/hats/Hats";
import HomePage from "./pages/homapage/HomePage";
import ShopPage from "./pages/shop/ShopPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
