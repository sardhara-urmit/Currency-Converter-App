let base_url = "https://api.frankfurter.dev/v1/latest?";

let dropdowns = document.querySelectorAll(".ch");
let button = document.querySelector("#btn");
let fromcur = document.querySelector("#from");
let tocur = document.querySelector("#to");

// Dropdowns populate karo (sirf ek baar)
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "USD") {
            newOption.selected = true;
        } else if (select.name === "to" && currCode === "INR") {
            newOption.selected = true;
        }

        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

// Flag update function
const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

// Convert button click
button.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector("#Ammount");
    let amountval = amount.value;

    if (amountval == "" || amountval < 1) {
        amountval = 1;
        amount.value = "1";
    }

    let url = `${base_url}from=${fromcur.value.toUpperCase()}&to=${tocur.value.toUpperCase()}`;

 try {
    let response = await fetch(url);
    let data = await response.json();

    // Yeh check add karo
    if (!data.rates || !data.rates[tocur.value.toUpperCase()]) {
        alert("currency  not supported");
        return;
    }

    let rate = data.rates[tocur.value.toUpperCase()];
    let finalAmount = (amountval * rate).toFixed(2);
    let resultInput = document.querySelectorAll("input")[1];
    resultInput.value = finalAmount;

} catch (err) {
    console.log("Error aaya:", err);
}
});