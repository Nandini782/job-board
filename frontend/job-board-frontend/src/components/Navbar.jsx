import { useNavigate } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const role = localStorage.getItem("role");
  const logout = () => {
    localStorage.removeItem("user");   // ✅ clear user
    localStorage.removeItem("token");  // (optional if you use later)
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar">
      <h2 className="logo">Job Board</h2>

      <ul className="nav-links">
        <li>Home</li>
        <li onClick={() => navigate("/jobs")}>Jobs</li>
        <li onClick={() => navigate("/companies")}>Companies</li>
        <li>About</li>
        <li onClick={() => navigate("/applications")}>Applications</li>
        {role === "recruiter" && (
  <li onClick={() => navigate("/recruiter")}>
    Recruiter
  </li>
)}
      </ul>

      <div className="user-info">
        {user && <span>Hi, {user.name}</span>}
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </nav>
  );
}
