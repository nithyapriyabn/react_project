// import { useState } from "react"


// function App() {
  // let count = 0;
  // const addcount = () => {
  //   count++;
  //   console.log(count);
  //   const ele = document.getElementById("countnums");
  //   ele.innerText = count;
  // }

//   const [count, setCount] = useState(0);

//   const addCount = ()=>{
//     setCount(count+1);
//   }

//   return (
//     <>
//     <h1 id="countNums">0</h1>
//     <button onClick={addCount}>ADD</button>
//     </>
//   )
// }

// export default App
 

import './App.css';
//import Hook from './components/Hook';
import Exp1 from './Components/Exp1';

function App() {
  return (
    <div className="App">
      <Exp1 />
    </div>
  );
}

export default App;