require('dotenv').config();

const express = require("express");
const cors = require("cors");

const mongoose = require('mongoose');
const Submission = require("./models/submission.model");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

if (process.env.NODE_ENV !== "test") {
  mongoose.connect(process.env.MONGO_URI);
  mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
  });
}

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

if (process.env.NODE_ENV !== 'test') {
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
}

module.exports = app;