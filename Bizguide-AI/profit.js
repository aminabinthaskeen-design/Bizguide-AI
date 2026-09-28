function calculateProfit() {

    const productCost =
        Number(document.getElementById("productCost").value);

    const packagingCost =
        Number(document.getElementById("packagingCost").value);

    const otherCost =
        Number(document.getElementById("otherCost").value);

    const sellingPrice =
        Number(document.getElementById("sellingPrice").value);

    const quantity =
        Number(document.getElementById("quantity").value);


    if (
        productCost <= 0 ||
        sellingPrice <= 0 ||
        quantity <= 0
    ) {

        alert("Please enter valid values.");

        return;
    }


    const costPerProduct =
        productCost + packagingCost + otherCost;


    const totalCost =
        costPerProduct * quantity;


    const totalRevenue =
        sellingPrice * quantity;


    const totalProfit =
        totalRevenue - totalCost;


    const profitPerProduct =
        sellingPrice - costPerProduct;


    const profitPercentage =
        (profitPerProduct / costPerProduct) * 100;


    document.getElementById("profitResult").innerHTML = `

        <h2>📊 Result</h2>

        <p>
            Cost per Product:
            <strong>₹${costPerProduct.toFixed(2)}</strong>
        </p>

        <p>
            Total Investment:
            <strong>₹${totalCost.toFixed(2)}</strong>
        </p>

        <p>
            Total Revenue:
            <strong>₹${totalRevenue.toFixed(2)}</strong>
        </p>

        <p>
            Profit per Product:
            <strong>₹${profitPerProduct.toFixed(2)}</strong>
        </p>

        <p>
            Total Profit:
            <strong>₹${totalProfit.toFixed(2)}</strong>
        </p>

        <p>
            Profit Margin:
            <strong>${profitPercentage.toFixed(2)}%</strong>
        </p>

    `;
}