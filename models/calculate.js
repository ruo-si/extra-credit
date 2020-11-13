const amexCard = function (num1) {
    const cashBack = function (num1) {
        const num2 = .02;
        const result = num1 * num2;
        console.log("$" + result.toFixed(2))
        return result.toFixed(2);
    }
    cashBack(num1);

    const rewardsEarned = function (num1) {
        const num2 = .75;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " points")
        return result.toFixed(2);
    }
    rewardsEarned(num1);

    const milesEarned = function (num1) {
        const num2 = 1.25;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " miles")
        return result.toFixed(2);
    }
    milesEarned(num1);


}

amexCard(400);

const citiCard = function (num1) {
    const cashBack = function (num1) {
        const num2 = .04;
        const result = num1 * num2;
        console.log("$" + result.toFixed(2))
        return result.toFixed(2);
    }
    cashBack(num1);

    const rewardsEarned = function (num1) {
        const num2 = .80;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " points")
        return result.toFixed(2);
    }
    rewardsEarned(num1);

    const milesEarned = function (num1) {
        const num2 = 1.10;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " miles")
        return result.toFixed(2);
    }
    milesEarned(num1);


}

citiCard(400);

const jetBlueCard = function (num1) {
    const cashBack = function (num1) {
        const num2 = .03;
        const result = num1 * num2;
        console.log("$" + result.toFixed(2));
        return result.toFixed(2);
    }
    cashBack(num1);

    const rewardsEarned = function (num1) {
        const num2 = .85;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " points");
        return result.toFixed(2);
    }
    rewardsEarned(num1);

    const milesEarned = function (num1) {
        const num2 = 1.15;
        const result = num1 * num2;
        console.log(result.toFixed(2) + " miles");
        return result.toFixed(2);
    }
    milesEarned(num1);


}

jetBlueCard(400);

