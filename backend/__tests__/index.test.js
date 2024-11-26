const request = require("supertest");
const mongoose = require("mongoose");
const Submission = require("../models/submission.model");
const app = require("../index");

describe("POST /submit", () => {
  beforeAll(async () => {
    process.env.NODE_ENV = "test"; // Ensure we're in test mode
    await mongoose.connect(process.env.MONGO_URI_TEST);
  });

  afterAll(async () => {
    await mongoose.connection.close(); // Close the connection after all tests
  });

  beforeEach(async () => {
    await Submission.deleteMany({});
  });

  it("should return 400 if fullName is missing", async () => {
    const response = await request(app)
      .post("/submit")
      .send({ email: "test@example.com", message: "Test message" });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      error: true,
      message: "Full name is required",
    });
  });

  it("should return 200 and save the submission if all fields are provided", async () => {
    const response = await request(app)
      .post("/submit")
      .send({
        fullName: "John Doe",
        email: "john@example.com",
        message: "Hello, this is a test message",
      });

    expect(response.status).toBe(200);
    const submission = await Submission.findOne({ email: "john@example.com" });
    expect(submission).not.toBeNull();
  });
});
