import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/shared-components/Footer";
import Header from "./components/shared-components/Header";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
