import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/jobs.css";

export default function Jobs() {
  const navigate = useNavigate();

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    keyword: "",
    location: "",
    company: "",
  });

  const fetchJobs = () => {
    api
      .get("/jobs", { params: filters })
      .then((res) => setJobs(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <>
      <Navbar />

      <div className="jobs-container">
        <h1>Available Jobs</h1>

        {/* 🔍 FILTERS */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
          <input
            placeholder="Search keyword"
            onChange={(e) =>
              setFilters({ ...filters, keyword: e.target.value })
            }
          />
          <input
            placeholder="Location"
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          />
          <input
            placeholder="Company"
            onChange={(e) =>
              setFilters({ ...filters, company: e.target.value })
            }
          />
          <button onClick={fetchJobs}>Search</button>
        </div>

        {jobs.length === 0 ? (
          <p>No jobs found</p>
        ) : (
          <div className="jobs-grid">
            {jobs.map((job) => (
              <div className="job-card" key={job._id}>
                <h3>{job.title}</h3>
                <p><strong>Company:</strong> {job.company}</p>
                <p><strong>Location:</strong> {job.location}</p>
                <p className="desc">{job.description}</p>

                <button
                  className="apply-btn"
                  onClick={() => navigate(`/apply/${job._id}`)}
                >
                  Apply
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}