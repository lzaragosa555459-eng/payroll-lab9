const empName = document.getElementById("empName");
const hours = document.getElementById("hours");
const rate = document.getElementById("rate");
const tax = document.getElementById("tax");
const otherDed = document.getElementById("otherDed");

const numberOutput = document.getElementById("numberOutput");
const nameOutput = document.getElementById("nameOutput");
const hoursOutput = document.getElementById("hoursOutput"); 
const rateOutput = document.getElementById("rateOutput"); 
const grossOutput = document.getElementById("grossOutput")
const taxOutput = document.getElementById("taxOutput"); 
const otherOutput = document.getElementById("otherOutput"); 
const actionOutput = document.getElementById("actionOutput"); 
const netOutput = document.getElementById("netOutput"); 
const sumEmployees = document.getElementById("sumEmployees"); 
const sumGross = document.getElementById("sumGross");
const sumDed = document.getElementById("sumDed");
const sumNet = document.getElementById("sumNet");

const button = document.querySelector("#submitBtn");
const resetbtn = document.querySelector("#resetBtn");
const clearAllbtn = document.querySelector("#clearAllBtn")

let sum = 1;
let totalGross = 0;
let totalDeductions = 0;
let totalNet = 0;

const tbody = document.getElementById("payrollTbody");

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

    const row = document.createElement("tr");


    sumEmployees.innerHTML = "<p>" + sum + "</p>";
    
    row.innerHTML = `
        <td>${sum}</td>
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
    sum++;
   
    totalGross += gross;
    sumGross.innerHTML = "<p>₱" + totalGross.toFixed(2)  + "</p>";
    totalDeductions += totalEmpDeduction;
    sumDed.innerHTML = "<p>₱" + totalDeductions.toFixed(2)  + "</p>";
    totalNet+=netPay;
    sumNet.innerHTML = "<p>₱" + totalNet.toFixed(2)  + "</p>";


    
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

    payrollTbody.innerHTML = "";

    sumEmployees.innerHTML = "0";
    sumGross.innerHTML = "₱0.00";
    sumDed.innerHTML = "₱0.00";
    sumNet.innerHTML = "₱0.00";


    sum = 1;
    totalGross = 0;
    totalDeductions = 0;
    totalNet = 0;

   
    
});