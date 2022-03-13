import "./App.css";
import "./components/About";
import About from "./components/About";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
