// select the seats function
let SelectYourSeatClass = document.getElementsByClassName('SelectYourSeat');
for (let SelectYourSeat of SelectYourSeatClass) {
    SelectYourSeat.addEventListener('click', function (event) {
        let getTheId = event.target.innerText;
        document.getElementById(getTheId).classList.add('bg-[#1cd100]');

        priceListfunction(getTheId);

        counterChange(getTheId);

    });
}

function priceListfunction(getTheId) {
    let priceList = document.getElementById('priceList');
    let divP = document.createElement('div');
    divP.classList.add('flex', 'flex-row', 'justify-between');
    let getP = document.createElement('p');
    getP.innerText = getTheId;
    divP.appendChild(getP);
    let classP = document.createElement('p');
    classP.innerText = 'AC_Business';
    divP.appendChild(classP);
    let priceP = document.createElement('p');
    priceP.innerText = '550';
    divP.appendChild(priceP);
    priceList.appendChild(divP);
}

let count = 0;

function counterChange(getTheId){ 
    let priceList = document.getElementById('selectedSeat');
    count = count + 1;
    console.log(count);
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