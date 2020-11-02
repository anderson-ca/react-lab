import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";
import ProductDetails from "./components/ProductDetails";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/shop" component={Shop}/>
                <Route exact path="/about" component={About}/>
                <Route path="/shop/:id" component={ProductDetails}/>
            </Switch>
        </div>
    );

}

export default App;
