
document.getElementById('apply-coupon').disabled = true;
document.getElementById('purchases-btn').disabled = true;

// function
// function handleCardClick(cardId){
    
// }

document.getElementById('first-card').addEventListener('click', function () {

    document.getElementById('purchases-btn').disabled = false;

    // step 1: get card title from card
    const cardTitle = document.getElementById('card-title');
    const title = cardTitle.innerText;

    // step 2: update card title
    const newLi = document.getElementById('product-array');
    const li = document.createElement('li');
    li.innerText = title;
    newLi.appendChild(li);

    // step 3: get product price from card
    const productPrice = document.getElementById('price');
    const priceValueString = productPrice.innerText;
    const priceValue = parseFloat(priceValueString);

    // step 4: update product price
    const total = document.getElementById('totalPrice');
    const newTotalString = total.innerText;
    const newTotal = parseFloat(newTotalString);

    // step 5: update new total price
    const newTotalAmount = priceValue + newTotal;
    total.innerText = newTotalAmount;

    const couponValue = document.getElementById('press-coupon').value;

    if (newTotalAmount >= 200 && couponValue == 'SELL200') {
        document.getElementById('apply-coupon').disabled = false;

        document.getElementById('apply-coupon').addEventListener('click', function () {
            const availableAmount = total.innerText;
            const newAvailableAmount = parseFloat(availableAmount);

            // calculate discount
            const discount = (20 / 100) * newAvailableAmount;

            // calculate final amount
            const totalDiscount = newAvailableAmount - discount;
            const newDiscount = parseFloat(totalDiscount);

            // update discount
            const presentDiscount = document.getElementById('discount');
            presentDiscount.innerText = discount;

            // update final amount
            const finalAmount = document.getElementById('finalPrice');
            finalAmount.innerText = newDiscount;
        })
    }
    else {
        // calculate final amount
        const finalAmount = document.getElementById('finalPrice');
        finalAmount.innerText = newTotalAmount;
    }

    // remove element
    document.getElementById('go-home').addEventListener('click', function () {

        // card title
        const removeTitle = document.getElementById('product-array');
        removeTitle.innerHTML = '';

        // total price
        const removeTotalPrice = document.getElementById('totalPrice');
        removeTotalPrice.innerText = '00'

        // discount
        const removeDiscount = document.getElementById('discount');
        removeDiscount.innerText = '00'

        // total
        const removeTotal = document.getElementById('finalPrice');
        removeTotal.innerText = '00'
    })

})


