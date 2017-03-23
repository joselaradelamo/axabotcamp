module.exports = function(session, args, next) {
  this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
    if (values && values.fullname) {
      var fullName = values.fullname;
      var fullNameSplit = fullName.split(' ');
      if (fullNameSplit.length <= 1) {
        session.beginDialog('/askLastName');
      } else {
        var key = session.message.address.user.id;
        var lastname = fullNameSplit[fullNameSplit.length - 1];
        var firstNameSplit = fullNameSplit.slice(0, fullNameSplit.length - 1);
        var firstname = firstNameSplit.join(' ');
        this.storage.setToCollection('user', key, 'lastname', lastname, function (err, item) {
          this.storage.setToCollection('user', key, 'firstname', firstname, function (err, item) {
            next();
          });
        }.bind(this));
        
      }
    } else {
      next();
    }
  }.bind(this));
}