import   React, { useState } from 'react';

import './Vote.css';
 const Vote =() =>{
    const [chocolate, setChocolate] = useState(0);
    const [vanilla, setVanilla] = useState(0);
    const [strawberry, setStrawberry] = useState(0);
  
    const total = chocolate + vanilla + strawberry;
    const percentages = {
      chocolate: percentage(chocolate, total),
      vanilla: percentage(vanilla, total),
      strawberry: percentage(strawberry, total)
    };
     return (
         
               <div className="Vote">
      <p>
        <label>Chocolate:</label> {chocolate} ({percentages.chocolate})
      </p>
      <div
        className="Votes__bar Votes__bar--chocolate"
        style={{ width: percentages.chocolate }}
      ></div>
      <p>
        <label>Vanilla:</label> {vanilla} ({percentages.vanilla})
      </p>
      <div
        className="Votes__bar Votes__bar--vanilla"
        style={{ width: percentages.vanilla }}
      ></div>
      <p>
        <label>Strawberry:</label> {strawberry} ({percentages.strawberry})
      </p>
      <div
        className="Votes__bar Votes__bar--strawberry"
        style={{ width: percentages.strawberry }}
      ></div>
      <div className="Buttons">
        <button onClick={() => setChocolate((prev) => prev + 1)}>
          Chocolate
        </button>
        <button onClick={() => setVanilla((prev) => prev + 1)}>Vanilla</button>
        <button onClick={() => setStrawberry((prev) => prev + 1)}>
          Strawberry
        </button>
      </div>

         </div>
     )
 };
 const  percentage =(n, total) =>{
    if (total === 0) {
      return "0.0%";
    }
    return ((n / total) * 100).toFixed(1) + "%";
  }
 export default Vote;
