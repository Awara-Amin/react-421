import React, { useState } from "react";

// let time = new Date().toLocaleTimeString();
// let newTime = addZero(time);

// let timeSeconds = new Date().getSeconds();
// let currentTime = time + ":" + timeSeconds;
// console.log(currentTime);

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// const now = new Date().toLocaleTimeString();
// let newTime = addZero(time);
// console.log(newTime);

// const [time, renewTime] = useState(now);

// function renewTime() {
//   const aa = new Date().toLocaleTimeString();
//   console.log("kaka" + aa);
//   setTimeout()
// }

function App() {
  setInterval(renewwTime, 1000);

  const now = new Date().toLocaleTimeString();
  const [time, setTime] = useState(now);

  function renewwTime() {
    const aa = new Date().toLocaleTimeString();
    // console.log("kaka" + aa);
    setTime(aa);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={renewwTime}>Get Time</button>
    </div>
  );
}

export default App;
