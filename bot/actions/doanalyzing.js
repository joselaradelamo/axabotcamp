module.exports = function(session, args, next) {
  setTimeout(function() {
    this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
      if (values.claimType && values.picture) {
        console.log(values.picture);
        if (values.claimType === 'car') {
          session.beginDialog('/showAnalysisCar');
          //next();
        } else if (values.claimType === 'building') {
          session.beginDialog('/showAnalysisBuilding');
          //next();
        } else {
          session.beginDialog('/showAnalysisOther');
          //next();
        }
      }
  });
  }.bind(this), 5000);
}