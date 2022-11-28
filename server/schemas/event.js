const mongoose = require("mongoose");


const EventSchema = new mongoose.Schema({
    title:  String,
    descryption: String,
    StartDate: { type: Date, default: Date.now()},
    EndDate: Date
})


mongoose.model("Event", EventSchema)