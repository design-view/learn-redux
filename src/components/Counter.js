import React from 'react';

export default function Counter({ number, diff, onIncrease, onDecrease, onSetDiff }) {
    const onChange = e => {
        onSetDiff(parseInt(e.target.value));
    }
    console.log(number);
    return (
        <div>
            <h1>{number}</h1>
            <input type="number" value={diff} onChange={onChange} />
            <button onClick={onIncrease}>+</button>
            <button onClick={onDecrease}>-</button>
        </div>
    )
}
