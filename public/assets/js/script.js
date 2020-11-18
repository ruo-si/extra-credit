$(document).ready(() => {
    
   //initializing tooltip
   $("[data-toggle=\"tooltip\"]").tooltip();

});

$("#fun-fact-btn").on("click", () => {

   console.log("clicked!");
   // ajax api get request
   $.ajax("/api/facts", {
      type: "GET",
   }).then(
      (data) => {
         console.log(data);

         // set up appending data
         const randomFact= data[Math.floor(Math.random()*data.length)];

         console.log(randomFact);
         const factContent = `<p><mark><strong>Fact: ${randomFact.id } : </strong></mark> ${randomFact.fact}</p>`;
 
         // console.log(data)
         console.log(factContent);
 
         // append the content onto modal
         $(factContent).appendTo("body").modal();
 
         location.reload;
      }
   );
});

// This function initiates the calculating functions for each card upon each click
$(userSpendBtn).on("click", (event) => {
   event.preventDefault();

   // clear previous data from table
   $("#perks-results").html("");

   // This line grabs the input from the textbox
   const userSpendInput = $("#user-spend-input").val();
   console.log(`money spent: ${userSpendInput}`);

   // The user input is pushed into the local storage
   spendAmountSaved.push(userSpendInput);
   console.log(spendAmountSaved);
   localStorage.setItem("spentAmount", JSON.stringify(spendAmountSaved));

   // The User Input is pushed into the card functions and saved as variables to be called
   const amexResult = amexCard(userSpendInput);
   const citiResult = citiCard(userSpendInput);
   const jetBlueResult = jetBlueCard(userSpendInput);

   // Creates table rows and appends the results of the Amex Card
   $("#perks-results").append(`<tr><th>1</th><td>Amex</td><td>${amexResult[0]}</td><td>${amexResult[1]}</td><td>${amexResult[2]}</td></tr>`);

   // Creates table rows and appends the results of the Citi Card
   $("#perks-results").append(`<tr><th>2</th><td>Citi</td><td>${citiResult[0]}</td><td>${citiResult[1]}</td><td>${citiResult[2]}</td></tr>`);

   // Creates table rows and appends the results of the JetBlue Card
   $("#perks-results").append(`<tr><th>3</th><td>JetBlue</td><td>${jetBlueResult[0]}</td><td>${jetBlueResult[1]}</td><td>${jetBlueResult[2]}</td></tr>`);


});