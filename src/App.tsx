import { Routes, Route } from "react-router-dom";
import Login from "./Login.tsx";
import Callback from "./Callback.tsx";
import Header from "./Header.tsx";
import Body from "./Body.tsx";
import Footer from "./Footer.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/callback" element={<Callback />} />
      <Route
        path="/home"
        element={
          <div className="flex flex-col min-h-screen bg-zinc-950">
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
