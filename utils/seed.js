module.exports = function(db) {
   console.log("table seeded!");
      
   return Promise.all([
      db.FactsLibrary.create({ fact: "best way to use credit sparingly and responsibility"}),

      db.FactsLibrary.create({ fact: "nevative information on scrore eventually ages off, but it takes years to build good credit"}),

      db.FactsLibrary.create({ fact: "best way to use credit sparingly and responsibility, make ontime paymants and only apply for credit when qualified"}),

      db.FactsLibrary.create({ fact: "take advantage of seasonal offers and compare between banks before applying for a credit card"}),

      db.FactsLibrary.create({ fact: "applying for a credit card fitting to your lifestyle can yield greater benefits than you think"}),

      db.FactsLibrary.create({ fact: "it is never too late to build good credit, it is often easier when you have a stable spending income"}),

      db.FactsLibrary.create({ fact: "a FICO score is a report of your cedit history"}),
      
   ]);
      

};
