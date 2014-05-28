var _ = require('lodash');

module.exports = function (core) {
  var plugin = {};

  var callers = {
    lucario: '$lucario',
    beke: '$beke',
  };

  var triggers = {
    lilheart: '<3',
  };

  function pubListener(nick, text) {
    if (_.contains(text, triggers.lilheart)) {
      core.irc.sayPub('#nohomo');
    } else if (core.util.eqIgnoreCase(text, callers.beke)) {
      var oldNick = core.nickname;
      core.irc.setNick('KwameBeke');
      core.irc.sayPub('Hé hé hé...');
      core.irc.setNick(oldNick);
    } else if (core.util.eqIgnoreCase(text, callers.lucario)) {
      core.irc.sayPub('The bot cannot do Lucario. Lucario is way too sexy.');
    }
  }

  plugin.load = function () {
    core.irc.on('pub', pubListener);
  };

  plugin.unload = function () {
    core.irc.removeListener('pub', pubListener);
  };

  return plugin;
};