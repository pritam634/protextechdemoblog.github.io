const likeBtn = document.querySelector('#like-btn');
const likeBtn2 = document.querySelector('#like-btn-2');
var likeIcon = document.querySelector('#icon1');
var count = document.querySelector('.count');
var count2 = document.querySelector('.count2');
var likeIcon2 = document.querySelector('#icon2');

var checked = false;

likeBtn.addEventListener("click", () => {
    if (!checked) {
        checked = true;
        likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count.textContent++;
    } else {
        checked = false;
        likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
        count.textContent--;
    }
});

var checked2 = false;

likeBtn2.addEventListener("click", () => {
    if (!checked2) {
        checked2 = true;
        likeIcon2.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
        count2.textContent++;
    } else {
        checked2 = false;
        likeIcon2.innerHTML = `<i class="far fa-thumbs-up"></i>`;
        count2.textContent--;
    }
});