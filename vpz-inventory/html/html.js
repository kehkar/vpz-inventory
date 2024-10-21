document.addEventListener("DOMContentLoaded", function () {
    const esemedButton = document.getElementById("tab-esemed");
    const oskusedButton = document.getElementById("tab-oskused");
    const esemedContent = document.getElementById("esemed-content");
    const oskusedContent = document.getElementById("oskused-content");

    // Show ESEMED tab by default
    esemedContent.classList.add("active");

    esemedButton.addEventListener("click", function () {
        esemedContent.classList.add("active");
        oskusedContent.classList.remove("active");
        esemedButton.classList.add("btn-primary");
        esemedButton.classList.remove("btn-outline-secondary");
        oskusedButton.classList.remove("btn-primary");
        oskusedButton.classList.add("btn-outline-secondary");
    });

    oskusedButton.addEventListener("click", function () {
        oskusedContent.classList.add("active");
        esemedContent.classList.remove("active");
        oskusedButton.classList.add("btn-primary");
        oskusedButton.classList.remove("btn-outline-secondary");
        esemedButton.classList.remove("btn-primary");
        esemedButton.classList.add("btn-outline-secondary");
    });

    const korjaButtons = document.querySelectorAll('.item-dropped-button'); // Select all buttons with this class
    korjaButtons.forEach((korjaButton) => {
        korjaButton.addEventListener("click", function () {
            // Show the notification with fade-in effect
            const notification = document.getElementById("notification");
            notification.style.display = "block"; // Display the notification
            setTimeout(() => {
                notification.style.opacity = 1; // Fade in
            }, 10); // Delay for CSS transition

            // Hide the notification after a few seconds with fade-out effect
            setTimeout(() => {
                notification.style.opacity = 0; // Fade out
                setTimeout(() => {
                    notification.style.display = "none"; // Hide after fading out
                }, 500); // Match with the transition duration
            }, 3000); // Show for 3 seconds before starting to fade out

            // Remove the item from the DOM
            const itemContainer = korjaButton.closest('.item-dropped-container');
            itemContainer.remove(); // Remove the item container
        });
    });
});
