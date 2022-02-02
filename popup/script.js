const container = document.getElementById('container');
const openbtn = document.getElementById('open');
const closebtn = document.getElementById('close');

openbtn.addEventListener('click', () => {
    container.classList.add('active');
});

closebtn.addEventListener('click', () => {
    container.classList.remove('active');
});