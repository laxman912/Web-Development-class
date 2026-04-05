const wraps = document.querySelectorAll('.wrapper');

wraps.forEach((wrap, wrapIndex) => {
    const boxes = wrap.querySelectorAll('.box');

    if (wrapIndex === 0) {
        boxes.forEach((box, index) => {
            box.innerText = index === 0 ? 'first box' : 'second box';
        });
    } else {
        boxes.forEach((box, index) => {
            box.innerText = `box ${index + 1}`;
        });
    }
});

//dark mode
const darkModeBtn = document.querySelector('.dark-mode-btn');
const lightModeBtn = document.querySelector('.light-mode-btn');
const toggleBtn = document.querySelector('.toggle-btn');

darkModeBtn.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
});

lightModeBtn.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
});

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});