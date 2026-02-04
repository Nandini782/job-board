import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import api from "../services/api";

export default function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  useEffect(() => {
    api.get(`/jobs/${id}`)
      .then((res) => setJob(res.data))
      .catch(console.error);
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div>
      <h2>{job.title}</h2>
      <p><b>Company:</b> {job.company}</p>
      {job.location && <p><b>Location:</b> {job.location}</p>}
      {job.description && <p>{job.description}</p>}

      <Link to={`/apply/${job._id}`}>
        <button>Apply Now</button>
      </Link>
    </div>
  );
}
