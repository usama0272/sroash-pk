// =============================
// SROASH.PK
// script.js
// =============================

document.addEventListener("DOMContentLoaded", () => {

    // Smooth scrolling
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



    // Fade-in animation on scroll
    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    }, {
        threshold: 0.2
    });

    document.querySelectorAll(".product-card, .about, .contact")
        .forEach(el => observer.observe(el));



    // Navbar shadow when scrolling
    window.addEventListener("scroll", () => {

        const header = document.querySelector("header");

        if (window.scrollY > 50) {
            header.style.boxShadow = "0 5px 25px rgba(0,0,0,0.1)";
        } else {
            header.style.boxShadow = "0 2px 20px rgba(0,0,0,.05)";
        }

    });



    // Product image hover zoom
    document.querySelectorAll(".product-card img")
        .forEach(img => {

            img.addEventListener("mouseenter", () => {

                img.style.transform = "scale(1.03)";
                img.style.transition = ".4s";

            });

            img.addEventListener("mouseleave", () => {

                img.style.transform = "scale(1)";

            });

        });



    console.log("SROASH.PK Loaded Successfully");

});
