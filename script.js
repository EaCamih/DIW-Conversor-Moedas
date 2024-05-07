const exchanges = {
    "BRL": { "USD": 0.18, "EUR": 0.15, "GBP": 0.13, "ARS": 17.46 },
    "USD": { "BRL": 5.58, "EUR": 0.83, "GBP": 0.72, "ARS": 96.71 },
    "EUR": { "BRL": 6.63, "USD": 1.20, "GBP": 0.86, "ARS": 115.26 },
    "GBP": { "BRL": 7.56, "USD": 1.38, "EUR": 1.16, "ARS": 133.26 },
    "ARS": { "BRL": 0.057, "USD": 0.010, "EUR": 0.009, "GBP": 0.007 }
}

function convertCurrency(){
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    if(isNaN(amount) || amount <= 0) return alert('Insira um valor válido!');
    if(fromCurrency === toCurrency) return alert('Selecione moedas diferentes para a conversão!');
    if(!exchanges[fromCurrency] || !exchanges[fromCurrency][toCurrency]) return alert('Taxa de câmbio não encontrada!');

    const exchangeRate = exchanges[fromCurrency][toCurrency];
    const convertedAmount = amount * exchangeRate;

    document.getElementById('result').innerText = `${amount.toFixed(2)} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}