const userSpendBtn = $("#text-enter-button");

const spendAmountSaved = JSON.parse(localStorage.getItem("spentAmount")) || [];



$(userSpendBtn).on("click", (event) => {
    event.preventDefault();



    const userSpendInput = $("#user-spend-input").val();



    console.log(`money spent: ${userSpendInput}`);
    spendAmountSaved.push(userSpendInput);
    console.log(spendAmountSaved);

    localStorage.setItem("spentAmount", JSON.stringify(spendAmountSaved));




});

const jetBluePlus = function(num1) {


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

module.exports = jetBluePlus;