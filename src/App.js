import React from "react";
import "./index.css";
import Route from "./Routes/Index.js";

function App() {
  return (
    <React.Fragment>
      <div className="text-white flex h-screen bg-[#d7e0d9] tracking-widest">
        <div className="w-5/6">
          <Route />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
