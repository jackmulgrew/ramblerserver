const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const journeySchema = new Schema({
    start: {
        type: String,
        require: true
    },
    startdate: {
        type: String,
        require: true
    },
    startenddate: {
        type: String,
        require: true
    },
    startfile: {
        type: String,
        require: true
    },
    transport: {
        type: String,
        required: true
    },
    departure: {
        type: String,
        require: true
    },
    arrival: {
        type: String,
        require: true
    },
    transportfile: {
        type: String,
        require: true
    },
    end: {
        type: String,
        required: true
    },
    enddate: {
        type: String,
        required: true
    },
    endenddate: {
        type: String,
        require: true
    },
    endfile: {
        type: String,
        require: true
    },
    user_id: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Journey', journeySchema)

