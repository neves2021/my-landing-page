// Variable to hold the timeout ID
let timeOutId;

// Function to display the page after a delay
function displayPage() {
  timeOutId = setTimeout(showPage, 2000);
}

// Function to show the page by hiding the loader and displaying the content
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

// Function to change the image source when the mouse is over it
function newPicture() {
  document.getElementById("myPicture") .src ="image2.jpg";
}

// Function to revert the image source when the mouse is out
function oldPicture() {
  document.getElementById("myPicture") .src ="image.jpg";
}

// Get the container and images for the carousel
const imgs = document.getElementById("img");
const img = document.querySelectorAll("#img img");

// Index to keep track of the current image
let idx = 0;

// Function to move the carousel to the next image
function imageCarousel() {
  idx++;

  // Reset the index if it exceeds the number of images
  if(idx > img.length - 1) {
      idx = 0;
  }

  // Translate the container to show the next image
  imgs.style.transform = `translateX(${-idx * 750}px)`;
}

// Set an interval to automatically move the carousel
setInterval(imageCarousel, 2500);

// Select the words to be styled
const updateColor = document.querySelectorAll("span");

// Update the color of the selected words
updateColor[0].style.color = "lightGreen";
updateColor[1].style.color = "darkOrange";

// Get the user input field
let userInput = document.getElementById('user');

// Get the form element
let myForm = document.getElementById("myForm");

// Add a submit event listener to the form
myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the user input value
  let user = document.getElementById("user");

  if (user.value == "") {
    alert("I think you forgot something…");
  } else {
    // Retrieve existing data from localStorage
    let existingData = localStorage.getItem("userInputs");

    // Parse the existing data as an array or create an empty array if it doesn't exist
    let inputs = existingData ? JSON.parse(existingData) : [];

    // Add the current user input to the array
    inputs.push(user.value);

    // Save the updated array back to localStorage
    localStorage.setItem("userInputs", JSON.stringify(inputs));

    alert("This form has been successfully submitted. Thanks!")
    console.log(`Visitor's feedback: ${user.value}`);

    user.value = "";
  }
});