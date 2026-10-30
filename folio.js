// ==================================
// SELECT HTML ELEMENTS
// ==================================

const sections = document.querySelectorAll(".page-section");

const navLinks = document.querySelectorAll(".nav-links a");

const viewProjectsBtn = document.getElementById("viewProjects");

const contactMeBtn = document.getElementById("contactMe");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.querySelector(".nav-links");

const footer = document.querySelector(".footer");


// ==================================
// FUNCTION: SHOW SECTION
// ==================================

function showSection(sectionId) {

    // Find the selected section
    const targetSection = document.getElementById(sectionId);

    // Check whether the section exists
    if (!targetSection || !targetSection.classList.contains("page-section")) {
        return;
    }

    // Hide all sections
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // Show selected section
    targetSection.classList.add("active");


    // Remove active class from all navbar links
    navLinks.forEach(link => {
        link.classList.remove("active");
    });


    // Highlight the selected navbar link
    const activeLink = document.querySelector(
        `.nav-links a[href="#${sectionId}"]`
    );

    if (activeLink) {
        activeLink.classList.add("active");
    }


    // Show footer only on Contact section
    if (footer) {
        footer.classList.toggle("visible", sectionId === "contact");
    }

}


// ==================================
// NAVBAR CLICK FUNCTION
// ==================================

navLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        // Prevent normal page scrolling
        event.preventDefault();

        // Get section ID from href
        const sectionId = this.getAttribute("href").substring(1);

        // Open selected section
        showSection(sectionId);

        // Close mobile menu
        closeMobileMenu();

    });

});


// ==================================
// VIEW PROJECTS BUTTON
// ==================================

if (viewProjectsBtn) {

    viewProjectsBtn.addEventListener("click", function() {

        showSection("projects");

    });

}


// ==================================
// CONTACT ME BUTTON
// ==================================

if (contactMeBtn) {

    contactMeBtn.addEventListener("click", function() {

        showSection("contact");

    });

}


// ==================================
// MOBILE MENU FUNCTION
// ==================================

if (menuToggle && navMenu) {

    menuToggle.addEventListener("click", function() {

        // Open or close mobile menu
        const isOpen = navMenu.classList.toggle("mobile-open");

        // Update accessibility state
        menuToggle.setAttribute("aria-expanded", String(isOpen));

        // Change menu icon
        menuToggle.textContent = isOpen ? "✕" : "☰";

    });

}


// ==================================
// CLOSE MOBILE MENU
// ==================================

function closeMobileMenu() {

    if (!menuToggle || !navMenu) {
        return;
    }

    navMenu.classList.remove("mobile-open");

    menuToggle.setAttribute("aria-expanded", "false");

    menuToggle.textContent = "☰";

}


// ==================================
// INITIAL PAGE SETUP
// ==================================

showSection("home");