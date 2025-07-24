const fs = require('fs');
const path = require('path');
const { delay } = require('@whiskeysockets/baileys');

const channelInfo = {
    contextInfo: {
        forwardingScore: 1,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: '120363400964601488@newsletter',
            newsletterName: 'S̶A̶M̶S̶U̶N̶G̶_X̶M̶D̶',
            serverMessageId: -1
        }
    }
};

const configPath = path.join(__dirname, '../data/autos.json');

// Initialize config
if (!fs.existsSync(configPath)) {
    fs.writeFileSync(configPath, JSON.stringify({
        typing: false,
        recording: false,
        read: false
    }, null, 2));
}

function getConfig() {
    try {
        return JSON.parse(fs.readFileSync(configPath));
    } catch (e) {
        console.error('Error reading config:', e);
        return {
            typing: false,
            recording: false,
            read: false
        };
    }
}

function saveConfig(config) {
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
}

async function toggleAutoFeature(sock, chatId, msg, feature, action) {
    try {
        if (!msg.key.fromMe) {
            await sock.sendMessage(chatId, { 
                text: '🚫 Owner only command!',
                ...channelInfo
            });
            return;
        }

        const config = getConfig();
        
        if (!['on', 'off'].includes(action?.toLowerCase())) {
            await sock.sendMessage(chatId, {
                text: `✔️ Invalid action! Usage: .${feature} on/off`,
                ...channelInfo
            });
            return;
        }

        // Update config
        config[feature] = action.toLowerCase() === 'on';
        saveConfig(config);

        await sock.sendMessage(chatId, {
            text: `☠️ Auto ${feature} is now ${config[feature] ? '✔️ ON' : '🚫 OFF'}`,
            ...channelInfo
        });

    } catch (error) {
        console.error('Auto command error:', error);
        await sock.sendMessage(chatId, {
            text: `🚫 Error: ${error.message}`,
            ...channelInfo
        });
    }
}

async function autosCommand(sock, chatId, msg) {
    try {
        if (!msg.key.fromMe) {
            await sock.sendMessage(chatId, { 
                text: '🚫 Owner only command!',
                ...channelInfo
            });
            return;
        }

        const config = getConfig();
        const statusText = [
            '⚙️ *Auto Features Status*',
            '',
            `• Typing (.autot): ${config.typing ? '✔️ ON' : '🚫 OFF'}`,
            `• Recording (.autord): ${config.recording ? '✔️ ON' : '🚫 OFF'}`,
            `• Read (.autor): ${config.read ? '✔️ ON' : '🚫 OFF'}`,
            '',
            'Usage:',
            '.autot on/off - Toggle auto typing',
            '.autord on/off - Toggle auto recording',
            '.autor on/off - Toggle auto read',
            '.autos - Show current status'
        ].join('\n');
        
        await sock.sendMessage(chatId, {
            text: statusText,
            ...channelInfo
        });

    } catch (error) {
        console.error('Auto command error:', error);
        await sock.sendMessage(chatId, {
            text: `❌ Error: ${error.message}`,
            ...channelInfo
        });
    }
}

async function autorCommand(sock, chatId, msg, args) {
    await toggleAutoFeature(sock, chatId, msg, 'read', args[0]);
}

async function autotCommand(sock, chatId, msg, args) {
    await toggleAutoFeature(sock, chatId, msg, 'typing', args[0]);
}

async function autordCommand(sock, chatId, msg, args) {
    await toggleAutoFeature(sock, chatId, msg, 'recording', args[0]);
}

async function handleTyping(sock, chatId) {
    try {
        const config = getConfig();
        if (config.typing) {
            await sock.sendPresenceUpdate('composing', chatId);
            await delay(2000);
            await sock.sendPresenceUpdate('paused', chatId);
        }
    } catch (error) {
        console.error('Error in handleTyping:', error);
    }
}

async function handleRecording(sock, chatId) {
    try {
        const config = getConfig();
        if (config.recording) {
            await sock.sendPresenceUpdate('recording', chatId);
            await delay(3000);
            await sock.sendPresenceUpdate('paused', chatId);
        }
    } catch (error) {
        console.error('Error in handleRecording:', error);
    }
}

async function handleRead(sock, message) {
    try {
        const config = getConfig();
        if (config.read && message.key && message.key.remoteJid) {
            await sock.readMessages([message.key]);
        }
    } catch (error) {
        console.error('Error in handleRead:', error);
    }
}

module.exports = {
    autosCommand,
    autorCommand,
    autotCommand,
    autordCommand,
    handleTyping,
    handleRecording,
    handleRead
};