import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";

// import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="dark">
       {/* <Toaster /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
