import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      // ✅ store user data
      localStorage.setItem("user", JSON.stringify(res.data.user));

      // ✅ temp token (until JWT)
      localStorage.setItem("token", "logged-in");

      // ✅ temp role (change later from backend)
      localStorage.setItem("role", "candidate");
      // use "recruiter" if you want recruiter flow

      // ✅ direct redirect to home
      navigate("/home", { replace: true });

    } catch (err) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Log In</h2>

        <form onSubmit={submit}>
          <input
            type="email"
            placeholder="Email"
            required
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <button type="submit">Log In</button>
        </form>

        <p className="switch-text">
          Don’t have an account? <Link to="/register">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
