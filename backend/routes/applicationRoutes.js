import express from "express";
import Application from "../models/Application.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();

// APPLY FOR JOB
router.post("/:jobId", protect, async (req, res) => {
  try {
    const application = await Application.create({
      job: req.params.jobId,
      applicant: req.user._id,
    });

    res.status(201).json(application);
  } catch (err) {
    console.error("Apply error:", err);
    res.status(500).json({ message: "Application failed" });
  }
});

export default router;
