module.exports = function(session, args, next) {
  setTimeout(function() {
    console.log('start settimeout');
    this.storage.getAllFromCollection('user', session.message.address.user.id, function (err, values) {
      console.log(values);
      if (values.claimType && values.picture) {
        if (values.claimType === 'car') {
          console.log('is a car');
          session.beginDialog('/showAnalysisCar');
          next();
        } else if (values.claimType === 'building') {
          session.beginDialog('/showAnalysisBuilding');
          next();
        } else {
          session.beginDialog('/showAnalysisOther');
          next();
        }
      }
  });
  }.bind(this), 5000);
}