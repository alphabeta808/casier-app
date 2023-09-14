import React from "react";
import "./index.css";
import Navigation from "./Components/Navigations/Navigation.js";
import Header from "./Components/Header/Header.js";
import Route from "./Routes/Index.js";

function App() {
  return (
    <React.Fragment>
      <div className="text-white flex h-screen bg-[#d7e0d9] tracking-widest">
        {/* Side Bar */}
        <div className="w-1/6 bg-[#175c15c7]">
          <div className="border-b-2 border-slate-700 py-3 pl-5">
            <h1 className="text-xl font-bold">Dashboard</h1>
            <h1 className="ml-5 text-xl font-bold">Toko Alfan</h1>
          </div>
          {/* Navigation */}
          <Navigation />
        </div>
        <div className="w-5/6">
          {/* Header */}
          <Header />
          {/* Main Content */}
          <Route />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
