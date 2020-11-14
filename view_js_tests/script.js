// get the modal
const signUpModal = document.getElementById("sign-up-modal");
const myWalletModal = document.getElementById("my-wallet-modal");
const rewardsModal = document.getElementById("rewards-modal");
const funFactModal = document.getElementById("fun-fact-modal");

// get the button that opens the modal
const signUpBtn = document.getElementById("sign-up-btn");
const myWalletBtn = document.getElementById("my-wallet-btn");
const rewardsBtn = document.getElementById("rewards-btn");
const funFactBtn = document.getElementById("fun-fact-btn");

// get the <close> element that closes the modal
const closeBtn = document.getElementsByClassName("close");


// buttons to open the modal 

// sign up
signUpBtn.onclick = function () {signUpModal.style.display = "block";};


// my wallet
myWalletBtn.onclick = function () {myWalletModal.style.display = "block";};

// rewards calculator
rewardsBtn.onclick = function () {rewardsModal.style.display = "block";};

// fun fact
funFactBtn.onclick = function () {funFactModal.style.display = "block";};



// click on (x), close the modal
closeBtn.onclick = function () {signUpModal.style.display = "none";};


// click anywhere outside of the modal to close 
window.onclick = function (event) { if (event.target === signUpModal) {signUpModal.style.display = "none";}
};
