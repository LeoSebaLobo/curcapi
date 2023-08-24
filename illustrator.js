const modules = document.querySelectorAll('.module');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentModuleIndex = 0;

function showModule(index) {
    modules.forEach(module => module.classList.remove('active'));
    modules[index].classList.add('active');
    window.scrollTo(0, 0); // Scroll al principio de la página
}

prevButton.addEventListener('click', () => {
    modules[currentModuleIndex].classList.remove('active');
    currentModuleIndex = (currentModuleIndex - 1 + modules.length) % modules.length;
    modules[currentModuleIndex].classList.add('active');
    window.scrollTo(0, 0); // Scroll al principio de la página
});

nextButton.addEventListener('click', () => {
    modules[currentModuleIndex].classList.remove('active');
    currentModuleIndex = (currentModuleIndex + 1) % modules.length;
    modules[currentModuleIndex].classList.add('active');
    window.scrollTo(0, 0); // Scroll al principio de la página
});

showModule(currentModuleIndex);

const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body; // Seleccionamos el body en lugar de .container

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode'); // Aplicamos el dark-mode a todo el body
});