import React, {useState, useEffect} from "react";

const RickAndMortyCharacterPicker = () => {
    const [name, setName] = useState("");


    return (
        <div>
            <h1>Which Rick and Morty character are you?</h1>
            <form onSubmit={event => {

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
