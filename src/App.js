import React from "react";
import "./index.css";
import Navigation from "./components/Navigations/Navigation.js";
import Header from "./components/header/Header.js";
import Route from "./routes/Index.js";

function App() {
  return (
    <div className="dashboard text-white flex h-screen bg-[#d7e0d9] tracking-widest">
      {/* Side Bar */}
      <div className="aside side-bar w-1/6 bg-[#175c15c7]">
        <div className="border-b-2 border-slate-700 py-3 pl-5">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <h1 className="ml-5 text-xl font-bold">Toko Alfan</h1>
        </div>
        {/* Navigation */}
        <Navigation />
      </div>
      <div className="content w-5/6">
        {/* Header */}
        <Header />
        {/* Main Content */}
        <Route />
      </div>
    </div>
  );
}

export default App;
