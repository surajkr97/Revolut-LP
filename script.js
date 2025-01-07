let container = document.getElementsByClassName("card")[0];
let specialSection = document.getElementsByClassName("Slider")[0]; // The special section to show on scroll
let lastScrollTop = 0; // Variable to keep track of last scroll position
let foreground= document.getElementsByClassName("foreground")[0]; // The first section
let originalContent=container.innerHTML;
document.addEventListener("scroll", function () {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop; // Current scroll position

    // Detect scroll direction
    if (scrollTop > lastScrollTop) {
        // Scrolling Down: Add the 'scrolled' class and replace the content with the special section
        container.classList.add("scrolled");
        foreground.classList.add("foreground_scrolled")

        // Replace content with special section
        container.innerHTML = ""; // Clear current content
        container.appendChild(specialSection); // Add the special section
    } else {
        // Scrolling Up: Remove the 'scrolled' class and restore the original content
        container.classList.remove("scrolled");
        foreground.classList.remove("foreground_scrolled")

        // Restore the original content
        container.innerHTML = originalContent; // Clear the current content
    }

    // Update the last scroll position
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scrollTop values
});
