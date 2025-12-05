
document.getElementById("musicUploadForm").addEventListener("submit", function (e) {
    let isValid = true;

    // Helper function to set error
    function setError(input, messageSpan, message) {
        input.style.border = "2px solid red";
        messageSpan.textContent = message;
        isValid = false;
    }

    // Helper function to set success
    function setSuccess(input, messageSpan) {
        input.style.border = "2px solid green";
        messageSpan.textContent = "";
    }

    // Inputs
    const profile = document.getElementById("profile_pic_upload");
    const songtitle = document.getElementById("songtitle");
    const artist = document.getElementById("artist");
    const album = document.getElementById("album");
    const releaseDate = document.getElementById("releaseDate");
    const audio = document.getElementById("audio");

    // Error spans
    const profileError = document.getElementById("profileError");
    const songError = document.getElementById("songError");
    const artistError = document.getElementById("artistError");
    const albumError = document.getElementById("albumError");
    const dateError = document.getElementById("dateError");
    const audioError = document.getElementById("audioError");

    // Validate image
    if (profile.files.length === 0) {
        setError(profile, profileError, "Please upload an image.");
    } else {
        setSuccess(profile, profileError);
    }

    // Validate song title
    if (songtitle.value.trim() === "") {
        setError(songtitle, songError, "Song title is required.");
    } else {
        setSuccess(songtitle, songError);
    }

    // Validate artist
    if (artist.value.trim() === "") {
        setError(artist, artistError, "Artist name is required.");
    } else {
        setSuccess(artist, artistError);
    }

    // Validate album
    if (album.value.trim() === "") {
        setError(album, albumError, "Album name is required.");
    } else {
        setSuccess(album, albumError);
    }

    // Validate date
    if (releaseDate.value === "") {
        setError(releaseDate, dateError, "Release date is required.");
    } else {
        setSuccess(releaseDate, dateError);
    }

    // Validate audio file
    if (audio.files.length === 0) {
        setError(audio, audioError, "Please upload an audio file.");
    } else {
        setSuccess(audio, audioError);
    }

    if (!isValid) {
        e.preventDefault(); // stop form submit
    }
});

