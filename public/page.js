const share = document.getElementById('share');
const dice = document.getElementById('dice_button');
const roulette = document.getElementById('roulette_button');
const roullet_content = document.getElementsByClassName('roulette_content')[0];
const ladder_content = document.getElementsByClassName('ladder_content')[0];
const dice_content = document.getElementsByClassName('dice_content')[0];

share.addEventListener('click', () => {
    const url = window.location.href;
    window.navigator.clipboard.writeText(url).then(() => {
        alert('복사 완료! 친구들에게 공유해주세요!');
    });
});

dice.addEventListener('click', () => {
    roullet_content.style.display = 'none';
    ladder_content.style.display = 'none';
    dice_content.style.cssText = 'display: flex';
});

roulette.addEventListener('click', () => {
    dice_content.style.display = 'none';
    ladder_content.style.display = 'none';
    roullet_content.style.cssText = 'display: flex';
});