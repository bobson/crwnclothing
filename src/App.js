import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import Header from "./components/header/Header";
import FormsPage from "./pages/forms/FormsPage";
// import Hats from "./pages/hats/Hats";
import HomePage from "./pages/homapage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else setCurrentUser(userAuth);
    });
  }, []);

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={FormsPage} />
      </Switch>
    </div>
  );
}

export default App;
