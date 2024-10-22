const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/SamPandey001/Secktor-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝐒𝐞𝐜𝐤𝐭𝐨𝐫 𝐁𝐨𝐭𝐭𝐨' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'SamPandey001' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'Adams-2024;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU9tVW1WNkVCMThhWllLc05XeTE0TGpmc2VYZjFKMU9mQStDM1hoanExRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUdKdWl4SVVrSnN5TjZmTUtFZnlPZnFLY0NSNFAxZksrYU1VUWkvWU5TQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTE4zQ2xNTlRQd0Vld0wxeUY4azRURy85R2plU0JsRjVHM3JZbWtnUzA0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0Q1l0bVBLZWw3Ni9ZdXpEL3lyeWMra0JtSFF6Y3YvZUQxWkVpWE1Tc0FVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlDL2RDVmhJNm9OQU9BRXhOQTk0ZnZqWFUyL0tHZnQ4bzdONlV2QUF6RzA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBreWJwSU9wUll6RERzVkg1V1VQb0FHb2ozSG40UGxUMGcrTjB1emNRVDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUxFTDgwY2Q0VDdibm5Ka2FNNlA1S3FRUTZOWHR6cVJoWU9FOWV0Rk9ucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaU1QRDZ5WlAzTkJ6eXlpajh0NGJoV28weW52WUxnMmgweldsTENxcVdsaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkcxczRhR08vbklZV0FLOEpsczR2S0ZWeTR4Q2M0aG5oUXVGWnNHZ3FVSzNKai9JaVZQOGg3QmlzVGNFOXNrVU90b0NhaHkxRHZLRmd4MGhjMXMvc0FnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA2LCJhZHZTZWNyZXRLZXkiOiI5L3JEK2JwNG5tZTVpWityOVJIclVFZjdnSGdlWWlESGhteFR6SkUzVER3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJBOVU2Z0s5X1FseUpKZHM4WHVuY1hnIiwicGhvbmVJZCI6ImIzYjM3NjM3LWNlM2UtNDYxYS05MTM2LTc2ZWFhMDBmYTkzMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmZFZHMStGTlJMRDhRMmdJMy9BSkRQbUdvZmM9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkRSSmxiMFJGSXRoVE1rRjh1a0lxdll1OW5RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjRUMVlMWjNYIiwibWUiOnsiaWQiOiI5MjMyMzcwNDU5MTk6MjVAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQXJzbGFuTUQg4oiaIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNKeWF6TEFGRU0zSjNyZ0dHQmtnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJxdVpaQzd3a1JzcmRnckQra0k3Tm84ZFlVUlJqWnNkbHgxaHBsZlRsbkJzPSIsImFjY291bnRTaWduYXR1cmUiOiJaQjhMUVFUaGRYUWI2V0lQN2dCcFVUdDJmZTRCZG01UXAvMnNRL21ha0hZMTNnOU5kbVJENlRScTFtNlhDcnZmMlZDNGtrR2h5NVZFak4wY3NRTHVCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoibjQzdXg5NW4vY0t2bjNUZFE4cXRPNzBhdkc0VWs3R1dtNXoyU09MbTZFcHBtU3dIZzkzNUV4MHVnelRsODl3aXpuLzhyUzVCZ0hrYk5kMzBhWVVxQlE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMyMzcwNDU5MTk6MjVAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYXJtV1F1OEpFYkszWUt3L3BDT3phUEhXRkVVWTJiSFpjZFlhWlgwNVp3YiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTYwMjc3OH0=' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'SamPandey001' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'Secktor-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
