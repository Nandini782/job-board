import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Jobs from "./pages/Jobs";
import Apply from "./pages/Apply";
import Applications from "./pages/Applications";
import Companies from "./pages/Companies";
import CompanyJobs from "./pages/CompanyJobs";
import RecruiterDashboard from "./pages/RecruiterDashboard";
import PostJob from "./pages/PostJob";
import RecruiterRoute from "./components/RecruiterRoute";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
      {/* Root */}
      <Route
        path="/"
        element={<Navigate to={token ? "/home" : "/login"} />}
      />

      {/* Auth pages */}
      <Route
        path="/login"
        element={token ? <Navigate to="/home" /> : <Login />}
      />
      <Route path="/register" element={<Register />} />

      {/* Protected Home */}
      <Route
        path="/home"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/jobs"
        element={
          <ProtectedRoute>
            <Jobs />
          </ProtectedRoute>
        }
      />

      <Route
        path="/apply/:id"
        element={
          <ProtectedRoute>
            <Apply />
          </ProtectedRoute>
        }
      />

      <Route
        path="/applications"
        element={
          <ProtectedRoute>
            <Applications />
          </ProtectedRoute>
        }
      />

      <Route
  path="/companies"
  element={
    <ProtectedRoute>
      <Companies />
    </ProtectedRoute>
  }
/>

<Route
  path="/companies/:name"
  element={
    <ProtectedRoute>
      <CompanyJobs />
    </ProtectedRoute>
  }
/>
<Route
  path="/recruiter"
  element={
    <RecruiterRoute>
      <RecruiterDashboard />
    </RecruiterRoute>
  }
/>

<Route
  path="/post-job"
  element={
    <RecruiterRoute>
      <PostJob />
    </RecruiterRoute>
  }
/>

    </Routes>
  );
}

export default App;
