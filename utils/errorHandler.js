module.exports = function(err, req, res, next) {
   // potential switch based on error code or msg
   console.log(next);

   // log error to monitor
   // for development
   console.error(err.message);
   console.error(err);
   return res.redirect("/");
};
