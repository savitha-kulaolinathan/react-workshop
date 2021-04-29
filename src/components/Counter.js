import { useState} from 'react'
import "./Counter.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleReset = () => {
        setCount(0); 

    }
    const handleUp =() =>{
        setCount(prevCount => prevCount + 1)
    }
    const handleDown =() =>{
        setCount(prevCount => prevCount - 1)
    }
    let classes ="Counter";
    if(count < 0) {
        classes += " negative";

    }

  return (
    <div className={classes}>
      <h2> Counter</h2>
      <p className ="Counter-count">{count}</p>
      <p>
        
        <button type="button" onClick = {handleDown}>Down</button>
        <button type="button" onClick = {handleReset}>Reset</button>
        <button type="button" onClick = {handleUp}>Up</button>
      </p>
    </div>
  );
};
export default Counter;
