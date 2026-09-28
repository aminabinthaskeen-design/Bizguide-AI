function sendMessage() {

    const input =
        document.getElementById("userInput");

    const message =
        input.value.trim();

    if (message === "") {
        return;
    }


    addUserMessage(message);

    input.value = "";


    setTimeout(function () {

        const reply =
            getBusinessReply(message);

        addBotMessage(reply);

    }, 500);

}


function addUserMessage(message) {

    const chatBox =
        document.getElementById("chatBox");

    const div =
        document.createElement("div");

    div.className = "user-message";

    div.innerText = message;

    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


function addBotMessage(message) {

    const chatBox =
        document.getElementById("chatBox");

    const div =
        document.createElement("div");

    div.className = "bot-message";

    div.innerText = message;

    chatBox.appendChild(div);

    chatBox.scrollTop =
        chatBox.scrollHeight;
}


function handleEnter(event) {

    if (event.key === "Enter") {

        sendMessage();

    }

}


function getBusinessReply(question) {

    const q =
        question.toLowerCase();


    if (
        q.includes("5000") ||
        q.includes("budget") ||
        q.includes("business idea")
    ) {

        return `
For a small budget, you can consider:

1. Handmade accessories
2. Gift hampers
3. Customized bracelets
4. Hair accessories
5. Digital products

Start with a small quantity, test which products sell,
and reinvest your profit instead of buying large stock initially.
        `;

    }


    if (
        q.includes("profit") ||
        q.includes("selling price") ||
        q.includes("price")
    ) {

        return `
To calculate your selling price:

Product Cost + Packaging Cost + Other Expenses
= Total Cost

Then add your desired profit margin.

Example:

Product cost = ₹40
Packaging = ₹5
Total cost = ₹45

If you want ₹20 profit:

Selling Price = ₹65
Profit = ₹20
        `;

    }


    if (
        q.includes("wholesale") ||
        q.includes("supplier")
    ) {

        return `
You can source products through:

• Local wholesale markets
• Manufacturer/distributor networks
• B2B marketplaces
• Direct suppliers
• Trade fairs

Before buying, compare price, minimum order quantity,
quality, shipping cost and supplier reviews.
        `;

    }


    if (
        q.includes("instagram") ||
        q.includes("marketing") ||
        q.includes("promote")
    ) {

        return `
For Instagram marketing:

• Post product photos regularly
• Create short reels
• Show product packing videos
• Share customer reviews
• Use WhatsApp status
• Create limited-time offers
• Show behind-the-scenes content

Focus on consistent content rather than only posting
when you have a sale.
        `;

    }


    if (
        q.includes("start") ||
        q.includes("beginner")
    ) {

        return `
Start with these steps:

1. Choose a product category
2. Research your target customers
3. Find reliable suppliers
4. Calculate your total cost
5. Decide your selling price
6. Start with limited stock
7. Promote your products
8. Track every sale and expense

Start small, learn from your customers,
and gradually expand.
        `;

    }


    return `
That's a good business question! 🤝

For a useful recommendation, tell me:

• Your budget
• What product/category you are interested in
• Your location
• Online or offline business
• Your target customers

Then I can help you create a simple business plan.
    `;

}