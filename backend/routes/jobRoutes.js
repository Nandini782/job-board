import express from "express";
import Job from "../models/Job.js";

const router = express.Router();

// GET jobs with filters
router.get("/", async (req, res) => {
  try {
    const { keyword, location, company } = req.query;

    let query = {};

    if (keyword) {
      query.title = { $regex: keyword, $options: "i" };
    }

    if (location) {
      query.location = { $regex: location, $options: "i" };
    }

    if (company) {
      query.company = { $regex: company, $options: "i" };
    }

    const jobs = await Job.find(query).sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
