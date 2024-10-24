const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const submissionSchema = new Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    createdOn: { type: Date, default: new Date().getTime()},
});

module.exports = mongoose.model("Submission", submissionSchema);

