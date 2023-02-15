import React from "react";
import Cart from "./components/Cart/Cart";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <h2>Let's try a simple app</h2>
      <React.Fragment>
        <Cart />
        <Header />
        <main>
          <Meals />
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;
