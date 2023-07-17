
// Get the progress bar element and the update button
const progressfoodBar = document.getElementById("progress-food-bar");
const updatefoodButton = document.getElementById("update-food-button");

let foodProgress = 0; // Set the initial progress value to 0

// Update the progress bar with a new progress value
const updateFoodBar = () => {
    // Create a new element to represent the progress bar fill
    progressfoodBar.innerHTML = "<div id='progress-food-bar-fill'></div>";

    // Get the progress bar fill element from the HTML
    const progressBarFill = document.getElementById("progress-food-bar-fill");

    //const progress1 = Math.min(parseFloat(localStorage.progress || "0"), 100);
    progressBarFill.style.width = foodProgress + "%";
    // Set the width of the progress bar fill based on the progress value
    //progressBarFill.style.width = `${progress}%`;
}

// Update the progress bar when the button is clicked
updatefoodButton.addEventListener("click", function () {

 
        if (foodProgress === 100) {
            clearInterval(intervalId); 
        }
        if (foodProgress < 100) {
            foodProgress = foodProgress + 10;
            updateFoodBar(foodProgress); // Update the progress bar with the new progress value
        }
});



//happiness 

// Get the progress bar element and the update button
const progressHappinessBar = document.getElementById("progress-happiness-bar");
const updateHappinessButton = document.getElementById("update-happiness-button");

let happinessProgress = 0; // Set the initial progress value to 0

// Update the progress bar with a new progress value
const updateHappinessBar = () => {
    // Create a new element to represent the progress bar fill
    progressHappinessBar.innerHTML = "<div id='progress-happiness-bar-fill'></div>";

    // Get the progress bar fill element from the HTML
    const progressBarFill = document.getElementById("progress-happiness-bar-fill");

    //const progress1 = Math.min(parseFloat(localStorage.progress || "0"), 100);
    progressBarFill.style.width = happinessProgress + "%";
    // Set the width of the progress bar fill based on the progress value
    //progressBarFill.style.width = `${progress}%`;
}

// Update the progress bar when the button is clicked
updateHappinessButton.addEventListener("click", function () {

        if (happinessProgress === 100) {
            clearInterval(intervalId); 
        }
        if (foodProgress < 100) {
            happinessProgress = happinessProgress + 10;
            updateHappinessBar(happinessProgress); // Update the progress bar with the new progress value
        }
});
