const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
        }
        else {
            entry.target.style.opacity = "0";
        }
    });
});



const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {observer.observe(el)});