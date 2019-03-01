import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import App from "./components/App";

import Firebase, { FirebaseContext } from "./components/Firebase";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  rootElementFirebase
);
