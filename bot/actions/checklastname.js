module.exports = function(session, args, next) {
  if (session.dialogData.view.dialog && session.dialogData.view.dialog.fullName) {
    var firstName = session.dialogData.view.dialog.fullName;
    var lastName = session.dialogData.view.dialog.lastName;
    session.dialogData.view.dialog.fullName = firstName + ' ' + lastName;
  }
  next();
}