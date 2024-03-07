import React, { useState } from "react";

function App() {
  const now = new Date().toLocaleTimeString().substring(0, 7);
  setInterval(update, 1000);
  const [time, setTime] = useState(now);

  function update() {
    const newTime = new Date().toLocaleTimeString().substring(0, 7);
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={update}>Get Time</button>
    </div>
  );
}

export default App;
