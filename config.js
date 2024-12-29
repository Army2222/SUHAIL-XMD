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

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Nigeria";
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_46_12_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEwLFxuICAgICAgICA2OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDM1LFxuICAgICAgICAzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTcyLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjM3LFxuICAgICAgICAwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg3LFxuICAgICAgICA2MCxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjE2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNTAsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2OSxcbiAgICAgICAgNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgODgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDE1MixcbiAgICAgICAgOTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTE4LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDAsXG4gICAgICAgIDYwLFxuICAgICAgICAxODAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTA1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDc0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDM1LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTgsXG4gICAgICAgIDE0LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNixcbiAgICAgICAgMixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDUzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTk1LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODEsXG4gICAgICAgIDcwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY2LFxuICAgICAgICAyNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjAyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjIxLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzIsXG4gICAgICAgIDg0LFxuICAgICAgICA4NixcbiAgICAgICAgMTk1LFxuICAgICAgICA4NCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICA1MCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICA5MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICA3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDksXG4gICAgICAgIDIxMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQyXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHRWI2WStxNDB1WU5tT1h4eDJuTTJ2bVFKTFhhVEp5OGQ1aWpxQVVHdG1rPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwODEzOTE1MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjYwRDMwODFDOTVFMTM2MjcwMUNFQTExNTcxRTVBRUFEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNTUxMjQxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJmMzQ2ai1zSFJmbTYxZG9CbjFsTFJBXCIsXG4gIFwicGhvbmVJZFwiOiBcImIxYWEyYzM0LTJiNzktNDdhMC1hNzViLWZlMzMzMTZjNzEwYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjMsXG4gICAgICAyMTIsXG4gICAgICAyMDEsXG4gICAgICAyMCxcbiAgICAgIDIxLFxuICAgICAgNzcsXG4gICAgICAxNDQsXG4gICAgICAxNTEsXG4gICAgICA4NCxcbiAgICAgIDE3NSxcbiAgICAgIDksXG4gICAgICAxMzEsXG4gICAgICAxODYsXG4gICAgICAyMDUsXG4gICAgICAxNzAsXG4gICAgICAzOCxcbiAgICAgIDIzMyxcbiAgICAgIDE2LFxuICAgICAgOTQsXG4gICAgICAxNjZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTU2LFxuICAgICAgMzYsXG4gICAgICAxMCxcbiAgICAgIDMxLFxuICAgICAgMTg1LFxuICAgICAgMTQ0LFxuICAgICAgMTY4LFxuICAgICAgNixcbiAgICAgIDExOCxcbiAgICAgIDY2LFxuICAgICAgMTE0LFxuICAgICAgMixcbiAgICAgIDU3LFxuICAgICAgMjU1LFxuICAgICAgMTE0LFxuICAgICAgMjU1LFxuICAgICAgMTQ4LFxuICAgICAgMTg3LFxuICAgICAgOTMsXG4gICAgICAxNDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNDNQWUFETEhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwODEzOTE1Mzc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjEwNzc5OTQ5Mjc3NDE0OjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEQ0dnpnUTA2TEh1d1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI2ZWFrWGM2WXhFQngyTUl0Zld0d0p1ZXMrTlFlT01HNElVTWg4Z1BUZFM0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlJhV1RqelAyVEx2WWcyc3d1YXBkWXgrdEQyNFhOVFM5VWRkUStrUHhmOHdxK1B6VG9yVTNFMmU5d3RwWUFyL3F1OENucmY2U2JVaDdpR2hFZnFqK0FBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhPLzRFNGUxY2hWNHJjZUtJSWFjYk9pNDRMZjNjYkhzVDVDUkxKNi9EQ3VBem5pU0Z6T3N6Yzh6VkxKNVgzUUxTc3AzYSsrS3BEQm5DWE5lNXlEbGdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwODEzOTE1Mzc6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNTUxMjQwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpCTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSkJNLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMGNJNFFweFhyRHp6RDh6RzRLM3JVd0dvK0pPSGxJWnV6U1hlazZuNnQxST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTg0ODgxNzIsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "😈 Savage 😈",
  ownername:process.env.OWNER_NAME|| "KONTROLLER BOT 🖐🏼🫂",


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
