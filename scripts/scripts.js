// select the seats function
let count = 0;
let seatArray = [];
let SelectYourSeatClass = document.getElementsByClassName('SelectYourSeat');
for (let SelectYourSeat of SelectYourSeatClass) {
    SelectYourSeat.addEventListener('click', function (event) {
        if (count < 4) {
            let getTheId = event.target.innerText;
            // console.log(seatArray);
            if (!seatArray.includes(getTheId)) {
                count = count + 1;
                document.getElementById(getTheId).classList.add('bg-[#1cd100]');

                priceListfunction(getTheId);

                counterChange(getTheId, count);
            }
        }

        if (count === 4) {
            cuponFunction();
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

    totalPrice(count);
}

// total price function
function totalPrice(count) {
    let totalPrice = 550 * count;
    document.getElementById('totalPrice').innerText = totalPrice;
}

// cuponFunction()
function cuponFunction() {
    document.getElementById('apply').removeAttribute('disabled');
    grandTotal(count);
}

// Grand total function
function grandTotal(count) {
    if (count < 4) {
        let totalPrice = 550 * count;
        document.getElementById('GrandPrice').innerText = totalPrice;
    }
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