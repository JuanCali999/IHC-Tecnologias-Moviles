const portafolio = document.querySelector("#portafolio");
const services = document.querySelector("#services");

//menu portafolio

portafolio.addEventListener("click", (p) => {
    p.preventDefault();
    const sectionP = document.querySelector(".portafolio");
    sectionP.scrollIntoView({behavior: "smooth"});
});
//menu servicios
services.addEventListener("click", (s) => {
    s.preventDefault();
    const sectionS = document.querySelector(".services");
    sectionS.scrollIntoView({behavior: "smooth"});
});