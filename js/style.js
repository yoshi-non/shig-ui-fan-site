const ui_img = document.querySelectorAll('.ui');
ui_img.forEach(function (item, index) {
    item.onclick = function () {
        document.getElementById('bigimg').src = this.dataset.image;
    }
});

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    slidesPerView: 6
});

const swiper2 = new Swiper(".mySwiper2", {
    thumbs: {
        swiper: swiper
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});