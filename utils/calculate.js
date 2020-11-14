const userSpendBtn = $("#text-enter-button");

const spendAmountSaved = JSON.parse(localStorage.getItem("spentAmount")) || [];


// This function handles events where one button is clicked
$(userSpendBtn).on("click", (event) => {
    event.preventDefault();



    // This line grabs the input from the textbox
    const userSpendInput = $("#user-spend-input").val();



    console.log(`money spent: ${userSpendInput}`);
    spendAmountSaved.push(userSpendInput);
    console.log(spendAmountSaved);

    localStorage.setItem("spentAmount", JSON.stringify(spendAmountSaved));




});



const citiDCB = function(num1) {
    const cashBack = function(num1) {
        const num2 = .02;
        const result = num1 * num2;
        console.log("$" + result.toFixed(2));
        return result.toFixed(2);
    };
    cashBack(num1);

    // const rewardsEarned = function (num1) {
    //    const num2 = .75;
    //    const result = num1 * num2;
    //    console.log(result.toFixed(2) + " points");
    //    return result.toFixed(2);
    // };
    // rewardsEarned(num1);

    // const milesEarned = function (num1) {
    //    const num2 = 1.25;
    //    const result = num1 * num2;
    //    console.log(result.toFixed(2) + " miles");
    //    return result.toFixed(2);
    // };
    // milesEarned(num1);


};

citiDCB(1000);

const jetBluePlus = function(num1) {
    // const cashBack = function(num1) {
    //    const num2 = .04;
    //    const result = num1 * num2;
    //    console.log("$" + result.toFixed(2));
    //    return result.toFixed(2);
    // };
    // cashBack(num1);

    const JetBlueAirways = function(num1) {
        const num2 = 6;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " points");
        return result.toFixed(2);
    };
    JetBlueAirways(num1);

    const JetBlueAirwaysInFlight = function(num1) {
        const num2 = 6;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " miles");
        return result.toFixed(2);
    };
    JetBlueAirwaysInFlight(num1);

    const JetBlueResturant = function(num1) {
        const num2 = 2;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " miles");
        return result.toFixed(2);
    };
    JetBlueResturant(num1);

    const JetBlueGrocery = function(num1) {
        const num2 = 2;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " miles");
        return result.toFixed(2);
    };
    JetBlueGrocery(num1);

};

jetBluePlus(600);

const amexGreen = function(num1) {
    const travel = function(num1) {
        const num2 = 3;
        const result = num1 * num2;
        console.log("$" + result.toFixed(2));
        return result.toFixed(2);
    };
    travel(num1);

    const transit = function(num1) {
        const num2 = 3;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " points");
        return result.toFixed(2);
    };
    transit(num1);

    const resturants = function(num1) {
        const num2 = 3;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " miles");
        return result.toFixed(2);
    };
    resturants(num1);


};

amexGreen(4000);

module.exports = amexCard, citiCard, jetBlueCard;