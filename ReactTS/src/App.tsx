import "./App.css";
import Person, { Country } from "./components/Person";

function App() {
  return (
    <div className="App">
      <Person
        name="Den"
        email="frntprog@gmail.com"
        age={21}
        isMarried={true}
        friends={["jessica", "jake", "jerry"]}
        country={Country.Brazil}
      />
    </div>
  );
}

export default App;
