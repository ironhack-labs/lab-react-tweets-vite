// src/App.jsx
import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://amazonaws.com",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message: "the human likes to say. pshhh. to the cat. which means the cat is speaking a language that i do not understand. and the human is informatively replying.",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://amazonaws.com",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message: "sometimes. the human holds me. and i can feel their heart beat. and i bet. they can feel mine too.",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://amazonaws.com",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message: "here is tomorrow's forecast: 100% chance of me. being a good boy.",
  },
];

function App() {
  return (
    <div className="App">
      {/* Usamos o .map para percorrer o array e criar um <Tweet /> para cada objeto */}
      {tweetsArray.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

export default App;
