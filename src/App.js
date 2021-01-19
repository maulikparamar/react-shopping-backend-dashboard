import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "./pages/login";
import NotFound from "./pages/404";
import register from "./pages/register";
import NavBar from "./pages/nav/navBar";
import Category from "./pages/page/category";
import Dashboard from "./pages/page/dashboard";
import ProductBrand from "./pages/page/product_brand";
import ProductTable from "./pages/page/product_table";

import ProductFeedback from "./pages/page/product_feedback";
import Contact from "./pages/page/contact";
import User from "./pages/page/user";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard">
          <NavBar />
          <Dashboard />
        </Route>
        <Route exact path="/user">
          <NavBar />
          <User />
        </Route>
        <Route exact path="/category">
          <NavBar />
          <Category />
        </Route>
        <Route exact path="/product_brand">
          <NavBar />
          <ProductBrand />
        </Route>
        <Route exact path="/product_table">
          <NavBar />
          <ProductTable />
        </Route>

        <Route exact path="/product_feedback">
          <NavBar />
          <ProductFeedback />
        </Route>
        <Route exact path="/contact">
          <NavBar />
          <Contact />
        </Route>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={register} />
        <Route exact path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
