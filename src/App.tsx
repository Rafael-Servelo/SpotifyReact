import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-950">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
