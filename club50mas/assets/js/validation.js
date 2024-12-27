// Validación de datos formulario

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const form = document.getElementById('registrationForm');
        if (form) {
            const submitButton = document.getElementById('Mthbottom');

            const validators = {
                email: (element) => {
                    return element.validity.valid;
                },
                name: (element) => {
                    return element.value.trim() !== '';
                },
                password: (element) => {
                    return element.value.length >= 6;
                },
                confirmPassword: (element) => {
                    return element.value === document.getElementById('password').value;
                },
                phone: (element) => {
                    const phoneRegex = /^[+]?\d+$/;
                    return phoneRegex.test(element.value) && element.value.length >= 10;
                },
                gender: (element) => {
                    return element.value !== '';
                },
                authorize: (element) => {
                    return element.checked;
                },
                policy: (element) => {
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
                    case 'name': return 'El nombre es obligatorio';
                    case 'password': return 'La contraseña debe tener al menos 6 caracteres';
                    case 'confirmPassword': return 'Las contraseñas deben coincidir';
                    case 'phone': return 'Por favor ingresa un número de teléfono válido';
                    case 'gender': return 'Por favor selecciona tu género';
                    case 'authorize': return 'Es un campo requerido';
                    case 'policy': return 'Es un campo requerido';
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
                    alert('Formulario enviado correctamente');
                } else {
                    alert('Por favor, corrige los errores');
                }
            });
        }
    }, 1000); // 
});
 
const enlace = document.getElementById('mienlace');

// Verificamos si el enlace ya fue clickeado al cargar la página
if (!sessionStorage.getItem('clicEnlace')) {
  // Si no ha sido clickeado, ejecutamos el bloque de código automáticamente
  if (window.location.pathname === "/" && !hasExecuted) {
    Flickerlessly.onReady({
      selector: "#mth-pop-up",
      success: function (el, log) {
        log("Detected element", el);
        window.mthSpaces();
      },
    });

    hasExecuted = true; // Marcar que ya se ejecutó
  }

  // Luego marcamos que ya fue clickeado en sessionStorage
  sessionStorage.setItem('clicEnlace', 'true');
}

// Añadimos un evento de clic al enlace
enlace.addEventListener('click', function(event) {
  // Prevenimos que se realice la acción predeterminada del enlace
  event.preventDefault();
});

// Definimos la variable hasExecuted
let hasExecuted = false; 


