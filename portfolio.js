const projectsLi = document.querySelectorAll(".project-item");

// Add a click event listener to each li element
projectsLi.forEach((li) => {
    li.addEventListener("click", () => {
        // Find the corresponding content div
        const contentId = `${li.id}-content`;
        const contentDiv = document.getElementById(contentId);

        // Toggle the "hidden" class on the content div
        if (contentDiv) {
            contentDiv.classList.toggle("hidden");
        }
    });
});

// Get the images
const ximeChild = document.getElementById("xime-child");
const ximeAdult = document.getElementById("xime-adult");

// Add event listeners to toggle visibility on click
ximeChild.addEventListener("click", () => {
    ximeChild.classList.toggle("hidden");
    ximeAdult.classList.toggle("hidden");
});

ximeAdult.addEventListener("click", () => {
    ximeAdult.classList.toggle("hidden");
    ximeChild.classList.toggle("hidden");
});
