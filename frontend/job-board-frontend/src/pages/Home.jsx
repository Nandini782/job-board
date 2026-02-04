import Navbar from "../components/Navbar";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="home-wrapper">
        <div className="home-card">
          <h1>Welcome to Job Board</h1>
          <p>Find and apply for your dream job</p>
        </div>
      </div>
    </>
  );
}
