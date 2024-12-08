document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "block"; // Show preloader
    setTimeout(() => {
        preloader.style.display = "none"; // Hide preloader after 2 seconds
    }, 2000); // Adjust duration as needed
});
