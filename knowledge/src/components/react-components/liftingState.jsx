import { useState } from 'react';

export const MyButton3 = ({ count, onClick }) => {
return (
    <>
    <button onClick={onClick}>
    Clicked {count} times
    </button>
    </>
);
}
  

export default function MyApp2 () {

const [count, setCount] = useState(0);

function handleClick() {
    setCount(count + 1);
}

return (
    <div>
    <h4>Counters that update together</h4>
    <MyButton3 count={count} onClick={handleClick} />
    <MyButton3 count={count} onClick={handleClick} />
    </div>
);
}
  