const os = require('os');
const settings = require('../settings.js');

function formatTime(seconds) {
    const days = Math.floor(seconds / (24 * 60 * 60));
    seconds = seconds % (24 * 60 * 60);
    const hours = Math.floor(seconds / (60 * 60));
    seconds = seconds % (60 * 60);
    const minutes = Math.floor(seconds / 60);
    seconds = Math.floor(seconds % 60);

    let time = '';
    if (days > 0) time += `${days}d `;
    if (hours > 0) time += `${hours}h `;
    if (minutes > 0) time += `${minutes}m `;
    if (seconds > 0 || time === '') time += `${seconds}s`;

    return time.trim();
}

async function aliveCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        const processingMsg = await sock.sendMessage(chatId, { text: '⚡ Testing speed...' });
        const end = Date.now();
        const ping = end - start;

        // Delete the processing message
        await sock.sendMessage(chatId, { 
            delete: processingMsg.key 
        });

        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);
        
        // Get system information
        const totalMem = (os.totalmem() / (1024 * 1024)).toFixed(2);
        const freeMem = (os.freemem() / (1024 * 1024)).toFixed(2);
        const platform = os.platform();
        const cpuModel = os.cpus()[0].model;
        const loadAvg = os.loadavg()[0].toFixed(2);

        // Get current time
        const now = new Date();
        const timeString = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

        const botInfo = `
╭────── *𝐒𝐀𝐌𝐒𝐔𝐍𝐆_𝐗𝐌𝐃* ──────╮
│                              
│ *Uptime*  : ${uptimeFormatted}  
│ *Ping*    : ${ping}ms  
│ *Version* : v${settings.version}  
│ *Status*  : ONLINE  
│                              
│ ─── *SYSTEM INFO* ───  
│ *OS*     : ${platform}  
│ *Memory* : ${freeMem}MB / ${totalMem}MB  
│ *CPU*    : ${cpuModel}  
│ *Load*   : ${loadAvg}  
│                              
│ ${timeString.toLowerCase()}  
╰──────────────────────────────╯`.trim();

        // Send image with caption
        await sock.sendMessage(chatId, {
            image: { 
                url: 'https://files.catbox.moe/ibo6lv.jpg',
                mimetype: 'image/jpeg'
            },
            caption: botInfo,
            contextInfo: {
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400964601488@newsletter',
                    newsletterName: 'S̶A̶M̶S̶U̶N̶G̶_X̶M̶D̶',
                    serverMessageId: -1
                }
            },
            quoted: message
        });

        // Send audio as voice note
        await sock.sendMessage(chatId, {
            audio: { 
                url: 'https://files.catbox.moe/vybhok.m4a',
                mimetype: 'audio/mp4'
            },
            ptt: true,
            quoted: message
        });

    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Failed to get bot status. Please try again later.',
            quoted: message
        });
    }
}

module.exports = aliveCommand;