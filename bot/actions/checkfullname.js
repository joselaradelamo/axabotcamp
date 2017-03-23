module.exports = function(session, args, next) {
  console.log(session);
  if (session.dialogData.view.dialog && session.dialogData.view.dialog.fullName) {
    var fullName = session.dialogData.view.dialog.fullName;
    var fullNameSplit = fullName.split(' ');
    console.log(fullNameSplit);
    if (fullNameSplit.length <= 1) {
      session.beginDialog('/askLastName');
    } else {
      session.dialogData.view.dialog.lastName = fullNameSplit[fullNameSplit.length - 1];
      var firstNameSplit = fullNameSplit.slice(0, fullNameSplit.length - 1);
      session.dialogData.view.dialog.firstName = firstNameSplit.join(' ');
    }
  }
  next();
}