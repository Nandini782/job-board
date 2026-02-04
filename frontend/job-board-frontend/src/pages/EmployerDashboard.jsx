import { useState } from "react";
import api from "../services/api";

export default function EmployerDashboard() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    await api.post("/jobs", job);
    alert("Job posted");
  };

  return (
    <form onSubmit={submit}>
      <h2>Post Job</h2>

      <input placeholder="Title"
        onChange={(e) => setJob({ ...job, title: e.target.value })} />

      <input placeholder="Company"
        onChange={(e) => setJob({ ...job, company: e.target.value })} />

      <input placeholder="Location"
        onChange={(e) => setJob({ ...job, location: e.target.value })} />

      <textarea placeholder="Description"
        onChange={(e) => setJob({ ...job, description: e.target.value })} />

      <button>Post</button>
    </form>
  );
}
