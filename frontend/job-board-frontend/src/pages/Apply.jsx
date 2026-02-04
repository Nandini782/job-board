import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import "../styles/apply.css";

export default function Apply() {
  const { id } = useParams(); // job id from URL
  const navigate = useNavigate();

  const applyJob = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.post(
        `/applications/${id}`, // ✅ FIXED HERE
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Application submitted successfully!");
      navigate("/applications");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Application failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="apply-wrapper">
        <div className="apply-card">
          <h2>Apply for Job</h2>
          <p>Are you sure you want to apply?</p>

          <button onClick={applyJob}>Confirm Apply</button>
        </div>
      </div>
    </>
  );
}
