document.addEventListener('DOMContentLoaded', () => {
    const tempValue = document.getElementById('tempValue');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const convertBtn = document.getElementById('convertBtn');
    const resultDiv = document.getElementById('result');

    // Enable the convert button only when all fields are filled
    const checkFields = () => {
        convertBtn.disabled = !(tempValue.value && fromUnit.value && toUnit.value);
    };

    tempValue.addEventListener('input', checkFields);
    fromUnit.addEventListener('change', checkFields);
    toUnit.addEventListener('change', checkFields);

    // Temperature conversion function
    const convertTemperature = (value, from, to) => {
        let celsius;

        // Convert from the selected unit to Celsius
        if (from === 'C') {
            celsius = value;
        } else if (from === 'F') {
            celsius = (value - 32) * 5 / 9;
        } else if (from === 'K') {
            celsius = value - 273.15;
        }

        // Convert from Celsius to the selected unit
        if (to === 'C') {
            return celsius;
        } else if (to === 'F') {
            return (celsius * 9 / 5) + 32;
        } else if (to === 'K') {
            return celsius + 273.15;
        }
    };

    // Handle form submission
    document.getElementById('tempForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const value = parseFloat(tempValue.value);
        const from = fromUnit.value;
        const to = toUnit.value;

        const convertedValue = convertTemperature(value, from, to);
        resultDiv.innerHTML = `Converted Temperature: ${convertedValue.toFixed(2)} °${to}`;
    });
});