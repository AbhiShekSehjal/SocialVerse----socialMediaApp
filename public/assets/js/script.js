let showBtn = document.querySelectorAll(".showBtn");
let showBtnLinks = document.querySelectorAll(".showBtnLinks");

showBtn.forEach((btn, idx) => {
    const links = showBtnLinks[idx];
    links.style.opacity = 0;
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        links.style.opacity = links.style.opacity == 1 ? 0 : 1;
    });

    window.addEventListener("scroll", () => {
        links.style.opacity = 0;
    });
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
    })

    document.addEventListener("click", () => {
        links.style.opacity = 0;
    })
});