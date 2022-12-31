import "./App.css";
import "swiper/css/bundle";
import "./styles.css";
import NavBar from "./NavBar";
import NewArrival from "./New-Arrival";

import { Route, BrowserRouter, Routes } from "react-router-dom";
import All from "./All";
import Featured from "./Featured";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/new-arrival" element={<NewArrival />} />
          <Route path="/featured" element={<Featured />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
