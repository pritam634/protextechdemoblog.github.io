window.addEventListener('scroll', () => {
    var homeBtn = document.querySelector('.home-icon');
    homeBtn.classList.toggle("scroll", window.scrollY > 0);
});

stopp = () => {
    var homeBtn = document.querySelector('.home-icon');
    homeBtn.style.animation = 'none';
};

start = () => {
    var homeBtn = document.querySelector('.home-icon');
    homeBtn.style.animation = '';
};