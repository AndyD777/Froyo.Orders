function processOrder() {
   
    const inputText = document.getElementById('flavorsInput').value;
    const flavorsArray = inputText.split(',').map(flavor => flavor.trim());

    
    const flavorCount = {};
    flavorsArray.forEach(flavor => {
        flavorCount[flavor] = (flavorCount[flavor] || 0) + 1;
    });

    const orderTableBody = document.getElementById('orderBody');
    orderTableBody.innerHTML = ''; // Clear previous entries

    for (const flavor in flavorCount) {
        const quantity = flavorCount[flavor];

        
        const row = orderTableBody.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);

        
        cell1.textContent = flavor;
        cell2.textContent = quantity;
    }

    console.log('Order Summary:', flavorCount);
}    
    
    



