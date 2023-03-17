import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Crew from "./pages/Crew";
import Destination from "./pages/Destination";
import Technology from "./pages/Technology";
//import Navigation from "./component/Navigation";

//component
import Testing from "./Testing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/technology" element={<Technology />} />
        <Route exact path="/testing" element={<Testing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
