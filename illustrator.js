const modules = document.querySelectorAll('.module');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentModuleIndex = 0;

function showModule(index) {
    modules.forEach(module => module.classList.remove('active'));
    modules[index].classList.add('active');
}

prevButton.addEventListener('click', () => {
    currentModuleIndex = (currentModuleIndex - 1 + modules.length) % modules.length;
    showModule(currentModuleIndex);
});

nextButton.addEventListener('click', () => {
    currentModuleIndex = (currentModuleIndex + 1) % modules.length;
    showModule(currentModuleIndex);
});

showModule(currentModuleIndex);