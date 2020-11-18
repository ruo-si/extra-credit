/* eslint-disable no-unused-vars */
const userSpendBtn = $("#text-enter-button");

const spendAmountSaved = JSON.parse(localStorage.getItem("spentAmount")) || [];

// =======================================================================

// AMEX Card Function that calculates the perks 
const amexCard = function (num1) {
   const cashBack = function() {
      const num2 = .02;
      const result = num1 * num2;
      console.log("$" + result.toFixed(2));
      return "$" + result.toFixed(2);
   };

   const rewardsEarned = function () {
      const num2 = .75;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " points");
      return result.toFixed(2) + " points";
   };

   const milesEarned = function () {
      const num2 = 1.25;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " miles");
      return result.toFixed(2) + " miles";
   };


   return [cashBack(), rewardsEarned(), milesEarned()];

};


// Citi Card Function that calculates the perks 
const citiCard = function (num1) {
   const cashBack = function () {
      const num2 = .04;
      const result = num1 * num2;
      console.log("$" + result.toFixed(2));
      return "$" + result.toFixed(2);
   };

   const rewardsEarned = function () {
      const num2 = .80;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " points");
      return result.toFixed(2) + " points";
   };

   const milesEarned = function () {
      const num2 = 1.10;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " miles");
      return result.toFixed(2) + " miles";
   };


   return [cashBack(), rewardsEarned(), milesEarned()];

};


// Citi Card Function that calculates the perks 
const jetBlueCard = function (num1) {
   const cashBack = function () {
      const num2 = .03;
      const result = num1 * num2;
      console.log("$" + result.toFixed(2));
      return "$" + result.toFixed(2);
   };

   const rewardsEarned = function () {
      const num2 = .85;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " points");
      return result.toFixed(2) + " points";
   };

   const milesEarned = function () {
      const num2 = 1.15;
      const result = num1 * num2;
      console.log(result.toFixed(2) + " miles");
      return result.toFixed(2) + " miles";
   };


   return [cashBack(), rewardsEarned(), milesEarned()];

};