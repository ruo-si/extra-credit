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


   $(userSpendBtn).on("click", (event) => {
      event.preventDefault();



      // This line grabs the input from the textbox
      const userSpendInput = $("#user-spend-input").val();



      console.log(`money spent: ${userSpendInput}`);
      spendAmountSaved.push(userSpendInput);
      console.log(spendAmountSaved);

      localStorage.setItem("spentAmount", JSON.stringify(spendAmountSaved));


      const amexResult = amexCard(userSpendInput);

      console.log(amexResult[0]);
      console.log(amexResult[1]);
      console.log(amexResult[2]);
      //console.log(amexCard(userSpendInput));
      //citiCard(userSpendInput);
      // jetBlueCard(userSpendInput);
      // console.log(userSpendInput);

      $("tbody").append(`<tr><th>1</th><td>Amex</td><td>${amexResult[0]}</td><td>${amexResult[1]}</td><td>${amexResult[2]}</td></tr>`);

      // <tr>
      //              <th scope="row">1</th>
      //              <td>Amex</td>
      //              <td>200</td>
      //              <td>5x</td>
      //              <td>4%</td>
      //          </tr>



   });

});