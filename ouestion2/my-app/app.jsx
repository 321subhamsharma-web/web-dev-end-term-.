import React from "react";
import UserContext from "./UserContext";
import Parent from "./Parent";

function App() {
  const userName = "Subham Sharma";

  return (
    <UserContext.Provider value={userName}>
      <div>
        <h1>Context API Example</h1>
        <Parent />
      </div>
    </UserContext.Provider>
  );
}

export default App;
