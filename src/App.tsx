import { Routes, Route } from "react-router-dom";
import Login from "./components/Login.tsx";
import Callback from "./components/Callback.tsx";
import Header from "./components/Header.tsx";
import Body from "./components/Body.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <Routes>
      <Route path="/callback" element={<Callback />} />
      <Route
        path="/"
        element={
          <div className="flex flex-col bg-zinc-950 overflow-hidden">
            <Login />
            <Header />
            <Body />
            <Footer />
          </div>
        }
      />
    </Routes>
  );
}

export default App;
