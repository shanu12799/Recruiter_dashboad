import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Jobs } from "./pages/Jobs";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./Context/PrivateRoute";

function App() {
  const [token, setToken] = useState("");
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Login" element={<Login setToken={setToken} />} />
        <Route
          path="/Jobs"
          element={
            <PrivateRoute>
              <Jobs token={token} />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
