import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Items } from "./pages/Items/Items";
import { Sales } from "./pages/Sales/Sales";

function App() {
  return (
    <div className="main__container">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/items" element={<Items />} />
      </Routes>
    </div>
  );
}

export default App;
