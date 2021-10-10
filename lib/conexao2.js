const { 
  WAConnection,
  MessageType,
  Mimetypeb
} = require('@adiwajshing/baileys');
let qrcode = require('qrcode');
const fs = require("fs");

listsecubot = [];

const sejaobot = async (reply, client, id) => {
  conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2123, 8];
  conn.browserDescription = [ 'LorranBot2', '', '3.0' ];
  conn.on('qr', async qr =>{
    let bot = await qrcode.toDataURL(qr, { scale: 8 });
    let buffer = new Buffer.from(bot.replace('data:image/png;base64,', ''), 'base64');
    bot = await client.sendMessage(id,buffer,MessageType.image,{caption:'Pro bot rodar no seu numero basta escanear o QRCode acima'});
    setTimeout(() => {
     	client.deleteMessage(id, bot.key);
    },30000);
  });
  conn.on('connecting', () => {
    client.sendMessage(id, "*[ BOT ]* _To tentando conectar_", MessageType.text);
  });
  conn.on('open', () => {
    reply("*[ BOT ]* _conectado_");
    reply("```lembre-se que essa é apenas uma conexão secundaria, caso o bot principal por algum motivo pare de funcionar o seu tambem ira parar```");
  });
  await conn.connect({timeoutMs: 30 * 1000});
  this.listsecubot.push(conn.user);
  require('../index.js')(conn);
};

const stopbot = (reply) => {
	conn = new WAConnection();
	conn.close();
	reply('Pronto, todos os bots secundarios foram parados');
};

module.exports = {
	sejaobot,
	stopbot,
	listsecubot
};