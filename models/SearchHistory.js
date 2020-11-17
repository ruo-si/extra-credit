module.exports = function(sequelize, DataTypes) {
   const SearchHistory = sequelize.define("SearchHistory", {
      // eslint-disable-next-line camelcase
      search_price: {
         type: DataTypes.INTEGER,
      }
   },{
      carset: "utf8",
   });
   return SearchHistory;
};