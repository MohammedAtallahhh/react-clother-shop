import Products from "./components/Products/Products";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Header/Navbar";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Products />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
