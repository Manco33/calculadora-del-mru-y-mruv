function getInputs(formula) {
    switch (formula) {
        case '1':
            return [
                { label: 'Distancia (m)', id: 'distancia' },
                { label: 'Tiempo (s)', id: 'tiempo' }
            ];
        case '2':
            return [
                { label: 'Velocidad (m/s)', id: 'velocidad' },
                { label: 'Tiempo (s)', id: 'tiempo' }
            ];
        case '3':
            return [
                { label: 'Distancia (m)', id: 'distancia' },
                { label: 'Velocidad (m/s)', id: 'velocidad' }
            ];
        case '4':
            return [
                { label: 'Velocidad (m/s)', id: 'velocidad' },
                { label: 'Tiempo (s)', id: 'tiempo' }
            ];
        case '5':
            return [
                { label: 'Velocidad final (m/s)', id: 'vf' },
                { label: 'Velocidad inicial (m/s)', id: 'vi' },
                { label: 'Tiempo (s)', id: 'tiempo' }
            ];
        case '6':
            return [
                { label: 'Velocidad inicial (m/s)', id: 'vi' },
                { label: 'Aceleración (m/s²)', id: 'aceleracion' },
                { label: 'Tiempo (s)', id: 'tiempo' }
            ];
        case '7':
            return [
                { label: 'Velocidad final (m/s)', id: 'vf' },
                { label: 'Aceleración (m/s²)', id: 'aceleracion' },
                { label: 'Tiempo (s)', id: 'tiempo' }
            ];
        case '8':
            return [
                { label: 'Velocidad inicial (m/s)', id: 'vi' },
                { label: 'Tiempo (s)', id: 'tiempo' },
                { label: 'Gravedad (m/s²)', id: 'gravedad' }
            ];
        case '9':
            return [
                { label: 'Velocidad inicial (m/s)', id: 'vi' },
                { label: 'Distancia (m)', id: 'distancia' },
                { label: 'Gravedad (m/s²)', id: 'gravedad' }
            ];
        case '10':
            return [
                { label: 'Velocidad inicial (m/s)', id: 'vi' },
                { label: 'Tiempo (s)', id: 'tiempo' },
                { label: 'Gravedad (m/s²)', id: 'gravedad' }
            ];
        case '11':
            return [
                { label: 'Velocidad inicial (m/s)', id: 'vi' },
                { label: 'Velocidad final (m/s)', id: 'vf' },
                { label: 'Tiempo (s)', id: 'tiempo' }
            ];
        default:
            return [];
    }
}

function displayInputs() {
    const formula = document.getElementById('formula').value;
    const inputs = getInputs(formula);
    const inputsDiv = document.getElementById('inputs');
    inputsDiv.innerHTML = '';
    inputs.forEach(input => {
        const label = document.createElement('label');
        label.innerText = input.label;
        const inputField = document.createElement('input');
        inputField.type = 'number';
        inputField.id = input.id;
        inputsDiv.appendChild(label);
        inputsDiv.appendChild(inputField);
    });
}

document.getElementById('formula').addEventListener('change', displayInputs);

function getResultUnit(formula) {
    switch (formula) {
        case '1':
        case '6':
        case '7':
        case '8':
        case '9':
            return 'm/s';
        case '2':
        case '10':
        case '11':
            return 'm';
        case '3':
            return 's';
        case '4':
        case '5':
            return 'm/s²';
        default:
            return '';
    }
}

function calculate() {
    const formula = document.getElementById('formula').value;
    let result = 0;
    try {
        switch (formula) {
            case '1':
                const distancia1 = parseFloat(document.getElementById('distancia').value);
                const tiempo1 = parseFloat(document.getElementById('tiempo').value);
                result = distancia1 / tiempo1;
                break;
            case '2':
                const velocidad2 = parseFloat(document.getElementById('velocidad').value);
                const tiempo2 = parseFloat(document.getElementById('tiempo').value);
                result = velocidad2 * tiempo2;
                break;
            case '3':
                const distancia3 = parseFloat(document.getElementById('distancia').value);
                const velocidad3 = parseFloat(document.getElementById('velocidad').value);
                result = distancia3 / velocidad3;
                break;
            case '4':
                const velocidad4 = parseFloat(document.getElementById('velocidad').value);
                const tiempo4 = parseFloat(document.getElementById('tiempo').value);
                result = velocidad4 / tiempo4;
                break;
            case '5':
                const vf5 = parseFloat(document.getElementById('vf').value);
                const vi5 = parseFloat(document.getElementById('vi').value);
                const tiempo5 = parseFloat(document.getElementById('tiempo').value);
                result = (vf5 - vi5) / tiempo5;
                break;
            case '6':
                const vi6 = parseFloat(document.getElementById('vi').value);
                const aceleracion6 = parseFloat(document.getElementById('aceleracion').value);
                const tiempo6 = parseFloat(document.getElementById('tiempo').value);
                result = vi6 + aceleracion6 * tiempo6;
                break;
            case '7':
                const vf7 = parseFloat(document.getElementById('vf').value);
                const aceleracion7 = parseFloat(document.getElementById('aceleracion').value);
                const tiempo7 = parseFloat(document.getElementById('tiempo').value);
                result = vf7 - aceleracion7 * tiempo7;
                break;
            case '8':
                const vi8 = parseFloat(document.getElementById('vi').value);
                const tiempo8 = parseFloat(document.getElementById('tiempo').value);
                const gravedad8 = parseFloat(document.getElementById('gravedad').value);
                result = vi8 - gravedad8 * tiempo8;
                break;
            case '9':
                const vi9 = parseFloat(document.getElementById('vi').value);
                const distancia9 = parseFloat(document.getElementById('distancia').value);
                const gravedad9 = parseFloat(document.getElementById('gravedad').value);
                result = Math.sqrt(vi9 ** 2 - 2 * gravedad9 * distancia9);
                break;
            case '10':
                const vi10 = parseFloat(document.getElementById('vi').value);
                const tiempo10 = parseFloat(document.getElementById('tiempo').value);
                const gravedad10 = parseFloat(document.getElementById('gravedad').value);
                result = vi10 * tiempo10 + 0.5 * gravedad10 * tiempo10 ** 2;
                break;
            case '11':
                const vi11 = parseFloat(document.getElementById('vi').value);
                const vf11 = parseFloat(document.getElementById('vf').value);
                const tiempo11 = parseFloat(document.getElementById('tiempo').value);
                result = ((vf11 + vi11) / 2) * tiempo11;
                break;
            default:
                break;
        }
        const unit = getResultUnit(formula);
        document.getElementById('result').innerText = `Resultado: ${result.toFixed(2)} ${unit}`;
    } catch (e) {
        document.getElementById('result').innerText = 'Ha introducido valores incorrectos';
    }
}
