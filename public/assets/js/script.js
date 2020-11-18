$(document).ready(() => {
    
   //initializing tooltip
   // $("[data-toggle=\"tooltip\"]").tooltip();



   $("#fun-fact-btn").on("click", () => {

      console.log("clicked!");
      // ajax api get request
      $.ajax("/api/facts", {
         type: "GET",
      }).then(
         (data) => {
            console.log(data);
            // set up appending data
            const factContent = `<p><mark><strong>Fact: ${data.id } : </strong></mark> ${data.fact}</p>`;
 
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



      // This line grabs the input from the textbox
      const userSpendInput = $("#user-spend-input").val();



      console.log(`money spent: ${userSpendInput}`);
      spendAmountSaved.push(userSpendInput);
      console.log(spendAmountSaved);

      localStorage.setItem("spentAmount", JSON.stringify(spendAmountSaved));


      const amexResult = amexCard(userSpendInput);
      const citiResult = citiCard(userSpendInput);
      const jetBlueResult = jetBlueCard(userSpendInput);

      // console.log(amexResult[0]);
      // console.log(amexResult[1]);
      // console.log(amexResult[2]);
      //console.log(amexCard(userSpendInput));
      //citiCard(userSpendInput);
      // jetBlueCard(userSpendInput);
      // console.log(userSpendInput);

      $("#perks-results").append(`<tr><th>1</th><td>Amex</td><td>${amexResult[0]}</td><td>${amexResult[1]}</td><td>${amexResult[2]}</td></tr>`);
      $("#perks-results").append(`<tr><th>2</th><td>Citi</td><td>${citiResult[0]}</td><td>${citiResult[1]}</td><td>${citiResult[2]}</td></tr>`);
      $("#perks-results").append(`<tr><th>3</th><td>JetBlue</td><td>${jetBlueResult[0]}</td><td>${jetBlueResult[1]}</td><td>${jetBlueResult[2]}</td></tr>`);


   });

});