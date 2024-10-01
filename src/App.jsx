import "./App.css";
import BadCounter from "./Components/BadCounter";
import Counter from "./Components/Counter";
import Toggle from "./Components/Toggle";
import CounterWithLimit from "./Components/CounterWithLimit";
import EmojiStore from "./Components/EmojiStore";

function App() {
  return (
    <>
      <Counter />
      <Toggle />
      <BadCounter />
      <CounterWithLimit />
      <EmojiStore />
    </>
  );
}

export default App;
