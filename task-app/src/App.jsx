import { useState } from "react";
import "./index.css";

// Import your components here
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TaskManager from "./components/TaskManager";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {" "}
        {/* Add padding-top equal to navbar height */}
        <section id="home">
          <Home />
        </section>
        <section id="tasks">
          <TaskManager />
        </section>
        <section id="about">
          <Footer />
        </section>
      </main>

      {/* Optional Button outside sections */}
      <Button />
    </>
  );
}

export default App;
