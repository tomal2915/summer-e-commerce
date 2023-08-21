document.getElementById('apply-coupon').disabled = true;
document.getElementById('purchases-btn').disabled = true;

function handleCardClick(cardTitleId, newLiId, productPriceId, couponId, totalPriceId, discountId, finalPriceId, couponButtonId, purchasesButtonId) {

    document.getElementById(purchasesButtonId).disabled = false;

    // step 1: get card title from card
    const cardTitle = document.getElementById(cardTitleId);
    const title = cardTitle.innerText;

    // step 2: update card title
    const newLi = document.getElementById(newLiId);
    const li = document.createElement('li');
    li.innerText = title;
    newLi.appendChild(li);

    // step 3: get product price from card
    const productPrice = document.getElementById(productPriceId);
    const priceValueString = productPrice.innerText;
    const priceValue = parseFloat(priceValueString);

    // step 4: update product price
    const total = document.getElementById(totalPriceId);
    const newTotalString = total.innerText;
    const newTotal = parseFloat(newTotalString);

    // step 5: update new total price
    const newTotalAmount = priceValue + newTotal;
    total.innerText = newTotalAmount;

    const couponValue = document.getElementById(couponId).value;

    if (newTotalAmount >= 200 && couponValue === 'SELL200') {
        document.getElementById(couponButtonId).disabled = false;

        document.getElementById(couponButtonId).addEventListener('click', function () {
            const availableAmount = total.innerText;
            const newAvailableAmount = parseFloat(availableAmount);

            // calculate discount
            const discount = (20 / 100) * newAvailableAmount;

            // calculate final amount
            const totalDiscount = newAvailableAmount - discount;
            const newDiscount = parseFloat(totalDiscount);

            // update discount
            const presentDiscount = document.getElementById(discountId);
            presentDiscount.innerText = discount;

            // update final amount
            const finalAmount = document.getElementById(finalPriceId);
            finalAmount.innerText = newDiscount;
        })
    }
    else {
        // calculate final amount
        const finalAmount = document.getElementById(finalPriceId);
        finalAmount.innerText = newTotalAmount;
    }

    // remove element
    document.getElementById('go-home').addEventListener('click', function () {

        // card title
        const removeTitle = document.getElementById(newLiId);
        removeTitle.innerHTML = '';

        // total price
        const removeTotalPrice = document.getElementById(totalPriceId);
        removeTotalPrice.innerText = '00'

        // discount
        const removeDiscount = document.getElementById(discountId);
        removeDiscount.innerText = '00'

        // total
        const removeTotal = document.getElementById(finalPriceId);
        removeTotal.innerText = '00'

        // disable button
        document.getElementById(couponButtonId).disabled = true;
        document.getElementById(purchasesButtonId).disabled = true;
    })
}

document.getElementById('first-card').addEventListener('click', function () {
    handleCardClick('card-title1', 'product-array', 'price1', 'press-coupon', 'totalPrice', 'discount', 'finalPrice', 'apply-coupon', 'purchases-btn');
});

document.getElementById('second-card').addEventListener('click', function () {
    handleCardClick('card-title2', 'product-array', 'price2', 'press-coupon', 'totalPrice', 'discount', 'finalPrice', 'apply-coupon', 'purchases-btn');
});

document.getElementById('third-card').addEventListener('click', function () {
    handleCardClick('card-title3', 'product-array', 'price3', 'press-coupon', 'totalPrice', 'discount', 'finalPrice', 'apply-coupon', 'purchases-btn');
});

document.getElementById('fourth-card').addEventListener('click', function () {
    handleCardClick('card-title4', 'product-array', 'price4', 'press-coupon', 'totalPrice', 'discount', 'finalPrice', 'apply-coupon', 'purchases-btn');
});

document.getElementById('fifth-card').addEventListener('click', function () {
    handleCardClick('card-title5', 'product-array', 'price5', 'press-coupon', 'totalPrice', 'discount', 'finalPrice', 'apply-coupon', 'purchases-btn');
});

document.getElementById('sixth-card').addEventListener('click', function () {
    handleCardClick('card-title6', 'product-array', 'price6', 'press-coupon', 'totalPrice', 'discount', 'finalPrice', 'apply-coupon', 'purchases-btn');
});
