module.exports = {
   customif: options =>{
      return (options.hash.expected === options.hash.val) ? options.fn(this) : options.inverse(this);
   },
   getFirst: (obj, col) => {
      return obj[0].get(col);
   },
   getLength: (obj) => {
      return obj.length;
   }
};