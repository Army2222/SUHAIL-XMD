const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_21_26_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTIxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTgxLFxuICAgICAgICAzNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDQ0LFxuICAgICAgICA3MixcbiAgICAgICAgMTMyLFxuICAgICAgICA5LFxuICAgICAgICAyOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzYsXG4gICAgICAgIDIyOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3LFxuICAgICAgICAxNixcbiAgICAgICAgMjQxLFxuICAgICAgICA0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMyxcbiAgICAgICAgODMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MyxcbiAgICAgICAgMTU1LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0NixcbiAgICAgICAgMTgzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDM4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDk1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTY3LFxuICAgICAgICA1OSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA2LFxuICAgICAgICA4MixcbiAgICAgICAgNSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAzNyxcbiAgICAgICAgNDksXG4gICAgICAgIDExLFxuICAgICAgICA2LFxuICAgICAgICAxMjksXG4gICAgICAgIDE5LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDg0LFxuICAgICAgICAxMyxcbiAgICAgICAgNDQsXG4gICAgICAgIDQzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTY4LFxuICAgICAgICA5NixcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDExLFxuICAgICAgICA2MCxcbiAgICAgICAgNDYsXG4gICAgICAgIDY3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTY5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA2OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAzLFxuICAgICAgICAxNzksXG4gICAgICAgIDgyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ2LFxuICAgICAgICA0NCxcbiAgICAgICAgMTExLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxMTVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTM1LFxuICAgICAgICA2LFxuICAgICAgICA2NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMyxcbiAgICAgICAgNixcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNyxcbiAgICAgICAgODcsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjI1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTgsXG4gICAgICAgIDg3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTc5LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTAxLFxuICAgICAgICAzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDE0MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTM3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhXU2dmamxnYWJOQVBRb0NNalYwbzJ2Uzl4YWdPdy9PVGJoVFZrdXVIMTA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInc1R3JYRmZWVDdTUUNjNjhCeTRBN2dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNmI4YzQ0N2UtNDRiZC00ZTA3LWEwYTctOGJmZDY3NGQ0M2IzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMSxcbiAgICAgIDIyLFxuICAgICAgNzQsXG4gICAgICAxMjMsXG4gICAgICAxNDIsXG4gICAgICAxODEsXG4gICAgICA2OCxcbiAgICAgIDczLFxuICAgICAgMTk3LFxuICAgICAgNDUsXG4gICAgICAyMDgsXG4gICAgICAxOTIsXG4gICAgICAyMTQsXG4gICAgICAxMDUsXG4gICAgICAxMDgsXG4gICAgICA0LFxuICAgICAgMjA2LFxuICAgICAgMjE1LFxuICAgICAgNDcsXG4gICAgICAyMTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODcsXG4gICAgICA5NyxcbiAgICAgIDI0NixcbiAgICAgIDE4OSxcbiAgICAgIDE3NCxcbiAgICAgIDE4OCxcbiAgICAgIDEwMCxcbiAgICAgIDE5MyxcbiAgICAgIDE3NCxcbiAgICAgIDEyNCxcbiAgICAgIDIwMCxcbiAgICAgIDI0NSxcbiAgICAgIDEzNixcbiAgICAgIDE5MixcbiAgICAgIDMsXG4gICAgICAyMTUsXG4gICAgICAxMzAsXG4gICAgICAyMzEsXG4gICAgICAyMDUsXG4gICAgICAyMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBODg2SDU2QlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzA4MTM5MTUzNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTA3Nzk5NDkyNzc0MTQ6NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPLzR2emdRLy96R3V3WVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZlYWtYYzZZeEVCeDJNSXRmV3R3SnVlcytOUWVPTUc0SVVNaDhnUFRkUzQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQUNJVTJMWmkxODR1Vm1ic1ZmQkFmT3Y1R2hUam5nU29XZ1YxL3dNUjg1WDZ5TFVmWFJJWVV3ZnVkMUMyL1hSdFpoR3VVSVVWbW95cFRPU21STm1XRGc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS29lVkNWR1NraXN1M3hhbU5VaEI0cDNlUUcxU0l3L1lXcDN2NXlEc04zZ1N2VkROY051VkdNTU1Bd1ZlQ3VVb1YxWVB0OXhaMVpsbklMSWRqdWdxZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzA4MTM5MTUzNzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICA0NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM1NTA3NTg2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSkJNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKQk0uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIwY0k0UXB4WHJEenpEOHpHNEszclV3R28rSk9IbEladXpTWGVrNm42dDFJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExODQ4ODE3MixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Munachi Savage",
  ownername:process.env.OWNER_NAME|| "Kontroller BOT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
