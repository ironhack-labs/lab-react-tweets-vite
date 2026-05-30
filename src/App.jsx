import "./App.css";
import Tweet from "./components/Tweet";
import tweetsArr from "./data/tweets.json"



function App() {
  return (
    <div className="App">
      <Tweet tweets = {tweetsArr}/>
    </div>
  );
}

export default App;
