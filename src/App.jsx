import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardHome from "./pages/DashboardHome";
import UserPage from "./pages/UserPage";
import DashboardLayout from "./layouts/DashboardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <DashboardLayout>
              <DashboardHome />
            </DashboardLayout>
          }
        />
        <Route
          path="/users"
          element={
            <DashboardLayout>
              <UserPage />
            </DashboardLayout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
