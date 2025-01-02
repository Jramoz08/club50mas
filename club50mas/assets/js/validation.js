// Validación de datos formulario

const form = document.getElementById('registrationForm');
if (form) {
    const submitButton = document.getElementById('Mthbottom');

    const validators = {
        email: (element) => {
            return element.validity.valid && element.value.includes('@');
        },
        name: (element) => {
            return element.value.trim() !== '' && !/\d/.test(element.value);
        },
        phone: (element) => {
            const phoneRegex = /^[+]?\d+$/;
            return phoneRegex.test(element.value) && element.value.length >= 10 && element.value.length <= 10;
        },
        reason: (element) => {
            return element.value !== '';
        },
        authorize: (element) => {
            return element.checked;
        }
    };

    function showError(element, message) {
        const errorElement = document.getElementById(element.id + 'Error');
        errorElement.textContent = message;
        errorElement.style.display = 'block';
        element.classList.add('invalid');
    }

    function hideError(element) {
        const errorElement = document.getElementById(element.id + 'Error');
        errorElement.style.display = 'none';
        element.classList.remove('invalid');
    }

    function validateField(element) {
        const validator = validators[element.id];
        const isValid = validator ? validator(element) : true;
        const message = getErrorMessage(element);

        if (!isValid) {
            showError(element, message);
        } else {
            hideError(element);
        }

        checkFormValidity();
    }

    function getErrorMessage(element) {
        switch (element.id) {
            case 'email': return 'Por favor introduce un correo electrónico válido';
            case 'name': return 'El nombre es obligatorio, no puede contener números.';
            case 'phone': return 'Por favor ingresa un número de teléfono válido';
            case 'reason': return 'Por favor selecciona una opción';
            case 'authorize': return 'Es un campo requerido';
            default: return '';
        }
    }

    function checkFormValidity() {
        const inputs = form.querySelectorAll('input, select');
        let allValid = true;

        inputs.forEach(input => {
            const validator = validators[input.id];
            if (input.classList.contains('invalid') || !validator(input)) {
                allValid = false;
            }
        });

        submitButton.disabled = !allValid;
        submitButton.classList.toggle('valid', allValid);
    }

    form.addEventListener('input', (e) => validateField(e.target)); 
    form.addEventListener('change', (e) => validateField(e.target)); 

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let allValid = true;

        const inputs = form.querySelectorAll('input, select');
        inputs.forEach(input => {
            validateField(input); 
            if (input.classList.contains('invalid')) {
                allValid = false;
            }
        });

        if (allValid) {
            window.location.href = '../club50mas/thankyoupageComunidad.html'; 
        } else {
            alert('Por favor, corrige los errores');
        }
    });
}
