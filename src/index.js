import ReactDOM from 'react-dom';
import React, {useState} from 'react';

const App = () => {
    const [count, setCount] = useState(0)

    function increment() {
        setCount(count + 1)
    }

    function decrement() {
        setCount(count - 1)
    }

    function reset() {
        setCount(0)
    }

    return (
        <div>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));