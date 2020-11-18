module.exports = function(db) {
   console.log("table seeded!");
      
   return Promise.all([
      db.FactsLibrary.create({ fact: "The best way to use credit sparingly and responsibly."}),

      db.FactsLibrary.create({ fact: "Negative information on score eventually ages off, but it takes years to build good credit."}),

      db.FactsLibrary.create({ fact: "The best way to use credit sparingly and responsibly, make ontime payments and only apply for credit when qualified."}),

      db.FactsLibrary.create({ fact: "Take advantage of seasonal offers and compare between banks before applying for a credit card."}),

      db.FactsLibrary.create({ fact: "Applying for a credit card fitting to your lifestyle can yield greater benefits than you think."}),

      db.FactsLibrary.create({ fact: "It is never too late to build good credit, it is often easier when you have a stable spending income."}),

      db.FactsLibrary.create({ fact: "A FICO score is a report of your credit history."}),
      
   ]);
      

};
