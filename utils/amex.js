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

module.exports = amexGreen;