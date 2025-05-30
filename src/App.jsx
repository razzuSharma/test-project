import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import UserPage from "./pages/UserPage";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <Router>
      <div className="w-screen h-screen flex">
        <DashboardPage />
        <main className="flex-1 bg-gray-100 p-8 overflow-auto">
          <Routes>
            <Route path="/" element={<DashboardHome />} />
            <Route path="/users" element={<UserPage />} />
            {/* Add other routes here */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
