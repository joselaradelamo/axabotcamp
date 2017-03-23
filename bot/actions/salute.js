module.exports = function(session, args, next) {
  var now = new Date();
  var hourNow = now.getHours();
  var salute = 'Hello';
  if (hourNow >= 6 && hourNow <= 12) {
    salute = 'Good morning';
  } else if (hourNow > 12 && hourNow <= 17) {
    salute = 'Good afternoon';
  } else {
    salute = 'Good evening'
  }
  if (!session.dialogData.view.dialog) {
    session.dialogData.view.dialog = {};
  }
  session.dialogData.view.dialog.salute = salute;
  next();
}