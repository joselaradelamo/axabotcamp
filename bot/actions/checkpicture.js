module.exports = function(session, args, next) {
  this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
    if (values.claimType && values.picture) {
      console.log(values.claimType);console.log(values.picture);
    }
    next();
  });
}