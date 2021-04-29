import "./Quotes.css";

const Quotes = ({ person, quote, date }) => {
  return (
    <div className ="Quotes">
      
      <h2>{person}</h2>
      <p>{quote}</p>
      <p>{date}</p>
    </div>
  );
};
export default Quotes;
