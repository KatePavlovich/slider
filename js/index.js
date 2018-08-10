let slider1 = new Slider(['img/top1.png','img/top2.png','img/top3.png']);
let slider2 = new Slider(['img/middle1.png','img/middle2.png','img/middle3.png']);
let slider3 = new Slider(['img/bottom1.png','img/bottom2.png','img/bottom3.png']);

window.onload = function(){
    slider1.start('slider1');
    slider2.start('slider2');
    slider3.start('slider3');
}
