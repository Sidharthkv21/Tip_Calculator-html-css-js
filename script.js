document.getElementById('tip-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const billAmount = parseFloat(document.getElementById('bill-amount').value);
    const tipPercentage = parseFloat(document.getElementById('tip-percentage').value);
    
    if (isNaN(billAmount) || isNaN(tipPercentage)) {
        alert('Please enter valid numbers');
        return;
    }
    
    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;
    
    document.getElementById('total-amount').textContent = `$${totalAmount.toFixed(2)}`;
});
