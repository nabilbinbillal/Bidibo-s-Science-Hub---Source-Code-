document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');

    function hideCursorOnPC() {
        document.body.style.cursor = 'none';
    }

    function hideCursorOnMobile() {
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            cursor.style.display = 'none';
        }
    }

    // Hide cursor on PC
    hideCursorOnPC();

    // Hide cursor on mobile devices
    hideCursorOnMobile();

    document.addEventListener('mousemove', (e) => {
        if (cursor.style.display !== 'none') {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    document.addEventListener('click', () => {
        if (cursor.style.display !== 'none') {
            cursor.classList.add('active');
            setTimeout(() => {
                cursor.classList.remove('active');
            }, 1500); // Duration of glowing animation
        }
    });
});

function showSubContainer(id) {
    document.querySelector('.container').style.display = 'none';
    document.getElementById(id).style.display = 'flex';
}

function hideSubContainer(id) {
    document.getElementById(id).style.display = 'none';
    document.querySelector('.container').style.display = 'flex';
}

function redirectEnglishQnA() {
    window.location.href = 'https://science.bidibo.xyz/qna';
}

function redirectBanglaQnA() {
    window.location.href = 'https://science.bidibo.xyz/qna/bangla';
}
