const mongoose = require('mongoose');

// Define the schema for a Music Track
const musicSchema = new mongoose.Schema({
    // profile_pic (Cover Art) should store the URL or file path, making it a String.
    profile_pic: {
        type: String,
        required: [true, 'Cover art is required.'],
    },
    // Song title is a required string.
    songtitle: {
        type: String,
        required: [true, 'Song title is required.'],
        trim: true,
        minLength: 3
    },
    // Artist is a required string.
    artist: {
        type: String,
        required: [true, 'Artist name is required.'],
        trim: true,
        minLength: 3
    },
    // Album is optional, so we don't set 'required: true'.
    album: {
        type: String,
        trim: true
    },
    // Release Date is correctly set as a Date type and is required.
    releaseDate: {
        type: Date,
        required: [true, 'Release date is required.'],
    },
    // The audio file path/URL must be a String, not a Date.
    audio: {
        type: String,
        required: [true, 'Audio file path is required.'],
    },
    // Automatically add timestamps for creation and update times
}, { timestamps: true });

module.exports = mongoose.model('MUSIC', musicSchema);