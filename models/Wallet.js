module.exports = function(sequelize, DataTypes) {
   const Wallet = sequelize.define("Wallet", {
      // eslint-disable-next-line camelcase
      cc_name: {
         type: DataTypes.STRING,
      }
   },{
      carset: "utf8",
   });
   return Wallet;
};
 