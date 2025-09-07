const chalk = require("chalk")
const fs = require("fs")
//auto presence update

global.domainotp = "https://claudeotp.com/api"
global.apikeyotp = "a395f97fe99f4fad0e790d10af518b9a"
//===============SETTING MENU==================\\
global.thumbnail = fs.readFileSync("./data/image/thumb.jpg")
global.ig = 'https://wa.me/2348126003566'
global.yt = 'https://www.youtube.com/@FAM%C3%98USDEV001'
global.ttowner = '-'
global.ownername = '⦿ ƑΛMØUS † DEV★' 
global.owner = ['2347026441048'] // SETTINGS ARE ALSO IN THE DATABASE FOLDER 
global.ownernomer = '2347026441048'
global.socialm = 'https://github.com/FAMOUS-TECH-DEV'
global.location = 'Nigeria' 
//========================setting Payment=====================\\
global.nodana = '2859859010' // IT'S BLANK IF IT'S NOT EXISTING
global.nogopay = '2859859010' // IT'S BLANK IF IT'S NOT EXISTING 
global.noovo = '' // IT'S BLANK IF IT'S NOT EXISTING
//==================setting Payment Name===========================\\
global.andana = 'FCMB' // IT'S BLANK IF IT'S NOT EXISTING
global.angopay = 'FCMB' // IT'S BLANK IF IT'S NOT EXISTING
global.anovo = '' // IT'S BLANK IF IT'S NOT EXISTING
//==================setting bot===========================\\
global.botname = "ＳＨＡＤØＷ Ｖ１ 👑"
global.ownernumber = '2348126003566'
global.botnumber = '2347026441048'
global.ownername = '⦿ ƑΛMØUS † DEV★'
global.ownerNumber = ["2347026441048@s.whatsapp.net"]
global.ownerweb = "https://t.me/FamousDev"
global.websitex = "https://wa.me/2347026441048"
global.wagc = "https://whatsapp.com/channel/0029VbAaOJLInlqVwhwtxS33"
global.saluran = "https://whatsapp.com/channel/0029VbAaOJLInlqVwhwtxS33"
global.themeemoji = '☌ '
global.wm = "⦿ ƑΛMØUS † DEV★"
global.botscript = 'https://github.com/FAMOUS-TECH-DEV/SHADØW-XMD-V1' //script link
global.packname = "ᏕᏂᏗᎴØᏇ-Ꮙ1"
global.author = "⦿ ƑΛMØUS † DEV★"
global.creator = "2347026441048@s.whatsapp.net"
//===========================//

global.decor = {
	menut: '❏═┅═━–〈',
	menub: '┊•',
	menub2: '┊',
	menuf: '┗––––––––––✦',
	hiasan: '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷',

	menut: '––––––『',
    menuh: '』––––––',
    menub: '┊☃︎ ',
    menuf: '┗━═┅═━––––––๑\n',
	menua: '',
	menus: '☃︎',

	htki: '––––––『',
	htka: '』––––––',
	haki: '┅━━━═┅═❏',
	haka: '❏═┅═━━━┅',
	lopr: 'Ⓟ',
	lolm: 'Ⓛ',
	htjava: '❃'
}

//===========================//

global.rpg = {
    emoticon(string) {
        string = string.toLowerCase()
        let emot = {
            level: '📊',
            limit: '🎫',
            health: '❤️',
            exp: '✨',
            atm: '💳',
            money: '💰',
            bank: '🏦',
            potion: '🥤',
            diamond: '💎',
            common: '📦',
            uncommon: '🛍️',
            mythic: '🎁',
            legendary: '🗃️',
            superior: '💼',
            pet: '🔖',
            trash: '🗑',
            armor: '🥼',
            sword: '⚔️',
            makanancentaur: "🥗",
            makanangriffin: "🥙",
            makanankyubi: "🍗",
            makanannaga: "🍖",
            makananpet: "🥩",
            makananphonix: "🧀",
            pickaxe: '⛏️',
            fishingrod: '🎣',
            wood: '🪵',
            rock: '🪨',
            string: '🕸️',
            horse: '🐴',
            cat: '🐱',
            dog: '🐶',
            fox: '🦊',
            robo: '🤖',
            petfood: '🍖',
            iron: '⛓️',
            gold: '😊',
            emerald: '❇️',
            upgrader: '🧰',
            bibitanggur: '🌱',
            bibitjeruk: '🌿',
            bibitapel: '☘️',
            bibitmangga: '🍀',
            bibitpisang: '🌴',
            anggur: '🍇',
            jeruk: '🍊',
            apel: '🍎',
            mangga: '🥭',
            pisang: '🍌',
            botol: '🍾',
            kardus: '📦',
            kaleng: '🏮',
            plastik: '📜',
            gelas: '🧋',
            chip: '♋',
            umpan: '🪱',
            naga: "🐉",
            phonix: "🦅",
            kyubi: "🦊",
            griffin: "🦒",
            centaur: "🎠",
            skata: '🧩'
        }
        let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
        if (!results.length) return ''
        else return emot[results[0][0]]
    }
}

//new
global.prefix = ['.']
global.sessionName = 'session'
global.hituet = 0
//media target
global.thum = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./data/image/thumb.jpg") //ur logo pic
global.err4r = fs.readFileSync("./data/image/thumb.jpg") //ur error pic
global.thumb = fs.readFileSync("./data/image/thumb.jpg") //ur thumb pic
global.defaultpp = 'https://img1.pixhost.to/images/5719/598093240_spark.png' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
wait:"*please wait..*",
   success: "sᴜᴄᴄᴇssғᴜʟ",
   on: "I AM SHADØW XMD V1🎭", 
   off: "I LURK IN THE SHADØWS🎭. . .",
   query: {
       text: "ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ᴛᴇxᴛ",
       link: "ᴘʟᴇᴀsᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ʟɪɴᴋ",
   },
   error: {
       fitur: "Tһᥱrᥱ's ᥲᥒ ᥱrr᥆r ᥕі𝗍һ 𝗍һіs 𝖿ᥱᥲ𝗍ᥙrᥱ. kіᥒძᥣᥡ ᥴ᥆ᥒ𝗍ᥲᥴ𝗍 ᥆ᥕᥒᥱr𒈒",
   },
   only: {
       group: "* *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘs",
      private: "* *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ!",
       owner: "* *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ!",
       admin: "* *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴡʜᴇɴ ᴛʜᴇ ʙᴏᴛ ɪs ᴀɴ ᴀᴅᴍɪɴ!",
       badmin: "ᴍᴀᴋᴇ ᴍʏ ᴏᴡɴᴇʀ ᴀᴅᴍɪɴ⬤",
       premium: "* *ᴀᴄᴄᴇss ᴅᴇɴɪᴇᴅ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ғᴏʀ ᴍʏ ᴏᴡɴᴇʀ ᴏɴʟʏ!",
   }
}
 
//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "pk-pIWAlRroXTOAigkWdHcYvmlmgzEQXuoMWbVAaLAVZswSRbEB"
//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
				
