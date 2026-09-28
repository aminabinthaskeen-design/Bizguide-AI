function showWholesale() {

    const category =
        document.getElementById("category").value;

    const result =
        document.getElementById("wholesaleResult");


    if (category === "") {

        alert("Please select a category.");

        return;
    }


    let content = "";


    if (category === "hair") {

        content = `

            <h2>🎀 Hair Accessories</h2>

            <p>
                <strong>Products:</strong>
                Clips, scrunchies, bows, hair bands,
                claw clips and alligator clips.
            </p>

            <p>
                <strong>Reference buying range:</strong>
                ₹3 – ₹40 per piece depending on
                design and quantity.
            </p>

            <p>
                <strong>MOQ:</strong>
                Ask the supplier before ordering.
            </p>

            <h3>Where to Source</h3>

            <ul>
                <li>Local wholesale markets</li>
                <li>B2B marketplaces</li>
                <li>Direct distributors</li>
                <li>Manufacturers</li>
            </ul>

            <h3>Before Buying</h3>

            <ul>
                <li>Compare at least 3 suppliers</li>
                <li>Check product quality</li>
                <li>Ask for MOQ</li>
                <li>Calculate shipping cost</li>
                <li>Ask about damaged products</li>
            </ul>

            <button
                onclick="searchSupplier('hair accessories wholesale')">
                🔎 Search Suppliers
            </button>

        `;

    }


    else if (category === "bracelet") {

        content = `

            <h2>📿 Bracelets</h2>

            <p>
                <strong>Products:</strong>
                Beaded bracelets, charm bracelets,
                friendship bracelets and custom bracelets.
            </p>

            <p>
                <strong>Reference buying range:</strong>
                ₹10 – ₹80+ depending on material,
                design and quantity.
            </p>

            <p>
                <strong>MOQ:</strong>
                Depends on supplier and customization.
            </p>

            <h3>Where to Source</h3>

            <ul>
                <li>Bracelet wholesalers</li>
                <li>B2B marketplaces</li>
                <li>Bead suppliers</li>
                <li>Direct manufacturers</li>
            </ul>

            <h3>Tip</h3>

            <p>
                For customized bracelets, compare the
                cost of beads, charms, elastic/string,
                packaging and labour before fixing
                your selling price.
            </p>

            <button
                onclick="searchSupplier('bracelets wholesale')">
                🔎 Search Suppliers
            </button>

        `;

    }


    else if (category === "gift") {

        content = `

            <h2>🎁 Gift Items</h2>

            <p>
                <strong>Products:</strong>
                Gift boxes, keychains, mini toys,
                photo frames and decoration items.
            </p>

            <p>
                <strong>Reference buying range:</strong>
                ₹10 – ₹200+ depending on product.
            </p>

            <h3>Where to Source</h3>

            <ul>
                <li>Gift wholesalers</li>
                <li>B2B marketplaces</li>
                <li>Local wholesale markets</li>
                <li>Manufacturers</li>
            </ul>

            <h3>Check Before Ordering</h3>

            <ul>
                <li>Product quality</li>
                <li>Packaging</li>
                <li>MOQ</li>
                <li>Shipping charges</li>
                <li>Replacement policy</li>
            </ul>

            <button
                onclick="searchSupplier('gift items wholesale')">
                🔎 Search Suppliers
            </button>

        `;

    }


    else if (category === "stationery") {

        content = `

            <h2>📚 Stationery</h2>

            <p>
                <strong>Products:</strong>
                Pens, notebooks, stickers,
                bookmarks and cute stationery.
            </p>

            <p>
                <strong>Reference buying range:</strong>
                ₹2 – ₹100+ depending on product.
            </p>

            <h3>Where to Source</h3>

            <ul>
                <li>Stationery wholesalers</li>
                <li>Distributors</li>
                <li>B2B marketplaces</li>
                <li>Local wholesale markets</li>
            </ul>

            <button
                onclick="searchSupplier('stationery wholesale')">
                🔎 Search Suppliers
            </button>

        `;

    }


    else if (category === "beauty") {

        content = `

            <h2>💄 Beauty Accessories</h2>

            <p>
                <strong>Products:</strong>
                Cosmetic pouches, mirrors,
                makeup accessories and beauty tools.
            </p>

            <p>
                <strong>Reference buying range:</strong>
                ₹10 – ₹150+ depending on product.
            </p>

            <h3>Important</h3>

            <p>
                For regulated cosmetics or personal-care
                products, verify applicable product,
                labeling and seller requirements before
                purchasing for resale.
            </p>

            <button
                onclick="searchSupplier('beauty accessories wholesale')">
                🔎 Search Suppliers
            </button>

        `;

    }


    else if (category === "toys") {

        content = `

            <h2>🧸 Toys & Mini Gifts</h2>

            <p>
                <strong>Products:</strong>
                Mini toys, small cars, plush items,
                keychains and novelty gifts.
            </p>

            <p>
                <strong>Reference buying range:</strong>
                ₹5 – ₹200+ depending on product.
            </p>

            <h3>Where to Source</h3>

            <ul>
                <li>Toy wholesalers</li>
                <li>Distributors</li>
                <li>B2B marketplaces</li>
                <li>Local wholesale markets</li>
            </ul>

            <button
                onclick="searchSupplier('toys wholesale')">
                🔎 Search Suppliers
            </button>

        `;

    }


    result.innerHTML = content;

}


function searchSupplier(searchTerm) {

    const url =
        "https://www.google.com/search?q=" +
        encodeURIComponent(searchTerm);

    window.open(url, "_blank");

}