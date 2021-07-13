import "./App.css";
import GithubState from "./context/GithubContext";
import Hero from "./components/Hero";

function App() {
  return (
    <GithubState>
      <Hero />
    </GithubState>
  );
}

export default App;
