import'./Weather.css';


const Weather = ({time, conditions, tempF}) =>{
    
    const tempC = Math.round( (tempF - 32) * 5 / 9 );
      
    return(
        <div className ="Weather">
            <h3> Weather for { time}</h3>
            <p>{conditions}</p>
            <p>Temperature {tempF}F ({tempC}C)</p>
        </div>
    )
};
 export default Weather;