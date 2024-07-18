const share = document.getElementById('share');
const roulette = document.getElementById('roulette_button');
const ladder = document.getElementById('ladder_button');
const dice = document.getElementById('dice_button');
const roulette_content = document.getElementsByClassName('roulette_content')[0];
const ladder_content = document.getElementsByClassName('ladder_content')[0];
const dice_content = document.getElementsByClassName('dice_content')[0];

share.addEventListener('click', () => {
    const url = window.location.href;
    window.navigator.clipboard.writeText(url).then(() => {
        alert('복사 완료! 친구들에게 공유해주세요!');
    });
});

roulette.addEventListener('click', () => {
    roulette_content.style.cssText = 'display: flex';
    ladder_content.style.display = 'none';
    dice_content.style.display = 'none';
    roulette.style.backgroundColor = '#2D31A6';
    roulette.style.color = 'white';
    ladder.style.backgroundColor = 'white';
    ladder.style.color = 'black';
    dice.style.backgroundColor = 'white';
    dice.style.color = 'black';
});

ladder.addEventListener('click', () => {
    roulette_content.style.display = 'none';
    ladder_content.style.cssText = 'display: flex';
    dice_content.style.display = 'none';
    ladder.style.backgroundColor = '#2D31A6';
    ladder.style.color = 'white';
    roulette.style.backgroundColor = 'white';
    roulette.style.color = 'black';
    dice.style.backgroundColor = 'white';
    dice.style.color = 'black';
});

dice.addEventListener('click', () => {
    roulette_content.style.display = 'none';
    ladder_content.style.display = 'none';
    dice_content.style.cssText = 'display: flex';
    dice.style.backgroundColor = '#2D31A6';
    dice.style.color = 'white';
    ladder.style.backgroundColor = 'white';
    ladder.style.color = 'black';
    roulette.style.backgroundColor = 'white';
    roulette.style.color = 'black';
});