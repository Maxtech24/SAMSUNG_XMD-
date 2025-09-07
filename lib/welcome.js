const fs = require('fs');
const { Telegraph } = require('./uploader');
const { getRandom, smsg, isUrl, generateMessageTag, getBuffer, getSizeMedia, fetchJson, delay, sleep } = require('./myfunc');
// These imports are correct, as setwelcome.js and setleft.js now manage their own internal state.
const { isSetWelcome, getTextSetWelcome } = require('./setwelcome');
const { isSetLeft, getTextSetLeft } = require('./setleft');

// Keep setting for pathimg if needed.
let setting = JSON.parse(fs.readFileSync('./database/config.json'));
const imageBuffer = fs.readFileSync('./data/image/thumb.jpg');
const {
  proto,
  jidDecode,
  jidNormalizedUser,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  downloadContentFromMessage,
} = require('baileys');
const moment = require('moment-timezone');

module.exports.welcome = async (iswel, isleft, NanoBotz, anu) => { // iswel and isleft from index.js are good
  try {
    // 🛑 IMPORTANT CHANGE: RE-READ THE welcome.json AND left.json HERE 🛑
    // This ensures we always get the freshest data from disk for the group's general welcome/leave status.
    let _welcome = JSON.parse(fs.readFileSync('./database/welcome.json'));
    let _left = JSON.parse(fs.readFileSync('./database/left.json'));

    const metadata = await NanoBotz.groupMetadata(anu.id);
    const participants = anu.participants;
    const memeg = metadata.participants.length; // This variable is declared but not used. You can remove it if not needed.
    const groupName = metadata.subject;
    const groupDesc = metadata.desc;

    for (let num of participants) {
      const fkontaku = {
        key: {
          participant: `0@s.whatsapp.net`,
          ...(anu.id ? { remoteJid: `6283136505591-1614953337@g.us` } : {})
        },
        message: {
          'contactMessage': {
            'displayName': ``,
            'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;,;;;\nFN:,\nitem1.TEL;waid=${num.split('@')[0]}:${num.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
            'jpegThumbnail': setting.pathimg,
            thumbnail: setting.pathimg,
            sendEphemeral: true
          }
        }
      };

      let pp_user, ppgroup;
      try {
        pp_user = await NanoBotz.profilePictureUrl(num, 'image');
      } catch {
        pp_user = await NanoBotz.profilePictureUrl(anu.id, 'image'); // Fallback if user's PP can't be fetched
      }

      try {
        ppgroup = await NanoBotz.profilePictureUrl(anu.id, 'image');
      } catch {
        ppgroup = 'https://i.ibb.co/nsFjKK4h/sparkk.jpg'; // Fallback if group's PP can't be fetched
      }

      // 🛑 Condition for welcome message 🛑
      if (anu.action == 'add' && _welcome.includes(anu.id)) {
        // 🛑 CRITICAL FIX: Removed 'set_welcome_db' argument here 🛑
        if (isSetWelcome(anu.id)) {
          // 🛑 CRITICAL FIX: Removed 'set_welcome_db' argument here 🛑
          var get_teks_welcome = await getTextSetWelcome(anu.id);
          var replace_pesan = get_teks_welcome.replace(/@user/gi, `@${num.split('@')[0]}`);
          var full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          await NanoBotz.sendMessage(anu.id, { text:`${full_pesan}`,
          contextInfo: {
            mentions: [num],
            "externalAdReply": {
                "showAdAttribution": false,
                "containsAutoReply": true,
                "title": `SOMEONE JOINED ✨`,
                "body": `©SHADØW-XMD`,
                "previewType": "VIDEO",
                "thumbnailUrl": pp_user,
                "sourceUrl": 'https://lord-voltage.com' }}});
        } else {
          var big = `
*🍧 WELCOME* @${num.split('@')[0]}

*TO* ${groupName}!

*YOU ARE OUR* ${metadata.participants.length}th *MEMBER!*

*Joined at:* ${moment.tz('Africa/Lagos').format('HH:mm:ss')}, ${moment.tz('Africa/Lagos').format('DD/MM/YY')}

> POWDERED BY FAMØUS DEV 👑`;
          await NanoBotz.sendMessage(anu.id, {
            text: big,
            contextInfo: {
              mentionedJid: [num],
              forwardingScore: 0,
              isForwarded: false,
              "externalAdReply": {
                "showAdAttribution": false,
                "containsAutoReply": true,
                "title": `SOMEINE JOINED ✨`,
                "body": `©SHADØW-XMD`,
                "previewType": "VIDEO",
                "thumbnailUrl": pp_user,
                "sourceUrl": 'https://lord-voltage.com'
              }
            }
          });
        }
      // 🛑 Condition for leave message 🛑
      } else if (anu.action == 'remove' && _left.includes(anu.id)) {
        // 🛑 CRITICAL FIX: Removed 'set_left_db' argument here 🛑
        if (isSetLeft(anu.id)) {
          // 🛑 CRITICAL FIX: Removed 'set_left_db' argument here 🛑
          var get_teks_left = await getTextSetLeft(anu.id);
          var replace_pesan = get_teks_left.replace(/@user/gi, `@${num.split('@')[0]}`);
          var full_pesan = replace_pesan.replace(/@group/gi, groupName).replace(/@desc/gi, groupDesc);
          await NanoBotz.sendMessage(anu.id, { text:`${full_pesan}`,
          contextInfo: {
            mentions: [num],
            "externalAdReply": {
                "showAdAttribution": false,
                "containsAutoReply": true,
                "title": `SOMEONE LEFT 😔`,
                "body": `©SHADOW-XMD`,
                "previewType": "VIDEO",
                "thumbnailUrl": pp_user,
                "sourceUrl": 'https://lord-voltage.com' }}});
        } else {
          var anubis = `
*💬 GOODBYE 👋* @${num.split('@')[0]}

*YOU WILL NEVER BE MISSED IN* ${groupName}!😪

*WE ARE NOW* ${metadata.participants.length} *MEMBERS*

*Left at:* ${moment.tz('Africa/Lagos').format('HH:mm:ss')}, ${moment.tz('Africa/Lagos').format('DD/MM/YY')}

> powered by Lord Voltage`;
          await NanoBotz.sendMessage(anu.id, {
            text: anubis,
            contextInfo: {
              mentionedJid: [num],
              forwardingScore: 0,
              isForwarded: false,
              "externalAdReply": {
                "showAdAttribution": false,
                "containsAutoReply": true,
                "title": `SOMEONE LEFT 😔`,
                "body": `©SHADØW-XMD`,
                "previewType": "VIDEO",
                "thumbnailUrl": pp_user,
                "sourceUrl": 'https://lord-voltage.com'
              }
            }
          });
        }
      } else if (anu.action == 'promote') {
        await NanoBotz.sendMessage(anu.id, {
          text: `CONGRATULATINS @${num.split('@')[0]}\nYOU HAVE BEEN PROMOTED AT ${groupName}\n`,
          mentions: [num]
        });
      } else if (anu.action == 'demote') {
        await NanoBotz.sendMessage(anu.id, {
          text: `TOO BAD @${num.split('@')[0]}\nYOU HAVE BEEN DEMOTED FROM ${groupName}\n`,
          mentions: [num]
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

// ... (aDelete and oneTime modules remain the same)
module.exports.aDelete = async (setting, NanoBotz, m) => {
  if (setting.antiDelete) {
    try {
      const dataChat = global.dbc;
      const mess = dataChat.find((a) => a.id == m.id);
      const mek = mess.m;
      const participant = mek.key.remoteJid.endsWith('@g.us') ? mek.key.participant : mek.key.remoteJid;
      console.log(participant);
      const froms = mek.key.remoteJid;
      await NanoBotz.sendMessage(
        froms, {
          text: `「 *🌟 ANTI DELETE MESSAGE 🌟* 」

📛 *📛 NAME 📛* : ${mek.pushName}
👤 *👤 USER 👤* : @${mek.sender.split('@')[0]}
⏰ *⏰ CLOCK ⏰* : ${moment.tz('Africa/Lagos').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${mek.mtype}
    `,
          mentions: [participant],
        }, {
          quoted: mek,
        }
      );

      await NanoBotz.copyNForward(froms, mek, true);
      await delay(4000);
      let messek = dataChat.find((a) => a.id == m.id);
      for (let [i, te] of dataChat.entries()) {
        if (te.id === m.id) {
          dataChat.splice(i, 1); // Tim is now removed from "users"
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
};

module.exports.oneTime = async (setting, NanoBotz, m) => {
  if (setting.antiViewOnce) {
    try {
      let teks = `「 *🌟 ANTI VIEWONCE MESSAGE 🌟* 」

📛 *📛 NAME 📛* : ${m.pushName}
👤 *👤 USER 👤* : @${m.sender.split('@')[0]}
⏰ *⏰ CLOCK ⏰* : ${moment.tz('Africa/Lagos').format('HH:mm:ss')} WIB
✍️ *MessageType* : ${m.mtype}
💬 *Caption* : ${m.msg.caption ? m.msg.caption : 'no caption'}`;

      await NanoBotz.sendTextWithMentions(m.chat, teks, m);
      await delay(500);

      NanoBotz.copyNForward(m.chat, true, {
        readViewOnce: true,
        quoted: m,
      });
    } catch (err) {
      console.log(err);
    }
  }
};