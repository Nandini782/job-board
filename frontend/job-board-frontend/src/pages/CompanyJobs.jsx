import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function CompanyJobs() {
  const { name } = useParams();
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    api.get("/jobs").then((res) => {
      const filtered = res.data.filter(
        (job) => job.company === name
      );
      setJobs(filtered);
    });
  }, [name]);

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h2>Jobs at {name}</h2>

        {jobs.length === 0 ? (
          <p>No jobs available</p>
        ) : (
          jobs.map((job) => (
            <div
              key={job._id}
              style={{
                background: "white",
                padding: "20px",
                margin: "15px 0",
                borderRadius: "10px",
              }}
            >
              <h3>{job.title}</h3>
              <p>{job.description}</p>
            </div>
          ))
        )}
      </div>
    </>
  );
}
