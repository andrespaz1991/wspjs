const qrcode = require('qrcode-terminal');

//const { Client } = require('whatsapp-web.js');
//const client = new Client();
const { Client, LocalAuth } = require('whatsapp-web.js');

const client = new Client({
    authStrategy: new LocalAuth()
});


client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Conexión exitosa!');
});

client.on('message', message => {
	if(message.body === 'Hola Celeste') {
		client.sendMessage(message.from, 'Hola soy celeste bot');
	}
});


client.initialize();
