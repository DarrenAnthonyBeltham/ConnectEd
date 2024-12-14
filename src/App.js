import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./guest/Login";
import Register from "./guest/Register";
import Dashboard from "./student/Dashboard";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
