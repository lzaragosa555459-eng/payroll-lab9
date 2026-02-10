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


const button = document.querySelector("#submitBtn");
let sum = 1;
 

button.addEventListener("click", function(e){
    e.preventDefault();

    let name = empName.value;
    let empHours = hours.value;
    let empRate = rate.value;
    let taxPercent = tax.value;
    let gross = empHours * empRate;
    let otherDeductions = otherDed.value;
    let taxDeduction = gross * (taxPercent / 100)
    let netPay = gross - taxDeduction - otherDeductions

    if (name&&empHours&&empRate !== ""){
        numberOutput.innerHTML += "<p>" + sum + "</p>";
        sum++;
        nameOutput.innerHTML += "<p>" + name + "</p>";
        hoursOutput.innerHTML += "<p>" + empHours + "</p>";
        rateOutput.innerHTML += "<p>₱" + empRate + "</p>";
        grossOutput.innerHTML += "<p>₱" + gross + "</p>";
        taxOutput.innerHTML += "<p>₱" + taxDeduction  + "</p>";
        otherOutput.innerHTML += "<p>₱" + otherDeductions  + "</p>";
        netOutput.innerHTML += "<p>₱" + netPay  + "</p>";
    } else {
        nameOutput.innerHTML += "<p></p>";
    }

 
});