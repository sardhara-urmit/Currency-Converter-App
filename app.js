let url ="https://api.frankfurter.app/latest?from=INR&to=USD";


let from = document.querySelector("#from");

for (let name in countryList) {

    let newOption = document.createElement("option");

    newOption.innerText = name;
    newOption.value = name;

    from.append(newOption);
}

//  second selct--------------------

let dropdowns = document.querySelectorAll(".ch");

for (let select of dropdowns) {

    for (let name in countryList) {

        let newOption = document.createElement("option");

        newOption.innerText = name;
        newOption.value = name;

        select.append(newOption);
    }
}