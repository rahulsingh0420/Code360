
function removeExpense(id) {
    const thisAmount = parseInt(JSON.parse(localStorage.getItem('expenses')).find(item=> item.id == id).amount)
    expenses = JSON.parse(localStorage.getItem('expenses')).filter(item=> item.id != id)
    localStorage.setItem('expenses',JSON.stringify(expenses))
    totalAmount -= thisAmount
    setTotalAmount();
}

if(!localStorage.getItem('totalAmount')){
    localStorage.setItem('totalAmount', 0)
}

let totalAmount = parseInt(localStorage.getItem('totalAmount'));

let expenses =  localStorage.getItem('expenses')
if (!localStorage.getItem('expenses')) {
    expenses = []
}else{
    expenses = JSON.parse(localStorage.getItem('expenses'));
}

function addExpense() {
    let expenseName = document.getElementById('expenseName').value;
    let amount = document.getElementById('amount').value;
    let date = document.getElementById('date').value;
    expenses.push({amount: amount, date: date, id: new Date().getTime(), name: expenseName})
    totalAmount += parseInt(amount);
    localStorage.setItem('expenses',JSON.stringify(expenses));
    setTotalAmount();
}

function setTotalAmount() {
    localStorage.setItem('totalAmount', totalAmount);
    document.getElementById('totalAmount').innerText = totalAmount;
    displayExpenses();
}

function displayExpenses() {
    if (localStorage.getItem('expenses')) {
        let expensesArr = JSON.parse(localStorage.getItem('expenses'));
        document.getElementById('expenseList').innerHTML = '';
        expensesArr.map(item=>{
            document.getElementById('expenseList').innerHTML += `
            <li id="${item.id}${item.name}">
                <span class="expense-name">${item.name}</span> - $<span class="expense-amount">${item.amount}</span> on <span class="expense-date">${item.date}</span>
                <button onclick="removeExpense(${item.id})">Remove</button>
            </li>
            `;
        })
    }
}

setTotalAmount();    
