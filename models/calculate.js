const amexCard = function (num1) {
    const cashBack = function (num1) {
        const num2 = .02;
        const result = num1 * num2;
        console.log("$" + result)
        return result;
    }
    cashBack(num1);

    const rewardsEarned = function (num1) {
        const num2 = .75;
        const result = num1 * num2;
        console.log(result + " points")
        return result;
    }
    rewardsEarned(num1);

    const milesEarned = function (num1) {
        const num2 = 1.25;
        const result = num1 * num2;
        console.log(result + " miles")
        return result;
    }
    milesEarned(num1);


}

amexCard(400);

