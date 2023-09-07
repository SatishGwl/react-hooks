// import React, { useRef } from "react";
// import "./App.css";
// // import Counter from "./components/Counter";
// // import UseStateHook from "./UseStateHook/UseStateHook";
// import Counter from "./components/UseReducerHook/Counter";

import React, { useRef, useState } from "react";

const App = () => {
  const refElement = useRef();
  const [name, setName] = useState("satish");

  console.log(refElement);
  function Reset() {
    setName("");
    refElement.current.focus();
  }
  function handleInput() {
    refElement.current.style.color = "red";
  }
  return (
    <div>
      <h1>Learning useRef</h1>
      <input
        type="text"
        ref={refElement}
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={Reset}>Reset</button>
      <button onClick={handleInput}>Hanlde Input</button>
    </div>
  );
};

export default App;

// class Car extends React.Component {

//   render() {
//     console.log("Update");
//     return (
//       <div className="App">
//         <h1>Learning useRef</h1>
//       </div>
//     );
//   }
// }
// export default Car;
