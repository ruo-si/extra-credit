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
         const factContent = `<p><mark><strong>Fact: ${data.id } : </strong></mark> ${data.fact}</p>`;
 
         // console.log(data)
         console.log(factContent);
 
         // append the content onto modal
         $(factContent).appendTo("body").modal();
 
         location.reload;
      }
   );
});