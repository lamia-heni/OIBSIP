document.getElementById('convertBtn').addEventListener('click', function() {
    const temp = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (isNaN(temp)) {
        alert("Please enter a valid number");
        return;
    }

    if (unit === "fahrenheit") {
        result = (temp - 32) * 5 / 9;
        result = `${result.toFixed(2)} °C`;
    } else if (unit === "celsius") {
        result = (temp * 9 / 5) + 32;
        result = `${result.toFixed(2)} °F`;
    }

    document.getElementById('result').textContent = result;
});
