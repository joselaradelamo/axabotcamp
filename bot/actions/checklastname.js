module.exports = function(session, args, next) {
  this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
    if (values && values.fullname && values.lastname) {
      var lastName = values.lastname;
      var firstName = values.fullname;
      var fullName = firstName + ' ' + lastName;
      var key = session.message.address.user.id;
      this.storage.setToCollection('user', key, 'fullname', fullName, function (err, item){
        this.storage.setToCollection('user', key, 'firstname', firstName, function (err, item){
          next();
        });
      }.bind(this));
    } else {
      next();
    }
  }.bind(this));
}