import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import DashboardHome from "./components/DashboardHome";
import UsersTable from "./components/UsersTable";
import ProjectsTable from "./components/ProjectsTable";



function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardHome />} />
          <Route path="/users" element={<UsersTable />} />
          <Route path="/projects" element={<ProjectsTable />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
