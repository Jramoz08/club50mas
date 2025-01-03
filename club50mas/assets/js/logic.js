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


function toggleCardVisibility(openElement, hideElement, openBtn, hideBtn) {
    hideElement.classList.add("d-none");
    hideBtn.classList.remove("btn-active");
    hideBtn.classList.add("btn-diseable");

    openElement.classList.remove("d-none");
    openElement.classList.add("d-block");
    openBtn.classList.add("btn-active");
    openBtn.classList.remove("btn-diseable");
}

const openHospitalEvent = document.getElementById('openHospitalEvent');
const openSeguroEvent = document.getElementById('openSeguroEvent');
const openExequialEvent = document.getElementById('openExequialEvent');

const btnHospital = document.getElementById('btnHospital');
const btnSeguro = document.getElementById('btnSeguro');
const btnExequial = document.getElementById('btnExequial');

function openHospital() {
    toggleCardVisibility(openHospitalEvent, openSeguroEvent, btnHospital, btnSeguro);
    toggleCardVisibility(openHospitalEvent, openExequialEvent, btnHospital, btnExequial);
}

function openSeguro() {
    toggleCardVisibility(openSeguroEvent, openHospitalEvent, btnSeguro, btnHospital);
    toggleCardVisibility(openSeguroEvent, openExequialEvent, btnSeguro, btnExequial);
}


function openExequial() {
    toggleCardVisibility(openExequialEvent, openSeguroEvent, btnExequial, btnSeguro);
    toggleCardVisibility(openExequialEvent, openHospitalEvent, btnExequial, btnHospital);
}


function Home() {
    window.location.href = '../club50mas/index.html'
}


//funcion para retornar a una pagina anterior

function returnPage() {
    window.history.back();
}