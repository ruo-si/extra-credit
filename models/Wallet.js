module.exports = function(sequelize, DataTypes) {
    const Wallet = sequelize.define("Wallet", {
        cc_name: {
          type: DataTypes.STRING,
       }
    },{
       carset: "utf8",
    });
    return Wallet;
 };
 