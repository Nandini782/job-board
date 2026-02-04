import Navbar from "../components/Navbar";

export default function RecruiterDashboard() {
  return (
    <>
      <Navbar />

      <div style={{ padding: "40px" }}>
        <h1>Recruiter Dashboard</h1>
        <p>Manage your job postings</p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "linear-gradient(135deg,#6a7be6,#7b5bbf)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "/post-job")}
        >
          Post New Job
        </button>
      </div>
    </>
  );
}
