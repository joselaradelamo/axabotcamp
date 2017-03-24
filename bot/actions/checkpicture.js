module.exports = function(session, args, next) {
  this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
    if (values.claimType && values.picture) {
      if (values.claimType === 'car') {
        
      } else if (values.claimType === 'car') {

      } else if (values.claimType === 'car') {

      }
    }
    next();
  });
}