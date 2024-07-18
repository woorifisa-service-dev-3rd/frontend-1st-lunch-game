const share = document.getElementById('share');

share.addEventListener('click', () => {
    const url = window.location.href;
    window.navigator.clipboard.writeText(url).then(() => {
        alert("복사 완료! 친구들에게 공유해주세요!");
      });
});