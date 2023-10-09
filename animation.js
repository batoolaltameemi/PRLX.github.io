function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
            entry.target.classList.add("section-enter");
            observer.unobserve(entry.target);
        }
    });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: "0px",
    threshold: 0.3, // Adjust this threshold as needed
});

// Select all elements with the class "section2" to "section8"
const sections = document.querySelectorAll(".section2, .section3, .section4, .section5, .section6, .section7, .section8");

// Observe each section
sections.forEach(section => {
    observer.observe(section);
});
