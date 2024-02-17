let container = document.querySelector('.container');
let layer = document.querySelectorAll('.layer');

container.onmousemove = function(e){
    let X = e.pageX;
    let Y = e.pageY;

    layer[0].style.transform = 'translate('+ X/100 +'px, '+ Y/100 +'px)';
    layer[1].style.transform = 'translate('+ X/100*2 +'px, '+ Y/100*2 +'px)';
}