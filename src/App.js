import { useState } from "react";
import "./App.css";
import Button from '@mui/material/Button';

import { Products, Wishlist, Cart } from "./pages/index";

export default function App() {
  const [screen, setScreen] = useState("home");

  return (
    <div className="App">
      <Button 
      variant="contained" className="button-tabs" onClick={() => setScreen("home")}>
        Products
      </Button>
      <Button
      variant="contained"
      color="secondary"
        className="button-tabs"
        onClick={() => {
          setScreen("about");
        }}
      >
        Wishlist
      </Button>
      <Button
      variant="contained"
        className="button-tabs"
        onClick={() => {
          setScreen("profile");
        }}
      >
        Cart
      </Button>

      {screen === "home" ? (
        <Products />
      ) : screen === "about" ? (
        <Wishlist />
      ) : screen === "profile" ? (
        <Cart />
      ) : null}
    </div>
  );
}
