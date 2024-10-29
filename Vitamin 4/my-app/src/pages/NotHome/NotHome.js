import React, { useState, useEffect } from 'react';

const NotHome = () => {
    const [counter, setCounter] = useState(0); // Initialize counter state
    const [passed, setMessage] = useState(''); // Initialize message state
  
    useEffect(() => {
      if (counter < 0) {
        setCounter(0); // Reset counter if it goes below 0
      } else if (counter > 5) {
        setMessage('5!'); // Set message if counter passes 5
      } else {
        setMessage('0'); // Clear message if counter is 5 or below
      }
    }, [counter]); // Dependency array to run effect when counter changes
  
    return (
      <div className="nothome">
        <h1>NotHome Page</h1>
        <div className="counter">
          <h2>Counter: {counter}</h2>
          <h2>You Passed: {passed}</h2>
          <button onClick={() => setCounter(counter + 1)}>Increase</button>
          <button onClick={() => setCounter(counter - 1)}>Decrease</button>
        </div>
      </div>
    );
};

export default NotHome;