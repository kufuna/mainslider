window.onload = function(){

var imgs = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg'
]

var texts = [
    {
        description_1 : 'luka'
    },
    {
        description_1 : 'gio'
    }
]

var current = 0;

var time = 0;

var bidge = 0;

var item_1 = document.querySelector('#item-1');
var item_2 = document.querySelector('#item-2');
var img_1 = document.querySelector('#img-1');
var img_2 = document.querySelector('#img-2');
var dots = document.querySelectorAll('#dots .dot');

for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click',function(){
        current = Number(this.dataset.count) - 1;
        changeSlide();
        time = 0;
    })
}

img_1.src = imgs[current];
img_2.src = imgs[current + 1];
item_1.classList.add('active');


function changeSlide(){
    current++;
    if (current == imgs.length) {
        current = 0;
    }
    if (bidge === 0) {
        item_1.classList.remove('active');
        item_2.classList.add('active')
        img_2.src = imgs[current];
        bidge = 1;
    }else {
        item_2.classList.remove('active')
        item_1.classList.add('active');
        img_1.src = imgs[current];
        bidge = 0;
    }
}


function changeSlider(){

    time++;

    if (time > 240) {

        changeSlide();

        time = 0;

    }

    requestAnimationFrame(changeSlider)
}
changeSlider();


}