import "./App.css";
// import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
// import { useEffect, useState } from "react";
import { DataProvider } from "./GlobalState";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div className="App">
          <Navbar /> <Pages />
          {/* <SignUp /> */}
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
