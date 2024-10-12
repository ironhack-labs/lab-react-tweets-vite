// App.jsx
import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message: "the human likes to say. that i live here rent free.",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what I’m thinking. so I just think really hard. about how much I love them. and hope they figure it out.",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. I plan to accomplish today:\n\n1. bark loudly. but at nothing\n2. lose my ball under the couch\n3. politely ask the human. to get my ball\n4. immediately lose it again. under the same couch\n5. big nap. you have worked hard\n6. repeat",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "4h ago",
    message:
      "today’s goal: to convince the human to take me to the park. \n\nwish me luck!",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "5h ago",
    message:
      "I see my reflection in the mirror. who is that handsome pup? \n\noh wait... it’s me!",
  },
];

function App() {
  return (
    <div className="App">
      {/* Pass the first tweet as a prop */}
      <Tweet tweet={tweetsArray[0]} />
    </div>
  );
}

export default App;
