function findSuppliers() {

    const location =
        document.getElementById("location").value.trim();

    const category =
        document.getElementById("supplierCategory").value;

    const result =
        document.getElementById("supplierResult");


    if (location === "") {

        alert("Please enter your location.");

        return;
    }


    if (category === "") {

        alert("Please select a product category.");

        return;
    }


    const searchText =
        category +
        " wholesale suppliers near " +
        location;


    const googleUrl =
        "https://www.google.com/search?q=" +
        encodeURIComponent(searchText);


    const mapsUrl =
        "https://www.google.com/maps/search/" +
        encodeURIComponent(searchText);


    result.innerHTML = `

        <h2>🔎 Supplier Search</h2>

        <p>
            Searching for
            <strong>${category}</strong>
            suppliers near
            <strong>${location}</strong>.
        </p>

        <div class="supplier-buttons">

            <button
                onclick="window.open('${mapsUrl}', '_blank')">

                📍 Search on Google Maps

            </button>


            <button
                onclick="window.open('${googleUrl}', '_blank')">

                🌐 Search on Google

            </button>

        </div>


        <div class="supplier-tip">

            <h3>💡 Before placing a wholesale order</h3>

            <ul>

                <li>Compare prices from multiple suppliers.</li>

                <li>Ask about minimum order quantity (MOQ).</li>

                <li>Check shipping or delivery charges.</li>

                <li>Ask for product photos/videos if needed.</li>

                <li>Confirm return/replacement policy.</li>

                <li>Calculate your final landed cost before buying.</li>

            </ul>

        </div>

    `;

}