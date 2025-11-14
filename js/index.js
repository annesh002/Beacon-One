const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    navToggle.classList.toggle("active");
});


const avatars = document.querySelectorAll(".avatar");
const prevBtn = document.querySelector(".arrow-btn.prev");
const nextBtn = document.querySelector(".arrow-btn.next");

let current = 0;

function setActive(i) {
    avatars.forEach(a => a.classList.remove("active"));
    avatars[i].classList.add("active");
}

prevBtn.addEventListener("click", () => {
    current = (current - 1 + avatars.length) % avatars.length;
    setActive(current);
});

nextBtn.addEventListener("click", () => {
    current = (current + 1) % avatars.length;
    setActive(current);
});

avatars.forEach((avatar, i) =>
    avatar.addEventListener("click", () => {
        current = i;
        setActive(current);
    })
);

setActive(current);