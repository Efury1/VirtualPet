
// Get the progress bar element and the update button
const progressBar = document.getElementById("progress-bar");
 const updateButton = document.getElementById("update-button");

// Update the progress bar with a new progress value
function updateProgressBar(progress) {
    // Create a new element to represent the progress bar fill
    progressBar.innerHTML = "<div id='progress-bar-fill'></div>";

    // Get the progress bar fill element from the HTML
    const progressBarFill = document.getElementById("progress-bar-fill");

    // Set the width of the progress bar fill based on the progress value
    progressBarFill.style.width = `${progress}%`;
}

// Update the progress bar when the button is clicked
updateButton.addEventListener("click", function () {
    let progress = 0; // Set the initial progress value to 0

    // Update the progress bar every 10 milliseconds until it reaches 100%
    const intervalId = setInterval(function () {
        progress += 1; // Increment the progress value
        updateProgressBar(progress); // Update the progress bar with the new progress value

        // Stop the interval when the progress reaches 100%
        if (progress === 100) {
            clearInterval(intervalId); 
        }
    }, 100);
});
