module.exports = function(sequelize, DataTypes) {
   const FactsLibrary = sequelize.define("FactsLibrary", {
      fact: {
         type: DataTypes.STRING,
      }
   },{
      carset: "utf8",
   });
   return FactsLibrary;
};