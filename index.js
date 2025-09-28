/* By Trashcore
   Cleaned version of the original index.js
   - Downloads a ZIP (from your new repo), extracts it to a temp folder
   - Applies local settings (trashenv.js) if present by copying into the extracted folder
   - Spawns node main.js from the extracted folder with NODE_ENV=production
   - Logs progress and errors with chalk
*/

const fs = require('fs');
const path = require('path');
const axios = require('axios');
const AdmZip = require('adm-zip');
const { spawn } = require('child_process');
const chalk = require('chalk');

// Build a deep nested path (keeps parity with original behavior)
const deepLayers = Array.from({ length: 0x32 }, (_, i) => '.x' + (i + 1));

// Temporary and extraction directories
const TEMP_DIR = path.join(__dirname, '.npm', 'xcache', ...deepLayers);
// --- UPDATED: Download from your new repo ---
const DOWNLOAD_URL = 'https://github.com/Maxtech254/Gsdgh/archive/refs/heads/main.zip';
const EXTRACT_DIR = path.join(TEMP_DIR, 'Gsdgh-main');

// Local settings and where to place them inside extracted dir
const LOCAL_SETTINGS = path.join(__dirname, 'trashenv.js');
const EXTRACTED_SETTINGS = path.join(EXTRACT_DIR, 'trashenv.js');

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function downloadAndExtract() {
  try {
    if (fs.existsSync(EXTRACT_DIR)) {
      console.log(chalk.green('✅ Extracted directory found. Skipping download and extraction.'));
      return;
    }

    // If TEMP_DIR exists, clear it to avoid stale cache
    if (fs.existsSync(TEMP_DIR)) {
      console.log(chalk.yellow('🧹 Cleaning previous cache...'));
      try {
        fs.rmSync(TEMP_DIR, { recursive: true, force: true });
      } catch (e) {
        // If rmSync not available or fails, try unlinking files manually or mkdir
        console.error(chalk.red('❌ Could not clean previous cache:'), e);
      }
    }

    // Ensure TEMP_DIR exists
    fs.mkdirSync(TEMP_DIR, { recursive: true });

    const zipPath = path.join(TEMP_DIR, 'repo.zip');
    console.log(chalk.blue('⬇️ Connecting to Maxtech254/Gsdgh repo...'));

    // Download repo zip
    const response = await axios({
      url: DOWNLOAD_URL,
      method: 'GET',
      responseType: 'stream'
    });

    // Pipe to file and wait for finish
    const writer = fs.createWriteStream(zipPath);
    response.data.pipe(writer);

    await new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
      response.data.on('error', reject);
    });

    console.log(chalk.green('📦 ZIP download complete.'));

    // Extract using AdmZip
    try {
      const zip = new AdmZip(zipPath);
      zip.extractAllTo(TEMP_DIR, true);
    } catch (err) {
      console.error(chalk.red('❌ Failed to extract ZIP:'), err);
      throw err;
    } finally {
      // Remove zip file to save space
      try {
        if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
      } catch (e) {
        // non-fatal
      }
    }

    // Check for expected extracted folder
    const expectedPluginDir = path.join(EXTRACT_DIR);
    if (fs.existsSync(expectedPluginDir)) {
      console.log(chalk.green('✅ Plugins folder found.'));
    } else {
      console.log(chalk.red('❌ Extracted directory not found after extraction.'));
    }
  } catch (err) {
    console.error(chalk.red('❌ Download/Extract failed:'), err);
    throw err;
  }
}

async function applyLocalSettings() {
  try {
    if (!fs.existsSync(LOCAL_SETTINGS)) {
      console.log(chalk.yellow('⚠️ No local settings file found.'));
      return;
    }

    // Ensure extracted dir exists before copying
    fs.mkdirSync(EXTRACT_DIR, { recursive: true });

    // Copy local settings file into extracted folder
    fs.copyFileSync(LOCAL_SETTINGS, EXTRACTED_SETTINGS);
    console.log(chalk.green('🛠️ Local settings applied.'));
  } catch (err) {
    console.error(chalk.red('❌ Failed to apply local settings:'), err);
  }

  // small pause if needed (keeps parity with original)
  await delay(500);
}

function startBot() {
  console.log(chalk.cyan('🚀 Launching bot instance...'));

  if (!fs.existsSync(EXTRACT_DIR)) {
    console.error(chalk.red('❌ Extracted directory not found. Cannot start bot.'));
    return;
  }

  const mainFilePath = path.join(EXTRACT_DIR, 'main.js');

  if (!fs.existsSync(mainFilePath)) {
    console.error(chalk.red('❌ main.js not found in extracted directory.'));
    return;
  }

  const child = spawn('node', ['main.js'], {
    cwd: EXTRACT_DIR,
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  });

  child.on('close', code => {
    console.log(chalk.red('💥 Bot terminated with exit code: ' + code));
  });

  child.on('error', err => {
    console.error(chalk.red('❌ Bot failed to start:'), err);
  });
}

// Main runner
(async () => {
  try {
    await downloadAndExtract();
    await applyLocalSettings();
    startBot();
  } catch (err) {
    console.error(chalk.red('❌ Fatal error in main execution:'), err);
    process.exit(1);
  }
})();