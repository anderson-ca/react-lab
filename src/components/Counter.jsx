import React, {useState} from "react";

const Counter = () => {
    let [count, setCount] = useState(0)

    return (
        <div>
            <h2>Counter component</h2>
            <button onClick={() => setCount(count += 1)}>
                Increase Counter
            </button>
            <h4>count: {count}</h4>
        </div>
    );
}

export default Counter;
