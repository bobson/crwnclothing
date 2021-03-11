import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";

import "./App.css";
import Header from "./components/header/Header";
import FormsPage from "./pages/forms/FormsPage";
// import Hats from "./pages/hats/Hats";
import HomePage from "./pages/homapage/HomePage";
import ShopPage from "./pages/shop/ShopPage";
import { auth, createUserProfileDocument } from "./firebase/firebase.util";
import { setCurrentUser } from "./redux/user/user.actions";

function App({ setCurrentUser, currentUser }) {
  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({ id: snapShot.id, ...snapShot.data() });
        });
      } else setCurrentUser(userAuth);
    });
  }, [setCurrentUser]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() => (currentUser ? <Redirect to="/" /> : <FormsPage />)}
        />
      </Switch>
    </div>
  );
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
