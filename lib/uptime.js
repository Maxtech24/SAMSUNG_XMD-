const fs = require('fs').promises;
const { modul } = require('../module');
const { chalk } = modul;
const path = require('path');
const moment = require('moment-timezone'); // Make sure to require moment-timezone

const settingsFile = path.join(__dirname, '../database/bot_settings.json');

let botSettings = {
  autotypingEnabled: false,
  autoRecordingEnabled: false,
  autoBlockMoroccoEnabled: false,
  autoKickMoroccoEnabled: false,
  antispamEnabled: false,
  selfModeEnabled: false,
  publicMode: true,
  markBotLinkedTimestamp: null,
  autoViewStatus: false, // Default is now FALSE as per your version
  // --- NEW ADDITIONS FOR CONNECTION MESSAGE LOGIC ---
  botJid: null, // To store the bot's own JID (e.g., "256xxxx@s.whatsapp.net")
  connectionMessageSent: false, // Flag to ensure message is sent only once per session
  // --- END NEW ADDITIONS ---
};

async function loadBotSettings() {
  try {
    const data = await fs.readFile(settingsFile, 'utf8');
    const loadedSettings = JSON.parse(data);
    console.log(chalk.keyword('green')('[TIMESTAMP] LOADED�?'));
    botSettings = { ...botSettings, ...loadedSettings };

    // Ensure new settings are added if they don't exist in the loaded file (for older files)
    if (!('autoViewStatus' in botSettings)) {
        botSettings.autoViewStatus = false;
    }
    // --- ENSURE NEW SETTINGS ARE INITIALIZED IF MISSING IN EXISTING FILE ---
    if (!('botJid' in botSettings)) {
        botSettings.botJid = null;
    }
    if (!('connectionMessageSent' in botSettings)) {
        botSettings.connectionMessageSent = false;
    }
    // --- END ENSURE NEW SETTINGS ---

  } catch (error) {
    console.log(chalk.keyword('green')('[INSTALLED] TIMESTAMP�?'));    
    // If the file doesn't exist on first run, save default settings
    await saveBotSettings(); // Ensure settings are saved on first load if file is missing
  }
}

async function saveBotSettings(newSettings = {}) { // Allow passing new settings to update specific fields
  try {
    botSettings = { ...botSettings, ...newSettings }; // Merge existing with new settings
    await fs.writeFile(settingsFile, JSON.stringify(botSettings, null, 2), 'utf8');

  } catch (error) {
    console.error('Error saving bot settings:', error);
  }
}

async function setAutotyping(enabled) {
  botSettings.autotypingEnabled = enabled;
  await saveBotSettings();
  return `AUTOTYPING IS NOW ${enabled ? 'on' : 'off'}.`;
}

function getAutotypingStatus() {
  return botSettings.autotypingEnabled;
}

async function setAutoRecording(enabled) {
  botSettings.autoRecordingEnabled = enabled;
  await saveBotSettings();
  return `AUTO RECORDING IS NOW ${enabled ? 'on' : 'off'}.`;
}

function getAutoRecordingStatus() {
  return botSettings.autoRecordingEnabled;
}

async function setAutoBlockMorocco(enabled) {
  botSettings.autoBlockMoroccoEnabled = enabled;
  await saveBotSettings();
  return `AUTO 𝐁LOCKING 𝐌OROCCO NUMBERS IS NOW ${enabled ? 'on' : 'off'}.`;
}

function getAutoBlockMoroccoStatus() {
  return botSettings.autoBlockMoroccoEnabled;
}

async function setAutoKickMorocco(enabled) {
  botSettings.autoKickMoroccoEnabled = enabled;
  await saveBotSettings();
  return `AUTO KICKING MOROCCO NUMBERS NOW ${enabled ? 'on' : 'off'}.`;
}

function getAutoKickMoroccoStatus() {
  return botSettings.autoKickMoroccoEnabled;
}

async function setAntispam(enabled) {
  botSettings.antispamEnabled = enabled;
  await saveBotSettings();
  return `ANTI SPAM IS NOW ${enabled ? '𝐎𝐧' : '𝐎𝐟𝐟'}.`;
}

function getAntispamStatus() {
  return botSettings.antispamEnabled;
}

async function setSelfMode(enabled) {
  botSettings.selfModeEnabled = enabled;
  await saveBotSettings();
  return `SUCCESSFULLY SET MODE TO ${enabled ? '𝐒𝐞𝐥𝐟' : '𝐏𝐮𝐛𝐥𝐢𝐜'}.`;
}

function getSelfModeStatus() {
  return botSettings.selfModeEnabled;
}

async function setPublicMode(enabled) {
  botSettings.publicMode = enabled;
  await saveBotSettings();
  return `SUCCESSFULLY SET MODE TO ${enabled ? '𝐏𝐮𝐛𝐥𝐢𝐜' : '𝐒𝐞𝐥𝐟'}.`;
}

function getPublicModeStatus() {
  return botSettings.publicMode;
}

// --- MODIFIED markBotLinked FUNCTION TO READ CREDS.JSON (with more logging) ---
async function markBotLinked() {
  if (!botSettings.markBotLinkedTimestamp) {
    let timestampToUse = null;
    // Ensure global.sessionName is set in index.js for this to work
    const sessionFolderName = global.sessionName || 'session'; // Get the session folder name
    const credsFilePath = path.join(process.cwd(), sessionFolderName, 'creds.json');
    

    try {
        const credsData = await fs.readFile(credsFilePath, 'utf8');
        const credsJson = JSON.parse(credsData);
        
        

        // Check if lastAccountSyncTimestamp exists and is a number (it's in seconds)
        if (credsJson && typeof credsJson.lastAccountSyncTimestamp === 'number' && credsJson.lastAccountSyncTimestamp > 1000000000) {
            timestampToUse = credsJson.lastAccountSyncTimestamp * 1000; // Convert to milliseconds
            
        } else {
            
        }
    } catch (error) {
        // creds.json not found or parsing error, fallback to Date.now()
        
        
    }

    // If no timestamp was retrieved from creds.json, use the current time
    if (timestampToUse === null) {
        timestampToUse = Date.now();
        
    }

    botSettings.markBotLinkedTimestamp = timestampToUse; // This should now always be a number
    await saveBotSettings();
    
  } else {
    
  }
}
// --- END OF MODIFIED markBotLinked FUNCTION ---

function getUptime() {
  if (botSettings.markBotLinkedTimestamp) {
    const startTime = botSettings.markBotLinkedTimestamp;
    const currentTime = Date.now();
    const difference = currentTime - startTime;

    const seconds = Math.floor(difference / 1000) % 60;
    const minutes = Math.floor(difference / (1000 * 60)) % 60;
    const hours = Math.floor(difference / (1000 * 60 * 60)) % 24;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    let uptimeParts = [];

    if (days >= 1) {
      uptimeParts.push(`${days}𝐝`);
    }
    if (hours >= 1) {
      uptimeParts.push(`${hours}𝐡`);
    }
    // Minutes and seconds always show
    uptimeParts.push(`${minutes}𝐦`);
    uptimeParts.push(`${seconds}𝐬`);

    return uptimeParts.join(' ');
  } else {
    return 'BOT HAS NOT RECORDED ITS LINK TIME YET.';
  }
}

async function setAutoViewStatus(enabled) {
  botSettings.autoViewStatus = enabled;
  await saveBotSettings();
  return `AUTO-VIEWING OF STATUSES IS NOW ${enabled ? 'on' : 'off'}.`;
}

function getAutoViewStatus() {
  return botSettings.autoViewStatus;
}

// --- NEW GETTERS FOR CONNECTION MESSAGE LOGIC ---
function getBotJid() {
  return botSettings.botJid;
}

function hasConnectionMessageBeenSent() {
  return botSettings.connectionMessageSent;
}
// --- END NEW GETTERS ---

module.exports = {
  loadBotSettings,
  saveBotSettings, // This is now more versatile as it accepts newSettings
  setAutotyping,
  getAutotypingStatus,
  setAutoRecording,
  getAutoRecordingStatus,
  setAutoBlockMorocco,
  getAutoBlockMoroccoStatus,
  setAutoKickMorocco,
  getAutoKickMoroccoStatus,
  setAntispam,
  getAntispamStatus,
  setSelfMode,
  getSelfModeStatus,
  setPublicMode,
  getPublicModeStatus,
  markBotLinked,
  getUptime,
  botSettings, // Kept for direct access if needed, though getters are preferred
  setAutoViewStatus,
  getAutoViewStatus,
  // --- NEW EXPORTS ---
  getBotJid,
  hasConnectionMessageBeenSent,
  // --- END NEW EXPORTS ---
};