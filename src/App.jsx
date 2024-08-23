

import LuckyOne from "./LuckyOne";

function App() {
  return (
    <div>
      {/* change the game to you wish */}
      <LuckyOne numDice={2} goal={7} color="blue" />
    </div>
  );
}

export default App;
