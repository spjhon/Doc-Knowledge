import { useState } from 'react';
import MyButton from './simpleButton';

export default function MyButton2 () {

    function MyButton2() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <button onClick={handleClick}>
        Clicked {count} times
      </button>
    );
  }
  
    return (
      <div>
        <h4>Counters that update separately</h4>
        <MyButton />
        <MyButton2 />
      </div>
    );
  }