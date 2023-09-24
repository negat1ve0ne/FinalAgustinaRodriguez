// Mobile nav

let toggleNav = document.getElementById('toggleNav');
let navOpen = document.querySelectorAll('.site-nav');

toggleNav.onclick = function () { 
    for(let x of navOpen) {
        x.classList.toggle('nav-open');
    };
};