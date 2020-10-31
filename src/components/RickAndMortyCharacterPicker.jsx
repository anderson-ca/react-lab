import React, {useState, useEffect} from "react";
import axios from "axios";

const RickAndMortyCharacterPicker = () => {
    const [name, setName] = useState("");


    async function getCharacter() {
        const baseURL = "https://rickandmortyapi.com/api/character/";
        const {data} = await axios(baseURL);
        console.log(data);
    }

    return (
        <div>
            <h1>Rick and Morty characters</h1>
            <form onSubmit={event => {
                event.preventDefault();
                getCharacter();
            }}>
                <label htmlFor="name">
                    Name:
                    <input
                        value={name}
                        placeholder="Enter Your Name"
                        name="name"
                        type="text"
                        onChange={(event) => setName(event.target.value)}
                    />
                </label>
                <button>Submit</button>
            </form>
            <h1>{name}</h1>
        </div>
    );
}

export default RickAndMortyCharacterPicker;
