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