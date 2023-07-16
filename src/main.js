
// Get the progress bar element and the update button
const progressBar = document.getElementById("progress-bar");
const updateButton = document.getElementById("update-button");

let progress = 0; // Set the initial progress value to 0

// Update the progress bar with a new progress value
const updateProgressBar = () => {
    // Create a new element to represent the progress bar fill
    progressBar.innerHTML = "<div id='progress-bar-fill'></div>";

    // Get the progress bar fill element from the HTML
    const progressBarFill = document.getElementById("progress-bar-fill");

    //const progress1 = Math.min(parseFloat(localStorage.progress || "0"), 100);
    progressBarFill.style.width = progress + "%";
    // Set the width of the progress bar fill based on the progress value
    //progressBarFill.style.width = `${progress}%`;
}

// Update the progress bar when the button is clicked
updateButton.addEventListener("click", function () {

 
        if (progress === 100) {
            clearInterval(intervalId); 
        }
        if (progress < 100) {
            progress = progress + 10;
            updateProgressBar(progress); // Update the progress bar with the new progress value
        }
});
