import "./App.css";
import Tweet from "./components/Tweet";

const tweetsArray = [
  {
    user: {
      name: "Thoughts of Dog®",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message:
      "the human likes to say. that i live here rent free. but i would argue. this housing accommodation. is my payment. for a lifetime of love. and excellent company",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
      handle: "dog_feelings",
    },
    timestamp: "2h ago",
    message:
      "sometimes. the human presses their noggin against mine. to figure out what i’m thinking. so i just think really hard. about how much i love them. and hope they figure it out",
  },
  {
    user: {
      name: "Thoughts of Dog®",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/tweet-user-photo.png",
      handle: "dog_feelings",
    },
    timestamp: "3h ago",
    message:
      "here is what. i plan to accomplish today:\n2. bark loudly\n7. lose my ball\n7b. ask human for help\n3. lose it again\n4. nap\n2. repeat",
  },
];

function App() {
  return (
    <div className="App">
      {tweetsArray.map((tweet, index) => (
        <Tweet key={index} tweet={tweet} />
      ))}
    </div>
  );
}

export default App;
