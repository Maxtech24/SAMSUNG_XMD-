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
        const uptimeInSeconds = process.uptime();
        const uptimeFormatted = formatTime(uptimeInSeconds);
        
        const responseText = `⏳ Bot Uptime: ${uptimeFormatted}`;
        
        await sock.sendMessage(chatId, { 
            text: responseText,
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
