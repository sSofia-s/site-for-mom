document.addEventListener('mousemove', function(e) {
    let heart = document.createElement('span');
    let x = e.offsetX;
    let y = e.offsetY;
    let body = document.querySelector('body');
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';

    let size = Math.random() * 80;
    heart.style.width = 10 + size + 'px';
    heart.style.height = 10 + size + 'px';

    let transformValue = Math.random() * 270;
    heart.style.transform = 'rotate(' + transformValue + 'deg)';

    body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 1000);
});