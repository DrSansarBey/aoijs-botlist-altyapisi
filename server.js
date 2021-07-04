const Aoijs = require("aoi.js")
const bot = new Aoijs.Bot({
  mobile: true, 
  token: "TOKEN", 
  prefix: ["PREFIX"]})

bot.onMessage()
bot.loadCommands(`./commands/`)

bot.variables({başvurukanal:"",
botlog:"",
botlistacik:"Kapalı",
botlistgeliştirici:"",
botlistbot:"",
botlistyetkili:"",
botlistyetkiliaçık:"Kapalı",
botlistgeliştiriciaçık:"Kapalı",
botlistbotacik:"Kapalı"});
