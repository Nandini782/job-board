import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";

export default function Applications() {
  const [apps, setApps] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    api
      .get(`/applications/user/${user.id}`)
      .then((res) => setApps(res.data));
  }, []);

  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h2>My Applications</h2>

        {apps.length === 0 ? (
          <p>No applications yet</p>
        ) : (
          apps.map((app) => (
            <div key={app._id} style={{ margin: "15px 0" }}>
              Applied for Job ID: {app.jobId}
            </div>
          ))
        )}
      </div>
    </>
  );
}
