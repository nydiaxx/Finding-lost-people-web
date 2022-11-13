const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".jumbotron");

const sectionOneOptions = {
    rootMargin: "-600px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver
(function(
    entries, 
    sectionOneObserver
){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            nav.classList.add("nav-scrolled");
        } else {
            nav.classList.remove("nav-scrolled");
        }
    });
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);