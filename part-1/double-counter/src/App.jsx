import { useState } from "react";
import Button from "./Button";
const App = () => {
  
  // const [leftClick, setLeftClick] = useState(0)
  // const [rightClick, setRightClick] = useState(0);

  const [increment, setIncrement] = useState({
    left: 0,
    right: 0
  });

  const [clickHistory, setClickHistory] = useState([]);
  const [totalClicks, setTotalClicks] = useState(0);

  

  function handleLeft(){
    setIncrement({...increment, left:increment.left + 1})
    setClickHistory([...clickHistory, 'L']);
    setTotalClicks(totalClicks + 1)
    console.log(increment.left)
  }

  function handleRight(){
    setIncrement({...increment, right:increment.right + 1})
    setClickHistory([...clickHistory, 'R'])
    setTotalClicks(totalClicks + 1)
    console.log(increment.right)
  }
  

  return (
    <>
      {increment.left}
      <Button onClickFun={handleLeft} label={"Left Increment"} />
      <Button onClickFun={handleRight} label={"Right Increment"} /> 
      {increment.right} 

      <p>{clickHistory.join('-')}</p>
      <p>{totalClicks}</p>
    </>
  );

};
export default App;
