// // const { values } = require("sequelize/types/lib/operators");

// const userSpendBtn = $("#text-enter-button");

// const spendAmountSaved = JSON.parse(localStorage.getItem("spentAmount")) || [];

// // =======================================================================

// const amexCard = function (num1) {
//    const cashBack = function (num1) {
//       const num2 = .02;
//       const result = num1 * num2;
//       console.log("$" + result.toFixed(2));
//       return result.toFixed(2);
//    };
//    cashBack(num1);

//    const rewardsEarned = function (num1) {
//       const num2 = .75;
//       const result = num1 * num2;
//       console.log(result.toFixed(2) + " points");
//       return result.toFixed(2);
//    };
//    rewardsEarned(num1);

//    const milesEarned = function (num1) {
//       const num2 = 1.25;
//       const result = num1 * num2;
//       console.log(result.toFixed(2) + " miles");
//       return result.toFixed(2);
//    };
//    milesEarned(num1);


// };

// // amexCard(1000);

// const citiCard = function (num1) {
//    const cashBack = function (num1) {
//       const num2 = .04;
//       const result = num1 * num2;
//       console.log("$" + result.toFixed(2));
//       return result.toFixed(2);
//    };
//    cashBack(num1);

//    const rewardsEarned = function (num1) {
//       const num2 = .80;
//       const result = num1 * num2;
//       console.log(result.toFixed(2) + " points");
//       return result.toFixed(2);
//    };
//    rewardsEarned(num1);

//    const milesEarned = function (num1) {
//       const num2 = 1.10;
//       const result = num1 * num2;
//       console.log(result.toFixed(2) + " miles");
//       return result.toFixed(2);
//    };
//    milesEarned(num1);


// };

// // citiCard(600);

// const jetBlueCard = function (num1) {
//    const cashBack = function (num1) {
//       const num2 = .03;
//       const result = num1 * num2;
//       console.log("$" + result.toFixed(2));
//       return result.toFixed(2);
//    };
//    cashBack(num1);

//    const rewardsEarned = function (num1) {
//       const num2 = .85;
//       const result = num1 * num2;
//       console.log(result.toFixed(2) + " points");
//       return result.toFixed(2);
//    };
//    rewardsEarned(num1);

//    const milesEarned = function (num1) {
//       const num2 = 1.15;
//       const result = num1 * num2;
//       console.log(result.toFixed(2) + " miles");
//       return result.toFixed(2);
//    };
//    milesEarned(num1);


// };

// // jetBlueCard(4000);

// // ================================================================

// // This function handles events where one button is clicked
// const cardPerkCalc = $(userSpendBtn).on("click", (event) => {
//    event.preventDefault();



//    // This line grabs the input from the textbox
//    const userSpendInput = $("#user-spend-input").val();



//    console.log(`money spent: ${userSpendInput}`);
//    spendAmountSaved.push(userSpendInput);
//    console.log(spendAmountSaved);

//    localStorage.setItem("spentAmount", JSON.stringify(spendAmountSaved));


//    amexCard(userSpendInput);
//    citiCard(userSpendInput);
//    jetBlueCard(userSpendInput);
//    console.log(userSpendInput);




// });

// module.exports = amexCard, citiCard, jetBlueCard, cardPerkCalc;

