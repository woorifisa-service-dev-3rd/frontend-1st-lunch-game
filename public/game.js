function fireit() {
    var spin = Math.floor(Math.random() * 6);
    var base = document.getElementById('base');
  
    if (spin <= document.fire.bullets.value - 1) {
        setTimeout(() => {
            base.classList.remove('idle');
            base.classList.add('shoot');
        }, 100);
        setTimeout(() => {
            base.classList.remove('shoot');
            base.classList.add('idle');
        }, 900);
        setTimeout(() => {
            alert('당첨!');
        }, 1000);
    } else {
        setTimeout(() => {
            base.classList.remove('idle');
            base.classList.add('break');
        }, 1);
        setTimeout(() => {
            base.classList.remove('break');
            base.classList.add('idle');
        }, 1000);
        document.fire.message.value = '발사!';
        setTimeout('document.fire.message.value=\'Play Shooting\'', 600);
    }
}