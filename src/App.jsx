import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NewJob from "./pages/NewJob";
function App() {
  return (
    <div>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/new-job" element={<NewJob />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
