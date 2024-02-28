
import React,{useState} from "react";
import './../styles/App.css';
import Child from "./Child"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const changeState = () => {
    setIsLoggedIn(true);
  };
  return (
    <div>
      <h1>Parent Component</h1>
      <Child isLoggedIn={isLoggedIn} changeState={changeState} />
    </div>
  );
}

export default App
