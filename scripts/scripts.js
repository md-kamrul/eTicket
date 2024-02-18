// select the seats function
let count = 0;
let seatArray = [];
let SelectYourSeatClass = document.getElementsByClassName('SelectYourSeat');
for (let SelectYourSeat of SelectYourSeatClass) {
    SelectYourSeat.addEventListener('click', function (event) {
        let Price;
        if (count < 4) {
            let getTheId = event.target.innerText;

            if (!seatArray.includes(getTheId)) {
                count = count + 1;
                document.getElementById(getTheId).classList.add('bg-[#1cd100]');

                priceListfunction(getTheId);

                Price = counterChange(getTheId, count);
            }
        }

        if (count === 4) {
            cuponFunction(Price);
        }
    });
}

function priceListfunction(getTheId) {
    let priceList = document.getElementById('priceList');
    let divP = document.createElement('div');
    divP.classList.add('flex', 'flex-row', 'justify-between');
    let getP = document.createElement('p');
    getP.innerText = getTheId;
    divP.appendChild(getP);
    seatArray.push(getTheId);

    let classP = document.createElement('p');
    classP.innerText = 'AC_Business';
    divP.appendChild(classP);
    let priceP = document.createElement('p');
    priceP.innerText = '550';
    divP.appendChild(priceP);
    priceList.appendChild(divP);
}


function counterChange(getTheId, count) {
    let priceList = document.getElementById('selectedSeat');

    priceList.innerText = count;

    let seatsAvailable = document.getElementById('seatsAvailable');
    seatsAvailable.innerText = seatsAvailable.innerText - 1;

    return totalPrice(count);
}

// total price function
function totalPrice(count) {
    let Price = 550 * count;
    document.getElementById('totalPrice').innerText = Price;
    return Price;
}

let apply = document.getElementById('apply')

// cuponFunction()
function cuponFunction(Price) {
    document.getElementById('apply').removeAttribute('disabled');
    apply.addEventListener('click', function () {
        grandTotal(Price);
    });
}



// Grand total function
function grandTotal(Price) {
    let cupon = document.getElementById('cuponInput').value;

    let inputSection = document.getElementById('inputSection');
    if (cupon === "NEW15") {
        inputSection.classList.add('hidden');
        grandTotalCal(Price, 15);
    }
}

function grandTotalCal(Price, parcent) {
    let grandTotal = 0;
    console.log(parseFloat(Price), parcent);
    grandTotal = Price - (Price * (parcent / 100));

    console.log(document.getElementById('grandPrice').innerText);
}

// next button fuction
document.getElementById('next').addEventListener('click', function () {
    let bodyFunction = document.getElementById('bodyFunction');
    let successPopUp = document.getElementById('successPopUp')
    bodyFunction.classList.add("hidden");
    successPopUp.classList.remove("hidden");
});

// continue button function
document.getElementById('continue').addEventListener('click', function () {
    let bodyFunction = document.getElementById('bodyFunction');
    let successPopUp = document.getElementById('successPopUp')
    bodyFunction.classList.remove("hidden");
    successPopUp.classList.add("hidden");
});