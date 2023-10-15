import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import NewJob from "./pages/NewJob";
import AddNewJob from "./pages/AddNewJob";
function App() {
  return (
    <div>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/new-job" element={<NewJob />} />
          <Route path="/jobs/add-new-job" element={<AddNewJob />} />
        </Routes>
      </AppLayout>
    </div>
  );
}

export default App;
