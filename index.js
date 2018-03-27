const ShopIndex = require('./ShopIndex.js');
var si = new ShopIndex();
 
var request = require('request');
 
var lastCheck = JSON.parse('I put the current shop here, so it doesnt post instnatly when i start the bot.');
 
var PythonShell = require('python-shell');
 
//check shop every 10 minutes.
setInterval(function(){
  request('http://101.200.189.65:430/gemtd/201803/goods/list/@0', function (error, response, body) {
 
    var data = JSON.parse(body);
    if (JSON.stringify(lastCheck.list) !== JSON.stringify(data.list)) {
 
      var sale = data.onsale;
      var title = createTitle(sale, data.expire);
      var output = 'Today\'s Heroes, Abilities and Effects are:\n\n \n\n';
 
      for (var i = 0; i < Object.keys(data.list).length; i++) {
        output += si.translate(data.list[Object.keys(data.list)[i]], sale);
        output += '\n\n'
      }
 
      output += '\n-------------------------------------------------------------------------------------\n'
      output += 'I\'m a bot, Bip Bop Bip. [Message Author](http://www.reddit.com/message/compose?to=frgttn&subject=Subject&message=Message+here!)'
      //Python call
      var options = {args: [output, title]};
 
      PythonShell.run('python.py', options, function (err, results) {
        if (err) throw err;
      });
      ///////////////////////////////
 
      console.log('\nPosting new Shop has been done!');
      console.log('---------------------------------------------------------');
      console.log(title + '\n');
      console.log('---------------------------------------------------------');
 
      lastCheck = data;
    }
  });
}, 600000);
 
function createTitle(aSale, aExpire) {
  var ret = '[Shop] ' + new Date().toLocaleDateString() + ' (';
 
  if (aSale.charAt(0) === 'h') {ret += 'Hero';}
  else if (aSale.charAt(0) === 'e') {ret += 'Effect';}
  else if (aSale.charAt(0) === 'a') {ret += 'Ability';}
 
  ret += ' on sale: ' + si.getNameFromId(aSale) + ') ';
 
  var mins = Math.floor(aExpire / 60);
  var hours = Math.floor(mins / 60);
  mins -= hours * 60;
  ret += '[' + hours + 'h ' + mins + 'm ' + 'to refresh]'
 
  return ret;
}