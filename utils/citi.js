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
};

citiDCB(1000);

module.exports = citiDCB;