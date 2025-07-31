import { useState } from "react";
import Button from "./Button";
const App = () => {
  // const myState = useState(1); // returns array [variable, setterfunc]

  // let counter = myState[0];
  // let setCounterFunc = myState[1];

  let counterr = 1;

  const [counter, setCounterFunc] = useState(1);

  // function increment() {
  //   let counterVal = document.getElementById("count");
  //   counter++;
  //   counterVal.innerText = counter;
  //   console.log(counter)
  // }

  function increment() {
    setCounterFunc(counter + 1);
    let counterVal = document.getElementById("count");
    counterVal.innerText = counter;
    counterr = counterr + 1;
  }

  return (
    <>
      <h1>Counter App</h1>
      <p>
        Count:<span id="count">{counter}</span>
      </p>

      {/* <button onClick={increment}>Increment</button> */}
      <Button onClickFun={increment} label="Increment" />
      <Button onClickFun={()=>setCounterFunc(counter - 1)} label="Decrement" />
      <Button onClickFun={() => (setCounterFunc(0))} label="Reset" />
      <p>{counter}</p>
      <p>{counterr}</p>
    </>
  );
};

export default App;
