import React, {useState} from'react'
import "./Switch.css";

const Switch = () => {
    const [on, setON] = useState("OFF");
     const handleON = () =>{
         setON("ON")
     }
     const handleOFF = () =>{
        setON("OFF")
    }
    let classes ="Switch";
    if(on === "ON") {
       classes += " blue" 
       console.log("ll")
    }
  return (
    <div className={classes}>
      <h2>Switch</h2>
      <p>{on}</p>
      {/* <p>{on? "ON" : "OFF"}</p> */}
      <p>
        {on === "OFF" &&<button type="button"  onClick = {handleON}> Turn ON</button>}
        {on === "ON" && <button type="button" onClick = {handleOFF}>Turn OFF</button>}
      </p>
    </div>
  );
};
export default Switch;
