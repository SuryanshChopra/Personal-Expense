const headingEl = document.querySelector("#heading");
const inputElement = document.querySelector("#inputText");
const inputDescEl = document.querySelector("#inputDesc");
const TableEl = document.querySelector("#expenseTable");

let expense = 0;

headingEl.textContent = expense;

const allExpense = [];

function addExpense() {

    const expenseItem = {};
    const ele = inputElement.value;
    const textDesc = inputDescEl.value;

    //convert string into number
    const exp = parseInt(ele, 10);
 
    expenseItem.desc = textDesc;
    expenseItem.amount = exp;
    expenseItem.moment = new Date();

    allExpense.push(expenseItem);

    expense = expense + exp;
      
    const someText = `Total Expense : ${expense}`
    headingEl.textContent = someText

    renderList(allExpense);

    inputElement.value="";
    inputDescEl.value="";
}

const element = document.querySelector("#btn");


element.addEventListener("click", addExpense, false);

function deleteItem(dateValue) {
    const newArr = [];

    for(let i=0; i<allExpense.length; i++) {
        if (allExpense[i].moment.valueOf() !== dateValue) {
            newArr.push(allExpense[i]);
        }
        
    }
    renderList(newArr);
}

//View layer

function renderList(arrOfList){
    const allExpenseHTML =  arrOfList.map(exp => createListItem(exp));
    const joinAllExpenseHTML = allExpenseHTML.join("");
    TableEl.innerHTML = joinAllExpenseHTML;
}

function createListItem ( { desc, amount, moment }) {
    return `
    <li class="list-group-item d-flex justify-content-between">
                        <div class="d-flex flex-column">
                            ${desc}
                            <small class="text-muted">${moment.toLocaleDateString('en-US', {year: 'numeric', month: 'long', day: 'numeric'})}</small>
                        </div>
                        <div>
                            <span class="px-5">
                                ${amount}
                            </span>
                            <button 
                            type="button" 
                            class="btn btn-outline-danger btn-sm"
                            onClick="deleteItem(${moment.valueOf()})"
                            >
                            <i class="far fa-trash-alt"></i>    
                            
                            </button>
                        </div>
                    </li>
    `;
}










