function generateMarketingIdeas() {

    const business =
        document.getElementById("businessType").value;

    const platform =
        document.getElementById("platform").value;

    const budget =
        document.getElementById("budget").value;


    if (!business || !platform || !budget) {

        alert("Please select all options.");

        return;
    }


    let ideas = [];


    // Business specific ideas

    if (business === "accessories") {

        ideas.push(
            "Create short Reels showing new accessories.",
            "Post product close-up photos with prices.",
            "Create combo offers for bracelets and hair accessories."
        );

    }


    else if (business === "gifts") {

        ideas.push(
            "Create gift ideas for birthdays and special occasions.",
            "Post hamper packing videos.",
            "Create budget gift combo offers."
        );

    }


    else if (business === "clothing") {

        ideas.push(
            "Create outfit styling Reels.",
            "Post new arrivals regularly.",
            "Create limited-time collection offers."
        );

    }


    else if (business === "food") {

        ideas.push(
            "Post food preparation videos.",
            "Share customer reviews.",
            "Create combo meals and limited-time offers."
        );

    }


    else if (business === "stationery") {

        ideas.push(
            "Create aesthetic stationery Reels.",
            "Show product collections.",
            "Create student-friendly combo offers."
        );

    }


    else if (business === "beauty") {

        ideas.push(
            "Create product demonstration videos.",
            "Share simple usage tips.",
            "Post customer feedback and reviews."
        );

    }


    else {

        ideas.push(
            "Create educational content about your products.",
            "Post customer reviews.",
            "Create attractive product offers."
        );

    }


    // Platform ideas

    if (platform === "instagram") {

        ideas.push(
            "Post 3-4 Reels every week.",
            "Use Stories for polls and questions.",
            "Add clear Call-To-Action such as 'DM to Order'."
        );

    }


    else if (platform === "whatsapp") {

        ideas.push(
            "Create a WhatsApp Business catalogue.",
            "Share new products through Status.",
            "Send offers to interested customers."
        );

    }


    else {

        ideas.push(
            "Post Reels on Instagram and share them on WhatsApp.",
            "Use WhatsApp Status to promote Instagram posts.",
            "Add your WhatsApp ordering link to Instagram."
        );

    }


    // Budget ideas

    if (budget === "free") {

        ideas.push(
            "Use organic Reels and customer-generated content.",
            "Ask happy customers to share reviews.",
            "Run simple referral campaigns."
        );

    }


    else if (budget === "low") {

        ideas.push(
            "Try a small giveaway campaign.",
            "Create a low-budget promotional offer.",
            "Boost one of your best-performing posts."
        );

    }


    else if (budget === "medium") {

        ideas.push(
            "Run targeted social media advertisements.",
            "Collaborate with a small creator.",
            "Create a limited-time promotional campaign."
        );

    }


    else {

        ideas.push(
            "Run a complete social media ad campaign.",
            "Work with multiple relevant creators.",
            "Create a monthly promotional campaign."
        );

    }


    displayIdeas(ideas);
}


function displayIdeas(ideas) {

    const result =
        document.getElementById("marketingResult");


    let html = "<h2>💡 Marketing Ideas</h2>";


    ideas.forEach(function(idea, index) {

        html += `
            <p>
                <strong>${index + 1}.</strong>
                ${idea}
            </p>
        `;

    });


    result.innerHTML = html;
}