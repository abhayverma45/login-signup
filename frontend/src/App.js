import "./App.css";
// import SignUp from "./components/Signup";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
// import { useEffect, useState } from "react";
import { DataProvider } from "./GlobalState";
import { BrowserRouter } from "react-router-dom";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
function App() {
  const [loading, setloading] = useState();
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 1200);
  }, []);
  return (
    <>
      {loading ? (
        <div className="style">
          <ClipLoader
            color={"#37b0d7"}
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <DataProvider>
          <BrowserRouter>
            <div className="App">
              <Navbar /> <Pages />
            </div>
          </BrowserRouter>
        </DataProvider>
      )}
    </>
  );
}

export default App;
