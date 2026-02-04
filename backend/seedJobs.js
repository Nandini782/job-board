import mongoose from "mongoose";
import dotenv from "dotenv";
import Job from "./models/Job.js";
import { jobsSeed } from "./data/jobsSeed.js";

dotenv.config();

// ✅ Use existing user ID from MongoDB (Demo User)
const USER_ID = "6956044e2b47cc6c77a2199f";

const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");

    // Clear old jobs
    await Job.deleteMany();

    // Add createdBy field
    const jobsWithCreator = jobsSeed.map((job) => ({
      ...job,
      createdBy: USER_ID,
    }));

    await Job.insertMany(jobsWithCreator);

    console.log("✅ Jobs seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Seeding error:", error);
    process.exit(1);
  }
};

seedJobs();
