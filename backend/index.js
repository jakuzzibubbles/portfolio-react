require('dotenv').config();

const config = require("./config.json");
const mongoose = require('mongoose');

mongoose.connect(config.connectionString);

const Submission = require("./models/submission.model");

const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());

app.use(
    cors({
        origin: "*",
    })
);

// Sent Submission
app.post("/submit", async (req, res) => {
    const { fullName, email, message } = req.body;

    // Validation
    if (!fullName) {
        return res
        .status(400)
        .json({ error: true, message: "Full name is required" });
    }

    if (!email) {
        return res.status(400).json({ error: true, message: "Email is required" });
    }

    if (!message) {
        return res
        .status(400)
        .json({ error: true, message: "Message is required" });
    }

    // Create new submission form
    const submission = new Submission ({
        fullName,
        email,
        message,
    });

    // Save to the DB with error handling
    try  {await submission.save();

    return res.json({
        error: false,
        submission,
        message: "Your message has been sent successfully."});
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: true, message: "An unexpected error occurred. Please try again."})
    }
});

app.listen(3001);

module.exports = app;