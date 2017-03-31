var twilio = require('twilio'); 
// Find your account sid and auth token in your Twilio account Console.
var client = twilio('AC94ce7b8ab4f8fa30e25e1c1e1043f49c', 'f95c8852323f68f8f2540021ca42b790');
 
console.log(
client.sendMessage({
  to: 3606311564,
  from: 4252150898,
  body: 'You may now check your mail box! Have a great day!'
}));