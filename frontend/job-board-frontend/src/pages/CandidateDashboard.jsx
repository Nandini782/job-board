import { useEffect, useState } from "react";
import api from "../services/api";

export default function CandidateDashboard() {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    const payload = JSON.parse(atob(localStorage.getItem("token").split(".")[1]));
    api.get(`/applications/user/${payload.id}`)
      .then((res) => setApps(res.data));
  }, []);

  return (
    <div>
      <h2>My Applications</h2>
      {apps.map((a) => (
        <p key={a._id}>Applied Job ID: {a.jobId}</p>
      ))}
    </div>
  );
}
