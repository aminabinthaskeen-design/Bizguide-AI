let transactions =
    JSON.parse(localStorage.getItem("transactions")) || [];


function addTransaction() {

    const sale =
        Number(document.getElementById("saleAmount").value);

    const expense =
        Number(document.getElementById("expenseAmount").value);


    if (sale <= 0 && expense <= 0) {

        alert("Please enter a sale or expense amount.");

        return;
    }


    const transaction = {

        sale: sale,

        expense: expense,

        date: new Date().toLocaleDateString()

    };


    transactions.push(transaction);


    localStorage.setItem(
        "transactions",
        JSON.stringify(transactions)
    );


    document.getElementById("saleAmount").value = "";

    document.getElementById("expenseAmount").value = "";


    updateTracker();
}


function updateTracker() {

    let totalSales = 0;

    let totalExpenses = 0;


    transactions.forEach(function(transaction) {

        totalSales += transaction.sale;

        totalExpenses += transaction.expense;

    });


    const netProfit =
        totalSales - totalExpenses;


    document.getElementById("totalSales").innerText =
        totalSales.toFixed(2);

    document.getElementById("totalExpenses").innerText =
        totalExpenses.toFixed(2);

    document.getElementById("netProfit").innerText =
        netProfit.toFixed(2);


    const list =
        document.getElementById("transactionList");


    if (transactions.length === 0) {

        list.innerHTML =
            "<p>No transactions added yet.</p>";

        return;
    }


    list.innerHTML = "";


    transactions.forEach(function(transaction, index) {

        list.innerHTML += `

            <div class="transaction">

                <p>
                    📅 ${transaction.date}
                </p>

                <p>
                    Sales:
                    <strong>₹${transaction.sale}</strong>
                </p>

                <p>
                    Expense:
                    <strong>₹${transaction.expense}</strong>
                </p>

            </div>

        `;

    });
}


function clearTracker() {

    const confirmClear =
        confirm("Are you sure you want to clear all data?");


    if (!confirmClear) {
        return;
    }


    transactions = [];


    localStorage.removeItem("transactions");


    updateTracker();
}


updateTracker();