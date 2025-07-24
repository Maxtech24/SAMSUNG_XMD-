const moment = require('moment-timezone');
const fetch = require('node-fetch');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function githubCommand(sock, chatId, message) {
  try {
    // Fetch your repo data
    const res = await fetch('https://api.github.com/repos/Maxtech254/MAXTECH-XMD-');
    if (!res.ok) throw new Error('Error fetching repository data');
    const json = await res.json();

    // Create the info text
    let txt = `*[ 𝐒𝐀𝐌𝐒𝐔𝐍𝐆 𝐗𝐌𝐃 ]*\n\n`;
    txt += `🔹 *Name*: ${json.name}\n`;
    txt += `🔹 *Stars*: ${json.stargazers_count}\n`;
    txt += `🔹 *Forks*: ${json.forks_count}\n`;
    txt += `🔹 *Watchers*: ${json.watchers_count}\n`;
    txt += `🔹 *Size*: ${(json.size / 1024).toFixed(2)} MB\n`;
    txt += `🔹 *Last Updated*: ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n\n`;
    txt += `📂 *Repository*:\n${json.html_url}\n`;
    txt += `📢 *Official Channel*:\nhttps://whatsapp.com/channel/0029VbB67yD1dAw1pUSonz3S\n\n`;
    txt += `_Star ⭐ and fork the repository if you like the bot!_`;

    try {
      // Download the image from the URL
      const imageUrl = 'https://files.catbox.moe/rohgnd.jpg';
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const imgBuffer = Buffer.from(response.data, 'binary');
      
      await sock.sendMessage(chatId, { 
        image: imgBuffer, 
        caption: txt 
      }, { quoted: message });
    } catch (imgError) {
      console.error('Image error, sending text only:', imgError);
      await sock.sendMessage(chatId, { text: txt }, { quoted: message });
    }

  } catch (error) {
    console.error('Error in github command:', error);
    await sock.sendMessage(chatId, { 
      text: '❌ Error fetching repository information.' 
    }, { quoted: message });
  }
}

module.exports = githubCommand;