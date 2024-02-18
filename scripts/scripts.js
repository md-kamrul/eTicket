// select the seats function
function seatSelect() {

}
// let getf = document.getElementsByClassName('SelectYourSeat').addEventListener('')
// console.log(getf);

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