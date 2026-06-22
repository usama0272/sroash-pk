// SROASH.PK JavaScript

document.addEventListener("DOMContentLoaded", () => {
    console.log("SROASH.PK Loaded Successfully");

    // Smooth scroll for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
