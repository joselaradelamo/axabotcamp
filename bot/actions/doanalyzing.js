module.exports = function(session, args, next) {
  setTimeout(function() {
    this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
      if (values.claimType && values.picture) {
        if (values.claimType === 'car') {
          session.beginDialog('/showAnalysisCar');
        } else if (values.claimType === 'building') {
          session.beginDialog('/showAnalysisBuilding');
        } else if (values.claimType === 'other') {
          session.beginDialog('/showAnalysisOther');
        }
      }
      next();
  });
  }, 5000);
}