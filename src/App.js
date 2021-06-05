import React from "react";
import Breed from "./components/Breeds"
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Dog from "./components/Dog";

function App(){
    return <Router>
    <Switch>
        <Route exact path="/" component={Breed}></Route>
        <Route exact path={`/showBreed/:name`} component={Dog}></Route>
    </Switch>
    
    </Router>
}

export default App;


