import "./App.css";
import LeftCard from "./organisms/LeftCard";
import RightCard from "./organisms/RightCard";

function App() {
  return (
    <div className="flex">
      <LeftCard />
      <RightCard />
    </div>
  );
}

export default App;
