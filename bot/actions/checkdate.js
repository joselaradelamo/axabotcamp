module.exports = function(session, args, next) {
  this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
    if (values && values.datePicked && values.datePicked === 'other') {
      session.beginDialog('/askDate');
    } else {
      session.beginDialog('/claimDone');
    }
  }.bind(this));
}