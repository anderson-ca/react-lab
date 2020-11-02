import React from "react";
import {Route, Switch} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Shop from "./components/Shop";

function App() {
    return (
        <div>
            <Header/>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/shop"><Shop/></Route>
            <Route path="/about"><About/></Route>
        </div>
    );

}

export default App;
