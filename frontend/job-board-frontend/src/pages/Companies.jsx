import { useEffect, useState } from "react";
import api from "../services/api";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import "../styles/companies.css";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/jobs").then((res) => {
      const uniqueCompanies = [
        ...new Set(res.data.map((job) => job.company)),
      ];
      setCompanies(uniqueCompanies);
    });
  }, []);

  return (
    <>
      <Navbar />

      <div className="companies-container">
        <h1>Companies</h1>

        <div className="companies-grid">
          {companies.map((company, index) => (
            <div
              key={index}
              className="company-card"
              onClick={() =>
                navigate(`/companies/${company}`)
              }
            >
              <h3>{company}</h3>
              <p>View jobs</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
