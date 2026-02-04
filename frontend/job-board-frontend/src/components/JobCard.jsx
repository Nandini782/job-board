import { Link } from "react-router-dom";

export default function JobCard({ job }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "12px",
        marginBottom: "10px",
        borderRadius: "6px",
      }}
    >
      <h3>{job.title}</h3>
      <p><strong>Company:</strong> {job.company}</p>
      <p><strong>Location:</strong> {job.location}</p>

      <Link to={`/jobs/${job._id}`}>View Details</Link>
    </div>
  );
}
