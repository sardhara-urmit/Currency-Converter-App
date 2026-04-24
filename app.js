let base_url ="https://api.frankfurter.app/latest?";
// let url ="https://api.frankfurter.app/latest?from=INR&to=USD";




let dropdowns = document.querySelectorAll(".ch");
let button = document.querySelector("#btn");
let fromcur =document.querySelector("#from");
let tocur =document.querySelector("#to");



for (let select of dropdowns) {

    for (let name in countryList) {

        let newOption = document.createElement("option");

        newOption.innerText = name;
        newOption.value = name;

        select.append(newOption);
    }
}

for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        // Default value set  (Optional)
        if (select.name === "from" && currCode === "USD") {
            newOption.selected = "selected";
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = "selected";
        }

        select.append(newOption);
    }

    
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target); 
    });
}

// Flag update  function
const updateFlag = (element) => {
    let currCode = element.value; // USD, INR, etc.
    let countryCode = countryList[currCode]; // US, IN, etc.
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    
    // Dropdown  image select  source change 
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

button.addEventListener("click", async(evt)=>{
    evt.preventDefault();
    let amount =document.querySelector("#Ammount");
    let amountval= amount.value;
    console.log(amountval);
    if (amountval =="" || amountval <1) {
        amountval =1;
        amount.value="1";
        
    }
    

    // console.log(fromcur.value,tocur.value);
    let url =`${base_url}from=${fromcur.value.toLowerCase()}&to=${tocur.value.toLowerCase()}`;
    let response =await fetch (url);
    console.log(response);

})
