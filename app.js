const empName = document.getElementById("empName");
const hours = document.getElementById("hours");
const rate = document.getElementById("rate");
const tax = document.getElementById("tax");
const otherDed = document.getElementById("otherDed");

const sumEmployees = document.getElementById("sumEmployees"); 
const sumGross = document.getElementById("sumGross");
const sumDed = document.getElementById("sumDed");
const sumNet = document.getElementById("sumNet");

const button = document.querySelector("#submitBtn");
const resetbtn = document.querySelector("#resetBtn");
const clearAllbtn = document.querySelector("#clearAllBtn");

const tbody = document.getElementById("payrollTbody");

function updateRowNumbers() {
    const rows = tbody.querySelectorAll("tr");

    rows.forEach((row, index) => {
        row.querySelector("td").innerText = index + 1;
    });

    sumEmployees.innerText = rows.length;
}


function updateTotals() {
    const rows = tbody.querySelectorAll("tr");

    let totalGross = 0;
    let totalDeductions = 0;
    let totalNet = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");

        const gross = Number(cells[4].innerText.replace("₱", ""));
        const taxValue = Number(cells[5].innerText.replace("₱", ""));
        const other = Number(cells[6].innerText.replace("₱", ""));
        const net = Number(cells[7].innerText.replace("₱", ""));

        totalGross += gross;
        totalDeductions += (taxValue + other);
        totalNet += net;
    });

    sumGross.innerText = "₱" + totalGross.toFixed(2);
    sumDed.innerText = "₱" + totalDeductions.toFixed(2);
    sumNet.innerText = "₱" + totalNet.toFixed(2);
}

button.addEventListener("click", function (e) {
    e.preventDefault();

    const name = empName.value.trim();
    if (!name) return;

    const empHours = Number(hours.value);
    const empRate = Number(rate.value);
    const taxPercent = Number(tax.value);
    const otherDeductions = Number(otherDed.value);

    const gross = empHours * empRate;
    const taxDeduction = gross * (taxPercent / 100);
    const netPay = gross - taxDeduction - otherDeductions;
    let totalEmpDeduction = taxDeduction + otherDeductions;

    const employeeNumber = tbody.children.length + 1;

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${employeeNumber}</td>
        <td>${name}</td>
        <td>${empHours}</td>
        <td>₱${empRate.toFixed(2)}</td>
        <td>₱${gross.toFixed(2)}</td>
        <td>₱${taxDeduction.toFixed(2)}</td>
        <td>₱${otherDeductions.toFixed(2)}</td>
        <td>₱${netPay.toFixed(2)}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;

    tbody.appendChild(row);
    updateRowNumbers();
    updateTotals(); 

    
    row.querySelector(".delete").addEventListener("click", function () {
        row.remove();
        updateRowNumbers();
        updateTotals(); 
    });

   
    row.querySelector(".edit").addEventListener("click", function () {

        const cells = row.querySelectorAll("td");

        empName.value = cells[1].innerText;
        hours.value = cells[2].innerText;
        rate.value = cells[3].innerText.replace("₱", "");

        const grossValue = Number(cells[4].innerText.replace("₱",""));
        const taxValue = Number(cells[5].innerText.replace("₱",""));
        tax.value = ((taxValue / grossValue) * 100).toFixed(0);

        otherDed.value = cells[6].innerText.replace("₱", "");

        row.remove();
        updateRowNumbers();
        updateTotals(); 
    });
});

resetbtn.addEventListener("click", function(e){
   e.preventDefault();

    empName.value = "";
    hours.value = "";
    rate.value = "";
    tax.value = "";
    otherDed.value = "";
});

clearAllbtn.addEventListener("click", function(e){
    e.preventDefault();

    tbody.innerHTML = "";

    sumEmployees.innerHTML = "0";
    sumGross.innerHTML = "₱0.00";
    sumDed.innerHTML = "₱0.00";
    sumNet.innerHTML = "₱0.00";

    updateTotals(); 
});
