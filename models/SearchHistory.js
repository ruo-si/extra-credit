module.exports = function(sequelize, DataTypes) {
    const SearchHistory = sequelize.define("SearchHistory", {
        search_price: {
          type: DataTypes.INTEGER,
       }
    },{
       carset: "utf8",
    });
    return SearchHistory;
 };