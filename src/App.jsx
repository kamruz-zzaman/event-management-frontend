import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Home from "./pages/Home";
import AuthProtected from "./routes/AuthProtected";
import CreateEvent from "./pages/CreateEvent";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route
          path="/create/event"
          element={
            <AuthProtected>
              <CreateEvent />
            </AuthProtected>
          }
        />
      </Routes>
    </>
  );
}

export default App;
