module.exports = function(err, req, res, next) {
   // potential switch based on error code or msg
   console.log(next);

   // log error to monitor
   // for development
   console.error(err.stack);
   return res.redirect("/");
};
