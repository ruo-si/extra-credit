module.exports = function(db) {
      console.log("\n🚀 init table seed");
      
      return Promise.all([
         db.FactsLibrary.create({ fact: `"best way to use credit sparingly and responsibility` }),
         db.FactsLibrary.create({ fact: `credit scrores is a nukber influenced by fife factors: payment history, 
         credit utilization, bank account history, account types, inquiries` })
      ])
      

};
