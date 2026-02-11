document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('Convert');
    convertBtn.addEventListener('click', convert);

    function convert() {
        const amount = parseFloat(document.getElementById('amount').value);
        const fromCurrency = document.getElementById('fromCurrency').value;
        const toCurrency = document.getElementById('toCurrency').value;
        const resultDiv = document.getElementById('result');

        if (!amount || amount <= 0) {
            resultDiv.innerText = "Please enter a valid amount";
            return;
        }

        const rates = {
            USD: 1,
            EUR: 0.92,
            INR: 83
        };

        const amountInUSD = amount / rates[fromCurrency];
        const convertedAmount = amountInUSD * rates[toCurrency];

        resultDiv.innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    }
});
