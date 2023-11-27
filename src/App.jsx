import "./App.css";
import Tweet from "./components/Tweet";

//here you are importing the file app.css where u are editing everything
//you are importing the tweets from components, this have all the info to do the web dinamic(change the info depending on which object of the array are u choosing)

{
}

const tweetsArray = [
  {
    //array of objects with the info you will need for later fill the empty boxes on the twitter jsx
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
      "here is what. i plan to accomplish today: \n\n2. bark loudly. but at nothing \n7. lose my ball under the couch\n7b. politely ask the human. to get my ball\n3. immediately lose it again. under the same couch\n4. big nap. you have worked hard\n2. repeat",
  },
];

//here you are creating a function that is gonna iterate over the array of objects called tweets and select one

function App() {
  return (
    <div className="App">
      <Tweet tweet={tweetsArray[0]}></Tweet>
    </div>
  );
}
//after this, you are exporting this page as app, is gonna be printed on your main jsx file which is then connecte to the browser

export default App;
