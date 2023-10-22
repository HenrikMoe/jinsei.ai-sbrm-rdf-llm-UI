import React from 'react';
import { useDataStore } from './DataStore';

function Counter() {
  const { count, increment } = useDataStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default Counter;
