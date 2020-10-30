import React, {useState} from "react";

const Counter = () => {
    let [count, setCount] = useState(0)

    return (
        <div>
            <h2>Counter component</h2>
            <h4>count: {count}</h4>
            <span>
                <button onClick={() => setCount(count += 1)}>
                    Increase Counter
                </button>
                {" "}
                <button onClick={() => setCount(count = 0)}>
                    Reset Counter
                </button>
            </span>
        </div>
    );
}

export default Counter;
