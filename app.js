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
const netOutput = document.getElementById("netOutput"); 
const sumEmployees = document.getElementById("sumEmployees"); 
const sumGross = document.getElementById("sumGross");
const sumDed = document.getElementById("sumDed");
const sumNet = document.getElementById("sumNet");

const button = document.querySelector("#submitBtn");
let sum = 1;
let totalGross = 0;
let totalDeductions = 0;
let totalNet = 0;

button.addEventListener("click", function(e){
    e.preventDefault();

    let name = empName.value;
    let empHours = Number(hours.value);
    let empRate = Number(rate.value);
    let taxPercent = Number(tax.value);
    let gross = empHours * empRate;
    let otherDeductions = Number(otherDed.value);
    let taxDeduction = gross * (taxPercent / 100);
    let netPay = gross - taxDeduction - otherDeductions;
    let totalEmpDeduction = taxDeduction + otherDeductions;
    

    if (name !== ""){
        numberOutput.innerHTML += "<p>" + sum + "</p>";
        sumEmployees.innerHTML = "<p>" + sum + "</p>";
        sum++;
        nameOutput.innerHTML += "<p>" + name + "</p>";
        hoursOutput.innerHTML += "<p>" + empHours + "</p>";
        rateOutput.innerHTML += "<p>₱" + empRate.toFixed(2) + "</p>";
        grossOutput.innerHTML += "<p>₱" + gross.toFixed(2) + "</p>";
        taxOutput.innerHTML += "<p>₱" + taxDeduction.toFixed(2)  + "</p>";
        otherOutput.innerHTML += "<p>₱" + otherDeductions.toFixed(2)  + "</p>";
        netOutput.innerHTML += "<p>₱" + netPay.toFixed(2)  + "</p>";
        totalGross += gross;
        sumGross.innerHTML = "<p>₱" + totalGross.toFixed(2)  + "</p>";
        totalDeductions += totalEmpDeduction;
        sumDed.innerHTML = "<p>₱" + totalDeductions.toFixed(2)  + "</p>";
        totalNet+=netPay;
        sumNet.innerHTML = "<p>₱" + totalNet.toFixed(2)  + "</p>";
        
    } else {
        nameOutput.innerHTML += "<p></p>";
    }
    
});