const {
  WAConnection,
	MessageType,
	Presence,
	MessageOptions,
	Mimetype,
	WALocationMessage,
	WA_MESSAGE_STUB_TYPES,
	WA_DEFAULT_EPHEMERAL,
	ReconnectMode,
	ProxyAgent,
	ChatModification,
	GroupSettingChange,
	waChatKey,
	mentionedJid,
	processTime,
	Browsers
} = require("@adiwajshing/baileys");
const { getBuffer, color, getGroupAdmins, createExif, getRandom, modStick, fetchJson } = require("./lib/function.js");
const { spawn, exec, execSync } = require("child_process");
const crypto = require('crypto')
const speed = require('performance-now');
const ig = require('insta-fetcher');
const hx = require("hxz-api");
const fs = require("fs");
const ffmpeg = require('fluent-ffmpeg');
const yts = require( 'yt-search');
const request = require('request');
const axios = require("axios");
const moment = require("moment-timezone");
const { isFiltered, addFilter } = require('./lib/antispam')
const { RESPOSTAS } = require ('./respostas')

        //INFO
owner = ["553195703379@s.whatsapp.net","553192941210@s.whatsapp.net"];
mns = "```";
battery = {
  persen: "" || "O carai, não consegui detectar",
  charger: "" || false
};
blocked = [];
roomttt = [];
defttt = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"];
antideleted = true;
self = false;

        //DATA...HORA
function DATACOMPLETA(){
  myMonths = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
	myDays = ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sabado'];
	var tgl = new Date();
	var day = tgl.getDate();
	bulan = tgl.getMonth();
	var thissDay = tgl.getDay(),
	thisDay = myDays[thissDay];
	var yy = tgl.getYear();
	var year = (yy < 1000) ? yy + 1900 : yy;
	return `${thisDay}, dia ${day} de ${myMonths[bulan]} de ${year}`;
}
function HORAEXATA(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} horas ${pad(minutes)} minutos ${pad(seconds)} segundos`
}

const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " dia(s), " : " Dia(s), ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " hora(s), " : " Hora(s), ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minuto(s), " : " Minuto(s), ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " segundo(s)" : " segundo(s)") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};


const time2 = moment().tz("America/Sao_Paulo").format("HH:mm:ss");
if (time2 < "24:59:00") {
  var HORARIOS = "Boa noite";
}
if (time2 < "19:00:00") {
  var HORARIOS = "Boa noite";
}
if (time2 < "18:00:00") {
  var HORARIOS = "Boa tarde ";
}
if (time2 < "15:00:00") {
  var HORARIOS = "Boa tarde";
}
if (time2 < "11:00:00") {
  var HORARIOS = "Bom dia";
}
if (time2 < "05:00:00") {
  var HORARIOS = "Boa madrugada";
}


module.exports = (LorranX) => {
  LorranX.on("group-update", async(mem) => {
    metadata = await LorranX.groupMetadata(mem.jid);
    if (mem.announce == "false") {
      LorranX.sendMessage(metadata.id, `*[ Grupo Aberto ]* \n\n${mns}Grupo abrido pelo corno do adm${mns}`, MessageType.text);
      console.log(`[ GROUP OPENED ]\ngroup : ${metadata.subject}`);
    } else if (mem.announce == "true"){
      LorranX.sendMessage(metadata.id, `*[ Grupo Fechado ]* \n\n${mns}Modo serio grupo fechado pelo adm${mns}`, MessageType.text);
      console.log(`[ GROUP CLOSED ]\ngroup : ${metadata.subject}`);
    }
  });
  LorranX.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist){
      blocked.push(i.replace("c.us","s.whatsapp.net"));
    }
  });
  LorranX.on("CB:action,,battery", (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batteryLevel = parseInt(batteryLevelStr);
    battery.persen = `${batteryLevel}%`;
    battery.charger = json[2][0][1].live;
  });
  LorranX.on("message-delete",async(mek) => {
    if (mek.key.remoteJid == "status@broadcast") return;
    if (!mek.key.fromMe && mek.key.fromMe) return;
    if (antideleted === false) return;
    mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
    let date = new Date();
    let region = 'id';
    let getTime = new Date(0).getTime() - new Date('1 Januari 2021').getTime();
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(((newdate * 1) + getTime) / 84600000) % 5];
    let localweek = newdate.toLocaleDateString(region, {
      weekday: 'long'
    });
    let localday = newdate.toLocaleDateString(region, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    const type = Object.keys(mek.message)[0];
    LorranX.sendMessage(mek.key.remoteJid, `*[ ANTI DELETE ]*\n\n*nama* : @${mek.participant.split("@")[0]}\n*jam* : ${moment.localweek.localday}\n*Type* : ${type}`, MessageType.text, {quoted:mek.message, contextInfo: { "mentionedJid": [mek.participant]}})
  });
  LorranX.on("chat-update", async(mek) => {
    try {
      if (!mek.hasNewMessage) return;
      mek = mek.messages.all()[0];
      if (!mek.message) return
      if (mek.key.id.startsWith('3EB0') && mek.key.id.length === 12) return
      //if (mek.key.fromMe) return
      if (mek.key && mek.key.remoteJid == "status@broadcast") return;
      global.blocked;
      mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message;
      const content = JSON.stringify(mek.message);
      const from = mek.key.remoteJid;
      const { text, extendedText, contact, location, liveLocation, image, video, gif, sticker, document, audio, product, buttonsMessage, } = MessageType;
      const type = Object.keys(mek.message)[0];
      const cmd =
        type === "conversation" && mek.message.conversation
          ? mek.message.conversation
          : type == "imageMessage" && mek.message.imageMessage.caption
          ? mek.message.imageMessage.caption
          : type == "videoMessage" && mek.message.videoMessage.caption
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" && mek.message.extendedTextMessage.text
          ? mek.message.extendedTextMessage.text
          : type == "buttonsResponseMessage" && mek.message[type].selectedButtonId
          ? mek.message[type].selectedButtonId
          : "";
      const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '.'
      body = 
        type === 'listResponseMessage' && mek.message.listResponseMessage.title 
          ? mek.message.listResponseMessage.title 
          : type == 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId
          ? mek.message.buttonsResponseMessage.selectedButtonId
          : type == "conversation" && mek.message.conversation.startsWith(prefix)
          ? mek.message.conversation
          : type == "imageMessage" &&
            mek.message.imageMessage.caption.startsWith(prefix)
          ? mek.message.imageMessage.caption
          : type == "videoMessage" &&
            mek.message.videoMessage.caption.startsWith(prefix)
          ? mek.message.videoMessage.caption
          : type == "extendedTextMessage" &&
            mek.message.extendedTextMessage.text.startsWith(prefix)
          ? mek.message.extendedTextMessage.text
          : "";
      const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
      listbut = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
      var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
      const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
      const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
      const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
      const args = body.trim().split(/ +/).slice(1)
      const time = moment.tz('America/Sao_Paulo').format('DD/MM HH:mm:ss')
      const isCmd = body.startsWith(prefix)
      const arg = budy.slice(command.length + 2, budy.length)
      const q = args.join(' ')
      const botNumber = LorranX.user.jid
      const isGroup = from.endsWith("@g.us")
      const sender = mek.key.fromMe
        ? LorranX.user.jid
        : isGroup
        ? mek.participant
        : mek.key.remoteJid
      const totalchat = LorranX.chats.all()
      const groupMetadata = isGroup ? await LorranX.groupMetadata(from) : ''
      const groupName = isGroup ? groupMetadata.subject : ''
      const groupId = isGroup ? groupMetadata.jid : ''
      const groupMembers = isGroup ? groupMetadata.participants : ''
      const groupDesc = isGroup ? groupMetadata.desc : ''
      const groupOwner = isGroup ? groupMetadata.owner : ''
      const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
      const isOwner = owner.includes(sender);
      const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
      const isGroupAdmins = groupAdmins.includes(sender) || false
      const conts = mek.key.fromMe ? LorranX.user.jid : LorranX.contacts[sender] || { notify: jid.replace(/@.+/, '') }
      const pushname = mek.key.fromMe ? LorranX.user.name : conts.notify || conts.vname || conts.name || '-'
      const more = String.fromCharCode(8206)
      const readMore = more.repeat(4001)

      if (self) {
        if (!isOwner || !botNumber) return
      }
      const mentions = (teks, memberr, id) => {
				(id == null || id == undefined || id == false) ? LorranX.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : LorranX.sendMessage(from, teks.trim(), extendedText, {quoted: mek, contextInfo: {"mentionedJid": memberr}})
			}
      idttt = [];
      players1 = [];
      players2 = [];
      turn = [];
      for (let i of roomttt) {
        idttt.push(i.id)
        players1.push(i.player1)
        players2.push(i.player2)
        turn.push(i.turn)
      }
      const isTTT = isGroup ? idttt.includes(from) : false
	    const isPlayer1 = isGroup ? players1.includes(sender) : false
      const isPlayer2 = isGroup ? players2.includes(sender) : false
      const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
      }

      const reply = (teks) => {
        LorranX.sendMessage(from, teks, text, {quoted:mek})
      }
      const fakethumb = (teks, yes) => {
            LorranX.sendMessage(from, teks, image, {thumbnail:fs.readFileSync('./lib/image/fake.jpeg'),quoted:mek,caption:yes})
        }

        //VERIFICADOS

        const produtoverify = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": fs.readFileSync('./lib/image/verificado.png') }, "title": `VERIFICANDO...`, "productImageCount": 9999 }, "businessOwnerJid": `0@s.whatsapp.net`}}}
        const verificadocarrinho ={"key": {   "fromMe": false,"participant":"0@s.whatsapp.net",   "remoteJid": "556181496039-1625944593@g.us"  }, "message": {orderMessage: {itemCount: 999999,status: 200, thumbnail: fs.readFileSync(`./lib/image/verificado.png`), surface: 200, message: `⊳ Comando : ${prefix}${command}\n⊳${HORARIOS} ${pushname}`, orderTitle: '©Bot', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
        const verificadostts = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `${HORARIOS} ${pushname}`} } }
        const zepi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `
᱅ ${HORARIOS} ${pushname}\n᱅ Comando : ${prefix}${command}`} } }
        const magago = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `🦧`} } }
        const winner = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "caption": `𝙋𝘼𝙍𝘼𝘽𝙀𝙉𝙎 🥳`} } }
        const vbanido = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `Usuario banido detectado 🚫`, jpegThumbnail: fs.readFileSync('./lib/image/banido.png') } } }

        //BOTÃO NORMAL
      const sendButtonMsg = (text, footer, but = [], options = {}) => {
        const buttonMessage = {
          contentText: text,
          footerText: footer,
          buttons: but,
          headerType: 1
        };
        LorranX.sendMessage(
          from,
          buttonMessage,
          buttonsMessage,
          options
        )
      }
        ///BOTÃO DE IMAGEM
const sendButImage = async(from, text1, desc1, gam1, but = [], options = {}) => {
  kma = gam1
  mhan = await LorranX.prepareMessage(from, kma, image)
  const buttonMessages = {
  imageMessage: mhan.message.imageMessage,
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 4
  };
  LorranX.sendMessage(
    from,
    buttonMessages,
    buttonsMessage,
    options
    )
  }
        ///BOTÃO DE VIDEO
  const sendButVideo = async(from, text1, desc1, vid1, but = [], options = {}) => {
  kma = vid1
  mhan = await LorranX.prepareMessage(from, kma, video,)
  const buttonMessages = {
  videoMessage: mhan.message.videoMessage,
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 5
  }
  LorranX.sendMessage(from,
    buttonMessages,
    buttonsMessage,
    options
    )
  }
        ///BOTÃO DE LOC
  const sendButLocation = async (from, text1, desc1, gam1, but = [], options = {}) => {
  kma = gam1
  mhan = await LorranX.prepareMessage(from, kma, location)
  const buttonMessages = {
  locationMessage: mhan.message.locationMessage,
  contentText: text1,
  footerText: desc1,
  buttons: but,
  headerType: 6
  }
  LorranX.sendMessage(from,
    buttonMessages,
    MessageType.buttonsMessage,
    options
    )
  }
      
      const sendMediaURL = async(url, text="", mids=[]) =>{
        if(mids.length > 0){
          text = normalizeMention(to, text, mids)
        }
        const fn = Date.now() / 10000;
        const filename = fn.toString()
        let mime = ""
        var download = function (uri, filename, callback) {
          request.head(uri, function (err, res, body) {
            mime = res.headers['content-type']
            request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
          });
        };
        download(url, filename, async function () {
          console.log('done');
          let media = fs.readFileSync(filename)
          let type = mime.split("/")[0]+"Message"
          if(mime === "image/gif"){
            type = MessageType.video
            mime = Mimetype.gif
          }
          if(mime.split("/")[0] === "audio"){
            mime = Mimetype.mp4Audio
          }
          LorranX.sendMessage(from, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
          fs.unlinkSync(filename)
        });
      };
      const sendWebp = async(from, url) => {
        var names = Date.now() / 10000;
        var download = function (uri, filename, callback) {
            request.head(uri, function (err, res, body) {
                request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
            });
        };
        download(url, './temp' + names + '.png', async function () {
            let ajg = './temp' + names + '.png'
            let palak = './temp' + names + '.webp'
            exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                let media = fs.readFileSync(palak)
               LorranX.sendMessage(from, media, MessageType.sticker,{quoted:mek})
                fs.unlinkSync(ajg)
                fs.unlinkSync(palak)
            });
        });
    }


            
      const isQuoted = type == "extendedTextMessage"
      const isMedia = type === "imageMessage" || type === "videoMessage";
      const isQuotedImage =
        type === "extendedTextMessage" && content.includes("imageMessage");
      const isQuotedVideo =
        type === "extendedTextMessage" && content.includes("videoMessage");
      const isQuotedAudio =
        type === "extendedTextMessage" && content.includes("audioMessage");
      const isQuotedSticker =
        type === "extendedTextMessage" && content.includes("stickerMessage");
      
      
      if (isCmd && !isGroup) console.log("《",color("COMANDO ENVIADO AS","lime"),time2,color(command,"lime"),"ENVIADO POR",color(sender.split("@")[0],"cyan"))
      if (isCmd && isGroup) console.log("《",color("COMANDO ENVIADO AS","lime"),time2,color(command,"lime"),"ENVIADO POR",color(sender.split("@")[0],"cyan"),"NO GRUPO",color(groupName,"yellow"))
      if (listbut) console.log("《",color("COMANDO ENVIADO AS","lime"),time2,color(listbut,"lime"),"ENVIADO POR",color(sender.split("@")[0],"cyan"))
      
        //ANTI-SPAM
      if (isCmd && isFiltered(from) && !isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff = {
                  text:  `Sem flood @${sender.split('@')[0]}\n\nAguarde 3 segundos antes de usar outro comando`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff)}
               
        if (isCmd && isFiltered(from) && isGroup) {
        console.log(color('SPAM', 'red'), color(moment.tz('America/Sao_Paulo').format('HH:mm:ss'), 'yellow'), color(`${command}`), 'DE:', color(pushname))
        const ff1 = {
                  text:  `Sem flood @${sender.split('@')[0]}\n\nAguarde 3 segundos antes de usar outro comando`,
                    contextInfo: {
                        mentionedJid: [sender]
                    }
                 }
        return reply(ff1)}  

        //SILENCIAR BOT EM GRUPOS

        if (isMuted){
          if (!isGroupAdmins) return
}

        //COMANDOS DE LISTA
        if (listbut == 'Salgados' || command == `${prefix}start`) {
          var menusalgados = `
*↭  ${HORARIOS} ${pushname}*

Este é o menu de salgados

aqui você encontra informações sobre preço e pode fazer encomendas`;
menuimg = fs.readFileSync("./lib/image/modmenu.jpg")
sendButImage(from, menusalgados, `Produtos Kairós BOT`, menuimg,[{
      buttonId: `${prefix}1`,
      buttonText: {
      displayText: "preços"
      },
      type: 1
      },{
      buttonId: `${prefix}1`,
      buttonText: {
      displayText: "script do bot"
      },
      type: 1
      }])
      }
if (listbut == 'Modificadores de Video' || command == `${prefix}start`) {
  var Menuvideo = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}

*↭  ${HORARIOS} ${pushname}*

║╭──❉ * ⛤𝙈𝙤𝙙𝙞𝙛𝙞𝙘𝙖𝙙𝙤𝙧𝙚𝙨 𝙙𝙚 𝙫𝙞𝙙𝙚𝙤⛤ * ❉──

║│↭_*   [ *${prefix}slowv* ] 
║│↭_*   [ *${prefix}acelerarv* ]
║│↭_*   [ *${prefix}reversev* ]

║│

║| ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────`;
menuimg = fs.readFileSync("./lib/image/modmenu.jpg")
sendButImage(from, Menuvideo, `@LorranX`, menuimg,[{
        buttonId: `${prefix}verify`,
        buttonText: {
          displayText: "Verify"
        },
        type: 1
        },{
      buttonId: `${prefix}owner`,
      buttonText: {
      displayText: "Dono"
      },
      type: 1
      },{
      buttonId: `${prefix}github`,
      buttonText: {
      displayText: "script do bot"
      },
      type: 1
      }])
      }
        if (listbut == 'Owner Menu' || command == `${prefix}start`) {
          var Menueu = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}

*↭  ${HORARIOS} ${pushname}*

║╭──❉ * ⛤𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙙𝙤 𝙥𝙖𝙥𝙖𝙞⛤ * ❉──

║│↭_*   [ *${prefix}block* ] 
║│↭_*   [ *${prefix}unblock* ]
║│↭_*   [ *${prefix}creatgroup* ] 
║│↭_*   [ *${prefix}join* ] 
║│↭_*   [ *${prefix}setpp* ] 
║│↭_*   [ *${prefix}setname* ] 
║│↭_*   [ *${prefix}setbio* ] 
║│↭_*   [ *${prefix}delchat* ] 
║│↭_*   [ *${prefix}selfmode* ]
║│↭_*   [ *${prefix}desligar* ]
║│↭_*   [ *${prefix}kickall* ]
║│↭_*   [ *${prefix}clearall* ]

║│

║| ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────`;
menuimg = fs.readFileSync("./lib/image/ownermenu.jpg")
sendButImage(from, Menueu, `@LorranX`, menuimg,[{
        buttonId: `${prefix}verify`,
        buttonText: {
          displayText: "Verify"
        },
        type: 1
        },{
      buttonId: `${prefix}owner`,
      buttonText: {
      displayText: "Dono"
      },
      type: 1
      },{
      buttonId: `${prefix}github`,
      buttonText: {
      displayText: "script do bot"
      },
      type: 1
      }])
      }
      if (listbut == 'Menu' || command == `${prefix}start`) {
        var Menu = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *Info carregador* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}

*↭  ${HORARIOS} ${pushname}*

║╭──❉ * ⛤𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨⛤ * ❉──

║│↭_*   [ *${prefix}ping* ] 
║│↭_*   [ *${prefix}probabilidade* ]
║│↭_*   [ *${prefix}%gay* ] 
║│↭_*   [ *${prefix}twitter* ]
║│↭_*   [ *${prefix}ig* ]
║│↭_*   [ *${prefix}ytmp4* ]
║│↭_*   [ *${prefix}ytmp3* ]
║│↭_*   [ *${prefix}play* ] 
║│↭_*   [ *${prefix}pvideo* ] 
║│↭_*   [ *${prefix}carteira* ] 
║│↭_*   [ *${prefix}pix* ] 
║│↭_*   [ *${prefix}ted* ] 
║│↭_*   [ *${prefix}sider* ] 
║│↭ _*  [ *${prefix}sticker* ] 
║│↭_*   [ *${prefix}attp* ] 
║│↭_*   [ *${prefix}rename* ] 
║│↭_*   [ *${prefix}dado* ] 
║│↭_*   [ *${prefix}jv* ] 
║│↭_*   [ *${prefix}tourl* ] 
║│↭_*   [ *${prefix}toimg* ] 
║│↭_*   [ *${prefix}togif* ] 
║│↭_*   [ *${prefix}tomp3* ] 
║│↭_*   [ *${prefix}listadmin* ] 
║│ 

║│

║ | ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────
`;
menuimg = fs.readFileSync("./lib/image/menu1.jpg")
sendButImage(from, Menu, `@LorranX`, menuimg,[{
        buttonId: `${prefix}verify`,
        buttonText: {
          displayText: "Verify"
        },
        type: 1
        },{
      buttonId: `${prefix}owner`,
      buttonText: {
      displayText: "Dono"
      },
      type: 1
      },{
      buttonId: `${prefix}github`,
      buttonText: {
      displayText: "script do bot"
      },
      type: 1
      }])
      } else if (listbut == "ChangeLog") {
        const medsos = `
  *ᨁ 𝑪𝑯𝑨𝑵𝑮𝑬𝑳𝑶𝑮*
  • Ultima atualização: 07/10/2021 as 23:16
  • Ultimas alterações: Adicionado tourl, adicionados menus com imagens, adicionadas funções com botão de video, adicionados dados animados, adicionado jogo da velha (PENDENTE DE ALGUMAS CORREÇÕES), corrigidos problemas e erros
  • Possiveis proximas Atualizações: Correções, adicionar novos recusos relacionados a leveling e dinheiro, adicionar welcome, anti-link, anti-fake, adicionar funções de armazenamento
  • Versão atual: 1.0.5
  • % de conclusão: 45%
`
        LorranX.sendMessage(from, fs.readFileSync("./lib/image/changelog.jpg"), image, {quoted: mek, caption: medsos})
      }
      if (listbut == 'Admin Menu' || command == `${prefix}start`) {
        var MenuAdmin = `
╔═══════════════════
║  【⛤ꦿ𝙇𝙤𝙧𝙧𝙖𝙣 𝙈𝙚𝙣𝙪⛤
╠═══════════════════
║│ *↭ Sobre o Bot*
║ *Bateria* : ${battery.persen}
║ *charger* : ${battery.charger == true ? "Carregando 🔋" : "Fora do carregador"}
║ *Marca do celular* : ${LorranX.user.phone.device_manufacturer}
║ *Nome do servidor* : ${LorranX.browserDescription[0]}
║ *Servidor* : ${LorranX.browserDescription[1]}
║ *Versão* : ${LorranX.browserDescription[2]}
║ *Modelo do celular* : ${LorranX.user.phone.device_model}
└ *Versão do Whatsapp* : ${LorranX.user.phone.wa_version}
        
*↭  ${HORARIOS} ${pushname}*
        
║╭──❉ * ⛤𝘾𝙤𝙢𝙖𝙣𝙙𝙤𝙨 𝙖𝙙𝙢𝙞𝙣⛤ * ❉──
        
║│↭_*   [ *${prefix}leave* ] 
║│↭_*   [ *${prefix}setdesc* ]
║│↭_*   [ *${prefix}setnamegp* ] 
║│↭_*   [ *${prefix}setig* ] 
║│↭_*   [ *${prefix}promoteall* ] 
║│↭_*   [ *${prefix}promote* ] 
║│↭_*   [ *${prefix}demote* ]
║│↭_*   [ *${prefix}demoteall* ]
║│↭_*   [ *${prefix}revokelink* ]
║│↭_*   [ *${prefix}grp* ] 
║│↭_*   [ *${prefix}leveling* ] 
║│↭_*   [ *${prefix}hidetag* ]
║│↭_*   [ *${prefix}tagimg* ]
║│↭_*   [ *${prefix}tagsticker* ]
║│↭_*   [ *${prefix}kick* ] 
║│↭_*   [ *${prefix}add* ] 
║│↭ _*  [ *${prefix}linkgp* ] 
║│↭ _*  [ *${prefix}mute* ] 
        
║│
        
║| ↭_*  *[Meu criador]*
║https://wa.me/+553195703379
╰───────────`;
menuimg = fs.readFileSync("./lib/image/adminmenu.jpg")
sendButImage(from, MenuAdmin, `@LorranX`, menuimg,[{
        buttonId: `${prefix}verify`,
        buttonText: {
          displayText: "Verify"
        },
        type: 1
        },{
      buttonId: `${prefix}owner`,
      buttonText: {
      displayText: "Dono"
      },
      type: 1
      },{
      buttonId: `${prefix}github`,
      buttonText: {
      displayText: "script do bot"
      },
      type: 1
      }])
      }
        //SEM PREFIX
    switch(is) {
      case 'bot':
buf = fs.readFileSync(`./database/mp3/oi.mp3`)
LorranX.sendMessage(from, buf, audio, {
mimetype: 'audio/mp4', quoted: mek, ptt: true
})
break;
    }
        //CASE
      switch (command) {
        //MENUS
        case 'help':
        case 'menu':
          var menulist = LorranX.prepareMessageFromContent(from, {
            "listMessage" :{
              "title": `${HORARIOS} ${pushname}\n\nSou o assistente de atendimento da Produtos Kairós, em que posso te ajudar?`,
              "description": ` `,
              "buttonText": "Opções",
              "listType": "SINGLE_SELECT",
              "sections": [{
                "title": `Abaixo você encontrara os meus menus`,
                "rows": [{
                    "title": "Salgados",
                    "rowId": "0",
                    "description": ""
                  },{
                    "title": "Doces",
                    "rowId": "0",
                    "description": ""
                  },{
                    "title": "Bolos",
                        "rowId": "0",
                        "description": ""
                  }]
              }]
            }
          }, {})
          LorranX.relayWAMessage(menulist, {waitForAck: false})
          addFilter(from)
          break;
        //END MENUS   
        case '1':
         LorranX.sendMessage(from, RESPOSTAS.preçoss, text, {quoted: verificadostts})
         break
        case 'figu':
        case 'figurinha':
        case 'sticker':
          case 'f':
          var a = "BOT DO LORRAN";
          var b = "ALPHA VERSION";
          if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
          const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
           media = await LorranX.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          LorranX.sendMessage(from, 'Deu errado carai', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          LorranX.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out) 
          } else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
          const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
          const media = await LorranX.downloadAndSaveMediaMessage(encmedia)
          await createExif(a,b)
          out = getRandom('.webp')
          ffmpeg(media)
          .on('error', (e) => {
          console.log(e)
          LorranX.sendMessage(from, 'Deu errado carai', 'conversation', { quoted: mek })
          fs.unlinkSync(media)
          })
          .on('end', () => {
          _out = getRandom('.webp')
          spawn('webpmux', ['-set','exif','./stick/data.exif', out, '-o', _out])
          .on('exit', () => {
          LorranX.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
          fs.unlinkSync(out)
          fs.unlinkSync(_out)
          fs.unlinkSync(media)
          })
          })
          .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
          .toFormat('webp')
          .save(out)       
          } else if (isQuotedSticker){
            const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            media = await LorranX.downloadAndSaveMediaMessage(encmedia)
            createExif(a, b);
            modStick(media, LorranX, mek, from)
          } else {
          reply(`Pra criar figurinhas c tem que marcar uma imagem ou video de ate 10 segundos com ${prefix}sticker`)
          }
          addFilter(from)
          break;
          case 'sider': 
        if (!isGroup) return reply("Este comando so pode ser usado em grupos")
        if (!isQuoted) return reply(`Coe macaco, c tem que marcar alguma mensagem minha`)
LorranX.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
.then((res) => {
let anu = []
let txt = `• *Lido por*\n\n`
for (let i = 0; i < res.reads.length; i++){
anu.push(res.reads[i].jid)
txt += `• @${res.reads[i].jid.split("@")[0]}\n`
txt += `• Horario em que vizualizou : ${moment(`${res.reads[i].t}` * 1000).tz('America/Sao_Paulo').format('HH:mm:ss')}\n\n`
}         
mentions(txt, anu, true)
})
.catch((err) => reply('So consigo ver quem vizualizou as *minhas* mensagens'))
break;
          case 'hidetag':
            if (!isGroup) return reply("Este comando so pode ser usado em grupos")
            if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
					var value = body.slice(9)
					var group = await LorranX.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					LorranX.sendMessage(from, options, text, {quoted: verificadostts})
          addFilter(from)
					break;
          case 'tagsticker':
            case 'tagfig': 
            if (!isGroup) return reply("Este comando so pode ser usado em grupos")
            if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
                    if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
                        const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await LorranX.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        LorranX.sendMessage(from, ini_buffer, sticker, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`C tem que marcar uma figurinha`)
                    }
                    addFilter(from)
                    break;
                    case 'tagimg':
                      if (!isGroup) return reply("Este comando so pode ser usado em grupos")
                      if (!isGroupAdmins) return reply("Este comadno so pode ser usado pelos adms do grupo")
                    if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
                        const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
                        filePath = await LorranX.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
                        var value = args.join(" ")
                        var group = await LorranX.groupMetadata(from)
                        var member = group['participants']
                        var mem = []
                        member.map(async adm => {
                            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                        })
                        var options = {
                            contextInfo: { mentionedJid: mem },
                            quoted: mek
                        }
                        ini_buffer = fs.readFileSync(filePath)
                        LorranX.sendMessage(from, ini_buffer, image, options)
                        fs.unlinkSync(filePath)
                    } else {
                        reply(`C tem que marcar uma imagem`)
                    }
                    addFilter(from)
                    break;
          case 'delete':
			    	case 'del':
              if (!isGroupAdmins) return reply("Este comando so pode ser usado pelos adms do grupo")
						LorranX.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
            addFilter(from)
						break;
        case 'join':
          case 'entrar':
          if (args.length === 0 ) return reply(`Pra eu entrar em um grupo c tem que usar um link valido\nExemplo: ${prefix}join _https://chat.whatsapp.com/acasxxzdsad2_`)
          if (!isOwner)return reply("Você não é meu papai")
          var link = body.slice(6)
          res = link.replace("https://chat.whatsapp.com/", "");
          done = await LorranX.acceptInvite(res)
          reply(`Pronto papai, entrei nesse grupo ai`)
          break;
            case 'desligar':
if (!isOwner) return reply('Você não e meu papai 😡')
reply('Bot desligado')
setTimeout(() => {
LorranX.close()
}, 3000)
break;

        
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
};