import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function PostJob() {
  const [job, setJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const submit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/jobs", job);
      alert("Job posted successfully!");
      window.location.href = "/jobs";
    } catch {
      alert("Failed to post job");
    }
  };

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px", maxWidth: "500px", margin: "auto" }}>
        <h2>Post a Job</h2>

        <form onSubmit={submit}>
          <input
            placeholder="Job Title"
            required
            onChange={(e) =>
              setJob({ ...job, title: e.target.value })
            }
          />
          <input
            placeholder="Company"
            required
            onChange={(e) =>
              setJob({ ...job, company: e.target.value })
            }
          />
          <input
            placeholder="Location"
            required
            onChange={(e) =>
              setJob({ ...job, location: e.target.value })
            }
          />
          <textarea
            placeholder="Job Description"
            required
            onChange={(e) =>
              setJob({ ...job, description: e.target.value })
            }
          />

          <button type="submit">Post Job</button>
        </form>
      </div>
    </>
  );
}
