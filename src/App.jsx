import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import { useState } from "react";

function App() {
  const [loading, setloading] = useState(false);
  return (
    <div className="w-full min-h-screen bg-gray-950 flex flex-col">
      {!loading && <Loading onComplete={() => setloading(true)} />}
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
