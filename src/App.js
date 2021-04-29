
import Counter from "./components/Counter";
import Switch from "./components/Switch";
import Weather from "./components/Weather";
// import Quotes from "./components/Quotes";
import QuoteList from "./components/QuoteList";
import Vote from "./components/Vote";
import ColorPicker from  "./components/ColorPicker";

const App = () => {
  const WeatherData = [
    { time: "Today", highF: 60, lowF: 50, conditions: "Mostly Cloudy" },
    { time: "Tomorrow", highF: 65, lowF: 53, conditions: "Partly Sunny" },
    { time: "Tuesday", highF: 66, lowF: 51, conditions: "Partly Sunny" },
  ];

  return (
    <div>
      {WeatherData.map((data) => 
        <Weather
          key={data.time}
          time={data.time}
          conditions={data.conditions}
          tempF={data.highF}
        />
      )}
      <Counter />
      <Switch />
      <QuoteList />
      <Vote />
      <ColorPicker />


      {/* <Quotes
        person="Quotes by Nelson Mandela"
        quote="It always seems impossible until it's done"
        date="2001"
      />
      <Quotes
        person="Quote by Yoda"
        quote="Do. Or do not. There is no try."
        date="A long time ago"
      />
      <Quotes person="Quote by Bugs Bunny" quote="What's up, doc?" date="" /> */}
    </div>
  );
};

export default App;
