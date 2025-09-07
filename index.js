require('./lib/lowdb/adapters/settings')
const { modul } = require('./module');
const moment = require('moment-timezone');
const { loadBotSettings, saveBotSettings, getAutoViewStatus, markBotLinked, getUptime, getBotJid, hasConnectionMessageBeenSent } = require('./lib/uptime'); // Adjust the path if needed
const { baileys, boom, chalk, fs, figlet, FileType, path, pino, process, PhoneNumber, axios, yargs, _ } = modul;
const { Boom } = boom
const {
	default: XeonBotIncConnect,
	BufferJSON,
	PHONENUMBER_MCC,
	initInMemoryKeyStore,
	DisconnectReason,
	AnyMessageContent,
	useMultiFileAuthState,
	delay,
	fetchLatestBaileysVersion,
	generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    jidDecode,
    makeCacheableSignalKeyStore,
    getAggregateVotesInPollMessage,
    proto
} = require("baileys")
const { makeInMemoryStore } = require("baileys");
const cfonts = require('cfonts');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const NodeCache = require("node-cache")
const { parsePhoneNumber } = require("libphonenumber-js")
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
const makeWASocket = require("baileys").default
const Pino = require("pino")
const readline = require("readline")
const colors = require('colors')
const { start } = require('./lib/spinner')
const { uncache, nocache } = require('./lib/loader')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, await, sleep, reSize } = require('./lib/myfunc')
// --- START OF NEW CODE FOR GITHUB AUTO-UPDATE ---
// Ensure axios and fs are available for the update function
// Note: axios and fs are already in 'modul' but explicitly requiring here
// ensures they are immediately ready for the update function.
// If you encounter an error like 'axios is not defined', uncomment these:
// const axios = require('axios');
// const fs = require('fs');

// Function to update shadow.js from GitHub
async function updateSparkJs() {
    const githubRawUrl = 'https://raw.githubusercontent.com/FAMOUS-TECH-DEV/SHADOW-XMD-V1/refs/heads/master/shadow.js';
    const localFilePath = './shadow.js';

console.log(chalk.blue(`[INSTALLING]SHADØW-XMD📥`));
   
    try {
        const response = await axios.get(githubRawUrl);
        const githubContent = response.data;

        // Read current local file content, or treat as empty if it doesn't exist
        let currentLocalContent = '';
        if (fs.existsSync(localFilePath)) {      
            currentLocalContent = fs.readFileSync(localFilePath, 'utf8');
        }

        if (currentLocalContent.trim() !== githubContent.trim()) { // Using .trim() for robust comparison
            fs.writeFileSync(localFilePath, githubContent, 'utf8');
            console.log(chalk.red(`[INSTALLED] SHADØW-XMD✅`));
        } else {
            console.log(chalk.blue(`[SHADØW-XMD] LURKS IN THE SHADØWS🎭. . .`));
        }
    } catch (error) {
        console.error(chalk.red(`Error updating ${localFilePath} from GitHub:`, error.message));
    }
}
// --- END OF NEW CODE FOR GITHUB AUTO-UPDATE ---

const prefix = '.',
// Removed default phoneNumber value. It's only used temporarily for pairing code input now.
phoneNumber = '-'
global.db = JSON.parse(fs.readFileSync('./database/database.json'))
if (global.db) global.db = {
sticker: {},
database: {},
game: {},
others: {},
users: {},
chats: {},
settings: {},
...(global.db || {})
}
global.sessionName = 'session' // <--- Correctly placed!

const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")

const useMobile = process.argv.includes("--mobile")
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))

const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const question = (text) => new Promise((resolve) => rl.question(text, resolve))
// --- START OF MODIFIED CODE FOR SHADOW.JS LOADING ---
// Ensure shadow.js is updated from GitHub before it's loaded
async function LordVoltageInd() { // LordVoltageInd needs to be async to use await
    await updateSparkJs(); // <--- This calls the update function first
    require('./shadow.js'); // <--- Then shadow.js is required (the updated version)
    nocache('../shadow.js', module => console.log(color('[ CHANGE ]', 'cyan'), color(`'${module}'`, 'cyan'), 'Updated'));
// --- END OF MODIFIED CODE FOR SHADOW.js LOADING ---

// --- MODIFIED CODE BLOCK: LOAD SETTINGS, AUTH, INITIALIZE CLIENT, AND MARK LINKED ---
await loadBotSettings(); // Load bot_settings.json first

// Auth state should be loaded before client initialization
const { saveCreds, state } = await useMultiFileAuthState(`./${sessionName}`);
const msgRetryCounterCache = new NodeCache();

// Initialize the Baileys client here
const LordVoltage = XeonBotIncConnect({
    logger: pino({ level: 'silent' }),
    printQRInTerminal: !pairingCode, // popping up QR in terminal log
    mobile: useMobile, // mobile api (prone to bans)
    auth: {
        creds: state.creds,
        keys: makeCacheableSignalKeyStore(state.keys, Pino({ level: "fatal" }).child({ level: "fatal" })),
    },
    browser: [ 'Mac OS', 'Safari', '10.15.7' ], // for this issues https://github.com/WhiskeySockets/Baileys/issues/328
    patchMessageBeforeSending: (message) => {
        const requiresPatch = !!(
            message.buttonsMessage ||
            message.templateMessage ||
            message.listMessage
        );
        if (requiresPatch) {
            message = {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadataVersion: 2,
                            deviceListMetadata: {},
                        },
                        ...message,
                    },
                },
            };
        }
        return message;
    },
    connectTimeoutMs: 60000,
    defaultQueryTimeoutMs: 0,
    keepAliveIntervalMs: 10000,
    emitOwnEvents: true,
    fireInitQueries: true,
    generateHighQualityLinkPreview: true,
    syncFullHistory: true,
    markOnlineOnConnect: true,
    getMessage: async (key) => {
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg.message || undefined
        }
        return { conversation: "SHADØW-XMD" }
    },
    msgRetryCounterCache, // Resolve waiting messages
    defaultQueryTimeoutMs: undefined, // for this issues https://github.com/WhiskeySockets/Baileys/issues/276
});

store.bind(LordVoltage.ev);

// --- CALL markBotLinked() HERE, right after client initialization ---
// At this point, creds.json should be loaded (if exists) or created (if new pairing)
await markBotLinked(); // <-- MOVED HERE! This is crucial.

// ... (pairingCode block - remains as is) ...
if (pairingCode && !LordVoltage.authState.creds.registered) {
      if (useMobile) throw new Error('Cannot use pairing code with mobile api')

      //let phoneNumber  <- Removed this (declaration moved to global scope)
console.log(chalk.keyword('red')(`			
╔╦═╦╦═╦╗╔═╦══╦═╦═╦═╗
║║║║║╦╣║║╔╩║║╣║║║║╦╝
║║║║║╩╣╚╣╚╦║║╣║║║║╩╗
╚═╩═╩═╩═╩═╩══╩╩═╩╩═╝
kindly input your whatsapp number:`));

           let phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`♧𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧* IS VERIFYING: `)));
           phoneNumber = phoneNumber.replace(/[^0-9]/g,  '');
         
         // Ask again when entering the wrong number
         while (!Object.keys(PHONENUMBER_MCC).some(v => phoneNumber.startsWith(v))) {
            console.log(chalk.bgBlack(chalk.redBright("start with country code,Example : 256747122756")));
            phoneNumber = await question(chalk.bgBlack(chalk.greenBright(`please input your number : `)));
            phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
         }


      setTimeout(async () => {
         let code = await LordVoltage.requestPairingCode(phoneNumber)
         code = code?.match(/.{1,4}/g)?.join("-") || code
         console.log(chalk.cyan(chalk.cyan(`Pairing Code : `)), chalk.red(chalk.blue(code)))
      }, 3000)
   }   
// --- END OF MODIFIED CODE BLOCK ---

LordVoltage.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				LordVoltageInd()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				LordVoltageInd();
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("Connection Lost from Server, reconnecting...");
				LordVoltageInd();
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("Connection Replaced, Another New Session Opened, Please Close Current Session First");
				LordVoltageInd()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Scan Again And Run.`);
				LordVoltageInd();
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("Restart Required, Restarting...");
				LordVoltageInd();
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				LordVoltageInd();
			} else LordVoltage.end(`Unknown Disconnect Reason: ${reason}|${connection}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n`))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
        await delay(600)
console.log(chalk.keyword('green')(`
𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃 CONNECTED ✅`));

                const botJid = LordVoltage.user.id; // Get the bot's own JID from the connected client
                

                // Check if the connection message has already been sent for this session
                if (!hasConnectionMessageBeenSent()) {
                    // Update botJid in settings if it's new or different
                    if (getBotJid() !== botJid) {
                        await saveBotSettings({ botJid: botJid });
                        
                    }

                    if (botJid) {
                        
                        try {
                            const imagePath = './data/image/jdw.jpg'; // Path to your image
                            

                            let imageBuffer;
                            if (fs.existsSync(imagePath)) {
                                imageBuffer = fs.readFileSync(imagePath);
                                
                            } else {
                                console.warn(colors.red(`Image file not found at ${imagePath}. Sending message without image.`));
                                imageBuffer = null;
                            }

                            const menya = `
*[ 🎭 SHADØW XMD V1 CONNECTED 🎭 ]*

*I LURK I THE SHADØWS 🎭. . .*
> Type .menu TO INITIATE 🌐.
> Type .help to get bot info.

> *♧𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧*`;

                            const messageOptions = { caption: menya };
                            if (imageBuffer) {
                                messageOptions.image = imageBuffer;
                            }

                            await LordVoltage.sendMessage(
                                botJid, // Send to the bot's own JID
                                messageOptions
                            );
                            console.log(colors.blue(`[CONNECTION-MESSAGE]-SENT-TO ${botJid}`));

                            // Mark that the connection message has been sent
                            await saveBotSettings({ connectionMessageSent: true });
                            

                        } catch (error) {
                            console.error(colors.red("Error sending connection message to DM:"), error);
                            console.error(error); // Log full error for debugging
                        }
                    } else {
                        console.warn(colors.yellow("Bot's JID not available. Cannot send connection message."));
                    }
                } else {
                    
                }
		}
        } catch (err) {
            console.log('Error Di Connection.update ' + err);
                LordVoltageInd()
        }

    })

await delay(5555) // This delay is still here, but it's *after* markBotLinked() should have run.
start('2',colors.bold.yellow('\n\n'))

LordVoltage.ev.on('creds.update', await saveCreds)

    // Anti Call
    LordVoltage.ev.on('call', async (XeonPapa) => {
    let botNumber = await LordVoltage.decodeJid(LordVoltage.user.id)
    let XeonBotNum = db.settings[botNumber].anticall
    if (!XeonBotNum) return
    console.log(XeonPapa)
    for (let XeonFucks of XeonPapa) {
    if (XeonFucks.isGroup == false) {
    if (XeonFucks.status == "offer") {
    let XeonBlokMsg = await LordVoltage.sendTextWithMentions(XeonFucks.from, `*${LordVoltage.user.name}* has turned on anticall and wont receive ${XeonFucks.isVideo ? `video` : `voice` } calls. Sorry @${XeonFucks.from.split('@')[0]} you will be blocked. If accidentally please wait or contact the owner to be unblocked !
> ♧𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`)
    LordVoltage.sendContact(XeonFucks.from, global.owner, XeonBlokMsg)
    await sleep(8000)
    await LordVoltage.updateBlockStatus(XeonFucks.from, "block")
    }
    }
    }})

LordVoltage.ev.on('messages.upsert', async chatUpdate => {
try {
    const kay = chatUpdate.messages[0];
    if (!kay.message) return;
    kay.message = (Object.keys(kay.message)[0] === 'ephemeralMessage') ? kay.message.ephemeralMessage.message : kay.message;

    // This is the modified status viewing part:
    if (kay.key && kay.key.remoteJid === 'status@broadcast') {
        // Now checks the setting from uptime.js
        if (getAutoViewStatus()) {
            await LordVoltage.readMessages([kay.key]);
        }
    }

    if (!LordVoltage.public && !kay.key.fromMe && chatUpdate.type === 'notify') return;
    if (kay.key.id.startsWith('BAE5') && kay.key.id.length === 16) return;
    const m = smsg(LordVoltage, kay, store);
    require('./shadow')(LordVoltage, m, chatUpdate, store);
} catch (err) {
    console.error(err);
}})

	// detect group update
LordVoltage.ev.on('group-participants.update', async (anu) => {
const { welcome } = require ('./lib/welcome')
const iswel = _welcome.includes(anu.id)
const isLeft = _left.includes(anu.id)
welcome(iswel, isLeft, LordVoltage, anu)
})

    // respon cmd pollMessage
    async function getMessage(key){
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg?.message
        }
        return {
            conversation: "I LAUGH IN THE FACE OF DEATH 🎭"
        }
    }
    LordVoltage.ev.on('messages.update', async chatUpdate => {
        for(const { key, update } of chatUpdate) {
			if(update.pollUpdates && key.fromMe) {
				const pollCreation = await getMessage(key)
				if(pollCreation) {
				    const pollUpdate = await getAggregateVotesInPollMessage({
							message: pollCreation,
							pollUpdates: update.pollUpdates,
						})
	                var toCmd = pollUpdate.filter(v => v.voters.length !== 0)[0]?.name
	                if (toCmd == undefined) return
                    var prefCmd = prefix+toCmd
	                LordVoltage.appenTextMessage(prefCmd, chatUpdate)
				}
			}
		}
    })

LordVoltage.sendTextWithMentions = async (jid, text, quoted, options = {}) => LordVoltage.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })

LordVoltage.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}

LordVoltage.ev.on('contacts.update', update => {
for (let contact of update) {
let id = LordVoltage.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }
}
})

LordVoltage.getName = (jid, withoutContact  = false) => {
id = LordVoltage.decodeJid(jid)
withoutContact = LordVoltage.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = LordVoltage.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === LordVoltage.decodeJid(LordVoltage.user.id) ?
LordVoltage.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')
}

LordVoltage.parseMention = (text = '') => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

LordVoltage.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await LordVoltage.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await LordVoltage.getName(i)}\nFN:${await LordVoltage.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${ytname}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	LordVoltage.sendMessage(jid, { contacts: { displayName: `${list.length} Contact`, contacts: list }, ...opts }, { quoted })
    }

LordVoltage.setStatus = (status) => {
LordVoltage.query({
tag: 'iq',
attrs: {
to: '@s.whatsapp.net',
type: 'set',
xmlns: 'status',
},
content: [{
tag: 'status',
attrs: {},
content: Buffer.from(status, 'utf-8')
}]
})
return status
}

LordVoltage.public = true

LordVoltage.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await LordVoltage.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })
}

LordVoltage.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)
}
await LordVoltage.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
.then( response => {
fs.unlinkSync(buffer)
return response
})
}

LordVoltage.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await LordVoltage.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}

LordVoltage.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await LordVoltage.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}

LordVoltage.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}

LordVoltage.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
}

LordVoltage.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'}
filename = path.join(__filename, './lib' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
size: await getSizeMedia(data),
...type,
data}}

LordVoltage.sendMedia = async (jid, path, fileName = '', caption = '', quoted = '', options = {}) => {
let types = await LordVoltage.getFile(path, true)
let { mime, ext, res, data, filename } = types
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }}
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/exif')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: options.packname ? options.packname : global.packname, author: options.author ? options.author : global.author, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await LordVoltage.sendMessage(jid, { [type]: { url: pathFile }, caption, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}

LordVoltage.sendText = (jid, text, quoted = '', options) => LordVoltage.sendMessage(jid, { text: text, ...options }, { quoted })

LordVoltage.serializeM = (m) => smsg(LordVoltage, m, store)

LordVoltage.before = (teks) => smsg(LordVoltage, m, store)

LordVoltage.sendButtonText = (jid, buttons = [], text, footer, quoted = '', options = {}) => {
let buttonMessage = {
text,
footer,
buttons,
headerType: 2,
...options
}
LordVoltage.sendMessage(jid, buttonMessage, { quoted, ...options })
}

LordVoltage.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
let message = await prepareWAMessageMedia({ image: gam }, { upload: LordVoltage.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "INR",
"priceAmount1000": "100000",
"url": `${websitex}`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${ownernumber}@s.whatsapp.net`
}
}, options)
return LordVoltage.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 

LordVoltage.send5ButLoc = async (jid , text = '' , footer = '', img, but = [], options = {}) =>{
var template = generateWAMessageFromContent(jid, proto.Message.fromObject({
templateMessage: {
hydratedTemplate: {
"hydratedContentText": text,
"locationMessage": {
"jpegThumbnail": img },
"hydratedFooterText": footer,
"hydratedButtons": but
}
}
}), options)
LordVoltage.relayMessage(jid, template.message, { messageId: template.key.id })
}

global.API = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name]: name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({
    ...query, ...(apikeyqueryname ? {
        [apikeyqueryname]: global.APIKeys[name in global.APIs ? global.APIs[name]: name]
    }: {})
})): '')

LordVoltage.sendButImg = async (jid, path, teks, fke, but) => {
let img = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let fjejfjjjer = {
image: img, 
jpegThumbnail: img,
caption: teks,
fileLength: "1",
footer: fke,
buttons: but,
headerType: 4,
}
LordVoltage.sendMessage(jid, fjejfjjjer, { quoted: m })
}

            /**
             * Send Media/File with Automatic Type Specifier
             * @param {String} jid
             * @param {String|Buffer} path
             * @param {String} filename
             * @param {String} caption
             * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} quoted
             * @param {Boolean} ptt
             * @param {Object} options
             */
LordVoltage.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
  let type = await LordVoltage.getFile(path, true);
  let { res, data: file, filename: pathFile } = type;

  if (res && res.status !== 200 || file.length <= 65536) {
    try {
      throw {
        json: JSON.parse(file.toString())
      };
    } catch (e) {
      if (e.json) throw e.json;
    }
  }

  let opt = {
    filename
  };

  if (quoted) opt.quoted = quoted;
  if (!type) options.asDocument = true;

  let mtype = '',
    mimetype = type.mime,
    convert;

  if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker';
  else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image';
  else if (/video/.test(type.mime)) mtype = 'video';
  else if (/audio/.test(type.mime)) {
    convert = await (ptt ? toPTT : toAudio)(file, type.ext);
    file = convert.data;
    pathFile = convert.filename;
    mtype = 'audio';
    mimetype = 'audio/ogg; codecs=opus';
  } else mtype = 'document';

  if (options.asDocument) mtype = 'document';

  delete options.asSticker;
  delete options.asLocation;
  delete options.asVideo;
  delete options.asDocument;
  delete options.asImage;

  let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype };
  let m;

  try {
    m = await LordVoltage.sendMessage(jid, message, { ...opt, ...options });
  } catch (e) {
    //console.error(e)
    m = null;
  } finally {
    if (!m) m = await LordVoltage.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options });
    file = null;
    return m;
  }
}

//LordVoltage.sendFile = async (jid, media, options = {}) => {
        //let file = await LordVoltage.getFile(media)
        //let mime = file.ext, type
        //if (mime == "mp3") {
          //type = "audio"
          //options.mimetype = "audio/mpeg"
          //options.ptt = options.ptt || false
        //}
        //else if (mime == "jpg" || mime == "jpeg" || mime == "png") type = "image"
        //else if (mime == "webp") type = "sticker"
        //else if (mime == "mp4") type = "video"
        //else type = "document"
        //return LordVoltage.sendMessage(jid, { [type]: file.data, ...options }, { ...options })
      //}

LordVoltage.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return LordVoltage.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      if(mime === "application/pdf"){
     return LordVoltage.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return LordVoltage.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return LordVoltage.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return LordVoltage.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }

      /**
     *
     * @param {*} jid
     * @param {*} name
     * @param [*] values
     * @returns
     */
    LordVoltage.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return LordVoltage.sendMessage(jid, { poll: { name, values, selectableCount }}) }

return LordVoltage

}

LordVoltageInd()

process
