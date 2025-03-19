import "./App.css";
import Tweet from "./components/Tweet";
import tweetsArray from "./tweets/tweet";




function App() {
  return (
    <div>
      {tweetsArray.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

export default App;