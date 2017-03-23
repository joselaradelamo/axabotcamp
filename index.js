const BotManager = require('flow-bot-manager').default;
const restify = require('restify');

var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function() {
  console.log('%s listening to %s', server.name, server.url);
});

var opts = {
  botAppId: process.env.botAppId,
  botAppPassword: process.env.botAppPassword,
  defaultLocale: 'en-GB',
  localesPath: './bot/locales',
  cardPath: './bot/cards',
  actionPath: './bot/actions',
  dialogPath: './bot/dialogs'
};
server.botManager = new BotManager(opts);
server.post('/api/messages', server.botManager.connector.listen());