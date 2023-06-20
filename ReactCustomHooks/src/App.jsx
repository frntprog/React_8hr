import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import Cat from "./compoents/Cat";
import Counter from "./compoents/Counter";
import { useToggle } from "./hooks/useToggle";

const queryClient = new QueryClient();

function App() {
  const { state: isVisible, toggle } = useToggle();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden text</h1>}
        <Cat />
        <Counter />
      </div>
    </QueryClientProvider>
  );
}

export default App;
