const mongoose = require("mongoose")

const profileSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required:true,
        maxlength: 555,
        minlength: 2
    },
    lastname: {
        type: String,
        required:true,
        maxlength: 555,
        minlength: 2
    },
    age: {
        type: Number,
        required: true
    },
    DOB: {
        type: Date,
        default: Date.now()
    },
    weight: {
        type: String,
    },
    height: {
        type: String
    }
})