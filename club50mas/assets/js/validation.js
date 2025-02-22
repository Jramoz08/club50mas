// Validación de datos formulario Home

const form = document.getElementById('registrationForm');
if (form) {
    const submitButton = document.getElementById('Mthbottom');

    const validators = {
        email: (element) => {
            return element.validity.valid && element.value.includes('@');
        },
        cedula: (element) => {
            return element.validity.valid && /^[0-9]{10}$/.test(element.value);
        },
        city: (element) => {
            return element.value.trim() !== '' && /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(element.value);
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
        tipodocumento: (element) => {
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
            case 'cedula': return 'Ingrese un número de cedula valido.';
            case 'city': return 'El nombre de la ciudad solo puede contener letras y espacios.';
            case 'phone': return 'Por favor ingresa un número de teléfono válido';
            case 'reason': return 'Por favor selecciona una opción';
            case 'tipodocumento ': return 'Por favor selecciona una opción';
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
            window.location.href = '../thankyoupageComunidad.html'; 
        } else {
            alert('Por favor, corrige los errores');
        }
    });
}
// Validación de datos formularios Internas

const formInternas = document.getElementById('formInternas');
if (formInternas) {
    const submitButton = document.getElementById('MthBtnSummit');

    const validators = {
        emailInt: (element) => {
            return element.validity.valid && element.value.includes('@');
        },
        nameInt: (element) => {
            return element.value.trim() !== '' && !/\d/.test(element.value);
        },
        ciudadInt: (element) => {
            return element.value.trim() !== '' && !/\d/.test(element.value);
        },
        phoneInt: (element) => {
            const phoneIntRegex = /^[+]?\d+$/;
            return phoneIntRegex.test(element.value) && element.value.length >= 10 && element.value.length <= 10;
        },
        atentionInt: (element) => {
            return element.value && element.value !== "default";
        },
        tipoDocuInt: (element) => {
            return element.value && element.value !== "default";
        },
        documentoInt: (element) => {
            const documentoIntRegex = /^[+]?\d+$/;
            return documentoIntRegex.test(element.value) && element.value.length >= 10 && element.value.length <= 10;
        },
        authorizeInt: (element) => {
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

        checkformInternasValidity();
    }

    function getErrorMessage(element) {
        switch (element.id) {
            case 'emailInt': return 'Por favor introduce un correo electrónico válido';
            case 'nameInt': return 'El nombre es obligatorio, no puede contener números.';
            case 'ciudadInt': return 'La ciudad es obligatoria, no puede contener números.';
            case 'phoneInt': return 'Por favor ingresa un número de teléfono válido';
            case 'atentionInt': return 'Por favor selecciona una opción';
            case 'tipoDocuInt': return 'Por favor seleccione tipo de documento';
            case 'documentoInt': return 'Por favor ingresa un número de documento válido';
            case 'authorizeInt': return 'Es un campo requerido';
            default: return '';
        }
    }

    function checkformInternasValidity() {
        const inputs = formInternas.querySelectorAll('input, select');
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

    formInternas.addEventListener('input', (e) => validateField(e.target)); 
    formInternas.addEventListener('change', (e) => validateField(e.target)); 

    formInternas.addEventListener('submit', (e) => {
        e.preventDefault();
        let allValid = true;

        const inputs = formInternas.querySelectorAll('input, select');
        inputs.forEach(input => {
            validateField(input); 
            if (input.classList.contains('invalid')) {
                allValid = false;
            }
        });

        if (allValid) {
            window.location.href = '../thankyoupageProducto.html'; 
        } else {
            alert('Por favor, corrige los errores');
        }
    });
}

// Validación de datos ley 2300 - Canales

const formCanales = document.getElementById('canalesForm');
if (formCanales) {
    const submitButton = document.getElementById('Mthbottom');

    const validators = {
        email: (element) => {
            return element.validity.valid && element.value.includes('@');
        },
        cedula: (element) => {
            return element.validity.valid && /^[0-9]{10}$/.test(element.value);
        },
        city: (element) => {
            return element.value.trim() !== '' && /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/.test(element.value);
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
        tipodocumento: (element) => {
            return element.value !== '';
        },
        tipoPersona: (element) => {
            return element.value !== '';
        },
        authorize: (element) => {
            return element.checked;
        },
        comerciales: (element) => {
            return formCanales.querySelector('input[name="comerciales"]:checked') !== null;
        },
        cobranza: (element) => {
            return formCanales.querySelector('input[name="cobranza"]:checked') !== null;
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
        if (errorElement) {
            errorElement.style.display = 'none';
            element.classList.remove('invalid');
        }
    }
    

    function validateField(element) {
        const validator = validators[element.id] || validators[element.name];
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
            case 'cedula': return 'Ingrese un número de cedula valido.';
            case 'city': return 'El nombre de la ciudad solo puede contener letras y espacios.';
            case 'phone': return 'Por favor ingresa un número de teléfono válido';
            case 'reason': return 'Por favor selecciona una opción';
            case 'tipodocumento': return 'Por favor selecciona una opción';
            case 'tipoPersona': return 'Por favor selecciona una opción';
            case 'comerciales': return 'Por favor selecciona una opción de contacto comercial';
            case 'cobranza': return 'Por favor selecciona una opción de contacto para cobranza';
            case 'authorize': return 'Es un campo requerido';
            default: return '';
        }
    }

    function checkFormValidity() {
        const inputs = formCanales.querySelectorAll('input, select');
        let allValid = true;

        inputs.forEach(input => {
            const validator = validators[input.id] || validators[input.name];
            if (input.classList.contains('invalid') || !validator(input)) {
                allValid = false;
            }
        });

        submitButton.disabled = !allValid;
        submitButton.classList.toggle('valid', allValid);
    }

    formCanales.addEventListener('input', (e) => validateField(e.target)); 
    formCanales.addEventListener('change', (e) => validateField(e.target)); 

    formCanales.addEventListener('submit', (e) => {
        e.preventDefault();
        let allValid = true;

        const inputs = formCanales.querySelectorAll('input, select');
        inputs.forEach(input => {
            validateField(input); 
            if (input.classList.contains('invalid')) {
                allValid = false;
            }
        });

        if (allValid) {
            window.location.href = '../thankyoupageComunidad.html'; 
        } else {
            alert('Por favor, corrige los errores');
        }
    });
}
