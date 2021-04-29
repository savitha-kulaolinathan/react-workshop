import { useState, useEffect } from 'react'
import './QuoteList.css';
import Quotes from './Quotes'



 const QuoteList =() =>{
     const [quoteData, setQuoteData] = useState([]);

     useEffect(() => {
         fetch(" https://type.fit/api/quotes")
         .then(res=>res.json())
         .then(body=>{setQuoteData(body.slice(0,10))});
     },[]);

    // const quotes = [
    //     {
    //       author: "Nelson Mandela",
    //       text: "It always seems impossible until it’s done.",
    //       date: "2001"
    //     },
    //     {
    //       author: "Yoda",
    //       text: "Do. Or do not. There is no try.",
    //       date: "A long time ago"
    //     },
    //     { author: "Bugs Bunny", text: "What's up, doc?" }
    //   ];
    

    return(
        <div>
            {quoteData.map((data, i) =>(
                <Quotes  key= {i} person={data.author} quote={data.text}  />
            ))}

        </div>
    )

 }
  
 export default QuoteList;
