// Evento para ir al formulario
const formContent = document.getElementById('formContent');

function scrollToForm() {
    formContent.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

// Activar o desactivar botones
function toggleCardVisibility(openElement, hideElement, openBtn, hideBtn) {

    hideElement.classList.add("d-none");
    hideBtn.classList.remove("btn-active");
    hideBtn.classList.add("btn-diseable");
    
    openElement.classList.remove("d-none");
    openElement.classList.add("d-block");
    openBtn.classList.add("btn-active");
    openBtn.classList.remove("btn-diseable");
}


const openAhorroEvent = document.getElementById('openAhorroEvent');
const openFinanceEvent = document.getElementById('openFinanceEvent');
const btnFinance = document.getElementById('btnFinance');
const btnAhorro = document.getElementById('btnAhorro');

function openAhorro() {
    toggleCardVisibility(openAhorroEvent, openFinanceEvent, btnAhorro, btnFinance);
}

function openFinance() {
    toggleCardVisibility(openFinanceEvent, openAhorroEvent, btnFinance, btnAhorro);
}

const mthFrameOne = document.getElementById('frameOne');
const mthFrameTwo = document.getElementById('frameTwo');

function toggleFrameVisibility(showFrame, hideFrame) {
    hideFrame.classList.remove("mth-d-active");
    showFrame.classList.add("mth-d-active");
    showFrame.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function cardEventOne() {
    toggleFrameVisibility(mthFrameOne, mthFrameTwo);
}

function cardEventTwo() {
    toggleFrameVisibility(mthFrameTwo, mthFrameOne);
}
