// const userSpendBtn = $("#text-enter-button");

// const spendAmountSaved = JSON.parse(localStorage.getItem("spentAmount")) || [];

// =======================================================================

// AMEX Card Function that calculates the perks 
const amexCard = function (num1) {
   const cashBack = function() {
      const num2 = .02;
      const result = num1 * num2;
      console.log("$" + result.toFixed(2));
      return result.toFixed(2);
   };

   const rewardsEarned = function () {
      const num2 = .75;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " points");
      return result.toFixed(2);
   };

   const milesEarned = function () {
      const num2 = 1.25;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " miles");
      return result.toFixed(2);
   };

   return [cashBack(), rewardsEarned(), milesEarned()];

};

// Citi Card Function that calculates the perks 
const citiCard = function (num1) {
   const cashBack = function () {
      const num2 = .04;
      const result = num1 * num2;
      console.log("$" + result.toFixed(2));
      return result.toFixed(2);
   };

   const rewardsEarned = function () {
      const num2 = .80;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " points");
      return result.toFixed(2);
   };

   const milesEarned = function () {
      const num2 = 1.10;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " miles");
      return result.toFixed(2);
   };

   return [cashBack(), rewardsEarned(), milesEarned()];

};

// Citi Card Function that calculates the perks 
const jetBlueCard = function (num1) {
   const cashBack = function () {
      const num2 = .03;
      const result = num1 * num2;
      console.log("$" + result.toFixed(2));
      return result.toFixed(2);
   };

   const rewardsEarned = function () {
      const num2 = .85;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " points");
      return result.toFixed(2);
   };

   const milesEarned = function () {
      const num2 = 1.15;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " miles");
      return result.toFixed(2);
   };

   return [cashBack(), rewardsEarned(), milesEarned()];

};

// ================================================================

// This function initiates the calculating functions for each card upon each click
const cardPerkCalc = $(userSpendBtn).on("click", (event) => {
   event.preventDefault();



   // This line grabs the input from the textbox
   const userSpendInput = $("#user-spend-input").val();



   console.log(`money spent: ${userSpendInput}`);
   spendAmountSaved.push(userSpendInput);
   console.log(spendAmountSaved);

   localStorage.setItem("spentAmount", JSON.stringify(spendAmountSaved));


   amexCard(userSpendInput);
   citiCard(userSpendInput);
   jetBlueCard(userSpendInput);
   console.log(userSpendInput);

});

//module.exports = amexCard, citiCard, jetBlueCard, cardPerkCalc;

