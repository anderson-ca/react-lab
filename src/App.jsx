import React from "react";
import Counter from "./components/Counter";
import RickAndMortyCharacterPicker from "./components/RickAndMortyCharacterPicker";

const App = () => {
    return (
        <div>
            <h1>Hello React Lab</h1>
            <Counter/>
            <RickAndMortyCharacterPicker/>
        </div>
    );
}

export default App;
