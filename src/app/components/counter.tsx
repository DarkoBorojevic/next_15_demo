'use client';

import { useState } from 'react'

const Counter = () => {
  console.log("counter component!")
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      clicked {count} times
    </button>
  )
}

export default Counter