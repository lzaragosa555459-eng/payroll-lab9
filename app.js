const empName = document.getElementById("empName");
const hours = document.getElementById("hours");
const rate = document.getElementById("rate");
const numberOutput = document.getElementById("numberOutput");
const nameOutput = document.getElementById("nameOutput");

const button = document.querySelector("#submitBtn");
 let sum = 1;

button.addEventListener("click", function(e){
    e.preventDefault();

    let name = empName.value;
    let empHours = hours.value;
    let empRate = rate.value;

   
    

    if (name !== ""){
        numberOutput.innerHTML += "<p>" + sum + "</p>";
        sum++;
        nameOutput.innerHTML += "<p>" + name + "</p>";
    } else {
        nameOutput.innerHTML += "<p></p>";
    }

 
});